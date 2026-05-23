import * as THREE from 'three';

const RED = 0xc82400;
const YELLOW = 0xfacc15;
const CYAN = 0x40e0d0;
const BLACK = 0x1a1a1a;

const CAMERA_PRESETS = {
  studio: { pos: [0, 1.8, 7], look: [0, 0.4, 0] },
  'letters-fly': { pos: [0.5, 2.2, 6], look: [0, 1, 0] },
  orbit: { pos: [3.2, 2.4, 5.5], look: [0, 0.8, 0] },
  cascade: { pos: [0, 0.8, 4.5], look: [0, -0.8, -2] },
  pivot: { pos: [0, 2, 6], look: [0, 0, 0] },
  'letters-spin': { pos: [0, 1.5, 5], look: [0, 0, 0] },
  'logo-ball': { pos: [0, 0.3, 3.8], look: [0, 0, 0] },
};

function makeDamierTexture(size = 512, a = '#f5e6e0', b = '#d4a574') {
  const c = document.createElement('canvas');
  c.width = size;
  c.height = size;
  const ctx = c.getContext('2d');
  const tile = size / 8;
  for (let y = 0; y < 8; y++) {
    for (let x = 0; x < 8; x++) {
      ctx.fillStyle = (x + y) % 2 === 0 ? a : b;
      ctx.fillRect(x * tile, y * tile, tile, tile);
    }
  }
  const tex = new THREE.CanvasTexture(c);
  tex.wrapS = tex.wrapT = THREE.RepeatWrapping;
  tex.repeat.set(4, 4);
  return tex;
}

const BALL_RADIUS = 0.35;
const GRAVITY = 7.2;
/** Rebond au sol (0–1) — proche 1 = rebonds très hauts. */
const FLOOR_RESTITUTION = 0.97;
/** Amortissement horizontal au contact sol (1 = aucune perte). */
const FLOOR_FRICTION = 0.993;
/** Rebond sur les bords de la scène. */
const WALL_RESTITUTION = 0.96;
/** Plafond souple : les boules peuvent frôler le haut de l’écran. */
const CEILING_Y = 5.6;
const CEILING_RESTITUTION = 0.94;
const FLOOR_TILT = Math.PI / 2.15;
const FLOOR_ORIGIN_Y = -0.05;
/** Normale du damier (face visible, Rx(-tilt) sur +Z local). */
const FLOOR_NORMAL = new THREE.Vector3(0, Math.sin(FLOOR_TILT), Math.cos(FLOOR_TILT));

function floorSurfaceY(x, z) {
  const ny = FLOOR_NORMAL.y;
  if (Math.abs(ny) < 1e-6) return FLOOR_ORIGIN_Y;
  return FLOOR_ORIGIN_Y - (FLOOR_NORMAL.z * z) / ny;
}

function clampBallOnFloor(mesh, radius = BALL_RADIUS) {
  const p = mesh.position;
  const yFloor = floorSurfaceY(p.x, p.z);
  const minY = yFloor + radius;
  if (p.y < minY) {
    p.y = minY;
    return true;
  }
  return false;
}

function bounceOnFloor(b, restitution = FLOOR_RESTITUTION) {
  const p = b.mesh.position;
  const yFloor = floorSurfaceY(p.x, p.z);
  const minY = yFloor + b.radius;
  if (p.y >= minY) return;

  p.y = minY;
  if (b.vy < 0) b.vy = -b.vy * restitution;
  b.vx *= FLOOR_FRICTION;
  b.vz *= FLOOR_FRICTION;
}

function lerp3(a, b, t) {
  return a.map((v, i) => v + (b[i] - v) * t);
}

/**
 * @param {HTMLCanvasElement} canvas
 */
export function createGenerique3D(canvas) {
  const scene = new THREE.Scene();
  scene.background = new THREE.Color(RED);
  scene.fog = new THREE.Fog(RED, 8, 22);

  const camera = new THREE.PerspectiveCamera(45, 1, 0.05, 100);
  camera.position.set(0, 1.8, 7);
  camera.lookAt(0, 0.4, 0);

  let renderer;
  try {
    renderer = new THREE.WebGLRenderer({ canvas, antialias: true, alpha: false });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.PCFSoftShadowMap;
    renderer.setClearColor(RED);
  } catch {
    return null;
  }

  scene.add(new THREE.AmbientLight(0xffffff, 0.55));
  const sun = new THREE.DirectionalLight(0xffffff, 1.1);
  sun.position.set(4, 8, 6);
  sun.castShadow = true;
  sun.shadow.mapSize.set(1024, 1024);
  scene.add(sun);

  const damierTex = makeDamierTexture();
  const floorMat = new THREE.MeshStandardMaterial({
    map: damierTex,
    roughness: 0.45,
    metalness: 0.08,
  });
  const floor = new THREE.Mesh(new THREE.PlaneGeometry(24, 24), floorMat);
  floor.rotation.x = -FLOOR_TILT;
  floor.position.y = FLOOR_ORIGIN_Y;
  floor.receiveShadow = true;
  scene.add(floor);

  const wall = new THREE.Mesh(
    new THREE.PlaneGeometry(30, 14),
    new THREE.MeshStandardMaterial({ color: RED, roughness: 0.9 }),
  );
  wall.position.set(0, 5, -8);
  scene.add(wall);

  const ballGeo = new THREE.SphereGeometry(BALL_RADIUS, 24, 24);
  const mats = {
    yellow: new THREE.MeshStandardMaterial({ color: YELLOW, roughness: 0.28, metalness: 0.05 }),
    cyan: new THREE.MeshStandardMaterial({ color: CYAN, roughness: 0.28, metalness: 0.05 }),
    black: new THREE.MeshStandardMaterial({ color: BLACK, roughness: 0.35, metalness: 0.1 }),
  };

  /** @type {{ mesh: THREE.Mesh, vx: number, vy: number, vz: number, radius: number, mode: string, orbitAngle?: number, orbitR?: number, orbitY?: number, orbitSpeed?: number }[]} */
  const balls = [];
  let sceneId = 'studio';
  let camFrom = CAMERA_PRESETS.studio.pos;
  let camTo = CAMERA_PRESETS.studio.pos;
  let lookFrom = CAMERA_PRESETS.studio.look;
  let lookTo = CAMERA_PRESETS.studio.look;
  let camT = 1;
  let floorVisible = true;
  let cascadeTimer = 0;

  function addBall(color, x, y, z, vx, vy, vz) {
    const mesh = new THREE.Mesh(ballGeo, mats[color] || mats.yellow);
    mesh.castShadow = true;
    mesh.position.set(x, y, z);
    clampBallOnFloor(mesh);
    scene.add(mesh);
    balls.push({ mesh, vx, vy, vz, radius: BALL_RADIUS, mode: 'bounce' });
    return balls[balls.length - 1];
  }

  /** Spawn au-dessus du damier à (x, z). */
  function addBallAboveFloor(color, x, z, vx, vy, vz, lift = 1.2) {
    const y = floorSurfaceY(x, z) + BALL_RADIUS + lift;
    return addBall(color, x, y, z, vx, vy, vz);
  }

  function clearBalls() {
    for (const b of balls) {
      scene.remove(b.mesh);
    }
    balls.length = 0;
  }

  function seedLettersFly() {
    clearBalls();
    // Pas de boule jaune 3D : le O est le calque HTML entre M et T
    addBallAboveFloor('black', -1.4, 0.2, 0.1, 0.07, 0.05, 2.4);
    addBallAboveFloor('cyan', 2.6, -0.6, -0.11, 0.08, 0.12, 2.5);
    addBallAboveFloor('cyan', -2.6, -0.4, 0.13, 0.06, -0.09, 2.2);
  }

  function seedStudio(count = 5) {
    clearBalls();
    const specs = [
      ['yellow', -2, 0.5, 0.14, 0.08, 0.1, 3.2],
      ['cyan', 1.5, -1, -0.12, 0.1, 0.14, 3.6],
      ['black', -0.5, 1.2, 0.16, -0.06, -0.12, 2.8],
      ['yellow', 2.8, 0, -0.14, 0.05, -0.1, 3.0],
      ['cyan', -1.8, -0.8, 0.12, 0.08, 0.11, 2.6],
    ];
    for (let i = 0; i < Math.min(count, specs.length); i++) {
      const s = specs[i];
      addBallAboveFloor(s[0], s[1], s[2], s[3], s[4], s[5], s[6]);
    }
  }

  function seedOrbit() {
    clearBalls();
    const colors = ['yellow', 'yellow', 'yellow', 'cyan', 'yellow', 'cyan', 'yellow'];
    for (let i = 0; i < colors.length; i++) {
      const a = (i / colors.length) * Math.PI * 2;
      const r = 2.2 + (i % 3) * 0.3;
      const x = Math.cos(a) * r;
      const z = Math.sin(a) * r;
      const baseY = 1.2 + (i % 2) * 0.5;
      addBall(colors[i], x, floorSurfaceY(x, z) + BALL_RADIUS + baseY, z, 0, 0, 0);
      const b = balls[balls.length - 1];
      b.mode = 'orbit';
      b.orbitAngle = a;
      b.orbitR = r;
      b.orbitY = baseY;
      b.orbitSpeed = 0.7 + i * 0.08;
    }
  }

  function seedPivot() {
    clearBalls();
    addBallAboveFloor('yellow', -1.2, 0.5, 0.28, 0.12, 0.18, 3.2);
    addBallAboveFloor('cyan', 1, -0.3, -0.22, 0.14, -0.16, 2.8);
  }

  function seedLogoBall() {
    clearBalls();
    const b = addBall('yellow', 0, floorSurfaceY(0, 0) + BALL_RADIUS, 0, 0, 0, 0);
    b.mode = 'static';
  }

  function spawnCascadeBall() {
    const x = (Math.random() - 0.5) * 4;
    const z = -2 - Math.random() * 2;
    addBallAboveFloor(
      'yellow',
      x,
      z,
      (Math.random() - 0.5) * 0.16,
      0.04,
      0.18 + Math.random() * 0.1,
      5 + Math.random() * 2.5,
    );
  }

  function setCameraPreset(id) {
    const preset = CAMERA_PRESETS[id] || CAMERA_PRESETS.studio;
    camFrom = [camera.position.x, camera.position.y, camera.position.z];
    camTo = preset.pos;
    const look = new THREE.Vector3();
    camera.getWorldDirection(look);
    lookFrom = [camera.position.x + look.x, camera.position.y + look.y, camera.position.z + look.z];
    lookTo = preset.look;
    camT = 0;
  }

  function applyScene(id) {
    sceneId = id;
    setCameraPreset(id);
    floorVisible = id !== 'pivot' && id !== 'letters-spin' && id !== 'logo-ball';
    floor.visible = floorVisible;
    wall.visible = floorVisible;

    if (id === 'studio') {
      seedStudio(4);
    } else if (id === 'letters-fly') {
      seedLettersFly();
    } else if (id === 'orbit') {
      seedOrbit();
    } else if (id === 'cascade') {
      clearBalls();
      cascadeTimer = 0;
      for (let i = 0; i < 12; i++) spawnCascadeBall();
    } else if (id === 'pivot') {
      seedPivot();
    } else if (id === 'letters-spin') {
      clearBalls();
      addBallAboveFloor('black', 0, 0, 0.06, 0, 0.04, 1.3);
    } else if (id === 'logo-ball') {
      seedLogoBall();
    }
  }

  seedStudio(4);

  function updateCamera(dt) {
    if (camT < 1) {
      camT = Math.min(1, camT + dt * 1.8);
      const ease = camT * camT * (3 - 2 * camT);
      const pos = lerp3(camFrom, camTo, ease);
      const look = lerp3(lookFrom, lookTo, ease);
      camera.position.set(pos[0], pos[1], pos[2]);
      camera.lookAt(look[0], look[1], look[2]);
    }
  }

  function updateBalls(dt, t) {
    if (sceneId === 'cascade') {
      cascadeTimer += dt;
      if (cascadeTimer > 0.08 && balls.length < 38) {
        cascadeTimer = 0;
        spawnCascadeBall();
      }
    }

    const useFloor = floorVisible;
    const steps = Math.max(1, Math.min(4, Math.ceil(dt * 60)));
    const subDt = dt / steps;

    for (const b of balls) {
      if (b.mode === 'static') continue;

      if (b.mode === 'orbit') {
        b.orbitAngle += b.orbitSpeed * dt;
        const x = Math.cos(b.orbitAngle) * b.orbitR;
        const z = Math.sin(b.orbitAngle) * b.orbitR;
        b.mesh.position.x = x;
        b.mesh.position.z = z;
        const hover = b.orbitY + Math.sin(t * 2 + b.orbitAngle) * 0.15;
        b.mesh.position.y = useFloor
          ? floorSurfaceY(x, z) + b.radius + hover
          : hover;
        continue;
      }

      for (let s = 0; s < steps; s++) {
        b.vy -= GRAVITY * subDt;
        b.mesh.position.x += b.vx * subDt;
        b.mesh.position.y += b.vy * subDt;
        b.mesh.position.z += b.vz * subDt;

        if (useFloor) {
          bounceOnFloor(b);
        } else if (b.mesh.position.y < b.radius) {
          b.mesh.position.y = b.radius;
          if (b.vy < 0) b.vy = -b.vy * FLOOR_RESTITUTION;
        }

        if (b.mesh.position.y > CEILING_Y) {
          b.mesh.position.y = CEILING_Y;
          if (b.vy > 0) b.vy = -b.vy * CEILING_RESTITUTION;
        }

        if (Math.abs(b.mesh.position.x) > 5) {
          b.mesh.position.x = Math.sign(b.mesh.position.x) * 5;
          b.vx *= -WALL_RESTITUTION;
        }
        if (Math.abs(b.mesh.position.z) > 5) {
          b.mesh.position.z = Math.sign(b.mesh.position.z) * 5;
          b.vz *= -WALL_RESTITUTION;
        }
      }

      if (sceneId === 'pivot' || sceneId === 'letters-fly') {
        b.vx += Math.sin(t * 3 + b.mesh.position.x) * 0.004;
      }
    }
  }

  function resize() {
    const w = canvas.clientWidth || window.innerWidth;
    const h = canvas.clientHeight || window.innerHeight;
    if (!w || !h) return;
    camera.aspect = w / h;
    camera.updateProjectionMatrix();
    renderer.setSize(w, h, false);
  }

  applyScene('studio');

  return {
    setScene(id) {
      if (id !== sceneId) applyScene(id);
    },

    update(dt, audioTime = 0) {
      updateCamera(dt);
      updateBalls(dt, audioTime);
      renderer.render(scene, camera);
    },

    resize,

    dispose() {
      clearBalls();
      ballGeo.dispose();
      damierTex.dispose();
      floorMat.dispose();
      Object.values(mats).forEach((m) => m.dispose());
      renderer.dispose();
    },
  };
}

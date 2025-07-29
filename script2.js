document.addEventListener("DOMContentLoaded", () => {
  // Mathutils helper
  const Mathutils = {
    normalize: (val, min, max) => (val - min) / (max - min),
    interpolate: (normVal, min, max) => min + (max - min) * normVal,
    map: (val, min1, max1, min2, max2) => {
      val = Math.min(max1, Math.max(min1, val));
      return Mathutils.interpolate(Mathutils.normalize(val, min1, max1), min2, max2);
    }
  };




  const ww = window.innerWidth;
  const wh = window.innerHeight;

  // Renderer, scene, camera
  const renderer = new THREE.WebGLRenderer({ canvas: document.querySelector("canvas"), antialias: true });
  renderer.setSize(ww, wh);

  const scene = new THREE.Scene();
  scene.fog = new THREE.Fog(0x194794, 0.01, 100);

  const clock = new THREE.Clock();

  const camera = new THREE.PerspectiveCamera(60, ww / wh, 0.001, 200);
  const cameraGroup = new THREE.Group();
  cameraGroup.position.z = 400;
  cameraGroup.add(camera);
  scene.add(cameraGroup);


const points = [];
const segments = 200;
const a = 50;  // width of the lobes
const b = 20;  // vertical variation (height)
const zStep = 3; // stretch along the z-axis

for (let i = 0; i <= segments; i++) {
  const t = (i / segments) * Math.PI * 2;

  const x = a * Math.sin(t);
  const y = b * Math.sin(t) * Math.cos(t); // adds vertical wave
  const z = zStep * t; // makes it extend forward

  points.push(new THREE.Vector3(x, y, z));
}

const path = new THREE.CatmullRomCurve3(points);
path.tension = 0.5;
path.closed = false;

const tubeGeometry = new THREE.TubeGeometry(path, 3000, 4, 40, false);


  const texture = new THREE.TextureLoader().load("tex.jpg", (t) => {
    t.wrapS = t.wrapT = THREE.RepeatWrapping;
    t.repeat.set(15, 4);
  });

const tunnelShaderMaterial = new THREE.ShaderMaterial({
  uniforms: {
    time: { value: 0 },
    texture1: { value: texture },
    lightDirection: { value: new THREE.Vector3(1, 1, 1).normalize() },
    ambientIntensity: { value: 0.1 },  // Soft ambient light
    diffuseIntensity: { value: 0.70 },  // Control main light
    gammaCorrection: { value: 1.1 }    // sRGB correction
  },
  vertexShader: `
    uniform float time;
    varying vec2 vUv;
    varying vec3 vNormal;
    varying vec3 vViewPosition;

    void main() {
      vUv = uv;
      vNormal = normalize(normalMatrix * normal);

      vec3 pos = position;
      float offset = sin(pos.y * 2.0 + time * 2.0) * 0.2;
      pos += normal * offset;

      vec4 mvPosition = modelViewMatrix * vec4(pos, 1.0);
      vViewPosition = -mvPosition.xyz;

      gl_Position = projectionMatrix * mvPosition;
    }
  `,
  fragmentShader: `
    uniform sampler2D texture1;
    uniform vec3 lightDirection;
    uniform float ambientIntensity;
    uniform float diffuseIntensity;
    uniform float gammaCorrection;

    varying vec2 vUv;
    varying vec3 vNormal;
    varying vec3 vViewPosition;

    void main() {
      vec4 texColor = texture2D(texture1, vUv);

      // Basic lighting
      float diffuse = max(dot(normalize(vNormal), normalize(lightDirection)), 0.0);
      float lighting = ambientIntensity + diffuse * diffuseIntensity;

      // Apply lighting to texture color
      vec3 litColor = texColor.rgb * lighting;

      // Gamma correction
      litColor = pow(litColor, vec3(1.0 / gammaCorrection));

      gl_FragColor = vec4(litColor, texColor.a);
    }
  `,
  side: THREE.BackSide
});

tunnelShaderMaterial.uniforms.lightDirection.value.set(1, 1, 1).normalize();


  const tube = new THREE.Mesh(tubeGeometry, tunnelShaderMaterial);
  scene.add(tube);

  const spikeyTexture = new THREE.TextureLoader().load("loop.webp");
  const particleCount = 9000;

  const generateParticles = () => new THREE.Geometry();
  const particles1 = generateParticles();
  const particles2 = generateParticles();
  const particles3 = generateParticles();

  for (let i = 0; i < particleCount; i++) {
    particles1.vertices.push(new THREE.Vector3(Math.random() * 500 - 250, Math.random() * 50 - 25, Math.random() * 500 - 250));
    particles2.vertices.push(new THREE.Vector3(Math.random() * 500, Math.random() * 10 - 5, Math.random() * 500));
    particles3.vertices.push(new THREE.Vector3(Math.random() * 500, Math.random() * 10 - 5, Math.random() * 500));
  }

  const particleMaterial = new THREE.PointsMaterial({
    color: 0xa1ff14,
    size: 0.7,
    map: spikeyTexture,
    transparent: true,
    blending: THREE.AdditiveBlending,
    depthWrite: false
  });

  const particleSystem1 = new THREE.Points(particles1, particleMaterial);
  const particleSystem2 = new THREE.Points(particles2, particleMaterial);
  const particleSystem3 = new THREE.Points(particles3, particleMaterial);
  scene.add(particleSystem1, particleSystem2, particleSystem3);

  const pointLight = new THREE.PointLight(0xa1ff14, 0.5, 4, 0);
  scene.add(pointLight);

  const textMeshes = [];
  const loader = new THREE.FontLoader();

  // Audio
  const transitionSound = new Audio('transition.wav');
  transitionSound.volume = 0.5;

  const bgAudio = document.getElementById("bgAudio");
  if (bgAudio) bgAudio.volume = 0.4;

  // 🔓 Audio Unlock on First Interaction
  let userHasInteracted = false;
  function unlockAudioPlayback() {
    if (userHasInteracted) return;
    userHasInteracted = true;

    transitionSound.play().then(() => {
      transitionSound.pause();
      transitionSound.currentTime = 0;
    }).catch(() => {});

    if (bgAudio) {
      bgAudio.play().then(() => {
        bgAudio.pause();
        bgAudio.currentTime = 0;
      }).catch(() => {});
    }

    window.removeEventListener("click", unlockAudioPlayback);
    window.removeEventListener("touchstart", unlockAudioPlayback);
    window.removeEventListener("keydown", unlockAudioPlayback);
  }
  window.addEventListener("click", unlockAudioPlayback);
  window.addEventListener("touchstart", unlockAudioPlayback);
  window.addEventListener("keydown", unlockAudioPlayback);

  // Labels
  const triggeredTextLabels = new Set();
  const textsData = [
    { text: 'Presence', perc: 0.71 },
    { text: 'Resonance', perc: 0.77 },
    { text: 'Rhythm', perc: 0.83 },
    { text: 'Cycle', perc: 0.89 },
  ];

  loader.load('helvetiker_bold.typeface.json', font => {
    textsData.forEach(({ text, perc }) => {
      const geometry = new THREE.TextGeometry(text, {
        font,
        size: 0.5,
        height: 0,
        curveSegments: 5,
        bevelEnabled: false,
      });
      geometry.computeBoundingBox();
      geometry.center();

      const material = new THREE.MeshPhysicalMaterial({
        color: 0xffffff,
        emissive: 0xffffff,
        metalness: 0,
        roughness: 0,
      });

      const mesh = new THREE.Mesh(geometry, material);
      const position = path.getPointAt(perc);
      const lookAhead = path.getPointAt((perc + 0.01) % 1);

      mesh.position.copy(position);
      mesh.lookAt(lookAhead);
      mesh.rotateY(Math.PI);

      scene.add(mesh);
      textMeshes.push(mesh);
    });
  });

  let cameraRotationProxyX = Math.PI;
  let cameraRotationProxyY = 0.0;
  let cameraTargetPercentage = 0;
  let currentCameraPercentage = 0;
  const tubePerc = { percent: 0 };
  const cameraLerpSpeed = 0.05;

  function updateCameraPercentage(percentage) {
    const loopedPerc = percentage % 1;
    const p1 = path.getPointAt(loopedPerc);
    const nextPerc = Math.min(loopedPerc + 0.01, 1);
    const p2 = path.getPointAt(nextPerc);
    cameraGroup.position.copy(p1);
    cameraGroup.lookAt(p2);
    pointLight.position.copy(p2);
  }

// Exit position = slightly ahead of tunnel end
const exitPos = path.getPointAt(1).clone().add(path.getTangentAt(1).clone().multiplyScalar(20));

// Look target = exactly at tunnel end
const exitTarget = path.getPointAt(1);

// Out view = further away but centered
const outViewPos = exitPos.clone().add(new THREE.Vector3(0, 0, 100));
const outViewTarget = new THREE.Vector3(0, 0, 0); // Look at scene center


  function render() {
    const transitionProgress = gsap.utils.clamp(0, 1, gsap.utils.mapRange(0.99, 1, 0, 1, tubePerc.percent));
    if (transitionProgress <= 0.01) {
      const shakeIntensity = 0.02;
      cameraGroup.position.x += (Math.random() - 0.5) * shakeIntensity;
      cameraGroup.position.y += (Math.random() - 0.5) * shakeIntensity;
    }

    if (transitionProgress > 0.01) {
      const blendOut = new THREE.Vector3().lerpVectors(exitPos, outViewPos, transitionProgress);
      cameraGroup.position.copy(blendOut);
      const lookTarget = new THREE.Vector3().lerpVectors(exitTarget, outViewTarget, transitionProgress);
      cameraGroup.lookAt(lookTarget);
      pointLight.position.copy(lookTarget);
    } else {
      currentCameraPercentage += (cameraTargetPercentage - currentCameraPercentage) * cameraLerpSpeed;
      updateCameraPercentage(currentCameraPercentage);
    }

    camera.rotation.y += (cameraRotationProxyX - camera.rotation.y) / 15;
    camera.rotation.x += (cameraRotationProxyY - camera.rotation.x) / 15;

    tunnelShaderMaterial.uniforms.time.value = clock.getElapsedTime();
    particleSystem1.rotation.y += 0.00002 + Math.sin(clock.getElapsedTime()) * 0.00001;
    particleSystem2.rotation.y += 0.00003 + Math.cos(clock.getElapsedTime()) * 0.00001;
    particleSystem3.rotation.y += 0.00004 + Math.sin(clock.getElapsedTime()) * 0.00002;
    particleSystem2.rotation.x += 0.00005;
    particleSystem3.rotation.z += 0.00001;

    composer.render();
    requestAnimationFrame(render);
  }

  const composer = new THREE.EffectComposer(renderer);
  composer.setSize(ww, wh);
  const renderPass = new THREE.RenderPass(scene, camera);
  composer.addPass(renderPass)
  const bloomPass = new THREE.UnrealBloomPass(new THREE.Vector2(ww, wh), 0.99, 0.4, 0);
  bloomPass.renderToScreen = true;
  composer.addPass(bloomPass);

  gsap.registerPlugin(ScrollTrigger, ScrollSmoother);
  gsap.defaultEase = Linear.easeNone;

  let cinematicTimeline = gsap.timeline({ paused: true });
  const theEnd = document.getElementById("theend");

  function initHorizontalScroll() {
    const controller = new ScrollMagic.Controller();
    const horizontalSlide = new TimelineMax()
      .to("#js-slideContainer", 1, { x: "-20%" })
      .to("#js-slideContainer", 1, { x: "-40%" })
      .to("#js-slideContainer", 1, { x: "-60%" })
      .to("#js-slideContainer", 1, { x: "-80%" });

    new ScrollMagic.Scene({
      triggerElement: "#js-wrapper",
      triggerHook: "onLeave",
      duration: "400%"
    })
      .setPin("#js-wrapper")
      .setTween(horizontalSlide)
      .addTo(controller);
  }

  cinematicTimeline
    .to(cameraGroup.position, {
      x: 150,
      y: 70,
      z: 200,
      duration: 4,
      ease: "power2.out",
      onUpdate: () => {
        cameraGroup.lookAt(path.getPointAt(1));
      }
    }, 0)
    .to(theEnd, {
      scale: 1,
      autoAlpha: 1,
      duration: 2,
      ease: "power2.out",
      onComplete: () => {
        theEnd.classList.add("show");
        initHorizontalScroll();
      }
    }, 2);

  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: ".scrollTarget",
      start: "top top",
      end: "bottom 100%",
      scrub: 5,
    }
  });

  tl.to(tubePerc, {
    percent: 1,
    ease: Linear.easeNone,
    duration: 5,
    onUpdate: function () {
      cameraTargetPercentage = tubePerc.percent;

      textsData.forEach(({ text, perc }) => {
        if (tubePerc.percent >= perc && !triggeredTextLabels.has(text) && userHasInteracted) {
          try {
            transitionSound.currentTime = 0;
            transitionSound.play();
            triggeredTextLabels.add(text);
          } catch (e) {
            console.warn(`Audio failed to play for ${text}:`, e);
          }
        }
      });

      let progress = gsap.utils.mapRange(0.975, 1.0, 0, 1, tubePerc.percent);
      progress = gsap.utils.clamp(0, 1, progress);
      cinematicTimeline.progress(progress);
    }
  });

  document.addEventListener("mousemove", (evt) => {
    cameraRotationProxyX = 3.14;
    cameraRotationProxyY = Mathutils.map(evt.clientY, 0, window.innerHeight, -0.1, 0.1);
  });

  window.addEventListener("resize", () => {
    const width = window.innerWidth;
    const height = window.innerHeight;
    camera.aspect = width / height;
    camera.updateProjectionMatrix();
    renderer.setSize(width, height);
    composer.setSize(width, height);
  });

  requestAnimationFrame(render);

  const restartButton = document.getElementById("restartButton");
  if (restartButton) {
    restartButton.addEventListener("click", () => {
      window.location.href = "scene2.html";
    });
  }
});

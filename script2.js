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
  scene.fog = new THREE.Fog(0xffffff, 0.01, 100);

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
      ambientIntensity: { value: 0.6 },  // Soft ambient light
      diffuseIntensity: { value: 0.7 },  // Control main light
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
    color: 0x2596be,
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

  const pointLight = new THREE.PointLight(0x2596be, 0.5, 4, 0);
  scene.add(pointLight);

  const textMeshes = [];
  const loader = new THREE.FontLoader();

  // Labels
  const triggeredTextLabels = new Set();

  const textsData = [
    { text: 'Design\nflows in\nloops.', perc: 0.04, style: 'h1' },
    { text: 'Every loop leads forward.', perc: 0.12, style: 'p' },
    { text: 'Every pixel has purpose.', perc: 0.2, style: 'p' },
    { text: 'Not just seen.\nFelt.', perc: 0.28, style: 'p' },
    { text: 'We shape silence into meaning.', perc: 0.36, style: 'p' },
    { text: 'Time fades.\nDesign echoes.', perc: 0.44, style: 'p' },
    { text: 'Because true design doesn’t stop.\nIt pulses.\nIt returns.\nIt loops.', perc: 0.52, style: 'p' },
    { text: 'Our mission is to uncover the unseen.\nTo design not what is expected, but what is necessary.', perc: 0.6, style: 'p' },
    { text: 'LOOP is not a destination.\nIt’s a rhythm.\nA living dialogue between brand and soul.', perc: 0.68, style: 'p' },
    { text: 'In a world obsessed with outcomes,\n we focus on the essence\nthe flow, the feeling, \nthe forward motion.', perc: 0.80, style: 'p' },
    { text: 'Each project is a loop in itself: beginning with intent,\n shaped by insight, and returning to reflection.', perc: 0.84, style: 'p' },
    { text: 'We do not simply build websites—we sculpt digital landscapes, \nwhere form and function engage in quiet conversation.', perc: 0.92, style: 'p' },
    { text: 'At Loop, we believe design is a continuous journey \nA cycle where creativity and purpose intertwine endlessly.', perc: 0.98, style: 'p' },
  ];

  const textStyles = {
    h1: { size: 0.5, font: 'Boldonse_Regular.json', color: 0xffffff },
    h2: { size: 0.2, font: 'Boldonse_Regular.json', color: 0xffffff },
    p:  { size: 0.15, font: 'Boldonse_Regular.json', color: 0xffffff },
  };

  // Make sure you have these font files in your public path or server

  const fontPromises = {};

  // Load fonts in parallel and cache them
  const uniqueFonts = new Set(Object.values(textStyles).map(style => style.font));
  uniqueFonts.forEach(fontFile => {
    fontPromises[fontFile] = new Promise((resolve, reject) => {
      loader.load(fontFile, resolve, undefined, reject);
    });
  });

  // Once all fonts are loaded
  Promise.all(Object.values(fontPromises)).then(fonts => {
    const fontMap = {};
    Object.keys(fontPromises).forEach((key, i) => {
      fontMap[key] = fonts[i];
    });

    textsData.forEach(({ text, perc, style }) => {
      const styleDef = textStyles[style || 'p'];
      const font = fontMap[styleDef.font];

      const geometry = new THREE.TextGeometry(text, {
        font: font,
        size: styleDef.size,
        height: 0,
        curveSegments: 2,
        bevelEnabled: false,
      });

      geometry.computeBoundingBox();
      const bbox = geometry.boundingBox;

      // Calculate vertical height of the text block
      const textHeight = bbox.max.y - bbox.min.y;

      // Center geometry vertically and horizontally
      geometry.translate(0, -textHeight / 2, 0);
      geometry.center();

      const materialtext = new THREE.MeshPhysicalMaterial({
        color: styleDef.color,
        emissive: 0xffffff,
        metalness: 0,
        roughness: 0.5,
      });

      const mesh = new THREE.Mesh(geometry, materialtext);

      // Position on the curve
      const position = path.getPointAt(perc);
      const lookAhead = path.getPointAt((perc + 0.01) % 1);

      mesh.position.copy(position);
      mesh.lookAt(lookAhead);
      mesh.rotateY(Math.PI);

      scene.add(mesh);
      textMeshes.push(mesh);
    });

  }).catch(err => {
    console.error('Failed to load fonts:', err);
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
  const bloomPass = new THREE.UnrealBloomPass(new THREE.Vector2(ww, wh), 1, 1, 0);

  bloomPass.renderToScreen = true;
  composer.addPass(bloomPass);

  gsap.registerPlugin(ScrollTrigger, ScrollSmoother);
  gsap.defaultEase = Linear.easeNone;

  let cinematicTimeline = gsap.timeline({ paused: true });
  const theEnd = document.getElementById("theend");

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

// ... your existing code above ...
// After you create textMeshes and before your GSAP timeline definition:

// --- Synchronize text reveal with transition.mp3 on scroll up AND scroll down ---

// You need to track which labels are visible and play the sound on reveal in either direction.
// We'll use a Set for revealed, and a Set for currently visible, and on each update check for changes.

const revealedLabels = new Set();

// Make sure textMeshes are hidden initially
textMeshes.forEach(mesh => mesh.visible = false);

// Update function for GSAP timeline (scroll both ways)
tl.to(tubePerc, {
  percent: 1,
  ease: Linear.easeNone,
  duration: 5,
  onUpdate: function () {
    cameraTargetPercentage = tubePerc.percent;

    textsData.forEach(({ text, perc }, idx) => {
      // When scrolling DOWN, reveal if not revealed yet
      if (tubePerc.percent >= perc && !revealedLabels.has(text)) {
        textMeshes[idx].visible = true;
        revealedLabels.add(text);
        // Play transition sound
        if (window.APP && APP.sounds && APP.sounds.transition) {
          APP.sounds.transition.play();
        }
      }
      // When scrolling UP, hide and allow sound again on re-reveal
      if (tubePerc.percent < perc && revealedLabels.has(text)) {
        textMeshes[idx].visible = true;
        revealedLabels.delete(text);
      }
    });

    // Cinematic timeline progress unchanged
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


// Create APP namespace if not already present
window.APP = window.APP || {};
APP.sounds = {}; // Using an object for easier access by name
APP.data = {
  sounds: [
    {
      name: "ambient",
      file: "assets/sounds/maxkomusic-space-heroes.mp3", // correct path to file
      loop: true,
      volume: 0.1,
      html5: true
    },
    {
      name: "click",
      file: "assets/sounds/click.mp3",
      loop: false,
      volume: 1.0,
      html5: true
    },
    {
      name: "transition",
      file: "assets/sounds/transition.mp3",
      loop: false,
      volume: 0.2,
      html5: true
    }
  ]
};

// Initialize default sound settings
$.each(APP.data.sounds, function (i, s) {
  const sound = new Howl({
    src: s.file,
    loop: s.loop,
    volume: s.volume,
    html5: s.html5,
    onend: function () {
      console.log(`[Howler] Finished playing: ${s.name}`);
    },
    onload: function() {
      console.log(`[Howler] Sound loaded: ${s.name}`);
    },
    onloaderror: function(id, err) {
      console.error(`[Howler] Error loading sound ${s.name} (ID: ${id}):`, err);
    }
  });
  APP.sounds[s.name] = sound;
  // Store the initial volume for each sound
  APP.sounds[s.name].initialVolume = s.volume;
});

// Global Mute Function
APP.muteAll = function (ignoreGlobalSoundState) {
  console.log("------------------------------------");
  console.log("[MUTE] Muting all sounds...");
  $(".footer-sound .sbar").addClass("noAnim");

  for (const soundName in APP.sounds) {
    if (APP.sounds.hasOwnProperty(soundName)) {
      const sound = APP.sounds[soundName];
      if (sound.playing()) {
        console.log(`[MUTE] Fading sound "${soundName}" from ${sound.volume()} to 0`);
        sound.fade(sound.volume(), 0, 500); // 500ms fade
      } else {
        console.log(`[MUTE] Sound "${soundName}" is not playing, not fading. Setting volume to 0.`);
        sound.volume(0); // Ensure volume is 0 even if not playing
      }
    }
  }

  if (!ignoreGlobalSoundState) {
    APP.soundOn = false;
    console.log("[MUTE] APP.soundOn set to false.");
  }
  console.log("------------------------------------");
};

// Global Unmute Function
APP.unMuteAll = function (ignoreGlobalSoundState) {
  console.log("------------------------------------");
  console.log("[UNMUTE] Unmuting all sounds...");
  $(".footer-sound .sbar").removeClass("noAnim");

  for (const soundName in APP.sounds) {
    if (APP.sounds.hasOwnProperty(soundName)) {
      const sound = APP.sounds[soundName];
      console.log(`[UNMUTE] Fading sound "${soundName}" from ${sound.volume()} to ${sound.initialVolume}`);
      sound.fade(sound.volume(), sound.initialVolume, 500); // 500ms fade

      // If a sound was completely stopped (not just faded), ensure it plays again if it should
      // This is crucial for ambient loops
      if (!sound.playing() && sound.initialVolume > 0 && sound.loop()) {
        console.log(`[UNMUTE] Sound "${soundName}" was not playing, restarting it.`);
        sound.play();
      }
    }
  }

  if (!ignoreGlobalSoundState) {
    APP.soundOn = true;
    console.log("[UNMUTE] APP.soundOn set to true.");
  }
  console.log("------------------------------------");
};

// Initial state, assume sound is on until cookie says otherwise
APP.soundOn = true;

// Handle browser tab visibility
(function () {
  let hidden, visibilityChange;
  if (typeof document.hidden !== "undefined") {
    hidden = "hidden";
    visibilityChange = "visibilitychange";
  } else if (typeof document.mozHidden !== "undefined") {
    hidden = "mozHidden";
    visibilityChange = "mozvisibilitychange";
  } else if (typeof document.msHidden !== "undefined") {
    hidden = "msHidden";
    visibilityChange = "msvisibilitychange";
  } else if (typeof document.webkitHidden !== "undefined") {
    hidden = "webkitHidden";
    visibilityChange = "webkitvisibilitychange";
  }

  if (typeof document.addEventListener !== "undefined") { // Check if addEventListener is supported
    document.addEventListener(visibilityChange, () => {
      if (document[hidden]) {
        APP.hidden = true;
        console.log("[Visibility] Tab hidden, muting sounds (ignoreGlobalSoundState: true).");
        APP.muteAll(true);
      } else {
        APP.hidden = false;
        if (APP.soundOn) {
          console.log("[Visibility] Tab visible, unmuting sounds (ignoreGlobalSoundState: true) if APP.soundOn is true.");
          APP.unMuteAll(true);
        } else {
          console.log("[Visibility] Tab visible, but APP.soundOn is false, keeping muted.");
        }
      }
    });
  } else {
      console.warn("[Visibility] document.addEventListener not supported, tab visibility handling skipped.");
  }
})();


// Toggle sound on footer click
$(".footer-sound").click(function () {
  console.log("------------------------------------");
  console.log("[CLICK] Footer sound control clicked!");
  
  // Only play click sound when unmuting
  if (APP.soundOn) {
    APP.muteAll();
    setCookie("muted", 1);
  } else {
    APP.unMuteAll();
    setCookie("muted", 0);
    APP.sounds['click']?.play();
  }
  console.log(`[CLICK] APP.soundOn state after click: ${APP.soundOn}`);
  console.log("------------------------------------");
});

// Optional: Auto-enable sounds on user interaction
// This is CRUCIAL for mobile browsers and some desktop browsers to allow audio playback.
// The ambient sound should start here.

//Space Heroes by MaxKoMusic | https://maxkomusic.com/
//Music promoted by https://www.free-stock-music.com
//Creative Commons / Attribution-ShareAlike 3.0 Unported (CC BY-SA 3.0)
//https://creativecommons.org/licenses/by-sa/3.0/deed.en_US


["body", ".background", "#webgl"].forEach(selector => {
  $(selector).one('click', () => { // Use .one() to trigger only once
    console.log(`[User Interaction] User clicked on "${selector}", attempting to unlock and play ambient sound.`);
    if (APP.sounds["ambient"] && !APP.sounds["ambient"].playing()) {
      APP.sounds["ambient"].play();
      console.log("[User Interaction] Ambient sound play() called.");
    } else if (APP.sounds["ambient"] && APP.sounds["ambient"].playing()) {
      console.log("[User Interaction] Ambient sound already playing.");
    } else {
      console.warn("[User Interaction] Ambient sound object not found or not initialized.");
    }
  });
});

// Mouse tracking for interaction
APP.mouse = new THREE.Vector2(0, 0);
if (!APP.isMobile) {
  window.addEventListener("mousemove", e => {
    const x = e.clientX - window.innerWidth / 2;
    const y = e.clientY - window.innerHeight / 2;
    APP.mouse.set(x, y);
  });
}

// Reel close button sound
$('#reel .close').on('click', function () {
  console.log("[Reel Close] Click sound played.");
  // Only play click sound if not muted
  if (APP.soundOn) {
    APP.sounds["click"]?.play();
  }
  APP.hideReel?.();
});

// Helper: Set cookie
function setCookie(name, value, days = 30) {
  const date = new Date();
  date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
  document.cookie = `${name}=${value};expires=${date.toUTCString()};path=/`;
}

// Helper: Get cookie
function getCookie(name) {
  const nameEQ = name + "=";
  const ca = document.cookie.split(';');
  for (let i = 0; i < ca.length; i++) {
    let c = ca[i];
    while (c.charAt(0) === ' ') c = c.substring(1, c.length);
    if (c.indexOf(nameEQ) === 0) return c.substring(nameEQ.length, c.length);
  }
  return null;
}

// Auto-resume sound state based on cookie 
$(document).ready(function () {
  console.log("[Document Ready] Checking cookie for sound state.");
  const muted = getCookie("muted");
  if (muted === "1") {
    console.log("[Document Ready] 'muted' cookie found (value: 1). Muting all sounds.");
    APP.muteAll();
    APP.soundOn = false; // Ensure APP.soundOn reflects the muted state
  } else {
    console.log("[Document Ready] 'muted' cookie not found or value is 0. Unmuting all sounds (if not already).");
    // Ensure sounds are at their initial volumes if not explicitly muted by cookie
    APP.unMuteAll();
    APP.soundOn = true; // Ensure APP.soundOn reflects the unmuted state
  }
});


document.body.addEventListener('click', function() {
  if (APP.sounds['click']) {
    APP.sounds['click'].play();
  }
});


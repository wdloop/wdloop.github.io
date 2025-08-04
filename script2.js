// --- DOM Content Loaded (THREE.js and GSAP Logic) ---
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
  
  let ww = window.innerWidth;
  let wh = window.innerHeight;
  
  // Renderer, scene, camera
  const renderer = new THREE.WebGLRenderer({ canvas: document.querySelector("canvas"), antialias: true });
  renderer.setSize(ww, wh);
  const scene = new THREE.Scene();
  scene.fog = new THREE.Fog(0x000000, 0.01, 100);
  const clock = new THREE.Clock();
  const camera = new THREE.PerspectiveCamera(60, ww / wh, 0.001, 200);
  const cameraGroup = new THREE.Group();
  cameraGroup.add(camera);
  scene.add(cameraGroup);
  
  // Tunnel curve
  const points = [];
  const segments = 200;
  const a = 50; // width of the lobes
  const b = 20; // vertical variation (height)
  const zStep = 3; // stretch along the z-axis
  for (let i = 0; i <= segments; i++) {
    const t = (i / segments) * Math.PI * 2;
    const x = a * Math.sin(t);
    const y = b * Math.sin(t) * Math.cos(t);
    const z = zStep * t;
    points.push(new THREE.Vector3(x, y, z));
  }
  const path = new THREE.CatmullRomCurve3(points);
  path.tension = 0.5;
  path.closed = false;
  const tubeGeometry = new THREE.TubeGeometry(path, 3000, 4, 40, false);
  
  // Calculate initial camera position (outside tunnel)
  const startPoint = path.getPointAt(0);
  const startTangent = path.getTangentAt(0);
  const initialCameraPosition = startPoint.clone().sub(startTangent.clone().multiplyScalar(100));
  
  // Set initial camera position
  cameraGroup.position.copy(initialCameraPosition);
  cameraGroup.lookAt(startPoint);
  
  // Store initial values for reset
  const initialCameraState = {
    position: initialCameraPosition.clone(),
    lookAt: startPoint.clone()
  };
  
  // Tunnel material (shader)
  const texture = new THREE.TextureLoader().load("tex.jpg", (t) => {
    t.wrapS = t.wrapT = THREE.RepeatWrapping;
    t.repeat.set(15, 4);
  });
  const tunnelShaderMaterial = new THREE.ShaderMaterial({
    uniforms: {
      time: { value: 0 },
      texture1: { value: texture },
      lightDirection: { value: new THREE.Vector3(1, 1, 1).normalize() },
      ambientIntensity: { value: 0.44 },
      diffuseIntensity: { value: 0.20 },
      gammaCorrection: { value: 0.51 }
    },
    transparent: false,
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
        float diffuse = max(dot(normalize(vNormal), normalize(lightDirection)), 0.0);
        float lighting = ambientIntensity + diffuse * diffuseIntensity;
        vec3 litColor = texColor.rgb * lighting;
        litColor = pow(litColor, vec3(1.0 / gammaCorrection));
        gl_FragColor = vec4(litColor, texColor.a);
      }
    `,
    side: THREE.DoubleSide
  });
  tunnelShaderMaterial.uniforms.lightDirection.value.set(1, 1, 1).normalize();
  const tube = new THREE.Mesh(tubeGeometry, tunnelShaderMaterial);
  scene.add(tube);
  
  // Particles
  const spikeyTexture = new THREE.TextureLoader().load("loop.webp");
  const particleCount = 6000;
  function generateParticles() {
    return new THREE.Geometry();
  }
  const particles1 = generateParticles();
  const particles2 = generateParticles();
  const particles3 = generateParticles();
  for (let i = 0; i < particleCount; i++) {
    particles1.vertices.push(new THREE.Vector3(Math.random() * 500 - 250, Math.random() * 50 - 25, Math.random() * 500 - 250));
    particles2.vertices.push(new THREE.Vector3(Math.random() * 500, Math.random() * 10 - 5, Math.random() * 500));
    particles3.vertices.push(new THREE.Vector3(Math.random() * 500, Math.random() * 10 - 5, Math.random() * 500));
  }
  const particleMaterial = new THREE.PointsMaterial({
    color: 0xffffff,
    size: 0.5,
    map: spikeyTexture,
    transparent: true,
    blending: THREE.AdditiveBlending,
    depthWrite: false
  });
  const particleSystem1 = new THREE.Points(particles1, particleMaterial);
  const particleSystem2 = new THREE.Points(particles2, particleMaterial);
  const particleSystem3 = new THREE.Points(particles3, particleMaterial);
  scene.add(particleSystem1, particleSystem2, particleSystem3);
  const pointLight = new THREE.PointLight(0xffffff, 0.5, 4, 0);
  scene.add(pointLight);
  
  // Texts inside tunnel
  const textMeshes = [];
  const loader = new THREE.FontLoader();
  const textsData = [
    { text: 'Design\n\nflows in\n\nloops.', perc: 0.08, style: 'h1' },
    { text: 'Every loop leads forward.', perc: 0.12, style: 'p' },
    { text: 'Every pixel has purpose.', perc: 0.2, style: 'p' },
    { text: 'Not just seen.\n\nFelt.', perc: 0.28, style: 'p' },
    { text: 'We shape silence into meaning.', perc: 0.36, style: 'p' },
    { text: 'Time fades.\n\nDesign echoes.', perc: 0.44, style: 'p' },
    { text: 'Because true design doesnt stop.\n\nIt pulses.\n\nIt returns.\n\nIt loops.', perc: 0.52, style: 'p' },
    { text: 'Our mission is to uncover the unseen.\n\nTo design not what is expected, but what is necessary.', perc: 0.6, style: 'p' },
    { text: 'LOOP is not a destination.\n\nIts a rhythm.\n\nA living dialogue between brand and soul.', perc: 0.68, style: 'p' },
    { text: 'In a world obsessed with outcomes,\n\n we focus on the essence\n\nthe flow, the feeling, \n\nthe forward motion.', perc: 0.80, style: 'p' },
    { text: 'Each project is a loop in itself: beginning with intent,\n\nshaped by insight, and returning to reflection.', perc: 0.84, style: 'p' },
 ];
  const textStyles = {
    h1: { size: 0.5, font: 'Boldonse_Regular.json', color: 0x000 },
    p: { size: 0.15, font: 'Boldonse_Regular.json', color: 0x000 }
  };
  
  // Initialize variables that will be used in the timeline
  let tl;
  let hasStartedScrolling = false;
  
  // Load fonts in parallel and cache them
  const fontPromises = {};
  const uniqueFonts = new Set(Object.values(textStyles).map(style => style.font));
  uniqueFonts.forEach(fontFile => {
    fontPromises[fontFile] = new Promise((resolve, reject) => {
      loader.load(fontFile, resolve, undefined, reject);
    });
  });
  
  Promise.all(Object.values(fontPromises)).then(fonts => {
    const fontMap = {};
    Object.keys(fontPromises).forEach((key, i) => {
      fontMap[key] = fonts[i];
    });
    
    // Tunnel texts - CENTERED VERSION
    textsData.forEach(({ text, perc, style }) => {
      const styleDef = textStyles[style || 'p'];
      const font = fontMap[styleDef.font];
      
      // Split text by newlines to handle multi-line text
      const lines = text.split('\n');
      const lineMeshes = [];
      const lineHeight = styleDef.size * 1.2; // Adjust line height as needed
      
      // Create a group to hold all lines of text
      const textGroup = new THREE.Group();
      
      // Create mesh for each line
      lines.forEach((line, lineIndex) => {
        const geometry = new THREE.TextGeometry(line, {
          font,
          size: styleDef.size,
          height: 0,
          curveSegments: 2,
          bevelEnabled: false,
        });
        
        // Center each line horizontally
        geometry.computeBoundingBox();
        const textWidth = geometry.boundingBox.max.x - geometry.boundingBox.min.x;
        geometry.translate(-textWidth / 2, 0, 0);
        
        const materialtext = new THREE.MeshPhysicalMaterial({
          color: styleDef.color,
          emissive: 0x000,
          metalness: 0,
          roughness: 0.5,
        });
        
        const mesh = new THREE.Mesh(geometry, materialtext);
        
        // Position each line vertically (center the entire block)
        const yPos = (lineIndex - (lines.length - 1) / 2) * lineHeight;
        mesh.position.y = yPos;
        
        textGroup.add(mesh);
        lineMeshes.push(mesh);
      });
      
      // Position the group on the curve
      const position = path.getPointAt(perc);
      textGroup.position.copy(position);
      
      // Calculate rotation to face camera properly
      const tangent = path.getTangentAt(perc);
      const lookAtPoint = position.clone().add(tangent);
      textGroup.lookAt(lookAtPoint);
      
      // Adjust rotation to be upright and centered
      textGroup.rotateY(Math.PI);      // Face the camera
      
      scene.add(textGroup);
      textMeshes.push(textGroup);
    });
    
    // Create timeline after meshes are created
    createTimeline();
    
  }).catch(err => {
    console.error('Failed to load fonts:', err);
    // Still create timeline even if fonts fail to load
    createTimeline();
  });
  
  let cameraRotationProxyX = 0;
  let cameraRotationProxyY = 0.0;
  let cameraTargetPercentage = 0;
  let currentCameraPercentage = 0;
  const tubePerc = { percent: -0.1 }; // Start outside tunnel
  const cameraLerpSpeed = 0.02; // Slower camera movement for smoother scrolling
  
  function updateCameraPercentage(percentage) {
    if (percentage < 0) {
      // Outside tunnel: interpolate to entrance
      const outsideProgress = gsap.utils.clamp(0, 1, (percentage + 0.1) / 0.1);
      cameraGroup.position.lerpVectors(initialCameraState.position, initialCameraState.lookAt, outsideProgress);
      cameraGroup.lookAt(initialCameraState.lookAt);
      pointLight.position.copy(initialCameraState.lookAt);
    } else {
      // Inside tunnel: original logic
      const delta = 0.02;
      const t1 = Math.min(percentage, 1 - delta);
      const t2 = Math.min(percentage + delta, 1);
      const p1 = path.getPointAt(t1);
      const p2 = path.getPointAt(t2);
      cameraGroup.position.set(p1.x, p1.y, p1.z);
      const lookTarget = new THREE.Vector3(p2.x, p2.y, p2.z);
      cameraGroup.lookAt(lookTarget);
      pointLight.position.copy(lookTarget);
    }
  }
  
  function render() {
    // Only update camera position if scrolling has started
    if (hasStartedScrolling) {
      const transitionProgress = gsap.utils.clamp(0, 1, gsap.utils.mapRange(0.999999, 1, 0, 1, tubePerc.percent));
      if (transitionProgress <= 0.01) {
        const shakeIntensity = 0.02;
        cameraGroup.position.x += (Math.random() - 0.5) * shakeIntensity;
        cameraGroup.position.y += (Math.random() - 0.5) * shakeIntensity;
      }
      
      const scrollPercent = tubePerc.percent;
      if (scrollPercent > 1.0) {
        const blendOut = new THREE.Vector3().lerpVectors(path.getPointAt(1), path.getPointAt(1).clone().add(new THREE.Vector3(0, 0, 100)), gsap.utils.clamp(0, 1, (scrollPercent - 1.0) / 0.15));
        cameraGroup.position.copy(blendOut);
        
        if (scrollPercent > 1.15) {
          const farZ = gsap.utils.mapRange(1.15, 1.5, path.getPointAt(1).z + 100, path.getPointAt(1).z + 400, scrollPercent);
          cameraGroup.position.z = farZ;
        }
        
        const lookTarget = new THREE.Vector3().lerpVectors(path.getPointAt(1), new THREE.Vector3(0, 0, 0), gsap.utils.clamp(0, 1, (scrollPercent - 1.0) / 0.15));
        cameraGroup.lookAt(lookTarget);
        pointLight.position.copy(lookTarget);
      } else {
        currentCameraPercentage += (cameraTargetPercentage - currentCameraPercentage) * cameraLerpSpeed;
        const yOffset = gsap.utils.mapRange(0, 1, -20, 20, currentCameraPercentage);
        updateCameraPercentage(currentCameraPercentage, yOffset);
      }
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
  
  // Postprocessing
  const composer = new THREE.EffectComposer(renderer);
  composer.setSize(ww, wh);
  const renderPass = new THREE.RenderPass(scene, camera);
  composer.addPass(renderPass);
  const bloomPass = new THREE.UnrealBloomPass(new THREE.Vector2(ww, wh), 1, 1, 0);
  bloomPass.renderToScreen = true;
  composer.addPass(bloomPass);
  
  gsap.registerPlugin(ScrollTrigger, ScrollSmoother);
  gsap.defaultEase = Linear.easeNone;
  
  const theEnd = document.getElementById("theend");
  let cinematicTimeline = gsap.timeline({ paused: true });
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
    
  // Function to create the timeline
  function createTimeline() {
    tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".scrollTarget",
        start: "top top",
        end: "bottom 300%", // Increased scroll distance for slower scrolling
        scrub: 3, // Increased scrub value for smoother scrolling
        onEnter: () => {
          hasStartedScrolling = true;
        },
        onLeaveBack: () => {
          hasStartedScrolling = false;
          // Reset camera to initial position when scrolling back to top
          cameraGroup.position.copy(initialCameraState.position);
          cameraGroup.lookAt(initialCameraState.lookAt);
        }
      }
    });
    
    // Initialize all text meshes as invisible
    textMeshes.forEach(mesh => {
      if (mesh) mesh.visible = false;
    });
    
    tl.to(tubePerc, {
      percent: 1.1,
      ease: Linear.easeNone,
      duration: 10, // Increased duration for slower animation
      onUpdate: function () {
        cameraTargetPercentage = tubePerc.percent;
        const scrollPercent = tubePerc.percent;
        
        // Handle text visibility only if meshes exist
        if (textMeshes.length > 0) {
          if (scrollPercent < 0) {
            textMeshes.forEach(mesh => {
              if (mesh) mesh.visible = false;
            });
          } else {
            const visibilityRange = 0.1;
            textsData.forEach(({ text, perc }, idx) => {
              if (idx < textMeshes.length && textMeshes[idx]) {
                const isVisible = Math.abs(scrollPercent - perc) <= visibilityRange;
                textMeshes[idx].visible = isVisible;
              }
            });
          }
        }
        
        // Camera movement
        const yOffset = gsap.utils.mapRange(0, 1, -20, 20, scrollPercent);
        if (scrollPercent <= 1.0) {
          currentCameraPercentage += (cameraTargetPercentage - currentCameraPercentage) * cameraLerpSpeed;
          updateCameraPercentage(currentCameraPercentage, yOffset);
        }
        
        // Cinematic transition
        let progress = gsap.utils.mapRange(1.0, 1.15, 0, 1, tubePerc.percent);
        progress = gsap.utils.clamp(0, 1, progress);
        cinematicTimeline.progress(progress);
      }
    });
  }
  
  document.addEventListener("mousemove", (evt) => {
    cameraRotationProxyX = 3.14;
    cameraRotationProxyY = Mathutils.map(evt.clientY, 0, window.innerHeight, -0.1, 0.1);
  });
  
  window.addEventListener("resize", () => {
    ww = window.innerWidth;
    wh = window.innerHeight;
    camera.aspect = ww / wh;
    camera.updateProjectionMatrix();
    renderer.setSize(ww, wh);
    composer.setSize(ww, wh);
  });
  
  requestAnimationFrame(render);
});

// --- Global Application State and Utilities ---
window.APP = window.APP || {};
APP.sounds = {}; // Using an object for easier access by name
APP.data = {
  sounds: [
    {
      name: "ambient",
      file: "assets/sounds/maxkomusic-space-heroes.mp3", // correct path to file
      loop: true,
      volume: 0.01,
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
$.each(APP.data.sounds, function (i, s) {
  const sound = new Howl({
    src: s.file,
    loop: s.loop,
    volume: s.volume,
    html5: s.html5,
    onend: function () {
      console.log(`[Howler] Finished playing: ${s.name}`);
    },
    onload: function () {
      console.log(`[Howler] Sound loaded: ${s.name}`);
    },
    onloaderror: function (id, err) {
      console.error(`[Howler] Error loading sound ${s.name} (ID: ${id}):`, err);
    }
  });
  APP.sounds[s.name] = sound;
  APP.sounds[s.name].initialVolume = s.volume;
});

// Global Mute Function
APP.muteAll = function (ignoreGlobalSoundState) {
  $(".footer-sound .sbar").addClass("noAnim");
  for (const soundName in APP.sounds) {
    if (APP.sounds.hasOwnProperty(soundName)) {
      const sound = APP.sounds[soundName];
      if (sound.playing()) {
        sound.fade(sound.volume(), 0, 500); // 500ms fade
      } else {
        sound.volume(0); // Ensure volume is 0 even if not playing
      }
    }
  }
  if (!ignoreGlobalSoundState) {
    APP.soundOn = false;
  }
};

// Global Unmute Function
APP.unMuteAll = function (ignoreGlobalSoundState) {
  $(".footer-sound .sbar").removeClass("noAnim");
  for (const soundName in APP.sounds) {
    if (APP.sounds.hasOwnProperty(soundName)) {
      const sound = APP.sounds[soundName];
      sound.fade(sound.volume(), sound.initialVolume, 500); // 500ms fade
      // If a sound was completely stopped (not just faded), ensure it plays again if it should
      // This is crucial for ambient loops
      if (!sound.playing() && sound.initialVolume > 0 && sound.loop()) {
        sound.play();
      }
    }
  }
  if (!ignoreGlobalSoundState) {
    APP.soundOn = true;
  }
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
        APP.muteAll(true);
      } else {
        APP.hidden = false;
        if (APP.soundOn) {
          APP.unMuteAll(true);
        }
      }
    });
  }
})();

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

// Mouse tracking for interaction
APP.mouse = new THREE.Vector2(0, 0);
if (!APP.isMobile) { // APP.isMobile is not defined in your original code. Keeping it as is.
  window.addEventListener("mousemove", e => {
    const x = e.clientX - window.innerWidth / 2;
    const y = e.clientY - window.innerHeight / 2;
    APP.mouse.set(x, y);
  });
}

// --- Event Listeners and Initializers (outside DOMContentLoaded) ---
// Toggle sound on footer click
$(".footer-sound").click(function () {
  // Only play click sound when unmuting
  if (APP.soundOn) {
    APP.muteAll();
    setCookie("muted", 1);
  } else {
    APP.unMuteAll();
    setCookie("muted", 0);
    APP.sounds['click']?.play();
  }
});

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

// Reel close button sound
$('#reel .close').on('click', function () {
  console.log("[Reel Close] Click sound played.");
  // Only play click sound if not muted
  if (APP.soundOn) {
    APP.sounds["click"]?.play();
  }
  APP.hideReel?.();
});

// Auto-resume sound state based on cookie
$(document).ready(function () {
  const muted = getCookie("muted");
  if (muted === "1") {
    APP.muteAll();
    APP.soundOn = false; // Ensure APP.soundOn reflects the muted state
  } else {
    APP.unMuteAll();
    APP.soundOn = true; // Ensure APP.soundOn reflects the unmuted state
  }
});

document.body.addEventListener('click', function () {
  if (APP.sounds['click']) {
    APP.sounds['click'].play();
  }
});
import * as THREE from "./three.module.js";
import { GLTFLoader } from "./GLTFLoader.js";
import { OrbitControls } from "./OrbitControls.js";

const canvas = document.getElementById("webglTwo");

let scene, camera, renderer;
let obj;
let controls;

init();
animate();

function init() {
  scene = new THREE.Scene();

  camera = new THREE.PerspectiveCamera(
    70,
    window.innerWidth / window.innerHeight,
    0.01,
    60
  );
  camera.position.set(0, 0, 2);
  camera.lookAt(0, 0, 0);

  controls = new OrbitControls(camera, canvas);
  controls.update();

  renderer = new THREE.WebGLRenderer({
    alpha: true,
    antialias: true,
    canvas: canvas,
  });
  renderer.setPixelRatio(window.devicePixelRatio);
  renderer.setSize(window.innerWidth, window.innerHeight);

  //   /////////////// this is just a test to see if everything works/////////////////
  //   const geometry = new THREE.BoxBufferGeometry(0.3, 0.3, 0.3);
  //   const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
  //   const cube = new THREE.Mesh(geometry, material);
  //   cube.position.set(0, 0, -1);
  //   scene.add(cube);

  let loader = new GLTFLoader();
  loader.load(
    "../assets/3dmodel/firstPinBlue.gltf",
    function (gltf) {
      obj = gltf.scene;
      obj.scale.set(0.3, 0.3, 0.3);
      obj.position.set(0, 0, -1);
      obj.rotation.set(20.4, 0, 0);
      scene.add(gltf.scene);
    },
    undefined,
    function (error) {
      console.log(error);
    }
  );

  const light = new THREE.AmbientLight();
  scene.add(light);

  window.addEventListener("resize", onWindowResize, false);
}

function onWindowResize() {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();

  renderer.setSize(window.innerWidth, window.innerHeight);
  controls.update();
}

// function animate() {
//   renderer.setAnimationLoop(render);
//   controls.update();
// }

// function render() {
//   renderer.render(scene, camera);
// }

function animate() {
  requestAnimationFrame(animate);
  controls.update();
  renderer.render(scene, camera);
}

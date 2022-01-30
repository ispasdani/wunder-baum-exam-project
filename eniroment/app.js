import * as THREE from "./three.module.js";
import { GLTFLoader } from "./GLTFLoader.js";
// import { OrbitControls } from "./OrbitControls.js";
import { ARButton } from "https://unpkg.com/three@0.126.0/examples/jsm/webxr/ARButton.js";

const canvas = document.getElementById("webgl");
const enviroment = document.getElementById("enviroment");

let scene, camera, renderer;
let obj;
// let controls;
let controller;

init();
animate();

function init() {
  scene = new THREE.Scene();

  camera = new THREE.PerspectiveCamera(
    70,
    window.innerWidth / window.innerHeight,
    0.01,
    40
  );

  // controls = new OrbitControls(camera, canvas);
  // controls.update();

  renderer = new THREE.WebGLRenderer({
    alpha: true,
    antialias: true,
    canvas: canvas,
  });
  renderer.setPixelRatio(window.devicePixelRatio);
  renderer.setSize(window.innerWidth, window.innerHeight);
  renderer.xr.enabled = true;

  //   /////////////// this is just a test to see if everything works/////////////////
  //   const geometry = new THREE.BoxBufferGeometry(0.3, 0.3, 0.3);
  //   const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
  //   const cube = new THREE.Mesh(geometry, material);
  //   cube.position.set(0, 0, -1);
  //   scene.add(cube);

  const light = new THREE.AmbientLight();
  scene.add(light);

  controller = renderer.xr.getController(0);
  controller.addEventListener("select", onSelect);
  scene.add(controller);

  enviroment.appendChild(ARButton.createButton(renderer));
  window.addEventListener("resize", onWindowResize, false);
}

function onSelect() {
  console.log("select");
  let loader = new GLTFLoader();
  loader.load(
    "../assets/3dmodel/firstPinBlue.gltf",
    function (gltf) {
      obj = gltf.scene;
      obj.scale.set(0.3, 0.3, 0.3);
      obj.position.set(0, 0, -4);
      // .applyMatrix4(controller.matrixWorld);
      // obj.quaternion.setFromRotationMatrix(controller.matrixWorld);
      obj.rotation.set(20.4, 0, 0);
      scene.add(gltf.scene);
    },
    undefined,
    function (error) {
      console.log(error);
    }
  );
}

function onWindowResize() {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();

  renderer.setSize(window.innerWidth / 2, window.innerHeight / 2);
  // controls.update();
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
  // controls.update();
  renderer.render(scene, camera);
}

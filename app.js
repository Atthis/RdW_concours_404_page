import * as THREE from 'three';

let mouseX = 0;
// let mouseY = 0;

// bg rsc
const path = './bg-textures/';
const format = '.webp';
const urls = [
  path + 'nx' + format,
  path + 'px' + format,
  path + 'py' + format,
  path + 'ny' + format,
  path + 'nz' + format,
  path + 'pz' + format,
];

// scene
const textureCube = new THREE.CubeTextureLoader().load(urls);
const scene = new THREE.Scene();
scene.background = textureCube;

// camera
const camera = new THREE.PerspectiveCamera(
  100,
  window.innerWidth / window.innerHeight,
  0.01,
  1000
);
camera.position.z = 5;

// renderer
const renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

function render() {
  camera.position.x += (-mouseX - camera.position.x) * 0.1;
  //   camera.position.y += (-mouseY - camera.position.y) * 0.1;

  camera.lookAt(scene.position);

  renderer.render(scene, camera);
}

function animate() {
  requestAnimationFrame(animate);

  // renderer.render(scene, camera);
  render();
}

function onDocumentMouseMove(e) {
  mouseX = (e.clientX - window.innerWidth / 2) / 100;
  //   mouseY = (e.clientY - window.innerHeight / 2) / 100;
}

function onDocumentTouchMove(e) {
  console.log(e.touches.clientX);
  mouseX = (e.touches.clientX - window.innerWidth / 2) / 100;
  //   mouseY = (e.clientY - window.innerHeight / 2) / 100;
}

function onWindowResize() {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
}

document.addEventListener('mousemove', onDocumentMouseMove);
document.addEventListener('touchmove', onDocumentTouchMove);
window.addEventListener('resize', onWindowResize);

animate();
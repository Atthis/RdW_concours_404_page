import * as THREE from 'three';

// let windowHalfX = window.innerWidth / 2;
// let windowHalfY = window.innerHeight / 2;

// document.addEventListener( 'mousemove', onDocumentMouseMove );

/////

// let mouseX = 0;

// function onDocumentMouseMove(event) {
//   mouseX = (event.clientX - window.innerWidth) / 100;
// }

// document.addEventListener( 'mousemove', onDocumentMouseMove );

// function render() {
//     camera.position.x += (mouseX - camera.position.x) * 0.5;

//     renderer.render(scene, camera);
// }

// ////

// const path = '/bg-textures/';
// const format = '.png';
// const urls = [
//   path + 'px' + format,
//   path + 'nx' + format,
//   path + 'py' + format,
//   path + 'ny' + format,
//   path + 'pz' + format,
//   path + 'nz' + format,
// ];

// const textureCube = new THREE.CubeTextureLoader().load(urls);

// const scene = new THREE.Scene();
// scene.background = textureCube;

// const camera = new THREE.PerspectiveCamera(
//   100,
//   window.innerWidth / window.innerHeight,
//   0.1,
//   1000
// );

// const renderer = new THREE.WebGLRenderer();
// renderer.setSize(window.innerWidth, window.innerHeight);
// document.body.appendChild(renderer.domElement);

// const geometry = new THREE.BoxGeometry(1, 1, 1);
// const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
// const cube = new THREE.Mesh(geometry, material);
// scene.add(cube);

// camera.position.z = 5;

// function animate() {
//   requestAnimationFrame(animate);

//   cube.rotation.x += 0.01;
//   cube.rotation.y += 0.01;

//   render()
// }

// animate()

///-----///

let mouseX = 0;
// let mouseY = 0;

// bg rsc
const path = '/bg-textures/';
const format = '.png';
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

const camera = new THREE.PerspectiveCamera(
  100,
  window.innerWidth / window.innerHeight,
  0.01,
  1000
);

// renderer
const renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

// cube
// const geometry = new THREE.BoxGeometry(1, 1, 1);
// const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
// const cube = new THREE.Mesh(geometry, material);
// scene.add(cube);

camera.position.z = 5;

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
    console.log(e.touches.clientX)
  mouseX = (e.touches.clientX - window.innerWidth / 2) / 100;
  //   mouseY = (e.clientY - window.innerHeight / 2) / 100;
}

function onWindowResize() {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize( window.innerWidth, window.innerHeight )
}

document.addEventListener('mousemove', onDocumentMouseMove);
document.addEventListener('touchmove', onDocumentTouchMove);
window.addEventListener('resize', onWindowResize);

animate();

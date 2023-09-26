import "./main.css"
import * as THREE from "three";
import{OrbitControls} from "three/examples/jsm/controls/OrbitControls"
import {FBXLoader} from "three/examples/jsm/loaders/FBXLoader"
import * as dat from "dat.gui";



// scene , mesh , camera , renderer

const scene = new THREE.Scene();

//Debugging
// const gui = new dat.GUI();

//Lights
const ambientLight = new THREE.AmbientLight("white" ,2.1)
const directionalLight = new THREE.DirectionalLight("white" , 2.8)
directionalLight.position.z = 2
scene.add(ambientLight , directionalLight)


// mesh
// const geometry = new THREE.BoxGeometry(1, 1, 1);
// const material = new THREE.MeshBasicMaterial({ coor: "red" });
// const mesh = new THREE.Mesh(geometry, material);
// scene.add(mesh);

// Adding our FBX Loader
const fbxLoader = new FBXLoader()
let animationMixer = null
fbxLoader.load("Model/GirlRoboDance.fbx" , (fbx)=>{
  animationMixer = new THREE.AnimationMixer(fbx)
  const clipAction = animationMixer.clipAction(fbx.animations[0])
  clipAction.play()
  fbx.scale.set(0.1,0.1,0.1)
  fbx.position.x = 4.49
  fbx.position.y = -9.19
  fbx.position.z = -28.63
  // gui.add(fbx.position, "x").min(-60).max(60).step(0.01).name("fbx-x")
  // gui.add(fbx.position,"y").min(-60).max(60).step(0.01).name("fbx-y")
  // gui.add(fbx.position,"z").min(-60).max(60).step(0.01).name("fbx-z")
  scene.add(fbx)
})

// camera
let aspect = {
  width: window.innerWidth,
  height: window.innerHeight,
};
const camera = new THREE.PerspectiveCamera(45, aspect.width / aspect.height);
// camera.position.z = 3;
// camera.position.x = -41.62;
// camera.position.y = 6.38;
scene.add(camera);


// renderer
const canvas = document.querySelector(".draw");
const renderer = new THREE.WebGL1Renderer({ canvas: canvas,alpha: true });
renderer.setSize(aspect.width, aspect.height);

// Resizing / Responsive 
window.addEventListener("resize", ()=>{
  // New size
  aspect.width = window.innerWidth
  aspect.height = window.innerHeight

  //New Aspect ratio
  camera.aspect = aspect.width / aspect.height
  camera.updateProjectionMatrix()

  //New Renderer size
  renderer.setSize(aspect.width , aspect.height)
  renderer.setPixelRatio(Math.min(window.devicePixelRatio , 2));

})

// orbitControl 
const orbitControl = new OrbitControls(camera , canvas)
orbitControl.enableDamping = true
orbitControl.dampingFactor = 0.1
orbitControl.enableZoom = false
orbitControl.enableRotate = false
// clock
const clock = new THREE.Clock();
let previousTime = 0;
const animate = () => {
  const elapsedTime = clock.getElapsedTime();
  const frameTime = elapsedTime-previousTime
  previousTime = elapsedTime
  //Update AnimationMixer
  if(animationMixer){
    animationMixer.update(frameTime)
  }

  renderer.render(scene, camera);

  // Update rotation on Y axis
  // mesh.rotation.y = elapsedTime * Math.PI * 2;

    orbitControl.update()

  window.requestAnimationFrame(animate);
};
animate();

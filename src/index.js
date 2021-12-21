import './style.css'
import * as THREE from'three';

import gsap from 'gsap'

// var TxtRotate = function(el, toRotate, period) {
//   this.toRotate = toRotate;
//   this.el = el;
//   this.loopNum = 0;
//   this.period = parseInt(period, 10) || 2000;
//   this.txt = '';
//   this.tick();
//   this.isDeleting = false;
// };

// TxtRotate.prototype.tick = function() {
//   var i = this.loopNum % this.toRotate.length;
//   var fullTxt = this.toRotate[i];

//   if (this.isDeleting) {
//     this.txt = fullTxt.substring(0, this.txt.length - 1);
//   } else {
//     this.txt = fullTxt.substring(0, this.txt.length + 1);
//   }

//   this.el.innerHTML = '<span class="wrap">'+this.txt+'</span>';

//   var that = this;
//   var delta = 300 - Math.random() * 100;

//   if (this.isDeleting) { delta /= 2; }

//   if (!this.isDeleting && this.txt === fullTxt) {
//     delta = this.period;
//     this.isDeleting = true;
//   } else if (this.isDeleting && this.txt === '') {
//     this.isDeleting = false;
//     this.loopNum++;
//     delta = 500;
//   }

//   setTimeout(function() {
//     that.tick();
//   }, delta);
// };

// window.onload = function() {
//   var elements = document.getElementsByClassName('txt-rotate');
//   for (var i=0; i<elements.length; i++) {
//     var toRotate = elements[i].getAttribute('data-rotate');
//     var period = elements[i].getAttribute('data-period');
//     if (toRotate) {
//       new TxtRotate(elements[i], JSON.parse(toRotate), period);
//     }
//   }
//   // INJECT CSS
//   var css = document.createElement("style");
//   css.type = "text/css";
//   css.innerHTML = ".txt-rotate > .wrap { border-right: 0.08em solid #666 }";
//   document.body.appendChild(css);
// };


//texture loader
const textureLoader=new THREE.TextureLoader()

// Debug
// const gui = new dat.GUI()

// Canvas
const canvas = document.querySelector('canvas.webgl') 

// Scene
const scene = new THREE.Scene()

const geometry=new THREE.PlaneBufferGeometry(1.5,1)//skeleton
const geometry2=new THREE.PlaneBufferGeometry(1,1.5)
const geometry3=new THREE.PlaneBufferGeometry(1,1)
// Objects
    //1
    const material =new THREE.MeshBasicMaterial({
        map: textureLoader.load("/photographs/0.jpg")
    })

    const img = new THREE.Mesh(geometry,material)
    img.position.set(Math.random()+.3,0*-1.8)

    scene.add(img)

    //2
    const material2 =new THREE.MeshBasicMaterial({
        map: textureLoader.load(`/photographs/1.jpg`)
    })

    const img2 = new THREE.Mesh(geometry2,material2)
    img2.position.set(Math.random()+.3,1*-1.8)

    scene.add(img2)

    //3
    const material3 =new THREE.MeshBasicMaterial({
        map: textureLoader.load(`/photographs/2.jpg`)
    })

    const img3 = new THREE.Mesh(geometry,material3)
    img3.position.set(Math.random()+.3,2*-1.8)

    scene.add(img3)

    //4
    const material4 =new THREE.MeshBasicMaterial({
        map: textureLoader.load(`/photographs/3.jpg`)
    })

    const img4 = new THREE.Mesh(geometry3,material4)
    img4.position.set(Math.random()+.3,3*-1.8)

    scene.add(img4)

    //5
    const material5 =new THREE.MeshBasicMaterial({
      map: textureLoader.load(`/photographs/4.jpg`)
  })

  const img5 = new THREE.Mesh(geometry,material5)
  img5.position.set(Math.random()+.3,4*-1.8)

  scene.add(img5)

  //6
  const material6 =new THREE.MeshBasicMaterial({
    map: textureLoader.load(`/photographs/5.jpg`)
})

const img6 = new THREE.Mesh(geometry,material6)
img6.position.set(Math.random()+.3,5*-1.8)

scene.add(img6)

//7
const material7 =new THREE.MeshBasicMaterial({
  map: textureLoader.load(`/photographs/6.png`)
})

const img7 = new THREE.Mesh(geometry,material7)
img7.position.set(Math.random()+.3,6*-1.8)

scene.add(img7)

//8
const material8 =new THREE.MeshBasicMaterial({
  map: textureLoader.load(`/photographs/7.png`)
})

const img8 = new THREE.Mesh(geometry,material8)
img8.position.set(Math.random()+.3,7*-1.8)

scene.add(img8)



let objs=[]
scene.traverse((object)=>{
    if (object.isMesh)
    objs.push(object)
})

// Materials



// Mesh


// Lights

const pointLight = new THREE.PointLight(0xffffff, 0.1)
pointLight.position.x = 2
pointLight.position.y = 3
pointLight.position.z = 4
scene.add(pointLight)

/**
 * Sizes
 */
const sizes = {
    width: window.innerWidth,
    height: window.innerHeight
}

window.addEventListener('resize', () =>
{
    // Update sizes
    sizes.width = window.innerWidth
    sizes.height = window.innerHeight

    // Update camera
    camera.aspect = sizes.width / sizes.height
    camera.updateProjectionMatrix()

    // Update renderer
    renderer.setSize(sizes.width, sizes.height)
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
})

/**
 * Camera
 */
// Base camera
const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height, 0.1, 100)
camera.position.x = 0
camera.position.y = 0
camera.position.z = 2
scene.add(camera)

// gui.add(camera.position,'y').min(-5).max(10)

// Controls
// const controls = new OrbitControls(camera, canvas)
// controls.enableDamping = true

/**
 * Renderer
 */
const renderer = new THREE.WebGLRenderer({
    canvas: canvas
})
renderer.setSize(sizes.width, sizes.height)
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))

//Mouse


window.addEventListener("wheel",onMouseWheel)

let y=0
let position=0

function onMouseWheel(event){
    y=event.deltaY*0.0007
}

const mouse=new THREE.Vector2()

window.addEventListener('mousemove',(event)=>{
    mouse.x=event.clientX / sizes.width *2 - 1
    mouse.y=-(event.clientY / sizes.height) *2 + 1
})
/**
 * Animate
 */

const raycaster=new THREE.Raycaster()

const clock = new THREE.Clock()

const tick = () =>
{

    const elapsedTime = clock.getElapsedTime()

    // Update objects
    position +=y
    y*=.9

    //Raycaster
    raycaster.setFromCamera(mouse,camera)
    const intersects = raycaster.intersectObjects(objs)

    for(const intersect of intersects){
        // intersect.object.scale.set(1.5,1.5)
        gsap.to(intersect.object.scale,{x:1.7,y:1.7})
        gsap.to(intersect.object.rotation,{y:-.5})
        gsap.to(intersect.object.position,{z:-.9})
    }

    for (const object of objs){
        if (!intersects.find(intersect => intersect.object === object)){
            // object.scale.set(1,1)
            gsap.to(object.scale,{x:1,y:1})
            gsap.to(object.rotation,{y:0})
            gsap.to(object.position,{z:0})
        }
    }
    camera.position.y=-position

    // Update Orbital Controls
    // controls.update()

    // Render
    renderer.render(scene, camera)

    // Call tick again on the next frame
    window.requestAnimationFrame(tick)
}

tick()
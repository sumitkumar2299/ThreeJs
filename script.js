console.log("i am happy to learn threejs")
console.log(THREE);

const scene = new THREE.Scene();

const geometry = new THREE.BoxGeometry(2,2,2);
const material = new THREE.MeshBasicMaterial({color:"red"});

const box = new THREE.Mesh(geometry,material);
scene.add(box)

const size = {
    width:700,
    height:500
}

const camera = new THREE.PerspectiveCamera(75,size.width/size.height);
camera.position.z = 4;

scene.add(camera);

// rendering 
const target = document.querySelector(".wbgl");
const renderer = new THREE.WebGLRenderer({canvas:target});

renderer.setSize(size.width,size.height)
renderer.render(scene,camera);

// now we have to start making project of threejs using react 




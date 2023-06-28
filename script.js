const BLACK_CODE = 0;
const RAINBOW_CODE = 1;
const ERASE_CODE = 2;
const ERASE_ALL = 3;


let mode = -1;
let mouseDown = false
let canvas = document.getElementById("canvas");


document.body.onmousedown = () => (mouseDown = true)
document.body.onmouseup = () => (mouseDown = false)


function erase_all() {
    Array.from(canvas.children).forEach(div => {
        Array.from(div.children).forEach(childElement=>
            {childElement.style.cssText= "width:10px;height:10px;background-color:white;border:0;padding:0;";})
      });
}
function hoverblack(cur_pixel){
    if(mouseDown && mode == BLACK_CODE){
        cur_pixel.target.style.cssText = "width:10px;height:10px;background-color:black;border:0;padding:0;";
    }
}
function hoverrgb(cur_pixel){
    let red = Math.floor(Math.random()*255);
    let green = Math.floor(Math.random()*255);
    let blue = Math.floor(Math.random()*255);
    if(mouseDown && mode==RAINBOW_CODE){
        cur_pixel.target.style.cssText = `width:10px;height:10px;background-color:rgb(${red},${green},${blue});border:0;padding:0;`;
    }
}
function hovererase(cur_pixel){
    if(mouseDown && mode==ERASE_CODE){
        cur_pixel.target.style.cssText = "width:10px;height:10px;background-color:white;border:0;padding:0;";
    }
}
function color(){
    for(let i = 0;i<64;i++){
        let current_row = document.createElement("div");
        for(let j=0;j<64;j++){
            let pixel = document.createElement("button");
            pixel.textContent="";
            pixel.style.cssText= "width:10px;height:10px;background-color:white;border:0;padding:0;";
                pixel.addEventListener(`mouseover`,hoverblack);
                pixel.addEventListener(`mouseover`,hoverrgb);
                pixel.addEventListener(`mouseover`,hovererase);
            current_row.appendChild(pixel);
        }
        current_row.style.cssText="display:flex;width:640px;height:10px;justify-content:stretch;align-items:stretch";
        canvas.appendChild(current_row);
    }
}
color();
let black = document.getElementById("black");
let rgb = document.getElementById("rgb");
let erase = document.getElementById("erase");
let eraseall = document.getElementById("eraseAll");
black.addEventListener('click',()=>mode = BLACK_CODE);
rgb.addEventListener('click',()=>mode = RAINBOW_CODE);
erase.addEventListener('click',()=> mode = ERASE_CODE);
eraseall.addEventListener('click',erase_all);


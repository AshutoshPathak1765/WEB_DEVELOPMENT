const imgDiv=document.getElementById("imgDiv");
const nextBtn=document.getElementById("next");
const prevBtn=document.getElementById("prev");
const image=document.getElementById('Img');

let numImages=10;


image.setAttribute("src",`./img/${1}.jpg`);
let counter=2;
nextBtn.addEventListener('click',() => {
    image.setAttribute("src",`./img/${counter}.jpg`);
    counter++;
    if(counter>numImages)
    counter=1;
})

prevBtn.addEventListener('click',() => {
    console.log(counter);
    image.setAttribute("src",`./img/${counter}.jpg`);
    counter--;
    if(counter==0)
    counter=numImages;
})



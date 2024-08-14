
document.querySelector('body').style.backgroundColor="peachpuff";
document.querySelector('body').style.maxHeight="100vh";

let navbar = document.getElementById('navbar');
let line = document.getElementById('line');
let h1 = document.getElementById('h1')
let h2 = document.getElementById('h2')
let button = document.getElementById('button');
let img = document.getElementById('img');
let ye = document.getElementById('ye');

document.getElementById('navbar').style.display="flex";
document.getElementById('navbar').style.flexDirection="row";
document.getElementById('navbar').style.zIndex=1;
document.getElementById('navbar').style.marginLeft="60em";
document.getElementById('navbar').style.marginRight="1em";
document.getElementById('navbar').style.fontSize="1em";
document.getElementById('navbar').style.textDecoration="underline";
document.getElementById('navbar').style.fontFamily="Poppins";
navbar.innerHTML="About Me <hr> Contact Me <hr> Portofolio";

document.getElementById('line').style.backgroundColor="black";
document.getElementById('line').style.height="1vh";
document.getElementById('line').style.width="98vw";
document.getElementById('line').style.alignItems="center";
document.getElementById('line').style.marginTop="0.3em";
document.getElementById('line').style.zIndex=2;

document.getElementById('h1').style.fontSize="5em";
document.getElementById('h1').style.marginTop="0.8em";
document.getElementById('h1').style.textDecoration="bold";
document.getElementById('h1').style.marginLeft="0.3em";
document.getElementById('h1').style.width="5em"
h1.innerHTML="Collaborating <br> With Me"

document.getElementById('h2').style.marginTop="1em";
document.getElementById('h2').style.fontSize="1.8em";
document.getElementById('h2').style.marginLeft="0.8em";
h2.innerHTML="I am a student passionated with UI and <br> UX Design follow and hire me for more <br> info"

document.getElementById('button').style.fontSize="1.5em";
document.getElementById('button').style.padding="0.5em";
document.getElementById('button').style.marginLeft="0.7em";
document.getElementById('button').style.marginTop="0.7em";
document.getElementById('button').style.backgroundColor="green";
document.getElementById('button').style.borderRadius="0.5em";
document.getElementById('button').style.textDecoration="underline";
document.getElementById('button').style.boxShadow="2px 2px";

img.style.backgroundImage="url('https://buffer.com/library/content/images/size/w1200/2023/10/free-images.jpg')";
img.style.width="22em";
img.style.height="22em";
img.style.marginLeft="0em";
img.style.borderRadius="25em";
img.style.display="flex";
img.style.flexDirection="row";
img.style.marginLeft="-28rem";
img.style.marginTop="8rem";

ye.style.display="flex";
ye.style.flexDirection="row"

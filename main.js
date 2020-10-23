var geat = (e, all = false)=>{
  ele = all ? document.querySelectorAll(`${e}`): document.querySelector(`${e}`);
  return ele;
}
geat('.preface').style.background = colorGenerator();
geat('.preface').style.color = colorGenerator();
var container = geat('.container');
var i = 7;
for(let i = 0; i < 35; i++){
  container.innerHTML+= `<div class="box" style='background:${colorGenerator()}'></div>`;
}

function colorGenerator(){
  red = (Math.random() * (Math.random()*999).toFixed(3)).toFixed(5);
  blue = (Math.random() * (Math.random()*999).toFixed(3)).toFixed(5);
  green = (Math.random() * (Math.random()*999).toFixed(3)).toFixed(5);
  alpha = (Math.random()*1).toFixed(3);
  //console.log(`rgba(${red}, ${blue}, ${green}, ${alpha})`);
  //return `rgba(${red}, ${blue}, ${green}, ${alpha})`;
  return `rgba(${red}, ${blue}, ${green}, 1)`;
}


geat('.preface').style.background = colorGenerator();
var x = 0;
var observers = {};
Array.from(geat('.box',true)).forEach(elem=>{
observers[`elem${x}`] = new IntersectionObserver(callback);
observers[`elem${x}`].observe(elem);
x++;
});

function callback(res){
  var IOE = res[0];
  if(IOE.isIntersecting){
    setTimeout(()=>{
    IOE.target.style.background = colorGenerator();
    }, 300);
    
  }
}



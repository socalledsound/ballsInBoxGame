const svg = document.body.querySelector('svg');
let score = 0;
let numBalls = 400;
const edges = Array.from({ length: 4});
const balls = Array.from({ length: numBalls});
const leftEdge = 100;
const rightEdge = 1500;
const topEdge = 10;
const bottomEdge = 600;
const maxRadius = 60;
const minSpeed = -5;
const maxSpeed = 5;
let strokeWidth = 30;
let padVal = 200;
const points = [{x:leftEdge, y:topEdge},{x: rightEdge, y: topEdge}, {x:rightEdge, y: bottomEdge}, {x:leftEdge, y: bottomEdge}, {x: leftEdge, y: topEdge}];
window.onload = function(){
    init();
    requestAnimationFrame(animate)

}


init = function(){   
    edges.forEach((edge, i)=>{
        edges[i] = new Edge(svg, points[i%points.length].x, points[i%points.length].y, points[(i+1)%points.length].x, points[(i+1)%points.length].y);
        edges[i].init();
    }) 
    balls.forEach( (ball,i) => {
        const ballOptions = createBallOptions();
        balls[i] = new Ball( ballOptions );
        balls[i].init();
        balls[i].render();
    })
}

animate = function(tStamp){
    balls.forEach( (ball,i) => {
        balls[i].move();
        balls[i].render();
        let hit = balls[i].checkEdges();
        if(hit){
          score+=1;
        }
    })
     requestAnimationFrame(animate)
}

function getRandomColor(){
    return `rgba(${Math.random()*255},${Math.random()*255},${Math.random()*255},1.0)`;
}

function createBallOptions(){
    const ballOptions = {
        target: svg,
        //x: Math.random() * ((leftEdge - padVal - maxRadius - strokeWidth/2) - (rightEdge + maxRadius + strokeWidth/2 + padVal)) +  (rightEdge + padVal + maxRadius + strokeWidth/2),
        x: Math.random() * ((rightEdge - padVal) - (leftEdge + padVal)) + padVal,
        y: Math.random() * ((bottomEdge - padVal) - (topEdge + padVal)) + padVal,
        radius: Math.random() * (maxRadius - 10) + 10,
        xSpeed: Math.random() * (maxSpeed - minSpeed) + minSpeed,
        ySpeed: Math.random() * (maxSpeed - minSpeed) + minSpeed,
        fill: 'red',
        stroke: 'brown',
        strokeWidth: strokeWidth
    }
    return ballOptions
}
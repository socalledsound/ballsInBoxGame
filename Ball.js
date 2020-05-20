class Ball {

    constructor({ target, x, y, radius, xSpeed, ySpeed, fill, stroke, strokeWidth }){
        console.log(target);
        this.target = target;
        this.el = document.createElementNS("http://www.w3.org/2000/svg", "circle");
        this.x = x;
        console.log(this.x);
        this.y = y;
        this.r = radius;
        this.xSpeed = xSpeed;
        this.ySpeed = ySpeed;
        this.fill = fill;
        this.stroke = stroke;
        this.strokeWidth = strokeWidth;
        this.opacity = Math.random() * (1.0 - 0.1) + 0.1;


    }

    init(){
        this.target.appendChild(this.el);
    }

    checkEdges(){
        if(this.x < (points[0].x + (this.r * 1.25) + this.strokeWidth/2) ){
            edges[3].el.setAttribute('stroke', `${getRandomColor()}`);
            this.xSpeed *= -1;
            this.x += 10;
            this.fill  = getRandomColor();
            this.opacity = Math.random() * (1.0 - 0.1) + 0.1;
            return true
        }
        if(this.x > (points[1].x - (this.r * 1.25) - this.strokeWidth/2) ){
            edges[1].el.setAttribute('stroke', `${getRandomColor()}`);
            this.xSpeed *= -1;
            this.x -= 10;
            this.fill  = getRandomColor();
            this.opacity = Math.random() * (1.0 - 0.1) + 0.1;
            return true
        }
        if(this.y < (points[0].y + (this.r * 1.25) + this.strokeWidth/2) ){
            edges[0].el.setAttribute('stroke', `${getRandomColor()}`);
            this.y += 10;
            this.ySpeed *= -1;
            this.stroke  = getRandomColor();
            this.opacity = Math.random() * (1.0 - 0.1) + 0.1;
            return true
        }
        if (this.y > (points[2].y - (this.r * 1.25) - + this.strokeWidth/2) ){
            edges[2].el.setAttribute('stroke', `${getRandomColor()}`);
            this.y -= 10;
            this.ySpeed *= -1;
            this.stroke  = getRandomColor();
            this.opacity = Math.random() * (1.0 - 0.1) + 0.1;
            return true
        }
    }


    move(){
        this.x += this.xSpeed;
        this.y += this.ySpeed;
    }

    render(){
        this.el.setAttribute('stroke', `${this.stroke}`);
        this.el.setAttribute('fill', `${this.fill}`);
        this.el.setAttribute('stroke-width', `${this.strokeWidth}px`);
        this.el.setAttribute('cx', `${this.x}`);
        this.el.setAttribute('cy', `${this.y}`);
        this.el.setAttribute('r', `${this.r}`);
        this.el.setAttribute('opacity', `${this.opacity}`);
    }


}
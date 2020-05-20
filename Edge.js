
class Edge{

    constructor(svg, x1, y1, x2, y2){
        this.target = svg;
        this.el = document.createElementNS("http://www.w3.org/2000/svg", "line");
        this.x1 = x1;
        this.y1 = y1;
        this.x2 = x2;
        this.y2 = y2;    
    }

    init(){
        this.el.setAttribute('stroke', 'black');
        this.el.setAttribute('stroke-width', '10px');
        this.el.setAttribute('x1', `${this.x1}`);
        this.el.setAttribute('x2', `${this.x2}`);
        this.el.setAttribute('y1', `${this.y1}`);
        this.el.setAttribute('y2', `${this.y2}`);


        this.target.appendChild(this.el);
    }

}
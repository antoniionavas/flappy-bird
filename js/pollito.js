console.log(" desde pollito.js")

class Pollito{

    constructor(){
        //console.log(" esto ocurre una vez cuando se crea un nuevo pollito")


    //crear el elemento del DOM
    this.node = document.createElement("img");
    this.node.src = "./images/flappy.png"
    gameBoxNode.append(this.node)

    //propiedades del pollito
    this.x = 50; // posicion eje x
    this.y = 50; // posicion eje y
    this.w = 30; //ancho
    this.h = 35; //alto

    this.gravitySpeed = 2;
    this.jumpSpeed = 40;
    //ajustar el tamaño y posicion inicial del pollito
    this.node.style.width = `${this.w}px`;
    this.node.style.height = `${this.h}px`;
    this.node.style.position = "absolute";
    this.node.style.top = `${this.y}px`;
    this.node.style.left = `${this.x}px`;
}


    //metodos del pollito
    gravityEffect = () => {
        this.y += this.gravitySpeed;
        this.positionUpdate()
        
    }

    jumpEffect = () => {
        this.y -= this.jumpSpeed;
        this.positionUpdate()
    }

    positionUpdate = () => {
       //pollito solo se mueve en el eje Y
        this.node.style.top = `${this.y}px`

    }
}
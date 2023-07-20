
class Obstaculo{

    constructor(posY, isObstacleUp){

        //propiedades de los tubos
        this.node = document.createElement("img");
        if(isObstacleUp === true){
            this.node.src = "./images/obstacle_top.png"
        }else {
            this.node.src = "./images/obstacle_bottom.png"

        }
        
        gameBoxNode.append(this.node)

        
        //valores de posicion y dimensiones del tubo
        this.x = gameBoxNode.offsetWidth; //ancho de la caja
        this.y = posY;
        this.w = 50;
        this.h = 250;

        //ajustar el tamaño y posicion inicial del pollito
        this.node.style.width = `${this.w}px`;
        this.node.style.height = `${this.h}px`;
        this.node.style.position = "absolute";
        this.node.style.top = `${this.y}px`;
        this.node.style.left = `${this.x}px`;

    }

        //metodos de los tubos

        automaticMovement = () => {
            this.x -= 2;
            this.positionUpdate();
            
        }

        positionUpdate = () => {
            //tubo solo se mueve en el eje X
            this.node.style.left = `${this.x}px`;
     
         }



}
console.log("desde game.js")

class Game{

    constructor(){
    // aquí estarán todas las propiedades de mi juego
    

    // aqui vamos a crear un pollito. new Pollito
        this.pollito = new Pollito()


    //vamos a crear los tubos
        //this.unObstaculo = new Obstaculo()
        this.obstaculoArr = [];
        this.frames = 0;
        this.isGameOn = true;

    }

    gameOver = () => {
    this.isGameOn = false;
    gameScreenNode.style.display = "none"; //ocultar pantalla de juego
    gameoverScreenNode.style.display = "flex";//mostrar la pantalla final
    
    }


    collisionPollitoObstaculos = () => {
        //el pollito => this.pollito
        this.obstaculoArr.forEach((cadaObstaculo) => {
            //los obstaculos => cadaObstaculo
            if (
                this.pollito.x < cadaObstaculo.x + cadaObstaculo.w &&
                this.pollito.x + this.pollito.w > cadaObstaculo.x &&
                this.pollito.y < cadaObstaculo.y + cadaObstaculo.h &&
                this.pollito.y + this.pollito.h > cadaObstaculo.y
                ){
                
                //Collision detected
                this.gameOver()
                }

        })
    }

    collisionPollitoSuelo = () => {
        if (this.pollito.y + this.pollito.h > gameBoxNode.offsetHeight){
            console.log("el pollito se estrello con el suelo")
            this.gameOver()
        }
    }



    obstaculosDesaparece = () =>{
        //si el primer elemento del array ha salido de la vista
        if(this.obstaculoArr[0].x < 0){
              //removemos el primer elemento del array
             this.obstaculoArr[0].node.remove() // remover el elemento del DOM
            this.obstaculoArr.shift() //remover el obj del array
        }
      
       
    }


    obstaculosAparece = () =>{
    //obstaculeSpawning
    //Al incio del juego this.obstaculoArr.length === 0
    //cuando queremos que aparezcan los obstaculos? - Al inicio - cuando hayan pasado 2 s - this.frames%120 === 0
    if (this.obstaculoArr.length === 0 || this.frames%120 === 0){
        
        let randomPositionY = Math.floor(Math.random() * -200) //nos devuelve un numero entre -200 y 0
        
        let nuevoObstaculoArriba = new Obstaculo(randomPositionY, true);
        this.obstaculoArr.push(nuevoObstaculoArriba)
        //console.log(this.obstaculoArr)

        let nuevoObstaculoAbajo = new Obstaculo(randomPositionY + 380, false)
        this.obstaculoArr.push(nuevoObstaculoAbajo)
     }
    }


    // los métodos (acciones) de mi juego
    
    gameLoop = () => {
        this.frames++;
    //console.log("ejecutando gameLoop")
    // se esta ejecutando 60 veces por segundo
    // muchas cosas

    this.pollito.gravityEffect()
  
    //this.unObstaculo.automaticMovement();
    this.obstaculosAparece()
    this.obstaculoArr.forEach((cadaObstaculo) => {
    cadaObstaculo.automaticMovement();
    })

    this.obstaculosDesaparece()
    this.collisionPollitoSuelo()
    this.collisionPollitoObstaculos()


    if (this.isGameOn === true){
    requestAnimationFrame(this.gameLoop)
    } // si isGameOn es falso deten la recursion

}
}

//planificacion

//PROPIEDADES
// el pollo => x,y,w,h CHECK
//los tubos => x,y,w,h CHECK

//METODOS
// colisiones de pollo con los tubos CHECK
// colisiones de pollo el suelo CHECK
// el movimiento de los tubos CHECK
// movimiento caida del pollo CHECK
// accion del salto => addEventListener CHECK
// gameover accion CHECK


//EXTRA
// propiedad del score
// metodo incrementar una puntuacion
// efecto de aumentar la velocidad (DIFICIL)
// reinicio del juego


//EXTRA EXTRA
//sonidos
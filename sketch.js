// Importar los módulos necesarios de matter.min.js


const Engine = Matter.Engine; //crear el mundo físico y agregarle objetos.
const World = Matter.World; //permiten controlar el comportamiento de diferentes motores.
const Bodies = Matter.Bodies; //crear cuerpos rígidos con cuerpos comunes (rectángulos, circulos...)



function setup() {

  //crear un mundo artificial para poder agregar distintos cuerpos
  createCanvas(400, 400);
  engine = Engine.create();
  world = engine.world;

  var ball_options = {
    restitution: 0.95,
    frictionAir: 0.01
  }

  var ground_options = {
    isStatic: true
  };




  // creamos un objeto circular y lo agregamos al mundo
  ball = Bodies.circle(100, 10, 20, ball_options);
  World.add(world, ball);


  ground = Bodies.rectangle(100, 400, 400, 20, ground_options);
  World.add(world,ground);


  rectMode(CENTER);
  ellipseMode(RADIUS);
}


function draw() {
  background(51);
  Engine.update(engine);


  //dibujar el cuerpo a través de una función

  //ellipse(ball.position.x,ball.position.y,20);

  rect(ground.position.x,ground.position.y,400,20);

  ellipse(ball.position.x, ball.positions.y, 20)



}


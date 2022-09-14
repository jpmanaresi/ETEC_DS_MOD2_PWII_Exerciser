

let c1 = new Carro(new MotorFusca(),"Fusca", "Volkswagen", "1956");
let c2 = new Carro(new MotorCelta(), "Celta", "Chevrolet", "2001" ); 
let c3= new Carro(new MotorFerrari(), "Dino 246", "Ferrari", "1968"); 
let c4 = new Carro(new MotorAudi(), "A4", "Audi", "2010"); 

document.write(c1.marca + " " + c1.nome + ": " + c1.acelerar() + "</br>");
document.write(c2.marca + " " + c2.nome + ": " + c2.acelerar() + "</br>");
document.write(c3.marca + " " + c3.nome + ": " + c3.acelerar() + "</br>");
document.write(c4.marca + " " + c4.nome + ": " + c4.acelerar() + "</br>");


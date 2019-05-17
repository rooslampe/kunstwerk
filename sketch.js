# kunstwerk i

xpos = 20
ypos = 20
xstep = 40
ystep = 40

function setup() {
  createCanvas(400, 400); // maakt een blad van 400 bij 400 pixels.
}
function draw() {
  background (255) // de achtergrond kleur is wit.
  fill(255, 179, 179);
  stroke(255);  // de omtrek kleur is wit.
  for (i = 0; i < 11; i++) {
    // i = 0, als i kleiner is dan 11 wordt i met 1 opgehoogd. Dit wordt herhaald tot dat je bij 11aankomt, hij doet dit dus 10 keer. Elke keer dat i klopt, tekent hij een ellipse. 
    // noprotect
    
    for (j = 0; j < 11; j++) {
      // Voor j geldt hetzelfde als voor i, er wordt dus gezorgd dat er in de breedte en lengte rondjes worden getekent. 
      fill( 250, 200 - (20 * j), 200 - (20* i)); // dit zorgt voor de kleurovergang van de rondjes
      ellipse(xpos + (xstep * i), ypos+j*ystep, 20, 20);   // dit is de plek waar de rondjes worden getekend als i en j kloppen.     
}
    }
}

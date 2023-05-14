/*DESCRIPTION:
Nathan loves cycling.

Because Nathan knows it is important to stay hydrated, he drinks 0.5 litres of water per hour of cycling.

You get given the time in hours and you need to return the number of litres Nathan will drink, rounded to the smallest value.

For example:

time = 3 ----> litres = 1

time = 6.7---> litres = 3

time = 11.8--> litres = 5*/

function litres(time) {
  let isIntTime = Number.isInteger(time)
  let literToDrink = 0
  if(isIntTime){
    literToDrink = time * 0.5
  }
  else{
    let separate = time.toString().split(".")
    let hour = +separate[0] * 0.5
    let mins = 0.5 / +(separate[1])
    literToDrink = mins+hour
  }
  return Math.trunc(literToDrink);
}

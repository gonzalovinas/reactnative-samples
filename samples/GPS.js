
var obelisco = [ [-34.602572, -58.382321], [-34.606078, -58.380924] ];
var castelar = [ [-34.630800, -58.627418], [-34.659191, -58.661134] ];

var target = castelar;

//var punto = $('.widget-reveal-card-lat-lng').textContent.split(',');
var punto  = [-34.613545, -58.430444];

function test(punto, cuadrante) {

    target[0][0] = Math.abs(target[0][0]);
    target[0][1] = Math.abs(target[0][1]);
    target[1][0] = Math.abs(target[1][0]);
    target[1][1] = Math.abs(target[1][1]);

    punto[0] = Math.abs(punto[0]);
    punto[1] = Math.abs(punto[1]);

    debugger;

    if(cuadra="SW") {

      if(punto[0] > target[0][0] && punto[0] < target[1][0])
        if(punto[1] > target[0][1] && punto[1] < target[1][1])
            console.log('FOUND!');
    }
    else {
      throw "Nah!";
    }
}

test(punto, 'SW');

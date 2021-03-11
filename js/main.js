
var generaBtn = document.getElementById('genera');
var annullaBtn = document.getElementById('annulla');
var costo = 0.21;
var costoTotale = 0;
var min = 90000;
var max = 100000 - min;

generaBtn.addEventListener('click', function() {
  var name = document.getElementById('name').value;
  var distanza = parseInt(document.getElementById('distance').value);
  var eta = document.getElementById('eta').value;
  console.log(name, distanza, eta);
  if (name !== '' && distanza > 0 && eta !== ''){

    costoTotale = costo * distanza;

    if (eta == 1) {
      var sconto = costoTotale * 0.2;
      costoTotale = costoTotale - sconto;
      document.getElementById('eta-sconto').innerHTML = 'Sconto 20%';
    }

    else if (eta == 3) {
      var sconto = costoTotale * 0.4;
      costoTotale = costoTotale - sconto;
      document.getElementById('eta-sconto').innerHTML = 'Sconto 40%';
    }
    else {
      document.getElementById('eta-sconto').innerHTML = 'nessun Sconto';
    }

    var cp = Math.floor(Math.random() * max) + min;
    document.getElementById('codice-cp').innerHTML = cp;

    document.getElementById('costo-totale').innerHTML = costoTotale.toFixed(2) + ' €';

    var carrozza = Math.floor(Math.random() * 40) + 1;
    document.getElementById('carrozza-num').innerHTML = carrozza;

    document.getElementById('nome-passeggero').innerHTML = name;
  }

  else {
    alert('Controllate i vostri dati.');
  }

});

annullaBottone.addEventListener('click', function(){
  var name = document.getElementById('name').value = "";
  var distanza = document.getElementById("distance").value = "";
  var eta = document.getElementById('eta').value = "";

  document.getElementById("nome-passeggero").innerHTML = "";
  document.getElementById("eta-sconto").innerHTML = "";
  document.getElementById("carrozza-num").innerHTML = "";
  document.getElementById("codice-cp").innerHTML = "";
  document.getElementById("costo-totale").innerHTML = "";

});

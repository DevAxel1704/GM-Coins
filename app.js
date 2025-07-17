let saldo = 0;

function actualizarSaldo() {
  document.getElementById('saldo').innerText = saldo;
}

function ganarCoins() {
  const coins = Math.floor(Math.random() * 50) + 1;
  saldo += coins;
  alert('¡Ganaste ' + coins + ' Coins!');
  actualizarSaldo();
}

function retirar() {
  alert('Función de retiro próximamente.');
}

function invitar() {
  alert('Invita a tus amigos y gana Coins extra!');
}

actualizarSaldo();

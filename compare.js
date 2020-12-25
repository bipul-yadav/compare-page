var orientation = (screen.orientation || {}).type || screen.mozOrientation || screen.msOrientation;
console.log("Ok",orientation)
if (orientation === "landscape-primary") {
  console.log("That looks good.");
  document.getElementById('notify').classList.add('hide')
  document.getElementById('notify').classList.remove('show')
  document.getElementById('content').classList.add('show')
  document.getElementById('content').classList.remove('hide')
} else if (orientation === "landscape-secondary") {
  console.log("Mmmh... the screen is upside down!");
  document.getElementById('notify').classList.add('hide')
  document.getElementById('notify').classList.remove('show')
  document.getElementById('content').classList.add('show')
  document.getElementById('content').classList.remove('hide')
} else if (orientation === "portrait-secondary" || orientation === "portrait-primary") {
  console.log("Mmmh... you should rotate your device to landscape");
} else if (orientation === undefined) {
  console.log("The orientation API isn't supported in this browser :(");
}
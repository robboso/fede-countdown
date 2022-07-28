
function timer() {
    if (count <= 0) {
        clearInterval(counter);
        displayCount(0);
        return;
    }
    var current = Date.now();

    count = count - (current - initialMillis);
    initialMillis = current;
    displayCount(count);
}

function displayCount(count) {
    if(count<0){
        document.getElementById("timer").innerHTML = 0;
        return;
    }
    var res = count / 1000;
    document.getElementById("timer").innerHTML = res.toPrecision(count.toString().length);
}

function playSound(pathToFile) {
  var audio = new Audio(pathToFile);
  audio.play();
}

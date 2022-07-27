
function timer() {
    if (count <= 0) {
        clearInterval(counter);
        return;
    }
    var current = Date.now();

    count = count - (current - initialMillis);
    initialMillis = current;
    displayCount(count);
}

function displayCount(count) {
    var res = count / 1000;
    document.getElementById("timer").innerHTML = res.toPrecision(count.toString().length);
}

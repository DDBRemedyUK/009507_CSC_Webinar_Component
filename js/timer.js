// Set the date we're counting down to
var countDownDate = new Date("May 6, 2021 00:00:00").getTime();

function timePart(val, text, color = "white") {
    if(val < 10){
        val = ("0" + val).slice(-2);
    }
    return `<span class="timer" style="color:${color};"><span class="figure">${val}</span><div class="key">${text}</div></span>`
}

// Update the count down every 1 second
var x = setInterval(function () {

    // Get todays date and time
    var now = new Date().getTime();

    // Find the distance between now and the count down date
    var distance = countDownDate - now;

    // Time calculations for days, hours, minutes and seconds
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);
    
    // Display the result in the element with id="demo"

    let res = timePart(days, 'days') 
            + timePart(hours, 'hours') 
            + timePart(minutes, 'Mins');
            //+ timePart(seconds, 'Seconds', 'white');
    
    document.getElementById("timer").innerHTML = res

    // If the count down is finished, write some text 
    if (distance < 0) {
        clearInterval(x);

        document.getElementById("timer").innerHTML = "EXPIRED";
    }
}, 1000);
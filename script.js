// Set the Wedding Date to May 1, 2026
const weddingDate = new Date("May 1, 2026 19:00:00").getTime();

setInterval(function() {
    const now = new Date().getTime();
    const diff = weddingDate - now;

    // Time calculations for days, hours, minutes, and seconds
    const d = Math.floor(diff / (1000 * 60 * 60 * 24));
    const h = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const m = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    const s = Math.floor((diff % (1000 * 60)) / 1000);

    // Display the result in the element with id="countdown"
    document.getElementById("countdown").innerHTML = 
        d + " Days " + h + " Hours " + m + " Minutes " + s + " Seconds left!";

    // If the countdown is finished
    if (diff < 0) {
        clearInterval();
        document.getElementById("countdown").innerHTML = "The Celebration has Begun!";
    }
}, 1000);
document.getElementById("randomize");
addEventListener("click", function() {
    roll = Math.floor(Math.random() * 6);
    
    if (roll == 0) {
        window.location.replace("http://google.com/search?q=how+to+eat+pizzas+at+an+alarming+rate");
    }

    if (roll == 1) {
        window.location.replace("https://en.wikipedia.org/wiki/Declaration_of_Independence_(Mexico)");
    }

    if (roll == 2) {
        window.location.replace("https://youtu.be/jNQXAC9IVRw");
    }

    if (roll == 3) {
        window.location.replace("http://google.com/search?q=9mm+weaker+then+50AE");
    }

    if (roll == 4) {
        window.location.replace("https://youtu.be/I3gJAO5KlMs");
    }

    if (roll == 5) {
        window.location.replace("https://store.steampowered.com/app/2870710/Pih/");
    }

})
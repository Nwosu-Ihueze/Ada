/* Set the width of the side navigation to 250px and the left margin of the page content to 250px and add a black background color to body */
function openNav() {

    document.getElementById("myNav").style.width = "250px";
    document.body.style.backgroundColor = "rgba(0,0,0,0.4)";
}

/* Set the width of the side navigation to 0 and the left margin of the page content to 0, and the background color of body to white */
function closeNav() {
    $('.navbar-collapse a').click(function() {
        $(".navbar-collapse").collapse('hide');
    });
    document.getElementById("myNav").style.width = "0";
    document.body.style.backgroundColor = "white";
}
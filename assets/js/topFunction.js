const topButton = document.getElementById("topBtn");

window.onscroll = function() {
    scrollFunction()
}

function scrollFunction() {
    if (document.body.ScrollTop > 300 || document.documentElement.scrollTop > 300) {
        topButton.style.display = "block";
    }else {
        topButton.style.display = "none";
    }
}
topButton.addEventListener("click", function() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
  });



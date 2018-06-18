

var hoverbox = document.getElementById('hoverbox');
var pic = document.getElementById('pic');
var change = document.getElementById('link');

// pic.addEventListener("mouseenter", function () {
//     this.style.display="none";
//     hoverbox.style.display="block";

    
// });

// pic.addEventListener("mouseleave", function () {
//     this.style.display="block";
//     hoverbox.style.display="none";
// });


change.addEventListener("mouseenter", function () {
    pic.style.display="none";
    hoverbox.style.display="block";

    
});

change.addEventListener("mouseleave", function () {
    pic.style.display="block";
    hoverbox.style.display="none";
});

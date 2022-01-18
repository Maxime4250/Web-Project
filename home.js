mybutton = document.getElementById("top");
window.onscroll = function() {TopButton()};

function TopButton() {
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        mybutton.style.display = "flex";
    } else {
        mybutton.style.display = "none";
    }
}
function ShowHide(sibling) {
    
    if (sibling.style.display === "none") {
        sibling.style.display = "block";
    } 
    else {
        sibling.style.display = "none";
    }
}

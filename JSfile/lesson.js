
function toggleDiv(num) {
    const divs = document.querySelectorAll(".main > div");
    for (var i = 0; i < divs.length; i++) {
        if (divs[i].id === "div" + num) {
            if (divs[i].style.display === "none") {
                divs[i].style.display = "block";
                window.scrollTo({top: 404, behavior: 'smooth'});
            } else {
                divs[i].style.display = "none";
            }
        } else {
            divs[i].style.display = "none";
        }
    }
}

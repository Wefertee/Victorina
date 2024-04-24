const header = document.querySelector("header");
const logo = header.querySelector("img");
const headerContainerLi = document.getElementsByClassName("headerContainerLi")
const headerH1ID = document.getElementById("headerH1ID")

var lastY = 0;
var lastIsMore = false;
var lastIsMore1 = false;

const delay = (delayInms) => {return new Promise(resolve => setTimeout(resolve, delayInms));}

function lerp(starterVal, goalVal, delta){
    return (Math.max([starterVal, goalVal]) - Math.min([starterVal, goalVal])) * delta + starterVal;
}

window.addEventListener("scroll", async function(event) {

    var top = this.scrollY

    if (top < 750) { headerH1ID.style.top = `${150 + top / 2}px`}

    if (top > 200) {
        if (lastIsMore1 == false) {
            lastIsMore1 = true
            logo.classList.add("active");
            await delay(200)
            for (let i=0; i < headerContainerLi.length; i++) {
                headerContainerLi[i].classList.add("active")
            }
        }
    }
    else {
        if (lastIsMore1 == true) {
            lastIsMore1 = false
            for (let i=0; i < headerContainerLi.length; i++) {
                headerContainerLi[i].classList.remove("active")
            }
            await delay(50)
            logo.classList.remove("active");
        }
    }

    lastY = top

    if (top > 800) {
        if (lastIsMore == false) {
            lastIsMore = true
            header.classList.add("fixed");
        }
    }
    else {
        if (lastIsMore == true) {
            lastIsMore = false
            header.classList.remove("fixed");
        }
    
    }
}, false);


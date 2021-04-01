let main = document.querySelector("main");
let index = 3;
function createUI(index) {
    let h2 = document.createElement("h2");
    let p = document.createElement("p");

    h2.innerText = quotes[index].quoteText;
    p.innerText = quotes[index].quoteAuthor;
    main.append(h2, p);
}

for(let i = 0; i < 3; i++) {
    createUI(i);
}

document.addEventListener("DOMContentLoaded", ready);

function ready() {
    alert("The content of the DOM is loaded");
}

function populate() {
    while(true) {
        let windowRelativeBottom = document.documentElement.getBoundingClientRect().bottom;
        if(windowRelativeBottom > document.documentElement.clientHeight+100)
        break;
        if(index < quotes.length) {
        document.body.insertAdjacentHTML("beforeEnd", ` ${createUI(index++)}`);
        }        
    }
}

window.addEventListener('scroll', populate);
populate();

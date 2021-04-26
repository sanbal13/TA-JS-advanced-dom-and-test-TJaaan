let images = document.querySelector(".images");
let game = document.querySelector(".game");


/* Code to select 5 items from the set of symbols */
function randomNumberGenerator(size, range) {
    let arr = [];
    let rangeArr = [];
    
    for(let i = 0; i < range ; i++) {
        rangeArr.push(i);
    }

    for(let i = 0; i < size; i++) {
        let num = Math.round(Math.random() * (range - 1 -i));
        arr.push(rangeArr[num]);        
        rangeArr.splice(num, 1);       
    }
    return arr;    
}

let selectImage = randomNumberGenerator(5, data.length);
let selectOrder = randomNumberGenerator(5, 5);

for(let i = 0; i < 5; i++) {
    let div = document.createElement("div");
    div.innerHTML = data[selectImage[i]].icon;    
    images.append(div);

    let outerDiv = document.createElement("div");
    outerDiv.classList.add("outerdiv");
    let text = document.createElement("text");
    text.classList.add("text");
    let img = document.createElement("img");
    img.classList.add("img");

    text.innerText = data[selectImage[selectOrder[i]]].name;

    outerDiv.append(text, img);
    game.append(outerDiv);
}




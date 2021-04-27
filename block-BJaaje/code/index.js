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
    div.classList.add("img-top");
    div.setAttribute('draggable', true); 
    div.addEventListener('dragstart', handleDragStart, false);
    div.addEventListener('dragend', handleDragEnd, false);
    images.append(div);

    let outerDiv = document.createElement("div");
    outerDiv.classList.add("outerdiv");
    outerDiv.classList.add("flex");

    let text = document.createElement("text");
    text.classList.add("text");
    let img = document.createElement("img");
    img.classList.add("img");
    img.addEventListener('dragover', handleDragOver, false);
    img.addEventListener('dragenter', handleDragEnter, false);
    img.addEventListener('dragleave', handleDragLeave, false);
    img.addEventListener('drop', handleDrop, false);
    

    text.innerText = data[selectImage[selectOrder[i]]].name;

    outerDiv.append(text, img);
    game.append(outerDiv);
}

function handleDragStart(e) {
    this.style.opacity = '0.4';

    dragSrcEl = this;

    e.dataTransfer.effectAllowed = 'move';
    e.dataTransfer.setData('text/html', this.innerHTML);
}

function handleDragEnd() {
    this.style.opacity = '1';
}

function handleDragOver() {
    if (e.preventDefault) {
        e.preventDefault();
      }
  
      return false;
}

function handleDragEnter() {
    this.classList.add('over');
}

function handleDragLeave() {
    this.classList.remove('over');
}

function handleDrop(e) {
    e.stopPropagation(); // stops the browser from redirecting.

    if (dragSrcEl !== this) {
        dragSrcEl.innerHTML = this.innerHTML;
        this.innerHTML = e.dataTransfer.getData('text/html');
      }

    return false;
  }



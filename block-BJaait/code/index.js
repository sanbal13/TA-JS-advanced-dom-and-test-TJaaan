let text = document.querySelector("input");
let plus = document.querySelector(".plus");
let root = document.querySelector("ul");
plus.addEventListener('click', handleClick);
let dragSrcEl;

let items = JSON.parse(localStorage.getItem('items')) || [];

function handleClick() {
    plus.innerText = '👍' ; 
    plus.style.left = '63rem';
    if(text.value !== "") {
        items.push(text.value);
        text.value = "";
        localStorage.setItem('items', JSON.stringify(items));
        createUI();
    }
    setTimeout(() => {
        plus.innerText = "+";
        plus.style.left = '64rem';
    }, 500);
}

function createUI() {
    root.innerHTML = "";
    items.forEach(item => {
        let div = document.createElement("div");
        div.setAttribute("draggable", "true");
        div.style.cursor ="move";   
        div.addEventListener('dragstart', handleDragStart, false);
        div.addEventListener('dragover', handleDragOver, false);
        div.addEventListener('dragenter', handleDragEnter, false);
        div.addEventListener('dragleave', handleDragLeave, false);
        div.addEventListener('dragend', handleDragEnd, false);
        div.addEventListener('drop', handleDrop, false);
        div.innerText = item;
        root.append(div);

        function handleDragStart(e) {
            this.style.opacity = '0.4';
            dragSrcEl = this;
            e.dataTransfer.effectAllowed = 'move';
            e.dataTransfer.setData('text/html', this.innerHTML);
        }

        function handleDragEnd(e) {
            this.style.opacity = '1';
        }

        function handleDragEnter(e) {
            this.classList.add('over');
        }
        function handleDragLeave(e) {
            this.classList.remove('over');
        }
        function handleDragOver(e) {
            this.classList.add('over');
        }
        function handleDrop(e) {
            e.stopPropagation();
           
           if(dragSrcEl !== this) {
               dragSrcEl.innerHTML = this.innerHTML;
               this.innerHTML = e.dataTransfer.getData('text/html');
           }
            return false;
        }


    });
}
createUI();
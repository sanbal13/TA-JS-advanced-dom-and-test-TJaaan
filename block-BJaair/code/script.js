let noticeBlock = document.querySelector(".notice");
let button = document.querySelector("button");
let form = document.querySelector(".form");


class Notice {
    constructor(title, notice) {
        this.title = title;
        this.notice = notice;
    }

    createUI(){
        let div = document.createElement("div");
        div.classList.add("container-notice");
        div.classList.add("notice");
        let title = document.createElement("h2");
        title.innerText = this.title;
        title.classList.add("title");
        let notice = document.createElement("h3");
        notice.innerText = this.notice;
        notice.classList.add("notice");
        div.append(title, notice);
        return div;
    }
}

class NoticeBoard {
    constructor(noticeList = []){
        this.noticeList = noticeList;
    }
    add(title, notice) {
        
        let notice1 = new Notice(title, notice);
        this.noticeList.push(notice1);
        this.createUI();
    }
    handleTitleChange () {
        let input = document.createElement("input");
        input.type = "text";
        input.value = this.innerText;
        this.replaceWith(input);
    }
    handleNoticeChange () {     
        let input = document.createElement("input");
        input.type = "text";
        input.value = this.innerText;
        this.replaceWith(input);
    }
    createUI() {
        noticeBlock.innerHTML = "";
        this.noticeList.forEach((notice) => {
            let notice1 = notice.createUI();
            notice1.querySelector(".title").addEventListener("dblclick", this.handleTitleChange);
            notice1.querySelector(".notice").addEventListener("dblclick", this.handleNoticeChange);
            noticeBlock.append(notice1);
        });
    }
}

let noticeBoard = new NoticeBoard();
form.addEventListener('submit',  (event) => {
    event.preventDefault();  
    let title = document.querySelector("#title");
    let category = document.querySelector("#category");
    let titleText = title.value;
    let categoryText = category.value;
    title.value = "";
    category.value = "";
    if(titleText === "" || categoryText === "") {
        alert("Title and Category both should contain some value");
    }
    else
    noticeBoard.add(categoryText, titleText);
});
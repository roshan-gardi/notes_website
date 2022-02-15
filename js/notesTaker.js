console.log('hello project');
showNotes();

//if user adds a note,add it to the local storage
let addBtn = document.getElementById('textbtn');
addBtn.addEventListener('click', function (e) {
    let title = document.getElementById('textareaTitle');
    let addText = document.getElementById('textarea');
    let important = document.getElementById('initial');
    let notes = localStorage.getItem('notes')

    const d = new Date();
    let arr = String(d).split(" ");
    let date = arr[2] + " " + arr[1] + "," + arr[3];
    let time = arr[4]

    if (notes == null) {
        notesObj = [];
    }
    else {
        notesObj = JSON.parse(notes);
    }
    if (important.value == undefined) {
        important.value = 'false'
        //console.log('this sd')
    }
    if (addText.value != "") {
        not = []
        notesObj.push(not)
        not.push(title.value);
        not.push(addText.value);
        not.push(important.value);
        not.push(date);
        not.push(time);
        //console.log(important.id)
    }
    localStorage.setItem("notes", JSON.stringify(notesObj));
    title.value = "";
    addText.value = "";
    showNotes();

})

//document.getElementById("demo").innerHTML = d;
//function to show elements from localstorage
function showNotes() {
    //console.log(localStorage.notes)
    let notes = localStorage.getItem('notes')
    if (notes == null) {
        notesObj = [];
    }
    else {
        notesObj = JSON.parse(notes);
    }
    let html = "";
    notesObj.forEach(function (element, index) {
        html += `<div class="card mx-2 my-2" style="width: 18rem;">
        <div class="card-body">
            <div style="float:right"><i class="fas fa-star" id="important${index}" style="color:${element[2]}"></i>
            </div>
            <h5 class="card-title">${element[0]}</h5>
            <p class="card-text">${element[1]}</p>
            <div>
                <div>
                    <button id="${index}" onclick="deleteNote(this.id)" class="btn btn-primary">Delete</button>
                
                <div style="float:right">
                    <div style="font-size:small">
                    ${element[4]}
                    </div>
                    <div style="font-size:small">
                    ${element[3]}
                    </div>
                </div>
            </div>
            </div>
        </div>
    </div>`
    });

    let notesElm = document.getElementById('notes');
    if (notesObj.length != 0) {
        notesElm.innerHTML = html;
    }
    else {
        notesElm.innerHTML = `You have not created a note yet. Click on "Add a Note" to enter your note.`;
    }
};

//function to delete a note

function deleteNote(index) {
    let notes = localStorage.getItem('notes')
    if (notes == null) {
        notesObj = [];
    }
    else {
        notesObj = JSON.parse(notes);
    }
    notesObj.splice(index, 1);
    localStorage.setItem("notes", JSON.stringify(notesObj));
    showNotes();
}

//search functionality
let search = document.getElementById('searchTxt');
search.addEventListener('input', function () {
    let inputVal = search.value.toLowerCase();
    //console.log('input event fired', inputVal);
    let noteCards = document.getElementsByClassName('card');
    Array.from(noteCards).forEach(function (element) {
        let cardTxt = element.getElementsByTagName("p")[0].innerText.toLowerCase();
        let cardTitle = element.getElementsByTagName("h5")[0].innerText.toLowerCase();
        console.log(cardTitle)
        if (cardTxt.includes(inputVal)||cardTitle.includes(inputVal)) {
            element.style.display = "block";
        }
        else {
            element.style.display = "none";
        }
    })
})


/*let imprt=document.getElementById('important${index}');
imprt.addEventListener('mouseover',function(){
    console.log('print this')
})*/
let colr = 'gold';
//let initialVal=document.getElementById('initial').value;
function initial() {
    initia = document.getElementById('initial');
    if (colr == 'gold') {
        initia.style.color = "gold";
        document.getElementById('initial').value = colr
        colr = 'black'
        console.log('this t')

    }
    else {
        initia.style.color = "black";
        colr = 'black'
        document.getElementById('initial').value = colr;
        colr = 'gold'
        //console.log('this f')
    }
}

/*function important(index) {
    let notes = localStorage.getItem('notes')
    if (notes == null) {
        notesObj = [];
    }
    else {
        notesObj = JSON.parse(notes);
    }

    before=document.getElementById(index);
    colr=before.style.color;
    //console.log(colr)
    star = document.getElementById(index);
    if (colr == 'gold') {
        star.style.color = "gold";
        colr = 'black';
        console.log(index[-1])
        //localStorage.setItem("notes", JSON.stringify(notesObj));
    }
    else {
        star.style.color = "black";
        colr = 'gold'
        //console.log('this f')
    }

}*/
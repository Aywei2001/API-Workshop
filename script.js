function getRandomColor(){
    const COLORS = [
        "#a2d1fc",
        "#ffc2cd",
    ]

    return COLORS[Math.floor(Math.random() * COLORS.length)]
}

function sendNote(){
    const inputElement = document.getElementById("input");
    const noteContent = inputElement.value
    inputElement.value = "";



    //li = list
    let newNote = document.createElement('li');
    newNote.innerHTML = noteContent;
    let allNotes = document.getElementById("notes");
    allNotes.appendChild(newNote);
}

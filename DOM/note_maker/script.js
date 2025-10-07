const input = document.getElementById("input");
const inputHead = document.getElementById("input-head");
const add = document.getElementById("add");
const cancel = document.getElementById("cancel");
const board = document.getElementById("notes-board");

let notes = [];
let headers = [];


const colors = [
    "#FFFACD",
    "#FFD1DC",
    "#D1FFD6",
    "#CDE7FF",
    "#FDE2FF",
    "#FFF2CC",
    "#E2F0CB",
];

function showNotes() {
    board.innerHTML = "";
    notes.forEach((note, index) => {
        const noteDiv = document.createElement("div");
        noteDiv.className = "note";
        noteDiv.style.background = colors[index % colors.length];

        const title = document.createElement("h4");
        title.textContent = headers[index];

        const text = document.createElement("p");
        text.textContent = note;

        const updateBtn = document.createElement("button");
        updateBtn.textContent = "Update";
        updateBtn.className = "update-btn";

        const deleteBtn = document.createElement("button");
        deleteBtn.textContent = "Delete";
        deleteBtn.className = "delete-btn";

        updateBtn.addEventListener("click", () => update(index));
        deleteBtn.addEventListener("click", () => deleteNote(index));

        noteDiv.appendChild(title);
        noteDiv.appendChild(text);
        noteDiv.appendChild(updateBtn);
        noteDiv.appendChild(deleteBtn);
        board.appendChild(noteDiv);
    });
}

function deleteNote(index) {
    notes.splice(index, 1);
    headers.splice(index, 1);
    showNotes();
}

function update(index) {
    input.value = notes[index];
    inputHead.value = headers[index];
    notes.splice(index, 1);
    headers.splice(index, 1);
    showNotes();
}

add.addEventListener("click", () => {
    const title = inputHead.value.trim();
    const note = input.value.trim();
    if (!title || !note) {
        alert("Please fill both title and note!");
        return;
    }
    headers.push(title);
    notes.push(note);
    input.value = "";
    inputHead.value = "";
    showNotes();
});

cancel.addEventListener("click", () => {
    input.value = "";
    inputHead.value = "";
});

showNotes();

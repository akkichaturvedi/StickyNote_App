// Setting page toggler for changing the theme.....

document.getElementById("setting").addEventListener("click", () => {
  document.querySelector(".settingPage").style.display = "block";
});

document.getElementById("closeSetting").addEventListener("click", () => {
  document.querySelector(".settingPage").style.display = "none";
});

// theme chage 
document.getElementById("White").addEventListener("click", () => {
  document.querySelector(".maincontainer").style.backgroundColor = "whitesmoke";
  document.querySelector(".addnotemodelPage").style.color = "black";
  document.querySelector(".maincontainer").style.color = "black";
  document.querySelector(".settingPage").style.color = "black";
  document.querySelector(".dataNote").style.color = "black";
});
document.getElementById("Black").addEventListener("click", () => {
  document.querySelector(".maincontainer").style.backgroundColor = "#222f3e";
  document.querySelector(".maincontainer").style.color = "white";
  document.querySelector(".settingPage").style.color = "white";
  document.querySelector(".dataNote").style.color = "white";
  document.querySelector(".addnotemodelPage").style.color = "white";
});

// closing current window only working on a microsoftedge....
document.getElementById("closeWindow").addEventListener("click", () => {
  console.log(close());
});

// Add note page toggler
document.getElementById("addNote").addEventListener("click", () => {
  document.querySelector(".addnotemodelPage").style.display = "block";
});
document.getElementById("closeNote").addEventListener("click", () => {
  document.querySelector(".addnotemodelPage").style.display = "none";
});

document.getElementById("addNoteagain").addEventListener("click", () => {
  document.querySelector("body").appendChild(newNotecreater);
});

// colorchanger toggler
document.getElementById("closeColor").addEventListener("click", () => {
  document.querySelector(".colors").style.display = "none";
});
document.getElementById("openColor").addEventListener("click", () => {
  document.querySelector(".colors").style.display = "block";
});

// font fixer

let textarea = document.querySelector("textarea");

let bold = () => {
  textarea.classList.toggle("bold");
};
let italic = () => {
  textarea.classList.toggle("italic");
};
let underline = () => {
  textarea.classList.toggle("underline");
};
let strike = () => {
  textarea.classList.toggle("strike");
};


// Actual note design which where creted at the time of saving note
let noteDesign = () => {
  let textarea = document.querySelector("textarea").value;
  let Title = document.getElementById("title").value;
  let note = document.createElement("div");
  note.setAttribute("class", "dataNote");
  note.innerHTML = `
  <div
  class="d-flex justify-content-between notedata p-2 align-items-center">
  <strong class="strongData">${Title}</strong>
  <button class="delete" onclick="del()">
    <i class="material-icons">delete</i>
  </button>
</div>
<div class="notedata">
  <p class="p-1" id="textareadatapara">${textarea}</p>
</div>`;
  document.querySelector(".noteareaContainer").appendChild(note);
};

// colours setting

let allcolors = ["lightblue", "lightgreen", "lightpink", "yellow"];
let selectedColor = allcolors[allcolors.length - 1];
let colors = document.querySelectorAll(".color");

colors.forEach((elementoOfcolours, index) => {
  elementoOfcolours.addEventListener("click", (colorname) => {
    colors.forEach((allelementsofcolors, index) => {
      allelementsofcolors.classList.remove("borderData");
    });
    elementoOfcolours.classList.add("borderData");
    selectedColor = elementoOfcolours.classList[1];
  });
});

const setColorofdatanote = (color) => {
  let data = document.querySelectorAll(".dataNote");
  data.forEach((element, indx) => {
    if ((element = element)) {
      element.style.backgroundColor = `${color}`;
    }
  });
};

// Notecreater function
const create = () => {
  document.querySelector(".alldelete").disabled = false;
  noteDesign();
  document.querySelector("textarea").value = "";
  document.getElementById("title").value = "";
  document.querySelector(".addnotemodelPage").style.display = "none";
  setColorofdatanote(selectedColor);
};

// search note with thge help of highlighter......

let search = () => {
  let strongtext = document.querySelectorAll(".strongData");
  let serchInputdata = document.getElementById("serchInput").value;

  strongtext.forEach((element, indx) => {
    if (serchInputdata == element.innerText) {
      element.classList.add("animate");
    }
  });
  document.getElementById("serchInput").value = "";
};

// deleting note
const del = () => {
  let data = document.querySelectorAll(".dataNote");
  data.forEach((element, indx) => {
    element.addEventListener("click", (e) => {
      element.style.display = "none";
    });
  });
};

// delete all generated note

let deleteAll = () => {
  let data = document.querySelectorAll(".dataNote");
  data.forEach((element, indx) => {
    element.style.display = "none";
  });
  document.querySelector(".alldelete").disabled = true;
};

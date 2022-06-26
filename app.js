const lists = document.querySelectorAll(".list");
const toggle = document.querySelector(".right-1")
const home = document.querySelector(".Home")
const sidebar = document.querySelector(".sidebar")
const cancel = document.querySelector("#cancel")
const polygon = document.querySelector(".polygon-6");
const music = document.querySelector(".music")
for (let i = 0; i < lists.length; i++) {
  lists[i].onclick = function () {
    let j = 0;
    while (j < lists.length) {
      lists[j++].className = "list"
    }
    lists[i].className = "list active"
  }
}

toggle.onclick = function () {
  sidebar.style.display = "block"
}
cancel.onclick = function () {
  sidebar.style.display = "none"
}
if (sidebar.style.display === "block") {
  home.onclick = function () {
    sidebar.style.display = "none"
  }
}
polygon.onclick = function () {
  music.play()
}

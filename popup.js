// Initialize button with user's preferred color
let addAlias = document.getElementById("addAlias");

chrome.storage.sync.get("color", ({ color }) => {
  changeColor.style.backgroundColor = color;
});


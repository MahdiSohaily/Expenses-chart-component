const items = document.getElementsByClassName("g-item");
fetch("./data.json")
  .then((response) => response.json())
  .then((json) => createGraph(json));
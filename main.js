const items = document.getElementsByClassName("g-item");
const tags = document.getElementsByClassName("tag");
fetch("./data.json")
  .then((response) => response.json())
  .then((json) => createGraph(json));
  
function createGraph(json) {
  let max= 0;
  let index= 0;
  let maxElem = null;
  
  for (let counter = 0; counter < json.length; counter++) {
    let elem = items[counter];
    let tag = tags[counter];
    if (max < json[counter].amount) {
      max = json[counter].amount;
      index = counter;
    }
    elem.style.height = json[counter].amount+10 + "%";
    tag.innerHTML = "$"+json[counter].amount;
  }
  maxElem =  items[index];
  maxElem.style.backgroundColor = 'hsl(186, 34%, 60%)';
}

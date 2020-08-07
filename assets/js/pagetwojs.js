//table
const reviewBody = document.querySelector("#jsonFood > tbody");

function loadReviews () {
  const request = new XMLHttpRequest();

  request.open("get", "assets/food.json");
  request.onload = () => {
    try {
          const json = JSON.parse(request.responseText);
          populateReviews(json);
        } catch (e) {
          console.warn("Could not load reviews :(");
        }
  };

  request.send();
}

function populateReviews (json) {   
  json.forEach((row) => {

    const tr = document.createElement("tr");

      row.forEach((cell) => {

        const td = document.createElement("td");
        td.textContent = cell;
        tr.appendChild(td);

      });

      reviewBody.appendChild(tr);

  });
}

document.addEventListener("DOMContentLoaded", () => {loadReviews() });

//comment section
const writeComment = () => {
    const commentVal = document.getElementById('enterComment').value
    const commentName = document.getElementById('comName').value
    document.getElementById('displayComment')
    .innerHTML = `<b>${commentName} - ${document.lastModified}</b>
    <br><br>${commentVal}`
  }
  
  document.getElementById('commentContents').addEventListener('click', writeComment)
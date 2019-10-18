//review pages items / fetching from json
//followed this tutorial https://www.youtube.com/watch?v=12tjh_6xL2M&list=LLLMyi7GFP0UAUHbmxhtYWjw&index=5&t=0s
const reviewBody = document.querySelector("#jsonTanks > tbody");

function loadReviews () {
  const request = new XMLHttpRequest();

  request.open("get", "assets/equipment.json");
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

//populating the table
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

//stars
//followed this tutorial https://www.youtube.com/watch?v=dPCj6Qkq13Y&t=0s
document.addEventListener('DOMContentLoaded', function(){
  addListeners();
  setRating();
});

function addListeners(){
  var stars = document.querySelectorAll('.star');
  [].forEach.call(stars, function(star, index){
    star.addEventListener('click', (function(idx){
      console.log('adding rating on', index);
      document.querySelector('.stars').setAttribute('data-rating',  idx + 1);  
      console.log('Rating is now', idx+1);
      setRating();
    }).bind(window,index) );
  });
  
}

function setRating(){
  var stars = document.querySelectorAll('.star');
  var rating = parseInt( document.querySelector('.stars').getAttribute('data-rating') );
  [].forEach.call(stars, function(star, index){
    if(rating > index){
      star.classList.add('rated');
      console.log('added rated on', index );
    }else{
      star.classList.remove('rated');
      console.log('removed rated on', index );
    }
  });
}


//review pages comment section

// const writeComment = e => {
//   e.preventDefault()
//   const commentVal = document.getElementById('enterComment').value
//   const commentName = document.getElementById('comName').value
//   let li = document.createElement('li')
//   li.appendChild(document.createTextNode(commentVal))
//   lstToDo.append(li)

const writeComment = () => {
  var node = document.createElement("li")
  var commentVal = document.getElementById('enterComment').value
  var commentName = document.getElementById('comName').value
  node.appendChild(commentVal).innerHTML = `<b>${commentName} - ${document.lastModified}</b>
  <br><br>${commentVal}`
  document.getElementById('displayComment').appendChild(node)
}

document.getElementById('commentContents').addEventListener('click', writeComment)
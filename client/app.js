const form = document.querySelector('form');
const loadingElement = document.querySelector('.loading');
const aniterElement = document.querySelector('.anitters')

const API_URL = 'http://localhost:5000/ans';

loadingElement.style.display = '';

listAllanitters()

form.addEventListener('submit', (e) => {
  e.preventDefault();
  const fomData = new FormData(form);
  const name = fomData.get('name');
  const content = fomData.get('content');
  // create a content
  const animal = {
    name,
    content
  }

  // hide form and show loading.gif
  form.style.display = 'none';
  loadingElement.style.display = '';

  try {
    fetch(API_URL, {
      method: 'POST',
      body: JSON.stringify(animal),
      headers: {
        'content-type': 'application/json',
        'Access-Control-Allow-Origin': 'http://localhost:5000/ans'
      }
    }).then(response => response.json())
      .then(createdAnimal => {
        console.log(createdAnimal);
        form.reset();
        form.style.display = '';
        listAllanitters();
      })
  } catch (error) {
    console.log(error);
  }
})

function listAllanitters() {
  aniterElement.innerHTML = '';
  fetch(API_URL)
    .then(response => response.json())
    .then(anitters => {
      console.log(anitters);
      anitters.reverse();
      anitters.forEach(animal => {
        // create a new div to show anitters
        const div = document.createElement('div');
        // create h3 tag for name
        const header = document.createElement('h3');
        header.textContent = animal.name;
        // create p tag for content
        const contents = document.createElement('p');
        contents.textContent = animal.content;
        // create small tag for date
        const date = document.createElement('small');
        date.textContent = Date(animal.created);

        div.appendChild(header);
        div.appendChild(contents);
        div.appendChild(date);
        // apply all changes to the div in index page
        aniterElement.appendChild(div);
      })
      loadingElement.style.display = 'none';
    })
}
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
        loadingElement.style.display = 'none';
      })
  } catch (error) {
    console.log(error);
  }
})

function listAllanitters() {
  fetch(API_URL)
    .then(response => response.json())
    .then(anitters => {
      console.log(anitters);
      anitters.forEach(animal => {
        const div = document.createElement('div');
        const header = document.createElement('h3');
        header.textContent = animal.name;
        const contents = document.createElement('p');
        contents.textContent = animal.content;

        div.appendChild(header);
        div.appendChild(contents);

        aniterElement.appendChild(div);
      })
      loadingElement.style.display = 'none';
    })
}
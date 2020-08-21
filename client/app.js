const form = document.querySelector('form');

const loadingElement = document.querySelector('.loading');

// const aniterElement = document.querySelector('.anitters')

const API_URL = 'http://localhost:5000/ans';

loadingElement.style.display = 'none';

form.addEventListener('submit', (e) => {
  e.preventDefault();
  const fomData = new FormData(form);
  const name = fomData.get('name');
  const content = fomData.get('content');
  // create a content
  const animal = {
    name, content
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
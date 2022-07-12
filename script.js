const img = document.querySelector('img');
  fetch('https://api.giphy.com/v1/gifs/translate?api_key=l1Y8prdtpdkWGDMU7DnXlhOWb2Ea0dTH&s=humans', {mode: 'cors'})
   .then(function(response) {
      return response.json();
    })
    .then(function(response) {
      img.src = response.data.images.original.url;
    });

document.addEventListener('DOMContentLoaded', function() {
  var imageContainer = document.getElementById('imageContainer');

  var picsList = [
    'default.jpg',
    'image1.jpg',
    'image2.jpg',
    'image3.jpg',
    'image4.jpg',
    'image5.jpg',
    'image6.jpg',
    'image7.jpg',
  ];

  var randomIndex = Math.floor(Math.random() * picsList.length);
  var randomImageSrc = 'src/pics/' + picsList[randomIndex];
  
  var imageElement = imageContainer.querySelector('img');
  imageElement.src = randomImageSrc;
});
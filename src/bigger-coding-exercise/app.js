async function getRandomDogImage() {
  try {
    const response = await fetch('https://dog.ceo/api/breeds/image/random');
    if (!response.ok) {
      throw { status: response.status };
    }
    const data = await response.json();
    return data.message;
  } catch (error) {
    console.error('Error requesting dog image API', error);
  }
}

async function getMultipleRandomDogImages(amount) {
  try {
    const response = await fetch(
      `https://dog.ceo/api/breeds/image/random/${amount}`
    );
    if (!response.ok) {
      throw { status: response.status };
    }
    const data = await response.json();
    return data.message;
  } catch (error) {
    console.error('Error requesting dog image API', error);
  }
}

async function getImagesByBreed(breed) {
  try {
    const response = await fetch(
      `https://dog.ceo/api/breed/${breed}/images/random/10`
    );
    if (!response.ok) {
      throw { status: response.status };
    }
    const data = await response.json();
    return data.message;
  } catch (error) {
    console.error('Error requesting dog image API', error);
  }
}

// extract the breed from a dog image url
function getBreedFromUrl(url) {
  const [_, breedUrlMatch] = url.match(/\/breeds\/(.*)\//);
  return breedUrlMatch.split('-').reverse().join(' ');
}

async function initialiseMainImage() {
  const container = document.getElementById('main-image-container');

  container.textContent = 'Loading...';

  const imageUrl = await getRandomDogImage();
  const breed = getBreedFromUrl(imageUrl);

  const image = document.createElement('img');
  image.src = imageUrl;
  image.alt = breed;

  container.textContent = '';
  container.append(image);
}

// updates the image links with a new array of image urls
// if the urls array is not provided, 10 random dog images are fetched instead
async function updateImageLinks(urls) {
  const container = document.getElementById('image-links-container');

  container.textContent = 'Loading...';

  const imageUrls = urls || (await getMultipleRandomDogImages(10));

  const list = document.createElement('ul');
  imageUrls.forEach((url) => {
    const breed = getBreedFromUrl(url);
    const listItem = document.createElement('li');

    const link = document.createElement('a');
    link.href = url;
    link.target = '_blank';

    link.onclick = (event) => {
      event.preventDefault();
      updateMainImage(url, breed);
    };

    const image = document.createElement('img');
    image.src = url;
    image.alt = breed;

    link.append(image);
    link.append(breed);

    listItem.append(link);

    list.append(listItem);
  });

  container.textContent = '';
  container.append(list);
}

function updateMainImage(url, alt) {
  const image = document.querySelector('#main-image-container img');

  image.src = url;
  image.alt = alt;
}

function initialiseSearch() {
  const form = document.getElementById('breed-search');

  form.onsubmit = async (event) => {
    event.preventDefault();
    const input = form.querySelector('input');
    const imageUrls = await getImagesByBreed(input.value);

    updateImageLinks(imageUrls);
  };
}

function initialise() {
  initialiseMainImage();
  updateImageLinks();
  initialiseSearch();
}

// This slideshow code was graciously borrowed from https://medium.com/@dimterion/images-slider-with-javascript-95349e0ab4fc.

const imgUrlsArr = [
  "/images/slideshow/performing.jpg",
  "/images/slideshow/cat.jpg",
  "/images/slideshow/grad.jpg",
  "/images/slideshow/soul_read.jpg"
];

const articleContainer = document.getElementById("article-container");

articleContainer.innerHTML = `<img src="${imgUrlsArr[0]}" class="image" />`;

let imgIndex = 0;

function previousImg() {
  if (imgIndex > 0 && imgIndex < imgUrlsArr.length) {
    imgIndex--;
  } else {
    imgIndex = imgUrlsArr.length - 1;
  }
  articleContainer.innerHTML = `<img src="${imgUrlsArr[imgIndex]}" class="image" />`;
}

function nextImg() {
  if (imgIndex >= 0 && imgIndex < imgUrlsArr.length - 1) {
    imgIndex++;
  } else {
    imgIndex = 0;
  }
  articleContainer.innerHTML = `<img src="${imgUrlsArr[imgIndex]}" class="image" />`;
}
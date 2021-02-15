$(document).ready(function () {
    $('.carousel').carousel();
});

let slideshow = document.getElementById('cs');

document.addEventListener('DOMContentLoaded', () => {
    getImages();
});

function getImages() {
    fetch('https://picsum.photos/v2/list?page=5&limit=5')
        .then(function (resources) {
            return resources.json();
        })
        .then(function (imgs) {
            let html = '';

            imgs.forEach(elt => {
                console.log(elt.download_url);
                html += `<a class="carousel-item" href=""><img src="${elt.download_url}" style="width: 800px; height: auto;></a>`;
            });

            slideshow.innerHTML = html;

            console.log(slideshow.innerHTML);
        })
        .catch(function (err) {
            console.log(err);
        });

}
let imagestoLoad = document.querySelectorAll("img[data-src]");


const loadImages = (image) => {
    image.setAttribute('src', image.getAttribute('data-src'));
    image.onload = () => {
        image.removeAttribute('data-src');
    };
};

const imageOptions = {
    threshold: 1,
    rootMargin: "0px 0px 50px 0px"
};
if ('IntersectionObserver' in window) {
    const imgObserver = new IntersectionObserver((items, observer) => {
        items.forEach((item) => {
            if (item.isIntersecting) {
                loadImages(item.target);
                imgObserver.unobserve(item.target);
            }
        });
    });
    imagestoLoad.forEach((img) => {
        imgObserver.observe(img);
    });
} else {
    imagestoLoad.forEach((img) => {
        loadImages(img);
    });
}

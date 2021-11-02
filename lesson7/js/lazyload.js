//get all images that need to be loading (data-src attribute)

const imagesToLoad = document.querySelectorAll("[data-src]");

const imgOption = {
    threshold: 1,
    rootMargin:"0px 0px 50px 0px"
};

const loadImages = (image) => {
    image.setAttribute('src', image.getAttribute('data-src'));
    image.onload = () => {image.removeAtttribute ('data-src');};
};

//first check to see if intersection observer is supported
if('IntersectionObserver' in window){
    const ingObserver = new IntersectionObserver((items,observer) =>{
        items.forEach((item) =>{
            if (item.isIntersecting){
                loadImages(item.target);
                observer.unobserve(item.target);
            }
        });
    }, imgOption);


    imagesToLoad.forEach((img) =>{
        Observer.observe(img);
    });
}
else{
    imagesToLoad.forEach((img) =>{
        loadImages(img);
    });
}

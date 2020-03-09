const changePhotosOnHover = () => {
    let commandPhotos = document.querySelectorAll('.command__photo'),
        src;

    commandPhotos.forEach((elem) => {

        elem.addEventListener('mouseenter', (e) => {
            src = e.target.getAttribute('src');
            e.target.src = e.target.dataset.img;

        });
        elem.addEventListener('mouseleave', (e) => {
            e.target.src = src;
        })

    });
};

export default changePhotosOnHover;
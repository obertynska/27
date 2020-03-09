const popUpDo = () => {

    const popUp = document.querySelector('.popup'),
        popUpBtn = document.querySelectorAll('.popup-btn');



    const togglePopUp = () => {
        popUp.style.display = 'block';
    };

    popUp.addEventListener('click', (event) => {
        let target = event.target;

        if (target.classList.contains('popup-close')) {
            popUp.style.display = 'none';
        } else {
            target = target.closest('.popup-content');
            if (!target) {
                popUp.style.display = 'none';
            }
        }
    });


    popUpBtn.forEach((elem) => {
        elem.addEventListener('click', togglePopUp)
    });

};

export default popUpDo;
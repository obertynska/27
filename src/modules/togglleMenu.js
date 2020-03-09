const togglleMenu = () => {

    const menu = document.querySelector('menu');
    
    document.body.addEventListener('click', (event) => {
        let target = event.target;

        if (target && target.closest('.menu')) {
            menu.classList.add('active-menu');
        } else if (target && (target.tagName === 'A' || !target.classList.contains('active-menu'))) {
            menu.classList.remove('active-menu');
        }

    });
};

export default togglleMenu;
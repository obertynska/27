const validFormsTelephone = () =>{
    let phoneInput = document.querySelectorAll("input[type='tel']"),
    formTextInput = document.querySelectorAll('input[type=text]');

    phoneInput.forEach((elem) => {
         elem.addEventListener('input', ()=>{
            elem.value = elem.value.replace(/[^0-9+]/, '');
         });
    });

    formTextInput.forEach((elem) => {
        elem.addEventListener('input', () => {
            elem.value = elem.value.replace(/[^А-Яа-яЁё]\s/, '');
        });
    });


};



export default validFormsTelephone;

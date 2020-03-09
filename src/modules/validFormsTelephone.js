const validFormsTelephone = () =>{
    let calcInput = document.querySelectorAll("input[type='number']");

    calcInput.forEach((elem) => {
         elem.addEventListener('input', ()=>{
            calcInput.value = calcInput.value.replace(/[^0-9+]/, '');
         });
    });
};

export default validFormsTelephone;
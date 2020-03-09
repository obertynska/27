const sendForm = () => {
    const errorMessage = 'Что то пошло не так',
        loadMessage = 'Загрузка...',
        successMessage = 'Спасибо! Мы скоро с вами свяжемся!',
        forms = document.querySelectorAll('form'),
       // formTextInput = document.querySelectorAll('input[type=text]'),
      //  phoneForm = document.querySelectorAll('.form-phone'),
        statusMessage = document.createElement('div');

    statusMessage.style.cssText = 'font-size: 2rem; color: #19b5fe;';

    /*phoneForm.forEach((elem) => {
        elem.addEventListener('input', () => {

            let res = elem.value.match(/^\+?[0-9]*$/g);
            elem.value = '';
            if (res) {
                elem.value = res.join(',');
            }
        });
    });*/

    


    forms.forEach((item) => {
        item.addEventListener('submit', function (event) {
            event.preventDefault();
            this.appendChild(statusMessage);
            statusMessage.textContent = loadMessage;
            const formData = new FormData(this);
            let body = {};
            formData.forEach((value, key) => {
                body[key] = value;
            });
          
            postData(body)
                .then((response) => {
                   statusMessage.textContent = successMessage;
                   setTimeout(()=>{
                        statusMessage.textContent = "";
                    }, 5000)
                    
                    if (response.status !== 200) {
                        throw new Error('status is not 200');

                    }

                    let inputs = document.querySelectorAll('input');
                    inputs.forEach((elem) => {
                        elem.value = '';
                    });
                })
                .catch((error) => {
                    statusMessage.textContent = errorMessage;
                    setTimeout(()=>{
                        statusMessage.textContent = "";
                    }, 5000)
                    console.log(error);
                });
            /*
            //если очищать импуты послу успеха и ошибки
            .finally(() => {
                let inputs = document.querySelectorAll('input');
                inputs.forEach((elem) => {
                    elem.value = '';
                });
            });*/
        });

    });


    const postData = (body) => {
        return fetch('./server.php', {
            method: 'POST',
            headers: { 'Content-Type': 'multipart/form-data' },
            body: JSON.stringify(body)
        
        });
       
    };


};

export default sendForm;

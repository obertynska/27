const calculator = (price = 100) => {
    const calcBlock = document.querySelector('.calc-block'),
        calcType = document.querySelector('.calc-type'),
        calcSquare = document.querySelector('.calc-square'),
        calcCount = document.querySelector('.calc-count'),
        calcDay = document.querySelector('.calc-day'),
        totalValue = document.getElementById('total');

    const countSum = () => {
        let total = 0,
            countValue = 1,
            dayValue = 1,
            typeValue = calcType.options[calcType.selectedIndex].value,
            squareValue = +calcSquare.value;


        if (calcCount.value && calcCount.value < 1) {
            countValue = 0;
        } else if (calcCount.value && calcCount.value > 1) {
            countValue += (calcCount.value - 1) / 10;
        }

        if (calcDay.value && calcDay.value < 1) {
            dayValue = 0;
        } else if (calcDay.value && calcDay.value < 5 && calcDay.value > 1) {
            dayValue *= 2;
        } else if (calcDay.value && calcDay.value < 10) {
            dayValue *= 1.5;
        }


        if (typeValue && squareValue) {
            total = price * typeValue * squareValue * countValue * dayValue;
        }

        totalValue.textContent = Math.ceil(total);
    };


    calcBlock.addEventListener('change', (e) => {
        const target = e.target;

        if (target.matches('.calc-type') || target.matches('.calc-square') || target.matches('.calc-day') || target.matches('.calc-count')) {
            countSum();
        }


    });

};

export default calculator;
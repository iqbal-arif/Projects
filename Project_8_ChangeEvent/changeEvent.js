let input = document.querySelector('.input');
        let result = document.querySelector('#result');
        input.addEventListener('change', function () {
            result.textContent = this.value;
document.addEventListener('DOMContentLoaded', function() {
    const squareButton = document.querySelector('.square-button');
    const triangleButton = document.querySelector('.triangle-button');
    const circleButton = document.querySelector('.circle-button');

    function createShape(shape) {
        const div = document.createElement('div');
        div.className = `shape ${shape}`;
        div.style.position = 'absolute';
        div.style.top = `${(Math.random() * window.innerHeight * 0.7 + 50)}px`;
        div.style.left = `${(Math.random() * window.innerWidth * 0.7 + 20)}px`;

        div.addEventListener('dblclick', function() {
            this.remove();
        });

        switch(shape) {
            case 'square':
            case 'circle':
                var w = Math.random()*300;
                div.style.width = `${w}px`;
                div.style.height = `${w}px`;
                div.addEventListener('click', function() {
                    this.style.backgroundColor = 'rgba(0, 255, 0, 0.7)';
                });
                break
            case 'triangle':
                var w = Math.random()*300;
                var r = Math.random()*1.5;
                div.style.borderLeft = `${w*r}px` + ' solid transparent';
                div.style.borderRight = `${w*r}px` + ' solid transparent';
                div.style.borderBottom = `${w}px` + ' solid blue';
                console.log(`${r}px` + ' solid transparent');
                div.addEventListener('click', function() {
                    this.style.borderBottomColor = 'rgba(0, 255, 0, 0.7)';
                });
                break
        }

        document.body.appendChild(div);
    }

    squareButton.addEventListener('click', function() {
        var input = document.querySelector('.text-input');
        var inputNumber = Number(input.value);
        var i = 0;
        if (inputNumber > 10000) {
            inputNumber = 1;
            alert("Количество отрисовываемых фигур должно быть меньше 10000 \n" + "Отрисована одна фигура");
        } else if (inputNumber <= 0) {
            inputNumber = 1;
            alert("Количество отрисовываемых фигур должно быть больше 0 \n" + "Отрисована одна фигура");
        } else if (isNaN(inputNumber)) {
            inputNumber = 1;
            alert("Количество отрисовываемых фигур должно быть числом \n" + "Отрисована одна фигура");
        }
        do {
            createShape('square');    
            i += 1;
        } while (inputNumber > i);
    });

    triangleButton.addEventListener('click', function() {
        var input = document.querySelector('.text-input');
        var inputNumber = Number(input.value);
        var i = 0;
        if (inputNumber > 10000) {
            inputNumber = 1;
            alert("Количество отрисовываемых фигур должно быть меньше 10000 \n" + "Отрисована одна фигура");
        } else if (inputNumber <= 0) {
            inputNumber = 1;
            alert("Количество отрисовываемых фигур должно быть больше 0 \n" + "Отрисована одна фигура");
        } else if (isNaN(inputNumber)) {
            inputNumber = 1;
            alert("Количество отрисовываемых фигур должно быть числом \n" + "Отрисована одна фигура");
        }
        do {
            createShape('triangle');    
            i += 1;
        } while (inputNumber > i);
    });

    circleButton.addEventListener('click', function() {
        var input = document.querySelector('.text-input');
        var inputNumber = Number(input.value);
        var i = 0;
        if (inputNumber > 10000) {
            inputNumber = 1;
            alert("Количество отрисовываемых фигур должно быть меньше 10000 \n" + "Отрисована одна фигура");
        } else if (inputNumber <= 0) {
            inputNumber = 1;
            alert("Количество отрисовываемых фигур должно быть больше 0 \n" + "Отрисована одна фигура");
        } else if (isNaN(inputNumber)) {
            inputNumber = 1;
            alert("Количество отрисовываемых фигур должно быть числом \n" + "Отрисована одна фигура");
        }
  
        do {
            createShape('circle');    
            i += 1;
        } while (inputNumber > i);
    });
});
document.addEventListener('DOMContentLoaded', function() {
    const squareButton = document.querySelector('.square-button');
    const triangleButton = document.querySelector('.triangle-button');
    const circleButton = document.querySelector('.circle-button');

    function createShape(shape) {
        const div = document.createElement('div');
        div.className = `shape ${shape}`;
        div.style.position = 'absolute';
        div.style.top = `${Math.random() * window.innerHeight}px`;
        div.style.left = `${Math.random() * window.innerWidth}px`;

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
        var inputNumber = Number(input.value)
        var i = 0
        do {
            createShape('square');    
            i += 1;
        } while (inputNumber > i);
    });

    triangleButton.addEventListener('click', function() {
        var input = document.querySelector('.text-input');
        var inputNumber = Number(input.value)
        var i = 0
        do {
            createShape('triangle');    
            i += 1;
        } while (inputNumber > i);
    });

    circleButton.addEventListener('click', function() {
        var input = document.querySelector('.text-input');
        var inputNumber = Number(input.value)
        var i = 0
        do {
            createShape('circle');    
            i += 1;
        } while (inputNumber > i);
    });
});
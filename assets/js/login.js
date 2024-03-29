{
    const passwordInput = document.querySelector('#password');
    const passwordFeedback = document.querySelector('#strength-output');
    const strengthStr = {
        0: 'Худший',
        1: 'Плохой',
        2: 'Слабый',
        3: 'Хороший',
        4: 'Сложный'
    }
    const canvasWrapper = document.querySelector('.canvas-wrap');
    const canvas = canvasWrapper.querySelector('canvas');
    const poster = document.querySelector('.poster');
    const posterImg = poster.style.backgroundImage.match(/\((.*?)\)/)[1].replace(/('|")/g,'');
    imagesLoaded(poster, { background: true }, () => {
        document.body.classList.remove('loading');
    });


    const ctx = canvas.getContext('2d');
    const img = new Image();
    let imgRatio;
    let wrapperRatio;
    let newWidth;
    let newHeight;
    let newX;
    let newY;

    let pxFactor = 100;

    img.src = posterImg;
    img.onload = () => {
        const imgWidth = img.width;
        const imgHeight = img.height;
        imgRatio = imgWidth / imgHeight;
        setCanvasSize();
        render();
    };

    const setCanvasSize = () => {
        canvas.width = canvasWrapper.offsetWidth;
        canvas.height = canvasWrapper.offsetHeight;
    };

    const render = () => {
        const w = canvasWrapper.offsetWidth;
        const h = canvasWrapper.offsetHeight;

        newWidth = w;
        newHeight = h;
        newX = 0;
        newY = 0;
        wrapperRatio = newWidth / newHeight;

        if ( wrapperRatio > imgRatio ) {
            newHeight = Math.round(w / imgRatio);
            newY = (h - newHeight) / 2;
        } 
        else {
            newWidth = Math.round(h * imgRatio);
            newX = (w - newWidth) / 2;
        }


        const size = pxFactor * 0.01;

        ctx.mozImageSmoothingEnabled = size === 1 ? true : false;
        ctx.webkitImageSmoothingEnabled = size === 1 ? true : false;
        ctx.imageSmoothingEnabled = size === 1 ? true : false;

        ctx.clearRect(0, 0, canvas.width, canvas.height);
        
        ctx.drawImage(img, 0, 0, w*size, h*size);
        
        ctx.drawImage(canvas, 0, 0, w*size, h*size, newX, newY, newWidth+.05*w, newHeight+.05*h);
    };

    window.addEventListener('resize', () => {
        setCanvasSize();
        render();
    });

    passwordInput.addEventListener('input', () => {
        const val = passwordInput.value;
        const result = zxcvbn(val);
        
        pxFactor = -97/11*Math.min(11,Math.round(result.guesses_log10)) + 100 ;
        
        if ( pxFactor != 3 && pxFactor != 100 ) {
            pxFactor -= pxFactor/100*50;
        }
        
        passwordFeedback.innerHTML = val !== '' ? `Сложность пароля: ${strengthStr[result.score]}` : '';
        render();
    });
}

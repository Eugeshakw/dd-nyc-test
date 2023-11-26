// const mySlider = new Splide("#mySlider", {
//    pagination: false,
   
// })
// mySlider.mount()



const btnRight = document.querySelector('#btn-right');
const btnLeft = document.querySelector('#btn-left');
const imgSlideList = document.querySelector('.img-slide-list').children;
const txtSlideList = document.querySelector('.txt-slide-list').children;
const txtAnimation = document.querySelectorAll('.slide-animate');
const numberPagination = document.querySelector('#number')

let currentSlideIndex = 0;

btnRight.addEventListener('click', handleRightClick);
btnLeft.addEventListener('click', handleLeftClick);
btnLeft.disabled = true;
txtSlideList[0].classList.add('img-slider-opacityTrue');
btnLeft.firstElementChild.classList.add('btn-disabled');
numberPagination.classList.remove('number-disabled');




function handleRightClick() {
    currentSlideIndex = (currentSlideIndex + 1) % imgSlideList.length;
    txtSlideList[currentSlideIndex].classList.remove('img-slider-opacityTrue');
    
    
    numberPagination.classList.add('number-disabled');
   
    setTimeout(() => {
        numberPagination.textContent = parseInt(numberPagination.textContent) + 1
        numberPagination.classList.remove('number-disabled');
    }, 250)

    updateSlide();
    updateButtonState();
    
    console.log('Switched to the next image');
    btnLeft.firstElementChild.classList.remove('btn-disabled')
    imgSlideList[0].classList.add('img-slider-opacityFalse')
}

function handleLeftClick() {
    currentSlideIndex = (currentSlideIndex - 1 + imgSlideList.length) % imgSlideList.length;

        numberPagination.classList.add('number-disabled');

    setTimeout(() => {
        numberPagination.textContent = parseInt(numberPagination.textContent) - 1
        numberPagination.classList.remove('number-disabled');
    }, 250)

        updateSlide();
        updateButtonState();
        console.log('timed out');
    console.log('Switched to the previous image');
    btnRight.firstElementChild.classList.remove('btn-disabled')
}

function updateSlide() {
    for (let i = 0; i < imgSlideList.length; i++) {
        if (i === currentSlideIndex) {
            imgSlideList[i].classList.add('img-slider-opacityTrue');
            // txtSlideList[i].classList.add('img-slider-opacityTrue');

            setTimeout(()=> {
                txtSlideList[i].classList.add('img-slider-opacityTrue');
                txtAnimation[i].classList.add('slide-up-wrap');
                txtAnimation[i].addEventListener('animationend', removeSlideUpWrap);
                
            },250)
            
        } else {
            imgSlideList[i].classList.remove('img-slider-opacityTrue');
            txtSlideList[i].classList.remove('img-slider-opacityTrue');
            txtAnimation[i].classList.remove('slide-up-wrap');
            txtAnimation[i].removeEventListener('animationend', removeSlideUpWrap);
        }
    }
}


function updateButtonState() {
    btnLeft.disabled = currentSlideIndex === 0;
    btnRight.disabled = currentSlideIndex === imgSlideList.length - 1;

    if(btnRight.disabled){
        btnRight.firstElementChild.classList.add('btn-disabled')
        
    }
    if(btnLeft.disabled){
        btnLeft.firstElementChild.classList.add('btn-disabled')
    }
    
}


function removeSlideUpWrap() {
    this.classList.remove('slide-up-wrap');
}










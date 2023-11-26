const mySlider = new Splide("#mySlider", {
   pagination: false,
   
})
mySlider.mount()



const btnRight = document.querySelector('#btn-right');
const btnLeft = document.querySelector('#btn-left');
const mainBlock = document.querySelectorAll('.splide__track');

const imgSlider = document.querySelectorAll('.img-slider');
const imgSliderTwo = document.querySelectorAll('.img-slider-two');

const blockAnimate = document.querySelectorAll('.slide-animate');

console.log(btnRight);
console.log(btnLeft);



function handleClick()  {



   
    
    // mainBlock.forEach(element => {
    //     element.classList.add('con-test-main-disabled')
        
    // })
    imgSlider.forEach(element => {
    element.classList.add('img-slider-opacityFalse');
    });

    imgSliderTwo.forEach(element => {
        element.classList.add('img-slider-opacityTrue');
    });
    
    

    setTimeout(() => {  
        
        handleOpacity()
        blockAnimationOpen()
        
        
        // imgAnimationClouse()
    }, 500);

    setTimeout(()=> {
        blockAnimationClouse()
        
    },1000)

    

}


function blockAnimationOpen() {
    
    blockAnimate.forEach(element => {
        element.classList.add('slide-up-wrap');
    });

}
function blockAnimationClouse() {
         blockAnimate.forEach(element => {
            element.classList.remove('slide-up-wrap'); 
    });

        
}

function imgAnimationClouse() {

    imgSliderTwo.forEach(element => {
        element.classList.remove('img-slider-opacityTrue');
    });

    imgSlider.forEach(element => {
        element.classList.remove('img-slider-opacityFalse');
    });

    
}


function handleOpacity() {
    
    mainBlock.forEach(element => {
        element.classList.remove('con-test-main-disabled')
    })

}

btnRight.addEventListener('click', handleClick);
btnLeft.addEventListener('click', handleClick);




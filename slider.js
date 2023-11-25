const mySlider = new Splide("#mySlider", {
   pagination: false,
   
})
mySlider.mount()



const btnRight = document.querySelector('#btn-right');
const btnLeft = document.querySelector('#btn-left');
const imgBlock = document.querySelectorAll('.img-slider')
const blockAnimate = document.querySelectorAll('.slide-animate');
console.log(btnRight);
console.log(btnLeft);



function handleClick()  {


   
    
    imgBlock.forEach(element => {
        element.classList.add('img-slider-disabled')
        
    })
     
    setTimeout(() => {  
        
        handleOpacity()
        blockAnimationOpen()
       

   
    }, 100);

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



function handleOpacity() {
    
    imgBlock.forEach(element => {
        element.classList.remove('img-slider-disabled')
    })

}

btnRight.addEventListener('click', handleClick);
btnLeft.addEventListener('click', handleClick);

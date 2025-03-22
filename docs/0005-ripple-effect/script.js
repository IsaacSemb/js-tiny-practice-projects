
const buttonElement = document.querySelector('.btn')
const ripple = document.querySelector('.btn:hover::before')

buttonElement.addEventListener(

    // when mose touches it
    'mouseover',

    (evt)=>{

        // what to do
        // console.log(`layerX: ${evt.layerX} --- layerY: ${evt.layerY} ---- pageX: ${evt.pageX} --- pageY: ${evt.pageY}`);
        // console.log(`offsetX: ${evt.offsetX} --- offsetY: ${evt.offsetY}`);
        
        //  we just need to use layerX and layerY ( this is consistent --- better to use offset)
        // buttonElement.style.setProperty('--leftPosition', evt.layerX+'px')
        // buttonElement.style.setProperty('--topPosition', evt.layerY+'px')

        buttonElement.style.setProperty('--leftPosition', evt.offsetX+'px')
        buttonElement.style.setProperty('--topPosition', evt.offsetY+'px')



    }

)



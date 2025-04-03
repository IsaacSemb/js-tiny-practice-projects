const loadMoreButton = document.querySelector('.btn')
const imageContainer = document.querySelector('.image-container')

console.log('hello');
console.log(loadMoreButton);


function addMoreImages(){

    let imageNumber = 5

    for (let i = 0; i < imageNumber; i++) {
        
        const newImageElement = document.createElement('img')
        const randomNumber = Math.floor(Math.random()*2000)
        
        console.log(randomNumber);
        
        newImageElement.src = `https://picsum.photos/300?random=${randomNumber}`
    
        imageContainer.appendChild(
            newImageElement
        )
    }


}

function addMoreImagesHTML(){
    
    for (let i = 0; i < 6; i++) {
        
        const randomNumber = Math.floor(Math.random()*2000)    
        
        const newImageElement = `<img src="https://picsum.photos/300?random=${randomNumber}" />`
    
        imageContainer.insertAdjacentHTML(
            "beforeend",
            newImageElement
        )
    }

}

loadMoreButton.addEventListener(
    'click', 
    ()=>{
        addMoreImages()
    }
)
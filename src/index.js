console.log('%c HI', 'color: firebrick')
document. addEventListener('DOMContentloaded',funtion());{
    fetchingDogImages()

}

function fetchDOgImages(){
    //alert("")
    fetch('https://dog.ceo/api/breeds/image/random/4')
         .then(response=> response.json())
         .then(data=>{
            let images =data.message
            images.forEach(image =>{
             console.log(image)
             loadImagestoDOM()
            });
        })



}

function loadImagestoDOM(image){
    let dogCont = document.getElementById('dog-image-')
    let ourimage = documnt.createElement('img')
    ourImage_src = 'image'
    dogCont.appendChild (ourimage)
}
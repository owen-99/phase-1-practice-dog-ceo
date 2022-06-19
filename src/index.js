console.log('%c HI', 'color: firebrick')

document.addEventListener("DOMContentLoaded", function() {
        console.log('inside DOMContentLoaded')


        let dogImageContainer = document.getElementById('dog-image-container')
        let dogUL = document.querySelector('#dog-breeds')

        // CHALLENGE 1
        fetch("https://dog.ceo/api/breeds/image/random/4")
            .then(response => response.json())
            .then(function(jsonObject) {
                let arrOfDogURLs = jsonObject.message
                arrOfDogURLs.forEach(url => {
                    dogImageContainer.innerHTML += makeImageTagString(url)
                })

            })



        // CHALLENGE 2
        fetch('https://dog.ceo/api/breeds/list/all')
            .then(response => response.json())
            .then(response => {
                let dogBreedsArr = Object.keys(response.message)
                dogBreedsArr.forEach((breed) => {
                    dogUL.innerHTML += `<li data-info="breed">${breed} </li>`

                })
            })

        //CHALLENGE 3

        dogUL.addEventListener("click", (event) => {
                if (event.target.dataset.info === "breed") {
                    event.target.style.color = "red"
                }



            })
            //CHALLENGE 4
        let dogSelect = document.getElementById('breed-dropdown')
        dogSelect.addEventListener("change", (event) => {
            fetch('https://dog.ceo/api/breeds/list/all')
                .then(response => response.json())
                .then(response => {
                    let dogBreedsArr = Object.keys(response.message)
                    let filteredArray = dogBreedsArr.filter(breed => {
                        return breed.startsWith(event.target.value)
                    })
                    dogUL.innerHTML = ""
                    filteredArray.forEach((breed) => {
                        dogUL.innerHTML += `<li data-info="breed">${breed} </li>`

                    })

                })

        })







    })
    // DOMcontentLoaded


function makeImageTagString(url) {
    return `<img src = "${url}" / > `
}

function makeImageTagElement(url) {
    let imageTag = document.createElement('img')
    imageTag.src = url
    return imageTag
} 
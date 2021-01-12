/***** Deliverable 1 *****/
const header = document.querySelector("#header")
console.log("Here's your header:", header)


/***** Deliverable 2 *****/
let h1 = document.querySelector('h1#header')
h1.style.color = "green"


/***** Deliverable 3 *****/
console.log('This is what the traveler object looks like: ', traveler)


  // console.log(traveler.name)
  // console.log(traveler.nickname)
  // console.log(traveler.photo)

  let name = document.querySelector('h2')
  name.textContent = traveler.name
  let nickname = document.querySelector('em')
  nickname.textContent = traveler.nickname
  let photoSrc = document.querySelector('img').setAttribute('src', traveler.photo)
  let photoAlt = document.querySelector('img').setAttribute('alt', 'Raffy')




/***** Deliverable 4 *****/
  traveler.animalSightings.forEach(function(sighting) {
    // create elements
    let list = document.createElement('li')
    let paragraph = document.createElement('p')
    let animalPhoto = document.createElement('img')
    let sightingLink = document.createElement('a')

    // add attributes
    let photoSrc = document.querySelector(animalPhoto).setAttribute('src', sighting.photo)
    list.append('photoSrc')

    // relationships
    let animalsList = document.getElementById('animals')
    animalsList.append(list)
    list.append(paragraph)
    list.append(animalPhoto)
    list.append(sightingLink)
    // show on DOM


  })

/***** Deliverable 5 *****/

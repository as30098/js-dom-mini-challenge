/***** Deliverable 1 *****/
const header = document.querySelector("#header")
console.log("Here's your header:", header)


/***** Deliverable 2 *****/
let h1 = document.querySelector('h1#header')
h1.style.color = "green"


/***** Deliverable 3 *****/
console.log('This is what the traveler object looks like: ', traveler)


  console.log(traveler.name)
  console.log(traveler.nickname)
  console.log(traveler.photo)

  let name = document.querySelector('h2')
  name.textContent = traveler.name
  let nickname = document.querySelector('em')
  nickname.textContent = traveler.nickname
  let photoSrc = document.querySelector('img').setAttribute('src', traveler.photo)
  let photoAlt = document.querySelector('img').setAttribute('alt', 'Raffy')




/***** Deliverable 4 *****/
  // traveler.animalSightings.forEach(
  //   // create elements
  //   document.createElement('li')
  //   document.createElement('p')
  //   document.createElement('img')
  //   document.createElement('a')

  //   // add attributes

  //   // relationships

  //   // show on DOM


  // )

/***** Deliverable 5 *****/

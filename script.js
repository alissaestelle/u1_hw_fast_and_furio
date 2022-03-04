let quotes = [
  `I live my life a quarter mile at a time`,
  `I said a ten-second car, not a ten-minute car`,
  `You can have any brew you want... as long as it's a Corona.`,
  `You almost had me? You never had me - you never had your car!`,
  `I don't have friends. I have family.`,
  `It don't matter if you win by an inch or a mile. Winning's winning.`
]

window.onload = function (event) {
  // Random quote of the day generator
  const randomQuote = function () {
    document.querySelector('#quote-of-the-day').textContent = `"${
      quotes[Math.floor(Math.random() * quotes.length)]
    }"`
  }
  randomQuote()

  // Do all of your work inside the window.onload function (in other words, here!)

  // Part 1

  const mainTitle = document.querySelector('#main-title')
  mainTitle.innerText = "Dom Toretto's Homepage"

  // Part 2

  const background = document.querySelector('body')
  background.style.backgroundColor = 'pink'

  // Part 3

  const staring = document.querySelector('#favorite-things')
  staring.removeChild(staring.lastElementChild)

  // Part 4

  const specialTitles = document.querySelectorAll('.special-title')
  specialTitlesArr = Array.from(specialTitles)

  specialTitlesArr.forEach((title) => {
    title.style.fontSize = '2rem'
  })

  // I SUCCESSFULLY DEPLOYED MY FIRST FOR EACH LOOP BY MYSELF!!!!!!

  // Part 5

  const pastRaces = document.querySelectorAll('#past-races li')
  pastRaces[3].remove()

  // Part 6

  // const pastRaces = document.querySelector('#past-races')

  const newRace = document.createElement('li')
  newRace.innerText = 'Baltimore'
  const parentElem = document.querySelector('#past-races')
  parentElem.append(newRace)

  // Part 7

  const newBlogPost = document.createElement('div')
  newBlogPost.setAttribute('class', 'blog-post')
  newBlogPost.style.backgroundColor = 'rebeccapurple'

  const newH1 = document.createElement('h1')
  newH1.innerText = 'Baltimore'

  const newPara = document.createElement('p')
  newPara.innerText = "But really, you don't need a car when you got family"

  const mainDiv = document.querySelector('.main')
  mainDiv.append(newBlogPost)
  newBlogPost.append(newH1)
  newBlogPost.append(newPara)
}

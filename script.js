const child__visibleButtons = document.querySelectorAll('.header__visible')

// console.log(child__visibleButtons[0])

child__visibleButtons.forEach((element, index) => {
    element.addEventListener('click', (event) => {
        event.preventDefault()

        if (event.target.parentElement.nextElementSibling != null) {
            let requiredElement = event.target.parentElement.nextElementSibling
            console.log(event, event.target.parentElement.nextElementSibling)
            if (requiredElement.classList.contains('display-none')) {
                requiredElement.classList.remove('display-none')
                event.target.innerText = '-'
            } else {
                requiredElement.classList.add('display-none')
                event.target.innerText = '+'
            }
        } else {
            if (event.target.innerText === '+') {
                event.target.innerText = '-'
            } else {
                event.target.innerText = '+'
            }
        }


    })
})

// child__visibleButtons[0].addEventListener('click', (event) => {
//     event.preventDefault()
//     let requiredElement = event.target.parentElement.nextElementSibling
//     console.log(event, event.target.parentElement.nextElementSibling)
//     if (requiredElement.classList.contains('display-none')) {
//         requiredElement.classList.remove('display-none')
//         event.target.innerText = '-'
//     } else {
//         requiredElement.classList.add('display-none')
//         event.target.innerText = '+'
//     }
// })
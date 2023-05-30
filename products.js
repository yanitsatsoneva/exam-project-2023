const seeMoreButton = document.getElementById('see-more')

seeMoreButton.addEventListener('click', (e) => {
    const elementToShow = document.getElementsByClassName('products-full')[0]

    // We show the additional items
    elementToShow.style.visibility = 'visible'
    elementToShow.style.height = '800px'

    // We hide the see more button here
    seeMoreButton.style.display = 'none'
})
const navHoverElements = document.getElementsByClassName('link');

// Add hover event listener to all nav elements
if (navHoverElements.length > 0) {
    [...navHoverElements].forEach(element => {
        console.log(element)
        element.addEventListener('mouseover', (e) => {
            const elementLinksBox = e.target.nextElementSibling;
            mouseOverNavLinkFunc(elementLinksBox);
            elementLinksBox.addEventListener('mouseover', (e) => mouseOverNavLinkFunc(elementLinksBox));
        })

        element.addEventListener('mouseout', (e) => {
            const elementLinksBox = e.target.nextElementSibling;
            mouseOutNavLinkFunc(elementLinksBox)
            elementLinksBox.addEventListener('mouseout', (e) => mouseOutNavLinkFunc(elementLinksBox));
        })
    });
}

const mouseOverNavLinkFunc = (element) => {
    element.style.opacity = 1;
    element.style.visibility = 'visible';
}

const mouseOutNavLinkFunc = (element) => {
    element.style.opacity = 0;
    element.style.visibility = 'hidden';
}

// We add the hover effect to the language picker
const languagePicker = document.getElementsByClassName('picked-language')[0]
languagePicker.addEventListener('click', (e) => {
    const listElement = document.getElementsByClassName('language-options')[0];
    const chevron = document.getElementsByClassName('chevron')[0];

    console.log(listElement.style.opacity)
    if (listElement.style.opacity == 1) {
        mouseOutNavLinkFunc(listElement)
        chevron.style.rotate = '180deg';
    } else {
        mouseOverNavLinkFunc(listElement)
        chevron.style.rotate = '0deg';
    }
})
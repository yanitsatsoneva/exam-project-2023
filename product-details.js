const filteringButtons = document.getElementsByClassName('info-banner-filer');

[...filteringButtons].forEach((element, index) => {
    element.addEventListener('click', (e) => {
        // If we click on the first filer, we show the default value 
        // in the text info box

        const filteredInfo = document.getElementById('filtered')
        const nonFilteredInfo = document.getElementById('non-filtered')
        if (index === 0) {
            filteredInfo.style.display = 'none';
            nonFilteredInfo.style.display = 'block';
        } else {
            // When we click on any other filter
            // we show the filtered box
            filteredInfo.style.display = 'block';
            nonFilteredInfo.style.display = 'none';
        }

        // We remove the active class from all filters and
        // add it only to the clicked one
        [...filteringButtons].forEach(elementToRemoveClass => elementToRemoveClass.classList.remove('active'))
        e.target.classList.add('active')
    })
});
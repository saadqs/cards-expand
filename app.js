const cities = document.querySelectorAll('.card'); //Store all cards in nodeList array

cities.forEach((skyline) => {
    skyline.addEventListener('click', () => {
        removeActive();
        skyline.classList.add('active');
        console.log(skyline);
    })
})

// Function to remove the active class from cards
function removeActive() {
    cities.forEach((skyline) => {
        skyline.classList.remove('active');
    })
}










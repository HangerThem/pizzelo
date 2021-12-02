const images = document.querySelectorAll('[data-image]')
const imageOpen = document.querySelector('[data-image-slot]')
const container = document.querySelector('[data-image-container]')
const close = document.querySelector('[data-close]')

console.log(images)

images.forEach(image => {
    const source = image.src
    const alt = image.alt
    image.addEventListener('click', () => {
        imageOpen.src = source
        imageOpen.alt = alt
        container.style.display = 'block'
    });
});

close.addEventListener('click', () => {
    container.style.display = 'none'
});
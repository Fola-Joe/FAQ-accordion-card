const details = document.querySelectorAll('details');
const summary = document.querySelectorAll('summary');

summary.addEventListener('click', function () {
    summary.classList.toggle('active')
})
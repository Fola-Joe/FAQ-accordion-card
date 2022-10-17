// const details = document.querySelectorAll('details');
const summary = document.querySelectorAll('.summary');

summary.addEventListener('click', summaryToggle)

const summaryToggle = function () {
    summary.classList.toggle('active')
}
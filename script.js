const details = document.querySelectorAll('details');
const questionEl = detail.querySelector('.summary');

details.forEach(detail => { 
    questionEl.addEventListener("toggle", () => {
        if (detail.open === false) {
            detail.open = true
        } else {
            detail.open = false
        }
    })
})
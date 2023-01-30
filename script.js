
const revealEl = document.querySelectorAll('.movies');

const listItems = document.querySelectorAll('.list-item');

// console.log(revealEl);


revealEl.forEach(function(btn) {
    btn.addEventListener('click', function() {
        const list = btn.nextElementSibling;
        if (list) {
            list.classList.toggle('list-item');

            // list.addEventListener('hover', function() {
            //     list.style.color = 'grey';
            // });
        }
    });
    

    
});








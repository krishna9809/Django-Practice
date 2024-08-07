document.addEventListener('DOMContentLoaded', () => {
    const faqHeaders = document.querySelectorAll('.faq-header');
    
    faqHeaders.forEach(header => {
        header.addEventListener('click', () => {
            const faqItem = header.parentElement;
            const answer = faqItem.querySelector('.faq-answer');
            const toggle = faqItem.querySelector('.faq-toggle');
            
            if (answer.style.display === 'block') {
                answer.style.display = 'none';
                toggle.textContent = '+'; // Show plus sign
                faqItem.classList.remove('faq-open');
            } else {
                answer.style.display = 'block';
                toggle.textContent = '×'; // Show cross sign
                faqItem.classList.add('faq-open');
            }
        });
    });
});


function menuAnimation() {

    var menu = document.querySelector(".nav .nav-sec-2 .humbars")
    var full = document.querySelector(".full-scr")
    var stop = document.querySelector(".full-scr .full-div1 .notes-btn")
    var flag = 0
    menu.addEventListener("click", function () {
        if (flag == 0) {
            full.style.top = 0
            flag = 1
        } else {
            full.style.top = "-100%"
            flag = 0
        }
    })
}
 


function Notesclose() {

    var stop = document.querySelector(".full-scr .full-div1 .notes-btn")
    var full = document.querySelector(".full-scr")
    stop.addEventListener("click", function () {
            full.style.top = "-100%"
})
 
}


function Videoclose() {

    var stopVideo = document.querySelector(".full-scr .full-div1 .video-btn")
    var full = document.querySelector(".full-scr")
    stopVideo.addEventListener("click", function () {
            full.style.top = "-100%"
})
 
}
menuAnimation()
Notesclose()
Videoclose()

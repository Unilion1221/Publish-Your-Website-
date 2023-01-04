const portfolioItems=document.querySelectorAll('.top-grid-item1');

portfolioItems.forEach(portfolioItem => {
    portfolioItem.addEventListener('mouseover',()=>{
        portfolioItem.childNodes[1].classList.add('img-darken');
    })
})

portfolioItems.forEach(portfolioItem => {
    portfolioItem.addEventListener('mouseout',()=>{
        portfolioItem.childNodes[1].classList.remove('img-darken');
    })
})

function openBuyPage(){
    window.open('https://www.google.com');
}
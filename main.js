document.querySelectorAll('a[href^="#"]').forEach(tempAnchor=>{
    tempAnchor.addEventListener('click',function(e){
      //  e.preventDefault();
    document.querySelector(this.getAttribute("href")).scrollIntoView({
        behavior:"smooth"
    });
});
    
    });
const tabEl = document.querySelector('ul.tabs');
const panelsEL = document.querySelectorAll('.panel');
// tabElem.style.background = 'red';
tabEl.addEventListener('click', function(e){
    if(e.target.tagName === 'LI'){
        const targetPanel = document.querySelector(e.target.dataset.doc);
        panelsEL.forEach((panel)=>{
            if(panel === targetPanel){
                panel.classList.add('active');
            }else{
                panel.classList.remove('active');
                
            }

        })
    }
})

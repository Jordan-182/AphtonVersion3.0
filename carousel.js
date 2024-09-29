// --------- CAROUSEL --------- //

const slider = document.querySelector('.slider');

const leftArrow = document.querySelector('.left');
const rightArrow = document.querySelector('.right');

const indicatorParents = document.querySelector('.controls ul');

let sectionIndex = 0;

function setIndex(){
    document.querySelector('.controls .selected').classList.remove('selected');
    slider.style.transform = 'translate('+ (sectionIndex) * -16.66667 + '%)';  // Le nombre résulte du calcul 100% divisé par le nombre de slides //
}

document.querySelectorAll('.controls li').forEach(function(indicator, ind){
    indicator.addEventListener('click' , function(){
        sectionIndex = ind;
        setIndex();
        indicator.classList.add('selected');
    });
});

leftArrow.addEventListener('click' , function(){
    sectionIndex = (sectionIndex > 0) ? sectionIndex - 1 : 0;
    setIndex();
    indicatorParents.children[sectionIndex].classList.add('selected');
});

rightArrow.addEventListener('click' , function(){
    sectionIndex = (sectionIndex < 5) ? sectionIndex + 1 : 5;
    setIndex();
    indicatorParents.children[sectionIndex].classList.add('selected');
});

// --------- FIN DU CAROUSEL --------- //
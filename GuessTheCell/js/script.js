'use strict'
let table = document.querySelector('.playfield');
let firstselectedTd;
let secondselectedTd;
table.addEventListener('click',function MatchCheck(event){
    if(event.target.tagName === 'DIV' || event.target.tagName === 'TD'){
        if(event.target.closest('td').classList.contains('active')){
            firstselectedTd.classList.remove('active')
            firstselectedTd = undefined;}
    if(typeof event.target == 'object'){
    if(typeof firstselectedTd != 'object'){
        firstselectedTd = event.target.closest('td');
        firstselectedTd.classList.add('active')
        
    }
    else if(event.target === firstselectedTd){
        firstselectedTd.classList.remove('active')
        firstselectedTd = undefined;
        return;
    }
    else if(typeof firstselectedTd == 'object' && typeof secondselectedTd != 'object'){
        if(firstselectedTd !== secondselectedTd){
        secondselectedTd = event.target.closest('td')
        secondselectedTd.classList.add('active')
        if(typeof firstselectedTd == 'object' && typeof secondselectedTd == 'object'){
            if(firstselectedTd.innerHTML == secondselectedTd.innerHTML){
                setTimeout(function(){firstselectedTd.classList.remove('active')
                secondselectedTd.classList.remove('active')
                firstselectedTd.classList.add('guessedcell')
                secondselectedTd.classList.add('guessedcell')
                MatchCheck;
                firstselectedTd = undefined;
                secondselectedTd = undefined;
            },300)
                
            }
            else if(firstselectedTd.innerHTML != secondselectedTd.innerHTML){
                setTimeout(function(){
                    firstselectedTd.classList.remove('active')
                },500)
                setTimeout(function(){
                    secondselectedTd.classList.remove('active')
                },500)
                setTimeout(function(){firstselectedTd = undefined},500)
                setTimeout(function(){secondselectedTd = undefined},500)
            }
        }
        }
    }
}
    }
})
function FillPlayField(){
    let tablecells = document.querySelectorAll('.backside');
    let numbers = [1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8];
    for(let cell of tablecells){
        let number = randomInt(0,numbers.length-1);
        cell.innerHTML = numbers[number];
        numbers.splice(number,1)
    } 
}  
    function randomInt(min, max) {
        let rand = min - 0.5 + Math.random() * (max - min + 1);
        return Math.round(rand);
      };
FillPlayField();

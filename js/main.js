var elSeriya = document.querySelector('.seriya')
var elRaqam = document.querySelector('.raqam')
var elRaqamLab = document.querySelector('.lab')
var elSeriyaLab = document.querySelector('.lab1')

function fnPassport(event){
    event.preventDefault() 
    var seriya = elSeriya.value 
    var raqam = elRaqam.value
    if(seriya.length == 2 && seriya[0].toLowerCase() !== seriya[0 ] && seriya[1].toLowerCase() !== seriya[1]){
        elSeriya.style.background = 'green'
        elSeriyaLab.textContent = 'passport seriyasi togri'
    }else{
        elSeriya.style.background = 'red'
        elSeriyaLab.textContent = 'passport seriyasini togri kiriting'
    }
    
    if (raqam.length == 7 && raqam * 1 >= 0) {
        elRaqam.style.background = 'green'
        elRaqamLab.textContent = 'passport raqami togri'
    }else{
        elRaqam.style.background = 'red'
        elRaqamLab.textContent = 'passport raqamini togri kiriting'   
    }

}

    
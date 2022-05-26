let btnTab1 = document.querySelector('.tab-first');
let btnTab2 = document.querySelector('.tab-second');
let btnTab3 = document.querySelector('.tab-third');

let iconTab1 = document.querySelector('.tab-icon-first');
let iconTab2 = document.querySelector('.tab-icon-second');
let iconTab3 = document.querySelector('.tab-icon-third');

let statusTab = 1;
btnTab1.style.borderBottom = '2px solid #add136';
iconTab1.style.backgroundColor = '#99c50a';
iconTab1.style.border = '1px solid #99c50a';

btnTab1.onclick = function() {
    tabRemove();
    btnTab1.style.borderBottom = '2px solid #add136';
    iconTab1.style.backgroundColor = '#99c50a';
    iconTab1.style.border = '1px solid #99c50a';
    statusTab = 1;
}

btnTab2.onclick = function() {
    tabRemove();
    btnTab2.style.borderBottom = '2px solid #add136';
    iconTab2.style.backgroundColor = '#99c50a';
    iconTab2.style.border = '1px solid #99c50a';
    statusTab = 2;
}

btnTab3.onclick = function() {
    tabRemove();
    btnTab3.style.borderBottom = '2px solid #add136';
    iconTab3.style.backgroundColor = '#99c50a';
    iconTab3.style.border = '1px solid #99c50a';
    statusTab = 3;
}

function tabRemove() {
    if (statusTab == 1) {
        btnTab1.style.borderBottom = '';
        iconTab1.style.backgroundColor = '#5f5f5f';
        iconTab1.style.border = '1px solid #5f5f5f';
    }
    if (statusTab == 2) {
        btnTab2.style.borderBottom = '';
        iconTab2.style.backgroundColor = '#5f5f5f';
        iconTab2.style.border = '1px solid #5f5f5f';
    }
    if (statusTab == 3) {
        btnTab3.style.borderBottom = '';
        iconTab3.style.backgroundColor = '#5f5f5f';
        iconTab3.style.border = '1px solid #5f5f5f';
    }
}

let btnBurgerMenu = document.querySelector('.header__burger');
let burgerMenu = document.querySelector('.header__menu-close');
let btnCloseBurgerMenu = document.querySelector('.item-close');

btnBurgerMenu.onclick = function() {
    burgerMenu.style.display = 'block';
    btnCloseBurgerMenu.style.display = 'block';
}

btnCloseBurgerMenu.onclick = function() {
    burgerMenu.style.display = 'none';
    btnCloseBurgerMenu.style.display = 'none';

}

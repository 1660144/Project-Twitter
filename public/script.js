var list_page = document.querySelectorAll('.header-nav-ul li');
var list_page_nav_mobile = document.querySelectorAll(".header-nav-ul-nav-mobile li");
Array.from(list_page_nav_mobile).forEach(page => page.addEventListener('click', function () {
    /** get id when lick li of nav */
    var id = page.getAttribute("id");
    /** change title of page */
    document.title = captilize(id) + ' / Twitter';
    var nav_active = document.querySelector('.header-nav-ul-li-nav-mobile.active');
    if (nav_active)
        nav_active.classList.remove('active');
    var set_nav_active = document.querySelector(`.header-nav-ul-nav-mobile #${id}`);
    if (set_nav_active)
        set_nav_active.classList.add('active');
    /** page active */
    var page_active = document.querySelector('.page-on');
    if (page_active) {
        page_active.classList.remove('page-on');
        page_active.classList.add('page-off');
    }
    /** set page active */
    var new_page_active = document.querySelector(`div#${id}`);
    if (new_page_active) {
        new_page_active.classList.add('page-on');
        new_page_active.classList.remove('page-off');
    }
}));

Array.from(list_page).forEach(page => page.addEventListener('click', function () {
    /** get id when lick li of nav */
    var id = page.getAttribute("id");
    /** change title of page */
    document.title = captilize(id) + ' / Twitter';
    var nav_active = document.querySelector('.header-nav-ul-li.active');
    console.log("nav active ", nav_active);
    
    if (nav_active)
        nav_active.classList.remove('active');
    var set_nav_active = document.querySelector(`.header-nav-ul #${id}`);
    if (set_nav_active)
        set_nav_active.classList.add('active');
    /** page active */
    var page_active = document.querySelector('.page-on');
    if (page_active) {
        page_active.classList.remove('page-on');
        page_active.classList.add('page-off');
    }
    /** set page active */
    var new_page_active = document.querySelector(`div#${id}`);
    if (new_page_active) {
        new_page_active.classList.add('page-on');
        new_page_active.classList.remove('page-off');
    }
}));

function captilize(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

var img_info = document.querySelector('.avatar-head');
var tab_info = document.querySelector('.avatar-infor');
// img_info.addEventListener('click', function () {
//     var status = img_info.getAttribute('data-status');
//     var check = document.querySelector('input#check');

//     if (status === '0') {
//         tab_info.classList.remove('off');
//         tab_info.classList.add('on');
//         img_info.setAttribute('data-status', '1');
//     } else if (status = '1') {
//         tab_info.classList.add('off');
//         tab_info.classList.remove('on');
//         img_info.setAttribute('data-status', '0');
//     }
// })
document.body.onclick = e => {
    var img_info = document.querySelector('.avatar-head img');
    var tab_info = document.querySelector('.avatar-infor');
    var bg = document.querySelector('.bg');
    var temp1, temp2;
    temp1 = `${e.target}`;
    temp2 = `${img_info}`;

    if(temp1 === temp2){
        tab_info.style.left = '0';
        bg.classList.add('on');
        bg.classList.remove('off');
    }
    else if (e.target != tab_info) {
        tab_info.style.left = '-100%';

        bg.classList.add('off');
        bg.classList.remove('on');
    }
    
    
}
// img_info.addEventListener('click', function(){
//     tab_info.classList.add('on');
//     tab_info.classList.remove('off');
// })

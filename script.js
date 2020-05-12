var list_page = document.querySelectorAll('.header-nav-ul li');

Array.from(list_page).forEach(page => page.addEventListener('click', function(){
    
    /** get id when lick li of nav */
    var id = page.getAttribute("id");
    /** change title of page */
    document.title = captilize(id) +  ' / Twitter';
    var nav_active = document.querySelector('.header-nav-ul-li.active');
    if(nav_active) 
        nav_active.classList.remove('active');
    var set_nav_active = document.querySelector(`.header-nav-ul #${id}`);
    if(set_nav_active)
        set_nav_active.classList.add('active');
    /** page active */
    var page_active = document.querySelector('.page-on');
    if(page_active)
    {
        page_active.classList.remove('page-on');
        page_active.classList.add('page-off');
    }

    /** set page active */
    var new_page_active = document.querySelector(`div#${id}`);
    if(new_page_active){
        new_page_active.classList.add('page-on');
        new_page_active.classList.remove('page-off');
    }
    


}))
var explore_page = document.querySelector("div#explore");
console.log(list_page);
function captilize(string){
    return string.charAt(0).toUpperCase() + string.slice(1);
}
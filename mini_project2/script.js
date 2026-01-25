//grab elements
const selectElement=selector=>{
    const element =document.querySelector(selector)
    if(element) return element;
    throw new Error(`Something went,make sure that ${selector} exists or is typed correctly.`);
};
// nav styles on scroll
const scrollHeader =() => {
    const headerElement = selectElement(`#header`);
    if(this.scrollY >= 15){
        headerElement.classList.add(`activated`);
    }else{
        headerElement.classList.remove('activated');
    }

};

window.addEventListener(`scroll`, scrollHeader);
// open menu & search pop-up
const menuToggleIcon = selectElement(`#menu-toggle-icon`);

const toggleMenu = () => {
    const mobileMenu = selectElement('#menu');
    mobileMenu.classList.toggle(`activated`);
    menuToggleIcon.classList.toggle(`activated`);
};

menuToggleIcon.addEventListener(`click`,toggleMenu);

// open close search form popup
const formOpenBtn=selectElement(`#search-icon`);
const formCloseBtn=selectElement(`#form-close-btn`);
const searchFormContainer=selectElement(`#search-form-container`);

formOpenBtn.addEventListener(`click` , ()=>searchFormContainer.classList.add(`activated`));
formCloseBtn.addEventListener(`click` , ()=>searchFormContainer.classList.remove(`activated`));

// close the search form on ESC keypress
window.addEventListener(`keyup`, event=>{
    if(event.key==`Escape`) searchFormContainer.classList.remove(`activated`);
})


//swiper


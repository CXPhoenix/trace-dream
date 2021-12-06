import './index.css'
import 'aos/dist/aos.css'
import AOS from 'aos'
import './assets/js/all.js'

AOS.init();

document.querySelector('label[for=navListChecked]').addEventListener('click', function(e) {
    console.log(e)
    const navList = document.querySelector('#navList');
    navList.classList.add('duration-200')
})
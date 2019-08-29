import {pageCreator} from './pageLoader'

function hello() {
    console.log("yo")
}

const about = document.getElementById('About')
console.log(about)
about.addEventListener('click', hello);



pageCreator;

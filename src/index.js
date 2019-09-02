import {pageCreator} from './pageLoader'
import {siteContent} from './pageContent'



const about = document.getElementById('About')
about.addEventListener('click', pageCreator.changeContent);

const contact = document.getElementById('Contact')
contact.addEventListener('click', pageCreator.changeContent);

const home = document.getElementById('Home')
home.addEventListener('click', pageCreator.changeContent);



pageCreator.contenu.innerHTML = siteContent['Home']
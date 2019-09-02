import {siteContent} from "./pageContent"

const pageCreator = (() => {
  let contenu = document.getElementById('content')
  const changeContent = () => {
    contenu.innerHTML = siteContent[event.target.id];
  } 
  return {
    contenu,
    changeContent
  }
  })();


export {pageCreator}
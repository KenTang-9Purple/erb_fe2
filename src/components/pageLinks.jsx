import React from 'react'
import { pageLinks } from "./data.js"
import PageLink from "./PageLink"
/*<PageLinks parentClass="nav-list" itemClass="nav-link" />*/
function PageLinks({parentClass, itemClass}) {
  return (
    <ul className={parentClass} id="nav-list">
        {pageLinks.map((pL)=>{
          return (
            <PageLink key={pL.id} link={pL} itemClass={itemClass} />
          );
        })}
    </ul>
  )
}

export default PageLinks


/*
let users = ['Alice', 'Bob', 'Charlie'];

let userElements = users.map(function(user) {
  return <li>{user}</li>;
});*/
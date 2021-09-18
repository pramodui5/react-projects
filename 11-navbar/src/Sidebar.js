import React from 'react'
import { links } from './data'

const Sidebar = () => {
    return (
        <React.Fragment>
           <h4>Sidebar</h4>
            <div className="links-container show-container">
                <ul className="links">
                    {links.map((link)=>{
                        const {id, text, url} = link;
                        return(
                            <li key={id}>
                                <a href={url}>{text}</a>
                            </li>
                        )
                    })}                    
                </ul>
            </div>
        </React.Fragment>
    )
}
export default Sidebar
import React, {Component} from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faScroll } from '@fortawesome/free-solid-svg-icons'
import 'tachyons'
import './Style/Header.css'

class Header extends Component
{
    render()
    {
        return(
            <div className = ' heading tc w-80' >
                <FontAwesomeIcon className ='icon' icon={faScroll} />
                <h1>MY DIARY</h1>
                
            </div>
        )
    }
}

export default Header;
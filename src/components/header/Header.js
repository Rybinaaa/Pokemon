import { Component } from 'react';
import logo from '../../images/pokemon-logo.svg'
import './Header.css'

class Header extends Component {
    render() {
        return(
            <header>
                <div className='container'>
                    <ul>
                        <li>About us</li>
                    </ul>
                    </div>    
                    <img src={logo} />
            </header>
        )
    }
}

export default Header

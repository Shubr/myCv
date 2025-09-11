import logo from '/assets/logo_.png'
import './style.css'

export function NavigationBar(){
    return(
        <nav>
            <a className='new-logo' href='/games'>
            <img src={logo}></img>
            <p>SHUB GAMES</p>
            </a>
        </nav>
    )
}

export default NavigationBar;
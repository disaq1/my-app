import { NavLink } from 'react-router-dom';
import './Navbar.css'

const Navbar = () => {
    return (
        <div className="nav">
            <NavLink className="nav__link" to='/profile'>
                Profile
            </NavLink>
            <NavLink className="nav__link" to='/dialogs'>
                Dialogs
            </NavLink>
            <NavLink className="nav__link" to='/friends'>
                Friends
            </NavLink>
            <NavLink className="nav__link" to='/groups'>
                Groups
            </NavLink>
            <NavLink className="nav__link" to='/photos'>
                Photos
            </NavLink>
            <NavLink className="nav__link" to='/videos'>
                Videos
            </NavLink>
            <NavLink className="nav__link" to='/news'>
                News
            </NavLink>
            <NavLink className="nav__link" to='/settings'>
                Settings
            </NavLink>
        </div>
    )
}

export default Navbar;
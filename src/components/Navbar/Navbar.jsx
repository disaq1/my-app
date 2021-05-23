import { NavLink } from 'react-router-dom';
import './Navbar.css'

const Navbar = () => {
    return (
        <nav className="nav">
            <ul className="nav__items">
                <NavLink className="nav__link" to='/profile'>
                    <li className="nav__item">
                        Profile
                    </li>
                </NavLink>
                <NavLink className="nav__link" to='/dialogs'>
                    <li className="nav__item">
                        Dialogs
                    </li>
                </NavLink>
                <NavLink className="nav__link" to='/friends'>
                    <li className="nav__item">
                        Friends
                    </li>
                </NavLink>
                <NavLink className="nav__link" to='/groups'>
                    <li className="nav__item">
                        Groups
                    </li>
                </NavLink>
                <NavLink className="nav__link" to='/photos'>
                    <li className="nav__item">
                        Photos
                    </li>
                </NavLink>
                <NavLink className="nav__link" to='/videos'>
                    <li className="nav__item">
                        Videos
                    </li>
                </NavLink>
                <NavLink className="nav__link" to='/news'>
                    <li className="nav__item">
                        News
                    </li>
                </NavLink>
                <NavLink className="nav__link" to='/settings'>
                    <li className="nav__item">
                        Settings
                    </li>
                </NavLink>
            </ul>
        </nav>
    )
}

export default Navbar;
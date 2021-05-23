import './Navbar.css'

const Navbar = () => {
    return (
        <nav className="nav">
            <ul className="nav__items">
                <li className="nav__item">
                    <a className="nav__link" href='/profile'>
                        Profile
                    </a>
                </li>
                <li className="nav__item">
                    <a className="nav__link" href='/dialogs'>
                        Dialogs
                    </a>
                </li>
                <li className="nav__item">
                    <a className="nav__link" href='#'>
                        Friends
                    </a>
                </li>
                <li className="nav__item">
                    <a className="nav__link" href='#'>
                        Groups
                    </a>
                </li>
                <li className="nav__item">
                    <a className="nav__link" href='#'>
                        Photos
                    </a>
                </li>
                <li className="nav__item">
                    <a className="nav__link" href='#'>
                        Videos
                    </a>
                </li>
                <li className="nav__item">
                    <a className="nav__link" href='#'>
                        News
                    </a>
                </li>
                <li className="nav__item">
                    <a className="nav__link" href='#'>
                        Settings
                    </a>
                </li>
            </ul>
        </nav>
    )
}

export default Navbar;
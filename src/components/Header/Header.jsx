import './Header.css'

const Header = () => {
    return (
        <header className="header">
            <img src='https://www.mylogo.com.au/wp-content/uploads/2020/03/mylogo02.png' />
            <div className="header__items">
                <div className="header__item">
                    <div className="header__search"><input type="search" placeholder="Global search"/></div>
                </div>
                <div className="header__item">
                    
                </div>
                <div className="header__item">
                    
                </div>
            </div>
        </header>
    )
}

export default Header;
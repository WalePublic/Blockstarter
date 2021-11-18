function BSHeader() {
    return(
        <div className="navigation">
            <input type="checkbox" className="navigation__checkbox" id="nav-toggle"/>
            <label htmlFor="nav-toggle" className="navigation__button">
                <span className="navigation__nav-icon">&nbsp;</span>
            </label>
            <div className="navigation__background">&nbsp;</div>
            <div className="navigation__nav">
                <ul className="navigation__list">
                    <li className="navigation__item"><a href="/create" className="navigation__link">Create</a></li>
                    <li className="navigation__item"><a href="#" className="navigation__link">Terms</a></li>
                    <li className="navigation__item"><a href="#" className="navigation__link">About</a></li>
                    <li className="navigation__item"><a href="#" className="navigation__link">Contact</a></li>
                </ul>
            </div>
        </div>
    );
}

export default BSHeader;
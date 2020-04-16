import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

export default props => {
    const [pageYOffset, setPageYOffset] = useState(0);
    const [navbarClass, setNavbarClass] = useState({menu : 'navbar-dark', container : ''});

    window.addEventListener('scroll', e => setPageYOffset(window.pageYOffset));

    useEffect(()=>{
        if(pageYOffset > 0) {
            return setNavbarClass({menu : 'navbar-light', container : 'bg-light shadow'})
        } else {
            return setNavbarClass({menu : 'navbar-dark', container : ''})
        }
    }, [pageYOffset])

    return (
        <header>
            <div className={`container-fluid fixed-top transition ${navbarClass.container}`}>
                <div className="header-menu">
                    <nav className={`navbar navbar-expand-lg ${navbarClass.menu}`}>
                        <Link className="navbar-brand" to="/">Dietas de Secar</Link>
                        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#menu" aria-controls="menu" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="menu">
                            <ul className="navbar-nav ml-auto">
                                <li className="nav-item active">
                                    <Link className="nav-link" to="/">Home</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/contato">Fale Conosco</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/politicas-de-privacidade">Políticas de Privacidade</Link>
                                </li>
                            </ul>
                        </div>
                    </nav>
                </div>
            </div>
        </header>
    );
};
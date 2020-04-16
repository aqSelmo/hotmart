import React, { useState } from 'react';

export default props => {
    const [pageYOffset, setPageYOffset] = useState(0);

    window.addEventListener('scroll', e => setPageYOffset(window.pageYOffset));

    return (
        <div id="banner" style={{backgroundPosition : `center top ${pageYOffset * 0.3}px`}}>
            <div className="d-block">
                <p className="h5 font-weight-bold text-light ts-1">Título informação</p>
                <button className="btn btn-light">Clique aqui</button>    
            </div>
        </div>
    );
};
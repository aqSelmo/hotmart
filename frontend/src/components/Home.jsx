import React from 'react';
import { FaCheese } from 'react-icons/fa';

import Header from './includes/Header';
import Banner from './includes/Banner';
import Footer from './includes/Footer';

export default props => (
    <React.Fragment>
        <Header />
        <Banner />
        <main>
            <div className="container-fluid transition">
                <div className="container">
                    <div className="row">
                        <div className="col-4">
                            <div className="d-flex flex-column align-items-center py-4 mb-3">
                                <FaCheese size={80} />
                                <p className="mb-0">Subitem 1</p>
                            </div>
                        </div>
                        <div className="col-4">
                            <div className="d-flex flex-column align-items-center py-4 mb-3">
                                <FaCheese size={80} />
                                <p className="mb-0">Subitem 1</p>
                            </div>
                        </div>
                        <div className="col-4">
                            <div className="d-flex flex-column align-items-center py-4 mb-3">
                                <FaCheese size={80} />
                                <p className="mb-0">Subitem 1</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container py-4">
                    <h1>Título 1</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam massa mauris, tristique in magna vel, vestibulum pretium tellus. In urna urna, dictum vitae eleifend sit amet, cursus eu purus. Proin finibus, erat id porttitor imperdiet, justo nisl vulputate nisl, nec ullamcorper dolor mauris a metus. Morbi vulputate pellentesque nisl nec scelerisque. Donec facilisis arcu sit amet odio rutrum, vel maximus tortor fermentum. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Nunc vel sodales augue, at efficitur dolor. Donec sagittis enim gravida nisl luctus lobortis. Maecenas at quam eget libero vulputate ultricies. In ut vestibulum eros, ac placerat ligula. Cras gravida eget justo eget scelerisque. Mauris sit amet nibh mattis risus consequat rhoncus eu eu eros. Phasellus tincidunt, justo consectetur laoreet varius, felis felis posuere ante, id tincidunt lorem erat vel risus. Quisque rutrum, eros et posuere sodales, tortor tortor ultrices risus, ut maximus dui ipsum eget nunc. </p>
                </div>
            </div>
        </main>
        <Footer />
    </React.Fragment>
);
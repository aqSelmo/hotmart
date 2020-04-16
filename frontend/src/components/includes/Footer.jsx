import React from 'react';
import { FaBars, FaEnvelopeSquare, FaWordpress, FaFacebookSquare, FaInstagram, FaTwitterSquare, FaYoutubeSquare } from 'react-icons/fa';

export default props => (
    <footer>
        <div className="container-fluid bg-dark">
            <div className="container py-4">
                <div className="row">
                    <div className="col-4">
                        <p className="font-weight-bold text-light mb-2"><FaBars className="text-light"/> Links úteis</p>
                        <ul className="nav flex-column text-light">
                            <li className="pl-3">Página Inicial</li>
                            <li className="pl-3">Fale Conosco</li>
                            <li className="pl-3">Contato</li>
                        </ul>
                    </div>
                    <div className="col-4">
                        <p className="font-weight-bold text-light mb-2"><FaEnvelopeSquare className="text-light"/> Contato</p>
                        <ul className="nav flex-column text-light">
                            <li className="pl-3">contaot@contao.com</li>
                            <li className="pl-3">0000-0000</li>
                        </ul>
                    </div>
                    <div className="col-4 d-flex flex-column align-items-center justify-content-center">
                        <FaWordpress className="text-light" size={80} />
                        <div className="btn-group">
                            <a href=""><FaFacebookSquare className="text-light mr-1" size={20} /></a>
                            <a href=""><FaInstagram className="text-light mr-1" size={20} /></a>
                            <a href=""><FaTwitterSquare className="text-light mr-1" size={20} /></a>
                            <a href=""><FaYoutubeSquare className="text-light" size={20} /></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </footer>
);
import React from 'react';
import styled from 'styled-components';

const Footer1 = styled.footer`
    background-color:black;
    color:white;
    font-family: 'Roboto', sans-serif;
`

const Footer = () => {
    return (
        <Footer1 className="page-footer font-small">
            <div className="footer-copyright text-center py-3">© 2020 Copyright:
            <p>
                    Ana Ferreira | Nº 89442
            </p>
            </div>
        </Footer1>
    )
}

export default Footer;
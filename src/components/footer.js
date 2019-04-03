import React from 'react';

import footerImage from '../images/NFC_Artwork_Desktop_02.jpg';
import '../styles/footer.scss';

const Footer = () => {
  return (
    <footer className="site_footer">
      <img src={footerImage} alt="nils forsblom collection outro" />
    </footer>
  );
};

export default Footer;

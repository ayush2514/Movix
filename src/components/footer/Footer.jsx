import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaLinkedin,
} from "react-icons/fa";

import ContentWrapper from "../contentWrapper/ContentWrapper";

import "./style.scss";

const Footer = () => {
  return (
    <footer className="footer">
      <ContentWrapper>
        <div className="infoText">
          Discover the world of cinema with Movix! Browse our vast collection of
          movies, from timeless classics to the latest blockbusters. Experience
          seamless searching and filtering to find your perfect film. Join our
          passionate community and share your thoughts and
          recommendations.
       
        </div>
        <div className="socialIcons">
          <span className="icon">
            <FaFacebookF />
          </span>
          <span className="icon">
            <FaInstagram />
          </span>
          <span className="icon">
            <FaTwitter />
          </span>
          <span className="icon">
            <FaLinkedin />
          </span>
          <p className="love">Made with ❤️ by Ayush</p>
        </div>
       
      </ContentWrapper>
    </footer>
  );
};

export default Footer;

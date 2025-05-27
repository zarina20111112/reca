import { FaFacebookSquare, FaInstagramSquare, FaTwitter } from "react-icons/fa";

function Footer() {
  return (
    <div className="contanier">
      <nav >
        <img src="imges/im.png" alt="" />

        <div className="icons">
          <FaTwitter />
          <FaFacebookSquare />
          <FaInstagramSquare />
        </div>

        <div>Copywright 2020 Bella Onojie.com</div>
      </nav>
    </div>
  );
}

export default Footer;

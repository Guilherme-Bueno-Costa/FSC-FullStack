import { CiShoppingCart } from "react-icons/ci";
import "./HeaderStyles.css";

const Header = () => {
  return (
    <div className="header-container">
      <h2 className="header-title">CLUB CLOTHING</h2>

      <div className="header-items">
        <div className="header-item">Explorar</div>
        <div className="header-item">Login</div>
        <div className="header-item">Criar conta</div>
        <div className="header-item">
          <CiShoppingCart size={25} />
        </div>
      </div>
    </div>
  );
};

export default Header;

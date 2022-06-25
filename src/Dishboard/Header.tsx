import { Link } from "react-router-dom";

function Header() {
  return (
    <nav style={{ background: "rgba(0,0,0,0.4)", padding: "9px 30px" }}>
      <ul style={{ display: "flex" }}>
        <li style={{}}>
          <Link to={"/"}>Home</Link>
        </li>
        <li style={{ paddingLeft: "10px" }}>
          <Link to={"/Service"}>Service</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Header;

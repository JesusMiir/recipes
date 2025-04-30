
import { Link } from "react-router-dom";

function NavLink ({ href, children, color, newTab }) {
    
    return (
        <>
            <Link to={href} className="nav-link" style={{ color: color }} target={ newTab ? "_blank" : "_self"}>
                {children}
                {newTab && (
                    <span></span>
                )}
            </Link>
        </>
    );
}

export default NavLink;
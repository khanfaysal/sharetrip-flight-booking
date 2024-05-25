
import { Link } from "react-router-dom";
const Header = () => {
    return (
        <header>
            <div className="box-content min-h-[68px] flex items-center bg-white rounded-t-lg border border-sky-500">
                <nav className="nav">
                    <ul>
                        <li>
                            <Link className="nav-link" to="/flight-history/flight-details">
                                Flight details
                            </Link>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    );
};

export default Header;
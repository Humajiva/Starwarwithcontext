import React ,{ useContext} from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

export const Navbar = () => {
	const { store, actions } = useContext(Context);
	return (
		<nav className="navbar navbar-light bg-light mb-3">
			<Link to="/">
				<span className="navbar-brand mb-0 h1">React Boilerplate</span>
			</Link>
			<div className="ml-auto">
			<li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Favorites
          </a>
          <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
			  {store.favorites.map((fav , index) => {
				  return (<li key = {index}>{fav}<span onClick={() => actions.deleteFavorite(fav)}><i className="fas fa-trash"></i></span></li>)
			  })}
            
            </ul>
        </li>

				{/* <Link to="/demo">
					<button className="btn btn-primary">Check the Context in action</button>
				</Link> */}
			</div>
		</nav>
	);
};

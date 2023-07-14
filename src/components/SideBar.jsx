import ChaabiLogo from "../assets/images/ChaabiLogo.svg";
import {dashboardMenu} from "../utils/dashboardMenuList";
import {NavLink} from "react-router-dom";

const SideBar = ({children}) => {
  return (
    <div id="dashboard__screen">
      <nav id="sidebar">
        <img
          id="sidebar__image"
          src={ChaabiLogo}
          alt="Chaabi is AI/ML gamifyiing platform for Education"
        />

        <hr id="divider" />

        <div id="navbar__tabs__container">
          {dashboardMenu.map((menu, index) => (
            <NavLink
              key={index}
              to={`/${menu.path}`}
              end
              className="navbar__tabs">
              <img
                className="navbar__tabs__img"
                // onSelect={(e) => (e.target.style.color = filter(invert))}
                src={`/icons/${menu.icon}`}
              />
              {menu.name}
            </NavLink>
          ))}
        </div>
      </nav>
      <main id="content__container">{children}</main>
    </div>
  );
};

export default SideBar;

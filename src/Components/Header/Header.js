import React, { useRef } from "react";
import { Container } from "reactstrap";
import "./Header.css"; 

const navLinks = [
  {
    display: "Home",
    url: "#",
  },
  {
    display: "About",
    url: "#",
  },
  {
    display: "Courses",
    url: "#",
  },
  {
    display: "Page",
    url: "#",
  },
  {
    display: "Blog",
    url: "#",
  },
];

const Header = () => {

    const menuRef = useRef();

    const menuToggle = () => {
        menuRef.current.classList.toggle('active_menu')
    }

    return (
    <header className="header">
      <Container>
        <div className="navigation d-flex align-items-center justify-content-between">
          <div className="logo">
            <h2 className="d-flex align-items-center">
              <i class="fa-sharp fa-solid fa-swatchbook"></i> Learners.
            </h2>
          </div>

          <div className="nav d-flex align-items-center gap-5">
            <div className="nav_menu" ref={menuRef} onClick={menuToggle}>
              <ul className="nav_list">
                {navLinks.map((item, index) => {
                  return (
                    <li className="nav_itme" key={index}>
                      <a href={item.url}>{item.display}</a>
                    </li>
                  );
                })}
              </ul>
            </div>

            <div className="nav_right">
              <p className="mb-0 d-flex align-items-center gap-3">
                <i class="fa-solid fa-phone"></i> +91 8287146841
              </p>
            </div>
          </div>

          <div className="mobile_menu">
            <span><i class="fa-solid fa-bars" onClick={menuToggle}></i></span>
          </div>
        </div>
      </Container>
    </header>
  );
};

export default Header;

import React from "react";

class Header extends React.Component {
  render() {
    return(
      <header>
        <h1>
        Welcome to our page
        </h1>
        <ul>
            <li>
                Acceuil
            </li>
            <li>
                Contact
            </li>
         </ul>
      </header>
    );
  }
}
export default Header;
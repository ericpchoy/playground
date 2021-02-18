import React from "react";
import {Link} from "react-router-dom";

function NavBar() {
    return (
        <div>
            <Link to="/">Home </Link>
            <Link to='/Exercise1'>Exercise 1</Link>
        </div>
    );
};

export default NavBar;
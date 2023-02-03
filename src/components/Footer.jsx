import React from "react";

function Footer(){

    let year = new Date().getFullYear();

    return (
        <div className="footer">
            <p>Copyright &#169; {year} React version 0.1</p>

        </div>
    )
}

export default Footer;
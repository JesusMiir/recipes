/*
    A react component
    is a function
    that starts with a capital letter
    and returns JSX

    JSX is like a combination of HTML and JS

    pages/HomePage.jsx
*/

import NavBar from "./NavBar";

function HeaderComponent() {
    return (
        <header>
            <h1>Header</h1>
            <NavBar/>
        </header>
    )
}

export default HeaderComponent;
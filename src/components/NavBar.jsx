import NavLink from "./NavLink";

const navItems = [
    {href: "/", color: "red", text: "Home"},
    {href: "/recipes", color: "#333", text: "Recipes"},
    {href: "/contact", color: "purple", text: "Contact us"},
    {href: "https://youtube.com", color: "orange", text: "YouTube", newTab: true},
]

// <a href="..." target="_blank or _self" /> 

//      Arrow function:     () => {}

function NavBar() {
    return (
        <nav>
            {navItems.map((item) => {
                const key = item.href;
                return (
                    <NavLink 
                        key={key} 
                        href={item.href} 
                        color={item.color}
                        newTab={item.newTab}
                    >
                        { item.text }
                    </NavLink>
                )
            })}
        </nav>
    );
}

export default NavBar;
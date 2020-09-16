import React from "react"
import { Navbar, NavbarBrand, Nav, NavItem, NavLink } from "shards-react"

const TopBar = ({ goTo }) => {
    return (
        <Navbar>
            <NavbarBrand>User Manager</NavbarBrand>
            <Nav justified fill>
                <NavItem>
                    <NavLink onClick={() => goTo("/")}>Users</NavLink>
                </NavItem>
                <NavItem>
                    <NavLink onClick={() => goTo("/organisations")}>Organisations</NavLink>
                </NavItem>
                {/* <NavItem>
                    <NavLink onClick={() => goTo("/squads")}>Squad</NavLink>
                </NavItem> */}
            </Nav>
        </Navbar>
    )
}

export default TopBar
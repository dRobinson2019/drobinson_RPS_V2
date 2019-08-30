import React, { useState, useEffect } from 'react'
import { NavLink } from 'react-router-dom'
import { Nav, NavItem} from 'reactstrap'
import './Header.css'



export const Header  = ({}) => (
    <div className={"header"}>
      <Nav>
        <NavItem>
          <NavLink exact to="/" activeClassName="active">Home</NavLink>
        </NavItem>
        <NavItem>
          <NavLink to="/History" activeClassName="active">History</NavLink>
        </NavItem>
        <NavItem>
          <NavLink to="/logout" activeClassName="active">Another NavLink</NavLink>
        </NavItem>
      </Nav>
    </div>
)
import React from 'react'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import { Link } from 'react-router-dom'
import Routes from '../../Constants/routes'
import './MainNav.css'
import { LinkContainer } from 'react-router-bootstrap'
import Customers from '../UserHome/PageCards/Customers/Customers'

var MainNav = () => {
    // Might need to render sign in and sign out separately
    return (
        <div>
            <Navbar
                collapseOnSelect
                expand="lg"
                className="navColors navbar-dark"
            >
                <Navbar.Brand className="navText" href="#">
                    Work Order Wizard
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="mr-auto">
                        <LinkContainer
                            to={Routes.CUSTOMERS}
                            component={Customers}
                        >
                            <Nav.Link>Customers</Nav.Link>
                        </LinkContainer>
                        <LinkContainer to={Routes.WORK_ORDERS}>
                            <Nav.Link>Work Orders</Nav.Link>
                        </LinkContainer>
                        <LinkContainer to={Routes.INVOICES}>
                            <Nav.Link>Invoices</Nav.Link>
                        </LinkContainer>
                        <LinkContainer to={Routes.COSTS}>
                            <Nav.Link>Costs</Nav.Link>
                        </LinkContainer>
                        <LinkContainer to={Routes.ARCHIVED}>
                            <Nav.Link>Archived</Nav.Link>
                        </LinkContainer>
                        <LinkContainer to={Routes.JOBS}>
                            <Nav.Link>Jobs</Nav.Link>
                        </LinkContainer>
                    </Nav>
                    <Nav className="ml-auto">
                        <LinkContainer to={Routes.ACCOUNT}>
                            <Nav.Link>My Account</Nav.Link>
                        </LinkContainer>
                        <Nav.Link onClick={props.handleShow}>Sign In</Nav.Link>
                        <LinkContainer to={Routes.LANDING}>
                            <Nav.Link>Log Out</Nav.Link>
                        </LinkContainer>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </div>
    )
}

export default MainNav

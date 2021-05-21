import * as React from 'react';
import { Collapse, Container, Navbar, NavbarBrand, NavbarToggler, NavItem, NavLink } from 'reactstrap';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import * as NavStore from '../store/NavMenu';
import * as CountStore from '../store/Counter';
import { ApplicationState } from '../store';
import './NavMenu.css';

type NavProps =
    ApplicationState &
    typeof NavStore.actionCreators;

class NavMenu extends React.PureComponent<NavProps, {}, { isOpen: boolean }> {
    public render() {
        return (
            <header>
                {this.props.NavMenu?.isVisible ?
                    <Navbar className="navbar-expand-sm navbar-toggleable-sm border-bottom box-shadow mb-3" light>
                        <Container>
                            <NavbarBrand tag={Link} to="/">AccessControlMF</NavbarBrand>
                            {/* <NavbarToggler onClick={this.} className="mr-2" /> */}
                            <Collapse className="d-sm-inline-flex flex-sm-row-reverse" isOpen={true} navbar>
                                <ul className="navbar-nav flex-grow">
                                    <NavItem>
                                        <NavLink tag={Link} className="text-dark" to="/">Home</NavLink>
                                    </NavItem>
                                    <NavItem>
                                        <NavLink tag={Link} className="text-dark" to="/counter">Counter</NavLink>
                                    </NavItem>
                                    <NavItem>
                                        <NavLink tag={Link} className="text-dark" to="/fetch-data">Fetch data</NavLink>
                                    </NavItem>
                                </ul>
                            </Collapse>
                        </Container>
                    </Navbar>
                    :
                    null
                }
            </header>
        );
    }

}
const mapStateToProps = (state: ApplicationState) => state;

export default connect(
    mapStateToProps,
    NavStore.actionCreators
)(NavMenu);

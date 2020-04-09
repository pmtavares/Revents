import React, { Component } from 'react'
import {connect} from 'react-redux';
import {Menu, Container, Button} from 'semantic-ui-react'
import { NavLink, Link, withRouter } from 'react-router-dom';
import SignoutMenu from '../Menus/SignoutMenu';
import SignInMenu from '../Menus/SignInMenu';
import {openModal} from '../../modals/modalActions'
import {logout} from '../../auth/authActions'

const actions = {
    openModal,
    logout
}

const mapState = (state) => ({
    auth: state.auth
})

class Navbar extends Component {

    handleSignIn = () => {
        this.props.openModal('LoginModal')
    }

    handleRegister = () => {
        this.props.openModal('RegisterModal')
    }

    handleSignOut = () => {
        this.props.logout();
        this.props.history.push('/')
    }
    render() {
        const {auth} = this.props;
        const authenticated = auth.authenticated;
        return (
            <Menu inverted fixed="top">
                <Container>
                    <Menu.Item header as={NavLink} to='/' exact>
                    <img src="/assets/logo.png" alt="logo" />
                        Re-vents
                    </Menu.Item>
                    <Menu.Item exact name="Events" as={NavLink} to='/events'/>
                    <Menu.Item name="People" as={NavLink} to='/people'/>
                    <Menu.Item name="test" as={NavLink} to='/test'/>
                    <Menu.Item>
                        <Button floated="right" 
                            positive inverted 
                            content="Create Event"
                            as={Link} to='/createEvent' />
                    </Menu.Item>
                    {authenticated ? 
                        <SignInMenu signOut={this.handleSignOut} currentUser={auth.currentUser}/> : 
                        <SignoutMenu signIn = {this.handleSignIn} register={this.handleRegister}/>}
                    
                    
                </Container>
            </Menu>
        )
    }
}

export default withRouter(connect(mapState, actions)(Navbar));

import React, { Component } from 'react'
import {Menu, Container, Button} from 'semantic-ui-react'
import { NavLink, Link, withRouter } from 'react-router-dom';
import SignoutMenu from '../Menus/SignoutMenu';
import SignInMenu from '../Menus/SignInMenu';

class Navbar extends Component {

    state = {
        authenticated: false
    }

    handleSignIn = () => {
        this.setState({authenticated: true})
    }

    handleSignOut = () => {
        this.setState({authenticated: false});
        this.props.history.push('/')
        console.log(this.state.authenticated)
    }
    render() {
        const {authenticated} = this.state;
        return (
            <Menu inverted fixed="top">
                <Container>
                    <Menu.Item header as={NavLink} to='/' exact>
                    <img src="/assets/logo.png" alt="logo" />
                        Re-vents
                    </Menu.Item>
                    <Menu.Item name="Events" as={NavLink} to='/events'/>
                    <Menu.Item name="People" as={NavLink} to='/people'/>
                    <Menu.Item name="test" as={NavLink} to='/test'/>
                    <Menu.Item>
                        <Button floated="right" 
                            positive inverted 
                            content="Create Event"
                            as={Link} to='/createEvent' />
                    </Menu.Item>
                    {authenticated ? 
                        <SignInMenu signOut={this.handleSignOut} /> : 
                        <SignoutMenu signIn = {this.handleSignIn}/>}
                    
                    
                </Container>
            </Menu>
        )
    }
}

export default withRouter(Navbar);

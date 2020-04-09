import React from 'react'
import {Menu, Button} from 'semantic-ui-react'

const SignoutMenu = ({signIn, register}) => {
    return (
        <Menu.Item position="right">
            <Button basic inverted content="Login" onClick={signIn} />
            <Button basic inverted content="Register" style={{marginLeft: '0.5em'}} onClick={register} />
        </Menu.Item>
    )
}

export default SignoutMenu

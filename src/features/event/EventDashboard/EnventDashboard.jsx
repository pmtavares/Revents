import React, { Component } from 'react'
import { Grid } from 'semantic-ui-react';

 class EnventDashboard extends Component {
    render() {
        return (
            <Grid>
                <Grid.Column width={10}>
                    <h2>Left colum</h2>
                </Grid.Column>
                <Grid.Column width={6}>
                    <h2>Righ colum</h2>
                </Grid.Column>
            </Grid>
        )
    }
}


export default EnventDashboard;
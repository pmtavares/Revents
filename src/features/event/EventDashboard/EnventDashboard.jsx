import React, { Component } from 'react'
import {connect} from 'react-redux';
import { Grid } from 'semantic-ui-react';
import EventList from '../EventList/EventList';
import {createEvent, updateEvent, deleteEvent} from '../eventActions'
import LoadingComponent from '../../../app/layout/LoadingComponent';



 class EnventDashboard extends Component {
     state = {
         isOpen: false,
         selectedEvent: null
     }
     
  
     handleDeleteEvent =(id) =>{
       this.props.deleteEvent(id)
     }

    render() {
        const {events, loading} = this.props;
        if(loading)
        {
            return <LoadingComponent inverted={false}/>
        }
        return (
            <Grid>
                <Grid.Column width={10}>
                    <EventList events={events} deleteEvent={this.handleDeleteEvent}/>
                </Grid.Column>
                <Grid.Column width={6}>
                   <h2>Activities feed</h2>
                    
                </Grid.Column>
            </Grid>
        )
    }
}


const mapState = (state) => ({
  events: state.events,
  loading: state.async.loading
})

const actions = {
  createEvent,
  updateEvent,
  deleteEvent
}

export default connect(mapState, actions)(EnventDashboard);
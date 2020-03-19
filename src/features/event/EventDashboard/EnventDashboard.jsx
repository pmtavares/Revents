import React, { Component } from 'react'
import {connect} from 'react-redux';
import { Grid, Button } from 'semantic-ui-react';
import EventList from '../EventList/EventList';
import EventForm from '../EventForm/EventForm';
import cuid from 'cuid';
import {createEvent, updateEvent, deleteEvent} from '../eventActions'



 class EnventDashboard extends Component {
     state = {
         isOpen: false,
         selectedEvent: null
     }
     
    // handleIsOpenToggle = () => {
      //   this.setState(({isOpen}) => ({
        //     isOpen: !isOpen
         //}))
     //}

     handleCreateEvent = (newEvent) =>{
        newEvent.id = cuid();
        newEvent.hostPhotoURL = '/assets/user.png';
        this.props.createEvent(newEvent);
        this.setState(({events}) =>({
          isOpen: false
        }))
     }

     handleCreateFormOpen = () => {
       this.setState({
         isOpen: true,
         selectedEvent: null
       })
     }

     handleFormCancel =() =>{
       this.setState({
         isOpen: false
       })
     }

     handleSelectEvent =(evt, event) =>{
       this.setState({
         selectedEvent: event,
         isOpen: true
       })
     }

     handleUpdateEvent = (updatedEvent) =>{
       this.props.updateEvent(updatedEvent);
        this.setState(() => ({
          isOpen: false,
          selectedEvent: null
        }))
     }

     handleDeleteEvent =(id) =>{
       this.props.deleteEvent(id)
     }

    render() {
        const {isOpen, selectedEvent} = this.state;
        const {events} = this.props;
        return (
            <Grid>
                <Grid.Column width={10}>
                    <EventList events={events} selectedEvent={this.handleSelectEvent} deleteEvent={this.handleDeleteEvent}/>
                </Grid.Column>
                <Grid.Column width={6}>
                    <Button positive content="Create Event" onClick={this.handleCreateFormOpen}/>
                    {
                        isOpen && <EventForm cancelFormOpen={this.handleFormCancel} 
                          key={selectedEvent ? selectedEvent.id : 0}
                          updateEvent = {this.handleUpdateEvent}
                          createEvent={this.handleCreateEvent}
                          selectedEvent={selectedEvent}
                          />
                    }
                    
                </Grid.Column>
            </Grid>
        )
    }
}


const mapState = (state) => ({
  events: state.events
})

const actions = {
  createEvent,
  updateEvent,
  deleteEvent
}

export default connect(mapState, actions)(EnventDashboard);
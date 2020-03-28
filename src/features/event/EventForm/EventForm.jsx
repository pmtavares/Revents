import React, { Component } from 'react'
import {connect} from 'react-redux'
import {Segment, Form, Button} from 'semantic-ui-react'
import {updateEvent, createEvent} from '../eventActions'
import cuid from 'cuid';

const mapState = (state, ownProps) => {
    const eventId = ownProps.match.params.id;

    let event = {
        title:'',
        city: '',
        date: '',
        venue: '',
        hostedBy: ''
    }
    if(eventId && state.events.length > 0){
        event = state.events.filter(event => event.id === eventId)[0]
    }

    return {
        event
    }

}

const actions = {
    updateEvent, createEvent
}

 class EventForm extends Component {

    state = {
        ...this.props.event
    };

    componentDidMount(){
        if(this.props.selectedEvent !== null){
            this.setState({
                ...this.props.selectedEvent
            })
        }
    }

    handleFormSubmit = (evt) =>{
        evt.preventDefault();
        if(this.state.id){
            this.props.updateEvent(this.state)
            this.props.history.push(`/events/${this.state.id}`)
        }
        else{
            const newEvent = {
                ...this.state,
                id : cuid(),
                hostPhotoURL : '/assets/user.png'
            }
            this.props.createEvent(newEvent)
            this.props.history.push(`/events`)
        }

    
    }
    handleInputChange = (evt) =>{
        this.setState({
            [evt.target.name]: evt.target.value
        })
    }
    render() {
        const {title, city, date, venue, hostedBy} = this.state;
        return (
            <Segment>
            <Form onSubmit={this.handleFormSubmit}>
                <Form.Field>
                    <label>Event Title</label>
                    <input placeholder="First Name" 
                        value={title} name='title'
                        onChange={this.handleInputChange}/>
                </Form.Field>
                <Form.Field>
                    <label>Event Date</label>
                    <input type="date" placeholder="Event Date" 
                        name='date' value={date} onChange={this.handleInputChange}/>
                </Form.Field>
                <Form.Field>
                    <label>City</label>
                    <input placeholder="City event is taking place"
                     name='city' value={city} onChange={this.handleInputChange}  />
                </Form.Field>
                <Form.Field>
                    <label>Venue</label>
                    <input placeholder="Enter the Venue of the event" 
                        name='venue' value={venue} onChange={this.handleInputChange}   />
                </Form.Field>
                <Form.Field>
                    <label>Hosted By</label>
                    <input placeholder="Enter the name of person hosting" 
                        name='hostedBy' value={hostedBy} onChange={this.handleInputChange}  />
                </Form.Field>
                <Button positive type="submit">
                    Submit
                </Button>
                <Button type="button" onClick={this.props.history.goBack}>Cancel</Button>
            </Form>
            </Segment>
        )
    }
}
export default connect(mapState, actions)(EventForm);

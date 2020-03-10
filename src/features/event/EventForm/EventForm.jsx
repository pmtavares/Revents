import React, { Component } from 'react'
import {Segment, Form, Button} from 'semantic-ui-react'

 class EventForm extends Component {

    state = {
        title:'',
        city: '',
        date: '',
        venue: '',
        hostedBy: ''
    }

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
        }
        else{
            this.props.createEvent(this.state)
        }

    
    }
    handleInputChange = (evt) =>{
        this.setState({
            [evt.target.name]: evt.target.value
        })
    }
    render() {
        const {cancelFormOpen} = this.props;
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
                <Button type="button" onClick={cancelFormOpen}>Cancel</Button>
            </Form>
            </Segment>
        )
    }
}
export default EventForm;

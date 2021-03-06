/* global google */

import React, { Component } from 'react'
import {connect} from 'react-redux'
import {reduxForm, Field} from 'redux-form';
import {Segment, Form, Button, Grid, Header} from 'semantic-ui-react'
import {updateEvent, createEvent} from '../eventActions'
import cuid from 'cuid';
import { combineValidators, 
        composeValidators, 
        isRequired, 
        hasLengthGreaterThan} 
from 'revalidate'
import TextInput from '../../../app/form/TextInput';
import TextArea from '../../../app/form/TextArea';
import SelectInput from '../../../app/form/SelectInput';
import DateInput from '../../../app/form/DateInput'
import PlaceInput from '../../../app/form/PlaceInput';
import {geocodeByAddress, getLatLng} from 'react-places-autocomplete'

const mapState = (state, ownProps) => {
    const eventId = ownProps.match.params.id;
    let event = { }
    if(eventId && state.events.length > 0){
        event = state.events.filter(event => event.id === eventId)[0]
    }

    return {
        initialValues: event
    }

}

const actions = {
    updateEvent, createEvent
}

const validate = combineValidators({
    title: isRequired({message: "Title is required"}),
    category: isRequired({message: "Category is required"}),
    description: composeValidators(
        isRequired({message: "Please enter a description"}),
        hasLengthGreaterThan(4)({message: "Description needs to be at least 5 characteres"})
    )(),
    city: isRequired("City is required"),
    venue: isRequired("Venue is required"),
    date: isRequired({message: "Date is required"})
})

const category = [
    {key: 'drinks', text: 'Drinks', value: 'drinks'},
    {key: 'culture', text: 'Culture', value: 'culture'},
    {key: 'film', text: 'Film', value: 'film'},
    {key: 'food', text: 'Food', value: 'food'},
    {key: 'music', text: 'Music', value: 'music'},
    {key: 'travel', text: 'Travel', value: 'travel'},
];


 class EventForm extends Component {
    state ={
        cityLatLng: {},
        venueLatLng: {} 
    }
    onFormSubmit = (values) =>{
        values.venueLatLng = this.state.venueLatLng;
        if(this.props.initialValues.id){
            this.props.updateEvent(values)
            this.props.history.push(`/events/${this.props.initialValues.id}`)
        }
        else{
            const newEvent = {
                ...values,
                id : cuid(),
                hostPhotoURL : '/assets/user.png',
                hostedBy: 'Tavares',
                attendees: []
            }
            this.props.createEvent(newEvent)
            this.props.history.push(`/events`)
        }

    
    }

    handleCitySelect = selectedCity => {
        geocodeByAddress(selectedCity)
            .then(results => getLatLng(results[0]))
            .then(latlng => {
                this.setState({
                    cityLatLng: latlng
                })
            })
            .then(() => {this.props.change('city', selectedCity)})
            
    }
    
    handleVenueSelect = selectedVenue => {
        geocodeByAddress(selectedVenue)
            .then(results => getLatLng(results[0]))
            .then(latlng => {
                this.setState({
                    venueLatLng: latlng
                })
            })
            .then(() => {this.props.change('venue', selectedVenue)})
            
    }

    render() {
        //const {title, city, date, venue, hostedBy} = this.state;
        const {history, initialValues, invalid, submitting, pristine} = this.props;
        return (
            <Grid>
                <Grid.Column width={10}>
                    <Segment>
                        <Header sub color='teal' content='Event Details' />
                        <Form onSubmit={this.props.handleSubmit(this.onFormSubmit)}>
                            <Field name='title' component={TextInput} placeholder='Your event name'/>
                            <Field name='category' component={SelectInput} options={category} multiple={false}
                                   placeholder='Category of event'/>
                            
                            <Field name='description' 
                                   component={TextArea} 
                                   placeholder='Event description' rows={3}/>
                            
                            <Header sub color='teal' content='Event Location details' />
                            <Field name='city' component={PlaceInput} placeholder='Event city'
                                options={{types: ['(cities)']}}
                                onSelect={this.handleCitySelect}
                            />
                            <Field name='venue' component={PlaceInput} placeholder='Event venue'
                                options={{location: new google.maps.LatLng(this.state.cityLatLng),
                                            radius: 1000, types: ['establishment']}}
                                onSelect={this.handleVenueSelect}/>

                            <Field name='date' component={DateInput} date-format="dd LLL yyyy h:mm"
                                    showTimeSelect timeFormat='HH:mm'
                                        placeholder='Event date'/>  

                            <Button positive type="submit" disabled={invalid || submitting || pristine}>
                                Submit
                            </Button>
                            <Button type="button" onClick={initialValues.id 
                                    ? ()=> history.push(`/events/${initialValues.id}`) 
                                : () => history.push('/events')}>Cancel
                            
                            </Button>
                        </Form>
                    </Segment>
                </Grid.Column>
            </Grid>
            
        )
    }
}
export default connect(mapState, actions)(reduxForm({form: 'eventForm', validate})(EventForm));

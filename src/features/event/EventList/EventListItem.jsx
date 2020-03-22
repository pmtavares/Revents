import React, { Component } from 'react'
import {Segment, Item, Icon, Button, List} from 'semantic-ui-react'
import EventAttendee from './EventAttendee';
import { Link } from 'react-router-dom';

 class EventListItem extends Component {
    render() {
        const {event, selectEvent, deleteEvent} = this.props;
        return (
        <Segment.Group>
            <Segment>
                <Item.Group>
                <Item>
                    <Item.Image size="tiny" circular 
                        src={event.hostPhotoURL} />
                    <Item.Content>
                    <Item.Header as="a">{event.title}</Item.Header>
                    <Item.Description>
                        Hosted by {event.hostedBy}
                    </Item.Description>
                    </Item.Content>
                </Item>
                </Item.Group>
            </Segment>
            <Segment>
                <span>
                <Icon name="clock" /> {event.date} |
                <Icon name="marker" /> {event.venue}
                </span>
            </Segment>
            <Segment secondary>
                <List horizontal>
                {
                    event.attendees &&
                    event.attendees.map(attendee => (
                        <EventAttendee key={attendee.id} attendee = {attendee}/>
                    ))
                }
                </List>
            </Segment>
            <Segment clearing>
                <span>{event.description}</span>
                <Button as="a" color="red" floated="right" content="Delete" 
                    onClick={ () => deleteEvent(event.id)} />

                <Button as="a" color="teal" floated="right" content="View" 
                    as={Link} to={`/events/${event.id}`} />
            </Segment>
        </Segment.Group>
        )
    }
}

export default EventListItem;
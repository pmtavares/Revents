import React, {Fragment} from 'react'
import {Segment, Item, Label, List} from 'semantic-ui-react'

const EventDetailedSideBar = ({attendees}) => {
    const isHost=false

    return (
            <Fragment>
              <Segment textAlign='center' style={{ border: 'none' }} attached='top'
                secondary inverted color='teal'
              >
                {attendees && attendees.length} {attendees & attendees.length === 1 ? 'Person': 'People'} going
              </Segment>
              <Segment attached>
                <List relaxed divided>
                {
                    attendees && attendees.map((attendee) => (                        
                    <Item key={attendee.id} style={{ position: 'relative' }}>                        
                        {isHost && <Label style={{ position: 'absolute' }} color='orange' ribbon='right'>
                        Host
                        </Label>   
                        }   
                        <Item.Group>
                            <Item>
                                <Item.Image size='tiny' src={attendee.photoURL} />
                                <Item.Content verticalAlign='middle'>
                                    <Item.Header>{attendee.name}</Item.Header>
                                </Item.Content>
                            </Item>
                        </Item.Group> 
                    </Item>
                    ))
                }                  
                </List>
              </Segment>
            </Fragment>
    )
}

export default EventDetailedSideBar

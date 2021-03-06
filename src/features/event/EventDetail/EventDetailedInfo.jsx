import React, {useState} from 'react'
import {Segment, Button, Grid, Icon} from 'semantic-ui-react'
import EventDetailMap from './EventDetailMap';

const EventDetailedInfo = ({event}) => {
  const [isMapOpen, setIsMapOpen] = useState(false);

    return (
           <Segment.Group>
              <Segment attached="top">
                <Grid>
                  <Grid.Column width={1}>
                    <Icon size="large" color="teal" name="info" />
                  </Grid.Column>
                  <Grid.Column width={15}>
                    <p>{event.description}</p>
                  </Grid.Column>
                </Grid>
              </Segment>
              <Segment attached>
                <Grid verticalAlign="middle">
                  <Grid.Column width={1}>
                    <Icon name="calendar" size="large" color="teal" />
                  </Grid.Column>
                  <Grid.Column width={15}>
                    <span>{event.date.toString().substring(0,21)}</span>
                  </Grid.Column>
                </Grid>
              </Segment>
              <Segment attached>
                <Grid verticalAlign="middle">
                  <Grid.Column width={1}>
                    <Icon name="marker" size="large" color="teal" />
                  </Grid.Column>
                  <Grid.Column width={11}>
                    <span>{event.venue}</span>
                  </Grid.Column>
                  <Grid.Column width={4}>
                    <Button color="teal" size="tiny" content={isMapOpen ? "Hide Map": "Show Map"} 
                      onClick={() => setIsMapOpen(!isMapOpen)} />
                  </Grid.Column>
                </Grid>
              </Segment>
              {isMapOpen && 
              <EventDetailMap lat={event.venueLatLng.lat} lng={event.venueLatLng.lng} /> 
              }
            </Segment.Group>
    )
}

export default EventDetailedInfo

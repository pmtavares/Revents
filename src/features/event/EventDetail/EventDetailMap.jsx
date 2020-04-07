import React from 'react'
import { Segment, Icon } from 'semantic-ui-react';
import GoogleMapReact from 'google-map-react';
import {Config} from '../../../app/Config'

const Marker = () => <Icon name='marker' size='big' color='red' />;

const EventDetailMap = ({lat, lng}) => {
    const zoom = 14;
    return (
        <Segment attached='bottom'>
             <div style={{ height: '300px', width: '100%' }}>
                <GoogleMapReact
                bootstrapURLKeys={{ key: Config.API_KEY }}
                defaultCenter={{lat, lng}}
                defaultZoom={zoom}
                >
                <Marker
                    lat={lat}
                    lng={lng}
                />
                </GoogleMapReact>
            </div>
        </Segment>
    )
}

export default EventDetailMap

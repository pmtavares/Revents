import React, {useState} from 'react'
import {connect} from 'react-redux'
import {incrementCounter, decrementCounter} from './testAction'
import { Button } from 'semantic-ui-react';
import TestPlaceInput from './TestPlaceInput';
import SimpleMap from './SimpleMap'
import {
    geocodeByAddress,
    getLatLng,
  } from 'react-places-autocomplete';

const TestComponent = ({data,incrementCounter, decrementCounter }) => {
    const [latlng, setLaglng] = useState({
        lat: 59.95,
        lng: 30.33
    })

    const handleSelect = address => {
        geocodeByAddress(address)
          .then(results => getLatLng(results[0]))
          .then(latLng => setLaglng(latLng))
          .catch(error => console.error('Error', error));
      };

    return (
        <div>
            <h2>Test component</h2>
            <h4>Answer: {data}</h4>
            <Button onClick={incrementCounter} positive content='Increment' />
            <Button onClick={decrementCounter} negative content='Decrement' />
            <br />
            <br/>
            <TestPlaceInput selectAddress={handleSelect}/>
            <SimpleMap key={latlng.lng + latlng.lat} latlng={latlng}/>
        </div>
    )
}

const mapState = (state) => ({
    data: state.test.data
})

const mapActions = {
    incrementCounter, 
    decrementCounter
}

export default connect(mapState, mapActions)(TestComponent)

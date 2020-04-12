import React, {useState} from 'react'
import {connect} from 'react-redux'
import {incrementAsync, decrementAsync} from './testAction'
import { Button } from 'semantic-ui-react';
import TestPlaceInput from './TestPlaceInput';
import SimpleMap from './SimpleMap'
import {
    geocodeByAddress,
    getLatLng,
  } from 'react-places-autocomplete';
import {openModal} from '../modals/modalActions';

const mapState = (state) => ({
    data: state.test.data,
    loading: state.async.loading,
    buttonName: state.async.elementName
})

const mapActions = {
    incrementAsync, 
    decrementAsync,
    openModal
}

const TestComponent = ({data,incrementAsync, decrementAsync, openModal, loading,buttonName }) => {
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
            <Button name='increment' loading={buttonName === 'increment' && loading} 
                onClick={(e) => incrementAsync(e.target.name)} positive content='Increment' />
            <Button name='decrement' loading={buttonName === 'decrement' && loading} 
                onClick={(e) => decrementAsync(e.target.name)} negative content='Decrement' />
            <Button onClick={() => openModal('TestModal', {data: 42})} 
             content='Open Modal' color='teal' />
            <br />
            <br/>
            <TestPlaceInput selectAddress={handleSelect}/>
            <SimpleMap key={latlng.lng + latlng.lat} latlng={latlng}/>
        </div>
    )
}



export default connect(mapState, mapActions)(TestComponent)

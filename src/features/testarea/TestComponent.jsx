import React from 'react'
import {connect} from 'react-redux'
import {incrementCounter, decrementCounter} from './testAction'
import { Button } from 'semantic-ui-react';

const TestComponent = ({data,incrementCounter, decrementCounter }) => {
    return (
        <div>
            <h2>Test component</h2>
            <h4>Answer: {data}</h4>
            <Button onClick={incrementCounter} positive content='Increment' />
            <Button onClick={decrementCounter} negative content='Decrement' />
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

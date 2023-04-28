import React, { Component } from 'react'
import Roomcontext from './roomcontext'

const RoomState = (props) => {
    const state = {
        "name":"jodd"
    };
    return (
        <Roomcontext.Provider value={state}>
            {props.children}
        </Roomcontext.Provider>
    )
}

export default RoomState;
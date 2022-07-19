import React, { useReducer } from 'react'

export const context = React.createContext();

let initialState = [];

let XucXacReducerHook = (state, {type, payload}) => { 
    switch (type) {

        default: return {...state}
    }
 }

export default function ContextProvider(props) {
    let [item, dispatch] = useReducer(XucXacReducerHook, initialState)

    const store = {
        XucXacReducerHook: [item, dispatch]
    }
    return (
        <context.Provider value={store}>
            {props.children}
        </context.Provider>
    )
};

import React, { useReducer } from 'react'
import {CreateContext} from './CreateContext';
import {ContextReducer}from './ContextReducer'
import {ADD_TRANSACTION,DELETE_TRANSACTION} from './types'



export const UseContext = (props) => {

    let initialState={
        transcactions:[
            {id:1, desc:"Salary",amount:1000},
            {id:2,desc: "Rent",amount:2000},
            {id:3,desc:"Dinner",amount:-200},
            {id:4,desc:"Food",amount: -100}
        ]
    }
// const {transcactions}=initialState
const [state,dispatch]=useReducer(ContextReducer,initialState)

console.log(state);
    return (
        <div> 
            <CreateContext.Provider value={{
                //we put whole array of transactions
                transcactions: state.transcactions
            }}>
                {/* This will cover the all over componets */}
              {props.children}
            </CreateContext.Provider>


        </div>
    )
}

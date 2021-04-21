import React from 'react'

export const History = () => {
    let initialState={
        transcactions:[
            {id:1, desc:"Salary",amount:1000},
            {id:2,desc: "Rent",amount:2000},
            {id:3,desc:"Dinner",amount:-200}
        ]
    }
    const {transcactions}= initialState
    return (
        <div>
          <h2>History</h2> 
          {transcactions.map((objValues) =>{
            return(
            <div key={objValues.id}>
                <ul>
<li>{objValues.desc} <span>{objValues.amount}</span></li>
                </ul>
                </div>
            )
          
          })}
          
        </div>
    )
}

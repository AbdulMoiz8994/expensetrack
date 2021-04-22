import React, { useContext } from 'react'

// import context which we create and make as provider  and also ad prop value in contextapi file
import {CreateContext} from '../Context/CreateContext'

export const History = () => {
const {transcactions}=useContext(CreateContext)    
console.log(transcactions);
    return (
        <div>
          <h2>History</h2> 
        {transcactions.map((transactionObj) =>{
          return(
            <div key={transactionObj.id}>
              <ul>
              <li>{transactionObj.desc} <span>{transactionObj.amount}</span></li>
              </ul>
            </div>
          )
        })}
          
        </div>
    )
}

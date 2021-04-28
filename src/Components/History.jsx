import React, { useContext } from 'react'

// import context which we create and make as provider  and also ad prop value in contextapi file
import { CreateContext } from '../Context/CreateContext'

export const History = () => {
  const { transcactions, deletetransaction } = useContext(CreateContext)
  console.log( deletetransaction);
  return (
    <div>
      <h2 className="history-heading">History</h2>
      <ul>

      {transcactions.map((transactionObj) => {

        return (
          <div className="history" key={transactionObj.id}>
              <li className={transactionObj.amount < 0 ? "minus" : "plus"} style={{paddingBottom: '20px'}} >
                {transactionObj.desc} 
              <span>{transactionObj.amount < 0 ? "-" : "+" }${(transactionObj.amount)} 
              <button className="delete-button" onClick={() => deletetransaction(transactionObj.id)}>
                X
                </button>
                </span>
                
                </li>
            
          </div>
        )
      })}
            </ul>
    </div>
  )
}

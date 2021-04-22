// import types
import {ADD_TRANSACTION,DELETE_TRANSACTION} from './types'



export const ContextReducer=(state,action) =>{
   switch (action.type) {
    case DELETE_TRANSACTION:
        return{
            ...state,
         //    Show those  transaction.id which are not equal to action.payload 
            transcactions: state.transcactions.filter((transaction) => transaction.id !== action.payload)
            
        }
       case ADD_TRANSACTION:
          return{
              ...state,
            //   We mus give the same  key here and in Context where pass initialState{} and in reucer we used state.transactions of transactions[];
              transcactions: [action.payload,...state.transcactions]
          } 
   
   
       default:
           return state
   }
}
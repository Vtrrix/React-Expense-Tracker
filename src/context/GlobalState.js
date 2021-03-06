import React, { createContext, useReducer } from 'react';
import AppReducer from './AppReducer'

//Initial state
const initialState = {
    transactions: [
    ]
}

// Create context
export const GlobalContext = createContext(initialState)

//Provider Component
export const GlobalProvider = ({ children }) => {
    const [state, dispatch] = useReducer(AppReducer, initialState);

    // Actions
    let deleteTransactions = (id) => {
        dispatch({
            type: 'DELETE_TRANSACTIONS',
            payload: id
        });
    }

    let addTransaction = (transaction) => {
        dispatch({
            type: 'ADD_TRANSACTIONS',
            payload: transaction
        });
    }

    return (
        <GlobalContext.Provider value={{
            transactions: state.transactions,
            deleteTransactions,
            addTransaction
        }}>
            { children }
        </GlobalContext.Provider>
    )
}
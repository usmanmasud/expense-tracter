import { createContext, useState } from "react";

export const GlobalContext = createContext(null);


import React from 'react'

function GlobalState({ children }) {
    const [formData, setFormData] = useState({
        type: 'income',
        amount: 0,
        description: ''
    })
    const [value, setValue] = useState('income');
    const [totalExpense, setTotalExpense] = useState(0);
    const [totalIncome, setTotalIncome] = useState(0);
    const [allTransaction, setAllTransaction] = useState([]);

    function handleFormSubmit(currentFormData) {
        // console.log(currentFormData)

        if (!currentFormData.description || !currentFormData.amount) return

        setAllTransaction([...allTransaction, { ...currentFormData, id: Date.now() }])
    }


    console.log(allTransaction)

    return (
        <GlobalContext.Provider
            value={{
                formData, setFormData,
                totalExpense, setTotalExpense,
                totalIncome, setTotalIncome,
                value, setValue,
                allTransaction, setAllTransaction,
                handleFormSubmit
            }}
        >{children}</GlobalContext.Provider>
    )
}

export default GlobalState

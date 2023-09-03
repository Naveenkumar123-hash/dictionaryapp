import React, { useState } from 'react'
import HistoryContext from "./HistoryContext.js";

const HistoryProvider = ({childern}) => {

    let [history,setHistory] = useState("");

    return (
    <HistoryContext.Provider value={[history,setHistory]}>
        {childern}
    </HistoryContext.Provider>
  )
}

export default HistoryProvider
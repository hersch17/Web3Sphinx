import React from 'react'

import "./body.css"

const Body = () => {
  return (
    <div className="container">
        {/* <img src={logo}  alt="DBank logo" width="100" /> */}
        <h1>Hello user!</h1>
        <h1>Current Balance: ₹<span id="value">234</span></h1>
        <div className="divider"></div>
        <form action="#">
            <h2>Amount to Top Up</h2>
            <input id="input-amount" type="number" step="0.01" min={0} name="topUp" value="" />
            <h2>Amount to Withdraw</h2>
            <input id="withdrawal-amount" type="number" name="withdraw" step="0.01" min={0} value="" />
            <input id="submit-btn" type="submit" value="Finalise Transaction" />
        </form>
    </div>
      
   
  )
}

export default Body

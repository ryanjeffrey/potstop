import { useState, useEffect } from "react"
import { web3 } from '../lib/web3';

const EthName = function ({ address }) {
  // TODO!
  // get the address from outside
  // format it
  // check for ENS domain
  // get image if it has one
  // make jazzicon if not

  let formattedAddress = address.substr(0, 8) + "..." + address.substr(-4)

  return (
    <div className="eth-name">
      <div className="icon">
        {/* icon goes here */}
      </div>

      <div className="name">
        <span className="primary">
          {formattedAddress}
          {/* ENS name if one here */}
        </span>
        <span className="secondary">
          {/* formatted address here */}
        </span>
      </div>
     
    </div>
  )
}

export default EthName
import React from "react";

function WhatIsFiber() {
  return (
    <div className="wrapper">
      <h2 className="main-title">What is Fiber?</h2>
      <p className="secondary-title p-0 m-0"> 
        BLOCKCHAIN 3.0 INNOVATION WITH ADVANCED PEER-CHAIN ARCHITECTURE
      </p>
      <div className="fiber-description">
        “Skycoin’s Fiber architecture is a transformational,
        better-than-blockchain solution which solves existing problems using
        distributed ledger technology. Fiber is the foundation of blockchain 3.0
        and can be best described as an infinitely scalable network of
        blockchains laid side by side, like strands. This is a technological
        feat that cryptocurrencies such as Bitcoin or Ethereum will never be
        able to achieve, as they were never engineered to scale infinitely.”(
        <span>
          <a
            href="https://medium.com/skycoin/skycoin-fiber-platform-bf64debfc60f"
            target="_blank"
            rel="noopener noreferrer"
          >
            medium source
          </a>
        </span>
        )
      </div>
      <div className="small-description row"> 
        <div className="left col-lg-6 col-sm-12">
          <p>
            Fiber is the structural layer of Skycoin’s blockchain platform that is custom built to be adaptable to any blockchain application’s needs. Running on an innovative and extremely efficient code, Fiber enables the Skycoin platform to scale into and disrupt veritably every industry with blockchain solutions.
          </p>
        </div>
        <div className="right col-lg-6 col-sm-12">
          <p>
            Fiber is as sophisticated as it is elegant, capable of expanding and adapting to the needs of numerous types of distributed applications.
          </p>
        </div>
      </div>
    </div>
  );
}

export default WhatIsFiber;

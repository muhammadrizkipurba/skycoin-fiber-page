import React from "react";
import trulySymbiotic from "../utils/img/img1.svg";

function FiberAdventages(props) {

  const renderContent = () => (
    props.data.map(content => (
      <div key={content.id} className={content.classname}>
        <div className="image-content col-lg-4 col-sm-12">
          <img src={content.img} style={{ maxWidth: "200px" }} alt="fiber" />
        </div>
        <div className="text-content col-lg-8 col-sm-12 pr-0">
          <h3>{content.title}</h3>
          <p>{content.description}</p>
        </div>
      </div>
    ))
  )

  return (
    <div className="wrapper" style={{marginTop: "100px"}}>
      <h2>The Adventages of Fiber</h2>
      <div className="adventages-point">
        <div className="normal-block row">
          <div className="image-content col-lg-4 col-sm-12">
            <img
              src={trulySymbiotic}
              style={{ maxWidth: "232px" }}
              alt="fiber"
            />
          </div>
          <div className="text-content col-lg-8 col-sm-12">
            <h3>Truly symbiotic peer-chain system</h3>
            <p>
              Skycoin’s Fiber architecture enables scaling of the Skycoin
              platform laterally as well as vertically without
              compromising dependencies or network deficiencies at scale.
                Thanks to Skycoin’s{" "}
              <span>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://medium.com/skycoin/skycoin-obelisk-8cc32bc9ca37"
                >
                  Obelisk
                  </a>
              </span>{" "}
              consensus mechanism, every token supported by Fiber will be
              fundamentally isolated from others such that they will never
              impact one another regarding network stability, security, or
                throughput. Additionally, through the Skycoin{" "}
              <span>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://medium.com/skycoin/skycoin-coin-hours-f537fa7ae614"
                >
                  Coin Hour
                  </a>
              </span>{" "}
              system, every project that leverages Fiber will advance the
              entire Skycoin platform forward, without hindering the
              existing platform operations. Fiber creates an unprecedented
              level of symbiosis between projects while maintaining enough
              isolation such that no one tokens can negatively impact the
              remainder of the network.
              </p>
          </div>
        </div>
        {renderContent(props.data)}
      </div>
    </div>
  );
}

export default FiberAdventages

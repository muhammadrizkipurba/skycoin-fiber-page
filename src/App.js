import React, { Component } from "react";
import WhatIsFiber from "./components/WhatIsFiber";
import FiberAdventages from "./components/FiberAdventages";
import jumbotron from "./utils/img/jumbotron.svg"
import forkingDoneRight from "./utils/img/img4.svg";
import customizedBlockChain from "./utils/img/img2.svg";
import tokenSupport from "./utils/img/img5.svg";
import independentOperation from "./utils/img/img3.svg";
import "./App.css";

class App extends Component {

  state = {
    content: [
      {
        id: 1,
        title: "Forking done right",
        description: "Tokens running on Fiber will be forks of the Skycoin core code, which means that every project will have the same level of advanced features, throughput, and security as Skycoin.",
        img: forkingDoneRight,
        classname: "blue-block row"
      },
      {
        id: 2,
        title: "Customized Blockchain",
        description: "Projects running on Skycoin Fiber will have their own fully independent and highly customizable blockchain to fit their unique needs. It is fundamentally naive to assume that one set of rules or operations will fulfill the requirements of a wide range of projects, meaning adaptability is the most crucial factor of a blockchain platform that aims to successfully scale both vertically and laterally.",
        img: customizedBlockChain,
        classname: "normal-block row"
      },
      {
        id: 3,
        title: "True token support",
        description: "Tokens built on Skycoin’s Fiber architecture will have an unprecedented level of network support. Tokens will be able to run on our groundbreaking peer-to-peer network, Skywire, and each token will have immediate wallet and exchange support within the Skycoin ecosystem. That’s right, a project can launch and trade within a matter of minutes on our world-class platform.",
        img: tokenSupport,
        classname: "blue-block row"
      },
      {
        id: 4,
        title: "Independent Operation",
        description: "As Skywire develops into a global peer-to-peer mesh network, Fiber tokens running on Skywire will be completely independent of reliance on traditional network infrastructure like internet service providers. This platform independence is unique to Skycoin’s Fiber and its distributed applications and projects.",
        img: independentOperation,
        classname: "normal-block row"
      }
    ]
  }

  render() {
    return (
      <div className="App">
        <div>
          <img src={jumbotron} alt="jumbotron" style={{width: "100%", marginBottom: "100px"}}/>
        </div>
        <WhatIsFiber />
        <FiberAdventages data={this.state.content} />
      </div>
    )
  }
}

export default App;

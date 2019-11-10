// import * as React from "react";
// import * as TruffleContract from 'truffle-contract';
// import Web3 from "web3";

// const medChainContract = TruffleContract(require("../contracts/med_chain.json"));

// interface medChainProps {
//   web3: Web3;
// }

// interface medChainState {
//   account: string;
//   accountError: boolean;
//   balance: string;
//   contractAddress: string;
// }

// export default class MetaWallet extends React.Component<medChainProps, medChainState> {
//   constructor(props) {
//     super(props);
//     this.state = {
//       instance: null,
//       account: "",
//       accountError: false,
//       balance: "",
//       contractAddress: "",
//     };
//   }

//   public async componentWillMount() {
//     if (this.props.web3.eth.accounts.length === 0) {
//       this.setState({
//         account: "",
//         accountError: true,
//       });
//       return;
//     }
//     medChainContract.setProvider(this.props.web3.currentProvider);
//     const networkId = await this.props.web3.eth.net.getId();
//     const deployedNetwork = medChainContract.networks[networkId];
//     let instance = {};
//     try {
//       instance = new this.props.web3.eth.Contract(
//         medChainContract.abi,
//         deployedNetwork && deployedNetwork.address
//       );
//     } catch (err) {
//       alert(err);
//       return;
//     }

//     const balance  = await instance.getBalance(this.props.web3.eth.accounts[0]);
//     this.setState({
//       instance: instance,
//       account: this.props.web3.eth.accounts[0],
//       accountError: false,
//       balance: balance.toString(),
//       contractAddress: instance.address,
//     });
//   }
// }


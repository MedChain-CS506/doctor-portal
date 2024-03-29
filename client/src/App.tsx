import React, { useState, useEffect } from 'react';

//* Components
import Navbar from './components/layout/Navbar';
import Loading from './components/layout/Loading';

//* Pages
import Routes from './components/pages/Routes';

//* Context
//import PatientContextProvider from './context/patient/PatientContext';

//* Blockchain
// import getWeb3 from './utils/getWeb3.js';
//import MedChainContract from './contracts/med_chain.json';

//* Blockchain Functions
// async function getBlock() {
//   try {
//     const data = {
//       storageValue: 0,
//       web3: null,
//       accounts: null,
//       contract: null,
//     };
//     console.log('its going');
//     const web3 = await getWeb3();
//     const accounts = await web3.eth.getAccounts();
//     const networkId = await web3.eth.net.getId();
//     const deployedNetwork = MedChainContract.networks[networkId];
//     const instance = new web3.eth.Contract(
//       MedChainContract.abi,
//       deployedNetwork && deployedNetwork.address
//     );

//     const cont = instance;
//     data.accounts = accounts;
//     data.web3 = web3;
//     data.contract = instance;
//     return data;
//     console.log(contract_instance);
//   } catch (error) {
//     alert(
//       `Failed to load web3, accounts, or contract. Check console for details.`
//     );
//     console.error(error);
//   }
// }

// async function add_paitent(aadhaar, age, name, dob, weight, sex, allergies) {
//   await contract_instance.contract.methods.add_paitent(aadhaar, age, name, dob, weight, sex, allergies).send({
//     from: contract_instance.accounts[0],
//   });
//   console.log('Sent add_paitent to contract');
// }

// async function add_prescription(d_id, aadhaar, disease, symptoms, medicine, time) {
//   await contract_instance.contract.methods.add_prescription(d_id, aadhaar, disease, symptoms, medicine, time).send({
//     from: contract_instance.accounts[0],
//   });
//   console.log('Sent add_prescription to contract');
// }

// async function lookup_paitent(aadhaar) {
//   const paitent_page_data = {};

//   await contract_instance.contract.methods
//     .lookup_paitent(aadhaar)
//     .call()
//     .then(function(res) {
//       paitent_page_data.aadhaar = res[0];
//       paitent_page_data.age = res[1];
//       paitent_page_data.name = res[2];
//       paitent_page_data.sex = res[3];
//       paitent_page_data.dob = res[4];
//       paitent_page_data.weight = res[5];
//       paitent_page_data.allergies = res[6];
//     });

//   await contract_instance.contract.methods
//     .doctor_last_prescription(aadhaar)
//     .call()
//     .then(function(res) {
//       paitent_page_data.last_pres_id = res[0];
//       paitent_page_data.last_pres_medicine = res[1];
//       paitent_page_data.last_pres_doc_id = res[2];
//       paitent_page_data.last_pres_symptoms = res[3];
//       paitent_page_data.last_pres_timestamp = res[4];
//     });

//   return paitent_page_data;
// }

// async function medical_history(aadhaar) {
//   function get_string(str) {
//     const newStr = str.split('-');
//     newStr.splice(0, 2);
//     return newStr;
//   }

//   const medical_hist = {};

//   await contract_instance.contract.methods
//     .medical_history_details(aadhaar)
//     .call()
//     .then(function(res) {
//       medical_hist.pres_ids = get_string(res[0]).map(Number);
//       medical_hist.doctor_ids = get_string(res[1]).map(Number);
//       medical_hist.symptoms = get_string(res[2]);
//     });

//   await contract_instance.contract.methods
//     .medical_history(aadhaar)
//     .call()
//     .then(function(res) {
//       medical_hist.disease = get_string(res[0]);
//       medical_hist.medicine = get_string(res[1]);
//       medical_hist.timestamp = get_string(res[2]);
//     });

//   return medical_hist;
// }

const App: React.FC = () => {
  const [signedIn, setSignedIn] = useState(true);
  const [ready, setReady] = useState(true);

  const [contract, setContract] = useState({
    web3: null,
    accounts: null,
    contract: null,
  });

  useEffect(() => {
    console.log("use effect rendering");
    // async function connectMetamask() {
    //   try {
    //     console.log('its going');
    //     const web3 = await getWeb3();
    //     const accounts = await web3.eth.getAccounts();
    //     const networkId = await web3.eth.net.getId();
    //     const deployedNetwork = MedChainContract.networks[networkId];
    //     const instance = new web3.eth.Contract(
    //       MedChainContract.abi,
    //       deployedNetwork && deployedNetwork.address
    //     );
    //     console.log("got data");
    //     setContract({
    //       accounts,
    //       web3,
    //       contract: instance,
    //     })
    //     setSignedIn(true);
    //     setReady(true);
    //   } catch (error) {
    //     setSignedIn(false);
    //     setReady(false);
    //     console.error(error);
    //   }      
    // }

    // connectMetamask();
    // console.log(contract);

  }, []);

  return (
    <>
        {!ready && <Loading />}
        {ready && (
          <>
            <Navbar />
            <Routes signedIn={signedIn} />
          </>
        )}
    </>
  );
}

export default App;

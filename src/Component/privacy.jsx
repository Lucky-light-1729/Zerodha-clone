import React from "react";
import PrivacyPolicy from "./PrivacyPolicy";
import policyData from "../assets/data/privacyPolicyData.json";

const App = () => {
  return <PrivacyPolicy data={policyData.privacy_policy} />;
};

export default App;

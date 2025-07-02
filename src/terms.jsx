import React from "react";
import TermsAndConditions from "./TermsAndConditions";
import termsData from "./assets/json/termsData.json";

const TermsPage = () => {
  return <TermsAndConditions data={termsData.terms_and_conditions} />;
};

export default TermsPage;

import React from "react";
import SEO from "../common/seo";
import Register from "../components/register";
import Wrapper from "../layout/wrapper";

const index = () => {
  return (
    <Wrapper>
      <SEO pageTitle={"Cyber Secure"} />
      <Register />
    </Wrapper>
  );
};

export default index;

import React, { useState } from "react";

import Head from "next/head";

const Header = () => {
  return (
    <>
      <Head>
        <title>Pro Librarian</title>
      </Head>

      <div
        style={{ width: "100%", background: "#63CAB5", textAlign: "center" }}
      >
        <h1 style={{ color: "#283747" }}>This is Header</h1>
      </div>
    </>
  );
};

export default Header;

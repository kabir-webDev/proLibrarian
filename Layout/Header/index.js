import React, { useState } from "react";
import Link from "next/link";

import Head from "next/head";
import css from "./style.module.css";

const Header = () => {
  return (
    <>
      <Head>
        <title>Pro Librarian</title>
      </Head>

      <div className={css.container}>
        <div>
          <Link href="/">Pro Librarian</Link>
        </div>
        <div>
          <Link href="/add-user">Add User</Link>
        </div>
        <div>
          <Link href="/all-user">All User</Link>
        </div>
      </div>
    </>
  );
};

export default Header;

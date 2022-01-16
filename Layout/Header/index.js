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
        <Link href="/">
          <div>Pro Librarian</div>
        </Link>
        <Link href="/add-user">
          <div>Add User</div>
        </Link>
        <Link href="/all-user">
          <div>All User</div>
        </Link>
        <Link href="/add-book">
          <div>Add Book</div>
        </Link>
        <Link href="/all-book">
          <div>Book List</div>
        </Link>
      </div>
    </>
  );
};

export default Header;

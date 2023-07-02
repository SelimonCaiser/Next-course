import Head from "next/head";
import React from "react";
import styles from "../styles/style.module.scss";
import Links from "../components/Links";

export default function MainContainer({ children, key, title }) {
  return (
    <>
      <Head>
        <meta key={"selimon, users, nextjs, react, searchUsers, id" + key}></meta>
        <title>{title}</title>
      </Head>
      <div className={styles.navbar}>
        <Links title={"Главная"} href={"/"} />
        <Links title={"Пользователи"} href={"/users"} />
      </div>
      <div>{children}</div>
    </>
  );
}

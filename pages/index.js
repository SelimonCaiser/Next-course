import React from "react";
import styles from "../styles/Index.module.scss";
import MainContainer from "../conteiner/MainContainer";
export default function index() {
  return (
    <MainContainer key={'index'} title={'Главная страница'}>
      <div className={styles.index}>
        <h1>Главная страница</h1>
      </div>
    </MainContainer>
  );
}

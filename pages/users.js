import React, { useEffect } from "react";
import Link from "next/link";
import styles from "../styles/Users.module.scss"
import MainContainer from "../conteiner/MainContainer";
export default function users({users}) {

  return (
    <MainContainer key={'Селями, Selimon, selim'} title={'Пользователи'}>
      <h1>Список пользователей</h1>
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            <Link className={styles.link} href={`/users/${user.id}`}>{user.name}</Link>
          </li>
        ))}
      </ul>
    </MainContainer>
  );
}

export const getStaticProps = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  const users = await response.json();
  return { props: { users } };
};

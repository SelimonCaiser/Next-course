import React from "react";
import { useRouter } from "next/router";
import MainContainer from "../../conteiner/MainContainer";


export default function ({ user }) {
  const { query } = useRouter();
  return (
    <MainContainer title={`Пользователь ${user.name}`}>
      <span>
        Пользователь <b>{query.id}</b>
      </span><br />
      <span>
        Имя - <b>{user.name}</b>
      </span>
    </MainContainer>
  );
}

export const getServerSideProps = async ({ params }) => {
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/users/${params.id}`
  );
  const user = await response.json();
  return { props: { user } };
};

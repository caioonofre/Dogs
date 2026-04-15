import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../Forms/Button';
import UseForm from '../../Hooks/UseForm';
import Input from '../Forms/Input';

const LoginForm = () => {
  const username = UseForm();
  const password = UseForm();

  function handleSubmit(event) {
    event.preventDefault();
    fetch('https://www.dogsapi.origamid.dev/json/jwt-auth/v1/token', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({}),
    })
      .then((response) => {
        console.log(response);
        return response.json();
      })
      .then((json) => {
        console.log(json);
      });
  }

  return (
    <section>
      <h1>Login</h1>
      <form action="" onSubmit={handleSubmit}>
        <Input label="Usuário" type="text" name="username" {...username} />
        <Input label="Senha" type="password" name="password" {...password} />
        <Button>Entrar</Button>
      </form>
      <Link to="/Login/criar">Cadastro</Link>
    </section>
  );
};

export default LoginForm;

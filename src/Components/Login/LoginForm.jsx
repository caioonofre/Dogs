import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../Forms/Button';
import UseForm from '../../Hooks/UseForm';
import Input from '../Forms/Input';
import { UserContext } from '../../UserContext';

const LoginForm = () => {
  const username = UseForm();
  const password = UseForm();
  const { userLogin } = React.useContext(UserContext);

  async function handleSubmit(event) {
    event.preventDefault();

    if (username.validate() && password.validate()) {
      userLogin(username.value, password.value);
    }
  }
  return (
    <section>
      <h1>Login</h1>
      <form action="" onSubmit={handleSubmit}>
        <Input label="Usuário" type="text" name="username" />
        <Input label="Senha" type="password" name="password" />
        <Button>Entrar</Button>
      </form>
      <Link to="/Login/criar">Cadastro</Link>
    </section>
  );
};

export default LoginForm;

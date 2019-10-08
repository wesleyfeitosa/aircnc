import React, { useState } from 'react';
import api from '../../services/api';

export default function Login({ history }) {

  const [email, setEmail] = useState('');

  async function handleSubmit(event) {
    event.preventDefault();
    const response = await api.post('/sessions', { email });

    // usando desestruturação para recuperar o id da sessão inciada na requisião acima 
    const { _id } = response.data;

    // usando localStorage do navegador para guardar o id do usuário e usá-lo posteriormente
    localStorage.setItem('user', _id);

    // depois de tudo executado é feito o redirecionamento para a rota /dashboard
    history.push('/dashboard');
  }

  return (
    <>
      <p>
        Ofereça <strong>spots</strong> para programadores e encontre
          <strong> telentos</strong> para sua empresa.
        </p>
      <form onSubmit={handleSubmit}>
        <label htmlFor="email">E-MAIL *</label>
        <input
          type="email"
          id="email"
          placeholder="Seu melhor e-mail"
          value={email}
          onChange={event => setEmail(event.target.value)}
        />
        <button className="btn" type="submit">Entrar</button>
      </form>
    </>
  )
}
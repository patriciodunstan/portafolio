'use client';
import React, { useState } from 'react';

function Contact() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!name || !email || !message) {
      setError('Por favor complete todos los campos.');
    }
    const emailRegex = /^\S+@\S+\.\S+$/;
    if (!emailRegex.test(email)) {
      setError('Por favor, ingrese un correo electrónico válido.');
    }
  };

  const handleClick = async () => {
    const response = await fetch('http://localhost:3001/send-email', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        name,
        email,
        message
      })
    });
    const data = await response.json();
    console.log('Datos recibidos', data);
  };

  return (
    <div id="Contact" className=' border border-gray-500 flex justify-center items-center'>
      <form onSubmit={handleSubmit} className=" flex flex-col gap-4 space-x-2 ">
        <div>
          <label>Nombre:</label>
          <input
            type="text"
            className="border-black"
            value={name}
            onChange={(event) => setName(event.target.value)}
          />
        </div>
        <div>
          <label>Correo Electrónico:</label>
          <input
            type="email"
            className="border-black"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
          />
        </div>
        <div>
          <label>Mensaje:</label>
          <input
            type="text"
            className="border-black"
            value={message}
            onChange={(event) => setMessage(event.target.value)}
          />
        </div>
        <div>
          {error && <p className="text-red-500">{error}</p>}
          <button type="button" className="border border-black text-left " onClick={handleClick}>
            <p>Enviar</p>
          </button>
        </div>
      </form>
    </div>
  );
}
export default Contact;

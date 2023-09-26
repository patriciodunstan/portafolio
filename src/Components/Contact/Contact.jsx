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
    <div id="Contact" className="flex flex-row">
      <form
        onSubmit={handleSubmit}
        className=" flex flex-col gap-4 space-y-4 mx-11 my-8"
      >
        <div className="flex flex-row">
          <label className="mx-4 text-black text-2xl font-sans font-bold">
            <strong>Nombre:</strong>
          </label>
          <input
            type="text"
            className="flex flex-wrap border rounded border-gray-700 text-xl font-sans font-bold"
            value={name}
            onChange={(event) => setName(event.target.value)}
          />
        </div>
        <div className="flex flex-row">
          <label className="mx-4 border-gray-700 text-2xl font-sans font-bold">
            <strong>Correo Electrónico:</strong>
          </label>
          <input
            type="email"
            className="flex flex-wrap border rounded border-black text-xl font-sans font-bold"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
          />
        </div>
        <div className="flex flex-col">
          <label className="mx-4 text-black text-2xl font-sans font-bold">
            <strong>Mensaje:</strong>
          </label>
          <input
            type="text"
            className="flex flex-wrap items-start border border-gray-700 text-xl h-[102px] w-[996px] font-sans font-bold"
            value={message}
            onChange={(event) => setMessage(event.target.value)}
          />
        </div>
        <div>
          {error && <p className="text-red-500">{error}</p>}
          <button
            type="button"
            className="flex justify-center items-center bg-black border rounded border-gray-700 text-left text-white text-xl w-36"
            onClick={handleClick}
          >
            <p>Enviar</p>
          </button>
        </div>
      </form>
    </div>
  );
}
export default Contact;

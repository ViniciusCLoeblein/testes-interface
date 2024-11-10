import Head from 'next/head';
import { useState } from 'react';

export default function Contato() {
  const [sucesso, setSucesso] = useState(false);

  const handleSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    setSucesso(true);
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-50">
      <Head>
        <title>Contato</title>
      </Head>
      <div className="w-full max-w-md p-6 bg-white rounded-lg shadow-md">
        <h1 className="mb-6 text-2xl font-bold text-center text-gray-800">Contato</h1>
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <input
            type="text"
            name="nome"
            placeholder="Nome"
            required
            className="w-full px-4 py-2 text-gray-700 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-green-500"
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            required
            className="w-full px-4 py-2 text-gray-700 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-green-500"
          />
          <textarea
            name="mensagem"
            placeholder="Mensagem"
            required
            className="w-full px-4 py-2 text-gray-700 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-green-500"
          ></textarea>
          <button
            type="submit"
            className="px-4 py-2 font-semibold text-white bg-green-600 rounded hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500"
          >
            Enviar
          </button>
        </form>
        {sucesso && (
          <p className="mt-4 text-center text-green-600 font-medium">Mensagem enviada com sucesso!</p>
        )}
      </div>
    </div>
  );
}

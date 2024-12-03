import React from 'react';
import Header from './components/Header';
import Section from './components/Section';
import Counter from './components/Counter';

function App() {
  return (
    <div className="min-h-screen bg-pink-300">
      <Header
        title="Contador"
      />
      <main className="container mx-auto p-4 space-y-4">
        <Section>
          <h2 className="text-lg font-semibold mb-2">Funcion</h2>
          <p>
            Este componente utiliza el hook useState para manejar
            el contador. Haz clic en "Incrementar" para aumentar el
            número o en "Restablecer" para volver a 0.
          </p>
        </Section>
        <Section>
          <Counter />
        </Section>
      </main>
    </div>
  );
}

export default App;

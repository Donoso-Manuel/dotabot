import './App.css';
import Chatbot from './components/Chatbot';
import Navbar from './components/Navbar';

function App() {
  return (
    <div>
      <Navbar />
      <section id="inicio" style={{ textAlign: 'center' }}>
        <h1 style={{margin: '8px'}}>Bienvenido a tu asistente de dotacion virtual</h1>
      </section>

      <section id="chat">
        <Chatbot />
      </section>

      <section id="acerca" style={{ padding: '1rem' }}>
        <h2>Acerca de</h2>
        <p>Este asistente fue diseñado para responder tus consultas relacionadas al area de dotacion como horario, contactos y como realizar ciertos procesos</p>
      </section>

      <section id="contacto" style={{ padding: '1rem' }}>
        <h2>Contacto</h2>
        <p>Puedes contactarnos al correo interno manueldonosoalfaro@gmail.com </p>
      </section>
    </div>
  );
}

export default App;

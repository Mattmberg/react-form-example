import Header from './components/Header';
import Footer from './components/Footer';
import { Form } from './components/Form';
import { questions } from './components/Questions.js';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header/>
      <main>
        <Form questions={questions}/>
      </main>
      <Footer/>
    </div>
  );
}

export default App;

import NetFlixData from '../src/Components/NetFlixData';

import './App.css';
import './index.css';

function App() {
  return (
    <section className="container">
      <div>
        <h1 className='card-heading'>List of best webseries :</h1>
        <NetFlixData />
      </div>
    </section>
  );
}

export default App;

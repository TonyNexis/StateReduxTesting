import { Provider } from 'react-redux'

import store from './redux/store';
import Likes from './likes';

import './App.css';

function App() {
  return (
      <div className="App">
        <div className="wrap">
          <div className="card">
            <div className="card-image">
              <img src="./sea.jpg" alt="surfing"/>
              <Likes store={store}/>
            </div>
          </div>
        </div>
      </div>
  );
}

export default App;

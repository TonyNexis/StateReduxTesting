import './App.css';
import Likes from './likes';
import Comments from './Comments';

function App() {
  return (
      <div className="App">
        <div className="wrap">
          <div className="card">
            <div className="card-image">
              <img src="./sea.jpg" alt="surfing"/>
              <Likes/>
            </div>
            <Comments/>
          </div>
        </div>
      </div>
  );
}

export default App;

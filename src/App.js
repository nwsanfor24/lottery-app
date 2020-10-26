import './App.css';
import Post from './components/Post';
import { Provider } from 'react-redux';

import store from './store';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Post />
      </div>
    </Provider>
  );
}

export default App;

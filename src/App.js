import Header from './components/Header';
import MainBody from './components/MainBody';
import { Provider } from 'react-redux';
import store from "./utils/store";
import './App.css';

function App() {
  return (
    <div className="font-bold">
      <Provider store={store}>
      <Header />
      <MainBody />
      </Provider>
    </div>
  );
}

export default App;

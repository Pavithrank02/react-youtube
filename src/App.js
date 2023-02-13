import Header from './components/Header';
import MainBody from './components/MainBody';
import { Provider } from 'react-redux';
import store from "./utils/store";
import './App.css';
import { createBrowserRouter as Router, RouterProvider } from 'react-router-dom';
import { Children } from 'react';
import MainContainer from './components/MainContainer';
import WatchVideo from './components/WatchVideo';

function App() {
  const appRouter = Router([{
    path: "/",
    element: <MainBody />,
    children: [
      {
        path: "/",
        element: <MainContainer />
      },
      {
        path: "/watch",
        element: <WatchVideo />
      }
    ]
  }])
  return (
    <div className="">
      <Provider store={store}>
        <Header />
        <RouterProvider router={appRouter} />
      </Provider>
    </div>
  );
}

export default App;

import React from 'react';
import { Provider } from 'react-redux';
import Xamine from './Xamine';
import { store } from '../store';


const App = () => (
  <Provider store={store}>
    <Xamine/>
  </Provider>
);

export default App;
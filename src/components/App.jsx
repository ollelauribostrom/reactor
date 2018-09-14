import React from 'react';
import { Provider } from '../store/CounterStore';
import Counter from './Counter';
import StatusBar from './StatusBar';

export default function App() {
  return (
    <Provider>
      <Counter />
      <StatusBar />
    </Provider>
  );
}

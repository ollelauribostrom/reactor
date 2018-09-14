import createStore from 'react-waterfall';

type CounterState = {
  value: number
};

const config = {
  initialState: {
    value: 0
  },
  actionsCreators: {
    increment: ({ value }: CounterState) => ({ value: value + 1 }),
    decrement: ({ value }: CounterState) => ({ value: value - 1 })
  }
};

export const { Provider, connect, actions, subscribe } = createStore(config);

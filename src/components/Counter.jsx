import React, { Fragment } from 'react';
import { connect, actions } from '../store/CounterStore';
import Button from './Button';

type Props = {
  value: number
};

function Counter({ value }: Props) {
  return (
    <Fragment>
      <p>{`Value: ${value}`}</p>
      <Button name={1} onClick={() => actions.increment()} />
      <Button name="-" onClick={() => actions.decrement()} />
    </Fragment>
  );
}

export default connect(state => state)(Counter);

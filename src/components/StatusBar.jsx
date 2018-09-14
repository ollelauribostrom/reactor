import React, { Component } from 'react';
import { connect, subscribe } from '../store/CounterStore';
import SquareService from '../services/SquareService';

type Props = {
  status: string
};

type State = {};

export class StatusBar extends Component<Props, State> {
  componentWillMount() {
    subscribe(this.onCount);
  }

  async onCount(_, { value }) {
    const squared = await SquareService.square(value);
    console.log(squared);
  }

  render() {
    return <div />;
  }
}

export default connect(state => state)(StatusBar);

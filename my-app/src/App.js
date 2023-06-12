import './App.scss';
import React, { Component } from 'react';
import Button from './Button.jsx';

const btnNumber = [
  '1',
  '2',
  '3',
  '4',
  '5',
  '6',
  '7',
  '8',
  '9',
  "←",
  '0',
  '.'
];

const btnSymdolRight = [
  '+',
  '-',
  '='
];

const btnSymdolTop = [
  'C',
  '%',
  '/',
  '*',
]
let variable = true;
export default class App extends Component {

  state = {
    str: '',
    firstValue: '',
    symbolValue: '',
    secondValue: '',
  }

  calculateTotals = (value) => {
    if (value === '+') {
      this.setState(originStr => ({ firstValue: (+originStr.firstValue) + (+originStr.secondValue) }))
      this.setState(originStr => ({ str: originStr.str = originStr.firstValue }))
    }
    if (value === '-') {
      this.setState(originStr => ({ firstValue: (+originStr.firstValue) - (+originStr.secondValue) }))
      this.setState(originStr => ({ str: originStr.str = originStr.firstValue }))

    }
    if (value === '/') {
      this.setState(originStr => ({ firstValue: (+originStr.firstValue) / (+originStr.secondValue) }))
      this.setState(originStr => ({ str: originStr.str = originStr.firstValue }))

    }
    if (value === '*') {
      this.setState(originStr => ({ firstValue: (+originStr.firstValue) * (+originStr.secondValue) }))
      this.setState(originStr => ({ str: originStr.str = originStr.firstValue }))

    }
  }


  addNumberScreen = (value) => {
    if (this.state.symbolValue === '' && this.state.secondValue === '') {
      this.setState(originStr => ({ str: originStr.str = originStr.str + value }))
      this.setState(originStr => ({ firstValue: originStr.firstValue = originStr.firstValue + value }))
    } else {
      if (variable === true) {
        this.setState(originStr => ({ str: originStr.str = '' }))
        variable = false
      }
      this.setState(originStr => ({ str: originStr.str = originStr.str + value }))
      this.setState(originStr => ({ secondValue: originStr.secondValue = originStr.secondValue + value }))
    }

    if (value === "←" && this.state.symbolValue === '') {
      this.setState(originStr => ({ str: originStr.str.slice(0, -2) }));
      this.setState(originStr => ({ firstValue: originStr.firstValue.slice(0, -2) }));
    }
    if (value === "←" && this.state.symbolValue !== '') {
      this.setState(originStr => ({ str: originStr.str.slice(0, -2) }));
      this.setState(originStr => ({ secondValue: originStr.secondValue.slice(0, -2) }));
    }
  }

  clearData() {
    this.setState(originStr => ({ secondValue: originStr.secondValue = '' }))
    this.setState(originStr => ({ symbolValue: originStr.symbolValue = '' }))
  }

  addSymbolScreen = (value) => {
    if (value === '-' || value === '+' || value === '/' || value === '*') {
      console.log(this.state.firstValue, this.state.secondValue, this.state.symbolValue);
      if (this.state.secondValue === '' && this.state.symbolValue === '') {
        this.setState(originStr => ({ symbolValue: originStr.symbolValue = value }))
      } else {
        this.calculateTotals(this.state.symbolValue)
        this.clearData()
        this.setState(originStr => ({ symbolValue: originStr.symbolValue = value }))
        variable = true;
      }
    }

    if (value === '=') {
      this.calculateTotals(this.state.symbolValue)
      this.clearData()
      variable = true;
    }
    if (value === 'C') {
      this.setState({
        str: '',
        firstValue: '',
        symbolValue: '',
        secondValue: '',
      }); return
    }
    if (value === '%') { return }
  }


  render() {
    return (
      <div className="box_calculator">
        <div className="screen"></div>
        <div className="box_actions">{this.state.str}</div>
        <div className="box_buttons">
          <div className="block1">
            <div className="box_symbols_top">{btnSymdolTop.map((item, i) => <Button name="typeSymbol" content={item} key={i} callback={this.addSymbolScreen} />)}</div>
          </div>
          <div className="block2">
            <div className="box_btn_number">{btnNumber.map((item, i) => <Button name="typeNumber" content={item} key={i} callback={this.addNumberScreen} />)}</div>
            <div className="block_symbols_right"><div>{btnSymdolRight.map((item, i) => <Button name="typeSymbol" key={i} content={item} callback={this.addSymbolScreen} />)}</div></div>
          </div>
        </div>
      </div>
    );
  }
}


import React from 'react';
import {mergeSort} from '../buttons_functions/button_merge';
import {quickSort} from '../buttons_functions/button_quick';
import {bubbleSort} from '../buttons_functions/button_bubble';
import {selectionSort} from '../buttons_functions/button_selection';
import {insertionSort} from '../buttons_functions/button_insertion';
import './SortingVisualizer.css';

let obj1={
  ANIMATION_SPEED_MS: 8,
  PRIMARY_COLOR: 'turquoise',
  SECONDARY_COLOR:  'red',
  NUMBER_OF_ARRAY_BARS: 120,
}

export default class SortingVisualizer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      array: [],
    };
  }

  componentDidMount() {
    this.resetArray();
  }

  resetArray() {
    const array = [];
    for (let i = 0; i < obj1.NUMBER_OF_ARRAY_BARS; i++) {
      array.push(randomIntFromInterval(5, 500));
    }
    this.setState({array});
  }
  

  render() {
    const {array} = this.state;

    return (
        
      <div className="array-container">
        {array.map((value, idx) => (
          <div
            className="array-bar"
            key={idx}
            style={{
              //backgroundColor: FINAL_COLOR,
              height: `${value}px`,
            }}></div>
        ))}
        
        <div className="lower_element">
        <div>
        <button className="btn" onClick={() => this.resetArray()}>Generate New Array</button>
        <button className="btn" onClick={() => mergeSort(array,obj1)}>Merge Sort</button>
        <button className="btn" onClick={() => quickSort(array,obj1)}>Quick Sort</button>
        <button className="btn" onClick={() => selectionSort(array,obj1)}>Selection Sort</button>
        <button className="btn" onClick={() => bubbleSort(array,obj1)}>Bubble Sort</button>
        <button className="btn" onClick={() => insertionSort(array,obj1)}>Insertion Sort</button>
        </div>
        </div>
      </div>
    );
  }
}

function randomIntFromInterval(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

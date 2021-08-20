import {getBubbleSortAnimations} from '../sortingAlgorithms/Bubblesort_algo.js';
import './btn_stop.css';

let obj={
    running: true,
}

export function bubbleSort(
    array,
    obj1,
) {
    const animations = getBubbleSortAnimations(array);
    <button className="stop_button" onClick={() => stop_code}>STOP</button>
    for (let i = 0; i < animations.length; i++){
        
        if(!obj.running){
            break;
        }
        const arrayBars = document.getElementsByClassName('array-bar');

        const [barOneIdx, barTwoIdx] = animations[i];
        const barOneStyle = arrayBars[barOneIdx].style;
        const barTwoStyle = arrayBars[barTwoIdx].style;
        const barThreeStyle = arrayBars[barOneIdx+1].style;
        if(i%2==0){
            setTimeout(() => {
                barOneStyle.backgroundColor = obj1.SECONDARY_COLOR;
                barTwoStyle.backgroundColor = obj1.SECONDARY_COLOR;
            }, i * obj1.ANIMATION_SPEED_MS);
        } else {
            setTimeout(() => {
                barOneStyle.backgroundColor = obj1.PRIMARY_COLOR;
                barTwoStyle.backgroundColor = obj1.PRIMARY_COLOR;
                barThreeStyle.backgroundColor = obj1.PRIMARY_COLOR;
                let newHeight = barOneStyle.height;
                barOneStyle.height = barTwoStyle.height;
                barTwoStyle.height = newHeight;
            }, i * obj1.ANIMATION_SPEED_MS);
        }
    }
  }

  function stop_code(){
      obj.running=false;
  }
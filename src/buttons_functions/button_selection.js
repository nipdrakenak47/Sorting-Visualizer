import {getSelectionSortAnimations} from '../sortingAlgorithms/Selectionsort_algo.js';


export function selectionSort(
    array,
    obj1,
) {
    
    const animations = getSelectionSortAnimations(array);
    for (let i = 0; i < animations.length; i++) {
      const arrayBars = document.getElementsByClassName('array-bar');
    
        const [barOneIdx, barTwoIdx] = animations[i];
        const barOneStyle = arrayBars[barOneIdx].style;
        const barTwoStyle = arrayBars[barTwoIdx].style;
        
      if (i%2==0) {
        setTimeout(() => {
          barOneStyle.backgroundColor = obj1.SECONDARY_COLOR;
          barTwoStyle.backgroundColor = obj1.SECONDARY_COLOR;
        }, i * obj1.ANIMATION_SPEED_MS);
      } else {
        setTimeout(() => {
            barOneStyle.backgroundColor = obj1.PRIMARY_COLOR;
            barTwoStyle.backgroundColor = obj1.PRIMARY_COLOR;

            let newHeight = barOneStyle.height;
            barOneStyle.height = barTwoStyle.height;
            barTwoStyle.height = newHeight;
        }, i * obj1.ANIMATION_SPEED_MS);
      }
    }
  }
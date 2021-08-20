export function getBubbleSortAnimations(array) {
    const animations = [];
    if (array.length <= 1) return array;
    bubbleSortHelper(array, array.length , animations);
    return animations;
  }

  function bubbleSortHelper(
      array,
      total,
      animations,
  ){
      for(let i=0; i < total-1 ; i++){
          for(let j=0;j < total-1-i ; j++){
              animations.push([j,j+1]);
              if(array[j+1]<array[j]){
                  let temp=array[j+1];
                  array[j+1]=array[j];
                  array[j]=temp;
                  animations.push([j,j+1]);
              }
              else{
                animations.push([j,j]);
              }
          }
      }
  }
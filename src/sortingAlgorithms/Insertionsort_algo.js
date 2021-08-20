export function getInsertionSortAnimations(array) {
    const animations = [];
    if (array.length <= 1) return array;
    insertionSortHelper(array, array.length , animations);
    return animations;
  }

  function insertionSortHelper(
      array,
      total,
      animations,
  ){
    let i,j,temp;
    for(i=1;i<=total-1;i++){
        for(j=i;j>=1;j--){
            if(array[j]<array[j-1]){
                animations.push([j,j-1]);
                animations.push([j,j-1]);
                temp=array[j];
                array[j]=array[j-1];
                array[j-1]=temp;
            }
            else
                break;
        }
    }
  }
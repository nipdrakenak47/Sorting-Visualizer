export function getSelectionSortAnimations(array) {
    const animations = [];
    if (array.length <= 1) return array;
    selectionSortHelper(array, array.length , animations);
    return animations;
  }

  function selectionSortHelper(
      array,
      total,
      animations,
  ){
    let i,j,temp,min;
    for(i=0;i<=total-2;i++)
    {
        min=i;
        for(j=i;j<=total-1;j++){
            if(array[j]<array[min]){
                min=j;
            }
            animations.push([j,j]);
            animations.push([j,j]);
        }
        animations.push([i,min]);
        animations.push([i,min]);
        temp=array[i];
        array[i]=array[min];
        array[min]=temp;
    }

  }
export function getQuickSortAnimations(array) {
    const animations = [];
    if (array.length <= 1) return array;
    quickSortHelper(array, 0, array.length - 1, animations);
    return animations;
  }

  function quickSortHelper(
      array,
      start,
      end,
      animations,
  ){
      if(start<end){
          let part_index;
          part_index = partition(array,start,end,animations);
          quickSortHelper(array,start,part_index-1,animations);
          quickSortHelper(array,part_index+1,end,animations);
      }
  }

  function partition(
      array,
      start,
      end,
      animations,
  ){
      let pivot=array[end];
      let pindex=start;
      let i;
      let temp;
      for(i=start;i<end;i++){
        if(array[i]<=pivot){
            animations.push([pindex,i]);
            animations.push([pindex,i]);
            temp=array[i];
            array[i]=array[pindex];
            array[pindex]=temp;
            pindex++;
        }
      }
      animations.push([pindex,end]);
      animations.push([pindex,end]);
      temp=array[end];
      array[end]=array[pindex];
      array[pindex]=temp;
      return pindex;
  }
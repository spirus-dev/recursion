function merge(array1,array2){
    let i=0,j=0,k=0;
    let mergedSortedArray=[];
    while(i<array1.length && j<array2.length){
        if(array1[i]<array2[j]){
            mergedSortedArray[k++]=array1[i++];
        }
        else{
            mergedSortedArray[k++]=array2[j++];
        }
    }
    while(i<array1.length){
        mergedSortedArray[k++]=array1[i++];
    }
    while(j<array2.length){
        mergedSortedArray[k++]=array2[j++];
    }
    return mergedSortedArray;
}

function twoWayMergeSort(array){
    let sortedArray=[array[0]];
    for(let i=1;i<array.length;i++){
        sortedArray=merge(sortedArray,[array[i]]);
    }
    return sortedArray;
}

function mergeSort(array){
    if(array.length<2)
        return array;

    let mid=Math.floor(array.length/2);
    let leftHalf=array.slice(0,mid);
    let rightHalf=array.slice(mid,array.length);
    return merge(mergeSort(leftHalf),mergeSort(rightHalf));
}

console.log(`Iterative Merge Sort : ${twoWayMergeSort([1,3,5,7,9,0,2,4,6,8])}`);
console.log(`Recursive Merge Sort : ${mergeSort([1,3,5,7,9,0,2,4,6,8])}`);

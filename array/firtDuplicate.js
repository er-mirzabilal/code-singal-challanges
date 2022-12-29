
/**
 * Poblem Statement
 * Given an array a that contains only numbers in the range from 1 to a.length, find the first duplicate number for which the second occurrence has the minimal index. In other words, if there are more than 1 duplicated numbers, return the number for which the second occurrence has a smaller index than the second occurrence of the other number does. If there are no such elements, return -1.
 */

function solution(a) {
    
    const occurence = a.map((item, index) => {
        const occIndex = a.slice(index + 1).indexOf(item);
         return occIndex === -1 ? occIndex : (index+1) + occIndex;
    })    
    console.log(occurence);
    const smallestIndex = occurence.reduce((result, item) => {
        console.log(result, item)
        if(item === -1 ){
            return result;
        }
        if(result === -1) return item;
        if(result > item) return item;
        return result;
    }, -1)
    if(smallestIndex === -1) return -1;
    return a[smallestIndex];
}
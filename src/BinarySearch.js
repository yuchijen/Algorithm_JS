


//162. Find Peak Element
//A peak element is an element that is greater than its neighbors.
//Given an input array where num[i] ≠ num[i + 1], find a peak element and return its index.
//The array may contain multiple peaks, in that case return the index to any one of the peaks is fine.
//You may imagine that num[-1] = num[n] = -∞.
//For example, in array[1, 2, 3, 1], 3 is a peak element and your function should return the index number 2.
var FindPeakElement = function(nums){
    if(nums==null || nums.length==0)
        return -1;

    var stIdx = 0; 
    var endIdx = nums.length-1;

    while(stIdx <= endIdx){
        var piv = (stIdx + endIdx) >>1;
        if(piv==0 || piv==nums.length -1|| (piv > 0 && piv < nums.length-1 && nums[piv] > nums[piv+1] && nums[piv] > nums[piv-1]))
            return piv;
        else if(piv < nums.length-1 && nums[piv] < nums[piv+1] ){
            stIdx = piv+1; 
        }    
        else if(piv > 0 && nums[piv] < nums[piv-1]){
            endIdx = piv-1;
        }
        else
            return -1;
    }
}

module.exports={
    FindPeakElement
}
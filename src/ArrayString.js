//49. Group Anagrams  (Amazon onsite)
//Given an array of strings, group anagrams together.
//For example, given: ["eat", "tea", "tan", "ate", "nat", "bat"], 
//Return:
//  [  ["ate", "eat","tea"], ["nat","tan"], ["bat"] ]        
var GroupAnagrams2 = function (strs) {

    var ret = [];
    if (strs == null || strs.length == 0)
        return ret;

    var map1 = new Map();

    strs.forEach(element => {
        var sortedStrKey = [...element].sort().join('');
        if (!map1.has(sortedStrKey))
            map1.set(sortedStrKey, [element]);
        else {
            map1.get(sortedStrKey).push(element);
        }
    });
    
    let values = [...map1.values()];  //Array.from(map1.values());
    values.forEach(v => {
        console.log(v);
    });

    return values;
}


module.exports = {
    GroupAnagrams2
}
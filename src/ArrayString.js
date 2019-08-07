        //49. Group Anagrams  (Amazon onsite)
        //Given an array of strings, group anagrams together.
        //For example, given: ["eat", "tea", "tan", "ate", "nat", "bat"], 
        //Return:
        //  [  ["ate", "eat","tea"], ["nat","tan"], ["bat"] ]        
        var GroupAnagrams2 = function(strs){
            
            var ret = [];
            if(strs==null || strs.length==0)
                return ret;
            
            strs.split(',').array.forEach(element => {
                var sortedStrKey = [...str].sort().join('');
                
            });    
            
        }
        var sortString  = function(str){
            return [...str].sort();

        }

module.exports={
    GroupAnagrams2
}
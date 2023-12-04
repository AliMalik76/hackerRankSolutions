//problem link: https://www.hackerrank.com/challenges/sparse-arrays/problem?isFullScreen=true


   //---------------O(n^2) solution-----------------
    let occurences = []
    for(let i=0; i<queries.length; i++){
        occurences[i] = 0
        for (let j = 0; j<stringList.length;j++){
            if(queries[i] === stringList[j]){
                occurences[i]++
            }
        }
    }
    return occurences
    //-----------------------------------------------
    
    //---------------O(n) solution-----------------
    let occurences = {}
    let results = []
    stringList.forEach((el)=>{
        if(occurences[el]){
            occurences[el]++
        }else{
            occurences[el] = 1
        }
    })
    
    queries.forEach((el)=>{
        if(occurences[el]){
            results.push(occurences[el])
        }else{
            results.push(0)
        }
    })
    return results
    //---------------------------------------------

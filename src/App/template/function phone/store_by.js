module.exports = function(array,array_chenge_Store,new_array,Store){
    for(let i = 0; i < array.length; i++){
 
        for(let j = 0; j < array.length; j++){
            if(array[i].Store ==array_chenge_Store[j]){
                new_array.push(array[i])           
            }
        }
    } 
      return new_array
}
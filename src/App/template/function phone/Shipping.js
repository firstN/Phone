module.exports = function(new_array,Sort_by_time_of_adding,){
    const date = [];
    for(let i = 0; i < new_array.length; i++){
      if(  new_array[i].Shipping ==Sort_by_time_of_adding){
        date.push( new_array[i])
      }
    }
    return date
}
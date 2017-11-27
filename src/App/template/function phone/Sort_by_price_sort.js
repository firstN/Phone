module.exports =  function(Sort_by_price,counter,highest){
    
    for(let i = 0; i < Sort_by_price.length-1; i++){

        if(+Sort_by_price[i].Price > +Sort_by_price[i+1].Price ){
            let date = Sort_by_price[i];
            Sort_by_price[i] = Sort_by_price[i+1];
            Sort_by_price[i+1] = date;
            
            counter++
        }
        if(i == Sort_by_price.length-2){
        if(counter!==0){
            i = -1;
            counter = 0;
        }
    }
    }
    if(this.state.Sort_by_price === highest){
        Sort_by_price.reverse()
    }
    return Sort_by_price
}
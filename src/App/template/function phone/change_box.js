module.exports = function(e_id,checked,id,other_id,date_cheked){
    e_id===id? document.getElementById(other_id).checked = false:document.getElementById(id).checked = false;
    checked !== false?date_cheked = e_id:date_cheked = '';
    return date_cheked
}  
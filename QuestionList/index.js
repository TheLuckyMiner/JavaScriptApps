function displayHint(clicked_id){
    let id = clicked_id.slice(-1);
    let hint_id = '#hint' + id;
    let arrow_id = '#arrow' +  id;
    document.querySelector(arrow_id).classList.toggle('hint__show-arrow');
    document.querySelector(hint_id).classList.toggle('hint__show');

}
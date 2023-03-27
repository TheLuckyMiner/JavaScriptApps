function displayHint(clicked_id){
    let hint_id = '#' + 'hint' + clicked_id.slice(-1);
    document.querySelector(hint_id).classList.toggle('hint__show');
}
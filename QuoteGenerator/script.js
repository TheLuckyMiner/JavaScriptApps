function generate(){
    var quotes = {
        "― Jules Renard": '"The truly free man is the one who can turn down an invitation to dinner without giving an excuse."',
        "― Candace Bushnell": '“Maybe some women arent meant to be tamed. Maybe they just need to run free until they find someone just as wild to run with them."',
        "― Pierce Brown": '“Man cannot be freed by the same injustice that enslaved it.”',
        "― Deepak Chopra": '“Work is always about emotions. Good work is about free emotions; bad work is about blocked emotions.”',
        "― Jenny Valentine": '"Even when youd lost everything you thought there was to lose, somebody came along and gave you something for free."'
    }

    var authors = Object.keys(quotes);
    var author = authors[Math.floor(Math.random() * authors.length)];

    var quote = quotes[author];

    document.getElementById("quote").innerHTML = quote;
    document.getElementById("author").innerHTML = author;


}
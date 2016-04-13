function E() {
    elem = document.forms["avlAndFareForm"];
    elem["quota"].value = 'CK';
    availFareEnq($('#cllink-12607-2S-1'), '12607', 'Thu Apr 14 00:00:00 IST 2016', '2S', 'MAS', 'BNC', true);
    var intervalid = setInterval(function() {
        if (document.getElementById("j_idt346") != null) {
            jpBook($('#12607-2S-CK-0'), '12607', 'MAS', 'BNC', '14-4-2016', '2S', 'CK', 1, false);
            clearInterval(intervalid);
        }
    }, 1000);
    //setTimeout(function() { jpBook($('#12607-2S-CK-0'), '12607', 'MAS', 'BNC', '14-4-2016', '2S', 'CK', 1, false); }, 3000);
    //jpBook($('#12607-2S-CK-0'), '12607', 'MAS', 'BNC', '14-4-2016', '2S', 'CK', 1, false);
}
E()

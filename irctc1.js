 function TickBook() {

     elem = document.forms["avlAndFareForm"];
     elem["quota"].value = 'CK';
     availFareEnq($('#cllink-12607-2S-1'), '12607', 'Thu Apr 14 00:00:00 IST 2016', '2S', 'MAS', 'BNC', true);
     setTimeout(function() { jpBook($('#12607-2S-CK-0'), '12607', 'MAS', 'BNC', '14-4-2016', '2S', 'CK', 1, false); }, 1000);

 }

 function E() {


     f0 = document.forms['jpform'];
     if (f0['jpform:fromStation']) f0['jpform:fromStation'].value = 'CHENNAI CENTRAL - MAS';
     if (f0['jpform:toStation']) f0['jpform:toStation'].value = 'BENGALURU CANT - BNC';
     if (f0['jpform:journeyDateInputDate']) f0['jpform:journeyDateInputDate'].value = '14-04-2016';
     f0['jpform:jpsubmit'].click();
     setTimeout(function() { TickBook(); }, 1000);



 }
 E()

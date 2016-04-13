function % 20E() {
    f0 = document.forms['jpform'];
    if (f0['jpform:fromStation']) f0['jpform:fromStation'].value = 'CHENNAI CENTRAL - MAS';
    if (f0['jpform:toStation']) f0['jpform:toStation'].value = 'BENGALURU CANT - BNC';
    if (f0['jpform:journeyDateInputDate']) f0['jpform:journeyDateInputDate'].value = '14-04-2016';
    f0['jpform:jpsubmit'].click();
}
E()

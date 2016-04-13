function D(a, b) { c = b.split('|');
    d = false;
    for (q = 0; q < c.length; q++) {
        if (c[q] == a) d = true; }
    return d; }

function E() { f0 = document.forms['addPassengerForm'] || document.forms['jpBook'];
    if (f0['addPassengerForm:psdetail:0:psgnName']) f0['addPassengerForm:psdetail:0:psgnName'].value = 'Abc';
    dq = document.querySelector('input[size=\'16\'][id^=\'addPassengerForm:psdetail:0:\']');
    if (dq) dq.value = 'Abc';
    if (f0['addPassengerForm:psdetail:0:psgnAge']) f0['addPassengerForm:psdetail:0:psgnAge'].value = '24';
    if (f0['addPassengerForm:psdetail:0:psgnGender']) f0['addPassengerForm:psdetail:0:psgnGender'].value = 'Male';
    if (f0['addPassengerForm:psdetail:0:berthChoice']) f0['addPassengerForm:psdetail:0:berthChoice'].value = 'LB';
    if (f0['addPassengerForm:psdetail:0:foodChoice']) f0['addPassengerForm:psdetail:0:foodChoice'].value = 'N';
    if (f0['addPassengerForm:boardingStation']) f0['addPassengerForm:boardingStation'].value = 'MAS';
    if (f0['addPassengerForm:mobileNo']) f0['addPassengerForm:mobileNo'].value = '9876543210';
    if (f0['addPassengerForm:autoUpgrade']) { f0['addPassengerForm:autoUpgrade'].checked = true;
        f0['addPassengerForm:autoUpgrade'].removeAttribute('disabled'); }
    if (f0['jpBook:payOption'])
        for (i = 0; i < f0['jpBook:payOption'].length; i++) {
            if (D(f0['jpBook:payOption'][i].value, 'CREDIT_CARD')) { f0['jpBook:payOption'][i].checked = true; } }
    if (f0['jpBook:bankPGList']) f0['jpBook:bankPGList'].value = '21'; }
E()




function E() {
    alert(window.location.href);
    f0 = document.forms['loginFormId'];
    if (f0['j_username']) f0['j_username'].value = '';
    if (f0['j_password']) f0['j_password'].value = '';
    //if (f0['j_captcha']) f0['j_captcha'].value = OCRAD(document.getElementById('cimage'));
    document.getElementById('loginbutton').click();
}
E()

// js3-account.js //

setTimeout(function () { $('.contact-row').css({ 'display': 'none' }); $('.about-row').css({ 'display': 'none' }); $('.index-row').css({ 'display': 'none' }) }, 350)

const buttonFunction3 = function () {
    location.replace('account/signup.html');
}

const buttonFunction4 = function () {
    location.replace('https://appledoes.github.io')
    firebase.auth().signOut();


};

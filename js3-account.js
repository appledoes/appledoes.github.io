// js3-account.js //

setTimeout(function () { $('.contact-row').css({ 'display': 'none' }); $('.about-row').css({ 'display': 'none' }); $('.index-row').css({ 'display': 'none' }) }, 350)


const buttonFunction5 = function () {
    firebase.auth().signOut();
}

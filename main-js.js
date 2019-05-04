
// main-js.js //
// Only to be used for pwManager //

// Uses jQuery //

var config = {
    apiKey: "AIzaSyBnrAhY_w3VVnjHc2_UeJJAt2G-FWpAjwM",
    authDomain: "pwmanager-91c7e.firebaseapp.com",
    databaseURL: "https://pwmanager-91c7e.firebaseio.com",
    projectId: "pwmanager-91c7e",
    storageBucket: "pwmanager-91c7e.appspot.com",
    messagingSenderId: "200620870742"
};
firebase.initializeApp(config);

// [[ Title ]] //
var $title = $('title').text();
console.log('Current page: ' + $title);
console.log('SNAPSHOT 2w1')

// [[ Variables ]] //
var firebase = firebase.database()

// ~ Elements ~ //
var explanation = $('.explanation');

// Topic //
var $topic = $('.accountPlace')


// Aside //
var $aside = $('#mainContent aside');

// ~ Misc. ~ //
var ls = localStorage;

// [[ Functions ]] //
const importPage = function (page) {
    var xhr1 = new XMLHttpRequest();

    xhr1.onload = function () {
        if (xhr1.status === 200) {
            document.getElementById('mn-content').innerHTML = xhr1.response;
        }

    };




    xhr1.open('GET', 'htmlBase.html', true);
    xhr1.send(null);


}





// [[ Check which title ]] //
if ($title === 'Homepage | pwManager') {
    importPage('index');
    firebase.auth().onAuthStateChanged(function (user) {
        if (user) {
            console.log('logged in as: ' + user.displayName)
            console.log('userid: ' + user.uid)
            $('.accountPlace').text('Welcome back ' + user.displayName + '!')
            $('.explanation').css({ 'display': 'none' })


        } else {
            $('.accountPlace').text('Welcome Guest!')
            if (firebase.database().ref(user.uid) == undefined) {
                console.log('test')
            }
        }
    })

} else if ($title === 'Account | pwManager') {
    importPage('account')

} else if ($title === 'About | pwManager') {
    importPage('about')
} else if ($title === 'Contact | pwManager') {
    importPage('contact');
}



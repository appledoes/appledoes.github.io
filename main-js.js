
// main-js.js //
// Only to be used for pwManager //

// Uses jQuery //


// [[ Title ]] //
var $title = $('title').text();
console.log('Current page: ' + $title);
console.log('SNAPSHOT 2w3')

// [[ Variables ]] //


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


const firebasedb = firebase.database()




// [[ Check which title ]] //
if ($title === 'Homepage | pwManager') {
    importPage('index');
    firebase.auth().onAuthStateChanged(function (user) {
        if (user) {
            const userdb = firebasedb.ref(user.uid)
            userdb.push({
                working: true
            })

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



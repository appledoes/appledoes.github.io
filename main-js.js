
// main-js.js //
// Only to be used for pwManager //

// Uses jQuery //


// [[ Title ]] //
var $title = $('title').text();
console.log('Current page: ' + $title);
console.log('SNAPSHOT 2')

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


var user = firebase.auth().currentUser;
var name, email, uid;

function writeUserData(userId, name, email, memberType) {
    firebase.database().ref('users/' + userId).set({
        username: name,
        email: email,
    });
}

if (user != null) {
    name = user.displayName;
    email = user.email;
    uid = user.uid;  // The user's ID, unique to the Firebase project. Do NOT use
    // this value to authenticate with your backend server, if
    // you have one. Use User.getToken() instead.

    writeUserData(name, email, uid)
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



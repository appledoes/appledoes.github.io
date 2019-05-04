// main-js.js //
// Only to be used for pwManager //

// Uses jQuery //

// Initialize Firebase
//var config = {
//    apiKey: "AIzaSyBnrAhY_w3VVnjHc2_UeJJAt2G-FWpAjwM",
//    authDomain: "pwmanager-91c7e.firebaseapp.com",
//    databaseURL: "https://pwmanager-91c7e.firebaseio.com",
//    projectId: "pwmanager-91c7e",
//    storageBucket: "pwmanager-91c7e.appspot.com",
//    messagingSenderId: "200620870742"
//};
//firebase.initializeApp(config);

//var database = firebase.database();

// [[ Title ]] //
var $title = $('title').text();
console.log('Current page: ' + $title);
console.log('SNAPSHOT 1w5')

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
const importPage = function (page)
{
    var xhr1 = new XMLHttpRequest();

    xhr1.onload = function ()
    {
        if (xhr1.status === 200)
        {
            document.getElementById('mn-content').innerHTML = xhr1.response;
            if (page === 'index') {
                // Login
                if (ls.login == 'Guest' || undefined) {
                    explanation.addClass('visible');
                    $topic.text('Welcome ' + ls.login + '!');
                } else {
                    explanation.addClass('hidden');
                    $topic.text('Welcome back ' + ls.login + '!');
                };
            };
        }
        
    };



   
    xhr1.open('GET', 'htmlBase.html', true);
    xhr1.send(null);


}

// [[ Check which title ]] //
if ($title === 'Homepage | pwManager')
{
    importPage('index');


    // Explanation and Topic
    if (ls.login == undefined) {
        console.error('No user login could be found, signed in as guest');

        localStorage.setItem('login', 'Guest');
    } else if (ls.login == 'Guest') {
        console.log('Signed in as Guest');
    } else {
        console.log('Signed in as ' + ls.login);

    };


} else if ($title === 'Contact | pwManager')
{
    importPage('contact');
}
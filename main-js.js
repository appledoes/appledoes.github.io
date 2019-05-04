// main-js.js //
// Only to be used for pwManager //

// Uses jQuery //


// [[ Title ]] //
var $title = $('title').text();
console.log('Current page: ' + $title);
console.log('SNAPSHOT 1w7')

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
        }
        
    };



   
    xhr1.open('GET', 'htmlBase.html', true);
    xhr1.send(null);


}



// [[ Check which title ]] //
if ($title === 'Homepage | pwManager')
{
    importPage('index');
    firebase.auth().onAuthStateChanged(function (user) {
        if (user) {
            console.log('logged in as: ' + user.displayName)
            $('.accountPlace').text('Welcome ' + user.displayName)
        }
    })
} else if ($title === 'About | pwManager')
{
    importPage('about')
} else if ($title === 'Contact | pwManager')
{
    importPage('contact');
}
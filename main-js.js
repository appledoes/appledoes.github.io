// main-js.js //
// Only to be used for pwManager //

// Uses jQuery //

// [[ Title ]] //
var $title = $('title').text();
console.log('Current page: ' + $title);

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
    var xhr2 = new XMLHttpRequest();

    xhr1.onload = function ()
    {
        //if (xhr1.status === 200)
        //{
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
        //}
        
    };

    xhr2.onload = function ()
    {
        //if (xhr2.status === 200)
        //{
            responseObject = JSON.parse(xhr2.response);

            var $exp_h3 = $('.explanation h3');
            var $exp_h4 = $('.explanation h4');

            var $a1_h3 = $('.a1-header');
            var $a1_p1 = $('.a1-p1');
            var $a1_p2 = $('.a1-p2');
            var $a1_p3 = $('.a1-p3');
            var $a1_p4 = $('.a1-p4');
            var $a1_p5 = $('.a1-p5');

            var $ns1_h3 = $('.ns1-header');
            var $ns1_p1 = $('.ns1-p1');
            var $ns1_p2 = $('.ns1-p2');
            var $ns1_p3 = $('.ns1-p3');

            $exp_h3.text(responseObject.topic[0].t_exp);
            $exp_h4.text(responseObject.topic[1].b_exp);

            $a1_h3.text(responseObject.articles[0].header);
            $a1_p1.text(responseObject.articles[0].p1);
            $a1_p2.text(responseObject.articles[0].p2);
            $a1_p3.text(responseObject.articles[0].p3);
            $a1_p4.text(responseObject.articles[0].p4);

            $ns1_h3.text(responseObject.news[0].header);
            $ns1_p1.text(responseObject.news[0].p1);
            $ns1_p2.text(responseObject.news[0].p2)
        //}
        
    };

    xhr1.open('GET', 'htmlBase.html', true);
    xhr1.send(null);

    xhr2.open('GET', 'json/json1-index.json', true);
    xhr2.send(null);
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


};
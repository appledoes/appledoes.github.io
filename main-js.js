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

    xhr1.open('GET', 'htmlBase.html', true);
    xhr1.send(null);

    xhr2.onload = function ()
    {
        //if (xhr2.status === 200)
        //{
            responseObject = JSON.parse(xhr2.response);

            var $exp_h3 = $('.explanation h3');
            var $exp_h4 = $('.explanation h4');


        
            var $a1_ul = $('.a1_ul');
            var $a1_h3 = $('.a1-header');

            function ar(article, type, number)
            {
                this.article = article;
                this.type = type;
                this.number = number;
                this.makeli = function ()
                {
                    var makeNew = this.article + '_' + this.type + this.number;
                    var newliItem = $('<li><p class="'+ makeNew +'"></p>')
                    
                    return $('a1_ul:last').after(newliItem);
                }
            }


            //for (i = 1; i < 5; i++) {
            //    var makeNewli = new ar('a1', 'p', i)
            //    var makeNewli1 = makeNewli.makeli
            // }
            

            

            $exp_h3.text(responseObject.topic[0].t_exp);
            $exp_h4.text(responseObject.topic[1].b_exp);
        //}
        
    };
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
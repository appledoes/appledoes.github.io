// main-js.js //
// Only to be used for pwManager //

// Uses jQuery //

// [[ Title ]] //
var $title = $('title').text();
console.log('Current page: ' + $title);
console.log('SNAPSHOT 4')

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
            var $a4_h3 = $('.a4-header');

            var $ns1_h3 = $('.ns1-header')

            function ar(article, type, number, articleList, display)
            {
                this.article = article;
                this.type = type;
                this.number = number;
                this.articleList = articleList
                this.display = display
                this.makeli = function ()
                {
                    var makeNew = this.article + '_' + this.type + this.number;
                    var newliItem = '<li class="' + this.display + '"><' + this.type + ' class="' + makeNew + '"></' + this.type + '></li>'

                    $(this.articleList).append(newliItem);
                    console.log(newliItem)


                }
            }

            for (i = 1; i < 5; i++)
            {
                var makeNewli = new ar('a1', 'p', i, '.a1-ul', 'block');

                makeNewli.makeli();
            }

            for (i = 1; i < 3; i++)
            {
                var makeNewli = new ar('a4', 'p', i, '.a4-ul', 'block');

                makeNewli.makeli();
            }

            for (i = 1; i < 3; i++)
            {
                var makeNewli = new ar('ns1', 'p', i, '.ns1-ul', 'inline')

                makeNewli.makeli();
            }

            $('.a1_p1').text(responseObject.articles[0].p1);
            $('.a1_p2').text(responseObject.articles[0].p2);
            $('.a1_p3').text(responseObject.articles[0].p3);
            $('.a1_p4').text(responseObject.articles[0].p4);

            $('.a4_p1').text(responseObject.articles[1].p1);
            $('.a4_p2').text(responseObject.articles[1].p2);

            $('.ns1_p1').text(responseObject.news[0].p1);
            $('.ns1_p2').text(responseObject.news[0].p2);

            $exp_h3.text(responseObject.topic[0].t_exp);
            $exp_h4.text(responseObject.topic[1].b_exp);

            $a1_h3.text(responseObject.articles[0].header);
            $a4_h3.text(responseObject.articles[1].header);
            $ns1_h3.text(responseObject.news[0].header);
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
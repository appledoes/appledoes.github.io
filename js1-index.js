// js1-index.js //

(function () {
    setTimeout(function () { $('.contact-row').css({ 'display': 'none' }); $('.about-row').css({ 'display': 'none' }); $('.account-row').css({ 'display': 'none' }) }, 350)

    var xhr2 = new XMLHttpRequest();

    xhr2.onload = function () {
        if (xhr2.status === 200) {
            responseObject = JSON.parse(xhr2.response);

            var $exp_h3 = $('.explanation h3');
            var $exp_h4 = $('.explanation h4');



            var $a1_h3 = $('.a1-header');
            var $a2_h3 = $('.a2-header');
            var $a3_h3 = $('.a3-header');
            var $a4_h3 = $('.a4-header');
            var $a5_h3 = $('.a5-header');
            var $a6_h3 = $('.a6-header');
            var $a7_h3 = $('.a7-header');
            var $a8_h3 = $('.a8-header');

            var $ns1_h3 = $('.ns1-header');
            var $ns2_h3 = $('.ns2-header');

            function ar(article, type, number, articleList, display, href) {
                this.article = article;
                this.type = type;
                this.number = number;
                this.articleList = articleList
                this.display = display
                this.href = href
                this.makeli = function () {
                    var makeNew = this.article + '_' + this.type + this.number;
                    var newliItem = '<li class="' + this.display + '"><' + this.type + ' class="' + makeNew + '" href="' + this.href + '"></' + this.type + '></li>';

                    $(this.articleList).append(newliItem);
                    console.log(newliItem);


                };
            };

            for (i = 1; i < 5; i++) {
                var makeNewli = new ar('a1', 'p', i, '.a1-ul', 'block', undefined);

                makeNewli.makeli()
            };

            for (i = 1; i < 5; i++) {
                var makeNewli = new ar('a2', 'p', i, '.a2-ul', 'block', undefined);

                makeNewli.makeli();
            };

            for (i = 1; i < 5; i++) {
                var makeNewli = new ar('a3', 'p', i, '.a3-ul', 'block', undefined);

                makeNewli.makeli();
            };

	    for (i = 1; i < 4; i++) {
                var makeNewli = new ar('ns1', 'p', i, '.ns1-ul', 'inline', undefined);

                makeNewli.makeli();
            };

            for (i = 1; i < 3; i++) {
                var makeNewli = new ar('ns2', 'p', i, '.ns2-ul', 'inline', undefined);

                makeNewli.makeli();
            };

            for (i = 1; i < 2; i++) {
                var makeNewli = new ar('ns2', 'a', i, '.ns2-ul', 'inline', 'https://coolestprojects.org');

                makeNewli.makeli();
            };


            $a1_h3.text(responseObject.articles[0].header);
            $a2_h3.text(responseObject.articles[1].header);
            $a3_h3.text(responseObject.articles[2].header);

            if (responseObject.articles[0].header == null) {
                console.log('working ([0] li)');
                $a1_h3.text('Sorry');
                $('.a1-ul').replaceWith('<p>Sorry, This article has not been written yet</p><br /> <p>😢</p>');
                $('.article-1').css({
                    'text-align': 'center'
                });
            };

            if (responseObject.articles[1].header == null) {
                console.log('working ([1] li)');
                $a2_h3.text('Sorry');
                $('.a2-ul').replaceWith('<p>Sorry, This article has not been written yet</p><br /> <p>😢</p>')
                $('.article-2').css({
                    'text-align': 'center'
                });
            };

            if (responseObject.articles[2].header == null) {
                console.log('working ([2] li)');
                $a3_h3.text('Sorry');
                $('.a3-ul').replaceWith('<p>Sorry, This article has not been written yet</p><br /> <p>😢</p>')
                $('.article-3').css({
                    'text-align': 'center'
                });
            };

            if (responseObject.articles[3].header == null) {
                console.log('working ([3] li)');
                $a4_h3.text('Sorry');
                $('.a4-ul').replaceWith('<p>Sorry, This article has not been written yet</p><br /> <p>😢</p>')
                $('.article-4').css({
                    'text-align': 'center'
                });
            };

            $('.a1_p1').text(responseObject.articles[0].p1);
            $('.a1_p2').text(responseObject.articles[0].p2);
            $('.a1_p3').text(responseObject.articles[0].p3);
            $('.a1_p4').text(responseObject.articles[0].p4);

            $('.a2_p1').text(responseObject.articles[1].p1);
            $('.a2_p2').text(responseObject.articles[1].p2);
            $('.a2_p3').text(responseObject.articles[1].p3);
            $('.a2_p4').text(responseObject.articles[1].p4);


            $('.a3_p1').text(responseObject.articles[2].p1);
            $('.a3_p2').text(responseObject.articles[2].p2);
            $('.a3_p3').text(responseObject.articles[2].p3);
            $('.a3_p4').text(responseObject.articles[2].p4);

            $('.ns1_p1').text(responseObject.news[0].p1);
            $('.ns1_p2').text(responseObject.news[0].p2);
	    $('.ns1_a1').text(responseObject.news[0].p3);

            $('.ns2_p1').text(responseObject.news[1].p1);
            $('.ns2_p2').text(responseObject.news[1].p2);
            $('.ns2_a1').text(responseObject.news[1].a1);

            $exp_h3.text(responseObject.topic[0].t_exp);
            $exp_h4.text(responseObject.topic[1].b_exp);

            $('.whr1_header').text(responseObject.whr[0].header);
            $('.whr1_desc').text(responseObject.whr[0].desc);
            $('.whr2_header').text(responseObject.whr[1].header);
            $('.whr2_desc').text(responseObject.whr[1].desc);
            $('.whr3_header').text(responseObject.whr[2].header);
            $('.whr3_desc').text(responseObject.whr[2].desc);
            $('.whr4_header').text(responseObject.whr[3].header);
            $('.whr4_desc').text(responseObject.whr[3].desc);
            $('.whr5_header').text(responseObject.whr[4].header);
            $('.whr5_desc').text(responseObject.whr[4].desc);
            $('.why_row_5 a').attr('href', responseObject.whr[4].ahref);
            $('.why_row_5 a').text(responseObject.whr[4].a);

            $ns1_h3.text(responseObject.news[0].header);
            $ns2_h3.text(responseObject.news[1].header);
        }

    };

    xhr2.open('GET', 'json/json1-index.json', true);
    xhr2.send(null);


})()


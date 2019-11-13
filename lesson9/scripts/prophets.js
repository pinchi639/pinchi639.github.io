const requestURL = 'https://byui-cit230.github.io/lesson/lesson9/data/latter-day-prophets.json';



fetch(requestURL)
    .then(response => {
        response.json()
            .then(
                response => {
                    const prophets = response.prophets;

                    prophets.forEach(
                        (prophet) => {
                            let article = document.createElement('article');
                            let h2 = document.createElement('h2');

                            h2.textContent = prophets.name + ' ' + prophets.lastname;

                            article.appendChild(h2);

                            document.querySelector('section.prophets').appendChild(article);
                        })
                });
    });
const requestURL = 'https://byui-cit230.github.io/lessons/lesson-09/data/latter-day-prophets.json';

fetch(requestURL)
    .then(response => {
        response.json()
            .then(
                response => {
                    const prophets = response.prophets;
                    console.table(prophets);

                    prophets.forEach(
                        (prophet) => {
                            let article = document.createElement('article');
                            let h2 = document.createElement('h2');
                            h2.textContent = prophet.name + ' ' + prophet.lastname;
                            article.appendChild(h2);
                            // Add date of birth
                            let birthdateDiv = document.createElement('div');
                            let birthdateLabel = document.createElement('label');
                            birthdateLabel.textContent = 'Date of Birth: ';
                            let birthdateSpan = document.createElement('span');
                            birthdateSpan.textContent = prophet.birthdate;
                            birthdateDiv.appendChild(birthdateLabel);
                            birthdateDiv.appendChild(birthdateSpan);
                            article.appendChild(birthdateDiv);
                            // Add place of birth
                            let birthplaceDiv = document.createElement('div');
                            let birthplaceLabel = document.createElement('label');
                            birthplaceLabel.textContent = 'Place of Birth: ';
                            let birthplaceSpan = document.createElement('span');
                            birthplaceSpan.textContent = prophet.birthplace;
                            birthplaceDiv.appendChild(birthplaceLabel);
                            birthplaceDiv.appendChild(birthplaceSpan);
                            article.appendChild(birthplaceDiv);
                            // Add Image
                            let imageDiv = document.createElement('div');
                            let image = document.createElement('img');
                            image.setAttribute('src', prophet.imageurl);
                            image.setAttribute('alt', prophet.name + " " + prophet.lastname + '-' + prophet.order);
                            imageDiv.appendChild(image);
                            article.appendChild(imageDiv);
                            // Add article to the DOM
                            document.querySelector('section.prophets').appendChild(article);
                        }
                    )
                }
            )
    })
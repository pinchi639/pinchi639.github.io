const requestURL = 'https://byui-cit230.github.io/lesson/lesson9/data/latter-day-prophets.json';



fetch(requestURL)
.then(response => {
    response.json()
    .then(
        response => {
            console.table(response.prophets[0]);

            let prophet = response.prophets[0];
            
            console.log(prophet.name);
        });
});
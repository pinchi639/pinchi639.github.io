const requestURL = 'https://api.myjson.com/bins/nd9rc';
fetch(requestURL)
    .then(function (response) {
        return response.json();
    })
    .then(function (jsonObject) {
        const temples = jsonObject['temples'];
        //console.table(jsonObject); //temporary testing
        for (let i = 0; i < temples.length; i++) {
            let templecard = document.createElement('section');
            let h2 = document.createElement('h2');
            let templename = document.createElement('p');
            let templeaddress = document.createElement('p');
            let phone = document.createElement('p');
            let email = document.createElement('p');
            let services = document.createElement('p');
            let history = document.createElement('p');
            let bapschedule = document.createElement('p');
            let inischedule = document.createElement('p');
            let sealschedule = document.createElement('p');
            let closure = document.createElement('p');
            let image = document.createElement('img');
            let jsfile = document.createElement('span');
            h2.textContent = temples[i].templename;
            templeaddress.textContent = temples[i].templeaddress;
            phone.textContent = temples[i].phone;
            email.textContent = temples[i].email;
            services.textContent = 'Services available: ' + temples[i].services;
            history.textContent = 'History: ' + temples[i].history;
            bapschedule.textContent = 'Baptism schedule: ' + temples[i].bapschedule;
            inischedule.textContent = 'Initiatory schedule: ' + temples[i].inischedule;
            sealschedule.textContent = 'Sealings schedule: ' + temples[i].sealschedule;
            closure.textContent = 'Closure schedule: ' + temples[i].closure;
            image.textContent = temples[i].templename + ' ' + temples[i].imageurl;
            span.textContent = temples[i].jsfile;
            image.setAttribute('src', temples[i].imageurl);
            image.setAttribute('alt', temples[i].templename);
            span.setAttribute('src', temples[i].jsfile);
            templecard.appendChild(h2);
            templecard.appendChild(templename);
            templecard.appendChild(image);
            templecard.appendChild(templeaddress);
            templecard.appendChild(phone);
            templecard.appendChild(email);
            templecard.appendChild(services);
            templecard.appendChild(history);
            templecard.appendChild(bapschedule);
            templecard.appendChild(inischedule);
            templecard.appendChild(sealschedule);
            templecard.appendChild(closure);
            templecard.appendChild(jsfile);
            document.querySelector('div.templecards').appendChild(templecard);
        }
    });

/*
        h2.textContent = prophets[i].name + ' ' + prophets[i].lastname;
        birthdate.textContent = 'Date of Birth: ' + prophets[i].birthdate;
        birthplace.textContent =  'Place of Birth: ' + prophets[i].birthplace;
        image.textContent = prophets[i].name + ' ' + prophets[i].imageurl;
        image.setAttribute('src', prophets[i].imageurl);
        image.setAttribute('alt', prophets[i].name + ' ' + prophets[i].lastname + ' - ' + prophets[i].order);
        card.appendChild(h2);
        card.appendChild(birthdate);
        card.appendChild(birthplace);
        card.appendChild(image);
        document.querySelector('div.cards').appendChild(card);
    }
});
*/

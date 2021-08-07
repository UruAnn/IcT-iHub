{
    fetch ('https://randomuser'.me/api/?results=10)
    .then((resp) => resp.json())
    .then(function (data) {
        let users = data.results;
        return users.map((user)) => {
            const li = document.createElement('li');
            const img = document.createElement('img');
            const p = document.createElement('p');

            uiii.appendChild(li)
            let paragraph = li.appendChild (p)
        }
        
    }
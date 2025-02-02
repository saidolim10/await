let cards = document.querySelector('.cards');


let malumot = async () => {
    try {
        let dataUser = await fetch('https://randomuser.me/api/');
        let data = await dataUser.json();
        
        if (data.results && Array.isArray(data.results)) {
            data.results.forEach(element => {
                let card = document.createElement('div');
                card.style.width = '400px';
                card.style.height = 'auto';
                card.style.backgroundColor = 'orange';
                card.style.margin = '10px';
                card.style.borderRadius = '10px';
                card.style.padding = '20px';
                card.style.boxSizing = 'border-box';
                card.style.textAlign = 'center';

                
                let img = document.createElement('img');
                img.src = element.picture.large;
                img.alt = 'User Image';
                img.style.width = '150px';
                img.style.height = '150px';
                img.style.borderRadius = '50%';
                img.style.marginBottom = '15px';
                img.style.objectFit = 'cover'; 

                
                let name = document.createElement('h3');
                name.textContent = `${element.name.first} ${element.name.last}`;
                name.style.marginBottom = '10px';

                
                let address = document.createElement('p');
                address.textContent = `${element.location.street.name}, ${element.location.city}, ${element.location.country}`;
                address.style.marginBottom = '10px';

               
                let phone = document.createElement('p');
                phone.textContent = `Phone: ${element.phone}`;

                let btn = document.createElement('button')
                btn.textContent = 'Смена Пользователи'
                btn.style.width = '150px'
                btn.style.height = '50px'
                btn.style.border = 'none'
                btn.style.borderRadius = '15px'
                btn.style.fontWeight = 'bold'

                
                card.appendChild(img);
                card.appendChild(name);
                card.appendChild(address);
                card.appendChild(phone);
                card.appendChild(btn);

              
                cards.appendChild(card);

                btn.addEventListener('click', async () => {
                   
                    let newUser = await fetch('https://randomuser.me/api/');
                    let newData = await newUser.json();

                    if (newData.results && Array.isArray(newData.results)) {
                        let newElement = newData.results[0];

                        img.src = newElement.picture.large;
                        name.textContent = `${newElement.name.first} ${newElement.name.last}`;
                        address.textContent = `${newElement.location.street.name}, ${newElement.location.city}, ${newElement.location.country}`;
                        phone.textContent = `Phone: ${newElement.phone}`;
                    }
                });
            });
        } else {
            console.log('No users found');
        }
    } catch (e) {
        console.error(e);
        console.log('An error occurred while fetching data');
    } finally {
        console.log('Data processing completed');
    }
};


malumot();

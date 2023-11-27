document.addEventListener('DOMContentLoaded', function () {
    // Definirea array-ului allergenData
    const allergenData = [
        { product: 'Delicious Pizza', allergens: 'oua, lapte, seminte de susan, cereale care contin gluten (grau, secara, orz, ovaz sau hibride)' },
        { product: 'Delicious Burger', allergens: 'Cereale care contin gluten (grau, secara, orz, ovaz, grau spelt, grau mare sau hibrizi ai acestora) si produse derivate, Oua si produse derivate, Soia si produse derivate, Lapte si produse derivate (inclusiv lactoza), Mustar si produse derivate'},
        { product: 'Healthy Pasta', allergens: 'oua, lapte si produse derivate, gluten, peste' },
        { product: 'Cartofi Prajiti', allergens: 'Lapte si produse derivate (inclusiv lactoza)' },
        { product: 'Texas Special Burger', allergens: 'Cereale care contin gluten (grau, secara, orz, ovaz, grau spelt, grau mare sau hibrizi ai acestora) si produse derivate, Oua si produse derivate, Soia si produse derivate, Lapte si produse derivate (inclusiv lactoza), Mustar si produse derivate' },
        { product: 'DAMN! Burger', allergens: 'Cereale care contin gluten (grau, secara, orz, ovaz, grau spelt, grau mare sau hibrizi ai acestora) si produse derivate, Oua si produse derivate, Soia si produse derivate, Lapte si produse derivate (inclusiv lactoza), Mustar si produse derivate' },
        { product: 'Tasty Burger', allergens: 'Cereale care contin gluten (grau, secara, orz, ovaz, grau spelt, grau mare sau hibrizi ai acestora) si produse derivate, Oua si produse derivate, Soia si produse derivate, Lapte si produse derivate (inclusiv lactoza), Mustar si produse derivate' },
        { product: 'The Italian`s pasta', allergens: 'oua, lapte si produse derivate, gluten' },
        { product: 'Tasty Thursdays', allergens: 'Cereale care contin gluten (grau, secara, orz, ovaz, grau spelt, grau mare sau hibrizi ai acestora) si produse derivate, Oua si produse derivate, Soia si produse derivate, Lapte si produse derivate (inclusiv lactoza), Mustar si produse derivate' },
        { product: 'Yummy Pizza', allergens: 'oua, lapte, seminte de susan, cereale care contin gluten (grau, secara, orz, ovaz sau hibride)' },
        { product: 'Burger Delight', allergens: 'Cereale care contin gluten (grau, secara, orz, ovaz, grau spelt, grau mare sau hibrizi ai acestora) si produse derivate, Oua si produse derivate, Soia si produse derivate, Lapte si produse derivate (inclusiv lactoza), Mustar si produse derivate' },
        { product: 'Sunday Special', allergens: 'Cereale care contin gluten (grau, secara, orz, ovaz, grau spelt, grau mare sau hibrizi ai acestora) si produse derivate, Oua si produse derivate, Soia si produse derivate, Lapte si produse derivate (inclusiv lactoza), Mustar si produse derivate' },
        { product: 'Midweek Madness', allergens: 'Cereale care contin gluten (grau, secara, orz, ovaz, grau spelt, grau mare sau hibrizi ai acestora) si produse derivate, Oua si produse derivate, Soia si produse derivate, Lapte si produse derivate (inclusiv lactoza), Mustar si produse derivate' },
        { product: 'Spooky Season', allergens: 'Cereale care contin gluten (grau, secara, orz, ovaz, grau spelt, grau mare sau hibrizi ai acestora) si produse derivate, Oua si produse derivate, Soia si produse derivate, Lapte si produse derivate (inclusiv lactoza), Mustar si produse derivate' },
        { product: 'Real Burger', allergens: 'Cereale care contin gluten (grau, secara, orz, ovaz, grau spelt, grau mare sau hibrizi ai acestora) si produse derivate, Oua si produse derivate, Soia si produse derivate, Lapte si produse derivate (inclusiv lactoza), Mustar si produse derivate' },
        { product: 'Mexican Flavours', allergens: 'Cereale care contin gluten (grau, secara, orz, ovaz, grau spelt, grau mare sau hibrizi ai acestora) si produse derivate, Oua si produse derivate, Soia si produse derivate, Lapte si produse derivate (inclusiv lactoza), Mustar si produse derivate' },

    ];

    const helpButton = document.getElementById('helpButton');
    const allergenTable = document.getElementById('allergenTable');

    if (!helpButton || !allergenTable) {
        console.error('Elemente lipsă. Asigură-te că ai butonul și div-ul cu id-urile corecte.');
    } else {
        console.log('Eveniment de click atașat corect.');

        helpButton.addEventListener('click', function () {
            allergenTable.style.display = (allergenTable.style.display === 'none') ? 'block' : 'none';

            const tbody = allergenTable.querySelector('tbody');
            tbody.innerHTML = '';

            allergenData.forEach(function (item) {
                const row = document.createElement('tr');
                const productNameCell = document.createElement('td');
                productNameCell.textContent = item.product;
                const allergensCell = document.createElement('td');
                allergensCell.textContent = item.allergens;

                row.appendChild(productNameCell);
                row.appendChild(allergensCell);
                tbody.appendChild(row);
            });
        });
    }
});
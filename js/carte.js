const _sushi_ = document.getElementById('_sushi_');
const _juice_ = document.getElementById('_juice_');
const _salad_ = document.getElementById('_salad_');

const add1 = document.getElementById('add_1');
const add2 = document.getElementById('add_2');
const add3 = document.getElementById('add_3');
const add4 = document.getElementById('add_4');
const add5 = document.getElementById('add_5');
const add6 = document.getElementById('add_6');

const _sold_ = document.getElementById('_sold_');
const _total_price_ = document.getElementById('_total_price_');
const _total_plats_sold_ = document.getElementById('_total_plats_sold_');

let total_price = 0;
let number_plats_sold = 0;

const to_change = [
    [document.getElementById('plat_image1') , document.getElementById('plat_title1') , document.getElementById('plat_price1')],
    [document.getElementById('plat_image2') , document.getElementById('plat_title2') , document.getElementById('plat_price2')],
    [document.getElementById('plat_image3') , document.getElementById('plat_title3') , document.getElementById('plat_price3')],
    [document.getElementById('plat_image4') , document.getElementById('plat_title4') , document.getElementById('plat_price4')],
    [document.getElementById('plat_image5') , document.getElementById('plat_title5') , document.getElementById('plat_price5')],
    [document.getElementById('plat_image6') , document.getElementById('plat_title6') , document.getElementById('plat_price6')]
];

const sushis = [
    ['images/plat-sushi1.jpg' , 'Sushi 1' , '20.00'],
    ['images/plat-sushi2.jpg' , 'Sushi 2' , '18.50'],
    ['images/plat-sushi3.jpg' , 'Sushi 3' , '33.00'],
    ['images/plat-sushi4.jpg' , 'Sushi 4' , '15.00'],
    ['images/plat-sushi5.jpg' , 'Sushi 5' , '36.00'],
    ['images/plat-sushi6.jpg' , 'Sushi 6' , '28.75'],
];

const juices = [
    ['images/plat-juice1.jpg' , 'Juice 1' , '17.34'],
    ['images/plat-juice2.jpg' , 'Juice 2' , '17.60'],
    ['images/plat-juice3.jpg' , 'Juice 3' , '19.50'],
    ['images/plat-juice4.jpg' , 'Juice 4' , '23.00'],
    ['images/plat-juice5.jpg' , 'Juice 5' , '30.14'],
    ['images/plat-juice6.jpg' , 'Juice 6' , '26.75'],
];

const salads = [
    ['images/plat-salad1.jpg' , 'Salad 1' , '33.00'],
    ['images/plat-salad2.jpg' , 'Salad 1' , '43.40'],
    ['images/plat-salad3.jpg' , 'Salad 1' , '32.00'],
    ['images/plat-salad4.jpg' , 'Salad 1' , '16.90'],
    ['images/plat-salad5.jpg' , 'Salad 1' , '45.00'],
    ['images/plat-salad6.jpg' , 'Salad 1' , '55.50']
];

_sushi_.addEventListener('click' , function(){

    _sushi_.classList.add('active');
    _juice_.classList.remove('active');
    _salad_.classList.remove('active');

    to_change[0][0].src = sushis[0][0];
    to_change[0][1].innerText = sushis[0][1]
    to_change[0][2].innerText = sushis[0][2];

    to_change[1][0].src = sushis[1][0];
    to_change[1][1].innerText = sushis[1][1];
    to_change[1][2].innerText = sushis[1][2];

    to_change[2][0].src = sushis[2][0];
    to_change[2][1].innerText = sushis[2][1];
    to_change[2][2].innerText = sushis[2][2];

    to_change[3][0].src = sushis[3][0];
    to_change[3][1].innerText = sushis[3][1];
    to_change[3][2].innerText = sushis[3][2];

    to_change[4][0].src = sushis[4][0];
    to_change[4][1].innerText = sushis[4][1];
    to_change[4][2].innerText = sushis[4][2];

    to_change[5][0].src = sushis[5][0];
    to_change[5][1].innerText = sushis[5][1];
    to_change[5][2].innerText = sushis[5][2];
});

_juice_.addEventListener('click' , function(){
    
    _juice_.classList.add('active');
    _sushi_.classList.remove('active');
    _salad_.classList.remove('active');

    to_change[0][0].src = juices[0][0];
    to_change[0][1].innerText = juices[0][1];
    to_change[0][2].innerText = juices[0][2];

    to_change[1][0].src = juices[1][0];
    to_change[1][1].innerText = juices[1][1];
    to_change[1][2].innerText = juices[1][2];

    to_change[2][0].src = juices[2][0];
    to_change[2][1].innerText = juices[2][1];
    to_change[2][2].innerText = juices[2][2];

    to_change[3][0].src = juices[3][0];
    to_change[3][1].innerText = juices[3][1];
    to_change[3][2].innerText = juices[3][2];

    to_change[4][0].src = juices[4][0];
    to_change[4][1].innerText = juices[4][1];
    to_change[4][2].innerText = juices[4][2];

    to_change[5][0].src = juices[5][0];
    to_change[5][1].innerText = juices[5][1];
    to_change[5][2].innerText = juices[5][2];

});

_salad_.addEventListener('click' , function(){
    
    _salad_.classList.add('active');
    _sushi_.classList.remove('active');
    _juice_.classList.remove('active');

    to_change[0][0].src = salads[0][0];
    to_change[0][1].innerText = salads[0][1];
    to_change[0][2].innerText = salads[0][2];

    to_change[1][0].src = salads[1][0];
    to_change[1][1].innerText = salads[1][1];
    to_change[1][2].innerText = salads[1][2];

    to_change[2][0].src = salads[2][0];
    to_change[2][1].innerText = salads[2][1];
    to_change[2][2].innerText = salads[2][2];

    to_change[3][0].src = salads[3][0];
    to_change[3][1].innerText = salads[3][1];
    to_change[3][2].innerText = salads[3][2];

    to_change[4][0].src = salads[4][0];
    to_change[4][1].innerText = salads[4][1];
    to_change[4][2].innerText = salads[4][2];

    to_change[5][0].src = salads[5][0];
    to_change[5][1].innerText = salads[5][1];
    to_change[5][2].innerText = salads[5][2];

});


add1.addEventListener('click' , function(){
    const p1 = document.createElement('p');
    _sold_.append(p1);
    p1.innerText = to_change[0][1].innerText;

    const p2 = document.createElement('p');
    _sold_.append(p2);
    p2.innerText = to_change[0][2].innerText;
    p2.classList.add('plat-price-sold');

    total_price += parseFloat(p2.innerText);
    number_plats_sold++;

    _total_price_.innerText = 'Total : ' + total_price.toFixed(2) + ' DH';
    _total_plats_sold_.innerHTML = 'Sold : ' + number_plats_sold;
});

add2.addEventListener('click' , function(){
    const p1 = document.createElement('p');
    _sold_.append(p1);
    p1.innerText = to_change[1][1].innerText;

    const p2 = document.createElement('p');
    _sold_.append(p2);
    p2.innerText = to_change[1][2].innerText;
    p2.classList.add('plat-price-sold');

    total_price += parseFloat(p2.innerText);
    number_plats_sold++;

    _total_price_.innerText = 'Total : ' + total_price.toFixed(2) + ' DH';
    _total_plats_sold_.innerHTML = 'Sold : ' + number_plats_sold;
});


add3.addEventListener('click' , function(){
    const p1 = document.createElement('p');
    _sold_.append(p1);
    p1.innerText = to_change[2][1].innerText;

    const p2 = document.createElement('p');
    _sold_.append(p2);
    p2.innerText = to_change[2][2].innerText;
    p2.classList.add('plat-price-sold');

    total_price += parseFloat(p2.innerText);
    number_plats_sold++;

    _total_price_.innerText = 'Total : ' + total_price.toFixed(2) + ' DH';
    _total_plats_sold_.innerHTML = 'Sold : ' + number_plats_sold;
});

add4.addEventListener('click' , function(){
    const p1 = document.createElement('p');
    _sold_.append(p1);
    p1.innerText = to_change[3][1].innerText;

    const p2 = document.createElement('p');
    _sold_.append(p2);
    p2.innerText = to_change[3][2].innerText;
    p2.classList.add('plat-price-sold');

    total_price += parseFloat(p2.innerText);
    number_plats_sold++;

    _total_price_.innerText = 'Total : ' + total_price.toFixed(2) + ' DH';
    _total_plats_sold_.innerHTML = 'Sold : ' + number_plats_sold;
});

add5.addEventListener('click' , function(){
    const p1 = document.createElement('p');
    _sold_.append(p1);
    p1.innerText = to_change[4][1].innerText;

    const p2 = document.createElement('p');
    _sold_.append(p2);
    p2.innerText = to_change[4][2].innerText;
    p2.classList.add('plat-price-sold');

    total_price += parseFloat(p2.innerText);
    number_plats_sold++;

    _total_price_.innerText = 'Total : ' + total_price.toFixed(2) + ' DH';
    _total_plats_sold_.innerHTML = 'Sold : ' + number_plats_sold;
});


add6.addEventListener('click' , function(){
    const p1 = document.createElement('p');
    _sold_.append(p1);
    p1.innerText = to_change[5][1].innerText;

    const p2 = document.createElement('p');
    _sold_.append(p2);
    p2.innerText = to_change[5][2].innerText;
    p2.classList.add('plat-price-sold');

    total_price += parseFloat(p2.innerText);
    number_plats_sold++;

    _total_price_.innerText = 'Total : ' + total_price.toFixed(2) + ' DH';
    _total_plats_sold_.innerHTML = 'Sold : ' + number_plats_sold;
});



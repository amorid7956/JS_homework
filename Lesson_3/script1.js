// №1
for (var i = 0; i <= 100; i++) 
{
	count = 0;
	for (var j = 0; j <= i/2; j++) 
	{
		if (i % j === 0) 
		{
			count+=1;
		}
	}
	if (count > 1 || i===0 || i === 1) // т.к 0 и 1 не являются простыми числами
	{
		continue;
	}
	console.log(i);
}

// №2,№3
var basketOfGoods = [
	["Кофта" , 5 , 4000],
	["Брюки" , 4 , 2500],
	["Кроссовки" , 6 , 3300],
	["Шапка" , 10 , 1000]
];


var countBasketPrice = function(arr)
{
var totalPrice = 0;
arr.forEach( function (item) 
		{
			totalPrice+= item[1] * item[2];
		}
	)
return totalPrice;
}
console.log(countBasketPrice(basketOfGoods)); // Вывод 59800(посчитано верно)

// №4
for (var i = 0; i <= 9; console.log(i++)) 
{}

// №5
for (var i = 0, ch = '' ; i < 20; i++) 
{	
	ch += 'x';
	console.log(ch);
}



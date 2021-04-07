// // //№1
// var firstTask = function(num)
// {
// 	if ((num < 0) || (num > 999)) 
// 	{
// 		return {};
// 	}
// 	else
// 	{ 
// 		return {
// 			'units' :  (num % 10 === 0) ? 0 : (num % 10),
// 			'dozens' : (((num % 100) / 10) === 0) ? 0 : Math.floor(((num % 100) / 10)),
// 			'hundreds' : (((num % 1000) / 100) === 0) ? 0 : Math.floor(((num % 1000) / 100)),
// 		};
// 	}
// }

// number = +prompt("Введите число от 0 до 999");
// var resObj = firstTask(number);
// if (Object.keys(resObj).length === 0) 
// 	{
// 		console.log("Число вышло за пределы допустимых значений(возвращён пустой объект.)");
// 	}
// else
// {
// 	console.log("Единицы: " + resObj.units + "\nДесятки: " + resObj.dozens+ "\nСотни: " + resObj.hundreds);

// }


// //№2
// var basketOfGoods = [
// 	["Кофта" , 5 , 4000],
// 	["Брюки" , 4 , 2500],
// 	["Кроссовки" , 6 , 3300],
// 	["Шапка" , 10 , 1000]
// ];

// basket = //объект корзины
// {
// 	goods: [],
// 	totalPrice: 0,
// 	getBasketGood(title, amount, price) // Преобразовываем из элемента массива в объект
// 	{
// 		return {
// 			title : title,
// 			amount : amount,
// 			price : price,
// 		};
// 	},

// 	fillObjArray(fromArr) // заполняем массив объектами
// 	{
// 		for (var i = 0; i < fromArr.length; i+=1) 
// 		{
// 			this.goods.push(this.getBasketGood(fromArr[i][0],fromArr[i][1],fromArr[i][2]));
// 		}
// 	},

// 	countBasketPrice(fromArr) // вычисляем суммарную цену корзины
// 	{
// 		this.fillObjArray(fromArr);
// 		for (var i = 0; i < this.goods.length; i+=1) 
// 				{
// 					this.totalPrice+= this.goods[i].amount * this.goods[i].price;
// 				}
// 		return this.totalPrice;
// 	},
// };
// console.log("Суммарная стоимость корзины: " + basket.countBasketPrice(basketOfGoods));

// //№3 
// // Возможный вариант реализации: создать абстрактный базовый класс "Продукт",
// // а уже от него наследовать производные классы: "Корзина" и "Каталог", с единой 
// // структурой, но разными реализациями того же метода.


// function hello()
// {
// 	alert('Hello1313123');
// }
// document.body.insertAdjacentHTML('afterend', '<div><i>Hello</i></div>');
// const btn = document.querySelector(".btn");
// btn.addEventListener('click', hello);

//№1 

let chessTable = function()
{
	tab = document.getElementById('chess');
	let letters = "ABCDEFGH";
	for (let i = 8; i >= 0; i-=1) 
	{
		tr = document.createElement('tr');
		tab.appendChild(tr);
			for (let j = 1; j <= 9; j+=1) 
			{	
				let td = document.createElement('td');
				tr.appendChild(td);
				if (i === 0)
				 {
				 	continue;
				 }
				 if (j === 1) 
				 {
				 	td.innerText = i;
				 	td.style.fontSize = "22px";
				 	td.style.fontWeight = "bold";
				 	td.style.textAlign = "center";
				 	continue;
				 }
				if (i % 2 === 0)
				{
					if (j % 2 === 1) 
					{
						td.classList.add('black');
					}
				}
				else if (i % 2 === 1)
				{
					if (j % 2 === 0) 
					{
						td.classList.add('black');
					}
				}
			}
		//tr.insertAdjacentHTML('beforebegin', `<td>${i}</td>`);
	}
	lastTr = document.querySelector('tr:last-child');
	lastTr.style.textAlign = "center";
	lastTr.style.fontSize = "22px";
	lastTr.style.fontWeight = "bold";
	for (let j = 1; j <= 8; j+=1) 
	{
		lastTr.cells[j].innerText = letters[j-1];
	}
}
chessTable();

//№2
var basketOfGoods = [
	["Кофта" , 5 , 4000],
	["Брюки" , 4 , 2500],
	["Кроссовки" , 6 , 3300],
	["Шапка" , 10 , 1000]
];

basket = //объект корзины
{
	goods: [],
	totalPrice: 0,
	getBasketGood(title, amount, price) // Преобразовываем из элемента массива в объект
	{
		return {
			title : title,
			amount : amount,
			price : price,
		};
	},

	fillObjArray(fromArr) // заполняем массив объектами
	{
		for (var i = 0; i < fromArr.length; i+=1) 
		{
			this.goods.push(this.getBasketGood(fromArr[i][0],fromArr[i][1],fromArr[i][2]));
		}
	},

	countBasketPrice(fromArr) // вычисляем суммарную цену корзины
	{
		this.fillObjArray(fromArr);
		for (var i = 0; i < this.goods.length; i+=1) 
				{
					this.totalPrice+= this.goods[i].amount * this.goods[i].price;
				}
		return [this.goods.length, this.totalPrice];
	},

	outputBasket()
	{
		let mainDiv = document.querySelector("#outputbasket");
		mainDiv.style.textAlign = "center";
		let ol = document.createElement("ol");
		for (var i = 0; i < this.goods.length; i+=1) 
		{
			let li = document.createElement("li");
			let content = "";
			for (key in this.goods[i]) 
				{
					content += key + " : " + this.goods[i][key] + ", ";
				}
			li.innerText = content;
			ol.appendChild(li);
		}
		mainDiv.appendChild(ol);
	},
};

let myBasket = document.querySelector(".basket");
resultArr = basket.countBasketPrice(basketOfGoods);
if (resultArr[0] !== 0)
{
	myBasket.innerText = `В корзине: ${resultArr[0]} товара(ов) на сумму ${resultArr[1]} рублей.`; 
}
else
{
	myBasket.innerText = "Корзина пуста";
}
myBasket.style.fontSize = "22px";
myBasket.style.fontWeight = "bold";

//№3
basket.outputBasket();

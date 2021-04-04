// //№1
var firstTask = function(num)
{
	if ((num < 0) || (num > 999)) 
	{
		return {};
	}
	else
	{ 
		return {
			'units' :  (num % 10 === 0) ? 0 : (num % 10),
			'dozens' : (((num % 100) / 10) === 0) ? 0 : Math.floor(((num % 100) / 10)),
			'hundreds' : (((num % 1000) / 100) === 0) ? 0 : Math.floor(((num % 1000) / 100)),
		};
	}
}

number = +prompt("Введите число от 0 до 999");
var resObj = firstTask(number);
if (Object.keys(resObj).length === 0) 
	{
		console.log("Число вышло за пределы допустимых значений(возвращён пустой объект.)");
	}
else
{
	console.log("Единицы: " + resObj.units + "\nДесятки: " + resObj.dozens+ "\nСотни: " + resObj.hundreds);

}


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
		return this.totalPrice;
	},
};
console.log("Суммарная стоимость корзины: " + basket.countBasketPrice(basketOfGoods));

//№3 
// Возможный вариант реализации: создать абстрактный базовый класс "Продукт",
// а уже от него наследовать производные классы: "Корзина" и "Каталог", с единой 
// структурой, но разными реализациями того же метода.
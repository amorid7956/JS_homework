//№1
// var a = 1, b = 1, c, d;
// c = ++a; alert(c);           // 2 (Т.к сначала a увеличилось на 1, а потом c присвоилось 2)
// d = b++; alert(d);           // 1 (Т.к сначала d было присвоено значение b(1), затем b увеличилось на 1)
// c = (2+ ++a); alert(c);      // 5 (Т.к a сначало инкрементировалось на 1(a=3 стало), затем 2+а=5)
// d = (2+ b++); alert(d);      // 4 (Т.к постфиксный инкремент выполнился после операции сложения, и в конце выполнилась операция присваивания)
// alert(a);                    // 3 (Тут без комментариев, т.к a было равно 1, и было всего 2 инкремента)
// alert(b);                    // 3 (То же самое, не важно постфикс или префикс был. Инкрементировалось всего 2 раза)

//№2
var a = 2;
var x = 1 + (a *= 2);
console.log("Task two: " + x); // x будет равен 5

//№3 
var taskThree = function(a=2, b=1)  //Выполнил через функциональное выражение
{
	if (a > 0 && b > 0) 
		{	
			console.log("Разность положительных чисел: " + (a-b));
		}
	else if (a < 0 && b < 0) 
		{
			console.log("Произведение отрицательных чисел: " + (a*b));
		}
	else if ((a < 0 && b >= 0) || (a >= 0 && b < 0))
		{
			console.log("Сумма чисел разных знаков: " + (a+b));
		}
	else 
		{
			console.log("Такого варианта нет");	
		}
}
console.log("Task Three");
taskThree();
taskThree(-3, -13);
taskThree(4, 3);
taskThree(-5, 0);
taskThree(0, 0);

//№4 
var taskFour = function(a=0)
{
	switch(a)
		{
			case 0: console.log(0);	
			case 1: console.log(1);	
			case 2: console.log(2);	
			case 3: console.log(3);	
			case 4: console.log(4);	
			case 5: console.log(5);	
			case 6: console.log(6);	
			case 7: console.log(7);	
			case 8: console.log(8);	
			case 9: console.log(9);	
			case 10: console.log(10);	
			case 11: console.log(11);	
			case 12: console.log(12);	
			case 13: console.log(13);	
			case 14: console.log(14);
			case 15: console.log(15);
			break;
			default: console.log("Такого варианта нет");
		}
}
console.log("Task Four");
taskFour();
taskFour(6);
taskFour(-16);

//№5
var Addition = function(a=1, b=1)  
{
   return (a+b);
}
var Subtraction = function(a=1, b=1) 
{
   return (a-b);
}
var Multiplication = function(a=1, b=1) 
{
   return (a*b);
}
var Division = function(a=1, b=1) 
{
	if (b === 0) 
		{
			return null;
		}
	else
		{
			 return (a/b);
		}
}
console.log("Task Five");
console.log("Сложение: " + Addition(-4,5));
console.log("Вычитание: " + Subtraction(6,3));
console.log("Умножение: " + Multiplication(7,-2));
if (Division(5,0) === null) 
	{
		console.log("На 0 делить нельзя.");
	}

var mathOperation = function(arg1, arg2, operation)
{
	switch(operation)
		{
			case "+": 
				return Addition(arg1, arg2);
			case "-": 
				return Subtraction(arg1, arg2);
			case "*": 
				return Multiplication(arg1, arg2);
			case "/": 
				result = Division(arg1, arg2);
				if (result === null) 
					{
						return "На 0 делить нельзя.";
					}
				else
					{
						return result;
					}
			default:
				"Неприемлемая операция";

		}
}
console.log("Task Six");
console.log(mathOperation(5,0,"/"));
console.log(mathOperation(5,2,"/"));

console.log("Task Seven");
console.log("Тип  null: " + typeof null);
console.log("Тип  0: " + typeof 0);
console.log("Нестрогое сравнение (0 == null): " + (0 == null));
console.log("Строгое сравнение (0 === null): " + (0 === null));
console.log("Нестрогое сравнение (0 != null): " + (0 != null));
console.log("Строгое сравнение (0 !== null): " + (0 !== null));
if (null) 
	{
		"NULL";  // Не выведет
	}
if (0) 
	{
		"0";     // Тоже не выведет
	}
// Операторы сравнения указывают на то что при строгом и нестрогом сравнении
// null и 0, что они не равны друг другу, т.к являются значениями разных типов,
// однако при использовании в условных выражениях и null, и 0 интерпретируются как false.

var power = function(val, pow)
{
	if (pow === 1)
		{
			return val;
		}
	else
		{
			return val * power(val, pow-1);
		}
}
console.log("Task Eight");
console.log(power(5,3));
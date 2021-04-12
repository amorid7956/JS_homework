'use strict';
const catalog = 
{
	items : [["Кофта", 1400], ["Брюки",1900],["Кроссовки", 2500],["Шапка",900 ]],

	generateCatalog()
	{	
		let content  = document.querySelector(".catalog__wrapper");
		let result = ``;
		for (let i = 0; i < this.items.length; i++) 
		{
			result += `<div class="catalog__item">
						  <div class="catalog__item__description">
							<p class="product__name">${this.items[i][0]}</p>
							<p>Цена: ${this.items[i][1]}</p>
						  </div>
						  <div class="catalog__item__btn">
						  	<button class="buy-btn">Купить</button>
						  </div>
					   </div>`;
		}
		content.insertAdjacentHTML("beforebegin", `<div class="catalog__header">Каталог</div>`);
		content.insertAdjacentHTML("afterend", `<div class="basket__header">Корзина</div>`);
		content.innerHTML = result;
	},

};

const basket = 
{
	catalog: catalog,
	goods: [],
	totalPrice: 0,
	init()
	{
		this.catalog.generateCatalog();
		this.addListenersOnButtons();
	},

	addListenersOnButtons()
	{
		let products = document.querySelectorAll(".buy-btn");
		for (let i = 0; i < products.length; i++) 
		{
			products[i].addEventListener('click', event => 
			{
				this.purchaseProduct(event);
			});
		}
		let header  = document.querySelector(".basket__header");
		if (this.goods.length === 0) 
		{
			header.insertAdjacentHTML("afterend", `<div class="basket__content">Корзина пуста</div>`);
		}

	},
	purchaseProduct(event)
	{
		let productName = event.toElement.parentElement.parentElement.querySelector(".product__name").innerText;
		console.log(productName);
		for (let i = 0; i < this.catalog.items.length; i++) 
		{
			if (productName == this.catalog.items[i][0]) 
			{
				this.goods.push({title: this.catalog.items[i][0], price: this.catalog.items[i][1]});
				this.totalPrice += this.catalog.items[i][1];
				let content = `В корзине: ${this.goods.length} товара(ов) на сумму ${this.totalPrice} рублей.`;
				let divContent  = document.querySelector(".basket__content");
				divContent.innerText = content;
				break;
			}
			else 
			{
				continue;
			}
		}
	},

};

basket.init();
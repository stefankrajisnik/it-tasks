class Meal{
    constructor(name,price,ingredients){
        this.name=name;
        this.price=price;
        this.ingredients=ingredients;
    }
    getPriceUsd(){
        return this.price / 1.75 
    }
}

function renderMeals(meals){
    var wrapper = document.createElement("div");
    wrapper.classList.add("wrapper")

    meals.forEach( function(meal) {
        var p1 = document.createElement("p")
        var p2 = document.createElement("p")
        var p3 = document.createElement("p")

        p1.innerText = meal.name;
        p2.innerText = meal.price + "km" + " " + "or you can pay" + " "+ meal.getPriceUsd() + "USD";
        p3.innerText = meal.ingredients;

        wrapper.appendChild(p1)
        wrapper.appendChild(p2)
        wrapper.appendChild(p3)
        
    });

    document.body.appendChild(wrapper)
}

var pizza = new Meal('pizza',10,["flour","mushrooms","cheese","ham"])
var burger = new Meal('burger',15,["meat","bread","cheese","onion","salat","fries"])
var salat = new Meal('salat',12,["greens","bacon","egg","cottage-cheese","tomato"])

var mealsArray= [pizza,burger,salat]
renderMeals(mealsArray)
const ingredients = ["eggs", "milk", "flour", "sugar", "baking soda", "baking powder", "chocolate chips", "bananas"];
let i = 0;
while (i<ingredients.length)
{
  
  console.log(ingredients[i]);
  i++
}

for (let ingredient of ingredients)
{
  console.log(ingredient)
}

for (i=7; i >=0 ; i--)
{
  console.log(ingredients[i])
}

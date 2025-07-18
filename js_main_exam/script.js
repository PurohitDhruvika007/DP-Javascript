const recipes=[
  {
    id: 1,
    title: "Vegetable Stir Fry",
    ingredients: [
      "Broccoli",
      "Carrot",
      "Bell pepper",
      "Soy sauce",
      "Ginger",
      "Garlic",
      "Tofu"
    ],
    instructions: "1. Stir-fry vegetables with garlic and ginger. 2. Add tofu and soy sauce. 3. Cook until vegetables are tender.",
    cooking_time: "15 minutes",
    difficulty: "Easy",
    tags: ["Vegan", "Asian", "Healthy", "Vegetarian"],
    image: "https://natashaskitchen.com/wp-content/uploads/2020/08/Vegetable-Stir-Fry-SQ.jpg",
    cuisine_type: "Asian"
  },
  {
    id: 2,
    title: "Caesar Salad",
    ingredients: [
      "Romaine lettuce",
      "Caesar dressing",
      "Croutons",
      "Parmesan cheese",
      "Grilled tofu"
    ],
    instructions: "1. Toss lettuce with Caesar dressing. 2. Add croutons and grilled tofu on top.",
    cooking_time: "10 minutes",
    difficulty: "Easy",
    tags: ["Salad", "Healthy", "Quick", "Vegetarian"],
    image: "https://www.maggi.co.uk/sites/default/files/srh_recipes/3ee1954a36009dd59be2d362a2a44cf6.jpg",
    cuisine_type: "American"
  },
  {
    id: 3,
    title: "Margherita Pizza",
    ingredients: [
      "Pizza dough",
      "Tomato sauce",
      "Mozzarella cheese",
      "Fresh basil",
      "Olive oil"
    ],
    instructions: "1. Roll out pizza dough. 2. Spread tomato sauce and top with mozzarella. 3. Bake and add basil after cooking.",
    cooking_time: "30 minutes",
    difficulty: "Medium",
    tags: ["Italian", "Vegetarian", "Cheese", "Pizza"],
    image: "https://safrescobaldistatic.blob.core.windows.net/media/2022/11/PIZZA-MARGHERITA.jpg",
    cuisine_type: "Italian"
  },
  {
    id: 4,
    title: "Eggplant Parmesan",
    ingredients: [
      "Eggplant",
      "Marinara sauce",
      "Mozzarella cheese",
      "Parmesan cheese",
      "Breadcrumbs",
      "Eggs"
    ],
    instructions: "1. Bread eggplant slices and fry. 2. Layer with marinara, mozzarella, and parmesan. 3. Bake until golden.",
    cooking_time: "45 minutes",
    difficulty: "Medium",
    tags: ["Vegetarian", "Italian", "Comfort food"],
    image: "https://www.allrecipes.com/thmb/L9wpL6T8bgfo7C09-Euoa-OSN0A=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/25321-eggplant-parmesan-ii-DDMFS-4x3-6d53ce79765b4c3d9f554d2a47e14d00.jpg",
    cuisine_type: "Italian"
  },
  {
    id: 5,
    title: "Lentil Soup",
    ingredients: [
      "Lentils",
      "Carrot",
      "Celery",
      "Onion",
      "Garlic",
      "Tomatoes",
      "Vegetable broth"
    ],
    instructions: "1. Saute onions, garlic, carrot, and celery. 2. Add lentils, tomatoes, and broth. 3. Simmer until lentils are soft.",
    cooking_time: "1 hour",
    difficulty: "Medium",
    tags: ["Vegan", "Soup", "Healthy", "Vegetarian"],
    image: "https://www.allrecipes.com/thmb/UeFtapHyGFBo4Lx-72GxgjrOGnk=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/13978-lentil-soup-DDMFS-4x3-edfa47fc6b234e6b8add24d44c036d43.jpg",
    cuisine_type: "Middle Eastern"
  },
  {
    id: 6,
    title: "Chickpea Curry",
    ingredients: [
      "Chickpeas",
      "Onion",
      "Tomatoes",
      "Garlic",
      "Ginger",
      "Coconut milk",
      "Spices"
    ],
    instructions: "1. Saute onions, garlic, and ginger. 2. Add tomatoes and spices. 3. Add chickpeas and coconut milk, simmer until thickened.",
    cooking_time: "35 minutes",
    difficulty: "Medium",
    tags: ["Indian", "Vegan", "Gluten-Free", "Vegetarian"],
    image: "https://www.indianhealthyrecipes.com/wp-content/uploads/2022/06/chickpea-curry-recipe.jpg",
    cuisine_type: "Indian"
  },
  {
    id: 7,
    title: "Caprese Salad",
    ingredients: [
      "Tomatoes",
      "Fresh mozzarella",
      "Basil leaves",
      "Olive oil",
      "Balsamic glaze"
    ],
    instructions: "1. Slice tomatoes and mozzarella. 2. Layer with basil. 3. Drizzle olive oil and balsamic glaze.",
    cooking_time: "10 minutes",
    difficulty: "Easy",
    tags: ["Italian", "Salad", "Quick", "Vegetarian"],
    image: "https://whatsgabycooking.com/wp-content/uploads/2023/06/Dinner-Party-__-Traditional-Caprese-1-1200x800-1.jpg",
    cuisine_type: "Italian"
  },
  {
    id: 8,
    title: "Paneer Tikka",
    ingredients: [
      "Paneer",
      "Yogurt",
      "Bell peppers",
      "Onions",
      "Spices",
      "Lemon juice"
    ],
    instructions: "1. Marinate paneer and veggies in spiced yogurt. 2. Skewer and grill or bake until charred.",
    cooking_time: "25 minutes",
    difficulty: "Medium",
    tags: ["Indian", "Grilled", "Protein-rich", "Vegetarian"],
    image: "https://carveyourcraving.com/wp-content/uploads/2021/10/paneer-tikka-skewers.jpg",
    cuisine_type: "Indian"
  },
  {
    id: 9,
    title: "Stuffed Bell Peppers",
    ingredients: [
      "Bell peppers",
      "Rice",
      "Black beans",
      "Corn",
      "Tomato sauce",
      "Cheese"
    ],
    instructions: "1. Mix rice, beans, corn, and sauce. 2. Stuff into peppers. 3. Top with cheese and bake until tender.",
    cooking_time: "40 minutes",
    difficulty: "Medium",
    tags: ["Baked", "Healthy", "Mexican-style", "Vegetarian"],
    image: "https://tyberrymuch.com/wp-content/uploads/2020/09/vegan-stuffed-peppers-recipe-735x735.jpg",
    cuisine_type: "Mexican"
  },
  {
    id: 10,
    title: "Spinach and Ricotta Lasagna",
    ingredients: [
      "Lasagna noodles",
      "Ricotta cheese",
      "Spinach",
      "Marinara sauce",
      "Mozzarella cheese",
      "Parmesan cheese"
    ],
    instructions: "1. Layer noodles with ricotta-spinach mix and marinara. 2. Top with mozzarella and parmesan. 3. Bake until golden and bubbly.",
    cooking_time: "1 hour",
    difficulty: "Hard",
    tags: ["Italian", "Baked", "Comfort food", "Vegetarian"],
    image: "https://www.cucinabyelena.com/wp-content/uploads/2020/10/0Z4A4291-e1653513322847.jpg",
    cuisine_type: "Italian"
  }
];


 const input=document.getElementById("input");
 const add=document.getElementById("add");
 const output=document.getElementById("output");

 const recipe_list=[];

function show()
 {
    output.innerHTML="";
     recipe_list.map((receipe,index)=>{
         img=document.createElement("img");
     h3=document.createElement("h3");
    h5=document.createElement("h5");
     p=document.createElement("p");
     h4=document.createElement("h4");
     delBtn=document.createElement("btn");
     updateBtn=document.createElement("btn");
     sub_output=document.createElement("div");
     hr=document.createElement("hr");


    img.src = receipe.image;
        img.style.width = "100%";
        img.style.maxWidth = "300px";
        img.classList.add("mb-3");
     h3.textContent=receipe.title;
     h5.textContent="Ingredients:  "+receipe.ingredients;
     p.textContent="Instruction:  "+receipe.instructions;
    h4.textContent="Cuisine_type:  "+receipe.cuisine_type;
    delBtn.className="btn btn-outline-danger me-2";
    updateBtn.className="btn btn-outline-warning";
    sub_output.className="glass p-5";
    delBtn.textContent="Delete";
    updateBtn.textContent="Update";
    
    

    sub_output.appendChild(img);
    sub_output.appendChild(h3);
    sub_output.appendChild(h5);
    sub_output.appendChild(p);
    sub_output.appendChild(h4);
    sub_output.appendChild(delBtn);
    sub_output.appendChild(updateBtn);

    sub_output.appendChild(hr);

    delBtn.addEventListener("click",()=>{
      del(index);
    })

    updateBtn.addEventListener("click",()=>{
      update(index);
    })

    output.appendChild(sub_output);
    })

}

add.addEventListener("click",(e)=>{
    e.preventDefault();
 let value = input.value.trim().toLowerCase();

   const found = recipes.find((r) => r.title.toLowerCase().includes(value));
    recipe_list.push(found);
    show();
    input.value="";
});

function del(index)
{
  recipe_list.splice(index,1);
  show();
}

function update(index)
{

  input.value=recipe_list[index].title;
  recipe_list.splice(index,1);
}

show();

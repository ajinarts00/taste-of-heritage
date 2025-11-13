/* Tradish JS
 - Builds country slider
 - Loads 5 recipes per country (55 total)
 - Opens modal, shows recipe with ingredients & step-by-step
 - Provides simple cooking mode to step through instructions
*/

/* ---------- DATA: 55 RECIPES ---------- */
/* Each recipe: {
    id, country, title, image, serves, time, ingredients: [{group, items: [..]}], steps: [string,...]
} */

const tradishData = [
  // ----- MALAYSIA (5) -----
  {
    id: "malaysia_nasi_lemak",
    country: "Malaysia",
    title: "Nasi Lemak",
    image: "assets/images/tradish/malaysia/nasi_lemak.jpg",
    serves: "4",
    time: "50 min",
    ingredients: [
      {group: "Rice", items: ["2 cups jasmine rice", "200 ml coconut milk", "1 cup water", "1 pandan leaf", "1 tsp salt"]},
      {group: "Sambal", items: ["10 dried red chillies (soaked)", "4 shallots", "2 cloves garlic", "1 tbsp toasted belacan (shrimp paste)", "1 tbsp tamarind paste", "1 tbsp palm sugar", "Oil for frying"]},
      {group: "Accompaniments", items: ["4 hard-boiled eggs", "1 cucumber, sliced", "Fried anchovies (ikan bilis)", "Roasted peanuts"]}
    ],
    steps: [
      "Rinse rice until water runs clear. In a rice cooker/pot combine rice, coconut milk, water, pandan leaf and salt. Cook until tender.",
      "Blend soaked chillies, shallots, garlic and belacan into a smooth paste with a little water.",
      "Heat oil in a pan and fry the paste until fragrant and oil separates (8–10 minutes). Add tamarind paste and palm sugar. Simmer to thicken and season to taste.",
      "Fry anchovies until crisp and boil eggs as accompaniments.",
      "Plate coconut rice with sambal, egg halves, cucumber slices, anchovies and peanuts. Serve hot."
    ]
  },
  {
    id: "malaysia_laksa",
    country: "Malaysia",
    title: "Laksa (Curry Laksa)",
    image: "assets/images/tradish/malaysia/laksa.jpg",
    serves: "4",
    time: "45 min",
    ingredients: [
      {group:"Broth", items:["600 ml chicken/seafood stock","400 ml coconut milk","2 tbsp laksa paste"]},
      {group:"Noodles & topping", items:["200 g rice vermicelli","200 g prawns peeled","100 g shredded chicken","Bean sprouts","Tofu puffs","Fresh coriander","Lime wedges"]},
      {group:"Laksa paste (if making)", items:["5 dried chillies (soaked)","3 shallots","2 cloves garlic","1 stalk lemongrass","1 tbsp shrimp paste","1 tsp turmeric"]}
    ],
    steps:[
      "If making paste: blend dried chillies, shallots, garlic, lemongrass, shrimp paste and turmeric into a paste.",
      "In a pot heat a little oil and fry laksa paste until fragrant. Add stock and bring to simmer.",
      "Stir in coconut milk, add shredded chicken and prawns. Simmer until prawns are cooked.",
      "Cook rice vermicelli according to packet, drain and place in bowls.",
      "Ladle laksa broth over noodles, add bean sprouts and tofu puffs. Garnish with coriander and lime."
    ]
  },
  {
    id: "malaysia_rendang",
    country: "Malaysia",
    title: "Rendang (Beef)",
    image: "assets/images/tradish/malaysia/rendang.jpg",
    serves: "6",
    time: "2 hr",
    ingredients:[
      {group:"Meat & sauce", items:["1 kg beef (chuck), cut into chunks","400 ml coconut milk","2 stalks lemongrass (bruised)","3 kaffir lime leaves"]},
      {group:"Spice paste", items:["8 shallots","6 cloves garlic","4 red chillies","1 inch galangal","1 inch ginger","1 tsp turmeric powder","2 tbsp toasted coconut (kerisik)"]}
    ],
    steps:[
      "Blend spice paste ingredients until smooth.",
      "Heat a heavy pot, fry the spice paste with a little oil until fragrant and oil separates.",
      "Add beef pieces and sear to coat with spice paste.",
      "Pour in coconut milk, add lemongrass and lime leaves. Simmer on low for 1.5–2 hours until tender and sauce reduced.",
      "Stir in kerisik and cook until sauce clings to the meat. Serve with rice."
    ]
  },
  {
    id: "malaysia_satay",
    country: "Malaysia",
    title: "Chicken Satay with Peanut Sauce",
    image: "assets/images/tradish/malaysia/satay.jpg",
    serves: "4",
    time: "40 min",
    ingredients:[
      {group:"Skewers", items:["500 g chicken thigh, thinly sliced","2 tbsp turmeric","1 tbsp oil","Bamboo skewers soaked in water"]},
      {group:"Marinade", items:["2 tbsp soy sauce","1 tbsp brown sugar","2 cloves garlic minced","Salt and pepper"]},
      {group:"Peanut sauce", items:["1 cup roasted peanuts","1 cup coconut milk","2 tbsp kecap manis or sweet soy","1 tbsp tamarind paste","Chili to taste"]}
    ],
    steps:[
      "Marinate chicken with turmeric, oil, soy sauce, garlic, sugar, salt and pepper for at least 30 minutes.",
      "Thread chicken onto skewers and grill or pan-fry until cooked and slightly charred.",
      "For peanut sauce, blend roasted peanuts with coconut milk, sweet soy and tamarind. Simmer to thicken and season to taste.",
      "Serve satay with peanut sauce, cucumber and rice cakes (ketupat) if available."
    ]
  },
  {
    id: "malaysia_kuih_lapis",
    country: "Malaysia",
    title: "Kuih Lapis (Layer Cake)",
    image: "assets/images/tradish/malaysia/kuih_lapis.jpg",
    serves: "8",
    time: "1 hr",
    ingredients:[
      {group:"Batter", items:["300 g rice flour","200 g tapioca flour","400 g coconut milk","200 g sugar","1/4 tsp salt"]},
      {group:"Flavor & color", items:["Pandan extract or food coloring"]},
    ],
    steps:[
      "Mix flours, sugar and salt. Slowly stir in coconut milk to form a smooth batter.",
      "Divide batter and add pandan extract or color to one portion.",
      "Steam small layers: pour about 1/2 cup batter into tray, steam 5–7 minutes, alternate colored layers until tray full.",
      "Steam final assembled cake 10–12 minutes. Cool, slice into strips and serve."
    ]
  },

  // ----- INDONESIA (5) -----
  {
    id:"indonesia_rendang",
    country:"Indonesia",
    title:"Rendang (Padang-style Beef)",
    image:"assets/images/tradish/indonesia/rendang.jpg",
    serves:"6",
    time:"2 hr 30 min",
    ingredients:[
      {group:"Meat & sauce", items:["1.2 kg beef, cubed","500 ml coconut milk","2 lemongrass stalks","5 kaffir lime leaves"]},
      {group:"Spice paste", items:["10 shallots","6 cloves garlic","8 dried red chillies (soaked)","2 inch galangal","1 tsp turmeric"]}
    ],
    steps:[
      "Blend spice paste ingredients into a fine paste.",
      "Fry the paste in oil until aromatic and oil separates.",
      "Add beef and brown on all sides to coat in paste.",
      "Pour coconut milk, add lemongrass and lime leaves. Simmer on low for 2–2.5 hours until thick & dry.",
      "When gravy reduces and meat darkens, remove from heat and serve with rice."
    ]
  },
  {
    id:"indonesia_nasi_goreng",
    country:"Indonesia",
    title:"Nasi Goreng (Fried Rice)",
    image:"assets/images/tradish/indonesia/nasi_goreng.jpg",
    serves:"4",
    time:"25 min",
    ingredients:[
      {group:"Base", items:["4 cups cooked rice (cold)","2 tbsp oil","2 eggs"]},
      {group:"Flavor", items:["3 cloves garlic","2 shallots","2 tbsp kecap manis","1 tbsp sambal oelek","100 g chicken or prawns","Spring onions"]}
    ],
    steps:[
      "Heat oil, fry garlic and shallots until fragrant.",
      "Add chicken/prawns and cook through.",
      "Push to side, scramble eggs then mix with ingredients.",
      "Add cooked rice, pour in kecap manis and sambal. Stir-fry until evenly coated.",
      "Garnish with spring onions and serve with cucumber and prawn crackers."
    ]
  },
  {
    id:"indonesia_soto_ayam",
    country:"Indonesia",
    title:"Soto Ayam (Chicken Soup)",
    image:"assets/images/tradish/indonesia/soto_ayam.jpg",
    serves:"4",
    time:"50 min",
    ingredients:[
      {group:"Broth", items:["1 whole chicken or 600 g pieces","2 liters water","2 stalks lemongrass","2 kaffir lime leaves"]},
      {group:"Spice paste", items:["6 shallots","4 cloves garlic","1 tsp turmeric powder","1 inch ginger","1 tbsp oil"]},
      {group:"Serving", items:["Rice noodles or rice","Fried shallots","Lime wedges","Sliced cabbage","Kecap manis"]}
    ],
    steps:[
      "Boil chicken with lemongrass and lime leaves until cooked. Remove chicken and shred meat.",
      "Blend spice paste and fry until fragrant. Add to broth and simmer 10–15 minutes.",
      "Adjust seasoning with salt and a touch of sugar.",
      "Serve broth over rice/noodles, top with shredded chicken, cabbage, fried shallots and lime."
    ]
  },
  {
    id:"indonesia_gado_gado",
    country:"Indonesia",
    title:"Gado-Gado (Vegetable Salad with Peanut Sauce)",
    image:"assets/images/tradish/indonesia/gado_gado.jpg",
    serves:"4",
    time:"30 min",
    ingredients:[
      {group:"Veg & proteins", items:["Boiled potatoes","Blanched spinach","Bean sprouts","Tofu/fried tempeh","Hard-boiled eggs"]},
      {group:"Peanut sauce", items:["1 cup roasted peanuts","2 cloves garlic","2 bird's eye chillies","2 tbsp palm sugar","2 tbsp tamarind water","Salt to taste"]}
    ],
    steps:[
      "Boil or blanch vegetables until just cooked and arrange on a platter with tofu, eggs and tempeh.",
      "Blend peanuts with garlic, chillies and palm sugar, thin with water and simmer briefly until saucy.",
      "Pour peanut sauce over the vegetables and serve with crackers (krupuk)."
    ]
  },
  {
    id:"indonesia_tempeh_sambal",
    country:"Indonesia",
    title:"Tempeh with Sambal (Goreng Tempeh)",
    image:"assets/images/tradish/indonesia/tempeh_sambal.jpg",
    serves:"3-4",
    time:"25 min",
    ingredients:[
      {group:"Main", items:["300 g tempeh, sliced thin","Oil for frying"]},
      {group:"Sambal", items:["4 red chillies","3 shallots","2 cloves garlic","1 tbsp palm sugar","Salt to taste"]}
    ],
    steps:[
      "Fry tempeh slices until golden and crispy. Drain on paper towel.",
      "Blend chillies, shallots and garlic into paste. Fry in oil until fragrant, add sugar and salt.",
      "Toss crispy tempeh into sambal until coated. Serve hot."
    ]
  },

  // ----- SINGAPORE (5) -----
  {
    id:"singapore_chicken_rice",
    country:"Singapore",
    title:"Hainanese Chicken Rice",
    image:"assets/images/tradish/singapore/chicken_rice.jpg",
    serves:"4",
    time:"1 hr",
    ingredients:[
      {group:"Chicken & Rice", items:["1 whole chicken (about 1.2kg)","2 cups jasmine rice","3-4 slices ginger","4 cloves garlic","Chicken stock (from boiling)"]},
      {group:"Sauces", items:["Ginger paste","Chili sauce","Dark soy sauce","Cucumber for garnish"]}
    ],
    steps:[
      "Blanch the chicken briefly to clean, then simmer gently in water with ginger and spring onion until cooked. Reserve stock.",
      "Use the strained stock to cook rice with garlic and a bit of chicken fat for flavor.",
      "Prepare ginger-ginger oil and chili sauce (blend chilies, garlic and vinegar).",
      "Chop chicken, drizzle with sesame oil, serve with rice and sauces."
    ]
  },
  {
    id:"singapore_laksa",
    country:"Singapore",
    title:"Katong Laksa",
    image:"assets/images/tradish/singapore/laksa.jpg",
    serves:"4",
    time:"40 min",
    ingredients:[
      {group:"Broth", items:["500 ml fish/chicken stock","200 ml coconut milk","2 tbsp laksa paste"]},
      {group:"Serving", items:["Rice noodles","Prawns","Fish cake","Bean sprouts","Laksa leaves or coriander"]}
    ],
    steps:[
      "Fry laksa paste lightly, add stock and coconut milk and bring to simmer.",
      "Add prawns and fish cakes until cooked.",
      "Place noodles in bowls and ladle laksa broth. Garnish with laksa leaves."
    ]
  },
  {
    id:"singapore_chilli_crab",
    country:"Singapore",
    title:"Chilli Crab (Simplified)",
    image:"assets/images/tradish/singapore/chilli_crab.jpg",
    serves:"3-4",
    time:"1 hr",
    ingredients:[
      {group:"Main", items:["1.2 kg mud crab, cleaned and cut","2 tbsp oil","3 cloves garlic","1 thumb ginger"]},
      {group:"Sauce", items:["3 tbsp tomato ketchup","2 tbsp chili paste","1 tbsp sugar","1 tbsp soy sauce","1 cup chicken stock","Cornstarch slurry"]}
    ],
    steps:[
      "Stir-fry garlic and ginger, add crab pieces and cook until shells turn red.",
      "Mix ketchup, chili paste, stock and sugar. Pour into wok and simmer until sauce thickens.",
      "Add cornstarch slurry to thicken and serve with mantou (fried buns)."
    ]
  },
  {
    id:"singapore_satay_bee_hoon",
    country:"Singapore",
    title:"Satay Bee Hoon (Satay Rice Vermicelli)",
    image:"assets/images/tradish/singapore/satay_bee_hoon.jpg",
    serves:"4",
    time:"30 min",
    ingredients:[
      {group:"Base", items:["Rice vermicelli","Satay sauce (peanut)","Shredded chicken or tofu","Bean sprouts"]},
      {group:"Garnish", items:["Spring onions","Fried shallots","Lime wedges"]}
    ],
    steps:[
      "Prepare satay sauce (peanut sauce) and warm through.",
      "Cook rice vermicelli per packet, drain and mix with satay sauce and shredded protein.",
      "Top with sprouts, spring onions and a squeeze of lime."
    ]
  },
  {
    id:"singapore_kaya_toast",
    country:"Singapore",
    title:"Kaya Toast with Soft-boiled Eggs",
    image:"assets/images/tradish/singapore/kaya_toast.jpg",
    serves:"2",
    time:"10 min",
    ingredients:[
      {group:"Toast", items:["Slices of bread","Butter","Kaya (coconut jam)"]},
      {group:"Eggs", items:["2 eggs","Soy sauce and white pepper to taste"]},
    ],
    steps:[
      "Toast bread, spread kaya and butter while warm.",
      "Prepare soft-boiled eggs (about 6–7 minutes), season with soy and pepper, and serve together."
    ]
  },

  // ----- THAILAND (5) -----
  {
    id:"thailand_tom_yum",
    country:"Thailand",
    title:"Tom Yum Goong",
    image:"assets/images/tradish/thailand/tom_yum.jpg",
    serves:"4",
    time:"25 min",
    ingredients:[
      {group:"Broth", items:["6 cups water or stock","2 stalks lemongrass (bruised)","3 slices galangal","3 kaffir lime leaves"]},
      {group:"Main", items:["200 g shrimp (peeled)","150 g mushrooms","2–3 bird's eye chillies (smashed)","2 tbsp fish sauce","2 tbsp lime juice","Cilantro to garnish"]}
    ],
    steps:[
      "Bring water with lemongrass, galangal and lime leaves to boil and simmer 5–8 minutes.",
      "Add mushrooms and shrimp; cook until shrimp are pink.",
      "Season with fish sauce and lime juice. Add chillies to taste and garnish with cilantro."
    ]
  },
  {
    id:"thailand_pad_thai",
    country:"Thailand",
    title:"Pad Thai",
    image:"assets/images/tradish/thailand/pad_thai.jpg",
    serves:"3",
    time:"30 min",
    ingredients:[
      {group:"Noodles", items:["200 g rice noodles","2 eggs","100 g tofu or prawns"]},
      {group:"Sauce", items:["3 tbsp tamarind paste","1 tbsp fish sauce","2 tbsp palm sugar"]},
      {group:"Garnish", items:["Crushed peanuts","Bean sprouts","Lime wedges"]},
    ],
    steps:[
      "Soak noodles until pliable. Mix tamarind, fish sauce and sugar for sauce.",
      "Stir-fry tofu/prawns, push aside and scramble eggs, then add noodles and sauce.",
      "Toss with sprouts, serve with crushed peanuts and lime."
    ]
  },
  {
    id:"thailand_green_curry",
    country:"Thailand",
    title:"Green Curry (Gaeng Keow Wan)",
    image:"assets/images/tradish/thailand/green_curry.jpg",
    serves:"4",
    time:"40 min",
    ingredients:[
      {group:"Curry", items:["2–3 tbsp green curry paste","400 ml coconut milk","300 g chicken or tofu","Bamboo shoots","Thai basil"]},
    ],
    steps:[
      "Fry curry paste in a bit of coconut cream until fragrant.",
      "Add chicken and stir to coat. Pour in coconut milk and simmer until chicken cooked.",
      "Add bamboo shoots and basil. Season with fish sauce and sugar and serve with rice."
    ]
  },
  {
    id:"thailand_mango_sticky",
    country:"Thailand",
    title:"Mango Sticky Rice",
    image:"assets/images/tradish/thailand/mango_sticky_rice.jpg",
    serves:"3",
    time:"45 min",
    ingredients:[
      {group:"Rice", items:["1 cup glutinous rice","1 cup coconut milk","1/4 cup sugar","Pinch salt"]},
      {group:"Serve", items:["2 ripe mangoes","Sesame seeds (optional)"]},
    ],
    steps:[
      "Soak sticky rice 3–4 hours then steam until tender.",
      "Heat coconut milk with sugar and salt until sugar dissolves; mix with cooked rice to absorb.",
      "Serve rice with sliced mango and sprinkle sesame seeds."
    ]
  },
  {
    id:"thailand_som_tam",
    country:"Thailand",
    title:"Som Tam (Green Papaya Salad)",
    image:"assets/images/tradish/thailand/som_tam.jpg",
    serves:"2-3",
    time:"20 min",
    ingredients:[
      {group:"Salad", items:["2 cups shredded green papaya","2 tomatoes","2 long beans, cut","2 cloves garlic","2–3 chilies","2 tbsp fish sauce","1 tbsp lime juice","1 tbsp palm sugar","Peanuts to garnish"]},
    ],
    steps:[
      "In a mortar, pound garlic and chilies to a paste. Add palm sugar, fish sauce and lime.",
      "Add shredded papaya, tomatoes and long beans and gently pound and mix a few times.",
      "Adjust seasoning and plate with crushed peanuts on top."
    ]
  },

  // ----- VIETNAM (5) -----
  {
    id:"vietnam_pho",
    country:"Vietnam",
    title:"Phở Bò (Beef Pho)",
    image:"assets/images/tradish/vietnam/pho.jpg",
    serves:"4",
    time:"4 hr (broth)",
    ingredients:[
      {group:"Broth", items:["2 kg beef bones","1 onion charred","2-inch ginger charred","5 star anise","1 cinnamon stick","3 cloves"]},
      {group:"Serving", items:["Rice noodles (pho)","Thinly sliced raw beef","Thai basil","Bean sprouts","Lime"]},
    ],
    steps:[
      "Roast and simmer beef bones with spices for 3–4 hours to develop a clear flavorful broth.",
      "Strain and season with fish sauce and sugar to taste.",
      "Prepare noodles and thinly slice beef. Assemble bowls with noodles, add hot broth to cook beef slightly.",
      "Serve with herbs, sprouts and lime."
    ]
  },
  {
    id:"vietnam_banh_mi",
    country:"Vietnam",
    title:"Bánh Mì (Vietnamese Sandwich)",
    image:"assets/images/tradish/vietnam/banh_mi.jpg",
    serves:"4",
    time:"40 min",
    ingredients:[
      {group:"Fillings", items:["Pâté","Grilled pork or cold cuts","Pickled carrots & daikon","Cucumber","Coriander","Chili (optional)"]},
      {group:"Bread", items:["Crisp baguette or baguette rolls"]},
    ],
    steps:[
      "Prepare pickled carrots and daikon with vinegar, sugar and salt.",
      "Spread pâté inside warm baguette, add fillings, cucumber, coriander and pickles.",
      "Serve immediately."
    ]
  },
  {
    id:"vietnam_goi_cuon",
    country:"Vietnam",
    title:"Gỏi Cuốn (Fresh Spring Rolls)",
    image:"assets/images/tradish/vietnam/goi_cuon.jpg",
    serves:"4",
    time:"30 min",
    ingredients:[
      {group:"Rolls", items:["Rice paper wrappers","Cooked shrimp","Rice vermicelli","Lettuce & herbs","Mint & basil"]},
      {group:"Dipping", items:["Hoison-peanut sauce or nuoc cham (fish sauce dip)"]},
    ],
    steps:[
      "Cook vermicelli as per packet and cool. Prepare shrimp and herbs.",
      "Soften rice paper in warm water, layer lettuce, noodles, herbs and shrimp, then roll tightly.",
      "Serve with peanut sauce or nuoc cham."
    ]
  },
  {
    id:"vietnam_bun_cha",
    country:"Vietnam",
    title:"Bún Chả (Grilled Pork with Noodles)",
    image:"assets/images/tradish/vietnam/bun_cha.jpg",
    serves:"3-4",
    time:"1 hr",
    ingredients:[
      {group:"Pork & marinade", items:["500 g pork belly and shoulder","2 tbsp fish sauce","1 tbsp sugar","Garlic & pepper"]},
      {group:"Serving", items:["Rice vermicelli","Pickled carrots","Fresh herbs","Dipping sauce (nuoc cham)"]},
    ],
    steps:[
      "Marinate pork slices and patties in fish sauce, sugar, garlic and pepper then grill until caramelized.",
      "Prepare nuoc cham dipping sauce. Serve grilled pork with noodles and herbs, dip and eat."
    ]
  },
  {
    id:"vietnam_cha_ca",
    country:"Vietnam",
    title:"Chả Cá Lã Vọng (Turmeric Fish)",
    image:"assets/images/tradish/vietnam/cha_ca.jpg",
    serves:"2-3",
    time:"40 min",
    ingredients:[
      {group:"Fish", items:["Firm white fish fillet","Turmeric powder","Fish sauce","Dill and green onions","Rice vermicelli"]},
    ],
    steps:[
      "Marinate fish pieces with turmeric and fish sauce briefly and pan-fry until cooked.",
      "Sauté with dill and green onions, serve over vermicelli with peanuts and herbs."
    ]
  },

  // ----- PHILIPPINES (5) -----
  {
    id:"philippines_adobo",
    country:"Philippines",
    title:"Adobo (Chicken or Pork)",
    image:"assets/images/tradish/philippines/adobo.jpg",
    serves:"4",
    time:"45 min",
    ingredients:[
      {group:"Main", items:["1 kg chicken or pork","1/2 cup soy sauce","1/2 cup vinegar","6 cloves garlic crushed","2 bay leaves","Peppercorns"]},
    ],
    steps:[
      "Combine meat with soy, vinegar, garlic, bay leaves and peppercorns. Marinate 30 minutes if possible.",
      "Simmer the marinade with meat until tender. Reduce sauce to glaze the meat.",
      "Serve with steamed rice."
    ]
  },
  {
    id:"philippines_sinigang",
    country:"Philippines",
    title:"Sinigang (Tamarind Soup)",
    image:"assets/images/tradish/philippines/sinigang.jpg",
    serves:"4",
    time:"50 min",
    ingredients:[
      {group:"Base", items:["500 g pork or shrimp","Tamarind soup base or fresh tamarind","Tomato","Onion","Taro or radish","Greens like kangkong"]},
    ],
    steps:[
      "Boil meat with onion and tomato until tender. Add tamarind base and simmer.",
      "Add vegetables according to cooking time (hard first, leafy greens last) and simmer briefly.",
      "Adjust sourness with more tamarind or salt, serve with rice."
    ]
  },
  {
    id:"philippines_kare_kare",
    country:"Philippines",
    title:"Kare-Kare (Peanut Oxtail Stew)",
    image:"assets/images/tradish/philippines/kare_kare.jpg",
    serves:"6",
    time:"2 hr",
    ingredients:[
      {group:"Stew", items:["1 kg oxtail or beef shank","200 g peanut butter or ground peanuts","Banana blossom","Eggplant","String beans"]},
      {group:"Sauce", items:["1 cup ground roasted peanuts","Annatto for color","Fish sauce to season"]}
    ],
    steps:[
      "Simmer oxtail until tender and broth rich; reserve meat and strain broth.",
      "Roast/prepare peanut sauce and add to broth, simmer with vegetables until cooked.",
      "Season with fish sauce and serve with shrimp paste (bagoong)."
    ]
  },
  {
    id:"philippines_pancit",
    country:"Philippines",
    title:"Pancit (Stir-fried Noodles)",
    image:"assets/images/tradish/philippines/pancit.jpg",
    serves:"4",
    time:"30 min",
    ingredients:[
      {group:"Noodles", items:["200 g rice noodles or egg noodles","Vegetables (carrots, cabbage)","Chicken or shrimp","Soy sauce","Garlic and onion"]},
    ],
    steps:[
      "Sauté garlic and onion, add protein and vegetables.",
      "Add noodles and season with soy sauce and a little broth, toss until heated through.",
      "Serve with calamansi or lime."
    ]
  },
  {
    id:"philippines_halo_halo",
    country:"Philippines",
    title:"Halo-Halo (Shaved Ice Dessert)",
    image:"assets/images/tradish/philippines/halo_halo.jpg",
    serves:"4",
    time:"20 min",
    ingredients:[
      {group:"Mix-ins", items:["Sweetened beans","Jackfruit","Leche flan cubes","Ube (purple yam) halaya","Evaporated milk","Shaved ice","Nata de coco"]},
    ],
    steps:[
      "Layer sweetened beans and fruits, top with shaved ice.",
      "Pour evaporated milk and add ube/ice cream or leche flan on top to serve."
    ]
  },

  // ----- LAOS (5) -----
  {
    id:"laos_larb",
    country:"Laos",
    title:"Larb (Minced Meat Salad)",
    image:"assets/images/tradish/laos/larb.jpg",
    serves:"3-4",
    time:"30 min",
    ingredients:[
      {group:"Main", items:["400 g minced pork or chicken","2 tbsp fish sauce","2 tbsp lime juice","1 shallot sliced","2 tbsp toasted rice powder (khao khoua)","Fresh mint and cilantro","Chili flakes to taste"]},
    ],
    steps:[
      "Cook minced meat in a pan until just done, drain and cool slightly.",
      "Mix meat with fish sauce, lime juice, shallot, chili and toasted rice powder.",
      "Fold in herbs and serve with sticky rice and raw vegetables."
    ]
  },
  {
    id:"laos_khao_jee",
    country:"Laos",
    title:"Khao Jee (Laotian Grilled Sticky Rice)",
    image:"assets/images/tradish/laos/khao_jee.jpg",
    serves:"4",
    time:"45 min",
    ingredients:[
      {group:"Main", items:["Cooked sticky rice formed into patties","Egg wash (optional)","Salt, oil for grilling"]},
    ],
    steps:[
      "Form cooled sticky rice into flat patties. Optional: brush with egg wash.",
      "Grill on a hot plate with oil until crisp and golden. Serve warm with dips or savory toppings."
    ]
  },
  {
    id:"laos_tam_mak_hoong",
    country:"Laos",
    title:"Tam Mak Hoong (Papaya Salad - Lao Style)",
    image:"assets/images/tradish/laos/tam_mak_hoong.jpg",
    serves:"2-3",
    time:"20 min",
    ingredients:[
      {group:"Salad", items:["Shredded green papaya","Tomato","Long beans","Garlic & chilies","Fish sauce","Lime juice","Palm sugar","Roasted rice powder"]},
    ],
    steps:[
      "Pound garlic and chilies in mortar, add sugar, fish sauce and lime.",
      "Add papaya, tomatoes and beans and lightly pound, mix in roasted rice powder and adjust seasoning.",
      "Serve chilled with sticky rice."
    ]
  },
  {
    id:"laos_mok_pa",
    country:"Laos",
    title:"Mok Pa (Steamed Fish in Banana Leaf)",
    image:"assets/images/tradish/laos/mok_pa.jpg",
    serves:"3-4",
    time:"30 min",
    ingredients:[
      {group:"Main", items:["White fish fillets","Lemongrass","Kaffir lime leaves","Fish sauce","Coriander","Banana leaves for wrapping"]},
    ],
    steps:[
      "Mix fish with herbs and seasonings. Place mixture on banana leaf and fold to wrap.",
      "Steam parcels 10–15 minutes until fish cooked. Serve with rice."
    ]
  },
  {
    id:"laos_or_lam",
    country:"Laos",
    title:"Or Lam (Laotian Stew)",
    image:"assets/images/tradish/laos/or_lam.jpg",
    serves:"4",
    time:"1 hr",
    ingredients:[
      {group:"Stew", items:["500 g beef or buffalo, cubed","Yardlong beans","Eggplants","Galangal","Lemongrass","Sticky rice to serve"]},
    ],
    steps:[
      "Sear meat then simmer with galangal and lemongrass until tender.",
      "Add vegetables and simmer until soft. Season and serve with sticky rice."
    ]
  },

  // ----- CAMBODIA (5) -----
  {
    id:"cambodia_amok",
    country:"Cambodia",
    title:"Amok Trey (Fish Amok)",
    image:"assets/images/tradish/cambodia/amok.jpg",
    serves:"4",
    time:"45 min",
    ingredients:[
      {group:"Main", items:["White fish fillets","Coconut milk","Kroeung paste (lemongrass, galangal, turmeric)","Egg","Banana leaves (optional)"]},
    ],
    steps:[
      "Mix fish with kroeung paste and coconut milk, bind with beaten egg.",
      "Spoon into banana leaf cups or ramekins and steam 12–15 minutes until set.",
      "Serve with rice and garnish with kaffir lime leaves."
    ]
  },
  {
    id:"cambodia_kuy_teav",
    country:"Cambodia",
    title:"Kuy Teav (Rice Noodle Soup)",
    image:"assets/images/tradish/cambodia/kuy_teav.jpg",
    serves:"4",
    time:"1 hr",
    ingredients:[
      {group:"Broth", items:["Pork or beef bones","Dried shrimp (optional)","Rice noodles","Bean sprouts","Herbs"]},
    ],
    steps:[
      "Simmer bones and aromatics to create a clear broth.",
      "Cook noodles and assemble bowls with broth, meat slices, sprouts and herbs."
    ]
  },
  {
    id:"cambodia_nom_banh_chok",
    country:"Cambodia",
    title:"Nom Banh Chok (Khmer Noodles)",
    image:"assets/images/tradish/cambodia/nom_banh_chok.jpg",
    serves:"3-4",
    time:"45 min",
    ingredients:[
      {group:"Base", items:["Rice noodles","Fish-based green curry broth","Fresh herbs and vegetables (cucumber, banana blossom)"]},
    ],
    steps:[
      "Prepare a fish-based broth with turmeric and lemongrass.",
      "Serve cooked rice noodles topped with broth and fresh vegetables."
    ]
  },
  {
    id:"cambodia_bai_sach_chrouk",
    country:"Cambodia",
    title:"Bai Sach Chrouk (Grilled Pork with Rice)",
    image:"assets/images/tradish/cambodia/bai_sach_chrouk.jpg",
    serves:"2-3",
    time:"45 min",
    ingredients:[
      {group:"Main", items:["Pork slices marinated in garlic and coconut milk","Rice","Pickled vegetables"]},
    ],
    steps:[
      "Marinate pork and grill until slightly charred.",
      "Serve with rice and pickled vegetables for breakfast-style meal."
    ]
  },
  {
    id:"cambodia_lok_lak",
    country:"Cambodia",
    title:"Lok Lak (Stir-fried Beef)",
    image:"assets/images/tradish/cambodia/lok_lak.jpg",
    serves:"3-4",
    time:"30 min",
    ingredients:[
      {group:"Beef", items:["500 g beef slices","Marinade: soy sauce, oyster sauce, sugar","Lettuce, tomatoes, lime to serve"]},
    ],
    steps:[
      "Marinate beef briefly and stir-fry quickly on high heat.",
      "Serve on bed of lettuce and tomato with lime dipping sauce."
    ]
  },

  // ----- MYANMAR (5) -----
  {
    id:"myanmar_mohinga",
    country:"Myanmar",
    title:"Mohinga (Rice Noodle & Fish Soup)",
    image:"assets/images/tradish/myanmar/mohinga.jpg",
    serves:"4",
    time:"1 hr",
    ingredients:[
      {group:"Broth", items:["Fish heads or fillets","Lemongrass","Turmeric","Rice flour for thickening","Onion and garlic"]},
      {group:"Serve", items:["Rice noodles","Fried fritters (optional)","Coriander and lime"]}
    ],
    steps:[
      "Simmer fish with aromatics to create a flavorful broth, strain.",
      "Thicken with toasted rice powder or rice flour, season with fish sauce.",
      "Serve over rice noodles with toppings and lime."
    ]
  },
  {
    id:"myanmar_tea_leaf",
    country:"Myanmar",
    title:"Laphet Thoke (Tea Leaf Salad)",
    image:"assets/images/tradish/myanmar/tea_leaf_salad.jpg",
    serves:"4",
    time:"30 min",
    ingredients:[
      {group:"Base", items:["Fermented tea leaves (laphet)","Tomatoes","Cabbage","Peanuts","Sesame seeds","Fried garlic"]},
    ],
    steps:[
      "Mix tea leaves with shredded vegetables and toss with fried garlic, peanuts and sesame.",
      "Adjust with fish sauce and lime, serve as a salad or side dish."
    ]
  },
  {
    id:"myanmar_shan_noodles",
    country:"Myanmar",
    title:"Shan Noodles",
    image:"assets/images/tradish/myanmar/shan_noodles.jpg",
    serves:"3-4",
    time:"40 min",
    ingredients:[
      {group:"Main", items:["Rice noodles","Ground pork or chicken","Tomato","Garlic oil","Pickled mustard greens"]},
    ],
    steps:[
      "Cook ground meat with garlic oil and tomato, season slightly sweet and sour.",
      "Toss with noodles and top with pickled mustard greens and fried garlic."
    ]
  },
  {
    id:"myanmar_coconut_noodles",
    country:"Myanmar",
    title:"Coconut Noodles (Ohn No Khao Swè)",
    image:"assets/images/tradish/myanmar/coconut_noodles.jpg",
    serves:"3-4",
    time:"45 min",
    ingredients:[
      {group:"Broth", items:["Chicken stock","Coconut milk","Turmeric","Shallots","Chili oil"]},
      {group:"Serve", items:["Egg noodles","Shredded chicken","Lime and cilantro"]}
    ],
    steps:[
      "Simmer stock with coconut milk and spices, gently add shredded chicken.",
      "Serve over noodles with fried shallots and a splash of lime."
    ]
  },
  {
    id:"myanmar_biryani_yangon",
    country:"Myanmar",
    title:"Biryani (Yangon-style)",
    image:"assets/images/tradish/myanmar/biryani_yangon.jpg",
    serves:"4",
    time:"1 hr 30 min",
    ingredients:[
      {group:"Main", items:["Basmati rice","Mutton or chicken","Yogurt-based marinade","Saffron or turmeric","Fried onions"]},
    ],
    steps:[
      "Marinate meat and partially cook in spices, then layer with par-cooked rice.",
      "Dum cook (low, covered) until rice and meat fully cooked. Serve topped with fried onions."
    ]
  },

  // ----- BRUNEI (5) -----
  {
    id:"brunei_ambuyat",
    country:"Brunei",
    title:"Ambuyat (Sago Starch Dish)",
    image:"assets/images/tradish/brunei/ambuyat.jpg",
    serves:"4",
    time:"30 min",
    ingredients:[
      {group:"Main", items:["200 g sago starch","2 cups water (hot)","Dipping sauce: sour or spicy sauce"]},
    ],
    steps:[
      "Slowly mix hot water into sago starch until it forms a smooth glue-like sticky paste.",
      "Serve ambuyat hot with dipping sauces and sides like fish or vegetables."
    ]
  },
  {
    id:"brunei_nasi_katok",
    country:"Brunei",
    title:"Nasi Katok",
    image:"assets/images/tradish/brunei/nasi_katok.jpg",
    serves:"2",
    time:"30 min",
    ingredients:[
      {group:"Main", items:["Rice","Fried chicken","Sambal or spicy sauce"]},
    ],
    steps:[
      "Cook rice and deep-fry or pan-fry seasoned chicken pieces.",
      "Serve chicken over rice with sambal."
    ]
  },
  {
    id:"brunei_soto_brunei",
    country:"Brunei",
    title:"Soto Brunei",
    image:"assets/images/tradish/brunei/soto_brunei.jpg",
    serves:"4",
    time:"50 min",
    ingredients:[
      {group:"Broth", items:["Chicken or beef stock","Lemongrass","Turmeric"],},
      {group:"Serving", items:["Rice noodles or rice","Fried shallots","Lime"]},
    ],
    steps:[
      "Simmer stock with aromatics, add shredded meat and adjust seasoning.",
      "Serve with rice/noodles and garnishes."
    ]
  },
  {
    id:"brunei_kelupis",
    country:"Brunei",
    title:"Kelupis (Glutinous Rice Wrap)",
    image:"assets/images/tradish/brunei/kelupis.jpg",
    serves:"8",
    time:"1 hr",
    ingredients:[
      {group:"Main", items:["Glutinous rice","Coconut milk","Banana leaves for wrapping","Salt"]},
    ],
    steps:[
      "Soak rice and mix with coconut milk and salt, then wrap in banana leaves.",
      "Steam parcels 30–40 minutes until rice is tender."
    ]
  },
  {
    id:"brunei_pais_ikan",
    country:"Brunei",
    title:"Pais Ikan (Steamed Fish in Banana Leaf)",
    image:"assets/images/tradish/brunei/pais_ikan.jpg",
    serves:"4",
    time:"30 min",
    ingredients:[
      {group:"Main", items:["Fish fillets","Spices and aromatics","Banana leaves for wrapping"]},
    ],
    steps:[
      "Season fish with spices, wrap in banana leaf and steam until cooked.",
      "Serve with rice and dipping sauce."
    ]
  },

  // ----- TIMOR-LESTE (5) -----
  {
    id:"timor_leste_batar_daan",
    country:"Timor-Leste",
    title:"Batar Daan",
    image:"assets/images/tradish/timor_leste/batar_daan.jpg",
    serves:"4",
    time:"1 hr",
    ingredients:[
      {group:"Main", items:["Corn kernels or corn pieces","Beans","Pumpkin","Coconut milk","Salt"]},
    ],
    steps:[
      "Cook corn, beans and pumpkin in coconut milk until all ingredients are soft and flavors blended.",
      "Season with salt and serve warm."
    ]
  },
  {
    id:"timor_leste_ikan_pepes",
    country:"Timor-Leste",
    title:"Ikan Pepes (Grilled/Steamed Fish in Leaf)",
    image:"assets/images/tradish/timor_leste/ikan_pepes.jpg",
    serves:"4",
    time:"30 min",
    ingredients:[
      {group:"Main", items:["Fish fillets","Spices (chilies, garlic, shallot)","Banana leaves or similar wrapping"]},
    ],
    steps:[
      "Mix spices into a paste and rub over fish pieces, wrap in leaves and steam/grill until done.",
      "Serve with rice or local sides."
    ]
  },
  {
    id:"timor_leste_saboko",
    country:"Timor-Leste",
    title:"Saboko (Cassava Cake)",
    image:"assets/images/tradish/timor_leste/saboko.jpg",
    serves:"6",
    time:"1 hr",
    ingredients:[
      {group:"Main", items:["Grated cassava","Coconut milk","Sugar","Salt"]},
    ],
    steps:[
      "Mix cassava with coconut milk and sugar, pour into pan and bake/steam until set.",
      "Slice and serve as snack or dessert."
    ]
  },
  {
    id:"timor_leste_feijoada",
    country:"Timor-Leste",
    title:"Feijoada Timor (Portuguese-influenced Stew)",
    image:"assets/images/tradish/timor_leste/feijoada_timor.jpg",
    serves:"4",
    time:"1 hr 30 min",
    ingredients:[
      {group:"Stew", items:["Beans","Pork or beef","Tomato base","Garlic and onion"]},
    ],
    steps:[
      "Cook beans with meat and aromatics until tender and thick.",
      "Season and serve with rice or bread."
    ]
  },
  {
    id:"timor_leste_bibinka",
    country:"Timor-Leste",
    title:"Bibinka-style Cake",
    image:"assets/images/tradish/timor_leste/bibinka_timor.jpg",
    serves:"8",
    time:"1 hr",
    ingredients:[
      {group:"Cake", items:["Grated coconut","Sugar","Eggs","Rice flour or cassava"]},
    ],
    steps:[
      "Mix ingredients into batter and steam or bake until set.",
      "Cool and slice to serve."
    ]
  }
]; // end tradishData

/* ---------- BUILD COUNTRY LIST ---------- */
const countries = [
  { key: "malaysia", name: "Malaysia", emoji: "🇲🇾" },
  { key: "indonesia", name: "Indonesia", emoji: "🇮🇩" },
  { key: "singapore", name: "Singapore", emoji: "🇸🇬" },
  { key: "thailand", name: "Thailand", emoji: "🇹🇭" },
  { key: "vietnam", name: "Vietnam", emoji: "🇻🇳" },
  { key: "philippines", name: "Philippines", emoji: "🇵🇭" },
  { key: "laos", name: "Laos", emoji: "🇱🇦" },
  { key: "cambodia", name: "Cambodia", emoji: "🇰🇭" },
  { key: "myanmar", name: "Myanmar", emoji: "🇲🇲" },
  { key: "brunei", name: "Brunei", emoji: "🇧🇳" },
  { key: "timor_leste", name: "Timor-Leste", emoji: "🇹🇱" }
];

const countrySlider = document.getElementById("countrySlider");
const recipesContainer = document.getElementById("recipesContainer");

/* ---------- CREATE COUNTRY CARDS ---------- */
countries.forEach(ctry=>{
  const card = document.createElement("div");
  card.className = "country-card";
  card.dataset.key = ctry.key;
  card.innerHTML = `
    <div class="country-emoji">${ctry.emoji}</div>
    <div class="country-name">${ctry.name}</div>
  `;
  card.addEventListener("click", ()=> {
    showCountryRecipes(ctry.key);
    centerCard(card);
    setActiveCountry(card);
  });
  countrySlider.appendChild(card);
});

// highlight selected country
function setActiveCountry(card){
  document.querySelectorAll(".country-card").forEach(c=>c.classList.remove("active"));
  card.classList.add("active");
}

// set first active card
document.addEventListener("DOMContentLoaded", () => {
  const firstCard = document.querySelector(".country-card");
  if(firstCard){
    firstCard.classList.add("active");
    centerCard(firstCard);
  }
});

/* ---------- SLIDER BEHAVIOR ---------- */
function centerCard(card) {
  const rect = card.getBoundingClientRect();
  const parentRect = countrySlider.getBoundingClientRect();
  const offset = rect.left - parentRect.left - (parentRect.width / 2 - rect.width / 2);
  countrySlider.scrollBy({ left: offset, behavior: "smooth" });
}

document.getElementById("prevCountry").addEventListener("click", () => {
  countrySlider.scrollBy({ left: -300, behavior: "smooth" });
});
document.getElementById("nextCountry").addEventListener("click", () => {
  countrySlider.scrollBy({ left: 300, behavior: "smooth" });
});

/* Fix for hidden Malaysia & Indonesia */
countrySlider.style.display = "flex";
countrySlider.style.overflowX = "auto";
countrySlider.style.scrollBehavior = "smooth";

/* ---------- SHOW RECIPES FOR COUNTRY ---------- */
function showCountryRecipes(countryKey) {
  recipesContainer.innerHTML = "";

  const matches = tradishData.filter(r => r.id.startsWith(countryKey)).slice(0, 5);
  matches.forEach(r => {
    const card = document.createElement("div");
    card.className = "recipe-card";
    card.innerHTML = `
      <img src="${r.image}" alt="${r.title}" />
      <h4>${r.title}</h4>
      <p><strong>${r.country}</strong></p>
      <div class="recipe-actions">
        <div>⏱ ${r.time} • 🍽 ${r.serves}</div>
        <button class="view-btn" data-id="${r.id}">View Recipe</button>
      </div>
    `;
    recipesContainer.appendChild(card);
  });

  attachViewButtons();
}

// default: show Malaysia recipes
showCountryRecipes("malaysia");

/* ---------- MODAL VIEW ---------- */
const modal = document.getElementById("recipeModal");
const modalTitle = document.getElementById("modalTitle");
const modalImage = document.getElementById("modalImage");
const modalCountry = document.getElementById("modalCountry");
const modalServes = document.getElementById("modalServes");
const modalTime = document.getElementById("modalTime");
const modalIngredients = document.getElementById("modalIngredients");
const modalSteps = document.getElementById("modalSteps");
const modalClose = document.getElementById("modalClose");

function attachViewButtons() {
  document.querySelectorAll(".view-btn[data-id]").forEach(btn => {
    btn.addEventListener("click", e => {
      e.stopPropagation();
      const id = btn.dataset.id;
      openRecipeModal(id);
    });
  });
}

function openRecipeModal(id) {
  const recipe = tradishData.find(r => r.id === id);
  if (!recipe) return;
  modalTitle.textContent = recipe.title;
  modalImage.src = recipe.image;
  modalCountry.textContent = recipe.country;
  modalServes.textContent = recipe.serves || "-";
  modalTime.textContent = recipe.time || "-";

  modalIngredients.innerHTML = "";
  recipe.ingredients.forEach(group => {
    const g = document.createElement("div");
    g.innerHTML = `<strong>${group.group}</strong><ul>${group.items.map(it => `<li>${it}</li>`).join("")}</ul>`;
    modalIngredients.appendChild(g);
  });

  modalSteps.innerHTML = recipe.steps.map(s => `<li>${s}</li>`).join("");

  modal.classList.add("active");
  modal.style.display = "flex";
  modal.setAttribute("aria-hidden", "false");
  document.body.style.overflow = "hidden";

  currentModalRecipe = recipe;
}

/* ---------- CLOSE MODAL (fixed stuck bug) ---------- */
modalClose.addEventListener("click", closeModal);
modal.addEventListener("click", e => {
  const inner = modal.querySelector(".modal-inner");
  if (!inner.contains(e.target)) closeModal();
});

function closeModal() {
  modal.classList.remove("active");
  modal.style.display = "none";
  modal.setAttribute("aria-hidden", "true");
  document.body.style.overflow = "auto";
}

/* ---------- PRINT RECIPE ---------- */
document.getElementById("printRecipe").addEventListener("click", () => {
  window.print();
});

/* ---------- COOK MODE ---------- */
let currentModalRecipe = null;
let cookIndex = 0;
const cookMode = document.getElementById("cookMode");
const cookTitle = document.getElementById("cookTitle");
const cookStepText = document.getElementById("cookStepText");
const cookTimer = document.getElementById("cookTimer");
const prevStepBtn = document.getElementById("prevStep");
const nextStepBtn = document.getElementById("nextStep");
const startCookBtn = document.getElementById("startCook");
const exitCookBtn = document.getElementById("exitCook");

startCookBtn.addEventListener("click", () => {
  if (!currentModalRecipe) return;
  closeModal(); // 🧩 hides the recipe modal first
  cookIndex = 0;
  openCookMode(currentModalRecipe);
});


function openCookMode(recipe) {
  cookMode.style.display = "flex";
  cookMode.setAttribute("aria-hidden", "false");
  cookTitle.textContent = recipe.title;
  showCookStep();
  document.body.style.overflow = "hidden";
}

function showCookStep() {
  const recipe = currentModalRecipe;
  if (!recipe) return;
  const stepText = recipe.steps[cookIndex] || "";
  cookStepText.textContent = `Step ${cookIndex + 1} of ${recipe.steps.length}: ${stepText}`;
  cookTimer.textContent = "";
}

prevStepBtn.addEventListener("click", () => {
  if (cookIndex > 0) {
    cookIndex--;
    showCookStep();
  }
});
nextStepBtn.addEventListener("click", () => {
  if (cookIndex < currentModalRecipe.steps.length - 1) {
    cookIndex++;
    showCookStep();
  }
});

exitCookBtn.addEventListener("click", closeCookMode);
function closeCookMode() {
  cookMode.style.display = "none";
  cookMode.setAttribute("aria-hidden", "true");
  document.body.style.overflow = "auto";
}

/* ---------- INIT ---------- */
attachViewButtons();

document.addEventListener("DOMContentLoaded", () => {
  const firstCard = document.querySelector(".country-card");
  if (firstCard) centerCard(firstCard);
});

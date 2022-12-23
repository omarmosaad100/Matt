let suggestions = [
    "Reveling in Silence",
    "Wooden Art craft",
    "Representation Through the Cinematic Lense",
    "Bedouin Market",
    "I am the Clown! The story of Clown Kajo",
    "A Vintage Taste for Music: Sherry's Vinyl",
    "Arabic Calligraphy",
    "Caricature, the lost laughing art",
    "A show that has been going for five thousand years",
    "Fokhar.. The Art of patience",
    "A Museum of Art, but this time, feeling a bit different",

    "Nubian Fashion",
    "Bedouin Fashion",
    "Upper Egyptian Fashion",
    "Coastal fashion",
    "Farmers in style",
    "Yes, mom, I thrifted AGAIN at the Wekala",
    "Made in Egypt",
    "How it started, and how it's ending.. The Extinction of Galabeya",

    "The Ingenious Nine-Year-Old Girl",
    "Living on the Nile	",
    "Transportation through river in Egypt.. like blood run in veins",
    "Rabbit: Electric scooters for rent",
    "Feel free to be different in.. Dahab",
    "Veganism: Do we need to eat animals? Or do they just taste good?",
    "Sun, the battery that never dies",
    "Are robots taking over?",
    "The nile is not 100% water!",
    "Zoo: Putting animals in cages for visitors to enjoy their day",
    "Will technology create a lazy generation?",
    "Therapy: A Way to Improve Your General Health",

    "Weesa Wassef, a magical piece of art on the edges of Giza",
    "An Artist's Safe Zone: The Comfort Zone",
    "Dahab.. All the diversity you can get",
    "Egypt is exploring the space!",
    "Welcome to a Park Where the Pets Roam Free: PetsVille",
    "Souq El Gomaa \"We Sell Every Old Thing\"",
    "A show that only kids love: The National Circus of Agouza",
    "The cultural hub of Darb 17 18",
    "Geziret El Dahab: A couple of kilometers away from heaven",
]

const page = new Map([
    ["Reveling in Silence","_HM2_Art_gallery.html"],
    ["Wooden Art craft","_S3_wooden_craft.html"],
    ["Representation Through the Cinematic Lense","_HM3_Scenes.html"],
    ["Bedouin Market","_HM5_Bedoun.html"],
    ["I am the Clown! The story of Clown Kajo","_M2_Clown.html"],
    ["A Vintage Taste for Music: Sherry's Vinyl","_R2_sherry_s.html"],
    ["Arabic Calligraphy", "_S4_calligraphy.html"],
    ["Caricature, the lost laughing art","_S1_Caricature.html"],
    ["A show that has been going for five thousand years","_S5_puppet_show.html"],
    ["Fokhar.. The Art of patience","_H2_Fokhar.html"],
    ["A Museum of Art, but this time, feeling a bit different","_S2_Museum.html"],

    ["Nubian Fashion","_A1_nouba.html"],
    ["Bedouin Fashion","_A2_Beddouin.html"],
    ["Upper Egyptian Fashion","_A4_upper_egyptians.html"],
    ["Coastal fashion","_A5_Coastal_fashion.html"],
    ["Farmers in style","_A3_fallaheen.html"],
    ["Yes, mom, I thrifted AGAIN at the Wekala","_HM6_Wekala.html"],
    ["Made in Egypt","_HM4_Made_in_Egypt.html"],
    ["How it started, and how it's ending.. The Extinction of Galabeya","_HM1_The_extinction_of_galabeya.html"],

    ["The Ingenious Nine-Year-Old Girl","_M1_girl.html"],
    ["Living on the Nile","_M3_Sayadeen.html"],
    ["Transportation through river in Egypt.. like blood run in veins","_O2_Na2l_Nahry.html"],
    ["Rabbit: Electric scooters for rent","_O3_Rabbit.html"],
    ["Feel free to be different in.. Dahab","_O5_Dahab_Lifestyle.html"],
    ["Veganism: Do we need to eat animals? Or do they just taste good?","_O7_Veganism.html"],
    ["Sun, the battery that never dies","_O9_solar_energy.html"],
    ["Are robots taking over?","_O11_Robots.html"],
    ["The nile is not 100% water!","_O12_Nile_Pollution.html"],
    ["Zoo: Putting animals in cages for visitors to enjoy their day","_M6_Zoo.html"],
    ["Will technology create a lazy generation?","_O6_kids_lifestyle.html"],
    ["Therapy: A Way to Improve Your General Health","_R1_Therapy.html"],

    ["Weesa Wassef, a magical piece of art on the edges of Giza","_M4_5eyata.html"],
    ["An Artist's Safe Zone: The Comfort Zone","_R3_comfortzone.html"],
    ["Dahab.. All the diversity you can get","_O4_Dahab_Place.html"],
    ["Egypt is exploring the space!","_O10_Space_stations.html"],
    ["Welcome to a Park Where the Pets Roam Free: PetsVille","_R4_petsville.html"],
    ["Souq El Gomaa \"We Sell Every Old Thing\"","_M5_Souq_el_gomaa.html"],
    ["A show that only kids love: The National Circus of Agouza","_O8_Circus.html"],
    ["The cultural hub of Darb 17 18","_H1_Darb_18.html"],
    ["Geziret El Dahab: A couple of kilometers away from heaven","_O1_Gezira.html"]
  ]);

//getting required elements
const searchWrapper = document.querySelector(".form-box");
const inputBox = searchWrapper.querySelector("input");
const suggBox = searchWrapper.querySelector(".autocom-box");

//if user enters value
inputBox.onkeyup = (e) => {
    // console.log(e.target.value);
    let userData = e.target.value.toLocaleLowerCase();
    let emptyArray = [];
    if (userData){
        emptyArray = suggestions.filter((data) => {
            if (data.toLocaleLowerCase().includes(userData)){
                return data;
            }
        });
        emptyArray = emptyArray.map((data) => {
            return '<li>'+data+'</li>';
        });

        // console.log(emptyArray);
        searchWrapper.classList.add("active");
        showSuggestions (emptyArray);
        let allList = suggBox.querySelectorAll("li");
        for (let i = 0; i < allList.length; i++) {
            allList[i].setAttribute("onclick", "select(this)");
            
        }

    } else {
        searchWrapper.classList.remove("active");
    }
}

function select(element){
    let selectUserData = element.textContent;
    console.log(page.get(selectUserData));
    // window.location.pathname = './post_details.html'
    document.location.href =  page.get(selectUserData);
}


//show suggestions
function showSuggestions (list){
    let listData;
    if(!list.length){
        userValue = inputBox.value;
        listData = '<li></li>';
        searchWrapper.classList.remove("active");
    } else {
        listData = list.join('');
    }
    suggBox.innerHTML = listData;
}
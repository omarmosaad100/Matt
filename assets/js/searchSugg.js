let suggestions = [
    "Hello",
    "XYZ",
    "xyz",
    "Yes",
    "Souq El Gomaa \"We Sell Every Old Thing\"",
]

//getting required elements
const searchWrapper = document.querySelector(".form-box");
const inputBox = searchWrapper.querySelector("input");
const suggBox = searchWrapper.querySelector(".autocom-box");

//if user enters value
inputBox.onkeyup = (e) => {
    // console.log(e.target.value);
    let userData = e.target.value;
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
    console.log(selectUserData);
    // window.location.pathname = './post_details.html'
    document.location.href = "post_details.html"
}


//show suggestions
function showSuggestions (list){
    let listData;
    if(!list.length){
        userValue = inputBox.value;
        listData = '<li></li>';
    } else {
        listData = list.join('');
    }
    suggBox.innerHTML = listData;
}
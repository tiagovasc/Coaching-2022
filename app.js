/* Currency Start */
const currencySelect = document.getElementsByClassName("currencySelect")[0];

currencySelect.addEventListener("click", showCurrency);

function showCurrency(event){
    switch (event.target.value) {
        case "usd":
            /* One MonthStart*/
            const oneMonthGoldPriceUsd = document.getElementsByClassName("oneMonthGoldPriceUsd")[0];
            oneMonthGoldPriceUsd.innerText = "$200"
            const oneMonthSilverPriceUsd = document.getElementsByClassName("oneMonthSilverPriceUsd")[0];
            oneMonthSilverPriceUsd.innerText = "$175"
            /* One Month End*/

            /****Three Month Start*******/
            const threeMonthGoldPriceUsd = document.getElementsByClassName("threeMonthGoldPriceUsd")[0];
            threeMonthGoldPriceUsd.innerText = "$540"
            const threeMonthSilverPriceUsd = document.getElementsByClassName("threeMonthSilverPriceUsd")[0];
            threeMonthSilverPriceUsd.innerText = "$475"
            
            /* Off Price */
            const threeMonthGoldOffPriceUsd = document.getElementsByClassName("threeMonthGoldOffPriceUsd")[0];
            threeMonthGoldOffPriceUsd.innerText = "$600"
            const threeMonthSilverOffPriceUsd = document.getElementsByClassName("threeMonthSilverOffPriceUsd")[0];
            threeMonthSilverOffPriceUsd.innerText = "$525"
            /****Three Month End*******/

            const sixMonthGoldPriceUsd = document.getElementsByClassName("sixMonthGoldPriceUsd")[0];
            sixMonthGoldPriceUsd.innerText = "$1020";
            const sixMonthSilverPriceUsd = document.getElementsByClassName("sixMonthSilverPriceUsd")[0];
            sixMonthSilverPriceUsd.innerText  = "$895";

            /* Off Price */
            const sixMonthGoldOffPriceUsd = document.getElementsByClassName("sixMonthGoldOffPriceUsd")[0];
            sixMonthGoldOffPriceUsd.innerText = "$1200"
            const sixMonthSilverOffPriceUsd = document.getElementsByClassName("sixMonthSilverOffPriceUsd")[0];
            sixMonthSilverOffPriceUsd.innerText = "$1050"

            break;

        case "gbp":
            /* One Month Gold Start*/
            const oneMonthGoldPriceGbp = document.getElementsByClassName("oneMonthGoldPriceUsd")[0];
            oneMonthGoldPriceGbp.innerText = "£145"
            const oneMonthSilverPriceGbp = document.getElementsByClassName("oneMonthSilverPriceUsd")[0];
            oneMonthSilverPriceGbp.innerText = "£130"
            /* One Month Gold End*/

            /****Three Month Start*******/
            const threeMonthGoldPriceGbp = document.getElementsByClassName("threeMonthGoldPriceUsd")[0];
            threeMonthGoldPriceGbp.innerText = "£390"
            const threeMonthSilverPriceGbp = document.getElementsByClassName("threeMonthSilverPriceUsd")[0];
            threeMonthSilverPriceGbp.innerText = "£350"

            /* Off Price */
            const threeMonthGoldOffPriceGbp = document.getElementsByClassName("threeMonthGoldOffPriceUsd")[0];
            threeMonthGoldOffPriceGbp.innerText = "£435"
            const threeMonthSilverOffPriceGbp = document.getElementsByClassName("threeMonthSilverOffPriceUsd")[0];
            threeMonthSilverOffPriceGbp.innerText = "£390"
            /****Three Month End*******/

            const sixMonthGoldPriceGbp = document.getElementsByClassName("sixMonthGoldPriceUsd")[0];
            sixMonthGoldPriceGbp.innerText = "£740";
            const sixMonthSilverPriceGbp = document.getElementsByClassName("sixMonthSilverPriceUsd")[0];
            sixMonthSilverPriceGbp.innerText  = "£665";

            /* Off Price */
            const sixMonthGoldOffPriceGbp = document.getElementsByClassName("sixMonthGoldOffPriceUsd")[0];
            sixMonthGoldOffPriceGbp.innerText = "£870"
            const sixMonthSilverOffPriceGbp = document.getElementsByClassName("sixMonthSilverOffPriceUsd")[0];
            sixMonthSilverOffPriceGbp.innerText = "£780"
            break;

        case "eur":
            const oneMonthGoldPriceEur = document.getElementsByClassName("oneMonthGoldPriceUsd")[0];
            oneMonthGoldPriceEur.innerText = "€175"
            const oneMonthSilverPriceEur = document.getElementsByClassName("oneMonthSilverPriceUsd")[0];
            oneMonthSilverPriceEur.innerText = "€150"

            /* Three Month Start */
            const threeMonthGoldPriceEur = document.getElementsByClassName("threeMonthGoldPriceUsd")[0];
            threeMonthGoldPriceEur.innerText = "€475"
            const threeMonthSilverPriceEur = document.getElementsByClassName("threeMonthSilverPriceUsd")[0];
            threeMonthSilverPriceEur.innerText = "€405"

            /* Off Price */
            const threeMonthGoldOffPriceEur = document.getElementsByClassName("threeMonthGoldOffPriceUsd")[0];
            threeMonthGoldOffPriceEur.innerText = "€525"
            const threeMonthSilverOffPriceEur = document.getElementsByClassName("threeMonthSilverOffPriceUsd")[0];
            threeMonthSilverOffPriceEur.innerText = "€450"
            /* Three Month End */

            /* Six Month Start */
            const sixMonthGoldPriceEur = document.getElementsByClassName("sixMonthGoldPriceUsd")[0];
            sixMonthGoldPriceEur.innerText = "€895";
            const sixMonthSilverPriceEur = document.getElementsByClassName("sixMonthSilverPriceUsd")[0];
            sixMonthSilverPriceEur.innerText  = "€765";

            /* Off Price */
            const sixMonthGoldOffPriceEur = document.getElementsByClassName("sixMonthGoldOffPriceUsd")[0];
            sixMonthGoldOffPriceEur.innerText = "€1050"
            const sixMonthSilverOffPriceEur = document.getElementsByClassName("sixMonthSilverOffPriceUsd")[0];
            sixMonthSilverOffPriceEur.innerText = "€900"
            /* Six Month End */
            break;

            
    };
}

filterSelection("threeMonth")

function filterSelection(c) {
    var x, i;
    x = document.getElementsByClassName("filterDiv");
    for (i = 0; i < x.length; i++) {
        removeClass(x[i], "show");
        if (x[i].className.indexOf(c) > -1) addClass(x[i], "show");
    }
}

function addClass(element, name) {
    var i, arr1, arr2;
    arr1 = element.className.split(" ");
    arr2 = name.split(" ");
    for (i = 0; i < arr2.length; i++) {
        if (arr1.indexOf(arr2[i]) == -1) {
            element.className += " " + arr2[i];
        }
    }
}

function removeClass(element, name) {
    var i, arr1, arr2;
    arr1 = element.className.split(" ");
    arr2 = name.split(" ");
    for (i = 0; i < arr2.length; i++) {
        while (arr1.indexOf(arr2[i]) > -1) {
            arr1.splice(arr1.indexOf(arr2[i]), 1);
        }
    }
    element.className = arr1.join(" ");
}


// Add active class to the current button (highlight it)
var btnContainer = document.getElementById("myBtnContainer");
var btns = btnContainer.getElementsByClassName("btn");
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function(){
    var current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace(" active", "");
    this.className += " active";
  });
}
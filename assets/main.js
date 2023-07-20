

// inputs 
let day = document.getElementById("day");
let month = document.getElementById("month");
let year = document.getElementById("year");
let form = document.getElementsByTagName("form")[0];
let lableDay = document.querySelector(".daylable")
let lableMonth = document.querySelector(".monthlable")
let lableYear = document.querySelector(".yearlable")

// submit
let button = document.querySelector("button")

//results
let years = document.querySelector(".years span");
let months = document.querySelector(".months span");
let days = document.querySelector(".days span");

//alert
let alertDay = document.querySelector(".alertDay")
let alertMonth = document.querySelector(".alertMonth")
let alertYear= document.querySelector(".alertYear")


// date 
let dateNow = new Date()
let dayNow = dateNow.getDate()
let monthNow = dateNow.getMonth() +1 ;
let yearNow = dateNow.getFullYear()  

let countDayMonth = [31,29,31,30,31,30,31,31,30,31,30,31];
let countDayMonthNew = 0;

form.onsubmit=(e)=>{
    e.preventDefault();

   countDayMonthNew = countDayMonth[+month.value-1];
    console.log(countDayMonthNew)
    if( day.value.trim() == "" || isNaN(day.value) || day.value > countDayMonthNew ||  day.value > 31 ||  day.value <= 0 ){
        day.value.trim() == ""? (alertDay.innerHTML = " This field is required" , day.style.setProperty("border-color","red") , lableDay.style.color="red" )
        :isNaN(day.value) || day.value > countDayMonthNew || day.value <= 0 || day.value > 31 ? ( alertDay.innerHTML = " Must be a valid day " , day.style.setProperty("border-color","red") , lableDay.style.color="red" ): "";
    }else{
        alertDay.innerHTML = "";
        day.style.setProperty("border-color","#f0f0f0");
        lableDay.style.color="#898989";
    }
    if(month.value.trim() == "" || isNaN(month.value) || month.value > 12 || month.value <= 0 ){
        month.value.trim() == ""? ( alertMonth.innerHTML = " This field is required"  , month.style.setProperty("border-color","red") , lableMonth.style.color="red")
        :isNaN(month.value) ||month.value <= 0 || month.value > 12  ?  ( alertMonth.innerHTML = " Must be a valid day " , month.style.setProperty("border-color","red") , lableMonth.style.color="red" )
        :""
    }else{
        alertMonth.innerHTML = "";
        month.style.setProperty("border-color","#f0f0f0");
        lableMonth.style.color="#898989";
    }
   if( year.value.trim() == "" || isNaN(year.value) || year.value > yearNow || year.value < 1000 ){
    year.value.trim() == ""?( alertYear.innerHTML = " This field is required" ,  year.style.setProperty("border-color","red"),  lableYear.style.color="red" )
    :isNaN(year.value) || year.value > yearNow ||  year.value < 1900?  ( alertYear.innerHTML = " Must be a valid day " ,  year.style.setProperty("border-color","red"),  lableYear.style.color="red" ) :""
   }else{
    alertYear.innerHTML = "";
    year.style.setProperty("border-color","#f0f0f0");
    lableYear.style.color="#898989";
} ; if(alertDay.innerHTML != "" || alertMonth.innerHTML != "" ||  alertYear.innerHTML != ""){
    let newStyle = document.createElement("style");
    newStyle.id="styleAlert"
    newStyle.innerHTML= `

    button {
        transform: translateY(98px);
    }
    @media (max-width: 600px) {
        button {
            transform: translate(-50%, 90px) ;
        }
    
    }
    `
    document.head.appendChild(newStyle)
    // button.style.transform="translateY(98px)"
    // document.styleSheets[0].cssRules[0].style.setProperty("transform" ,"translate(-50%, 72px)")
}


if(alertDay.innerHTML == "" && alertMonth.innerHTML == "" &&  alertYear.innerHTML == ""){
    let newStyle = document.getElementById("styleAlert");
    console.log(newStyle)
    if(newStyle != undefined ){newStyle.innerHTML ="";
}
     if( day.value > dayNow && month.value <= monthNow  ) {
            days.textContent =  dayNow - day.value + countDayMonthNew ;
            months.textContent =   monthNow -1 - month.value ;
            years.textContent =  yearNow- year.value ;
    }
     if( day.value > dayNow && month.value > monthNow   ) {
            days.textContent = dayNow - day.value + countDayMonthNew ;
            months.textContent = 12 - (month.value - monthNow +1) ;
            years.textContent = yearNow - year.value -1 ;
    }
     if( day.value < dayNow && month.value > monthNow   ) {
        days.textContent = dayNow - day.value ;
        months.textContent = 12 - (month.value - monthNow ) ;
        years.textContent = yearNow - year.value -1 ;
    }
     if( day.value <= dayNow && month.value <= monthNow   ) {
            days.textContent = dayNow - day.value ;
            months.textContent = monthNow  - month.value  ;
            years.textContent = yearNow - year.value ;
    }
}
}


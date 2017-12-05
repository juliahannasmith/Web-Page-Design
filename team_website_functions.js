function greeting() {
    var today = new Date();
    var day = today.getDay();
    var hour = today.getHour();
    if (day == 6 || day == 0 ){
        if (hour >= 0 && hour <= 10 ){
            return "Go back to sleep, it's the weekend!"
        }
        else{

        }

    }
    else if (day == 1 && hour >= 0 && hour <= 8){
        return "Ugh, it's Monday morning!"
    }
    else if (day == 2|| day == 3 || day == 4 || day == 5){
        if (hour >= 0 && hour <= 9){
            return "Good Morning"
        }
        else if (hour >= 10 && hour <= 17){
            return "Good Day!"
        }
        else (hour >= 18 && hour <= 23){
            return "Good Evening!"
        }
    }

    function dateMessage() {
        var today = new Date();
        var dayArray = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
        var day = today.getDay();
        var monthArray = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
        var month = today.getMonth();
        var date = today.getDate();
            if (date == 1 || date == 21 || date == 31){
                dayEnding = "st";
            }else if (date == 2 || date == 22){
                 dayEnding = "nd";
            }else if (date == 3 || date == 23){
                dayEnding = "rd";
            }else{
                 dayEnding = "th";
            }
        var year = today.getFullYear();
        return dayArray[day] + ", " + monthArray[month] + " " + [date] + dayEnding + ", " + [year]
    }



function birthdayCountDown(){

    var end = new Date();
    var seconds = math.floor
    var minutes = math.floor
    var hours = math.floor











}


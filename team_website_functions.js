function greeting() {
    var today = new Date();
    var day = today.getDay();
    var hour = today.getHours();

    if (hour >= 0 && hour <= 9) {
        if (day == 0 || day == 6) {
            return "Go back to sleep, its the weekend!";
        } else if (day == 1) {
            return "Ugh, its monday morning!";
        } else {
            return "Good Morning!";
        }
    } else if (hour >= 10 && hour <= 17) {
        if (day == 0 || day == 6) {
            return "Hope you are having a great weekend!";
        } else {
            return "Good Day!";
        }
    } else {
        if (day == 0) {
            return "Enjoy your evening...tomorrow is Monday!";
        } else {
            return "Good Evening!";
        }
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

function birthdayCountDown(bday) {
var today = new Date();
    var bday = new Date(birthdate)
   var currenttime = today.getTime();
    var btime = birthday.getTime();

    if (( btime - currenttime) < 0) {
    birthday.setFullYear(today.getFullYear)


     var daysuntil = Math.floor((birthday.getTime() / 86400000) - (today.getTime() / 86400000));



    }
    var diff = myBirthday.getTime() - today.getTime();


    document.write(daysuntil);



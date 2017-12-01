function randomGreeting() {
    var myArray = ['Hello!', 'Hi!', 'Bonjour!', 'Hola!', "Welcome to Chili's", 'Sah dude']
    return myArray[Math.floor(Math.random() * myArray.length)]
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



    function birthdayCountDown() {









    }

function randomGreeting(){
            var myArray = ['Hello!', 'Hi!', 'Bonjour!', 'Hola!' , "Welcome to Chili's" , 'Sah dude']
    return myArray[Math.floor(Math.random() * myArray.length)
}

















function dateMessage(){
    var today = new Date();
        var dayArray = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
        var day = today.getDay();
        var monthArray = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
        var month = today.getMonth();
        var date = today.getDate();
        var year = today.getFullYear();
    return dayArray[day] + ", " + monthArray[month] + " " + [date] + ", " + [year]
}



function birthdayCountDown(){













}

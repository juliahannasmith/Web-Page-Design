randomGreeting()


















function dateMessage(){
    var today = new Date();
        var dayArray = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
        var day = today.getDay();
        var monthArray = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
        var month = today.getMonth();
        var date = today.getDate();
        var year = today.getFullYear();
       return today
}

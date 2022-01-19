function countdownTimeStart(endTime){

    const finalDate = new Date(endTime).getTime();
    
    const myTimer = setInterval(function() {
    
        const now = new Date().getTime();
        
        const timeLeft = finalDate - now;
        
        const days = Math.floor(timeLeft / ( 1000 * 60 * 60 * 24 ));
        const hours = Math.floor((timeLeft / ( 1000 * 60 * 60 )) % 24 );
        const minutes = Math.floor((timeLeft / (1000 * 60 )) % 60 );
        const seconds = Math.floor((timeLeft / 1000 ) % 60 );
        
        document.getElementById("scoreboard__timer_number_days").innerHTML = days;
        document.getElementById("scoreboard__timer_number_hours").innerHTML = hours;
        document.getElementById("scoreboard__timer_number_minutes").innerHTML = minutes;
        document.getElementById("scoreboard__timer_number_seconds").innerHTML = seconds;
        
        if (timeLeft < 0) {
            clearInterval(myTimer);
            document.getElementById("scoreboard__timer_number_days").innerHTML = '0';
            document.getElementById("scoreboard__timer_number_hours").innerHTML = '0';
            document.getElementById("scoreboard__timer_number_minutes").innerHTML = '0';
            document.getElementById("scoreboard__timer_number_seconds").innerHTML = '0';
        }
    }, 1000);
}

countdownTimeStart("May 23, 2024 15:00:00");

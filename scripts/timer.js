function countdownTimeStart(endTime){

    const countDownDate = new Date(endTime).getTime();
    
    const myTimer = setInterval(function() {
    
        const now = new Date().getTime();
        
        const distance = countDownDate - now;
        
        const days = Math.floor(distance / ( 1000 * 60 * 60 * 24 ));
        const hours = Math.floor((distance / ( 1000 * 60 * 60 )) % 24 );
        const minutes = Math.floor((distance / (1000 * 60 )) % 60 );
        const seconds = Math.floor((distance / 1000 ) % 60 );
        
        document.getElementById("scoreboard__timer_number_days").innerHTML = days;
        document.getElementById("scoreboard__timer_number_hours").innerHTML = hours;
        document.getElementById("scoreboard__timer_number_minutes").innerHTML = minutes;
        document.getElementById("scoreboard__timer_number_seconds").innerHTML = seconds;
        
        if (distance < 0) {
            clearInterval(myTimer);
            document.getElementById("scoreboard__timer_number_days").innerHTML = '0';
            document.getElementById("scoreboard__timer_number_hours").innerHTML = '0';
            document.getElementById("scoreboard__timer_number_minutes").innerHTML = '0';
            document.getElementById("scoreboard__timer_number_seconds").innerHTML = '0';
        }
    }, 1000);
}

countdownTimeStart("Dec 31, 2021 15:00:00");

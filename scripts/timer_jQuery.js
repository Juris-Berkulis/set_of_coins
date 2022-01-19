function countdownTimeStart(endTime){

    const finalDate = new Date(endTime).getTime();
    
    const myTimer = setInterval(function() {
    
        const now = new Date().getTime();
        
        const timeLeft = finalDate - now;
        
        const days = Math.floor(timeLeft / ( 1000 * 60 * 60 * 24 ));
        const hours = Math.floor((timeLeft / ( 1000 * 60 * 60 )) % 24 );
        const minutes = Math.floor((timeLeft / (1000 * 60 )) % 60 );
        const seconds = Math.floor((timeLeft / 1000 ) % 60 );

        $('#scoreboard__timer_number_days').html(days);
        $('#scoreboard__timer_number_hours').html(hours);
        $('#scoreboard__timer_number_minutes').html(minutes);
        $('#scoreboard__timer_number_seconds').html(seconds);
                
        if (timeLeft < 0) {
            clearInterval(myTimer);
            $('#scoreboard__timer_number_days').html('0');
            $('#scoreboard__timer_number_hours').html('0');
            $('#scoreboard__timer_number_minutes').html('0');
            $('#scoreboard__timer_number_seconds').html('0');
        }
    }, 1000);
}

countdownTimeStart("May 23, 2024 15:00:00");

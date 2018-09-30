const OpeningHours = (function () {
    const quickInfoHours = document.getElementById("quick-info-opening");
    const dayInMilliseconds = 86400000;
    
    const labels = new Array(7);
    const values = new Array(7);
    
    (function() {
        for(let i = 0; i < 7; i += 1) {
            labels[i] = document.getElementById("date-label-" + i);
            values[i] = document.getElementById("date-value-" + i);
        }
    }());
    
    const update = function () {
        const date = new Date();
        const day = date.getDay();
        
        if (day === 0 ) {
            quickInfoHours.innerHTML = "'s Zondags gesloten";
            quickInfoHours.style.color = "red";
            quickInfoHours.style.fontWeight = "bold";
        } else if (day === 1) {
            quickInfoHours.innerHTML = "'s Maandags gesloten";
            quickInfoHours.style.color = "red";
            quickInfoHours.style.fontWeight = "bold";
        } else {
            quickInfoHours.innerHTML = "Nu geopend van<br>09:00&emdash;18:00";
            quickInfoHours.style.color = "";
            quickInfoHours.style.fontWeight = "";
        }
        
        for(let i = 0; i < 7; i += 1) {
            if (day === i) {
                if (day === 0 || day === 1) {
                    labels[i].style.color = "red";
                    values[i].style.color = "red";
                    labels[i].style.borderBottom = "0.125rem dashed red";
                    values[i].style.borderBottom = "0.125rem dashed red";
                } else {
                    labels[i].style.color = "";
                    values[i].style.color = "";
                    labels[i].style.borderBottom = "0.125rem dashed black";
                    values[i].style.borderBottom = "0.125rem dashed black";
                }
                
                labels[i].style.fontWeight = "bold";
                values[i].style.fontWeight = "bold";
            } else {
                labels[i].style.color = "";
                values[i].style.color = "";
                labels[i].style.fontWeight = "";
                values[i].style.fontWeight = "";
                labels[i].style.borderBottom = "";
                values[i].style.borderBottom = "";
            }
        }
        
        const hours = 23 - date.getHours();
        const minutes = 59 - date.getMinutes();
        const seconds = 59 - date.getSeconds();
        const milliseconds = 999 - date.getMilliseconds();
        
        const timeout = milliseconds + 1000 * (seconds + 60 * (minutes + 60 * hours));
        
        setTimeout(update, timeout);
    }
    
    update();
}());
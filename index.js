const formatDate = timeInSeconds => {
    if (timeInSeconds) {
        
        let seconds = Math.floor(timeInSeconds);
        let minutes = Math.floor(timeInSeconds / 60);
        let hours = Math.floor(timeInSeconds / 3600);

        if ( ( hours >= 1 ) && ( minutes % 60 == 0 ) && ( seconds % 60 == 0 ) ) return `${hours}h`;
        if ( ( hours >= 1 ) && ( seconds % 60 == 0 ) ) return `${hours}h ${minutes % 60}m`
        if ( ( hours >= 1 ) && ( minutes % 60 == 0 ) ) return `${hours}h ${seconds % 60}s`
        if ( minutes >= 60 ) return `${hours}h ${minutes % 60}m ${seconds % 60}s`;
        if ( (seconds >= 60 ) && (seconds % 60 == 0) ) return `${minutes}m`;
        if ( seconds >= 60 ) return `${minutes}m ${seconds % 60}s`;
        if ( seconds < 60 ) return `${seconds}s`;

        // return `${hours} ${minutes} ${seconds}`;
    }
    return `0s`;
}

module.exports = formatDate;
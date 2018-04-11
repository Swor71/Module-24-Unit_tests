const formatDate = timeInSeconds => {
    if (timeInSeconds) {
        let seconds = Math.floor(timeInSeconds % 60);
        let minutes = Math.floor(timeInSeconds % 3600 / 60);
        let hours = Math.floor(timeInSeconds / 3600);

        const printTime = (time, unit) => time != 0 ? time + unit : ''

        return `${printTime(hours, 'h')} ${printTime(minutes, 'm')} ${printTime(seconds, 's')}`.replace(/  /g, ' ').trim();
    }
    return `0s`;
}

module.exports = formatDate;
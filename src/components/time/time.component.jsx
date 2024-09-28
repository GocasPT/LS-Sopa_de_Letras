import './time.css';

function Time({ time }) {
    function timeConverter(time) {
        let minutes = Math.floor(time / 60);
        let seconds = time % 60;

        if (minutes < 10) {
            minutes = '0' + minutes;
        }

        if (seconds < 10) {
            seconds = '0' + seconds;
        }

        return minutes + ':' + seconds;
    }

    return (
        <div className="time">
            <span className="time-value">{timeConverter(time)}</span>
        </div>
    );
}

export default Time;

import React, { useEffect, useState } from 'react';
import './App.css'; // Import the CSS file

const CountdownTimer = () => {
    const [time, setTime] = useState({
        days: '00',
        hours: '00',
        minutes: '00',
        seconds: '00'
    });

    useEffect(() => {
        // Calculate the countdown time in seconds
        const countdownTime = (61 * 24 * 60 * 60) + (21 * 60 * 60) + (1 * 60) + 5;
        let timer = countdownTime;

        const interval = setInterval(() => {
            const days = Math.floor(timer / (24 * 60 * 60));
            const hours = Math.floor((timer % (24 * 60 * 60)) / (60 * 60));
            const minutes = Math.floor((timer % (60 * 60)) / 60);
            const seconds = Math.floor(timer % 60);

            setTime({
                days: String(days).padStart(2, '0'),
                hours: String(hours).padStart(2, '0'),
                minutes: String(minutes).padStart(2, '0'),
                seconds: String(seconds).padStart(2, '0')
            });

            if (--timer < 0) {
                clearInterval(interval);
                setTime({
                    days: '00',
                    hours: '00',
                    minutes: '00',
                    seconds: '00'
                });
            }
        }, 1000);

        return () => clearInterval(interval);
    }, []);

    return (
        <div className="countdown">
            <div className="time-container">
                <div className="time-box" data-label="Days">{time.days}</div>
                <div className="time-box" data-label="Hours">{time.hours}</div>
                <div className="time-box" data-label="Minutes">{time.minutes}</div>
                <div className="time-box" data-label="Seconds">{time.seconds}</div>
            </div>
        </div>
    );
};

export default CountdownTimer;

'use client'

import Header from "../components/header";

const Weather = () => {

    type Wearher = {
        title: string
        publicTime: Date
    }

    const handleClick = async () => {
        try {
            const response = await fetch('https://weather.tsukumijima.net/api/forecast/city/400040');
            if(!response.ok) {
                throw new Error('error');
            }
            const data: Wearher = await response.json();
            console.log(data.title);
            console.log(data);
        }catch (error) {
            console.error('Error');
        }
    }

    return (
        <div>
            <Header />
            <button onClick={handleClick}>天気取得</button>
        </div>
    )
}

export default Weather;
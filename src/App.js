import React,{useState} from 'react';

const App=()=>{
    const[lat, setLat]=useState(null);
    const[long, setLong]=useState(null);
    const[hemisphere, setHemisphere]=useState(null);
    const[month, setMonth]=useState(new Date().getMonth()+1);
        function getlocation(){
            if(navigator.geolocation){
                navigator.geolocation.getCurrentPosition(
                    (position)=>{
                        setLat(position.coords.latitude);
                        setLong(position.coords.longitude);
                        if(position.coords.latitude>0){
                            setHemisphere("Northern Hemisphere")
                        }
                         else if(position.coords.latitude<0){
                            setHemisphere("Southern Hemisphere")
                        }
                        else{
                            setHemisphere("Equator")
                        }
                    }
                )
            }
        }
        return(
            <div>
                <h1>Weather App</h1>
                <h2>latitude:{lat}</h2>
                <h2>longitude:{long}</h2>
                <h2>hemisphere:{hemisphere}</h2>
                <h2>month:{month}</h2>
                <button onclick={getlocation}>getlocation</button>
                {
                    hemisphere!=null&&hemisphere==="Northern Hemisphere"&&month>=3&&month<=6&&
                    <div>
                        <h2>summer</h2>
                        <img src="https://render.fineartamerica.com/images/images-profile-flow/400/images/artworkimages/mediumlarge/1/23-beach-mothaibaphoto-prints.jpg" alt=""/>
                        </div>
                }
                {
                    hemisphere!=null&&hemisphere==="Northern Hemisphere"&&month>=6&&month<=9&&
                    <div>
                        <h2>rainy</h2>
                        <img src="https://render.fineartamerica.com/images/images-profile-flow/400/images/artworkimages/mediumlarge/2/view-on-napali-coast-on-kauai-island-on-alexander-demyanenko.jpg" alt=""/>
                        </div>
                        }
            </div>
        )
    
}
export default App;
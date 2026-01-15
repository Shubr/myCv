import './styleing.css'
// import {createClient} from '@supabase/supabase-js';
import milo from '/assets/milo.jpeg'

import { useState, useEffect } from 'react';


// const supabase = createClient(import.meta.env.VITE_SUPABASE_URL, import.meta.env.VITE_SUPABASE_ANON_KEY);

export default function FoodPriceGuess(){
    const obj = document.getElementById('obj') as HTMLDivElement;
    const [tries, setTries] = useState(5);
    // const [imageUrl, setImageUrl] = useState('');
    const todayPrice = 7.99;
    useEffect(()=>{
        // getImage();
    }, []);

    // async function getImage(){
    //     const {data} = await supabase.storage.from('images').getPublicUrl('milo.jpeg');
    //     setImageUrl(data.publicUrl);
    // }
    

    function guessPrice(guessPrice: number) {
    if (guessPrice !== todayPrice && tries > 0) {
        const guess_box = document.createElement('div');
        const heading = document.createElement('h1');
        const paragraph = document.createElement('p');
        paragraph.textContent = `$${guessPrice}`;
        if(guessPrice > todayPrice - 3 && guessPrice < todayPrice + 3){
            guess_box.classList.add('guess-box','close');
            if(guessPrice > todayPrice){
                heading.textContent = 'Lower';
            }else{
                heading.textContent = "Higher";
            }
        }else{
            guess_box.classList.add('guess-box','lower');
            if(guessPrice > todayPrice){
                heading.textContent = 'Lower';
            }else{
                heading.textContent = "Higher";
            }
        }

        obj.appendChild(guess_box);
        guess_box.appendChild(heading);
        guess_box.appendChild(paragraph);
        setTries(tries-1);
    }else if(tries > 0 && guessPrice == todayPrice){
        const guess_box = document.createElement('div');
        const heading = document.createElement('h1');
        const paragraph = document.createElement('p');
        heading.textContent = 'Correct'
        paragraph.textContent = `$${guessPrice}`;
        guess_box.classList.add('guess-box', 'correct')

        obj.appendChild(guess_box);
        guess_box.appendChild(heading);
        guess_box.appendChild(paragraph);
        setTries(0);
    }
    else{
        if(tries >= 0){
        const guess_box = document.createElement('div');
        const heading = document.createElement('h1');
        const paragraph = document.createElement('p');
        heading.textContent = `$${todayPrice}`
        paragraph.textContent = `Sorry Try Again Tomorrow`;
        guess_box.classList.add('guess-box', 'lost')
        obj.appendChild(guess_box);
        guess_box.appendChild(heading);
        guess_box.appendChild(paragraph);
        }
        setTries(tries-1)
    }
}

    const [guess, setGuess] = useState('')
    return(
        <>
            <title>Pricedle</title>
            <div className='main'>
                <div className='title'>
                    <h1>Food<span>le</span></h1>
                </div>

                <div id='obj'>
                    <img src={milo}/>
                    <div className='input-box'>
                        <input type='number' value={guess} onChange={(e)=> setGuess(e.target.value)}/>
                        <button type='button' onClick={()=>guessPrice(Number(guess))}>Enter</button>
                    </div>
                    {/* <div className='guess-box lower'>
                    </div> */}
                </div>
            </div>

        </>
    );
}
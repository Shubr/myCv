import { useEffect } from 'react';
import '../Games.css';
// import getCat, { CatList } from './hooks/useMeow';
import './hooks/useMeow';



export default function Meow(){
    useEffect(()=>{
        // const container = document.getElementById("main-container")
        // let click = 0;

        async function getCats(){
            // const json = await getCat()
            // const data: CatList = json
            // const urls = data.map(cats=>cats.url)
            // preloadImage(urls)
            // if(container){
            //     // container.addEventListener("click", )
            //     container.addEventListener("click", (e)=>{
            //         if(click >= urls.length) return;
            //         addCat(e.clientX.toString(), e.clientY.toString(), urls[click])
            //         click+=1
            //     })
            // }
            console.log("loading...")
            const tokenRes = await fetch("https://shub.website/meow_token/api/key");
            const {token} = await tokenRes.json()

            const keyRes = await fetch(
                "https://shub.website/meow_token/api/key",{
                    headers:{
                        "X-Site-Token": token
                    }
                }
            )
            const data = await keyRes.json();
            console.log(data)
        }

        getCats();
        
    },[]);
    return(
        <>
            <div className="meow-main-container">
                <div className='header'>
                    <h1>Meow Meow Meow</h1>
                    <p>name all the cats</p>
                </div>
                <div id="main-container">
                </div>
            </div>
        </>
        
    )
}

// function addCat(x:String, y:String, img: string){
//     const main_container = document.getElementById("main-container")
//     const text = document.createElement("img");
//     text.src = img;
//     text.style.position = "absolute"
//     text.className = "cat-image"
//     text.style.left = x+"px"
//     text.style.top = y+"px"
      
//     if(main_container){
//         main_container.appendChild(text)
//     }

// }

// function preloadImage(urls:string[]){
//     urls.forEach(url=>{
//         const img = new Image();
//         img.src = url
//     })
// }
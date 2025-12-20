import { useEffect } from 'react';
import '../Games.css';
import getCat, { CatList } from './hooks/useMeow';
import './hooks/useMeow';



export default function Meow(){
    useEffect(()=>{
        const container = document.getElementById("main-container")
        let click = 0;

        async function getCats(){
            const json = await getCat()
            const data: CatList = json
            const urls = data.map(cats=>cats.url)
            preloadImage(urls)
            if(container){
                // container.addEventListener("click", )
                container.addEventListener("click", (e)=>{
                    if(click >= urls.length) return;
                    addCat(e.clientX.toString(), e.clientY.toString(), urls[click])
                    click+=1
                })
            }

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

function addCat(x:String, y:String, img: string){
    const main_container = document.getElementById("main-container")
    const text = document.createElement("img");
    text.src = img;
    text.style.position = "absolute"
    text.className = "cat-image"
    text.style.left = x+"px"
    text.style.top = y+"px"
      
    if(main_container){
        main_container.appendChild(text)
    }

}

function preloadImage(urls:string[]){
    urls.forEach(url=>{
        const img = new Image();
        img.src = url
    })
}
import React from "react";

interface GameProps{
    text: string;
    background?: string;
    font: string;
}

const GameCard: React.FC<GameProps> = ({text, background, font}) => {
    return(
        <div className="game-card-body" style={{
            width:"300px",
            height:"350px",
            backgroundImage: `url(${background})`,
            backgroundSize:"cover",
            fontFamily: font,
            border: "3px solid white",
            boxSizing: "border-box",
            borderRadius: "20px",
        }}>
            <div className="content" style={{
                width: "100%",
                height: "100%",
                backdropFilter: "blur(10px)",
                borderRadius: "20px",
                display: "flex",
                justifyContent: "center",
                alignItems:"center",
                fontSize: "20px",
                fontFamily: `${font}`,
                textAlign: "center"
            }}>
                {text && <h1 style={{fontFamily: font, letterSpacing: "2px"}}>{text}</h1>}
            </div>
        </div>
    )
}

export default GameCard
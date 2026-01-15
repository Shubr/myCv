import "./Games.css";
import GameCard from "../Components/GameCard";

export default function SGames(){
    return(
        <>
            <div className="game-container">
                <div className="heading">
                    <h1>Mini-Games</h1>
                </div>
                <div className="game-body">
                    <GameCard text="Trivia" background="/assets/game/background/trivia-bg.jpg" font="BagelFat"></GameCard>
                    <GameCard text="Mafia" background="/assets/game/background/mafia-bg.jpg" font="Aclonica"></GameCard>
                    <GameCard text="Guess The Person" background="/assets/game/background/guess-the-person-bg.webp" font="Montserrat"></GameCard>
                    <GameCard text="more coming soon..." background="" font="Montserrat"></GameCard>
                </div>
            </div>
        </>
    )
}



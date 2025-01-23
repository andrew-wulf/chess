import { useRef, useState } from 'react';

import Phaser from 'phaser';
import { PhaserGame } from './game/PhaserGame';
import "./chess.css"



export function Chess()
{   

    // haven't figured this out yet
    const [currentPlayer, setCurrentPlayer] = useState("White");    



    //  References to the PhaserGame component (game and scene are exposed)
    const phaserRef = useRef();


    const changeScene = () => {

        const scene = phaserRef.current.scene;

        if (scene)
        {
            scene.changeScene();
        }
    }


    

    return (
        <div id="page" className='chess'>

            <div id="app">
                <PhaserGame ref={phaserRef} />
            </div>

            <div className='footer'>
                <h6>Refreshing the page will fit the game to your window size.</h6>
                <h6>Piece & audio assets are publicly available, and made by Chess.com!</h6>
            </div>
        </div>
    )
}


{/* <div>
<div>
<button className='button'> Last Move </button>
</div>
<div>
<button className="button" onClick={changeScene}>Restart</button>
</div>
</div>   */}
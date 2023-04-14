import React from 'react'
import { useState } from 'react';
import Score from './Score';
import "./Board.css";
import Box from './Box';

export default function Board() {
    const [board, setBoard] = useState(Array(9).fill(null));
    const [xPlaying, setXPlaying] = useState(true);
    const [xScore, setXScore] = useState(0);
    const [oScore, setOScore] = useState(0);


    const handleClick = (index) => {
        const newBoard = [...board];
        if (xPlaying) {
            newBoard[index] = "X";
        } else {
            newBoard[index] = "O";
        }
        setBoard(newBoard);
        setXPlaying(!xPlaying);

        checkWinner();
    }

    const checkWinner = () => {
        let winner = null;

        const winningLines = [[0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6], [1, 4, 7], [2, 5, 8], [0, 4, 8], [2, 4, 6]]

        for (let i = 0; i < winningLines.length; i++) {
            const [a, b, c] = winningLines[i];
            if (board[a] && board[a] === board[b] && board[a] === board[c]) {
                winner = board[a];
                break;
            }
        }

        if (winner) {
            if (winner === "X") {
                setXScore(xScore + 1);
            } else {
                setOScore(oScore + 1);
            }
            resetGame();
        }
    }

    const resetGame = () => {
        setBoard(Array(9).fill(null));
        setXPlaying(true);
    }

    const restartGame = () => {
        resetGame();
        setXScore(0);
        setOScore(0);
    }

    return (
        <>
            <Score xScore={xScore} oScore={oScore} xPlaying={xPlaying} />

            <div className='board'>
                {board.map((value, index) => {
                    return <Box value={value} onclick={() => !value && handleClick(index)} />
                })}
            </div>

            <div className="buttons">
                <button className='reset' onClick={resetGame}>Reset</button>
                <button className="restart" onClick={restartGame}>Restart</button>
            </div>
        </>
    )
}
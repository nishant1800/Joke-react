import { useState } from "react";

export default function LudoBoard() {
    let [moves, setMoves] = useState({blue: 0, red: 0, yellow: 0, green: 0});
    let [arr, setArr] = useState("no moves");

    let updateBlue = () => {
        // setMoves((preValue) => {
        //     return {...preValue, blue: preValue.blue + 1};
        // });


        setArr((preArr) => {
            return [preArr, "blue moves"];
        });
        console.log(arr);
    };

    
    let updateRed = () => {
        setMoves((preValue) => {
            return {...preValue, red: preValue.red + 1};
        });
    };

    let updateYellow = () => {
        setMoves((preValue) => {
            return {...preValue, yellow: preValue.yellow + 1};
        });
    };

    let updateGreen = () => {
        setMoves((preValue) => {
            return {...preValue, green: preValue.green + 1};
        });
    };

    return (
        <div>
            <p>Game Begins!</p>
            <p>{arr}</p>
            <div className="board">
                <p>Blue moves = {moves.blue} </p>
                <button style={{backgroundColor: "blue"}} onClick={updateBlue} >+1</button>

                <p>Blue moves = {moves.red} </p>
                <button style = {{backgroundColor: "red"}} onClick={updateRed} >+1</button>

                <p>Blue moves = {moves.yellow} </p>
                <button style = {{backgroundColor: "yellow", color: "black"}} onClick={updateYellow} >+1</button>

                <p>Blue moves = {moves.green} </p>
                <button style = {{backgroundColor: "green"}} onClick={updateGreen} >+1</button>
            </div>
        </div>
    );
}
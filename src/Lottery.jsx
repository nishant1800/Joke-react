import { useState } from "react";
import { genTicket} from "./helper";
import Ticket from "./Ticket";

function Lottery({n=3, winCondition}) {
    let [ticket, setTicket] = useState(genTicket(n));
    let isWinning = winCondition(ticket);

    let buyTicket = () => {
        setTicket(genTicket(n));
    }


    return (
        <div>
            <h1>Lottery Game!</h1>
            <div className="ticket">
                <Ticket ticket={ticket} />
            </div>
            <h3> {isWinning && "congratulation, you win!"} </h3>
            <button onClick={buyTicket}>Buy new ticket</button>
        </div>
    );
}

export default Lottery;
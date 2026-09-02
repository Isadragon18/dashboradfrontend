import PartyBtn from "./button";
import "./partycard.css";

function PartyCard() {
    const names =["Clinton", "Geowell", "Multichase", "SMS Joy", "TBD", "Mega Field", "Ulla", "Geowell", "Multichase", "SMS Joy", "TBD", "Mega Field", "Ulla"]
    return (
        <div className="card">
            <p>Responsible Party</p>
            <hr/>
            <div className="btn">
                {names.map((name) => (<PartyBtn key={name} name={name} />))}
            </div>
        </div>
    );
}

export default PartyCard;
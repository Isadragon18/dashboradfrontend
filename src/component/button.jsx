import "./buttom.css";

function PartyBtn({ name, isSelected, onToggle }) {
    return(
        <button 
            type="button"
            className={`party-btn ${isSelected ? "selected" : ""}`}
            onClick={() => onToggle(name)}
        >
            {name}
        </button>
    );
}

export default PartyBtn;
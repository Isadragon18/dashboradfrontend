import "./infotab.css";


function InfoTab({ header, value, unit, sub, subUnit}) {
    return (
        <>
            <span className="header">{header}</span>
            <p></p>
            <span className="value">{value}</span>
            {unit && <span className="unit">{unit}</span>}
            {sub && 
                <>
                    <span className="sub-header">|</span>
                    <span className="value">{sub}</span>
                    <span className="unit">{subUnit}</span>
                </>
            }
        </>
    );
}


export default InfoTab ;
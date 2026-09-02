import InfoTab from './infotab.jsx';
import "./groupinfo.css";
// import readExcelFile from '../backend/datainfo.js';

function GroupInfo() {
    const info_data = [
        { KPI: "Total Rig Hours", values: 2415, unit: "hrs", sub: 100.6, subUnit: "days" },
        { KPI: "Total NPT Hours", values: 359, unit: "hrs", sub: 14.9, subUnit: "days" },
        { KPI: "Overall NPT %", values: 0.14, unit: "%"},
        { KPI: "Total NPT Cost ($)", values: 3895010, unit: "$" },
        { KPI: "Productive Hours", values: 2056, unit: "hrs", sub: 85.6, subUnit: "days" },
        { KPI: "Productive Time (%)", values: 0.85, unit: "%"},
    ];
    // const info_data = readExcelFile("C:\\Users\\isaiah.yusuf\\Desktop\\GG Rada\\EComm\\dashboard\\src\\data\\NTP Sheet.xlsx");
    return (
        <div className="flex-container">
            {info_data.map((item, index) => (
                <div key={index} className="info-tab">
                    <InfoTab 
                        header={item.KPI} 
                        value={item.values} 
                        unit={item.unit} 
                        sub={item.sub} 
                        subUnit={item.subUnit}
                    />
                </div>
            ))}
        </div>
    );
}

export default GroupInfo;
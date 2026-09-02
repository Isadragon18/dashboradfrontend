import "./gridcom.css";

function GridCom({tab1, tab2, tab3, tab4, tab5}) {

    return (
        <div className="charts-grid">
            <div className="contrib-area">
                {tab4}
            </div>
            <div className="trend-area">
                {tab2}
            </div>
            <div className="cost-area">
                {tab1}
            </div>
            <div className="issues-area">
                {tab3}
            </div>
            <div className="phases-area">
                {tab1}
            </div>
        </div>
    );
}

export default GridCom;
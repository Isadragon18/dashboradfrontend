import "./App.css";
import GridCom from './component/gridcom.jsx';
import ContributorTreemap from "./component/party_card.jsx";
import PartyCard from "./component/test.jsx";
import GroupInfo from "./component/groupinfo.jsx";
import IssuesBarChart from "./component/barchart.jsx";
import IssuesBarChartSub from "./component/barchartsub.jsx";
import IssuesLineChart from "./component/linechart.jsx";
import Treemap from "./component/treemap.jsx";

function App() {
  
  return (
    <div className="dashboard">
      <PartyCard />
      <div class="cardgroup">
        <GroupInfo />
        <GridCom
          tab1={<IssuesBarChart/>}
          tab2={<IssuesBarChartSub/>}
          tab3={<IssuesLineChart/>}
          tab4={<Treemap/>}
        />
      </div>
      
    </div>
  );
}

export default App;

import Layout from "./Layout";
import "./App.css";
import DataWheel from "./components/DataWheel";
import DeliveryCard from "./components/DeliveryCard";
import SideBar from "./components/SideBar";
import StatusCountCard from "./components/StatusCountCard";
import { BsFillBasketFill } from "react-icons/bs";
import { GiShipWheel } from "react-icons/gi";
import { AiFillLike } from "react-icons/ai";
import { MdDone } from "react-icons/md";
function App() {
  return (
    <Layout>
      <div className="App">
        <div className="pendingCard">
          <StatusCountCard
            title={"Pending Orders"}
            Count={"202"}
            IconColor={"#8091ac"}
          >
            <BsFillBasketFill />
          </StatusCountCard>
          <StatusCountCard
            title={"Processing order"}
            Count={"99"}
            IconColor={"#faad41"}
          >
            <GiShipWheel />
          </StatusCountCard>
          <StatusCountCard
            title={"Ready to deliver"}
            Count={"263"}
            IconColor={"#2dce8a"}
          >
            <AiFillLike />
          </StatusCountCard>
          <StatusCountCard
            title={"delivered order"}
            Count={"347"}
            IconColor={"#0083ff"}
          >
            <MdDone />
          </StatusCountCard>
        </div>
        <div className={"DeliveryCard"}>
          <DeliveryCard />
        </div>
        <div className={"DataWheel"}>
          <DataWheel />
        </div>
      </div>
    </Layout>
  );
}

export default App;

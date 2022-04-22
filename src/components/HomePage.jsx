import FeaturedInfo from "./FeaturedInfo";
import "./HomePage.css";
import Chart from "./Chart";
import { UserData } from "./Data";
import WidgetSm from "./WidgetSm";
import WidgetLg from "./WidgetLg";
const HomePage = () => {
  return (
    <div className="home">
      <FeaturedInfo />
      <Chart
        data={UserData}
        title="User Analytics"
        grid
        dataKey="Active User"
      />
      <div className="homeWidgets">
        <WidgetSm />
        <WidgetLg />

      </div>
    </div>
  );
};

export default HomePage;

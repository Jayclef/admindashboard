import "./FeaturedInfo.css";
import { ArrowDownward, ArrowUpward } from "@material-ui/icons";

const featuredInfo = () => {
  return (
    <div className="featured">
      <div className="fearturedItem">
        <span className="featureTitle">Revenue</span>
        <div className="featuredMoneyContainer">
          <span className="featuredMoney">$2,415</span>
          <span className="featuredMoneyRate">
            -11.4
            <ArrowDownward className="featuredIcon" />
          </span>
        </div>
        <span className="featuredSub">Compared To LastMouth</span>
      </div>
      <div className="fearturedItem">
        <span className="featureTitle">Sales</span>
        <div className="featuredMoneyContainer">
          <span className="featuredMoney">$2,225</span>
          <span className="featuredMoneyRate">
            -11.4
            <ArrowDownward className="featuredIcon" />
          </span>
        </div>
        <span className="featuredSub">Compared To LastMouth</span>
      </div>
      <div className="fearturedItem">
        <span className="featureTitle">Cost</span>
        <div className="featuredMoneyContainer">
          <span className="featuredMoney">$2,415</span>
          <span className="featuredMoneyRate">
            4.4
            <ArrowUpward className="featuredIcon-Positive" />
          </span>
        </div>
        <span className="featuredSub">Compared To LastMouth</span>
      </div>
    </div>
  );
};

export default featuredInfo;

import React, { useState, useEffect } from "react";
import {
  Description,
  Graph,
  ScoreCard,
  Title,
  ToggleSwitch,
} from "../../components";
import { IoIosPeople, IoIosRepeat } from "react-icons/io";
import { MdRateReview } from "react-icons/md";
import { DAY_GRAPH_API, TIME_GRAPH_API } from "../../helpers/Constants";
import { useDispatch, useSelector } from "react-redux";
import Dropdown, { MenuItem } from "@trendmicro/react-dropdown";

// Be sure to include styles at some point, probably during your bootstraping
import "@trendmicro/react-buttons/dist/react-buttons.css";
import "@trendmicro/react-dropdown/dist/react-dropdown.css";

import "./guestAnalysis.css";
import { dateViewAction } from "../../redux/actions";
import {DateView} from "../../containers";

function GuestAnalysis() {
  const isToken = useSelector((state) => state.isToken);
  const isDateView = useSelector((state) => state.isDateView);
  const dispatch = useDispatch();

  const [dayData, setDayData] = useState(null);
  const [timeData, setTimeData] = useState(null);

  const [isToggle, setIsToggle] = useState(false);
  const [isDropdown, setIsDropdown] = useState("This Week");

  const handleChange = (event) => {
    setIsToggle(!isToggle);
  };

  const fetchDayGraphData = async () => {
    try {
      const response = await fetch(DAY_GRAPH_API, {
        headers: {
          Authorization:
            `Token ${localStorage.getItem("saveToken")}` || `Token ${isToken}`,
        },
      });
      const json = await response.json();

      const data = json.map(({ date, users }) => {
        return {
          name: date,
          guests: users,
        };
      });

      setDayData(data);
    } catch (error) {
      console.log("error", error);
    }
  };

  const fetchTimeGraphData = async () => {
    try {
      const response = await fetch(TIME_GRAPH_API, {
        headers: {
          Authorization:
            `Token ${localStorage.getItem("saveToken")}` || `Token ${isToken}`,
        },
      });
      const json = await response.json();

      const data = json.map(({ hour, users }) => {
        return {
          name: hour,
          guests: users,
        };
      });

      setTimeData(data);
    } catch (error) {
      console.log("error", error);
    }
  };

  
  useEffect(() => {
    fetchDayGraphData();
    fetchTimeGraphData();
    // eslint-disable-next-line
  },[]);

  return (
    <div className="bguest__guestAnalysis">
    {isDateView ? <DateView/> : null}
      <Title firstLineText="Guest Analysis" fontSize="2em" />
      <Description text="Today's Overview" />
      <div className="bguest__guestAnalysis-score-cards">
        <div className="score-card">
          <ScoreCard
            width="250px"
            src={<IoIosPeople />}
            text="Total Guests"
            score="158"
          />
        </div>
        <div className="score-card">
          <ScoreCard
            width="250px"
            src={<IoIosRepeat />}
            text="Repeating Guests"
            score="5"
          />
        </div>
        <div className="score-card">
          <ScoreCard
            width="250px"
            src={<MdRateReview />}
            text="Total Reviews"
            score="11"
          />
        </div>
      </div>

      <div className="bguest__guestAnalysis-graph">
        <div className="bguest__guestAnalysis-graph-banner">
          <div className="bguest__guestAnalysis-graph-banner-title-dropdown">
          <Title firstLineText="Guest Visiting Chart" fontSize="2em" />
          <div className="bguest__guestAnalysis-graph-banner-dropdown">
            <Dropdown autoOpen={true} onSelect={(eventKey) => {}}>
              <Dropdown.Toggle title={isDropdown} style={{color:"#e24444", borderColor:"#e24444"}}/>
              <Dropdown.MenuWrapper>
                <Dropdown.Menu>
                <MenuItem
                    eventKey={1}
                    onSelect={(eventKey) => {
                      setIsDropdown("This Week");
                    }}
                  >
                    This Week
                  </MenuItem>
                  <MenuItem
                    eventKey={2}
                    onSelect={(eventKey) => {
                      setIsDropdown("Last Quarter");
                    }}
                  >
                    Last Quarter
                  </MenuItem>
                  <MenuItem
                    eventKey={3}
                    onSelect={(eventKey) => {
                      setIsDropdown("Last Month");
                    }}
                  >
                    Last Month
                  </MenuItem>
                  <MenuItem
                    eventKey={4}
                    onSelect={(eventKey) => {
                      setIsDropdown("Last Year");
                    }}
                  >
                    Last Year
                  </MenuItem>
                  <MenuItem
                    eventKey={5}
                    onSelect={(eventKey) => {
                      setIsDropdown("Custom");
                      dispatch(dateViewAction(true));
                    }}
                  >
                    Custom
                  </MenuItem>
                </Dropdown.Menu>
              </Dropdown.MenuWrapper>
            </Dropdown>
            </div>
          </div>
          <div className="bguest__guestAnalysis-graph-banner-toggle">
            <Description text="Time" />
            <ToggleSwitch checked={isToggle} onChange={handleChange} />
          </div>
        </div>
        <Graph
          width={1300}
          height={500}
          data={isToggle ? timeData : dayData}
          xKey="name"
          yKey="guests"
        />
      </div>
    </div>
  );
}

export default GuestAnalysis;

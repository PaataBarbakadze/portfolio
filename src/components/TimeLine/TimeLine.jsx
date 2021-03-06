import "./TimeLine.css";

import TimelineElements from "./TimeLineElements";
import SectionDivider from "../../helpers/SectionDivider/SectionDivider";

import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";

import "react-vertical-timeline-component/style.min.css";
import React from "react";

function App() {
  return (
    <React.Fragment>
      <div id="timeline">
        <h1 className="title">Timeline</h1>
        <VerticalTimeline>
          {TimelineElements.map((element) => {

            return (
              <VerticalTimelineElement
                key={element.id}
                date={element.date}
                dateClassName="date"
              >
                <h3 className="timeLine-background">{element.title}</h3>
                <h5 className="timeLine-background">{element.location}</h5>
                <p id="description" className="para">
                  {element.description}
                </p>
              </VerticalTimelineElement>
            );
          })}
        </VerticalTimeline>
      </div>
      <SectionDivider></SectionDivider>
    </React.Fragment>
  );
}

export default App;

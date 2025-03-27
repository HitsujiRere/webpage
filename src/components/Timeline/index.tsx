import {
  CheckCircle,
  Circle,
  PersonSimpleRun,
} from "@phosphor-icons/react/dist/ssr";
import React from "react";
import type CSS from "csstype";

export type Event = {
  time: string;
  title: string;
  isPast?: boolean;
};

export type TimelineProps = {
  events: Event[];
};

export const Timeline = React.memo(({ events }: TimelineProps) => {
  const listStyle: CSS.Properties = {
    "--timeline-col-start": "4rem",
  };

  return (
    <ul className="timeline @max-4xl:timeline-vertical justify-center">
      {events.map((event, index) => (
        <li key={event.time} style={listStyle}>
          {index > 0 && <hr />}
          <div className="timeline-start">{event.time}</div>
          <div className="timeline-middle">
            {event.isPast === true || event.isPast === undefined ? (
              <CheckCircle weight="fill" />
            ) : (
              <Circle />
            )}
          </div>
          <div className="timeline-end timeline-box">{event.title}</div>
          <hr />
        </li>
      ))}
      <li style={listStyle}>
        <hr />
        <div className="timeline-start">
          <PersonSimpleRun className="h-6 w-6 @max-4xl:rotate-y-180" />
        </div>
        <div className="timeline-middle">
          <CheckCircle weight="fill" className="invisible" />
        </div>
      </li>
    </ul>
  );
});

import React from "react";
import { PiCheckCircleFill, PiCircle, PiPersonSimpleRun } from "react-icons/pi";

export type Event = {
  time: string;
  title: string;
  isPast?: boolean;
};

export type TimelineProps = {
  events: Event[];
};

export const Timeline = React.memo(({ events }: TimelineProps) => {
  return (
    <ul className="timeline @max-4xl:timeline-vertical justify-center @max-4xl:[--timeline-col-start:4rem]">
      {events.map((event, index) => (
        <li key={event.time}>
          {index > 0 && <hr />}
          <div className="timeline-start">{event.time}</div>
          <div className="timeline-middle">
            {event.isPast === true || event.isPast === undefined ? (
              <PiCheckCircleFill />
            ) : (
              <PiCircle />
            )}
          </div>
          <div className="timeline-end timeline-box">{event.title}</div>
          <hr />
        </li>
      ))}
      <li>
        <hr />
        <div className="timeline-start">
          <PiPersonSimpleRun className="h-6 w-6 @max-4xl:rotate-y-180" />
        </div>
        <div className="timeline-middle">
          <PiCheckCircleFill className="invisible" />
        </div>
      </li>
    </ul>
  );
});

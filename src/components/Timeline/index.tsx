import { PiCheckCircleFill, PiCircle, PiPersonSimpleRun } from "react-icons/pi";

export type Event = {
  time: string;
  title: string;
  isPast?: boolean;
};

export type TimelineProps = {
  events: Event[];
};

export const Timeline = ({ events }: TimelineProps) => {
  return (
    <ul className="timeline @max-2xl:timeline-vertical justify-center @max-2xl:[--timeline-col-start:4rem]">
      {/* <ul className="timeline justify-center"> */}
      {events.map((event, index) => (
        <li key={event.time}>
          {index > 0 && <hr />}
          <div className="timeline-start text-base">{event.time}</div>
          <div className="timeline-middle">
            {event.isPast === true || event.isPast === undefined ? (
              <PiCheckCircleFill className="text-base" />
            ) : (
              <PiCircle className="text-base" />
            )}
          </div>
          <div className="timeline-end timeline-box text-base">
            {event.title}
          </div>
          <hr />
        </li>
      ))}
      <li>
        <hr />
        <div className="timeline-start">
          <PiPersonSimpleRun className="h-6 w-6 @max-2xl:rotate-y-180" />
        </div>
        <div className="timeline-middle">
          <PiCheckCircleFill className="invisible" />
        </div>
      </li>
    </ul>
  );
};

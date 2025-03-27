import classNames from "classnames";

export type GridListProps = {
  contents: string[][];
  gridClassName?: string;
};

export const GridList = ({ contents, gridClassName }: GridListProps) => {
  return (
    <ul className="list-disc space-y-1 pl-5">
      {contents.map((content) => (
        <li key={content[0]}>
          <div className={classNames("grid", gridClassName)}>
            {content.map((x) => (
              <span key={x}>{x}</span>
            ))}
          </div>
        </li>
      ))}
    </ul>
  );
};

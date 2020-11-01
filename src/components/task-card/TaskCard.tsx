import React from "react";
import styles from "./TaskCard.module.scss";
import { Task } from "../../classes/task-scheduler/taskSchedulerUtils";

interface Props {
  task: Task;
}

/**
 * task card is the visual representation of a task itself
 */
export default function TaskCard(props: Props): JSX.Element {
  const { task } = props;
  const { name, laneIndex, id, startDateIndex, endDateIndex } = task;
  const taskRow = laneIndex + 1;
  const startColumn = startDateIndex + 1;
  const endColumn = endDateIndex + 1;

  return (
    <div
      key={id}
      className={styles.task}
      style={{
        gridRow: `${taskRow}`,
        gridColumnStart: `${startColumn}`,
        gridColumnEnd: `${endColumn}`
      }}
    >
      {name}
    </div>
  );
}
import React from "react";
import { STARTING_TASKS } from "../timeline-data";
import TaskScheduler from "../../classes/task-scheduler/TaskScheduler";
import {
  Task,
  DateRange
} from "../../classes/task-scheduler/taskSchedulerUtils";
import { getNSequentialDays } from "../../utils/dateUtils";
import TimelineGrid from "../timeline-grid/TimelineGrid";

interface State {
  tasks: Task[];
  dateRange: DateRange;
}

export default class TimelineContainer extends React.Component<{}, State> {
  private scheduler: TaskScheduler | undefined;

  constructor(props: {}) {
    super(props);

    this.scheduler = undefined;

    this.state = {
      tasks: [],
      dateRange: {
        startDate: undefined,
        endDate: undefined,
        totalDays: undefined
      }
    };
  }

  componentDidMount(): void {
    this.fetchTasks();
  }

  /**
   * in a real task with a backend this would be an api call
   */
  fetchTasks(): void {
    const rawTasks = Array.from(STARTING_TASKS);

    this.scheduler = new TaskScheduler(rawTasks);

    this.setState({
      tasks: this.scheduler.tasks,
      dateRange: this.scheduler.dateRange
    });
  }

  render(): JSX.Element {
    const { tasks, dateRange } = this.state;
    const { startDate, totalDays } = dateRange;
    const columnDates = getNSequentialDays(startDate, totalDays);

    return (
      <TimelineGrid
        tasks={tasks}
        columnDates={columnDates}
        columnCount={totalDays || 0}
      />
    );
  }
}

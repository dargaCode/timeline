import { RawTaskInput, ScheduledTask, Lane } from "./taskSchedulerUtils";

/* initializing scheduler with starting tasks */

// starting task inputs to pass to the scheduler constructor
export const STARTING_TASK_INPUTS_UNSORTED: RawTaskInput[] = [
  {
    start: "2018-01-01",
    end: "2018-01-05",
    name: "First item"
  },
  {
    start: "2018-01-02",
    end: "2018-01-08",
    name: "Second item"
  },
  {
    start: "2018-01-06",
    end: "2018-01-13",
    name: "Another item"
  },
  {
    start: "2018-01-14",
    end: "2018-01-14",
    name: "Another item"
  },
  {
    start: "2018-02-01",
    end: "2018-02-15",
    name: "Third item"
  },
  {
    start: "2018-01-12",
    end: "2018-02-16",
    name: "Fourth item with a super long name"
  },
  {
    start: "2018-02-01",
    end: "2018-02-02",
    name: "Fifth item with a super long name"
  },
  {
    start: "2018-01-03",
    end: "2018-01-05",
    name: "First item"
  },
  {
    start: "2018-01-04",
    end: "2018-01-08",
    name: "Second item"
  },
  {
    start: "2018-01-06",
    end: "2018-01-13",
    name: "Another item"
  },
  {
    start: "2018-01-09",
    end: "2018-01-09",
    name: "Another item"
  },
  {
    start: "2018-02-01",
    end: "2018-02-15",
    name: "Third item"
  },
  {
    start: "2018-01-12",
    end: "2018-02-16",
    name: "Fourth item with a super long name"
  },
  {
    start: "2018-02-01",
    end: "2018-02-02",
    name: "Fifth item with a super long name"
  }
];

// the starting tasks after they've been created and scheduled
export const STARTING_TASKS_SCHEDULED: ScheduledTask[] = [
  {
    id: 1,
    start: "2018-01-01",
    end: "2018-01-05",
    name: "First item",
    sortIndex: 0,
    laneIndex: 0
  },
  {
    id: 2,
    start: "2018-01-02",
    end: "2018-01-08",
    name: "Second item",
    sortIndex: 1,
    laneIndex: 1
  },
  {
    id: 3,
    start: "2018-01-06",
    end: "2018-01-13",
    name: "Another item",
    sortIndex: 4,
    laneIndex: 0
  },
  {
    id: 4,
    start: "2018-01-14",
    end: "2018-01-14",
    name: "Another item",
    sortIndex: 9,
    laneIndex: 0
  },
  {
    id: 5,
    start: "2018-02-01",
    end: "2018-02-15",
    name: "Third item",
    sortIndex: 12,
    laneIndex: 4
  },
  {
    id: 6,
    start: "2018-01-12",
    end: "2018-02-16",
    name: "Fourth item with a super long name",
    sortIndex: 7,
    laneIndex: 1
  },
  {
    id: 7,
    start: "2018-02-01",
    end: "2018-02-02",
    name: "Fifth item with a super long name",
    sortIndex: 10,
    laneIndex: 0
  },
  {
    id: 8,
    start: "2018-01-03",
    end: "2018-01-05",
    name: "First item",
    sortIndex: 2,
    laneIndex: 3
  },
  {
    id: 9,
    start: "2018-01-04",
    end: "2018-01-08",
    name: "Second item",
    sortIndex: 3,
    laneIndex: 3
  },
  {
    id: 10,
    start: "2018-01-06",
    end: "2018-01-13",
    name: "Another item",
    sortIndex: 5,
    laneIndex: 2
  },
  {
    id: 11,
    start: "2018-01-09",
    end: "2018-01-09",
    name: "Another item",
    sortIndex: 6,
    laneIndex: 1
  },
  {
    id: 12,
    start: "2018-02-01",
    end: "2018-02-15",
    name: "Third item",
    sortIndex: 13,
    laneIndex: 5
  },
  {
    id: 13,
    start: "2018-01-12",
    end: "2018-02-16",
    name: "Fourth item with a super long name",
    sortIndex: 8,
    laneIndex: 3
  },
  {
    id: 14,
    start: "2018-02-01",
    end: "2018-02-02",
    name: "Fifth item with a super long name",
    sortIndex: 11,
    laneIndex: 2
  }
];

export const STARTING_TASK_LANES: Lane[] = [
  { nextFreeSlot: "2018-02-03" },
  { nextFreeSlot: "2018-02-17" },
  { nextFreeSlot: "2018-02-03" },
  { nextFreeSlot: "2018-02-17" },
  { nextFreeSlot: "2018-02-16" },
  { nextFreeSlot: "2018-02-16" }
];

/* adding new tasks */

// input to pass to .add()
export const ADD_TASK_INPUT_NO_NEW_LANE: RawTaskInput = {
  name: "task that fits within existing lanes",
  start: "2018-01-18",
  end: "2018-01-24"
};

// input to pass to .add()
export const ADD_TASK_INPUT_NEW_LANE: RawTaskInput = {
  name: "task that requires a new lane",
  start: "2018-01-31",
  end: "2018-02-01"
};

// the resultant scheduled task from `ADD_TASK_INPUT_NEW_LANE`
export const SCHEDULED_TASK_NEW_LANE: ScheduledTask = {
  id: 15,
  name: "task that requires a new lane",
  start: "2018-01-31",
  end: "2018-02-01",
  sortIndex: 10,
  laneIndex: 0
};

// a more space-efficient way to verify sort and lanes
// shouldn't be used outside of test, so leaving it in mocks vs utils
export interface ScheduleSummary {
  [key: number]: {
    sortIndex: number;
    laneIndex: number;
  };
}

// resultant scheduling after adding `ADD_TASK_INPUT_NEW_LANE`
export const SCHEDULE_SUMMARY_NEW_LANE: ScheduleSummary = {
  1: {
    sortIndex: 0,
    laneIndex: 0
  },
  2: {
    sortIndex: 1,
    laneIndex: 1
  },
  3: {
    sortIndex: 4,
    laneIndex: 0
  },
  4: {
    sortIndex: 9,
    laneIndex: 0
  },
  5: {
    sortIndex: 13,
    laneIndex: 5
  },
  6: {
    sortIndex: 7,
    laneIndex: 1
  },
  7: {
    sortIndex: 11,
    laneIndex: 2
  },
  8: {
    sortIndex: 2,
    laneIndex: 3
  },
  9: {
    sortIndex: 3,
    laneIndex: 3
  },
  10: {
    sortIndex: 5,
    laneIndex: 2
  },
  11: {
    sortIndex: 6,
    laneIndex: 1
  },
  12: {
    sortIndex: 14,
    laneIndex: 6
  },
  13: {
    sortIndex: 8,
    laneIndex: 3
  },
  14: {
    sortIndex: 12,
    laneIndex: 4
  },
  15: {
    sortIndex: 10,
    laneIndex: 0
  }
};

// resultant lanes after adding `ADD_TASK_INPUT_NEW_LANE`
export const ADD_TASK_INCREASED_LANES: Lane[] = [
  { nextFreeSlot: "2018-02-02" },
  { nextFreeSlot: "2018-02-17" },
  { nextFreeSlot: "2018-02-03" },
  { nextFreeSlot: "2018-02-17" },
  { nextFreeSlot: "2018-02-03" },
  { nextFreeSlot: "2018-02-16" },
  { nextFreeSlot: "2018-02-16" }
];

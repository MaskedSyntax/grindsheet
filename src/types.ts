export type Difficulty = "Easy" | "Medium" | "Hard";

export interface Task {
  /**
   * Stable, hand-written identifier. Progress in localStorage is keyed on this
   * string, so it must never change once shipped — reword the `label` freely,
   * but treat the `id` as permanent. Never derive it from array position.
   */
  id: string;
  label: string;
  url: string;
  difficulty?: Difficulty;
  /** Shown under the label for the handful of items that need a caveat. */
  note?: string;
}

export interface Group {
  title: string;
  blurb?: string;
  tasks: Task[];
  /** Collapsed on first paint. Used for the long LeetCode pattern lists. */
  collapsed?: boolean;
}

export interface Phase {
  id: string;
  number: number;
  title: string;
  blurb: string;
  groups: Group[];
}

export const phaseTasks = (phase: Phase): Task[] =>
  phase.groups.flatMap((group) => group.tasks);

/**
 * Fails the build if any id is reused. A duplicate would silently tie two
 * unrelated checkboxes together, so it is worth blowing up over.
 */
export function assertUniqueIds(phases: Phase[]): Phase[] {
  const seen = new Set<string>();
  for (const phase of phases) {
    for (const task of phaseTasks(phase)) {
      if (seen.has(task.id)) {
        throw new Error(`Duplicate task id: "${task.id}"`);
      }
      seen.add(task.id);
    }
  }
  return phases;
}

import { allTasks } from "./roadmap";

/**
 * The Application Gate is not its own checklist — that would mean ticking the
 * same work twice. It is a view over task ids that already live in the phases,
 * so completing a phase item advances the gate automatically.
 */
export interface GateRequirement {
  label: string;
  /** Satisfied when every listed task id is done. */
  taskIds: string[];
  /** Or, for the LeetCode line, when at least this many of them are done. */
  atLeast?: number;
}

const leetCodeProblemIds = allTasks
  .filter((task) => task.id.startsWith("lc-") && !task.id.startsWith("lc-gate-"))
  .map((task) => task.id);

export const gateRequirements: GateRequirement[] = [
  { label: "Sean Allen's Swift course finished", taskIds: ["course-sean-swift"] },
  { label: "Sean Allen's SwiftUI course finished", taskIds: ["course-sean-swiftui"] },
  { label: "Sean Allen's UIKit / take-home course finished", taskIds: ["course-sean-takehome"] },
  {
    label: "One portfolio app finished and on GitHub",
    taskIds: ["p1-readme", "p1-unit-tests", "p1-empty-error-states"],
  },
  {
    label: "URLSession and Codable understood",
    taskIds: ["net-urlsession", "net-codable", "net-build-request"],
  },
  { label: "SwiftData basics understood", taskIds: ["persist-swiftdata-model"] },
  { label: "Unit testing understood", taskIds: ["test-business-logic"] },
  { label: "35 of the 75 LeetCode problems solved", taskIds: leetCodeProblemIds, atLeast: 35 },
  { label: "GitHub profile polished", taskIds: ["gh-pin-repos", "gh-clean-builds"] },
  { label: "One-page résumé ready", taskIds: ["resume-one-page", "resume-links"] },
];

// Fails the build if a requirement points at a task id that no longer exists.
const knownIds = new Set(allTasks.map((task) => task.id));
for (const requirement of gateRequirements) {
  for (const id of requirement.taskIds) {
    if (!knownIds.has(id)) {
      throw new Error(`Gate requirement "${requirement.label}" references unknown task id "${id}"`);
    }
  }
}

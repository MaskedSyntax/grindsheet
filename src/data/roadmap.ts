import { assertUniqueIds, phaseTasks, type Phase, type Task } from "../types";
import { phase1, phase2, phase3 } from "./phases/foundations";
import { phase4, phase5 } from "./phases/craft";
import { phase6, phase7 } from "./phases/portfolio";
import { phase8, phase10, phase11 } from "./phases/career";
import { phase9 } from "./leetcode";

export const phases: Phase[] = assertUniqueIds([
  phase1,
  phase2,
  phase3,
  phase4,
  phase5,
  phase6,
  phase7,
  phase8,
  phase9,
  phase10,
  phase11,
]);

export const allTasks: Task[] = phases.flatMap(phaseTasks);
export const totalTasks = allTasks.length;

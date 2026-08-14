import type { Phase } from "../../types";

const RESUME_GUIDE =
  "https://careerservices.fas.harvard.edu/resources/create-a-resume-cv-or-cover-letter/";

export const phase8: Phase = {
  id: "git-github",
  number: 8,
  title: "Git and GitHub",
  blurb:
    "Your GitHub is the portfolio. Do this early — every project above should be committed as you go, not dumped at the end.",
  groups: [
    {
      title: "Git",
      tasks: [
        {
          id: "git-basics",
          label: "The daily loop: clone, add, commit, push, pull",
          url: "https://git-scm.com/book/en/v2/Getting-Started-Git-Basics",
        },
        {
          id: "git-branching-merging",
          label: "Branching and merging",
          url: "https://git-scm.com/book/en/v2/Git-Branching-Branches-in-a-Nutshell",
        },
        { id: "git-rebase", label: "Rebase, at least enough to not fear it", url: "https://git-scm.com/docs/git-rebase" },
        {
          id: "git-pull-request",
          label: "Open a pull request and merge it",
          url: "https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/about-pull-requests",
        },
        {
          id: "git-merge-conflict",
          label: "Cause a merge conflict on purpose and resolve it",
          url: "https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/addressing-merge-conflicts",
          note: "Far better to meet your first conflict alone than on day two of a job.",
        },
      ],
    },
    {
      title: "Profile",
      tasks: [
        {
          id: "gh-pin-repos",
          label: "Pin your strongest iOS repositories",
          url: "https://docs.github.com/en/account-and-profile/how-tos/setting-up-and-managing-your-github-profile/customizing-your-profile",
        },
        {
          id: "gh-screenshots",
          label: "Put screenshots or demo GIFs at the top of every portfolio README",
          url: "https://docs.github.com/en/repositories/working-with-files/using-files/working-with-non-code-files",
        },
        {
          id: "gh-clean-builds",
          label: "Clone each public repo fresh and confirm it still builds",
          url: "https://docs.github.com/en/repositories",
          note: "A pinned repo that does not compile is worse than no pinned repo.",
        },
      ],
    },
  ],
};

export const phase10: Phase = {
  id: "resume-interview",
  number: 10,
  title: "Résumé and Interview Prep",
  blurb:
    "Knowing the material and being able to say it out loud under pressure are different skills. Practise the second one.",
  groups: [
    {
      title: "Résumé",
      tasks: [
        { id: "resume-one-page", label: "Write a one-page, iOS-focused résumé", url: RESUME_GUIDE },
        {
          id: "resume-honest-skills",
          label: "List a skill only if you can be questioned on it for ten minutes",
          url: RESUME_GUIDE,
        },
        {
          id: "resume-outcomes",
          label: "Describe projects by engineering outcomes, not feature dumps",
          url: RESUME_GUIDE,
        },
        { id: "resume-links", label: "Link your GitHub and your two portfolio apps", url: "https://docs.github.com/en/account-and-profile" },
      ],
    },
    {
      title: "Saying it out loud",
      tasks: [
        {
          id: "interview-explain-architecture",
          label: "Explain each portfolio app's architecture out loud in under five minutes",
          url: "https://developer.apple.com/documentation/swiftui/managing-model-data-in-your-app",
          note: "Record yourself. It is uncomfortable and it works.",
        },
        {
          id: "interview-mock",
          label: "Do one full mock interview — Swift questions plus a live coding problem",
          url: "https://www.pramp.com/",
        },
        {
          id: "interview-gap-notes",
          label: "Keep one document of every question you fumbled, and answer them properly",
          url: "https://docs.google.com/document/",
        },
      ],
    },
  ],
};

export const phase11: Phase = {
  id: "apply",
  number: 11,
  title: "Apply",
  blurb:
    "Start the moment the Application Gate clears, and keep building while you do. Interviews tell you what to study next better than any roadmap can.",
  groups: [
    {
      title: "Where to look",
      tasks: [
        {
          id: "apply-linkedin",
          label: "Set up LinkedIn alerts for Junior iOS, iOS, and Swift Developer",
          url: "https://www.linkedin.com/jobs/search/?keywords=Junior%20iOS%20Developer",
        },
        { id: "apply-indeed", label: "Search Indeed for iOS Developer roles", url: "https://www.indeed.com/jobs?q=iOS+Developer" },
        { id: "apply-wellfound", label: "Search Wellfound for iOS roles at startups", url: "https://wellfound.com/jobs" },
        { id: "apply-apple", label: "Search Apple's own job board", url: "https://jobs.apple.com/" },
      ],
    },
    {
      title: "How to run it",
      tasks: [
        {
          id: "apply-stretch-roles",
          label: "Apply to roles asking for a bit more experience than you have",
          url: "https://www.linkedin.com/jobs/",
          note: "Listed requirements are a wish list, not a filter.",
        },
        {
          id: "apply-tracker",
          label: "Set up an application tracker and log every single application",
          url: "https://docs.google.com/spreadsheets/",
        },
        {
          id: "apply-debrief",
          label: "Write a debrief after every interview, while it is still fresh",
          url: "https://docs.google.com/document/",
        },
        {
          id: "apply-close-gaps",
          label: "Pick your next study topic from what interviews exposed, not from this list",
          url: "https://developer.apple.com/documentation/",
        },
      ],
    },
  ],
};

import type { Difficulty, Phase, Task } from "../types";

/**
 * Builds a task from the LeetCode slug. The slug is permanent on LeetCode's
 * side, so `lc-<slug>` is a stable progress key — unlike a list position.
 */
const lc = (slug: string, label: string, difficulty: Difficulty): Task => ({
  id: `lc-${slug}`,
  label,
  url: `https://leetcode.com/problems/${slug}/`,
  difficulty,
});

export const phase9: Phase = {
  id: "leetcode-75",
  number: 9,
  title: "LeetCode 75",
  blurb:
    "Seventy-five problems covering every pattern that shows up in an iOS interview loop. Solve them in Swift — that is the language you will be asked to code in. Attempt each one cold first, then study the pattern, then re-solve it later from scratch.",
  groups: [
    {
      title: "Arrays and Hashing",
      collapsed: true,
      tasks: [
        lc("two-sum", "Two Sum", "Easy"),
        lc("best-time-to-buy-and-sell-stock", "Best Time to Buy and Sell Stock", "Easy"),
        lc("contains-duplicate", "Contains Duplicate", "Easy"),
        lc("product-of-array-except-self", "Product of Array Except Self", "Medium"),
        lc("maximum-subarray", "Maximum Subarray", "Medium"),
        lc("maximum-product-subarray", "Maximum Product Subarray", "Medium"),
        lc("find-minimum-in-rotated-sorted-array", "Find Minimum in Rotated Sorted Array", "Medium"),
        lc("search-in-rotated-sorted-array", "Search in Rotated Sorted Array", "Medium"),
        lc("3sum", "3Sum", "Medium"),
        lc("container-with-most-water", "Container With Most Water", "Medium"),
      ],
    },
    {
      title: "Bit Manipulation",
      collapsed: true,
      tasks: [
        lc("sum-of-two-integers", "Sum of Two Integers", "Medium"),
        lc("number-of-1-bits", "Number of 1 Bits", "Easy"),
        lc("counting-bits", "Counting Bits", "Easy"),
        lc("missing-number", "Missing Number", "Easy"),
        lc("reverse-bits", "Reverse Bits", "Easy"),
      ],
    },
    {
      title: "Dynamic Programming",
      collapsed: true,
      tasks: [
        lc("climbing-stairs", "Climbing Stairs", "Easy"),
        lc("coin-change", "Coin Change", "Medium"),
        lc("longest-increasing-subsequence", "Longest Increasing Subsequence", "Medium"),
        lc("longest-common-subsequence", "Longest Common Subsequence", "Medium"),
        lc("word-break", "Word Break", "Medium"),
        lc("combination-sum-iv", "Combination Sum IV", "Medium"),
        lc("house-robber", "House Robber", "Medium"),
        lc("house-robber-ii", "House Robber II", "Medium"),
        lc("decode-ways", "Decode Ways", "Medium"),
        lc("unique-paths", "Unique Paths", "Medium"),
        lc("jump-game", "Jump Game", "Medium"),
      ],
    },
    {
      title: "Graphs",
      collapsed: true,
      tasks: [
        lc("clone-graph", "Clone Graph", "Medium"),
        lc("course-schedule", "Course Schedule", "Medium"),
        lc("pacific-atlantic-water-flow", "Pacific Atlantic Water Flow", "Medium"),
        lc("number-of-islands", "Number of Islands", "Medium"),
        lc("longest-consecutive-sequence", "Longest Consecutive Sequence", "Medium"),
        lc("rotting-oranges", "Rotting Oranges", "Medium"),
        lc("is-graph-bipartite", "Is Graph Bipartite?", "Medium"),
        lc("redundant-connection", "Redundant Connection", "Medium"),
      ],
    },
    {
      title: "Intervals",
      collapsed: true,
      tasks: [
        lc("insert-interval", "Insert Interval", "Medium"),
        lc("merge-intervals", "Merge Intervals", "Medium"),
        lc("non-overlapping-intervals", "Non-overlapping Intervals", "Medium"),
        lc("minimum-number-of-arrows-to-burst-balloons", "Minimum Number of Arrows to Burst Balloons", "Medium"),
        lc("interval-list-intersections", "Interval List Intersections", "Medium"),
      ],
    },
    {
      title: "Linked Lists",
      collapsed: true,
      tasks: [
        lc("reverse-linked-list", "Reverse Linked List", "Easy"),
        lc("linked-list-cycle", "Linked List Cycle", "Easy"),
        lc("merge-two-sorted-lists", "Merge Two Sorted Lists", "Easy"),
        lc("merge-k-sorted-lists", "Merge k Sorted Lists", "Hard"),
        lc("remove-nth-node-from-end-of-list", "Remove Nth Node From End of List", "Medium"),
        lc("reorder-list", "Reorder List", "Medium"),
      ],
    },
    {
      title: "Matrix and Backtracking",
      collapsed: true,
      tasks: [
        lc("set-matrix-zeroes", "Set Matrix Zeroes", "Medium"),
        lc("spiral-matrix", "Spiral Matrix", "Medium"),
        lc("rotate-image", "Rotate Image", "Medium"),
        lc("word-search", "Word Search", "Medium"),
      ],
    },
    {
      title: "Strings",
      collapsed: true,
      tasks: [
        lc("longest-substring-without-repeating-characters", "Longest Substring Without Repeating Characters", "Medium"),
        lc("longest-repeating-character-replacement", "Longest Repeating Character Replacement", "Medium"),
        lc("minimum-window-substring", "Minimum Window Substring", "Hard"),
        lc("valid-anagram", "Valid Anagram", "Easy"),
        lc("group-anagrams", "Group Anagrams", "Medium"),
        lc("valid-parentheses", "Valid Parentheses", "Easy"),
        lc("valid-palindrome", "Valid Palindrome", "Easy"),
        lc("longest-palindromic-substring", "Longest Palindromic Substring", "Medium"),
        lc("palindromic-substrings", "Palindromic Substrings", "Medium"),
      ],
    },
    {
      title: "Trees and Tries",
      collapsed: true,
      tasks: [
        lc("maximum-depth-of-binary-tree", "Maximum Depth of Binary Tree", "Easy"),
        lc("same-tree", "Same Tree", "Easy"),
        lc("invert-binary-tree", "Invert Binary Tree", "Easy"),
        lc("binary-tree-maximum-path-sum", "Binary Tree Maximum Path Sum", "Hard"),
        lc("binary-tree-level-order-traversal", "Binary Tree Level Order Traversal", "Medium"),
        lc("serialize-and-deserialize-binary-tree", "Serialize and Deserialize Binary Tree", "Hard"),
        lc("subtree-of-another-tree", "Subtree of Another Tree", "Easy"),
        lc("construct-binary-tree-from-preorder-and-inorder-traversal", "Construct Binary Tree from Preorder and Inorder Traversal", "Medium"),
        lc("validate-binary-search-tree", "Validate Binary Search Tree", "Medium"),
        lc("kth-smallest-element-in-a-bst", "Kth Smallest Element in a BST", "Medium"),
        lc("lowest-common-ancestor-of-a-binary-search-tree", "Lowest Common Ancestor of a Binary Search Tree", "Medium"),
        lc("implement-trie-prefix-tree", "Implement Trie (Prefix Tree)", "Medium"),
        lc("design-add-and-search-words-data-structure", "Design Add and Search Words Data Structure", "Medium"),
        lc("word-search-ii", "Word Search II", "Hard"),
      ],
    },
    {
      title: "Heap and Priority Queue",
      collapsed: true,
      tasks: [
        lc("kth-largest-element-in-an-array", "Kth Largest Element in an Array", "Medium"),
        lc("top-k-frequent-elements", "Top K Frequent Elements", "Medium"),
        lc("find-median-from-data-stream", "Find Median from Data Stream", "Hard"),
      ],
    },
    {
      title: "Interview readiness",
      blurb:
        "Solving each problem once is not the same as being ready. Aim for ~20 minutes on an Easy, ~35 on a Medium, and for Hards, understanding the approach even if you cannot always derive it under time pressure.",
      tasks: [
        {
          id: "lc-gate-resolve-20",
          label: "Re-solve twenty of these cold, without looking at your old code",
          url: "https://leetcode.com/problemset/",
        },
        {
          id: "lc-gate-timed-sessions",
          label: "Do five timed, interview-style sessions",
          url: "https://leetcode.com/problemset/",
        },
        {
          id: "lc-gate-big-o",
          label: "Practise stating time and space complexity out loud for each solution",
          url: "https://www.bigocheatsheet.com/",
        },
      ],
    },
  ],
};

import type { Phase } from "../../types";

const SWIFT_BOOK =
  "https://docs.swift.org/swift-book/documentation/the-swift-programming-language";

export const phase1: Phase = {
  id: "swift-fundamentals",
  number: 1,
  title: "Swift Fundamentals",
  blurb:
    "Move on when you can read ordinary Swift without looking up syntax every few lines.",
  groups: [
    {
      title: "Course",
      tasks: [
        {
          id: "course-sean-swift",
          label: "Sean Allen — Swift Programming Tutorial (full course)",
          url: "https://www.youtube.com/watch?v=CwA1VWP0Ldw",
        },
      ],
    },
    {
      title: "Language topics",
      blurb: "Use The Swift Programming Language as your reference alongside the course.",
      tasks: [
        { id: "swift-basics", label: "Variables, constants, and basic types", url: `${SWIFT_BOOK}/thebasics/` },
        { id: "swift-control-flow", label: "Control flow: if, switch, loops", url: `${SWIFT_BOOK}/controlflow/` },
        { id: "swift-functions", label: "Functions", url: `${SWIFT_BOOK}/functions/` },
        { id: "swift-closures", label: "Closures, including escaping closures", url: `${SWIFT_BOOK}/closures/` },
        { id: "swift-collections", label: "Arrays, sets, and dictionaries", url: `${SWIFT_BOOK}/collectiontypes/` },
        { id: "swift-optionals", label: "Optionals, if let, and guard", url: `${SWIFT_BOOK}/thebasics/#Optionals` },
        {
          id: "swift-structs-classes",
          label: "Structs vs. classes, value vs. reference semantics",
          url: `${SWIFT_BOOK}/classesandstructures/`,
          note: "The single most common iOS interview question. Be able to explain it cold.",
        },
        { id: "swift-properties", label: "Properties, including lazy and computed", url: `${SWIFT_BOOK}/properties/` },
        { id: "swift-protocols", label: "Protocols", url: `${SWIFT_BOOK}/protocols/` },
        { id: "swift-extensions", label: "Extensions", url: `${SWIFT_BOOK}/extensions/` },
        { id: "swift-generics", label: "Generics", url: `${SWIFT_BOOK}/generics/` },
        { id: "swift-errors", label: "Error handling", url: `${SWIFT_BOOK}/errorhandling/` },
        {
          id: "swift-arc",
          label: "ARC, retain cycles, weak vs. unowned",
          url: `${SWIFT_BOOK}/automaticreferencecount/`,
        },
        { id: "swift-access-control", label: "Access control", url: `${SWIFT_BOOK}/accesscontrol/` },
        {
          id: "swift-equatable-hashable",
          label: "Equatable, Hashable, and Comparable",
          url: "https://developer.apple.com/documentation/swift/equatable",
        },
      ],
    },
    {
      title: "Prove it",
      tasks: [
        {
          id: "swift-exercises-unaided",
          label: "Solve ten Swift exercises without copying a solution",
          url: "https://www.hackingwithswift.com/quick-start/beginners/how-to-check-your-progress",
        },
        {
          id: "swift-api-design-guidelines",
          label: "Read Apple's Swift API Design Guidelines",
          url: "https://www.swift.org/documentation/api-design-guidelines/",
        },
      ],
    },
  ],
};

export const phase2: Phase = {
  id: "swiftui",
  number: 2,
  title: "SwiftUI",
  blurb:
    "Move on when you can open a blank project and build a small multi-screen app without following a tutorial step by step.",
  groups: [
    {
      title: "Course",
      tasks: [
        {
          id: "course-sean-swiftui",
          label: "Sean Allen — SwiftUI Fundamentals (full course)",
          url: "https://www.youtube.com/watch?v=b1oC7sLIgpI",
        },
      ],
    },
    {
      title: "Framework topics",
      tasks: [
        { id: "swiftui-essentials", label: "SwiftUI essentials tutorial", url: "https://developer.apple.com/tutorials/swiftui" },
        { id: "swiftui-views-modifiers", label: "Views and modifiers", url: "https://developer.apple.com/documentation/swiftui/view" },
        { id: "swiftui-layout", label: "Stacks and layout", url: "https://developer.apple.com/documentation/swiftui/building-layouts-with-stack-views" },
        { id: "swiftui-list", label: "List", url: "https://developer.apple.com/documentation/swiftui/list" },
        { id: "swiftui-navigation-stack", label: "NavigationStack", url: "https://developer.apple.com/documentation/swiftui/navigationstack" },
        { id: "swiftui-state", label: "State", url: "https://developer.apple.com/documentation/swiftui/state" },
        { id: "swiftui-binding", label: "Binding", url: "https://developer.apple.com/documentation/swiftui/binding" },
        {
          id: "swiftui-observable",
          label: "Observable model data and one-way data flow",
          url: "https://developer.apple.com/documentation/swiftui/managing-model-data-in-your-app",
        },
        { id: "swiftui-environment", label: "Environment", url: "https://developer.apple.com/documentation/swiftui/environment" },
        {
          id: "swiftui-view-identity",
          label: "View identity and why SwiftUI re-renders",
          url: "https://developer.apple.com/documentation/swiftui/view/id(_:)",
        },
        {
          id: "swiftui-app-lifecycle",
          label: "The SwiftUI app lifecycle",
          url: "https://developer.apple.com/documentation/swiftui/app",
        },
        { id: "swiftui-async-image", label: "AsyncImage", url: "https://developer.apple.com/documentation/swiftui/asyncimage" },
        { id: "swiftui-previews", label: "Previews", url: "https://developer.apple.com/documentation/swiftui/preview" },
        { id: "swiftui-accessibility", label: "Accessibility in SwiftUI", url: "https://developer.apple.com/documentation/swiftui/accessibility" },
      ],
    },
    {
      title: "Mini app, built solo",
      blurb: "Small and throwaway. The point is building without a tutorial open.",
      tasks: [
        {
          id: "mini-app-new-project",
          label: "Start a new SwiftUI project from scratch",
          url: "https://developer.apple.com/tutorials/swiftui/creating-and-combining-views",
        },
        {
          id: "mini-app-three-screens",
          label: "Build three screens wired up with NavigationStack",
          url: "https://developer.apple.com/documentation/swiftui/navigationstack",
        },
        { id: "mini-app-list-rows", label: "Add a List with a reusable row view", url: "https://developer.apple.com/documentation/swiftui/list" },
        { id: "mini-app-textfield", label: "Take form input with TextField", url: "https://developer.apple.com/documentation/swiftui/textfield" },
        {
          id: "mini-app-appstorage",
          label: "Persist one user preference with AppStorage",
          url: "https://developer.apple.com/documentation/swiftui/appstorage",
        },
        {
          id: "mini-app-original-feature",
          label: "Add one feature you did not copy from anywhere",
          url: "https://developer.apple.com/documentation/swiftui",
        },
      ],
    },
  ],
};

export const phase3: Phase = {
  id: "uikit",
  number: 3,
  title: "UIKit",
  blurb:
    "You will not write much new UIKit, but nearly every job has a UIKit codebase to read and interview questions about it.",
  groups: [
    {
      title: "Course",
      tasks: [
        {
          id: "course-sean-takehome",
          label: "Sean Allen — iOS Dev Interview Prep / Take Home Project",
          url: "https://seanallen.teachable.com/p/take-home",
        },
      ],
    },
    {
      title: "Topics",
      blurb: "Understanding, not memorisation. You are learning to read UIKit, not to author it from scratch.",
      tasks: [
        {
          id: "uikit-viewcontroller-lifecycle",
          label: "UIViewController and its lifecycle methods",
          url: "https://developer.apple.com/documentation/uikit/uiviewcontroller",
        },
        { id: "uikit-navigation-controller", label: "UINavigationController", url: "https://developer.apple.com/documentation/uikit/uinavigationcontroller" },
        { id: "uikit-tabbar-controller", label: "UITabBarController", url: "https://developer.apple.com/documentation/uikit/uitabbarcontroller" },
        { id: "uikit-tableview", label: "UITableView with its data source and delegate", url: "https://developer.apple.com/documentation/uikit/uitableview" },
        { id: "uikit-collectionview", label: "UICollectionView and compositional layout", url: "https://developer.apple.com/documentation/uikit/uicollectionview" },
        {
          id: "uikit-diffable",
          label: "Diffable data sources",
          url: "https://developer.apple.com/documentation/uikit/updating-collection-views-using-diffable-data-sources",
        },
        {
          id: "uikit-delegation",
          label: "The delegation pattern",
          url: "https://developer.apple.com/documentation/swift/cocoa-design-patterns/using-delegates-to-customize-object-behavior",
        },
        {
          id: "uikit-autolayout",
          label: "Auto Layout: constraints, priorities, intrinsic content size",
          url: "https://developer.apple.com/library/archive/documentation/UserExperience/Conceptual/AutolayoutPG/",
        },
        {
          id: "uikit-swiftui-interop",
          label: "UIKit and SwiftUI interoperability, both directions",
          url: "https://developer.apple.com/documentation/swiftui/uiviewcontrollerrepresentable",
        },
      ],
    },
    {
      title: "Prove it",
      tasks: [
        {
          id: "uikit-build-screen-programmatically",
          label: "Build one screen programmatically with Auto Layout, no storyboard",
          url: "https://developer.apple.com/documentation/uikit/uiview",
          note: "Reading UIKit is not the same as writing it. Do this once so the interview answer is real.",
        },
      ],
    },
  ],
};

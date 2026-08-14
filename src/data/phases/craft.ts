import type { Phase } from "../../types";

const SWIFT_BOOK =
  "https://docs.swift.org/swift-book/documentation/the-swift-programming-language";

export const phase4: Phase = {
  id: "modern-swift",
  number: 4,
  title: "Modern Swift and the iOS Gaps",
  blurb:
    "Everything a junior is expected to have touched that the beginner courses skip or rush.",
  groups: [
    {
      title: "Concurrency",
      tasks: [
        { id: "conc-overview", label: "Read the Swift concurrency overview end to end", url: `${SWIFT_BOOK}/concurrency/` },
        { id: "conc-async-await", label: "Write real async/await code, not just read it", url: "https://developer.apple.com/documentation/swift/concurrency" },
        { id: "conc-task", label: "Task, and when you need to create one", url: "https://developer.apple.com/documentation/swift/task" },
        { id: "conc-mainactor", label: "MainActor and why UI updates need it", url: "https://developer.apple.com/documentation/swift/mainactor" },
        { id: "conc-actors", label: "Actors, data isolation, and the race conditions they prevent", url: `${SWIFT_BOOK}/concurrency/#Actors` },
        { id: "conc-cancellation", label: "Task cancellation and cooperative cancellation checks", url: "https://developer.apple.com/documentation/swift/task/cancel()" },
        { id: "conc-sendable", label: "Sendable, at least conceptually", url: "https://developer.apple.com/documentation/swift/sendable" },
      ],
    },
    {
      title: "Networking",
      tasks: [
        { id: "net-urlsession", label: "URLSession", url: "https://developer.apple.com/documentation/foundation/urlsession" },
        { id: "net-codable", label: "Codable, including custom CodingKeys", url: "https://developer.apple.com/documentation/swift/codable" },
        { id: "net-jsondecoder", label: "JSONDecoder and its decoding strategies", url: "https://developer.apple.com/documentation/foundation/jsondecoder" },
        {
          id: "net-http-basics",
          label: "HTTP methods and status codes",
          url: "https://developer.mozilla.org/en-US/docs/Web/HTTP/Reference/Status",
        },
        {
          id: "net-build-request",
          label: "Build one async/await API request yourself, from URL to decoded model",
          url: "https://developer.apple.com/documentation/foundation/urlsession/data(from:delegate:)",
        },
        {
          id: "net-ui-states",
          label: "Handle all four UI states: loading, success, empty, error",
          url: "https://developer.apple.com/documentation/swiftui/contentunavailableview",
          note: "The difference between a tutorial app and a portfolio app is usually just this.",
        },
      ],
    },
    {
      title: "Persistence",
      tasks: [
        { id: "persist-swiftdata-overview", label: "SwiftData overview", url: "https://developer.apple.com/documentation/swiftdata" },
        { id: "persist-swiftdata-model", label: "Build a small SwiftData model and query it", url: "https://developer.apple.com/documentation/swiftdata/model()" },
        { id: "persist-userdefaults", label: "UserDefaults", url: "https://developer.apple.com/documentation/foundation/userdefaults" },
        {
          id: "persist-coredata",
          label: "Core Data at a basic level",
          url: "https://developer.apple.com/documentation/coredata",
          note: "You will not build with it, but existing codebases are full of it.",
        },
      ],
    },
    {
      title: "Architecture",
      tasks: [
        {
          id: "arch-mvc",
          label: "MVC as Apple defines it",
          url: "https://developer.apple.com/library/archive/documentation/General/Conceptual/DevPedia-CocoaCore/MVC.html",
        },
        {
          id: "arch-service-layer",
          label: "Move networking out of your views into a service type",
          url: "https://developer.apple.com/documentation/foundation/urlsession",
        },
        {
          id: "arch-dependency-injection",
          label: "Inject a dependency through an initializer instead of reaching for a singleton",
          url: `${SWIFT_BOOK}/initialization/`,
        },
        {
          id: "arch-mvvm-feature",
          label: "Build one feature with MVVM-style separation",
          url: "https://developer.apple.com/documentation/swiftui/managing-model-data-in-your-app",
        },
      ],
    },
    {
      title: "Testing",
      tasks: [
        {
          id: "test-swift-testing",
          label: "Swift Testing: read the overview and write your first test",
          url: "https://developer.apple.com/documentation/testing/definingtests",
        },
        {
          id: "test-xctest",
          label: "XCTest basics",
          url: "https://developer.apple.com/documentation/xctest",
          note: "Still what most existing test suites are written in.",
        },
        { id: "test-business-logic", label: "Unit-test a piece of real business logic", url: "https://developer.apple.com/documentation/testing" },
        { id: "test-mock-dependency", label: "Mock a dependency behind a protocol to test without the network", url: "https://developer.apple.com/documentation/testing" },
      ],
    },
  ],
};

export const phase5: Phase = {
  id: "xcode-shipping",
  number: 5,
  title: "Xcode and Shipping",
  blurb:
    "The parts of the job no course covers. Each of these is a one-time thing you should have done before an interview asks about it.",
  groups: [
    {
      title: "Debugging",
      tasks: [
        {
          id: "xcode-breakpoints-lldb",
          label: "Debug with breakpoints and LLDB (po, step over, step in)",
          url: "https://developer.apple.com/documentation/xcode/setting-breakpoints-to-pause-your-running-app",
        },
        {
          id: "xcode-view-hierarchy",
          label: "Use the view hierarchy debugger to fix one real layout bug",
          url: "https://developer.apple.com/documentation/xcode/diagnosing-issues-in-the-ui-of-your-app",
        },
        {
          id: "xcode-instruments",
          label: "Run one Instruments pass — Time Profiler or Leaks",
          url: "https://developer.apple.com/documentation/xcode/improving-your-app-s-performance",
        },
        {
          id: "xcode-crash-reports",
          label: "Read a crash report and find the offending line",
          url: "https://developer.apple.com/documentation/xcode/diagnosing-issues-using-crash-reports-and-device-logs",
        },
      ],
    },
    {
      title: "Getting it onto a phone",
      tasks: [
        {
          id: "ship-physical-device",
          label: "Run one of your apps on a physical iPhone",
          url: "https://developer.apple.com/documentation/xcode/running-your-app-in-simulator-or-on-a-device",
        },
        {
          id: "ship-code-signing",
          label: "Understand code signing, certificates, and provisioning profiles",
          url: "https://developer.apple.com/support/code-signing/",
        },
        {
          id: "ship-testflight",
          label: "Archive and upload one build to TestFlight",
          url: "https://developer.apple.com/help/app-store-connect/manage-builds/upload-builds/",
          note: "Needs a paid developer account. Worth it once — almost no junior candidate has done it.",
        },
      ],
    },
  ],
};

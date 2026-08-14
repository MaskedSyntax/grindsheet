import type { Phase } from "../../types";

export const phase6: Phase = {
  id: "portfolio-one",
  number: 6,
  title: "Portfolio App #1 — API-Driven",
  blurb:
    "A polished SwiftUI app on top of a real REST API. GitHub client, movie browser, transit times, sports scores, news reader — pick one and finish it.",
  groups: [
    {
      title: "Core build",
      tasks: [
        { id: "p1-rest-api", label: "Consume a real REST API with URLSession", url: "https://developer.apple.com/documentation/foundation/urlsession" },
        { id: "p1-codable-models", label: "Decode the API into Codable models", url: "https://developer.apple.com/documentation/swift/codable" },
        {
          id: "p1-async-await",
          label: "Do all async work with async/await",
          url: "https://docs.swift.org/swift-book/documentation/the-swift-programming-language/concurrency/",
        },
        {
          id: "p1-service-layer",
          label: "Keep networking out of your views, behind a service type",
          url: "https://developer.apple.com/documentation/foundation/urlsession",
        },
        { id: "p1-remote-images", label: "Load and cache remote images", url: "https://developer.apple.com/documentation/swiftui/asyncimage" },
      ],
    },
    {
      title: "The polish that gets it noticed",
      tasks: [
        {
          id: "p1-search",
          label: "Implement search",
          url: "https://developer.apple.com/documentation/swiftui/view/searchable(text:placement:prompt:)",
        },
        {
          id: "p1-pagination",
          label: "Implement pagination or incremental loading",
          url: "https://developer.apple.com/documentation/swiftui/view/task(id:priority:_:)",
        },
        { id: "p1-loading-states", label: "Show real loading states", url: "https://developer.apple.com/documentation/swiftui/progressview" },
        {
          id: "p1-empty-error-states",
          label: "Handle empty and error states, including no network",
          url: "https://developer.apple.com/documentation/swiftui/contentunavailableview",
        },
        { id: "p1-swiftdata", label: "Cache or favourite something locally with SwiftData", url: "https://developer.apple.com/documentation/swiftdata" },
        { id: "p1-accessibility", label: "Add accessibility labels and test with VoiceOver", url: "https://developer.apple.com/documentation/swiftui/accessibility" },
      ],
    },
    {
      title: "Ship it",
      tasks: [
        { id: "p1-unit-tests", label: "Write unit tests for the logic that matters", url: "https://developer.apple.com/documentation/testing" },
        {
          id: "p1-readme",
          label: "Write a README with screenshots, a demo GIF, and the architecture decisions",
          url: "https://docs.github.com/en/repositories/managing-your-repositorys-settings-and-features/customizing-your-repository/about-readmes",
        },
      ],
    },
  ],
};

export const phase7: Phase = {
  id: "portfolio-two",
  number: 7,
  title: "Portfolio App #2 — Deeply Native",
  blurb:
    "App #1 proves you can talk to a server. App #2 proves you know the Apple platform. Build it while you are already applying.",
  groups: [
    {
      title: "Platform features",
      tasks: [
        { id: "p2-swiftdata", label: "Build the whole thing on SwiftData", url: "https://developer.apple.com/documentation/swiftdata" },
        { id: "p2-notifications", label: "Schedule local notifications", url: "https://developer.apple.com/documentation/usernotifications" },
        { id: "p2-widget", label: "Ship a home screen widget", url: "https://developer.apple.com/documentation/widgetkit" },
        { id: "p2-app-intent", label: "Add at least one App Intent", url: "https://developer.apple.com/documentation/appintents" },
        {
          id: "p2-extra-framework",
          label: "Use one more native framework: Core Location, PhotosUI, Charts, or Background Tasks",
          url: "https://developer.apple.com/documentation/technologyoverviews",
        },
        { id: "p2-lifecycle", label: "Handle the app lifecycle properly — scene phase, background, restore", url: "https://developer.apple.com/documentation/swiftui/app" },
        {
          id: "p2-storekit",
          label: "Add StoreKit 2 if monetisation makes sense for the app",
          url: "https://developer.apple.com/documentation/storekit",
          note: "Optional, but a strong differentiator if the app has any premium tier.",
        },
      ],
    },
    {
      title: "Ship it",
      tasks: [
        { id: "p2-unit-tests", label: "Add unit tests", url: "https://developer.apple.com/documentation/testing" },
        { id: "p2-accessibility", label: "Test accessibility with VoiceOver and Dynamic Type", url: "https://developer.apple.com/accessibility/" },
        {
          id: "p2-readme",
          label: "Write a README with screenshots, a demo GIF, and the architecture decisions",
          url: "https://docs.github.com/en/repositories/managing-your-repositorys-settings-and-features/customizing-your-repository/about-readmes",
        },
      ],
    },
  ],
};

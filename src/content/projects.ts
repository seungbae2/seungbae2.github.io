import { Project } from "@/lib/types";

export const projects: Project[] = [
  {
    slug: "arsketch",
    name: "ArSketch",
    tagline: "Real-time AR Drawing with Live Web Streaming",
    description:
      "A native Android AR drawing app that lets users draw on real-world surfaces and in mid-air, then live-stream the augmented scene to web viewers via WebRTC. Features bidirectional interaction where web viewers can send drawings back to the AR scene.",
    period: "Jan 2026 – Present",
    role: "Solo Developer",
    stack: [
      "Kotlin 2.2",
      "Jetpack Compose",
      "ARCore",
      "LiveKit (WebRTC)",
      "Hilt",
      "Coroutines/Flow",
      "Multi-module Clean Architecture",
      "TypeScript/Vite",
    ],
    storeLinks: {
      github: "https://github.com/seungbae2/ArSketch",
    },
    features: [
      "Surface and air drawing modes with real-time AR plane detection and anchor placement",
      "Brush customization with adjustable color, size, and opacity for both AR and 2D drawing",
      "WebRTC live streaming of AR camera feed to web viewers via LiveKit SDK",
      "Bidirectional web viewer interaction — viewers draw on 2D canvas and send strokes back to the AR scene",
      "Undo/Redo system with full stroke history management across drawing modes",
    ],
    architecture:
      "8-module Clean Architecture with strict dependency rules. Domain module is pure Kotlin JVM with zero Android dependencies. Streaming layer uses interface separation (streaming-api / streaming) to decouple WebRTC implementation from business logic.",
    challenges: [
      {
        title: "AR-to-WebRTC Video Pipeline",
        problem:
          "ARCore camera frames need to be captured, encoded, and streamed in real-time to web viewers without impacting AR rendering performance.",
        solution:
          "Implemented a custom video capture pipeline that taps into ARCore's frame callback, converts frames to the format expected by LiveKit's video track, and manages frame pacing to maintain smooth AR rendering alongside streaming.",
      },
      {
        title: "Bidirectional DataChannel Communication",
        problem:
          "Web viewers need to send 2D drawing strokes to the AR device, requiring reliable bidirectional data transmission alongside the video stream.",
        solution:
          "Utilized LiveKit DataChannel API with a custom serialization protocol for stroke data. Implemented coordinate mapping between the web 2D canvas and AR 3D space for accurate stroke placement.",
      },
      {
        title: "DI Scope Management Across Modules",
        problem:
          "AR session, streaming session, and drawing state each have different lifecycles, making Hilt scope management complex across 8 modules.",
        solution:
          "Defined custom Hilt scopes aligned with feature lifecycles — AR components scoped to Activity, streaming components to a custom StreamingScope, and drawing state to ViewModel scope with proper cleanup on scope destruction.",
      },
    ],
  },
  {
    slug: "mammanote",
    name: "MammaNote",
    tagline: "Baby Food Meal Planning & Inventory Management App",
    description:
      "A cross-platform baby food management app with offline-first architecture. Helps parents plan meals, track cube-based food inventory with FIFO consumption, monitor allergies, and manage 5 progressive baby food stages — all without network dependency.",
    period: "Oct 2025 – Present",
    role: "Solo Developer",
    stack: [
      "Flutter",
      "Dart",
      "Riverpod 3.0",
      "Drift (SQLite)",
      "Firebase Analytics",
      "Mixpanel",
      "Firebase Crashlytics",
      "Firebase Remote Config",
      "GoRouter",
      "Freezed",
    ],
    storeLinks: {
      playStore:
        "https://play.google.com/store/apps/details?id=com.nunkoib.mamma",
      appStore:
        "https://apps.apple.com/us/app/%EB%A7%98%EB%A7%88%EB%85%B8%ED%8A%B8-%EC%9D%B4%EC%9C%A0%EC%8B%9D-%EA%B8%B0%EB%A1%9D-%EA%B4%80%EB%A6%AC/id6755870362",
    },
    features: [
      "60-day meal auto-generation engine from 230-ingredient database with nutrition-group balancing across 5 progressive food stages",
      "FIFO-based cube inventory management with ACID transactions, multi-batch tracking, and 14-day expiration alerts",
      "Allergy safety system with ingredient introduction timeline, reaction recording, auto-block, and same nutrition-group alternative suggestions",
      "Custom 3-stage continuous-drag calendar with smooth transitions between full-month, month+detail, and week-detail views",
      "Proactive notification scheduler with day-based stage transitions and 8-week auto-generated cube preparation reminders",
      "Multi-child profile support with independent data isolation and instant full-state refresh on profile switch",
      "Dual analytics pipeline (Firebase + Mixpanel) with 27 custom events across 7 domains",
    ],
    architecture:
      "Clean Architecture with 3-layer separation (Data → Domain → Presentation). 84K lines of hand-written Dart across 425 source files. 30 Freezed domain models, 27 domain services, 11 SQLite tables with type-safe Drift ORM, and 49 Riverpod providers.",
    challenges: [
      {
        title: "SQLite Date Function Timezone Bug",
        problem:
          "Drift stores DateTime as ISO 8601 TEXT without 'Z' suffix; SQLite date() interprets as UTC, causing 1-day shift in meal date operations.",
        solution:
          "Migrated all date arithmetic to Dart-side DateTime computation. Documented as a permanent guideline to prevent regression.",
      },
      {
        title: "N+1 Query Optimization",
        problem:
          "Home screen cube status cards fired per-ingredient queries, resulting in O(N) database calls.",
        solution:
          "Implemented batch queries (getCubesByIngredients), provider-level cache preloading (ingredientsMapProvider), and service-level cache strategy. Reduced DB calls from O(N) to O(1).",
      },
      {
        title: "FIFO Cube Consumption Transaction Integrity",
        problem:
          "Meal completion triggers multiple operations: consumption record creation, cube inventory deduction across batches, and UI state update.",
        solution:
          "Implemented replaceStockAtomic with database-level ACID transactions for all-or-nothing execution, plus reversible meal completion that cleanly rolls back all operations.",
      },
    ],
  },
  {
    slug: "catsapp",
    name: "CatsApp",
    tagline: "Resilient Cat Image Gallery with Offline-First Pagination",
    description:
      "A native Android cat image gallery app built with offline-first architecture. Features infinite scroll pagination with automatic offline fallback, image zoom, responsive grid layout, and comprehensive error handling — all powered by a 12-module Clean Architecture with build-logic convention plugins.",
    period: "Apr 2025 – Present",
    role: "Solo Developer",
    stack: [
      "Kotlin",
      "Jetpack Compose",
      "Hilt",
      "Room",
      "Paging 3",
      "Retrofit/OkHttp",
      "Coil",
      "Coroutines/Flow",
      "Sandwich",
      "Navigation Compose",
    ],
    storeLinks: {
      github: "https://github.com/seungbae2/CatsApp",
    },
    features: [
      "Infinite scroll pagination with seamless page loading and scroll position retention",
      "Automatic offline fallback with cached data display and network retry on connectivity restore",
      "Pinch-to-zoom image viewer with smooth gesture handling and full-screen mode",
      "Responsive grid layout that adapts columns based on screen width",
      "Comprehensive error handling UI with retry actions, empty states, and loading indicators",
    ],
    architecture:
      "12-module Clean Architecture with build-logic convention plugins for consistent Gradle configuration. Strict compile-time dependency rules enforced through data-api/data module separation — feature modules depend only on data-api interfaces, never on data implementations.",
    challenges: [
      {
        title: "RemoteMediator to PagingSource Migration",
        problem:
          "Initial RemoteMediator approach tightly coupled network and database layers, making offline behavior unpredictable and difficult to test.",
        solution:
          "Migrated to a custom PagingSource with explicit cache-first strategy. Network responses are persisted to Room first, then served from the local database, giving full control over offline fallback behavior.",
      },
      {
        title: "Automatic Retry on Network Restoration",
        problem:
          "When the device goes offline mid-scroll, the paging pipeline stops. Users had to manually trigger retry after regaining connectivity.",
        solution:
          "Implemented a ConnectivityObserver using ConnectivityManager callbacks that emits network state changes as a Flow. Combined with Paging 3's retry mechanism to automatically resume loading when connectivity is restored.",
      },
    ],
  },
  {
    slug: "weaklyeat",
    name: "WeaklyEat",
    tagline: "Offline-First Weekly Meal Planning App",
    description:
      "A production-grade Flutter meal planning app with strict Clean Architecture. Features auto-generated shopping lists from weekly meal plans, budget trend analysis, sealed-class error handling, and full bilingual support (EN/KR).",
    period: "May 2025 – Nov 2025",
    role: "Solo Developer",
    stack: [
      "Flutter",
      "Dart",
      "Riverpod",
      "RxDart",
      "Drift (SQLite)",
      "Firebase Analytics",
      "Firebase Crashlytics",
      "GoRouter",
      "Freezed",
      "FL Chart",
      "Easy Localization",
    ],
    storeLinks: {
      playStore:
        "https://play.google.com/store/apps/details?id=com.nunkoib.weaklyeat",
      appStore:
        "https://apps.apple.com/us/app/weaklyeat-meal-planning/id6751946721",
    },
    features: [
      "Weekly meal planning with DayPlan + MealSlot two-tier model and per-meal execution tracking with consecutive streak",
      "Auto-generated shopping lists from weekly meal plans with 12-category classification and 30-unit conversion system",
      "Budget tracking with weekly/monthly configuration, FL Chart trend visualization, and category-level spending analysis",
      "Smart menu recommendation algorithm (GetSmartRecommendationsUseCase) based on usage patterns",
      "Comprehensive analytics infrastructure tracking 40+ Firebase events across 8 user journey categories with PII-protected amount-range masking",
      "Bilingual i18n support (EN/KR) with 1,430+ translation keys",
      "Background task management with WorkManager and scheduled notifications",
    ],
    architecture:
      "Strict Clean Architecture (Presentation → Domain → Data) with 115K lines of handwritten Dart. 14 repository abstractions, 85 use cases, 16 SQLite tables, 12+ strategic indexes, and 6 zero-downtime schema migrations. Sealed-class Result pattern for type-safe error propagation across all layers.",
    challenges: [
      {
        title: "Supabase → Offline-First Architecture Pivot",
        problem:
          "Initial design depended on Supabase for remote data. Network dependency degraded UX during meal recording.",
        solution:
          "Rewrote the entire Data Layer to Drift/SQLite local-first architecture with SyncQueue-based change tracking. +188K/-102K lines changed in a single month.",
      },
      {
        title: "DayPlan → MealSlot Data Model Redesign",
        problem:
          "Direct menu mapping on DayPlan couldn't support per-meal execution tracking and analytics.",
        solution:
          "Introduced MealSlot intermediate entity enabling independent meal management, execution tracking, streak calculation, and weekly report generation.",
      },
      {
        title: "7-Phase Soft Delete → Hard Delete Migration",
        problem:
          "Soft delete added unnecessary complexity and storage overhead across the entire stack.",
        solution:
          "Executed a 7-phase progressive migration with per-phase commits enabling granular rollback. Phases covered UI removal, use cases, data sources, repository methods, and final cleanup.",
      },
    ],
  },
  {
    slug: "beanchive",
    name: "Beanchive",
    tagline: "Specialty Coffee Archive App",
    description:
      "A coffee tasting archive app with Clean Architecture and DDD feature separation. Features on-premise backend with token-based image authentication, guest-to-member account migration, and comprehensive coffee tasting records.",
    period: "Oct 2024 – Apr 2025",
    role: "Solo Developer",
    stack: [
      "Flutter",
      "Dart",
      "Riverpod",
      "Drift (SQLite)",
      "On-premise Backend",
      "GoRouter",
      "Freezed",
    ],
    storeLinks: {
      playStore:
        "https://play.google.com/store/apps/details?id=com.nunkoib.beanchive",
      appStore: "https://apps.apple.com/us/app/beanchive/id6745204205",
    },
    features: [
      "Coffee tasting record management with detailed flavor profiles and brewing methods",
      "Token-based image authentication for secure photo uploads to on-premise backend",
      "Guest-to-member account migration with seamless data transition",
      "DDD feature separation for maintainable codebase organization",
      "Layer-based Clean Architecture with clear dependency boundaries",
    ],
    architecture:
      "Layer-based Clean Architecture with DDD (Domain-Driven Design) feature separation. On-premise backend handles image storage with token-based authentication. Local-first data with Drift SQLite.",
    challenges: [
      {
        title: "Guest-to-Member Account Migration",
        problem:
          "Users start as guests with local-only data. When they create an account, all local data needs to seamlessly transfer to their authenticated profile.",
        solution:
          "Implemented atomic migration flow that transfers all local records to the authenticated user profile while maintaining data integrity and image references.",
      },
    ],
  },
  {
    slug: "bokjak-bokjak",
    name: "Bokjak-Bokjak",
    tagline: "Real-time Seoul Population Density App",
    description:
      "A native Android app that visualizes real-time population density data across Seoul districts on an interactive map. Built with modern Android stack including Jetpack Compose and Clean Architecture.",
    period: "2021",
    role: "Solo Developer",
    stack: [
      "Kotlin",
      "Jetpack Compose",
      "Hilt",
      "Room",
      "Naver Map SDK",
      "Coroutines",
      "Flow",
    ],
    storeLinks: {
      playStore:
        "https://play.google.com/store/apps/details?id=com.sb.moim",
    },
    features: [
      "Real-time population density visualization on Naver Map with district-level granularity",
      "Clean Architecture with MVVM + Repository + UseCase pattern",
      "Reactive data pipelines using SharedFlow + flatMapLatest for declarative data loading",
      "Domain-driven design with dedicated UseCase layer separating business logic from ViewModels",
    ],
    architecture:
      "Clean Architecture (MVVM + Repository + UseCase) with Kotlin. Reactive data flow using SharedFlow and flatMapLatest for efficient, declarative data loading. Hilt for dependency injection across all layers.",
    challenges: [
      {
        title: "ViewModel-Heavy to Domain-Driven Refactoring",
        problem:
          "Initial architecture placed too much business logic in ViewModels, making them hard to test and maintain.",
        solution:
          "Refactored to domain-driven design with a dedicated UseCase layer. Implemented reactive data pipelines using SharedFlow + flatMapLatest for clean, declarative data loading.",
      },
    ],
  },
];

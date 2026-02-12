import { Project } from "@/lib/types";

export const projects: Project[] = [
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

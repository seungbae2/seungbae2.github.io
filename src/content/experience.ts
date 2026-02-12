import { Experience } from "@/lib/types";

export const experiences: Experience[] = [
  {
    company: "Maxst Co., Ltd",
    role: "Android Software Engineer",
    location: "Seoul, South Korea",
    period: "Apr 2023 – Sep 2024",
    highlights: [
      "Led Android team of 2 for AR Drawing remote collaboration platform with Multi-Module + Clean Architecture and Livekit-based webRTC",
      "Designed map visualization with Google Map Compose SDK and multiple GeoJson layers for Maxverse platform",
      "Delivered Samsung semiconductor facility inspection app under tight SI deadline",
      "Prototyped AR Glass app integrating UVC Camera and IMU sensor fusion with proprietary SLAM algorithm",
      "Established architecture standards: Convention Catalog, Single Activity Architecture, 100% Jetpack Compose UI",
    ],
  },
  {
    company: "Market Designers (Tutoring)",
    role: "Mobile Software Engineer",
    location: "Seoul, South Korea",
    period: "Feb 2022 – Mar 2023",
    highlights: [
      "Redesigned login flow eliminating guest accounts — 100% increase in user registration conversion",
      "Optimized consultation page UX — 140% increase in payment conversion through Kakao SDK integration",
      "Maintained cross-platform native apps (iOS/Android) and React-Native hybrid app",
    ],
  },
  {
    company: "FNS, Inc.",
    role: "Software Engineer",
    location: "Torrance, CA, USA",
    period: "Sep 2019 – Sep 2020",
    highlights: [
      "Sole developer of in-house shipping web portal with UPS API integration (PHP, Oracle, JavaScript)",
      "Migrated warehouse management system from C/S to web-based application (Java Spring, Oracle)",
      "Built barcode scanning Android app for delivery verification with photo evidence system",
      "Established CI/CD pipeline with Jenkins and configured internal Git server",
    ],
  },
  {
    company: "Digital Watchdog | Kaltec Electronics",
    role: "Software Engineer",
    location: "Cerritos, CA, USA",
    period: "Sep 2014 – Jan 2019",
    highlights: [
      "Maintained and enhanced Android surveillance app (DW Client) for 4+ years with Google Play production releases",
      "Developed IP camera discovery tool (IP Finder) using QT Framework with UDP network scanning supporting 20+ models",
      "Led migration from SVN to Git, improving team development workflow",
      "Conducted competitive product analysis through Wireshark protocol reverse engineering",
    ],
  },
];

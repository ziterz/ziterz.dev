import { Project } from "@/types";

export const projects: Project[] = [
  {
    id: 5,
    path: "mech-kit",
    title: "MechKit (2023)",
    desc: "<span class='text-neutral-400 font-medium'>MechKit</span> is an iPadOS application for realistically designing mechanical keyboards in 3D and Augmented Reality.",
    thumbnail: "/static/mech-kit-thumb.jpeg",
    img: ["/static/mech-kit.jpeg"],
    tags: ["Xcode", "UIKit", "SwiftUI", "ARKit", "RealityKit", "SceneKit", "AVFoundation", "Swift"],
    footer: "Role: iOS Developer, UI Designer, Project Manager"
  },
  {
    id: 4,
    path: "the-academy-times",
    title: "The Academy Times (2023)",
    desc: "<span class='text-neutral-400 font-medium'>The Academy Times</span>, an iOS app that brings your local newspaper to life using the power of ARKit",
    thumbnail: "/static/the-academy-times-thumb.jpeg",
    img: ["/static/the-academy-times.jpeg"],
    tags: ["Xcode", "UIKit", "SceneKit", "ARKit", "AVFoundation", "Swift"],
    footer: "Role: iOS Developer"
  },
  {
    id: 3,
    path: "hcis-imeco",
    title: "HCIS Imeco (2023)",
    desc: "<span class='text-emerald-500'>HCIS</span> (Human Capital Information System) is an application for a company with features such as detailed employee data, company branch data, employee salaries, attendance, and company requirements.",
    thumbnail: "/static/hcis-thumb.jpeg",
    img: ["/static/hcis.jpeg"],
    tags: ["Vue 3", "Pinia", "Vite", "ChartJS", "Google Maps", "CK Editor", "Axios", "TailwindCSS"],
    footer: "Role: Front-End Developer"
  },
  {
    id: 2,
    path: "speed-online",
    title: "Speed Online (2022)",
    desc: "<span class='text-blue-500'>Speed Online</span> is an application for ordering tickets for ship crossings in North Kalimantan. Collaborate with Back End Developer, UI Designer, System Analyst, and Project Manager.<br><br><li>Using Vue 3 and Quasar in app development</li><li>Using Vuex for state management</li><li>Using Google Maps API for location tracking</li><li>Using Xendit API for payment gateway</li><li>Using OTP API for WhatsApp number verification</li><li>Using QR Code Scanner for ticket validation</li>",
    thumbnail: "/static/speed-online-thumb.jpeg",
    img: ["/static/speed-online.jpeg"],
    tags: ["Vue 3", "Vuex", "Quasar", "Google Maps", "WhatsApp OTP", "Xendit Payment"],
    footer: "Role: Mobile Developer"
  },
  {
    id: 1,
    path: "jastipinaja",
    title: "Jastipin Aja (2020)",
    desc: "<span class='text-red-500'>Jastipinaja</span> is an application that is intended for users who miss their regional food in the pandemic era, with same-day delivery between cities. Collaborating with Back End Developers, Front End Developers, UX Designers, System Analysts, and Project Managers in a team called Icecape.id.",
    thumbnail: "/static/jastipin-aja-thumb.jpeg",
    img: ["/static/jastipin-aja.jpeg"],
    tags: ["React", "React Native", "Paper", "Firebase", "OneSignal", "Midtrans Payment"],
    footer: "Role: Mobile Developer"
  },
  {
    id: 0,
    path: "dicicilaja",
    title: "Dicicilaja (2019)",
    desc: "<span class='text-orange-500'>Dicicilaja</span> application have downloaded more than 100K+ in play store, collaborating with Back End Developers, Front End Developers, UX Designers, System Analysts, QA Engineers, and Project Managers to create multi-functional products, with 6 financing products such as Multi-Purpose Fund, Maxi Travel, Maxi Edukasi, Maxi Usaha, and Maxi Sehat.",
    thumbnail: "/static/dicicil-aja-thumb.jpeg",
    img: ["/static/dicicil-aja.jpeg"],
    tags: ["Android Studio", "Java", "Kotlin", "RxJava", "Firebase", "OneSignal"],
    footer: "Role: Lead Mobile Developer"
  },
];

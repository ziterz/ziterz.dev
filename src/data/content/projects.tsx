import { Project } from "@/types";

export const projects: Project[] = [
  {
    id: 0,
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
    path: "dicicilaja",
    title: "Dicicilaja (2019)",
    desc: "<span class='text-orange-500'>Dicicilaja</span> application have downloaded more than 100K+ in play store, collaborating with Back End Developers, Front End Developers, UX Designers, System Analysts, QA Engineers, and Project Managers to create multi-functional products, with 6 financing products such as Multi-Purpose Fund, Maxi Travel, Maxi Edukasi, Maxi Usaha, and Maxi Sehat.",
    thumbnail: "/static/dicicilaja-thumb.jpeg",
    img: ["/static/dicicilaja.jpeg"],
    tags: ["Android Studio", "Java", "Kotlin", "RxJava", "Firebase", "OneSignal"],
    footer: "Role: Lead Mobile Developer"
  },
  {
    id: 2,
    path: "jastipinaja",
    title: "Jastipin Aja (2020)",
    desc: "<span class='text-red-500'>Jastipinaja</span> is an application that is intended for users who miss their regional food in the pandemic era, with same-day delivery between cities. Collaborating with Back End Developers, Front End Developers, UX Designers, System Analysts, and Project Managers in a team called Icecape.id.",
    thumbnail: "/static/jastipinaja-thumb.jpeg",
    img: ["/static/jastipinaja.jpeg"],
    tags: ["React", "React Native", "Paper", "Firebase", "OneSignal", "Midtrans Payment"],
    footer: "Role: Mobile Developer"
  },
];

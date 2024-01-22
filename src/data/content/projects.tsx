import { Project } from "@/types";

export const projects: Project[] = [
  {
    id: 0,
    path: "riot-boardgame",
    title: "Riot Hybrid Boardgame",
    desc: "<span class='text-yellow-400'>Riot Hybrid Boardgame</span> is a hybrid board game with a native iOS companion app that integrates physical and digital elements using NFC technology for interactions.",
    thumbnail: "/static/riot-boardgame.png",
    img: ["/static/riot-boardgame.png", "/static/riot-boardgame.png", "/static/riot-boardgame.png"],
    tags: ["React", "NextJS", "TailwindCSS", "CSS", "Firebase"],
    footer: "Role: iOS Developer, UI/UX Designer, Artwork Designer",
    link: "https://learn.theyei.org/",
    github: "https://github.com/braydentw/learn.theyei",
    appstore: "https://github.com/braydentw/learn.theyei",
    testflight: "https://github.com/braydentw/learn.theyei"
  },
  {
    id: 1,
    path: "speed-online",
    title: "Speed Online",
    desc: "<span class='text-sky-500'>Speed Online</span> is an application for ordering tickets for ship crossings in North Kalimantan. Collaborate with Back End Developer, UI Designer, System Analyst, and Project Manager.<br><br><li>Using Vue 3 and Quasar in app development</li><li>Using Vuex for state management</li><li>Using Google Maps API for location tracking</li><li>Using Xendit API for payment gateway</li><li>Using OTP API for WhatsApp number verification</li><li>Using QR Code Scanner for ticket validation</li>",
    thumbnail: "/static/speed-online-thumb.jpeg",
    img: ["/static/speed-online.jpeg"],
    tags: ["Vue 3", "Vuex", "Quasar", "Google Maps", "Xendit", "OTP"],
    footer: "Role: Mobile Developer"
  }
];

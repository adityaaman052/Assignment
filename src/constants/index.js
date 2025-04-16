const navLinks = [
  {
    name: "Work",
    link: "#work",
  },
  {
    name: "Experience",
    link: "#experience",
  },
  {
    name: "Skills",
    link: "#skills",
  },
  {
    name: "Testimonials",
    link: "#testimonials",
  },
];

const words = [
  { text: "Ideas", imgPath: "/images/ideas.svg" },
  { text: "Concepts", imgPath: "/images/concepts.svg" },
  { text: "Designs", imgPath: "/images/designs.svg" },
  { text: "Code", imgPath: "/images/code.svg" },
  { text: "Ideas", imgPath: "/images/ideas.svg" },
  { text: "Concepts", imgPath: "/images/concepts.svg" },
  { text: "Designs", imgPath: "/images/designs.svg" },
  { text: "Code", imgPath: "/images/code.svg" },
];

const counterItems = [
  { value: 15, suffix: "+", label: "Campaigns Launched" },
  { value: 200, suffix: "+", label: "Qualified Leads Generated" },
  { value: 108, suffix: "+", label: "Demos Booked" },
  { value: 90, suffix: "%", label: "Open & Reply Rate" },
];

const logoIconsList = [
  {
    imgPath: "/images/logos/company-logo-1.png",
  },
  {
    imgPath: "/images/logos/company-logo-2.png",
  },
  {
    imgPath: "/images/logos/company-logo-3.png",
  },
  {
    imgPath: "/images/logos/company-logo-4.png",
  },
  {
    imgPath: "/images/logos/company-logo-5.png",
  },
  {
    imgPath: "/images/logos/company-logo-6.png",
  },
  {
    imgPath: "/images/logos/company-logo-7.png",
  },
  {
    imgPath: "/images/logos/company-logo-8.png",
  },
  {
    imgPath: "/images/logos/company-logo-9.png",
  },
  {
    imgPath: "/images/logos/company-logo-10.png",
  },
  {
    imgPath: "/images/logos/company-logo-11.png",
  },
];

const abilities = [
  {
    imgPath: "/images/seo.png",
    title: "Precision Crafting",
    desc: "Every detail matters — I ensure pixel-perfect results that align with your brand vision.",
  },
  {
    imgPath: "/images/chat.png",
    title: "Seamless Collaboration",
    desc: "Expect fast replies, clear updates, and a smooth workflow from idea to deployment.",
  },
  {
    imgPath: "/images/time.png",
    title: "Deadline Driven",
    desc: "Timely delivery without sacrificing quality — always aligned with your project timeline.",
  },
];


const techStackImgs = [
  {
    name: "React Developer",
    imgPath: "/images/logos/react.png",
  },
  {
    name: "Python Developer",
    imgPath: "/images/logos/python.svg",
  },
  {
    name: "Backend Developer",
    imgPath: "/images/logos/node.png",
  },
  {
    name: "Interactive Developer",
    imgPath: "/images/logos/three.png",
  },
  {
    name: "Project Manager",
    imgPath: "/images/logos/git.svg",
  },
];

const techStackIcons = [
  {
    name: "Simple Pricing(Starter)",
    modelPath: "/models/Dragon Evolved.glb",
    scale: 1,
    rotation: [0, 0, 0],
  },
  {
    name: "Pro",
    modelPath: "/models/Fish.glb",
    scale: 0.8,
    rotation: [0, 0, 0],
  },
  {
    name: "EnterPrise",
    modelPath: "/models/Cubone.glb",
    scale: 5,
    rotation: [0, -Math.PI / 2, 0],
  },
  {
    name: "Business",
    modelPath: "/models/three.js-transformed.glb",
    scale: 0.05,
    rotation: [0, 0, 0],
  },
  {
    name: "Call to Action",
    modelPath: "/models/git-svg-transformed.glb",
    scale: 0.05,
    rotation: [0, -Math.PI / 4, 0],
  },
];

const expCards = [
  {
    review: "Reactin began with a simple goal — automate meaningful conversations on LinkedIn. What started as a side project is now a full-fledged tool helping businesses connect authentically at scale.",
    imgPath: "/images/exp1.png",
    logoPath: "/images/logo1.png",
    title: "The Origin Story",
    date: "2023 - Early 2024",
    responsibilities: [
      "Identified gaps in manual LinkedIn outreach and crafted the initial version of the automation flow.",
      "Built the first MVP with single-sender capability, campaign scheduling, and custom message templates.",
      "Validated the product with early-stage B2B users and startup founders.",
    ],
  },
  {
    review: "With growing demand, Reactin expanded to support multi-sender campaigns — empowering teams to scale outreach without being flagged by LinkedIn’s algorithm.",
    imgPath: "/images/exp2.png",
    logoPath: "/images/logo2.png",
    title: "Scaling Outreach",
    date: "Mid 2024",
    responsibilities: [
      "Launched Multi-Sender Support, enabling multiple LinkedIn accounts to operate under a single campaign.",
      "Introduced audience segmentation filters like job title, company size, and follower count.",
      "Enhanced personalization with dynamic fields and response-based follow-up triggers.",
    ],
  },
  {
    review: "Reactin is now more than a tool — it's an ecosystem for intent-based automation. From lead magnets to demo bookings, it adapts to every conversion moment.",
    imgPath: "/images/exp3.png",
    logoPath: "/images/logo3.png",
    title: "Today & Beyond",
    date: "Late 2024 - 2025",
    responsibilities: [
      "Integrated event-based triggers: downloaded resource, attended webinar, booked demo, or visited website.",
      "Built an affiliate system, in-app analytics, and a learning hub for outreach training.",
      "On track to release AI-powered messaging suggestions and deeper CRM integrations.",
    ],
  },
];


const expLogos = [
  {
    name: "logo1",
    imgPath: "/images/logo1.png",
  },
  {
    name: "logo2",
    imgPath: "/images/logo2.png",
  },
  {
    name: "logo3",
    imgPath: "/images/logo3.png",
  },
];

const testimonials = [
  {
    name: "ScaleMate CRM",
    mentions: "@scalematecrm",
    review:
      "Reactin helped us reduce cold outreach time by 60%. The intent-based automations ensure we're only connecting with people who’ve shown genuine interest — game changer for our team.",
    imgPath: "/images/client1.png",
  },
  {
    name: "Lynx Talent",
    mentions: "@lynxtalent",
    review:
      "We used Reactin to automate follow-ups after our webinar. The post-event campaigns doubled our demo bookings without any manual effort. Smooth integration and simple UI!",
    imgPath: "/images/client2.png",
  },
  {
    name: "Founders Junction",
    mentions: "@foundersjunction",
    review:
      "Reactin’s multi-sender campaigns allowed our entire team to stay under LinkedIn’s radar while scaling outreach. The smart triggers and personalization make it feel human.",
    imgPath: "/images/client3.png",
  },
  {
    name: "Clarity AI",
    mentions: "@clarityai",
    review:
      "The lead magnet automation is genius. As soon as someone downloads our resource, Reactin starts a meaningful conversation. It’s like having a 24/7 SDR that never sleeps.",
    imgPath: "/images/client4.png",
  },
  {
    name: "Launchwise",
    mentions: "@launchwisehq",
    review:
      "Reactin gave us visibility into what works. The built-in analytics and A/B testing tools helped us fine-tune our messages for max engagement. Totally worth it.",
    imgPath: "/images/client5.png",
  },
  {
    name: "Wavestack",
    mentions: "@wavestack",
    review:
      "From post engagement to lead nurturing, Reactin handles the entire journey. It’s not just automation, it’s relationship-building at scale.",
    imgPath: "/images/client6.png",
  },
];


const socialImgs = [
  {
    name: "insta",
    imgPath: "/images/insta.png",
  },
  {
    name: "fb",
    imgPath: "/images/fb.png",
  },
  {
    name: "x",
    imgPath: "/images/x.png",
  },
  {
    name: "linkedin",
    imgPath: "/images/linkedin.png",
  },
];

export {
  words,
  abilities,
  logoIconsList,
  counterItems,
  expCards,
  expLogos,
  testimonials,
  socialImgs,
  techStackIcons,
  techStackImgs,
  navLinks,
};

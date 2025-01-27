/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Sanchi Bhutra",
  title: "Hi, I'm Sanchi",
  subTitle: emoji(
    "A professional daydreamer turned product enthusiast from BITS Pilani. I specialize in turning ideas into reality Whether it’s building SaaS products, hunting for the next big idea, or yapping professionally on LinkedIn, I thrive on creativity, curiosity, and a pinch of chaos. If you’re into innovative solutions, clever wordplay, or just good vibes, you’re in the right place. Let’s create something amazing together!"
  ),
  resumeLink:
    "https://drive.google.com/file/d/1ofFdKF_mqscH8WvXkSObnVvC9kK7Ldlu/view?usp=sharing", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  linkedin: "https://in.linkedin.com/in/sanchi-bhutra-%F0%9F%A6%8B-839173250",
  gmail: "sanchibhutra@gmail.com",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "PASSIONATE PRODUCT ENTHUSIAST EXPLORING INNOVATION & USER-CENTRIC SOLUTIONS",
  skills: [
    emoji(
      "⚡ Design and develop innovative, user-centric products that solve real-world problems"
    ),
    emoji("⚡ Drive product growth through data-driven decisions and agile methodologies"),
    emoji(
      "⚡ Seamless integration of third-party tools and platforms to enhance product functionality and scalability"
    )
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "confluence",
      fontAwesomeClassname: "fab fa-confluence"
    },
    {
      skillName: "figma",
      fontAwesomeClassname: "fab fa-figma"
    },
    {
      skillName: "excel",
      fontAwesomeClassname: "fab fa-microsoft"
    },
    {
      skillName: "jira",
      fontAwesomeClassname: "fab fa-jira"
    },
    {
      skillName: "slack",
      fontAwesomeClassname: "fab fa-slack"
    },
    {
      skillName: "google analytics",
      fontAwesomeClassname: "fab fa-google"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "Birla Institute of Technology and Science, Pilani",
      logo: require("./assets/images/bitslogo.png"),
      subHeader: "B.E. in Chemical Engineering",
      duration: "September 2022 - June 2026",
      
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "User Research", //Insert stack or technology you have experience in
      progressPercentage: "90%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Roadmap Planning",
      progressPercentage: "70%"
    },
    {
      Stack: "Problem Solving",
      progressPercentage: "60%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Product Management Intern",
      company: "Symplora",
      companylogo: require("./assets/images/Screenshot 2025-01-26 at 1.13.19 AM.png"),
      date: "Nov 2024 – Present",
      descBullets:[
        "Developed payroll modules for investments, flexi-pay benefits, and reports & analytics, enhancing financial operations and user experience.",
        "Streamlined HR processes by implementing email communication workflows and document signing automation.",
        "Designed an organization tree module for visualizing reporting structures and managing dynamic hierarchies.",
        "Built a real-time chat module, improving team communication and collaboration within the platform."
      ] 
    },


    {
      role: "Product Manager Intern",
      company: "Mroller",
      companylogo: require("./assets/images/mroller_logo.jpeg"),
      date: "Jan 2024 – May 2024",
      descBullets: [
        'Led user-centric design for 4 MVPs (testing, ATS, integrations, frameworks), enhancing UI/UX and ensuring product rollout readiness.',
        'Developed APIs and created comprehensive documentation for seamless platform integration, improving functionality and user experience.',
        "Collaborated with cross-functional teams to gather feedback from 150+ HRs globally, driving the development of 3 key features: platform integrations, AI job prompt generation, and multi-platform job posting."
      ]
    },
    {
      role: "Product Management Intern",
      company: "Wizdom",
      companylogo: require("./assets/images/wizdom_logo.jpeg"),
      date: " May 2024 – July 2024",
      descBullets: [
        'Led user research, conducting 30+ interviews to gather insights and identify pain points, driving user-centric feature enhancements.',
        'Implemented in-app feature changes, informed by research, to improve user engagement and increase app open rates by 28%.',
        "Developed marketing strategies focused on making the Wizdom app a habitual part of users' routines, enhancing retention and stickiness."
      ]    },
    
      {
        role: "Summer Intern",
        company: "Grasim industries",
        companylogo: require("./assets/images/Aditya_Birla_Grasim_Logo.png"),
        date: " May 2024 – July 2024",
        descBullets: [
          'Analyzed operational data from 4 machines using Excel and Power BI, identifying key performance metrics and pinpointing the most efficient machine.',
          'Recommended machine replacements based on data-driven insights, contributing to a 15% improvement in operational efficiency.'        ]    }
    
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: false // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Projects",
  subtitle: "Some Projects I have done",
  projects: [
    {
      image: require("./assets/images/Zomato Logo (1).png"),
      projectName: "Zomato Review System",
      projectDesc: "For Zomato, I reimagined the review system to make user feedback seamless, engaging, and rewarding. Key features included an Audio-to-Text Review Assistant for effortless review submission, smart prompts for detailed feedback, real-time sentiment analysis for respectful tone, and multi-language support for inclusivity. A Rewards System incentivized participation with credits redeemable for discounts and freebies, while AI moderation ensured authenticity. These enhancements simplified feedback, gamified the process, and fostered trust and engagement in the Zomato community.",
      footerLink: [
        {
          name: "PPT",
          url: "https://www.canva.com/design/DAGPPepQUdM/9gz8aOu-kJJB1fzJRruwBA/edit?utm_content=DAGPPepQUdM&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton"
        },
        {
          name: "PRD",
          url: "https://docs.google.com/document/d/1J2riFVXeJag3C2eTw0yz-vm6JKIqlXxcj8wriXOe1qw/edit?usp=sharing"
        }

        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/recipecup.png"),
      projectName: "Recipe Cup",
      projectDesc: "Recipe Cup is a food-tech project I worked on to empower home chefs and connect them with food enthusiasts. I contributed to creating a zero-commission model that allows chefs to sell signature dishes, plan pre-orders, and showcase homemade ingredients like sauces and spices. I also designed a Weekly Menu Planner with dietary filters and categorized meal options to make meal discovery easier. By integrating detailed product descriptions, allergen transparency, and real-time availability, I aimed to deliver a seamless and inclusive user experience while fostering a community that celebrates food and creativity.",
      footerLink: [
        {
          name: "PPT",
          url: "hhttps://www.canva.com/design/DAGKeHfMqEM/FH2uKi667qux1_LYC5XIXg/edit?utm_content=DAGKeHfMqEM&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton"
        },

        {
          name: "Figma",
          url: "https://www.figma.com/design/kZqLb6pOjsnotIIT7yzzhl/Food-delivery-app?node-id=0-1&t=xRoRGyYUGxplor7l-1"
        }

      ]
    },
    {
      image: require("./assets/images/groww.jpg"),
      projectName: "Groww",
      projectDesc: "The Groww project focused on enhancing the user experience of a D2C investment platform by addressing beginner support, personalized insights, and reactive customer service challenges. I improved onboarding flows with step-by-step guidance and introduced the 'Guide Me' feature to provide personalized investment recommendations. Tools like 'Invest Like a Pro' and 'Groww with Clarity' were refined for better usability and transparency. By integrating interactive analytics, educational resources, and key performance metrics, the project positioned Groww as a user-centric platform fostering trust and engagement.",
      footerLink: [
        {
          name: "PPT",
          url: "https://www.canva.com/design/DAGGmnoOqu4/UpBF2Q5af8V6rngpSSMQcA/edit?utm_content=DAGGmnoOqu4&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton"
        }

      ]
    },
    {
      image: require("./assets/images/Medium Logo.png"),
      projectName: "Medium",
      projectDesc: "For the Medium project, I focused on improving content discovery, enhancing the reading experience, and boosting writer engagement. I proposed AI-driven recommendations for personalized content discovery, interactive analytics to help writers understand audience behavior, and updates to the Partner Program for greater transparency. By defining metrics like content consumption and writer retention, I worked to strengthen connections between readers and writers and enhance Medium’s overall user experience.",
      footerLink: [
        {
          name: "PPT",
          url: "https://www.canva.com/design/DAGL4xAqiA4/aQmQ9ZqQ2lXxHb1XpFHewA/edit?utm_content=DAGL4xAqiA4&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton"
        }

      ]
    },
    {
      image: require("./assets/images/BB Now Logo.webp"),
      projectName: "Big Basket Now",
      projectDesc: "For this project, I worked on improving the user experience by addressing challenges like a cluttered UI, low-quality visuals, and unclear product details. Solutions included a redesigned interface with high-quality images, better delivery address management, and a dynamic flash sale bar to highlight deals. I also introduced features like 'Recipe Roulette' for personalized meal ideas and a 'Smart Coupons' system offering tailored discounts and loyalty rewards. These enhancements aimed to boost engagement, retention, and sales.",
      footerLink: [
        {
          name: "PPT",
          url: "https://www.canva.com/design/DAGI2xounq4/txJzH2Zd3ZGJAwh1YV3qtw/edit?utm_content=DAGI2xounq4&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton"
        }

      ]
    },
    {
      image: require("./assets/images/Cleartrip Logo.png"),
      projectName: "ClearTrip",
      projectDesc: "For Cleartrip, I focused on enhancing the travel planning experience by addressing issues like inaccurate room details, confusing pricing, and limited itinerary management. I proposed the Hyper-Personalized Itinerary Builder to create tailored travel plans with real-time activity suggestions and verified hotel details, and the Real-Time Travel Assistant to provide live updates, predictive cost management, and multilingual support. These solutions aimed to improve user satisfaction and boost booking conversions.",
      footerLink: [
        {
          name: "PPT",
          url: "https://www.canva.com/design/DAGIl9dlRvQ/xQibTR4A8K40eqzEzrr4XA/edit?utm_content=DAGIl9dlRvQ&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton"
        }

      ]
    }


  ],
  display: true // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle:
    "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

  achievementsCards: [
    {
      title: "Google Code-In Finalist",
      subtitle:
        "First Pakistani to be selected as Google Code-in Finalist from 4000 students from 77 different countries.",
      image: require("./assets/images/codeInLogo.webp"),
      imageAlt: "Google",
      footerLink: [
        {
          name: "Certification",
          url: "https://drive.google.com/file/d/0B7kazrtMwm5dYkVvNjdNWjNybWJrbndFSHpNY2NFV1p4YmU0/view?usp=sharing"
        },
        {
          name: "Award Letter",
          url: "https://drive.google.com/file/d/0B7kazrtMwm5dekxBTW5hQkg2WXUyR3QzQmR0VERiLXlGRVdF/view?usp=sharing"
        },
        {
          name: "Google Code-in Blog",
          url: "https://opensource.googleblog.com/2019/01/google-code-in-2018-winners.html"
        }
      ]
    },
    {
      title: "Google Assistant Action",
      subtitle:
        "Developed a Google Assistant Action JavaScript Guru that is available on 2 Billion devices world wide.",
      image: require("./assets/images/googleAssistantLogo.webp"),
      imageAlt: "Google Assistant Action Logo",
      footerLink: [
        {
          name: "View Google Assistant Action",
          url: "https://assistant.google.com/services/a/uid/000000100ee688ee?hl=en"
        }
      ]
    },

    {
      title: "PWA Web App Developer",
      subtitle: "Completed Certifcation from SMIT for PWA Web App Development",
      image: require("./assets/images/pwaLogo.webp"),
      imageAlt: "PWA Logo",
      footerLink: [
        {name: "Certification", url: ""},
        {
          name: "Final Project",
          url: "https://pakistan-olx-1.firebaseapp.com/"
        }
      ]
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Achievements",
  subtitle:
    "Driven to create impactful projects and share insights to empower others.",
  displayMediumBlogs: "true", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [
    {
      // url: "https://blog.usejournal.com/create-a-google-assistant-action-and-win-a-google-t-shirt-and-cloud-credits-4a8d86d76eae",
      title: "ReThink Systems",
      description:
        "Secured 2nd place as the youngest participant in a case study competition conducted by Rethink Systems, competing against 150+ participants and demonstrating strong analytical skills"
    },
    {
      // url: "https://medium.com/@saadpasta/why-react-is-the-best-5a97563f423e",
      title: "Product Space",
      description:
        "Ranked in the top 0.1 percentile in a case study by Product Space for Recipe Cup and secured 3rd place in People’s Choice Awards out of 300+ entries."
    },
    {
      // url: "https://blog.usejournal.com/create-a-google-assistant-action-and-win-a-google-t-shirt-and-cloud-credits-4a8d86d76eae",
      title: "Linkedin",
      description:
        "Mastered the art of turning scrolls into follows by creating binge-worthy content that hooked 10,000+ followers on LinkedIn in just a few months."
    },
    {
      // url: "https://medium.com/@saadpasta/why-react-is-the-best-5a97563f423e",
      title: "BITS Embryo",
      description:
        "Hosted and managed large-scale events with 5,000–6,000 attendees, including celebrity appearances, successfully executing logistics, negotiations, and crowd management as a core member of BITS Embryo."
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
  ),

  talks: [
    {
      title: "Build Actions For Google Assistant",
      subtitle: "Codelab at GDG DevFest Karachi 2019",
      slides_url: "https://bit.ly/saadpasta-slides",
      event_url: "https://www.facebook.com/events/2339906106275053/"
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"
  ],
  display: false // Set false to hide this section, defaults to true
};

// Resume Section
const resumeSection = {
  title: "Resume",
  subtitle: "Feel free to download my resume",

  // Please Provide with Your Podcast embeded Link
  display: true // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  email_address: "sanchibhutra@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: true // Set true to display this section, defaults to false
};

const isHireable = false; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable,
  resumeSection
};

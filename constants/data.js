const userData = {
  githubUsername: "westerandr",
  name: "Andre Westerlund",
  designation: "Full-Stack Developer",
  avatarUrl: "/avatar.png",
  email: "andrewest_04@hotmail.com",
  address: "Auckland, New Zealand",
  projects: [
    {
      title: "Samoa Government Site Checker",
      link: "https://www.samoagov.online/",
      imgUrl: "/samoa_site_checker.png",
      description: "Web app that checks the availability of Samoa Government Websites",
      technology: "Astro Web Framework, Tailwind CSS, Netlify Functions",
    },
    {
      title: "Samoa IT Association Database Management System",
      link: "https://register.sita.ws/",
      imgUrl: "/sita.png ",
      description: "Worked on a team developing the SITA Database Web App with features such as online registration, information collection, approval process workflow, fees collection and membership reminders.",
      technology: "Vue 3, Inertia, Laravel 10, Tailwind CSS, PHP 8, Docker, GitHub Actions.",
    },
    {
      title: "Doblins NFT Smart Contract",
      link: "https://etherscan.io/address/0x14e110de16cb44a2394759a3bfde861e2d989fd9#code",
      imgUrl: "/doblins.png ",
      description: "Partnered with an NFT Founder to write the an ERC721 Smart Contract for the Doblins NFT Collection",
      technology: "Solidity, Remix, Python",
    },
    {
      title: "Vodafone Samoa Website",
      link: "https://www.vodafone.com.ws/",
      imgUrl: "/vodafone.png ",
      description: "Complex website built with custom features and enhancements.",
      technology: "Wordpress, Docker, Nginx, CentOS Server",
    },
    {
      title: "Apia Finance Website",
      link: "https://www.apiafinance.com/",
      imgUrl: "/apia-finance.png ",
      description: "Simple and clean website developed for a client",
      technology: "Wordpress & Digital Ocean",
    },
    {
      title: "Passion Studios Website",
      link: "https://www.passionstudios.ws/",
      imgUrl: "/passionstudios.png ",
      description: "Website portfolio for Passion Studio. ",
      technology: "HTML, CSS, JS, JQuery & GitHub Pages",
    },
    {
      title: "Coupon Web Application (Internal - VS)",
      link: "#",
      imgUrl: "/vodafone-logo.png ",
      description: "Coupon Generator internal staff application that allowed the generation and redemption of $20 top up vouchers for customers spending $200 or more on handheld devices",
      technology: "HTML, CSS, JS, Bootstrap, EJS, ExpressJS, NodeJS, MonogDB, Docker",
    },
    {
      title: "Customer Feedback App & Web App (Internal - VS)",
      link: "#",
      imgUrl: "/vodafone-logo.png ",
      description: "Customer Feedback App to capture simple feedback from customers pertaining a particular retail store. The Web app provided retail managers with insight on customer perception on stores.",
      technology: "Flutter, React, CSS in JS, ExpressJS, NodeJS, MonogDB, Docker",
    },
    {
      title: "Vodafone Roadshow App (Internal - VS)",
      link: "#",
      imgUrl: "/vodafone-logo.png ",
      description: "App used daily by roadshow teams to record handheld device purchases, churn customers, and record credit top ups. Web App used by roadshow leads to track team revenue and generate reports.",
      technology: "Flutter, HTML, CSS, JS, EJS, ExpressJS, NodeJS, MonogDB, Docker",
    },
    {
      title: "Vodafone Promotions Entry Checker (Internal - VS)",
      link: "#",
      imgUrl: "/vodafone-logo.png ",
      description: "Web Application used by the Marketing Team to query customer entries for various promotions. This integrated with existing legacy systems used for SMS, Voices, Bundle purchases.",
      technology: "HTML, CSS, JS, EJS, ExpressJS, NodeJS",
    },
    {
      title: "Mobile Database Management System (Internal - VS)",
      link: "#",
      imgUrl: "/vodafone-logo.png ",
      description: "Web Application used to bulk store, update, and query off-net phone/mobile numbers",
      technology: "HTML, CSS, JS, EJS, ExpressJS, NodeJS",
    },
    {
      title: "Ticket System (Internal - VS)",
      link: "#",
      imgUrl: "/vodafone-logo.png ",
      description: "App used by field technicians to work on trouble tickets and service orders. Web App used by operators to verify ticket completion, view historical reports, and assign tickets.",
      technology: "Flutter, ReactJS, Material UI, Redux, ExpressJS, NodeJS",
    },
    {
      title: "Mynas Gas Station Invoice Management System",
      link: "#",
      imgUrl: "/mynas.png ",
      description: "Manage invoices, bills, and vehicles of clients.",
      technology: "HTML, CSS, JS, EJS, ExpressJS, NodeJS",
    },
  ],
  about: {
    title:
      "I'm a software developer that loves building products and web applications that brings value to those around me",
    description: [
      `I've been fascinated with computers and software since I was 5 years old. Growing up, I have always had computers and applications in the back of my mind.`,
      `After receiving a fully funded scholarship to study Computer Science at Victoria University in Wellington NZ; it has helped me to understand the fundamentals of data structures and algorithms. This allowed me to branch off into web development which I quite enjoyed and still do to this day.`,
      `I've been utilizing React, Vue, Bootstrap, Tailwind, Node.js, Express, Django, MongoDB, Flutter, MySQL, PHP, Wordpress, Nginx, Apache to name a few.`,
      `I can say confidently that I can build full stack web applications from start to finish either collaborating with a team or solo. Send me a message if our interests align`
    ],
    currentProject: "Growing Samoa Stack Overflow",
    currentProjectUrl: "https://www.facebook.com/groups/948415479224570",
  },
  achievements: [
    {
      title: "Foundation Top Arts Student",
      organization: "National University of Samoa",
      month: "December",
      year: "2014",
      imgUrl: "/nus.png"
    },
    {
      title: "Bachelor of Science - Computer Science",
      organization: "Victoria University of Wellington",
      month: "December",
      year: "2017",
      imgUrl: "/vuw.png"

    },
    {
      title: "Bachelor of Science with Honors - Computer Science",
      organization: "Victoria University of Wellington",
      month: "December",
      year: "2018",
      imgUrl: "/vuw.png"
    },
    {
      title: "Vodafone Samoa Employee Appreciation Award",
      organization: "Vodafone Samoa",
      month: "",
      year: "2019, 2020, 2021",
      imgUrl: "/vodafone-logo.png"
    },
    {
      title: "Meta Front-End Developer Certificate",
      organization: "Coursera",
      month: "February",
      year: "2023",
      imgUrl: "/meta.png"
    },
    {
      title: "Meta Back-End Developer Certificate",
      organization: "Coursera",
      month: "February",
      year: "2023",
      imgUrl: "/meta.png"
    },
  ],
  experience: [
    {
      title: "Marketing Cloud Developer",
      company: "Sleeq NZ",
      year: "2022",
      companyLink: "https://www.sleeq.global",
      desc: "Currently working as a Marketing Cloud Developer, specializing in the Marketing Cloud platform in the Salesforce Ecosystem",
    },
    {
      title: "Founder",
      company: "Samoa Stack Overflow",
      year: "2021",
      companyLink: "#",
      desc: "Community of Samoa Developers/Programmers sharing knowledge and advocating for growing the tech industry in Samoa",
    },
    {
      title: "Software Developer",
      company: "Vodafone Samoa",
      year: "2019",
      companyLink: "https://www.vodafone.com.ws",
      desc: "Built, tested and deployed web applications for internal processes, learnt a lot of Linux Lingo, and built websites for external clients",
    },
    {
      title: "Bachelor of Science with Honors",
      company: "Victoria University of Wellington",
      year: "2018",
      companyLink: "https://www.wgtn.ac.nz/",
      desc: "Majored in Computer Science, had an additional year where I took postgraduate courses and a full year 400 level based project on securing a web server in the Wyvern Programming Language",
    },
    {
      title: "Bachelor of Science",
      company: "Victoria University of Wellington",
      year: "2017",
      companyLink: "https://www.wgtn.ac.nz/",
      desc: "Majored in Computer Science",
    },
    {
      title: "Summer Internship",
      company: "Datacom NZ",
      year: "2017",
      companyLink: "https://intel.com",
      desc: "Learned Microsoft ASP .NET and worked on a feature for a internal web application that scanned Magnetic Tapes into Data Centre Storage",
    },
    {
      title: "National University of Samoa - University Preparatory Year Certificate",
      company: "National University of Samoa",
      year: "2014",
      companyLink: "https://www.nus.edu.ws/",
      desc: "First in Foundation Arts in subjects History, Geography and Sociology. 2nd with a 99% finals mark in Computer Science",
    },
    {
      title: "IT Helpdesk Intern",
      company: "Samoa Commercial Bank",
      year: "2013",
      companyLink: "https://www.scbl.ws/",
      desc: "Learned the general IT day to day tasks such as troubleshooting printers, putting a simple pc together, and wiring together a CAT-5 cable",
    },
    {
      title: "High School",
      company: "Robert Louis Stevenson Secondary School",
      year: "2013",
      companyLink: "https://www.facebook.com/rlssschool/",
      desc: "",
    },
  ],
  resumeUrl: "#",
  socialLinks: {
    linkedin: "https://www.linkedin.com/in/andrewesterlund/",
    github: "https://github.com/westerandr",
  },
};

export default userData;

export interface SkillGroup {
  category: string;
  skills: string[];
}

export interface ProjectLink {
  label: string;
  href: string;
}

export interface Project {
  id: string;
  name: string;
  years: string;
  role: string;
  context: string;
  bullets: string[];
  tags: string[];
  lesson: string;
  links?: ProjectLink[];
}

export type ContactIcon = "github" | "linkedin" | "email";

export interface ContactLink {
  label: string;
  icon: ContactIcon;
  href?: string;
  copy?: string;
}

export const profile = {
  name: "Wesley Chan",
  headline: ["Wesley Chan,", "Computer Scientist", "& Biochemist"],
  subtext:
    "Student at HKUST. Focused on low-cost healthcare and innovative biological pedagogy.",
  education: ["BSc Computer Science & Biochemistry", "(2024 - 2028, Year 3)"],
  focus: ["Global Health Equity", "Biological Pedagogy", "Interdisciplinary Tech"],
};

export const navLinks = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

export const about = [
  "I'm a third-year student at HKUST pursuing a double major in Biochemistry and Computer Science. My work spans both sides - at the lab bench and the computer. This portfolio showcases my work on the computer end.",
  "I hope to use both perspectives to elevate the accessibility of healthcare and biological education."
];

export const skillGroups: SkillGroup[] = [
  {
    category: "Languages",
    skills: ["Python", "JavaScript", "TypeScript", "R", "SQL"],
  },
  {
    category: "Frameworks & Databases",
    skills: ["React", "Django", "PostgreSQL", "MySQL", "SQLite"],
  },
  {
    category: "Data Science & Visualisation",
    skills: ["Pandas", "NumPy", "SciPy", "Scikit-learn", "Matplotlib", "Seaborn", "Tidyverse"],
  },
  {
    category: "Other Tools & Platforms",
    skills: ["Git", "Linux", "ToolJet"],
  },
  {
    category: "Bioengineering & Lab",
    skills: ["Synthetic Biology", "Wearables Fabrication", "Bacterial Engineering", "FreeCAD"],
  },
];

export const projects: Project[] = [
  {
    id: "haputele",
    name: "HapuTele",
    years: "2024-25",
    role: "Lead full-stack builder",
    context:
      "Telemedicine platform supporting healthcare initiatives in Sri Lanka (SIGHT).",
    bullets: [
      "Shipped a telemedicine platform **deployed to 100+ households**",
      "Designed the PostgreSQL schema behind patient and consultation records",
      "Combined ToolJet low-code components with custom React components for rapid delivery in under 2 months"
    ],
    tags: ["React", "JavaScript", "PostgreSQL", "ToolJet"],
    lesson:
      "Building tools people use involves leveraging existing solutions and shipping quickly, not just writing code for timely delivery. A solution is only as good as its adoption which requires effective communication and user experience.",
    links: [
      {
        label: "More about project motivation in local news",
        href: "https://www.thestandard.com.hk/news/article/307702/Hong-Kong-students-use-tech-to-revolutionize-healthcare-in-developing-world"
      },
      {
        label: "More about project details in a published abstract",
        href: "https://jphe.amegroups.org/article/view/11298/html"
      }
    ]
  },
  {
    id: "wearables",
    name: "Bioengineering Healthcare Wearables Lab",
    years: "2025 - Present",
    role: "Undergraduate researcher",
    context:
      "Handle Wet Lab and Computational ends of various projects in developing wearable and point-of-care devices for healthcare applications.",
    bullets: [
      "Built signal-processing and analysis pipelines that clean and contextualise raw, noisy sensor data.",
      "Automated analysis and visualisation workflows with Python and R for reproducible and large-scale data analysis.",
    ],
    tags: ["Python", "Pandas", "NumPy", "SciPy", "R", "Matplotlib", "Seaborn"],
    lesson:
      "Rigorous and reproducible research is extensive. Using tools to automate and streamline analysis is as important as the research itself.",
  },
  {
    id: "igem",
    name: "International Genetically Engineered Machine (iGEM) Team",
    years: "2025",
    role: "Dry-Lab Leader",
    context:
      "Computational modelling of bacterial biosensors in E. coli and Pseudomonas putida for the HKUST iGEM team.",
    bullets: [
      "Modelled biosensor dynamics with ODE systems.",
      "Coupled literature data with MATLAB's SimBiology to simulate and predict biosensor behavior.",
    ],
    tags: ["Python", "MATLAB", "SimBiology"],
    lesson:
      "Modelling biological systems requires understanding of the underlying mechanisms and translating it into mathematical representations.",
    links: [
      {
        label: "Read about the entire project on the team page.",
        href: "https://2025.igem.wiki/hkust/",
      }
    ]
  },
  {
    id: "bab",
    name: "Build a Bacteria",
    years: "2025",
    role: "Sole developer",
    context:
      "Synthetic biology educational game built in under a week for the HKUST STEAM Day booth.",
    bullets: [
      "**~500 player sessions over 3 days** with zero fatal crashes",
      "Interactive and quick gameplay to target young students.",
      "Introduced the concept of 'tradeoffs' in genetic engineering between optimising promoters and genes.",
    ],
    tags: ["Python", "Pygame"],
    lesson:
      "A live demo with real users and a clear goal beats feature count.",
    links: [
      {
        label: "GitHub repository",
        href: "https://github.com/HoomanBeing727/BaB",
      },
    ],
  },
];

export const contact = {
  heading: "Contact",
  intro:
    "Feel free to reach out if my work interests you.",
  links: [
    { label: "GitHub", href: "https://github.com/HoomanBeing727", icon: "github" },
    { label: "LinkedIn", href: "https://www.linkedin.com/in/wesley-chan-739180322", icon: "linkedin" },
    { label: "Email", icon: "email", copy: ["chcw06", "gmail.com"].join("@")},
  ] satisfies ContactLink[],
};

import {
  BarChart3,
  Bot,
  BrainCircuit,
  CalendarCheck,
  ChartNoAxesCombined,
  CheckCircle2,
  Compass,
  FileText,
  Fingerprint,
  Megaphone,
  MessageSquareText,
  PenTool,
  Rocket,
  Search,
  Share2,
  Sparkles,
  Target,
  Workflow,
  Zap
} from "lucide-react";
import { slugify } from "@/lib/utils";

export const site = {
  name: "Digital Saroz",
  role: "AI Marketing Expert & Consultant",
  email: "sputuwal@gmail.com",
  phone: "9849579303",
  location: "Banepa, Kavre, Nepal"
};

export const navLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" }
];

export const services = [
  {
    title: "AI Marketing Strategy",
    icon: BrainCircuit,
    description: "Build a practical AI roadmap for acquisition, content, automation, and growth.",
    benefits: ["Clear AI adoption plan", "Channel priorities", "Campaign intelligence", "Executive-ready roadmap"],
    tools: ["ChatGPT", "Gemini", "Google Analytics", "Notion"],
    faqs: [
      ["How long does a strategy engagement take?", "Most strategy engagements are completed in 2 to 4 weeks depending on business complexity."],
      ["Do I need existing marketing data?", "Helpful, but not required. We can begin with interviews, competitor research, and current funnel review."]
    ]
  },
  {
    title: "Marketing Automation",
    icon: Workflow,
    description: "Automate repetitive marketing workflows across lead capture, follow-up, and reporting.",
    benefits: ["Faster follow-ups", "Less manual work", "Cleaner lead tracking", "Better campaign consistency"],
    tools: ["Zapier", "Notion", "Meta Ads", "Google Sheets"],
    faqs: [
      ["Can this work with my current tools?", "Yes. The first step is mapping your existing tools and identifying the highest-impact automation points."],
      ["Will automation replace my team?", "No. It removes repetitive tasks so the team can focus on creative and strategic work."]
    ]
  },
  {
    title: "AI Consulting",
    icon: Sparkles,
    description: "Get expert guidance on using AI tools responsibly and profitably inside your business.",
    benefits: ["Tool selection", "Team training", "Process design", "Risk-aware implementation"],
    tools: ["ChatGPT", "Claude", "Gemini", "Perplexity"],
    faqs: [
      ["Who is consulting best for?", "Founders, marketing teams, creators, and local businesses that want clarity before investing in AI systems."],
      ["Can sessions be remote?", "Yes. Sessions can be remote or arranged locally where practical."]
    ]
  },
  {
    title: "Prompt Engineering",
    icon: MessageSquareText,
    description: "Create reusable prompt systems for content, research, sales, SEO, and operations.",
    benefits: ["Reusable prompt libraries", "Higher output quality", "Brand-consistent content", "Team-ready workflows"],
    tools: ["ChatGPT", "Claude", "Gemini", "Notion"],
    faqs: [
      ["Do you create prompts for specific teams?", "Yes. Prompts can be designed for marketing, sales, content, support, or leadership workflows."],
      ["Will my team learn how to use them?", "Yes. Prompt systems include simple usage guidance and examples."]
    ]
  },
  {
    title: "AI Content Creation",
    icon: PenTool,
    description: "Plan and produce sharper AI-assisted content for blogs, ads, social, and email.",
    benefits: ["Content calendar", "Faster production", "Better hooks", "Reusable brand voice"],
    tools: ["ChatGPT", "Canva", "Midjourney", "Meta Ads"],
    faqs: [
      ["Is the content fully AI-written?", "AI assists the process, but final direction, editing, and quality control stay human-led."],
      ["Can you match our brand voice?", "Yes. We build voice rules from your existing content, audience, and positioning."]
    ]
  },
  {
    title: "SEO Optimization",
    icon: Search,
    description: "Improve organic visibility with keyword strategy, content structure, and technical SEO fixes.",
    benefits: ["Keyword opportunities", "Content briefs", "On-page improvements", "Organic growth plan"],
    tools: ["Google Analytics", "Search Console", "ChatGPT", "Ahrefs-style workflows"],
    faqs: [
      ["Do you guarantee rankings?", "No responsible SEO expert can guarantee rankings, but the work is designed around measurable improvement."],
      ["Is this for new websites too?", "Yes. New sites benefit from SEO planning before content and structure are finalized."]
    ]
  },
  {
    title: "Social Media Marketing",
    icon: Share2,
    description: "Design content systems and campaigns that turn attention into qualified demand.",
    benefits: ["Platform strategy", "Content pillars", "Campaign ideas", "Performance review"],
    tools: ["Meta Ads", "Canva", "ChatGPT", "Google Analytics"],
    faqs: [
      ["Which platforms do you support?", "Strategy can cover Facebook, Instagram, TikTok, LinkedIn, and YouTube depending on your audience."],
      ["Do you create a posting calendar?", "Yes. Calendars can be included with themes, hooks, formats, and calls to action."]
    ]
  },
  {
    title: "AI Chatbot Consulting",
    icon: Bot,
    description: "Plan chatbot experiences for customer support, lead qualification, and product guidance.",
    benefits: ["Conversation flows", "Lead qualification", "Support automation", "Escalation design"],
    tools: ["OpenAI", "Zapier", "Website chat tools", "CRM-ready flows"],
    faqs: [
      ["Can a chatbot collect leads?", "Yes. It can qualify visitors and route serious inquiries into your CRM or inbox."],
      ["Do you build the chatbot?", "This service focuses on strategy and implementation support, with build options based on tools selected."]
    ]
  },
  {
    title: "Lead Generation",
    icon: Target,
    description: "Create AI-enhanced funnels that attract, qualify, and nurture better prospects.",
    benefits: ["Lead magnets", "Funnel mapping", "Nurture workflows", "Conversion tracking"],
    tools: ["Meta Ads", "Google Ads", "Zapier", "Google Analytics"],
    faqs: [
      ["What kind of businesses is this for?", "Service businesses, consultants, local companies, and growing brands that need a predictable inquiry flow."],
      ["Can you improve an existing funnel?", "Yes. Existing funnels can be audited and upgraded before creating anything new."]
    ]
  },
  {
    title: "Personal Branding",
    icon: Fingerprint,
    description: "Build a credible expert presence through positioning, content, and AI-assisted systems.",
    benefits: ["Positioning clarity", "Content themes", "Profile optimization", "Authority building"],
    tools: ["LinkedIn", "Canva", "ChatGPT", "Notion"],
    faqs: [
      ["Is this only for founders?", "No. It works for consultants, creators, executives, and professionals building authority."],
      ["Can it include LinkedIn strategy?", "Yes. LinkedIn profile and content strategy are a natural fit for this service."]
    ]
  }
].map((service) => ({
  ...service,
  slug: service.title === "SEO Optimization" ? "seo" : slugify(service.title)
}));

export const features = [
  { title: "AI Strategy", icon: Compass, description: "Practical plans that connect AI tools to business outcomes." },
  { title: "Marketing Automation", icon: Zap, description: "Systems that reduce manual work and speed up response times." },
  { title: "Business Growth", icon: Rocket, description: "Campaigns and funnels shaped around leads, sales, and retention." },
  { title: "ROI Focus", icon: BarChart3, description: "Clear metrics so every initiative has a reason to exist." }
];

export const process = [
  { title: "Discover", description: "Audit your goals, audience, offers, tools, and current marketing workflow." },
  { title: "Strategy", description: "Design the AI-powered plan, priorities, automations, and success metrics." },
  { title: "Implementation", description: "Launch campaigns, prompts, content systems, automations, and tracking." },
  { title: "Growth", description: "Review results, improve conversion points, and scale what works." }
];

export const testimonials = [
  {
    quote: "Digital Saroz helped us turn scattered marketing ideas into a simple AI workflow our team actually uses.",
    name: "Aarav Shrestha",
    role: "Founder, Local Services Brand"
  },
  {
    quote: "The automation plan saved hours every week and made our lead follow-up feel much more professional.",
    name: "Nisha Karki",
    role: "Operations Lead"
  },
  {
    quote: "Clear strategy, strong prompts, and a practical growth plan. Exactly what we needed before scaling ads.",
    name: "Prabin Lama",
    role: "Ecommerce Owner"
  }
];

export const blogs = [
  {
    title: "How AI Marketing Helps Small Businesses Grow Faster",
    slug: "ai-marketing-small-business-growth",
    category: "AI Marketing",
    date: "July 5, 2026",
    author: "Digital Saroz",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80",
    excerpt: "A practical look at where AI can improve content, customer follow-up, research, and campaign decisions.",
    content: [
      "AI marketing works best when it is connected to a clear business goal. Instead of using tools randomly, small businesses should identify the workflow that slows growth most: content production, inquiry response, lead qualification, reporting, or customer education.",
      "The highest-impact use cases are usually simple. A better prompt system can make content planning faster. A lightweight automation can route inquiries instantly. A weekly AI-assisted report can show which channels deserve more attention.",
      "The goal is not to replace human judgment. The goal is to give a business owner more leverage, cleaner decisions, and a system that keeps improving."
    ]
  },
  {
    title: "A Beginner Friendly Prompt Framework for Better Content",
    slug: "prompt-framework-better-content",
    category: "Prompt Engineering",
    date: "June 28, 2026",
    author: "Digital Saroz",
    image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1200&q=80",
    excerpt: "Use role, context, audience, constraints, and examples to get more useful AI outputs.",
    content: [
      "Good prompts are less about clever wording and more about useful context. Start with the role the AI should play, then describe the audience, goal, offer, tone, and output format.",
      "Examples are powerful. If your brand has a specific voice, give the AI a short sample and ask it to match structure, clarity, and level of detail.",
      "The best teams turn strong prompts into reusable templates, so quality does not depend on one person remembering the perfect instruction."
    ]
  },
  {
    title: "Marketing Automation Ideas You Can Launch This Month",
    slug: "marketing-automation-ideas",
    category: "Automation",
    date: "June 12, 2026",
    author: "Digital Saroz",
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1200&q=80",
    excerpt: "Simple automation ideas for lead capture, follow-up, content planning, and reporting.",
    content: [
      "Automation should begin where delay costs money. For many businesses, that means inquiry capture and follow-up. A form submission should create a record, notify the right person, and send a helpful confirmation immediately.",
      "Content workflows are another strong starting point. A shared calendar, AI-assisted brief, and approval checklist can remove confusion without adding complexity.",
      "Reporting can also be simplified. Weekly summaries of traffic, leads, campaign costs, and conversion notes help owners make better decisions without opening every dashboard."
    ]
  },
  {
    title: "SEO and AI: How to Create Content That Still Feels Human",
    slug: "seo-ai-human-content",
    category: "SEO",
    date: "May 30, 2026",
    author: "Digital Saroz",
    image: "https://images.unsplash.com/photo-1432888622747-4eb9a8f2c293?auto=format&fit=crop&w=1200&q=80",
    excerpt: "AI can speed up SEO, but human insight still makes the content worth reading.",
    content: [
      "AI can help with keyword clustering, outlines, meta descriptions, and rough drafts. But strong SEO content still needs experience, specificity, and a real point of view.",
      "Use AI to structure the work, then improve the article with local examples, customer questions, screenshots, expert opinion, and clearer answers than competitors provide.",
      "Search engines reward usefulness. Readers reward trust. The best content system respects both."
    ]
  }
];

export const stats = [
  ["30+", "Projects"],
  ["25+", "Happy Clients"],
  ["3+", "Years Experience"],
  ["100+", "Consultations"]
];

export const skills = [
  ["AI Marketing", 94],
  ["SEO", 88],
  ["Automation", 91],
  ["Prompt Engineering", 96],
  ["Content Marketing", 90],
  ["Social Media", 84],
  ["Lead Generation", 89],
  ["Analytics", 86]
];

export const tools = ["ChatGPT", "Claude", "Gemini", "Midjourney", "Canva", "Google Analytics", "Meta Ads", "Google Ads", "Notion", "Zapier"];

export const trustedBadges = [
  { label: "AI Strategy", icon: CheckCircle2 },
  { label: "Automation Ready", icon: Workflow },
  { label: "Lead Growth", icon: ChartNoAxesCombined },
  { label: "Consultation", icon: CalendarCheck },
  { label: "Content Systems", icon: FileText },
  { label: "Performance", icon: BarChart3 }
];

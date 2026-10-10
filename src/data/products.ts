// The product catalogue: every skill is a product, shown as a card on the
// collection page with a quick view. Flagship products also get a full page.
//
// Content still to write is marked "TODO:" in strings and TODO(content) in
// comments. Search for TODO to find it all.

import type { FactId } from "./facts";

export type CategoryId = "specialty" | "technical" | "tools" | "how-i-work";

export type Category = {
  id: CategoryId;
  name: string;
  description: string;
  featured?: boolean;
};

export type ProductId =
  // Specialty
  | "ab-test-development"
  | "experiment-setup-qa"
  | "conversion-rate-optimisation"
  | "analytics-tracking"
  // Technical
  | "javascript"
  | "typescript"
  | "html"
  | "css"
  | "tailwind"
  | "jquery"
  | "react-nextjs"
  | "shopify-liquid"
  | "graphql"
  | "python"
  | "t-sql"
  | "aspnet"
  | "apis"
  // Tools & platforms
  | "shopify"
  | "shopify-app"
  | "sql-server-ssms"
  | "azure"
  | "power-bi"
  | "tableau"
  | "sap-businessobjects"
  | "figma"
  // How I work
  | "fast-learner"
  | "remote-collaboration"
  | "small-team-builder"
  | "attention-to-detail";

export type Workplace = "PRISM+" | "Convx Asia" | "Earlier roles";

export type Badge = "bestseller" | "featured";

export const badgeLabels: Record<Badge, string> = {
  bestseller: "Bestseller",
  featured: "Featured",
};

export type Specs = {
  /** Year I started using it; years of use are worked out from this. */
  since?: number;
  usedAt: Workplace[];
  tools: string[];
};

export type Review = {
  quote: string;
  name: string;
  role: string;
};

/** A longer story on a flagship page. */
export type Story = {
  title: string;
  summary: string;
  body: string[];
  /** Only numbers my managers have approved for publishing. */
  result?: string;
  /** Skills this story proves, shown as tags. */
  skills: ProductId[];
};

export type Flagship = {
  intro: string;
  stories: Story[];
};

export type Product = {
  id: ProductId;
  name: string;
  tagline: string;
  category: CategoryId;
  badge?: Badge;
  specs: Specs;
  /** One short story or anonymised result for the quick view. */
  proof: string;
  review?: Review;
  /** "Frequently bought together": two or three related skills. */
  relatedIds: ProductId[];
  factId?: FactId;
  /** Quick view links to this flagship page for the full story. */
  fullStoryOn?: ProductId;
  /** Present only on flagship products, which get a full page. */
  flagship?: Flagship;
};

/** A role's skill set, selected in one tap on the collection page. */
export type Bundle = {
  id: string;
  name: string;
  description: string;
  productIds: ProductId[];
};

export const categories: Category[] = [
  {
    id: "specialty",
    name: "Specialty",
    description: "A/B testing and conversion rate optimisation: what I do best.",
    featured: true,
  },
  {
    id: "technical",
    name: "Technical",
    description: "Languages and frameworks I build with.",
  },
  {
    id: "tools",
    name: "Tools & platforms",
    description: "Platforms, databases and reporting tools from work.",
  },
  {
    id: "how-i-work",
    name: "How I work",
    description: "My working style, backed by real work history.",
  },
];

const AB_PLATFORMS = [
  "VWO",
  "Optimizely",
  "AB Tasty",
  "Omniconvert Explore",
  "Google Optimize (retired 2023)",
];

const PROOF_TODO = "TODO: one short story or anonymised result.";

// Keyed by id so TypeScript checks every product exists exactly once.
// Key order is the display order on the collection page.
const catalogue: Record<ProductId, Omit<Product, "id">> = {
  // Specialty
  "ab-test-development": {
    name: "A/B test development",
    tagline: "Building the variants behind real experiments, from first line of code to launch.",
    category: "specialty",
    badge: "bestseller",
    specs: { usedAt: ["PRISM+", "Convx Asia"], tools: AB_PLATFORMS }, // TODO(content): since
    proof: PROOF_TODO,
    relatedIds: ["javascript", "experiment-setup-qa", "analytics-tracking"],
    factId: "bing-headline",
    flagship: {
      intro: "TODO: two or three sentences on how I build and ship A/B tests.",
      // TODO(content): 3–5 anonymised A/B test stories.
      stories: [
        {
          title: "TODO: story title",
          summary: "TODO: one or two lines for the story list.",
          body: ["TODO: what the test was, what I built, what happened."],
          skills: ["ab-test-development", "experiment-setup-qa", "analytics-tracking"],
        },
      ],
    },
  },
  "experiment-setup-qa": {
    name: "Experiment setup & QA",
    tagline: "Configuring tests in the platform and checking every variant before real traffic sees it.",
    category: "specialty",
    specs: { usedAt: ["PRISM+", "Convx Asia"], tools: AB_PLATFORMS }, // TODO(content): since
    proof: PROOF_TODO,
    relatedIds: ["ab-test-development", "analytics-tracking", "attention-to-detail"],
    factId: "speed-revenue",
    fullStoryOn: "ab-test-development",
  },
  "conversion-rate-optimisation": {
    name: "Conversion rate optimisation",
    tagline: "Finding where visitors drop off and turning it into tests worth running.",
    category: "specialty",
    specs: { usedAt: ["PRISM+", "Convx Asia"], tools: [] }, // TODO(content): since, tools
    proof: PROOF_TODO,
    relatedIds: ["ab-test-development", "analytics-tracking"],
    factId: "one-third-win",
    fullStoryOn: "ab-test-development",
  },
  "analytics-tracking": {
    name: "Analytics & tracking",
    tagline: "Making sure every test measures what it claims to.",
    category: "specialty",
    specs: { usedAt: ["PRISM+", "Convx Asia"], tools: ["GA4", "GTM"] }, // TODO(content): since
    proof: PROOF_TODO,
    relatedIds: ["ab-test-development", "conversion-rate-optimisation", "javascript"],
    factId: "obama-signup",
    fullStoryOn: "ab-test-development",
  },

  // Technical
  // TODO(content): since and usedAt for every technical product.
  javascript: {
    name: "JavaScript",
    tagline: "The language behind every A/B test variant I ship.",
    category: "technical",
    specs: { usedAt: [], tools: [] },
    proof: PROOF_TODO,
    relatedIds: ["ab-test-development", "typescript", "jquery"],
  },
  typescript: {
    name: "TypeScript",
    tagline: "Typed JavaScript for code that has to last, including this site.",
    category: "technical",
    specs: { usedAt: [], tools: [] },
    proof: PROOF_TODO,
    relatedIds: ["javascript", "react-nextjs"],
  },
  html: {
    name: "HTML",
    tagline: "Semantic, accessible markup under every page and variant.",
    category: "technical",
    specs: { usedAt: [], tools: [] },
    proof: PROOF_TODO,
    relatedIds: ["css", "javascript"],
  },
  css: {
    name: "CSS",
    tagline: "Matching designs closely, inside test variants and full pages.",
    category: "technical",
    specs: { usedAt: [], tools: [] },
    proof: PROOF_TODO,
    relatedIds: ["html", "tailwind", "figma"],
  },
  tailwind: {
    name: "Tailwind CSS",
    tagline: "Utility-first styling. This whole site is built with it.",
    category: "technical",
    specs: { usedAt: [], tools: [] },
    proof: "This site: every page is styled with Tailwind CSS.",
    relatedIds: ["css", "react-nextjs"],
  },
  jquery: {
    name: "jQuery",
    tagline: "Still common on the sites that run A/B tests, so variants often need it.",
    category: "technical",
    specs: { usedAt: [], tools: [] },
    proof: PROOF_TODO,
    relatedIds: ["javascript", "ab-test-development"],
  },
  "react-nextjs": {
    name: "React / Next.js",
    tagline: "Component-based front ends. This site is the proof.",
    category: "technical",
    specs: { usedAt: [], tools: [] },
    proof: "This site: a Next.js App Router project in TypeScript, deployed on Vercel.",
    relatedIds: ["typescript", "tailwind"],
  },
  "shopify-liquid": {
    name: "Shopify Liquid",
    tagline: "Shopify's templating language for themes and storefront changes.",
    category: "technical",
    specs: { usedAt: [], tools: [] },
    proof: PROOF_TODO,
    relatedIds: ["shopify", "shopify-app"],
  },
  graphql: {
    name: "GraphQL",
    tagline: "Querying exactly the data a feature needs.",
    category: "technical",
    specs: { usedAt: [], tools: [] },
    proof: PROOF_TODO,
    relatedIds: ["apis", "shopify-app"],
  },
  python: {
    name: "Python",
    tagline: "Scripting and data work when JavaScript isn't the right tool.",
    category: "technical",
    specs: { usedAt: [], tools: [] },
    proof: PROOF_TODO,
    relatedIds: ["apis", "t-sql"],
  },
  "t-sql": {
    name: "T-SQL",
    tagline: "Queries and reports on Microsoft SQL Server.",
    category: "technical",
    specs: { usedAt: [], tools: [] },
    proof: PROOF_TODO,
    relatedIds: ["sql-server-ssms", "power-bi"],
  },
  aspnet: {
    name: "ASP.NET / .NET Framework",
    tagline: "Server-side web apps on Microsoft's stack.",
    category: "technical",
    specs: { usedAt: [], tools: [] },
    proof: PROOF_TODO,
    relatedIds: ["t-sql", "azure"],
  },
  apis: {
    name: "APIs",
    tagline: "Connecting front ends to the services and data behind them.",
    category: "technical",
    specs: { usedAt: [], tools: [] },
    proof: PROOF_TODO,
    relatedIds: ["graphql", "javascript"],
  },

  // Tools & platforms
  // TODO(content): since and usedAt for every tools product.
  shopify: {
    name: "Shopify",
    tagline: "Themes, store changes, and an app with active users.",
    category: "tools",
    specs: { usedAt: [], tools: [] },
    proof: PROOF_TODO,
    relatedIds: ["shopify-liquid", "shopify-app"],
    fullStoryOn: "shopify-app",
  },
  "shopify-app": {
    name: "Shopify app",
    tagline: "An app with active users that I build and maintain in a team of three.",
    category: "tools",
    badge: "featured",
    specs: { usedAt: [], tools: ["Shopify"] }, // TODO(content): tech stack
    proof: PROOF_TODO,
    relatedIds: ["shopify", "graphql", "small-team-builder"],
    flagship: {
      intro: "TODO: what the app does and who uses it, as far as I can share.",
      // TODO(content): the app's story, plus screenshots if allowed.
      stories: [
        {
          title: "TODO: story title",
          summary: "TODO: one or two lines for the story list.",
          body: ["TODO: what I built, how the team of three works, what changed for users."],
          skills: ["shopify-app", "shopify", "small-team-builder"],
        },
      ],
    },
  },
  "sql-server-ssms": {
    name: "MS SQL Server & SSMS",
    tagline: "Designing, querying and maintaining SQL Server databases.",
    category: "tools",
    specs: { usedAt: [], tools: ["SQL Server Management Studio"] },
    proof: PROOF_TODO,
    relatedIds: ["t-sql", "power-bi"],
  },
  azure: {
    name: "Microsoft Azure",
    tagline: "Running apps and data in Microsoft's cloud.",
    category: "tools",
    specs: { usedAt: [], tools: [] },
    proof: PROOF_TODO,
    relatedIds: ["aspnet", "sql-server-ssms"],
  },
  "power-bi": {
    name: "Power BI",
    tagline: "Dashboards that turn business data into decisions.",
    category: "tools",
    specs: { usedAt: [], tools: [] },
    proof: PROOF_TODO,
    relatedIds: ["t-sql", "tableau"],
  },
  tableau: {
    name: "Tableau",
    tagline: "Visual analysis and dashboards from business data.",
    category: "tools",
    specs: { usedAt: [], tools: [] },
    proof: PROOF_TODO,
    relatedIds: ["power-bi", "sap-businessobjects"],
  },
  "sap-businessobjects": {
    name: "SAP BusinessObjects",
    tagline: "Enterprise reporting from earlier roles.",
    category: "tools",
    specs: { usedAt: ["Earlier roles"], tools: [] },
    proof: PROOF_TODO,
    relatedIds: ["tableau", "t-sql"],
  },
  figma: {
    name: "Figma",
    tagline: "Building from designs as the source of truth.",
    category: "tools",
    specs: { usedAt: [], tools: [] },
    proof: PROOF_TODO,
    relatedIds: ["css", "attention-to-detail"],
  },

  // How I work
  "fast-learner": {
    name: "Fast learner on the job",
    tagline: "Learned A/B testing on the job at Convx Asia.",
    category: "how-i-work",
    specs: { usedAt: ["Convx Asia"], tools: [] },
    proof: PROOF_TODO,
    relatedIds: ["ab-test-development", "remote-collaboration"],
  },
  "remote-collaboration": {
    name: "Remote collaboration",
    tagline: "Working remotely with the PRISM+ team in Singapore.",
    category: "how-i-work",
    specs: { usedAt: ["PRISM+"], tools: [] },
    proof: PROOF_TODO,
    relatedIds: ["fast-learner", "small-team-builder"],
  },
  "small-team-builder": {
    name: "Builder in a small team",
    tagline: "Building and maintaining a Shopify app in a team of three.",
    category: "how-i-work",
    specs: { usedAt: [], tools: [] },
    proof: PROOF_TODO,
    relatedIds: ["shopify-app", "remote-collaboration"],
    fullStoryOn: "shopify-app",
  },
  "attention-to-detail": {
    name: "Attention to detail",
    tagline: "Treating Figma designs as the source of truth, down to the spacing.",
    category: "how-i-work",
    specs: { usedAt: [], tools: ["Figma"] },
    proof: PROOF_TODO,
    relatedIds: ["figma", "experiment-setup-qa"],
  },
};

export const products: Product[] = (Object.keys(catalogue) as ProductId[]).map(
  (id) => ({ id, ...catalogue[id] }),
);

// Shown on the homepage, in this order. An even number fills the two-column phone grid.
export const featuredProductIds: ProductId[] = [
  "ab-test-development",
  "experiment-setup-qa",
  "conversion-rate-optimisation",
  "analytics-tracking",
  "shopify-app",
  "javascript",
];

// "Shop by role" on the homepage: one tap adds every skill in the bundle to the cart.
// TODO(content): check these match the roles I'm applying for.
export const bundles: Bundle[] = [
  {
    id: "cro-specialist",
    name: "CRO Specialist",
    description: "Everything it takes to research, build, run and measure tests.",
    productIds: [
      "ab-test-development",
      "experiment-setup-qa",
      "conversion-rate-optimisation",
      "analytics-tracking",
      "javascript",
      "html",
      "css",
      "figma",
    ],
  },
  {
    id: "software-engineer",
    name: "Software Engineer",
    description: "Front-end and full-stack skills for building and shipping products.",
    productIds: [
      "javascript",
      "typescript",
      "react-nextjs",
      "html",
      "css",
      "tailwind",
      "apis",
      "graphql",
      "t-sql",
      "shopify-app",
    ],
  },
];

export function getProduct(id: ProductId): Product {
  return { id, ...catalogue[id] };
}

export function getProductsByCategory(category: CategoryId): Product[] {
  return products.filter((p) => p.category === category);
}

export function getFlagshipProducts(): Product[] {
  return products.filter((p) => p.flagship);
}

/** Years of use from `since`, or undefined if not filled in yet. */
export function yearsOfUse(specs: Specs, now = new Date()): number | undefined {
  return specs.since === undefined ? undefined : now.getFullYear() - specs.since;
}

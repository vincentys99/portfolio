// Site-wide details used by the header, footer and metadata.

export type SocialLink = {
  label: string;
  href: string;
};

export const site = {
  name: "Vincent",
  role: "Web developer who builds and ships A/B tests",
  location: "Selangor, Malaysia · open to remote",
  // TODO(content): placeholder intro; replace with my own 2–3 sentence bio.
  intro:
    "Hi, I'm Vincent. I build A/B tests from first line of code to launch, set up the tracking that measures them, and back it all with front-end and full-stack engineering.",
  contactHref: "/checkout",
  cv: {
    href: "/cv.pdf",
    // TODO(content): add public/cv.pdf, then set this to true.
    available: false,
  },
};

// TODO(content): LinkedIn and contact email.
export const socialLinks: SocialLink[] = [
  { label: "GitHub", href: "https://github.com/vincentys99" },
];

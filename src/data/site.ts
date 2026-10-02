// Site-wide details used by the header, footer and metadata.

export type SocialLink = {
  label: string;
  href: string;
};

export const site = {
  name: "Vincent",
  role: "Web developer who builds and ships A/B tests",
  location: "Selangor, Malaysia · open to remote",
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

// "Did you know..." facts, shown in quick views and in the cart.
// Every fact needs a source a visitor can check. Add new ones here and to FactId.

export type FactId =
  | "bing-headline"
  | "one-third-win"
  | "speed-revenue"
  | "booking-volume"
  | "obama-signup";

export type Fact = {
  id: FactId;
  text: string;
  source: {
    title: string;
    publisher: string;
    year: number;
    url: string;
  };
};

export const facts: Fact[] = [
  {
    id: "bing-headline",
    text: "A small change to how Bing displayed ad headlines raised its revenue by 12%, worth more than $100 million a year in the US alone.",
    source: {
      title: "The Surprising Power of Online Experiments",
      publisher: "Harvard Business Review",
      year: 2017,
      url: "https://hbr.org/2017/09/the-surprising-power-of-online-experiments",
    },
  },
  {
    id: "one-third-win",
    text: "Only about one in three ideas tested at Microsoft improved the metric it was designed to improve. Most good-sounding ideas don't win, which is why you test them.",
    source: {
      title: "Online Controlled Experiments at Large Scale",
      publisher: "Microsoft (KDD 2013)",
      year: 2013,
      url: "https://exp-platform.com/Documents/2013%20controlledExperimentsAtScale.pdf",
    },
  },
  {
    id: "speed-revenue",
    text: "When Bing deliberately slowed pages down in an experiment, every 100 milliseconds of speed turned out to be worth 0.6% of revenue.",
    source: {
      title: "Online Controlled Experiments at Large Scale",
      publisher: "Microsoft (KDD 2013)",
      year: 2013,
      url: "https://exp-platform.com/Documents/2013%20controlledExperimentsAtScale.pdf",
    },
  },
  {
    id: "booking-volume",
    text: "Booking.com runs some 25,000 tests a year, and credits that experimentation for its growth from start-up to one of the world's largest travel sites.",
    source: {
      title: "Building a Culture of Experimentation",
      publisher: "Harvard Business Review",
      year: 2020,
      url: "https://hbr.org/2020/03/building-a-culture-of-experimentation",
    },
  },
  {
    id: "obama-signup",
    text: "In 2008, the Obama campaign tested its sign-up page. A photo and a \"Learn More\" button beat the videos staff preferred, lifting sign-ups by 40.6% and an estimated $60 million in donations.",
    source: {
      title: "How Obama Raised $60 Million by Running a Simple Experiment",
      publisher: "Optimizely",
      year: 2010,
      url: "https://www.optimizely.com/insights/blog/how-obama-raised-60-million-by-running-a-simple-experiment/",
    },
  },
];

export function getFact(id: FactId): Fact {
  const fact = facts.find((f) => f.id === id);
  if (!fact) throw new Error(`Unknown fact: ${id}`);
  return fact;
}

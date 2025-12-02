import voice from "./voice-ai-agents.json";
import chatbot from "./chatbot-ai.json";
import leadGeneration from "./lead-generation-ai.json";
import socialMedia from "./social-media-ai.json";
import trainingAgents from "./training-agents.json";
import emailMarketing from "./email-marketing-ai.json";

interface FeatureImage {
  src: string;
  alt: string;
}

interface FeatureItem {
  id: string;
  icon: string;
  title: string;
  description: string;
  iconSrc?: string;
  iconAlt?: string;
}

interface BenefitIconImage {
  src: string;
  alt: string;
  className: string;
}

interface BenefitItem {
  id: string;
  title: string;
  description: string;
  iconGradient?: string;
  iconImages?: BenefitIconImage[];
  iconType?: string;
  iconSrc?: string;
}

interface ProcessStep {
  id: number;
  stepNumber: string;
  title: string;
  description: string;
  icon?: string;
  iconSrc?: string;
  iconAlt?: string;
  gradient: string;
}

interface UseCaseItem {
  id: string;
  icon: string;
  title: string;
  description: string;
  gradient: string;
}

interface PainPointCard {
  title: string;
  icon: string;
  description: string;
  pain: string;
}

interface PainPointsContent {
  titleLeading: string;
  titleHighlight: string;
  description: string;
  cards: PainPointCard[];
}

interface WhatsUnfairContent {
  titleLeading: string;
  titleTrailing: string;
  content: string[];
  imageSrc?: string;
  imageAlt?: string;
}

interface ProbSolResDetail {
  heading?: string;
  intro: string;
  body: string;
  highlight: string;
  outro: string;
}

interface ProbSolResContent {
  heading?: string;
  titleLeading: string;
  titleTrailing: string;
  problem: string;
  solution: string;
  result: string;
  detail?: ProbSolResDetail;
}

interface CTAFeature {
  text: string;
}

interface ButtonConfig {
  label: string;
  ariaLabel: string;
  iconSrc?: string;
  iconAlt?: string;
  phoneNumber?: string;
  href?: string;
}

interface SecondaryButtonConfig {
  label: string;
  ariaLabel: string;
  emailAddress?: string;
  href?: string;
}

export interface ServiceContent {
  meta: {
    title: string;
    description: string;
    slug: string;
  };
  hero: {
    titleLeading: string;
    titleTrailing: string;
    titleGradientClass: string;
    description: string;
    problemList?: string[];
    ctaText: string;
    ctaAriaLabel: string;
    ctaIconSrc: string;
    ctaIconAlt?: string;
  };
  painPoints?: PainPointsContent;
  whatsUnfair?: WhatsUnfairContent;
  probSolRes?: ProbSolResContent;
  introduction: {
    featureImage: FeatureImage;
    titleLeading: string;
    titleHighlight: string;
    descriptionParagraphs: string[];
  };
  keyFeatures: {
    titleLeading: string;
    titleHighlight: string;
    subtitle: string;
    features: FeatureItem[];
  };
  benefits: {
    titleLeading: string;
    titleHighlight: string;
    items: BenefitItem[];
  };
  process: {
    titleLeading: string;
    titleHighlight: string;
    subtitle: string;
    steps: ProcessStep[];
  };
  useCases: {
    headingLeading: string;
    headingHighlight: string;
    items: UseCaseItem[];
  };
  whyChoose: {
    titleLeading: string;
    titleHighlight: string;
    location: {
      basedIn: string;
      city: string;
      region: string;
    };
    content: {
      description: string | string[];
      additionalInfo: string;
    };
    logo: FeatureImage;
  };
  faq: {
    titleLeading: string;
    titleHighlight: string;
    subtitle: string;
    items: { question: string; answer: string }[];
  };
  cta: {
    headlineLeading: string;
    headlineHighlight: string;
    introText: string;
    features: CTAFeature[];
    primaryButton: ButtonConfig;
    secondaryButton: SecondaryButtonConfig;
    backgroundClass: string;
  };
  serviceArea?: {
    introText?: string;
    headingLeading?: string;
    headingHighlight?: string;
  };
  schema?: Record<string, unknown>;
}

export const servicesContent: ServiceContent[] = [
  voice as ServiceContent,
  chatbot as ServiceContent,
  leadGeneration as ServiceContent,
  socialMedia as ServiceContent,
  trainingAgents as ServiceContent,
  emailMarketing as ServiceContent
];

export const servicesContentMap: Record<string, ServiceContent> = Object.fromEntries(
  servicesContent.map((service) => [service.meta.slug, service])
);


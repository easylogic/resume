import DefaultTemplate from './DefaultTemplate';
import ModernTemplate from './ModernTemplate';
import Sidebar1Template from './Sidebar1Template';
import ContrastTemplate from './ContrastTemplate';
import MagazineTemplate from './MagazineTemplate';
import RetroTemplate from './RetroTemplate';
import InfographicTemplate from './InfographicTemplate';
import StorytellingTemplate from './StorytellingTemplate';
import MinimalTemplate from './MinimalTemplate';
import TimelineTemplate from './TimelineTemplate';
import PortfolioTemplate from './PortfolioTemplate';
import CreativeTemplate from './CreativeTemplate';
import TechStartupTemplate from './TechStartupTemplate';
import NewsletterTemplate from './NewsletterTemplate';
import TypewriterEffectTemplate from './TypewriterEffectTemplate';
import ClassicTemplate from './ClassicTemplate';
import ProfessionalTemplate from './ProfessionalTemplate';

export const templates = {
  default: DefaultTemplate,
  modern: ModernTemplate,
  sidebar1: Sidebar1Template,
  contrast: ContrastTemplate,
  magazine: MagazineTemplate,
  retro: RetroTemplate,
  infographic: InfographicTemplate,
  storytelling: StorytellingTemplate,
  minimal: MinimalTemplate,
  timeline: TimelineTemplate,
  portfolio: PortfolioTemplate,
  creative: CreativeTemplate,
  techStartup: TechStartupTemplate,
  newsletter: NewsletterTemplate,
  typewriter: TypewriterEffectTemplate,
  classic: ClassicTemplate,
  professional: ProfessionalTemplate,
};

export type TemplateKey = keyof typeof templates;

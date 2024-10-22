import DefaultTemplate from './DefaultTemplate';
import ModernTemplate from './ModernTemplate';
import Sidebar1Template from './Sidebar1Template';
import ContrastTemplate from './ContrastTemplate';
import MagazineTemplate from './MagazineTemplate';
import RetroTemplate from './RetroTemplate';
import InfographicTemplate from './InfographicTemplate';
import StorytellingTemplate from './StorytellingTemplate';

export const templates = {
  default: DefaultTemplate,
  modern: ModernTemplate,
  sidebar1: Sidebar1Template,
  contrast: ContrastTemplate,
  magazine: MagazineTemplate,
  retro: RetroTemplate,
  infographic: InfographicTemplate,
  storytelling: StorytellingTemplate,
};

export type TemplateKey = keyof typeof templates;

import Default from './Default';
import Modern from './Modern';
import Sidebar1 from './Sidebar1';
import Contrast from './Contrast';
import Magazine from './Magazine';
import Retro from './Retro';
import Infographic from './Infographic';
import Storytelling from './Storytelling';
import Minimal from './Minimal';
import Timeline from './Timeline';
import Portfolio from './Portfolio';
import Creative from './Creative';
import TechStartup from './TechStartup';
import Newsletter from './Newsletter';
import Typewriter from './Typewriter';
import Classic from './Classic';
import Professional from './Professional';

export const templates = {
  default: Default,
  modern: Modern,
  sidebar1: Sidebar1,
  contrast: Contrast,
  magazine: Magazine,
  retro: Retro,
  infographic: Infographic,
  storytelling: Storytelling,
  minimal: Minimal,
  timeline: Timeline,
  portfolio: Portfolio,
  creative: Creative,
  techStartup: TechStartup,
  newsletter: Newsletter,
  typewriter: Typewriter,
  classic: Classic,
  professional: Professional,
};

export type TemplateKey = keyof typeof templates;

export const supportedLocales = ['en', 'ja'] as const;
export type Locale = (typeof supportedLocales)[number];
export const defaultLocale: Locale = 'en';

type ToolIconKey = 'unity' | 'vscode' | 'clipStudio' | 'aseprite';

type ContactIconKey = 'x' | 'discord';

type Project = {
  title: string;
  role: string;
  description: string;
  href: string;
};

type Tool = {
  name: string;
  note: string;
  iconKey: ToolIconKey;
};

type Contribution = {
  title: string;
  detail: string;
};

type ContactLink = {
  title: string;
  href: string;
  icon: ContactIconKey;
};

export type LocaleContent = {
  metaTitle: string;
  metaDescription: string;
  htmlLang: string;
  profile: {
    name: string;
    tagline: string;
    summary: string;
  };
  contactLinks: ContactLink[];
  aboutParagraphs: string[];
  specialties: string[];
  tools: Tool[];
  contributions: Contribution[];
  languages: string[];
  programmingLanguagesNote: string;
  projects: Project[];
  sectionTitles: {
    projects: string;
    about: string;
    specialties: string;
    tools: string;
    contributions: string;
    programmingLanguages: string;
  };
};

export const contentByLocale: Record<Locale, LocaleContent> = {
  en: {
    metaTitle: 'Home',
    metaDescription:
      'Personal portfolio site showcasing game development projects, tools, and experience.',
    htmlLang: 'en',
    profile: {
      name: 'Your Name',
      tagline: 'Game Developer / Designer',
      summary:
        "Crafting immersive experiences across systems, art, and tooling. Here's a snapshot of ongoing and recent work.",
    },
    contactLinks: [
      { title: 'X (Twitter)', href: 'https://x.com/your-account', icon: 'x' },
      { title: 'Discord', href: 'https://discord.gg/your-server-or-id', icon: 'discord' },
    ],
    aboutParagraphs: [
      'I build expressive game worlds with a focus on responsive systems, smart pipelines, and collaborative workflows.',
      "Below you'll find my core strengths, the tools I rely on, and highlights from projects I've contributed to.",
    ],
    specialties: [
      'System design for action-oriented gameplay loops',
      'Level pacing, encounter scripting, and UX polish',
      'Tech art prototyping to support rapid iteration',
    ],
    tools: [
      { name: 'Unity', note: 'Game engine', iconKey: 'unity' },
      { name: 'Visual Studio Code', note: 'IDE', iconKey: 'vscode' },
      { name: 'Clip Studio Paint', note: 'Digital art', iconKey: 'clipStudio' },
      { name: 'Aseprite', note: 'Pixel art', iconKey: 'aseprite' },
    ],
    contributions: [
      { title: 'Project A', detail: 'Gameplay Programmer (2023)' },
      { title: 'Project B', detail: 'Level Designer (2022)' },
      { title: 'Project C', detail: 'Technical Artist (2021)' },
    ],
    languages: ['C#', 'Python', 'C++'],
    programmingLanguagesNote:
      'Add language badges here. Drop additional SVG icons into src/icons and update the icon field below when they are ready.',
    projects: [
      {
        title: 'Game Title 01',
        role: 'Lead Systems / 2024',
        description:
          'Designed combat loops, implemented AI behaviors, and led playtest iteration for a fast-paced action prototype.',
        href: '#',
      },
      {
        title: 'Game Title 02',
        role: 'Technical Artist / 2023',
        description:
          'Built shader-driven environment assets, established art-to-engine workflows, and optimized asset import pipelines.',
        href: '#',
      },
    ],
    sectionTitles: {
      projects: 'Projects',
      about: 'About Me',
      specialties: 'Specialties',
      tools: 'Tools & Engines',
      contributions: 'Team Contributions',
      programmingLanguages: 'Programming Languages',
    },
  },
  ja: {
    metaTitle: 'ホーム',
    metaDescription: 'ゲーム開発の実績やツール、経験をまとめたポートフォリオサイトです。',
    htmlLang: 'ja',
    profile: {
      name: 'あなたの名前',
      tagline: 'ゲーム開発者 / デザイナー',
      summary:
        'システム、アート、ツールの視点から没入感のある体験づくりを行っています。これまでの取り組みを紹介します。',
    },
    contactLinks: [
      { title: 'X（旧Twitter）', href: 'https://x.com/your-account', icon: 'x' },
      { title: 'Discord', href: 'https://discord.gg/your-server-or-id', icon: 'discord' },
    ],
    aboutParagraphs: [
      'アクション性の高いゲーム体験を支えるシステム構築と、チームで磨き上げる制作フローづくりを得意としています。',
      '下記では主な強み、使用ツール、参画したプロジェクトについて概要をまとめています。',
    ],
    specialties: [
      'アクションゲーム向けゲームプレイシステム設計',
      'レベル演出・イベントスクリプト・UI/UX調整',
      '高速な検証を支えるテクニカルアートとツール開発',
    ],
    tools: [
      { name: 'Unity', note: 'ゲームエンジン', iconKey: 'unity' },
      { name: 'Visual Studio Code', note: 'IDE', iconKey: 'vscode' },
      { name: 'Clip Studio Paint', note: 'デジタルアート', iconKey: 'clipStudio' },
      { name: 'Aseprite', note: 'ドット絵制作', iconKey: 'aseprite' },
    ],
    contributions: [
      { title: 'プロジェクトA', detail: 'ゲームプレイプログラマー（2023年）' },
      { title: 'プロジェクトB', detail: 'レベルデザイナー（2022年）' },
      { title: 'プロジェクトC', detail: 'テクニカルアーティスト（2021年）' },
    ],
    languages: ['C#', 'Python', 'C++'],
    programmingLanguagesNote:
      '必要に応じて言語バッジを追加してください。src/icons に SVG を追加し、icon フィールドを更新すれば反映されます。',
    projects: [
      {
        title: 'ゲームタイトル01',
        role: 'システムリード / 2024年',
        description:
          '高速なアクション試作を目指し、戦闘ロジックや敵AIの実装、プレイテストのリードを担当。',
        href: '#',
      },
      {
        title: 'ゲームタイトル02',
        role: 'テクニカルアーティスト / 2023年',
        description:
          'シェーダーによる背景演出、アートからエンジンへの制作パイプライン整備、アセット最適化を担当。',
        href: '#',
      },
    ],
    sectionTitles: {
      projects: '制作実績',
      about: 'プロフィール',
      specialties: '得意分野',
      tools: '使用ツール・エンジン',
      contributions: '開発参加作品',
      programmingLanguages: '使用言語',
    },
  },
};
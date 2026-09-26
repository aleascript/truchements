import type {SidebarsConfig} from '@docusaurus/plugin-content-docs';

const sidebars: SidebarsConfig = {
  docsSidebar: [
    'home',
    'core-rules',
    {
      type: 'category',
      label: 'Settings',
      link: {type: 'doc', id: 'settings'},
      items: [
        'choirs-and-legions',
        'new-gods',
        'signals',
        'blood-and-night',
      ],
    },
    'tones',
    'time',
    {
      type: 'link',
      label: 'Publications',
      href: '/publications/',
    },
  ],
};

export default sidebars;

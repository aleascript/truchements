export function definePublications(config) {
  return config;
}

export default definePublications({
  release: {
    initialVersion: '0.1.0',
  },
  markdown: {
    admonitions: ['design'],
  },
  publications: {
    truchements: {
      author: 'AleaScript',
      revision: 'Draft',
      license: {
        label: 'CC BY 4.0',
        href: 'https://creativecommons.org/licenses/by/4.0/',
        attribution: {
          title: 'Truchements',
          author: 'AleaScript',
          href: null,
        },
      },
      lineage: {
        designedWith: {
          label: 'Regard',
          href: 'https://aleascript.github.io/regard/',
        },
        poweredBy: null,
      },
      size: 'A4',
      theme: 'publication/theme.css',
      cover: {
        image: 'static/img/site/truchements_light_big.svg',
        showTitle: true,
        showMetadata: true,
      },
      outputName: 'truchements',
      locales: {
        en: {
          title: 'Truchements',
          tocTitle: 'Contents',
          contents: [
            'docs/en/index.md',
            'docs/en/core-rules.md',
            'docs/en/settings.md',
            'docs/en/choirs-and-legions.md',
            'docs/en/ancient-and-new-gods.md',
            'docs/en/signals.md',
            'docs/en/blood-and-night.md',
            'docs/en/tones.md',
            'docs/en/time.md',
          ],
          outputs: ['pdf'],
        },
        fr: {
          title: 'Truchements',
          tocTitle: 'Sommaire',
          contents: [
            'docs/fr/index.md',
            'docs/fr/core-rules.md',
            'docs/fr/settings.md',
            'docs/fr/choirs-and-legions.md',
            'docs/fr/ancient-and-new-gods.md',
            'docs/fr/signals.md',
            'docs/fr/blood-and-night.md',
            'docs/fr/tones.md',
            'docs/fr/time.md',
          ],
          outputs: ['pdf'],
        },
      },
    },
  },
});

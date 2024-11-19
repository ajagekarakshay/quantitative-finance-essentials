import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Quantitative Finance",
  description: "Digital garden of concepts in quantitative finance.",
  markdown: {
    math: true,
  },
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Examples', link: '/markdown-examples' }
    ],

    sidebar: [
      {
        text: 'Probability & Statistics',
        items: [
          { text: 'Distributions', link: '/prob-stats/distributions' },
          { text: 'Arrays', link: '/algos/arrays' },
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/ajagekarakshay/quantitative-finance-essentials' }
    ]
  }
})

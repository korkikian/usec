module.exports = {
    content: [
      './_drafts/**/*.html',
      './_includes/**/*.html',
      './_layouts/**/*.html',
      './_posts/*.md',
      './*.md',
      './*.html',
    ],
    theme: {
      theme: {
        extend: {},
      },
    },
    purge: {
      content: ['./_site/**/*.html'],
      options: {
        safelist: ['bg-amber-400', 'hover:bg-amber-400', 'text-cyan-600'], // add your dynamic classes here
      },
    },
    plugins: [
        require('@tailwindcss/typography'),
    ]
  }
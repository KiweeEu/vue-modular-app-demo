module.exports = {
  filenameHashing: false,
  pages: {
    greeting: {
      entry: `${__dirname}/src/modules/greeting/main.ts`,
      template: `${__dirname}/public/greeting.html`,
      filename: 'greeting.html',
      title: 'Demo - Greeting',
    },
    'search-form': {
      entry: `${__dirname}/src/modules/search-form/main.ts`,
      template: `${__dirname}/public/search-form.html`,
      filename: 'search-form.html',
      title: 'Demo - Search Form',
    },
  },
};

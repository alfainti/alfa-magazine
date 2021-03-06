module.exports = {
  // siteMetadata is used for sitemap.xml
  siteMetadata: {
    siteUrl: `https://testing.com/sitemap.xml` // @TODO swap out for your host
  },
plugins: [
  {
    resolve: "gatsby-source-livingdocs",
    options: {
      limit: 35, // defaults to 10, maximum is 100
      accessToken: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzY29wZSI6InB1YmxpYy1hcGk6cmVhZCBwdWJsaWMtYXBpOmNvbmZpZzpyZWFkIHB1YmxpYy1hcGk6d3JpdGUgcHVibGljLWFwaTpjb25maWc6d3JpdGUiLCJuYW1lIjoiYWxmYSIsInByb2plY3RJZCI6OTg1LCJjaGFubmVsSWQiOjk2NSwidHlwZSI6ImNsaWVudCIsImp0aSI6ImNiNjZjYzQxLTg2ZmItNGY0ZS1iMjQzLTA3NDhhODA1ZmJlYSIsImNvZGUiOiJjYjY2Y2M0MS04NmZiLTRmNGUtYjI0My0wNzQ4YTgwNWZiZWEiLCJpYXQiOjE1OTUyMjYwMjl9.0PyGu1_BB7z5tou9WGKcLfc7VFZSnxQLxIa4NSA7HXA"
     }
    },
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-sitemap',
    {
      resolve: 'gatsby-plugin-robots-txt',
      options: {
        host: 'https://testing.com/', // @TODO swap out for your host
        sitemap: 'https://testing.com/sitemap.xml', // @TODO swap out for your host
        env: {
          development: {
            policy: [{userAgent: '*', disallow: ['/']}]
          }
        }
      }
    },
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'living-times', // @TODO swap out for your name / icon
        short_name: 'living-times',
        start_url: '/',
        background_color: '#6b37bf',
        theme_color: '#6b37bf',
        display: 'minimal-ui',
        icon: 'src/resources/favicon.png'
      }
    },
    {
      resolve: `gatsby-plugin-sass`,
      options: {
        includePaths: ['src/resources/stylesheets/living-times.scss'] // @TODO swap out for your stylesheets
      }
    }
  ]
}

module.exports = {
  // siteMetadata is used for sitemap.xml
  siteMetadata: {
    siteUrl: `https://magazine-example.livingdocs.io/sitemap.xml` // @TODO swap out for your host
  },
  plugins: [
    {
      resolve: 'gatsby-source-livingdocs',
      options: {
        // The accessToken is accessed at buildtime and set in netlify in this case
        accessToken: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzY29wZSI6InB1YmxpYy1hcGk6cmVhZCBwdWJsaWMtYXBpOmNvbmZpZzpyZWFkIHB1YmxpYy1hcGk6d3JpdGUgcHVibGljLWFwaTpjb25maWc6d3JpdGUiLCJuYW1lIjoiYWxmYSIsInByb2plY3RJZCI6OTg1LCJjaGFubmVsSWQiOjk2NSwidHlwZSI6ImNsaWVudCIsImp0aSI6ImNiNjZjYzQxLTg2ZmItNGY0ZS1iMjQzLTA3NDhhODA1ZmJlYSIsImNvZGUiOiJjYjY2Y2M0MS04NmZiLTRmNGUtYjI0My0wNzQ4YTgwNWZiZWEiLCJpYXQiOjE1OTUyMjYwMjl9.0PyGu1_BB7z5tou9WGKcLfc7VFZSnxQLxIa4NSA7HXA,
        design: {
          name: 'living-times',
          version: '1.0.0'
        },
        recursion: true
      }
    },
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-sitemap',
    {
      resolve: 'gatsby-plugin-robots-txt',
      options: {
        host: 'https://magazine-example.livingdocs.io/', // @TODO swap out for your host
        sitemap: 'https://magazine-example.livingdocs.io/sitemap.xml', // @TODO swap out for your host
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

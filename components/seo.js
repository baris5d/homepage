import Helmet from 'react-helmet'

export function SEO({ lang = 'en', description , creator = 'Barış Dede', title = ''}){
    return (
        <Helmet
            htmlAttributes={{
                lang
            }}
            title={title}
            meta = {[
                {
                    name: `description`,
                    content: description
                  },
                  {
                    property: `og:title`,
                    content: title
                  },
                  {
                    property: `og:description`,
                    content: description
                  },
                  {
                    property: `og:type`,
                    content: `website`
                  },
                  {
                    name: `twitter:card`,
                    content: `summary`
                  },
                  {
                    name: `twitter:creator`,
                    content: creator
                  },
                  {
                    name: `twitter:title`,
                    content: title
                  },
                  {
                    name: `twitter:description`,
                    content: description
                  }
            ]}
        >
            <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        </Helmet>
    )
}
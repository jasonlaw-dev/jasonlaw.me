import { graphql } from 'gatsby';
import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet';
import { AboutMe } from '../components/about-me';
import { Home } from '../components/home';
import { DataContext } from '../contexts/data-context';
import './index.css';

export const query = graphql`
  query MyQuery {
    jason: file(relativePath: { eq: "jason.jpeg" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid_noBase64
        }
      }
    }
    cmu: file(relativePath: { eq: "cmu.jpeg" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid_noBase64
        }
      }
    }
    hku: file(relativePath: { eq: "hku.jpeg" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid_noBase64
        }
      }
    }
    kadensa: file(relativePath: { eq: "kadensa.jpeg" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid_noBase64
        }
      }
    }
    dbs: file(relativePath: { eq: "dbs.jpeg" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid_noBase64
        }
      }
    }
  }
`;

export default function Index({ data }: any) {
  const [loaded, setLoaded] = useState(false);
  useEffect(() => setLoaded(true), []);
  return (
    <div className={loaded ? undefined : 'react-loading'}>
      <Helmet>
        <title>{'Jason Law\'s Personal Website'}</title>
        <meta name="description" content={'Jason Law\'s Personal Website'} />
      </Helmet>
      <DataContext.Provider value={data}>
        <Home />
        {/*<StickyContainer>*/}
        {/*<Header />*/}
        {/*</StickyContainer>*/}
        <AboutMe />
        {/*<Projects />*/}
      </DataContext.Provider>
    </div>

  );
}

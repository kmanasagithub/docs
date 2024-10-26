// import React from 'react';
// import { Redirect } from '@docusaurus/router';
// // import  Link  from '@docusaurus/Link';
           

// // Default export for Home component
// export default function Home(): JSX.Element {
//   return <Redirect to="/guides/Overview" />;
// }


import React, { useEffect } from 'react';
import { useHistory } from '@docusaurus/router';

const Home: React.FC = () => {
  const history = useHistory();

  useEffect(() => {
    // Redirect to the desired path
    history.push('/guides/Overview');
  }, [history]);

  return null;
};

export default Home;

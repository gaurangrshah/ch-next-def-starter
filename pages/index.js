import Head from 'next/head';
// import { getContext } from '@/utils';
import { Box, Flex } from '@chakra-ui/react';
import useColor from '@/chakra/hooks/use-color';
import { constants } from '@/chakra/structure/constants';

const containerStyles = {
  p: [8, 12],
  borderRadius: '5px',
  boxShadow: 'default'
};

const Index = (props) => {
  const { color } = useColor();
  return (
    <>
      {/* <Head>
        <title key="title">{props.title}</title>
        <link rel="icon" href="/favicon.ico/" />
      </Head> */}
      <Box mt={constants.headerHeight}>
        <p>Welcome</p>
      </Box>
    </>
  );
};

export default Index;

// export async function getStaticProps() {
//   const siteConfig = await import(`../data/config.json`);

//   const allPages = getContext('../content/pages', false, /\.md$/);
//   // console.log(sections)
//   const pageSections = allPages[1].frontmatter;
//   // const pageSections = allPages.map(page => page.slug === 'home' && page)
//   return {
//     props: {
//       allPages,
//       pageSections,
//       title: siteConfig.default.title,
//       description: siteConfig.default.description
//     }
//   };
// }

import { Box, Flex } from '@chakra-ui/react';
import useColor from '@/chakra/hooks/use-color';
import { constants } from '@/chakra/structure/constants';

import { DefaultSeo } from 'next-seo';

const containerStyles = {
  p: [8, 12],
  borderRadius: '5px',
  boxShadow: 'default'
};

const Index = (props) => {
  const { color } = useColor();
  return (
    <>
      <DefaultSeo title={props.title} description={props.description}/>
      <Box mt={constants.headerHeight}>
        <p>Welcome</p>
      </Box>
    </>
  );
};

export default Index;


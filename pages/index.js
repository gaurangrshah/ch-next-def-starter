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
      <Box mt={constants.headerHeight}>
        <p>Welcome</p>
      </Box>
    </>
  );
};

export default Index;


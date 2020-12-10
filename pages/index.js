import { Box, Button, Container, Flex } from '@chakra-ui/react';

import { borders, constants } from '@/chakra/structure/constants';
import useColor from '@/chakra/hooks/use-color';
import { useAuth } from '../hooks/useAuth';


const Index = (props) => {
  const { color } = useColor();
    const { isAuthenticated, session, signOut } = useAuth();

  return (
    <>
      <Container layerStyle="responsive" border={borders.red}>
        <Flex layerStyle="flexCenter" minH="20vh" mx={-5}>
          <Box w="full" px={5} border={borders.purple}>
            Side 1
          </Box>
          <Box w="full" px={5} border={borders.green}>
            Side 2
          </Box>
        </Flex>
        {isAuthenticated && (
          <>
            {`Signed in as ${session?.user.email}`}
            <br />
            <Button onClick={signOut}>Logout</Button>
          </>
        )}
      </Container>
    </>
  );
};

export default Index;


import { Box, Button, Flex, Link as ChakraLink } from '@chakra-ui/react'
import NextLink from 'next/link'

import React from 'react'

export const SimpleNextLink = ({ href, children, rest }) => {
  return (
    <NextLink href={href} passHref>
      <Box
        as={ChakraLink}
        // _hover={{
        //   textDecoration: 'none',
        // }}
        {...rest}
      >
        {children}
      </Box>
    </NextLink>
  )
}

export const SimpleNextButtonLink = ({
  href,
  children,
  layout = { maxW: '100px' },
  rest,
}) => {
  return (
    <Flex {...layout}>
      <NextLink href={href} passHref>
        <Button
          as={ChakraLink}
          _hover={{
            textDecoration: 'none',
          }}
          {...rest}
        >
          {children}
        </Button>
      </NextLink>
    </Flex>
  )
}

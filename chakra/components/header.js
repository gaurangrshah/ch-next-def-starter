import React, { useEffect } from 'react'
import { Box, Flex, Heading, Slide } from '@chakra-ui/react'

import { Nav } from './nav'

import { useNavDispatch } from '../contexts/nav-context'

export const Header = ({
  title,
  Logo,
  pages,
  controls,
  headerShow = false,
  ...rest
}) => {
  const { updatePages, updateControls } = useNavDispatch()

  useEffect(() => {
    if (!pages) return
    updatePages(pages)
  }, [])

  useEffect(() => {
    if (!controls) return
    updateControls(controls)
  }, [])

  return (
    headerShow && (
      <Slide direction="top" in={headerShow} zIndex={2000}>
        <Box as="header" {...rest} layerStyle="header">
          <Flex layerStyle="header.body">
            {Logo ? (
              <Logo title={title} w={12} h={12} minW="1/5" mr="auto" />
            ) : (
              <Heading
                as="h1"
                m={0}
                color="inherit"
                fontSize={['2xl', null, null, '3xl']}
                pl={[4, null, null, null, 0]}
                flex={0}
                minW="25%"
              >
                {title}
              </Heading>
            )}
            <Nav title={title} {...{ Logo }} />
          </Flex>
        </Box>
      </Slide>
    )
  )
}

// packages
import React from 'react'
import { Box, Flex } from '@chakra-ui/react'

export default function AboveNav() {
  return (
  <>
  <Box bg='black' w='100%' h={"40px"} padding="8px 0 6px 0" color='white' textAlign={"center"} fontSize={"16px"}  >
    <b style={{ fontFamily: "Source Sans 2", fontWeight:"600" , fontSize:"15px", padding:"6px 0 5px 0", }}> Shop Anniversary Sale early</b><span style={{fontWeight:"350"}}> — plus, get a $40 Bonus Note! Restrictions apply.</span>  <a href="#" style={{textDecoration:"underline",fontWeight:"400"}}>Apply Now</a>
  </Box>
  </>
  )
}

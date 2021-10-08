import React, { useEffect, useState } from 'react'
import { useAuth0 } from '@auth0/auth0-react'
import {
  Flex,
  Box,
  Button,
  Textarea,
} from '@chakra-ui/react'

import * as config from '../config'

const Content = () : React.ReactElement => {
  const { isAuthenticated, getAccessTokenSilently, logout } = useAuth0()
  const [accessToken, setAccessToken] = useState<string | null>(null)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const accessTokenRetrieved = await getAccessTokenSilently({
          audience: config.auth0Audience,
        })

        setAccessToken(accessTokenRetrieved)
      } catch (e) {
        console.log(e)
      }
    }

    fetchData()
  }, [getAccessTokenSilently])

  if (!isAuthenticated) {
    return <div>Not authenticated</div>
  }

  if (!accessToken) {
    return <div>No access token</div>
  }

  return (
    <Flex justifyContent="center" alignItems="center" flexDirection="column">
      <Box width="80%" height="50vh" paddingY="50">
        <Textarea height="100%" width="100%" isReadOnly fontFamily="monospace">
          {accessToken}
        </Textarea>
      </Box>
      <Button
        onClick={() => logout({
          returnTo: window.location.origin,
        })}
      >
        Log out
      </Button>
    </Flex>
  )
}

export default Content

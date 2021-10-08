/* eslint-disable react/jsx-props-no-spreading */

import React from 'react'
import { Route, RouteProps, RouteComponentProps } from 'react-router-dom'
import { withAuthenticationRequired } from '@auth0/auth0-react'
import { Flex, Box, CircularProgress } from '@chakra-ui/react'

function ProtectedRoute({ component, ...props }: RouteProps): React.ReactElement {
  return (
    <Route
      component={withAuthenticationRequired(component as React.ComponentType<RouteComponentProps>, {
        onRedirecting: function Loading() {
          return (
            <Flex justifyContent="center">
              <Box paddingY="50">
                <CircularProgress isIndeterminate />
              </Box>
            </Flex>
          )
        },
      })}
      {...props}
    />
  )
}

export default ProtectedRoute

import { withAuthenticationRequired } from "@auth0/auth0-react"
import { ComponentType } from "react";

import Loading from 'components/common/loading';

interface Props {
  component: ComponentType;
}

const ProtectedRoute = ({ component }: Props) => {
  const Component = withAuthenticationRequired(component, { onRedirecting: () => <Loading /> })

  return (
    <Component />
  )
}

export default ProtectedRoute

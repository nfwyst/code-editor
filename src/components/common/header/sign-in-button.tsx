import { Button } from '@mui/material';
import { styled } from '@mui/material/styles';
import { useAuth0 } from '@auth0/auth0-react';

import paths from 'routes/paths';

const SignInStyledButton = styled(Button)(({ theme }) => ({
  // @ts-ignore
  color: theme.commonColors.white,
}))

const SignInButton = () => {
  const { loginWithRedirect } = useAuth0();

  const onSignIn = () => {
    loginWithRedirect({ appState: { returnTo: paths.codeEditor }})
  }

  return (
    <SignInStyledButton onClick={onSignIn}>
      登录
    </SignInStyledButton>
  )
}

export default SignInButton

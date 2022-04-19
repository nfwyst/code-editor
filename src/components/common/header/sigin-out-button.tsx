import { Button } from '@mui/material';
import { styled } from '@mui/material/styles';
import { useAuth0 } from '@auth0/auth0-react';

const SignOutStyledButton = styled(Button)(({ theme }) => ({
  // @ts-ignore
  color: theme.commonColors.white,
}))

const SignOutButton = () => {
  const { logout } = useAuth0();

  const onSignOut = () => {
    logout({ returnTo: window.location.origin })
  }

  return (
    <SignOutStyledButton onClick={onSignOut}>
      注销
    </SignOutStyledButton>
  )
}

export default SignOutButton

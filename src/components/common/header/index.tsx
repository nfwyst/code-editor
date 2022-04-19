import { AppBar, Toolbar, Typography } from '@mui/material';
import { useAuth0 } from '@auth0/auth0-react';
import { styled } from '@mui/material/styles';
import { Link, useLocation } from 'react-router-dom';
import paths from 'routes/paths';

import SignInButton from './sign-in-button';
import SignOutButton from './sigin-out-button';
import CodeEditorButton from './code-editor-button';
import DarkModeSwitch from './dark-mode-switch';
import OpenWorkSpaceButton from './open-workspace-button';

const StyledLink = styled(Link)(({ theme }) => ({
  textDecoration: 'none',
  // @ts-ignore
  color: theme.commonColors.white,
}));

const Header = () => {
  const { isAuthenticated } = useAuth0();

  return (
    <AppBar>
      <Toolbar>
        <Typography variant="h6" sx={{ flex: 1 }}>
          <StyledLink to={paths.home}>
            代码编辑器应用
          </StyledLink>
        </Typography>
        <DarkModeSwitch />
        {isAuthenticated ? <AuthenticatedButtons /> : <UnAuthenticatedButtons />}
      </Toolbar>
    </AppBar>
  )
}

const UnAuthenticatedButtons = () => {
  return (
    <div>
      <SignInButton />
    </div>
  )
}

const AuthenticatedButtonsContainer = styled('div')({
  display: 'flex',
})

const AuthenticatedButtons = () => {
  const { pathname }= useLocation();

  return (
    <AuthenticatedButtonsContainer>
      {pathname === paths.home ? <CodeEditorButton /> : <OpenWorkSpaceButton />}
      <SignOutButton />
    </AuthenticatedButtonsContainer>
  )
}

export default Header;

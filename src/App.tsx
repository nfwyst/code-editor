import { BrowserRouter } from 'react-router-dom';
import { Suspense } from 'react';

import AuthProvider from 'auth/auth-provider';
import CustomThemeProvider from 'theme/custom-theme-provider';
import Routes from 'routes';
import Loading from 'components/common/loading';
import StoreProvider from 'store/store-provider';

function App() {
  return (
    <Suspense fallback={<Loading />}>
      <StoreProvider>
        <BrowserRouter>
          <AuthProvider>
            <CustomThemeProvider>
              <Routes />
            </CustomThemeProvider>
          </AuthProvider>
        </BrowserRouter>
      </StoreProvider>
    </Suspense>
  )
}

export default App;

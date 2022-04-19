import { PropsWithChildren } from 'react'
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

import Loading from 'components/common/loading';
import store, { persistor } from 'store';

const StoreProvider = ({ children }: PropsWithChildren<{}>) => {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor} loading={<Loading />}>
        {children}
      </PersistGate>
    </Provider>
  )
}

export default StoreProvider

import { Switch } from '@mui/material';
import DarkModeIcon from '@mui/icons-material/Brightness2';

import { useAppDispatch, useAppSelector } from 'store/hooks'
import { toggleDarkMode } from 'store/slices/dark-mode';

const DarkModeSwitch = () => {
  const isDarkModeEnabled = useAppSelector(state => state.darkMode);
  const dispatch = useAppDispatch();

  function handleDarkModeChange() {
    dispatch(toggleDarkMode());
  }

  return (
    <>
      <DarkModeIcon />
      <Switch color="default" checked={isDarkModeEnabled} onChange={handleDarkModeChange} />
    </>
  )
}

export default DarkModeSwitch

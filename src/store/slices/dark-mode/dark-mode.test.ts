import { toggleDarkMode, darkModeReducer } from './index';

describe('dark mode reducer', () => {
  it('should enable dark mode if it is disabled', () => {
    expect(darkModeReducer(false, toggleDarkMode())).toEqual(true);
  })

  it('should siabled dark mode if it is enabled', () => {
    expect(darkModeReducer(true, toggleDarkMode())).toEqual(false);
  })
})

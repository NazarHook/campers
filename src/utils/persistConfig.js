import storage from 'redux-persist/lib/storage';

const favorites = {
  key: 'favorites',
  storage,
  whitelist: ['favorites'],
};
const filters = {
  key: 'filters',
  storage,
  whitelist: ['filter'],
};

const transports = {
  key: 'transports',
  storage,
  whitelist: ['items'],
};

export const persistConfig = {
  favorites,
  filters,
  transports
};
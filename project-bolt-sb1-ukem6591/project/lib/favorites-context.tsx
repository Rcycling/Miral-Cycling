'use client';

import React, { createContext, useContext, useReducer, ReactNode } from 'react';

interface FavoriteItem {
  id: string;
  name: string;
  price: number;
  image: string;
}

interface FavoritesState {
  items: FavoriteItem[];
}

type FavoritesAction =
  | { type: 'ADD'; payload: FavoriteItem }
  | { type: 'REMOVE'; payload: string };

const initialState: FavoritesState = { items: [] };

function favoritesReducer(state: FavoritesState, action: FavoritesAction): FavoritesState {
  switch (action.type) {
    case 'ADD':
      if (state.items.find(item => item.id === action.payload.id)) {
        return state;
      }
      return { items: [...state.items, action.payload] };
    case 'REMOVE':
      return { items: state.items.filter(item => item.id !== action.payload) };
    default:
      return state;
  }
}

const FavoritesContext = createContext<{
  state: FavoritesState;
  dispatch: React.Dispatch<FavoritesAction>;
} | null>(null);

export function FavoritesProvider({ children }: { children: ReactNode }) {
  const [state, dispatch] = useReducer(favoritesReducer, initialState);
  return (
    <FavoritesContext.Provider value={{ state, dispatch }}>
      {children}
    </FavoritesContext.Provider>
  );
}

export function useFavorites() {
  const context = useContext(FavoritesContext);
  if (!context) {
    throw new Error('useFavorites must be used within a FavoritesProvider');
  }
  return context;
}

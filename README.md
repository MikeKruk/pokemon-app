# Pokémon Explorer

A web application for browsing and filtering Pokémon by type, built with React + TypeScript + Vite.

## Demo

[Pokémon Explorer](https://pokemon-app-2.netlify.app/)

## Features

- Browse Pokémon with infinite pagination (24 per page)
- Filter by one or multiple types simultaneously
- Search Pokémon by name with debounce
- Pokémon detail modal with sprites, evolutions and locations
- Add Pokémon to favorites (saved in localStorage)
- Favorites page with separate route

## Tech Stack

- **React** + **TypeScript**
- **Vite** - build tool
- **TanStack Query** - data fetching and caching
- **shadcn/ui** - component library
- **Tailwind CSS** - styling
- **React Router** - routing
- **PokéAPI** - data source

## Getting started

### Prerequisites

- Node.js >= 22.12
- pnpm

### Installation

```bash
git clone https://github.com/MikeKruk/pokemon-app
cd pokemon-app
pnpm install
```

### Development

```bash
pnpm dev
```

### Production build

```bash
pnpm build
pnpm preview
```

### Project Structure

```
src/
  components/
    layout/   # Layout, Header, Navigation, Cards, Filters ...
    ui/       # shadcn components
  constants/  # API URL, routes, localStorage key, max limit per fetch
  features/
    pokemon/
      api/    # fetch functions
      hooks/  # TanStack Query hooks
  hooks/      # useDebounce, useFavorites
  lib/        # utility functions
  pages/      # HomePage, FavoritesPage
  types/      # TypeScript interfaces
```

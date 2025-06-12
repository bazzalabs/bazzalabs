'use client'

import type * as React from 'react'
import { ThemeProvider as NextThemesProvider } from 'next-themes'

export function ThemeProvider({
  children,
  ...props
}: React.ComponentProps<typeof NextThemesProvider>) {
  const isDarkMode = true
  return (
    <NextThemesProvider
      forcedTheme={isDarkMode ? 'dark' : undefined}
      {...props}
    >
      {children}
    </NextThemesProvider>
  )
}

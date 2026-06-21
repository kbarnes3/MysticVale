import { vi } from 'vitest';

// jsdom (the default Vitest DOM environment) does not implement matchMedia,
// which ThemeService relies on. Provide a minimal stub for the test run.
Object.defineProperty(window, 'matchMedia', {
  writable: true,
  value: vi.fn().mockImplementation((query: string) => ({
    matches: false,
    media: query,
    onchange: null,
    addListener: vi.fn(),
    removeListener: vi.fn(),
    addEventListener: vi.fn(),
    removeEventListener: vi.fn(),
    dispatchEvent: vi.fn(),
  })),
});

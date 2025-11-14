// Polyfill for localStorage during SSR
// This ensures localStorage is available during server-side rendering
// to prevent errors from libraries that try to access it

if (typeof window === 'undefined') {
  // Create a mock localStorage for server-side rendering
  const storage: Record<string, string> = {};
  
  const mockLocalStorage = {
    getItem: (key: string): string | null => {
      return storage[key] || null;
    },
    setItem: (key: string, value: string): void => {
      storage[key] = String(value);
    },
    removeItem: (key: string): void => {
      delete storage[key];
    },
    clear: (): void => {
      Object.keys(storage).forEach(key => delete storage[key]);
    },
    get length(): number {
      return Object.keys(storage).length;
    },
    key: (index: number): string | null => {
      const keys = Object.keys(storage);
      return keys[index] || null;
    },
  };

  // Set on global object for Node.js environment
  if (typeof global !== 'undefined') {
    (global as any).localStorage = mockLocalStorage;
  }
  
  // Also set on globalThis for broader compatibility
  if (typeof globalThis !== 'undefined') {
    (globalThis as any).localStorage = mockLocalStorage;
  }
}


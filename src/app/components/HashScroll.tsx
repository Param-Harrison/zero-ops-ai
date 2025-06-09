'use client';

import { useEffect } from 'react';
import { usePathname, useSearchParams } from 'next/navigation';
import { scrollToElement } from '../utils/scroll';

export default function HashScroll() {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    // Get the hash from the URL
    const hash = window.location.hash.slice(1);
    if (hash) {
      // Small delay to ensure the page has rendered
      setTimeout(() => {
        scrollToElement(hash);
      }, 100);
    }
  }, [pathname, searchParams]);

  return null;
} 
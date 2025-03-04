"use client";

import React, { useEffect, useState } from 'react'
import styles from './styles.module.scss'
import { useDebounce } from '@/app/hooks/useDebounce';

function HeaderSearch() {
  const [searchTerm, setSearchTerm] = useState("");
  const debouncedSearch = useDebounce(searchTerm, 300);
  useEffect(() => {
    if (debouncedSearch) {
      console.log("Searching for:", debouncedSearch);
      // Call API or filter data here
    }
  }, [debouncedSearch]);
  return (
    <input className={styles.searchInput} placeholder='Search...' onChange={(e) => setSearchTerm(e.target.value)} />
  )
}

export default HeaderSearch
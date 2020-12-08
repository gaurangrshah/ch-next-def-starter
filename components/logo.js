import React from 'react';
import Link from "next/link"
// import { Link } from '@/chakra/components/link/next-link';

export const Logo = ({ title }) => {
  return (
    <Link
      href="/"
    >
      <a href="/">{title}</a>
    </Link>
  );
};

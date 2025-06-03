import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

import { cn } from '../lib/utils';

interface LogoProps extends React.ComponentPropsWithoutRef<typeof Link> {}

export const Logo = ({ href, className, ...props }: LogoProps) => {
  return (
    <Link href={href} className={cn('flex items-center', className)} {...props}>
      <Image src="/images/Pie.png" alt="Logo" width={26} height={26} />
      <span className="inline-block font-bold">
        <span className="text-primary">HMHCPTI</span>
      </span>
      <span className="sr-only">Home</span>
    </Link>
  );
};

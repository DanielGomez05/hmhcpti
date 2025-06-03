'use client';

export const Header = ({
  children,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) => {
  return (
    <header
      className="sticky top-0 z-50 bg-white shadow-md transition-colors dark:bg-[#001E2B]"
      {...props}
    >
      {children}
    </header>
  );
};

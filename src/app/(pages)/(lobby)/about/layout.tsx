interface CategoriesLayoutProps extends React.PropsWithChildren {}

export default async function CategoriesLayout({
  children,
}: CategoriesLayoutProps) {
  return (
    <>
      <header> Header</header>
      {children}
      <footer>footer</footer>
    </>
  );
}

import DataHeader from './components/data-header';
import DataFooter from './components/data-footer';

export default function DataRecordsLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen flex flex-col justify-between bg-white text-black">
      <DataHeader />
      <main className="flex-1 px-10 py-8">{children}</main>
      <DataFooter />
    </div>
  );
}
export default function BaseWidget({ children }: { children: React.ReactNode }) {
  return (
    <section className="
      flex-col items-center justify-between
      border border-gray-200 bg-white p-4 rounded-lg shadow-md
      hover:bg-gray-50 hover:shadow-lg
    ">
      {children}
    </section>
  );
}
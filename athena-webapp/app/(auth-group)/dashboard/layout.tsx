import DashboardSidebar from "@/components/DashboardSidebar";

export default function DashboardLayout({
  children, // will be a page or nested layout
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" />
      <link
        href="https://fonts.googleapis.com/css2?family=Poppins&display=swap"
        rel="stylesheet"
      />
      <section>
        {/* Include shared UI here e.g. a header or sidebar */}
        <nav>
          <DashboardSidebar />
        </nav>

        {children}
      </section>
    </>
  );
}

import { SidebarTrigger } from "@/components/ui/sidebar";

export default function DashboardPage() {
  return (
    <section>
      <SidebarTrigger className="mb-4" />
      <h1 className="text-2xl font-bold">Dashboard</h1>
      <p className="mt-4 text-gray-600">Welcome to your dashboard!</p>
    </section>
  );
}

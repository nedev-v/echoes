
import { Feed } from "./components/Feed";
import { Sidebar } from "./components/Sidebar";

export function HomeScreen() {
  return (
    <div className="w-full relative h-screen">
      <Sidebar />
      <main className="absolute top-12 left-[calc(20%+6rem)] right-12">
        <Feed />
      </main>
    </div>
  );
}

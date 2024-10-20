import HomePage from "./screens/homepage/page";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-items-center min-h-screen">
      <main className="flex flex-col items-center sm:items-start">
        <HomePage />
      </main>
    </div>
  );
}

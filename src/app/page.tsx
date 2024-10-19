import Navbar from "../components/Navbar";
import LatestAndPopular from "../components/LatestAndPopular";
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-items-center min-h-screen">
      <main className="flex flex-col items-center sm:items-start">
        <div>
          <Navbar />
        </div>
        <div className="w-screen min-h-screen flex flex-col pl-12 pr-12">
          <div>
            <LatestAndPopular />
          </div>

          <div>breakernews</div>
          <div>worldwidedailynews</div>
        </div>
      </main>
    </div>
  );
}

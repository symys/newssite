import Navbar from "../../components/Navbar";
import LatestAndPopular from "../../components/LatestAndPopular";
import Image from "next/image";

export default function HomePage() {
  return (
  
        <div className="w-screen min-h-screen flex flex-col pl-12 pr-12">
          <div>
            <LatestAndPopular />
          </div>

          <div>breakernews</div>
          <div>worldwidedailynews</div>
        </div>

  );
}

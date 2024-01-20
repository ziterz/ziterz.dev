import Image from "next/image";

export default function Home() {
  return (
    <>
      <div className="px-4 md:px-7">
        <div className="text-white text-3xl md:text-7xl max-w-6xl h-96 flex items-center">
          <p className="leading-tight">
            Hello! I'm Ziady Mubaraq — Software Engineer, Passionate Educator ↓
          </p>
        </div>
      </div>
      <div className="md:px-7">
        <main>
          <div className="grid md:grid-cols-2 gap-2">
            <div>
              <img src="/riot-boardgame.png" />
            </div>
            <div>
              <img src="/riot-boardgame.png" />
            </div>
            <div>
              <img src="/riot-boardgame.png" />
            </div>
            <div>
              <img src="/riot-boardgame.png" />
            </div>
            <div>
              <img src="/riot-boardgame.png" />
            </div>
          </div>
        </main>
      </div>
    </>
  );
}

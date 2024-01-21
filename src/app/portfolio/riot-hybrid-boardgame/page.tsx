"use client";

export default function Riot() {
  return (
    <>
      <div className="container mx-auto" style={{ maxWidth: "800px" }}>
        <div className="text-white px-4 md:px-0">
          <p className="text-xl md:text-2xl py-10">
            Hello! I'm Ziady Mubaraq, a Software Engineer based in Jakarta
            <br />
            <br />
            My work focuses on developing web and mobile applications,
            concurrently, I served as a lead instructor at Hacktiv8 before
            <br />
            <br />
            In addition, I am a graduate of the Apple Developer Academy, where I
            deepened my knowledge in various Apple frameworks and tech stacks as
            an iOS Engineer
            <br />
            <br />
            Let's connect at ziterz@icloud.com
          </p>
        </div>
      </div>
      <div className="grid grid-rows-1 gap-3 md:gap-6">
        <img src="/riot-boardgame.png" />
        <img src="/riot-boardgame.png" />
        <img src="/riot-boardgame.png" />
        <img src="/riot-boardgame.png" />
        <img src="/riot-boardgame.png" />
      </div>
    </>
  );
}

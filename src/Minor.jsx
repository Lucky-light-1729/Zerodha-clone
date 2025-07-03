import React, { useState } from "react";
import MinorImg from "./images/minor-account.png";
import Family from "./images/family-products.png";
import Rupee from "./images/rupee-tales.png";
import Varsity from "./images/varsity-junior.png";
import Play from "./images/play.png";

const Minor = () => {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <>
      {/* Section-1 */}
      <div className="mt-32 flex justify-center gap-[6rem] flex-wrap">
        <div className="flex flex-col justify-center gap-2 max-w-md">
          <h1 className="text-3xl font-semibold">Teach your little ones about</h1>
          <h1 className="text-3xl font-semibold">money</h1>
          <p className="mt-4">
            Knowing how to manage money is an important life skill, and the best
            way to teach your child is to get them involved early.
          </p>
          <p>
            Open a minor account and invest together in stocks, bonds, and mutual funds for their future.
          </p>

          <button className="bg-blue-500 text-white px-3 font-semibold py-2 rounded w-40 hover:bg-black mt-4">
            Open an account
          </button>
        </div>

        <div>
          <img className="h-72 w-auto mt-2" src={MinorImg} alt="Minor" />
        </div>
      </div>

      {/* Section-2 */}
      <div className="flex justify-center gap-[12rem] flex-wrap items-center mt-24">
        <div>
          <img src={Family} alt="Family" className="h-60 w-72" />
          <p>Track your minor's investments using the</p>
          <p>
            <a className="text-blue-700" href="https://zerodha.com/z-connect/console/introducing-family-portfolio-view-on-console">
              Family Portfolio
            </a>{" "}
            on Console.
          </p>
        </div>
        <div>
          <img src={Rupee} alt="Rupee Tales" className="h-48 w-60" />
          <p>
            <a className="text-blue-700" href="https://rupeetales.com/">
              Books
            </a>{" "}
            to help your little ones understand
          </p>
          <p>the financial world through simple stories</p>
          <p>that make learning fun.</p>
        </div>
        <div>
          <img src={Varsity} alt="Varsity Junior" className="h-60 w-72" />
          <p>
            <a className="text-blue-700" href="https://zerodha.com/varsity/chapter/episode-1-ideas-by-the-lake/">
              Series of animated stories
            </a>{" "}
            delivering
          </p>
          <p>fundamental financial lessons to children.</p>
        </div>
      </div>

      {/* Section-3: Video */}
      <div className="flex mt-24 items-center justify-center  flex-wrap  px-4">
        <div className="relative w-fit mx-auto">
          {!isPlaying ? (
            <div className="relative">
              <img src={MinorImg} alt="Video thumbnail" className="h-72 w-auto rounded" />
              <button
                onClick={() => setIsPlaying(true)}
                className="absolute inset-0 flex justify-center items-center"
              >
                <img src={Play} alt="Play button" className="h-16 w-16 opacity-90 hover:opacity-100" />
              </button>
            </div>
          ) : (
            <div className="w-full max-w-xl">
              <iframe
                width="560"
                height="315"
                src="https://www.youtube.com/embed/b6NP2fIThPQ?autoplay=1"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="rounded"
              ></iframe>
            </div>
          )}
        </div>

        <div className="max-w-md">
          <h1 className="text-xl font-semibold mb-4">How does it work</h1>
          <ul className="list-disc space-y-2 ml-5 text-base text-gray-700">
            <li>As guardians, you are in full control of the minor's Zerodha account.</li>
            <li>Minors cannot buy securities on their own. They can only track their portfolio and perform sell transactions.</li>
            <li>The parent can either gift securities to the minor, or the minor can request the parent to buy securities and then gift it to them.</li>
            <li>Intraday and F&O trading is not allowed in minor accounts.</li>
            <li>Minor's Aadhaar needs to be linked to a mobile number in order to open the demat account online.</li>
            <li>No account opening and annual maintenance charges (AMC) applicable to minor accounts.</li>
          </ul>
          <a className="inline-block mt-4 text-blue-700 font-semibold hover:underline cursor-pointer">
            FAQs &rarr;
          </a>
        </div>
      </div>
    </>
  );
};

export default Minor;

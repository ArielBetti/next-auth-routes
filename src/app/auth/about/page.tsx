import React from "react";

// general-components
import { CardLink } from "@/components";

// ::
export default function page() {
  return (
    <>
      <div className="flex-col gap-2 prose">
        <h1>👋 Hey there, I'm Ariel Betti!</h1>
        <p>
          Well done, you've stumbled upon an authenticated route! While you're
          here, let me introduce myself.
        </p>
        <p>
          I'm a software engineer who creates cool things for the Open Source
          community in my spare time.
        </p>
        <p>I think that about covers it, it's a pleasure to meet you!</p>
        <p>
          Now that we've been acquainted, how about supporting me by giving a
          follow on my social media?
        </p>
      </div>
      <div className="flex flex-col mt-10">
        <CardLink target="_blank" href="https://github.com/ArielBetti">
          🐙 Github: ArielBetti
        </CardLink>
        <CardLink target="_blank" href="https://www.twitch.tv/asancode">
          💜 Twitch: asanCode
        </CardLink>
        <CardLink target="_blank" href="https://www.youtube.com/@arielbetti">
          📺 Youtube: @ArielBetti
        </CardLink>
      </div>
    </>
  );
}

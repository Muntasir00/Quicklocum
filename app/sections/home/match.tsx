import React from "react";
import {ArrowRight} from "lucide-react";
import clientsImage from "public/image/client.png";
import prosImage from "public/image/find-jobs.png";

export default function Match() {
    return (
        <section className="w-full bg-[rgba(239,246,249,1)]">
            <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 sm:py-16 lg:px-8 lg:py-20">
                {/* Heading */}
                <div className="mx-auto max-w-2xl text-center">
                    <h2 className="text-[28px] font-extrabold leading-tight text-[#18181B] sm:text-4xl lg:text-5xl">
                        Technology that finds your{" "}
                        <span className="block sm:inline">
                          <span className="text-[#009E4A]">perfect match</span>
                        </span>
                    </h2>

                    <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-[#3F3F46] sm:text-base">
                        Our intelligent matching engine analyzes your needs and preferences to deliver the{" "}
                        best possible connections— fast and reliably.
                    </p>
                </div>

                {/* Cards */}
                <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2 md:gap-7 lg:mt-12">
                    {/* For Clients */}
                    <MatchCard
                        title="For Clients"
                        desc="Receive applications filtered by skills, availability, and specialty."
                        bgClass="bg-[#D1D1FA]"
                        image={clientsImage}
                        imageAlt="Clients dashboard preview"
                    />

                    {/* For Professionals */}
                    <MatchCard
                        title="For Professionals"
                        desc="Discover opportunities that fit your hourly rate, contract type, and location preferences."
                        bgClass="bg-[#DAF6CE]" // soft green
                        image={prosImage}
                        imageAlt="Professionals dashboard preview"
                    />
                </div>

                {/* CTA Button */}
                <div className="mt-10 flex justify-center lg:mt-12">
                    <button
                        className="
              inline-flex items-center justify-center gap-2 cursor-pointer
              rounded-xl bg-[#252549] px-6 py-3
              text-sm font-semibold text-white
              shadow-md shadow-slate-900/15
              transition hover:brightness-110 active:scale-[0.99]
              focus:outline-none focus-visible:ring-2 focus-visible:ring-[#252549]/40
            "
                    >
                        Start Matching Now <ArrowRight className="h-4 w-4"/>
                    </button>
                </div>
            </div>
        </section>
    );
}

function MatchCard({
                       title,
                       desc,
                       bgClass,
                       image,
                       imageAlt,
                   }: {
    title: string;
    desc: string;
    bgClass: string;
    image: string;
    imageAlt: string;
}) {
    return (
        <div
            className={[
                "relative overflow-hidden rounded-2xl backdrop-blur-sm",
                "px-5 pt-7 sm:px-8 sm:pt-9",
                "min-h-[320px] sm:min-h-[360px] lg:min-h-[380px]",
                bgClass,
            ].join(" ")}
        >
            {/* Soft inner highlight like screenshot */}
            <div className="pointer-events-none absolute inset-0">
                <div className="absolute left-1/2 top-6 h-40 w-72 -translate-x-1/2 rounded-full bg-white/25 blur-2xl"/>
            </div>

            {/* Text */}
            <div className="relative z-10 text-center">
                <h3 className="text-xl font-bold text-[#252549] sm:text-[30px]">
                    {title}
                </h3>
                <p className="mx-auto mt-2 max-w-md text-sm leading-relaxed text-[#334155] sm:text-lg">
                    {desc}
                </p>
            </div>

            {/* Image (bottom aligned like screenshot) */}
            <div className="absolute inset-x-5 bottom-5 sm:inset-x-8 sm:bottom-6">
                <div
                    className="relative overflow-hidden ">
                    <img
                        src={image}
                        alt={imageAlt}
                        className="w-full h-auto object-cover"
                        loading="lazy"
                    />
                </div>
            </div>
        </div>
    );
}

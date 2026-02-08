import React from "react";
import {
    PhoneCall,
    FileText,
    Timer,
    PencilLine,
    Sparkles,
    Link2, type LucideIcon,
} from "lucide-react";
import bgImage from "public/image/whychooseus.png"

type Tone = "red" | "green";

type CompareItem = {
    title: string;
    desc: string;
    badge: string;
    badgeTone: Tone;
    Icon: LucideIcon;
};

/**
 * Tailwind-only (no shadcn needed) + lucide icons
 * Responsive: mobile=stack, md+=2 columns, xl spacing closer to the screenshot
 */
export default function Method() {
    const oldWay = [
        {
            title: "Cold outreach",
            desc: "Calling agencies, posting on job boards, hoping someone applies.",
            badge: "Week 1",
            badgeTone: "red",
            Icon: PhoneCall,
        },
        {
            title: "Paper & email chains",
            desc: "Resumes by email. Manual screening. Lost in inboxes.",
            badge: "Week 2-3",
            badgeTone: "red",
            Icon: FileText,
        },
        {
            title: "Slow interviews & delays",
            desc: "Scheduling, credential checks, back-and-forth weeks of waiting.",
            badge: "Week 4+",
            badgeTone: "red",
            Icon: Timer,
        },
    ] satisfies CompareItem[];

    const quicklocumWay = [
        {
            title: "Post your need",
            desc: "Describe the role. Our system instantly matches verified professionals.",
            badge: "Minutes",
            badgeTone: "green",
            Icon: PencilLine,
        },
        {
            title: "Smart matching",
            desc: "AI-ranked candidates with credentials already verified on-platform.",
            badge: "Hours",
            badgeTone: "green",
            Icon: Sparkles,
        },
        {
            title: "Connect & confirm",
            desc: "One click to connect. Contracts, onboarding all digital, all done.",
            badge: "Same day",
            badgeTone: "green",
            Icon: Link2,
        },
    ] satisfies CompareItem[];

    return (
        <section
            // className="relative overflow-hidden "
            className="relative w-full  bg-cover bg-center bg-no-repeat"
            style={{backgroundImage: `url(${bgImage})`}}
        >


            {/* cloud-ish blobs (approx of screenshot) */}
            <div className="pointer-events-none absolute left-10 top-14 hidden md:block">
                <div className="h-28 w-52 rounded-full bg-white/5 blur-[1px]"/>
                <div className="-mt-12 ml-10 h-24 w-44 rounded-full bg-white/4 blur-[1px]"/>
            </div>
            <div className="pointer-events-none absolute bottom-14 right-10 hidden md:block">
                <div className="h-28 w-56 rounded-full bg-white/5 blur-[1px]"/>
                <div className="-mt-12 ml-10 h-24 w-44 rounded-full bg-white/4 blur-[1px]"/>
            </div>

            <div className="relative mx-auto max-w-6xl px-4 py-14 sm:px-6 sm:py-16 lg:px-8 lg:py-20">
                {/* Title */}
                <h2 className="mx-auto max-w-3xl text-center text-2xl font-extrabold leading-tight text-white sm:text-3xl lg:text-4xl">
                    Why choose{" "}
                    <span className="text-[#56d364]">Quicklocum</span> over{" "}
                    <span className="text-white/95">traditional methods?</span>
                </h2>

                {/* Two columns */}
                <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2 md:gap-8 lg:mt-12 items-start">
                    {/* Left: Old way */}
                    <CompareColumn
                        dotColor="bg-[#ef4444]"
                        label="THE OLD WAY"
                        items={oldWay}
                    />

                    {/* Right: Quicklocum way */}
                    <CompareColumn
                        dotColor="bg-[#22c55e]"
                        label="THE QUICKLOCUM WAY"
                        items={quicklocumWay}
                    />
                </div>

                {/* Footer line */}
                <p className="mx-auto mt-10 max-w-3xl text-center text-sm leading-relaxed text-white/70 sm:mt-12">
                    Unlike other platforms, Quicklocum focuses on{" "}
                    <span className="font-semibold text-white/90">
            high-value contracts and cutting-edge technology
          </span>{" "}
                    to meet the needs of clients and the expectations of healthcare
                    professionals.
                </p>
            </div>
        </section>
    );
}

function CompareColumn({
                           dotColor,
                           label,
                           items,
                       }: {
    dotColor: string;
    label: string;
    items: Array<{
        title: string;
        desc: string;
        badge: string;
        badgeTone: "red" | "green";
        Icon: React.ComponentType<{ className?: string }>;
    }>;
}) {
    return (
        <div className="space-y-4">
            <div className="flex items-center gap-2 px-1">
                <span className={`h-2 w-2 rounded-full ${dotColor}`}/>
                <span className="text-xs font-semibold tracking-widest text-white/70">
          {label}
        </span>
            </div>

            {/* alignment fix:
          - grid + auto-rows-fr => row height consistent within the column
          - each card h-full => equal height feel
      */}
            <div className="grid gap-4 auto-rows-fr">
                {items.map((it) => (
                    <CompareCard key={it.title} item={it}/>
                ))}
            </div>
        </div>
    );
}

function CompareCard({
                         item,
                     }: {
    item: {
        title: string;
        desc: string;
        badge: string;
        badgeTone: "red" | "green";
        Icon: React.ComponentType<{ className?: string }>;
    };
}) {
    const {Icon} = item;

    const badgeCls =
        item.badgeTone === "red"
            ? "bg-[#ef4444] text-white"
            : "bg-[#22c55e] text-white";

    return (
        <div
            className={[
                "relative rounded-2xl border border-white/10",
                "bg-white/10 backdrop-blur-md",
                "px-4 py-4 sm:px-5 sm:py-5",
                "shadow-[0_10px_30px_-18px_rgba(0,0,0,0.8)]",
            ].join(" ")}
        >
            {/* top-right badge */}
            <span
                className={[
                    "absolute right-4 top-4 inline-flex items-center rounded-full px-3 py-1",
                    "text-xs font-semibold",
                    badgeCls,
                ].join(" ")}
            >
        {item.badge}
      </span>

            <div className="flex items-start gap-3 pr-16">
                {/* icon box */}
                <div
                    className="mt-0.5 flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white/10 ring-1 ring-white/10">
                    <Icon className="h-5 w-5 text-white/80"/>
                </div>

                {/* text */}
                <div className="min-w-0">
                    <h3 className="text-base font-semibold text-white/90 sm:text-[17px]">
                        {item.title}
                    </h3>
                    <p className="mt-1 text-sm leading-relaxed text-white/65">
                        {item.desc}
                    </p>
                </div>
            </div>
        </div>
    );
}

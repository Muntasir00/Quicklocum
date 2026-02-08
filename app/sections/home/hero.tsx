import { Star, Menu } from "lucide-react";
import { useEffect, useState } from "react";
import { Link } from "react-router";
import { Button } from "~/components/ui/button";
import {
    Sheet,
    SheetContent,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "~/components/ui/sheet";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "~/components/ui/select";

import bgImage from "~/../public/image/bg-image.png";
import heroImage from "~/../public/image/Dashboard.png";

const navLinks = [
    { name: "How It Works", href: "#how-it-works" },
    { name: "For Clients", href: "#for-clients" },
    { name: "For Professionals", href: "#for-professionals" },
    { name: "Pricing", href: "#pricing" },
];

const Hero = () => {
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => setIsScrolled(window.scrollY > 20);
        handleScroll();
        window.addEventListener("scroll", handleScroll, { passive: true });
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <div
            className="relative w-full  bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: `url(${bgImage})` }}
        >
            {/* subtle overlay for readability */}
            <div className="pointer-events-none absolute inset-0 bg-white/40" />

            {/* NAVBAR */}
            <header className="fixed top-0 left-0 z-50 w-full px-3 sm:px-6 py-4 pointer-events-none">
                <nav
                    className={[
                        "pointer-events-auto mx-auto flex w-full max-w-[1400px] items-center justify-between",
                        "rounded-2xl border border-white/40 px-4 sm:px-6 lg:px-10 py-3",
                        "transition-all duration-500 ease-in-out",
                        isScrolled
                            ? "bg-white/90 backdrop-blur-xl shadow-xl shadow-slate-200/50 -translate-y-1"
                            : "bg-[#e2f1ee]/75 backdrop-blur-md shadow-none",
                    ].join(" ")}
                >
                    {/* Logo */}
                    <Link to="/" className="flex items-center">
            <span className="text-xl sm:text-2xl lg:text-[26px] font-bold text-[#1e2238] tracking-tight">
              Quicklocum<span className="text-[#52c41a]">.</span>
            </span>
                    </Link>

                    {/* Desktop Links */}
                    <div className="hidden lg:flex items-center gap-8 xl:gap-12 text-[15px] font-medium text-[#1e2238]">
                        {navLinks.map((l) => (
                            <a
                                key={l.name}
                                href={l.href}
                                className="hover:text-blue-600 transition-colors"
                            >
                                {l.name}
                            </a>
                        ))}
                    </div>

                    {/* Actions */}
                    <div className="flex items-center gap-2 sm:gap-3">
                        {/* Language (hide on xs) */}
                        <div className="hidden sm:block">
                            <Select defaultValue="en">
                                <SelectTrigger className="h-10 w-[78px] rounded-xl border-slate-300 bg-transparent text-[#1e2238] font-semibold focus:ring-0">
                                    <SelectValue placeholder="En" />
                                </SelectTrigger>
                                <SelectContent className="rounded-xl">
                                    <SelectItem value="en">En</SelectItem>
                                    <SelectItem value="bn">Bn</SelectItem>
                                    <SelectItem value="fr">Fr</SelectItem>
                                </SelectContent>
                            </Select>
                        </div>

                        {/* Desktop CTA */}
                        <Button className="hidden sm:inline-flex bg-[#2d325a] hover:bg-[#1e2238] text-white px-5 sm:px-7 h-11 sm:h-12 rounded-xl sm:rounded-2xl text-xs sm:text-sm font-semibold transition-all">
                            Create My Profile
                        </Button>

                        {/* Mobile menu */}
                        <div className="lg:hidden">
                            <Sheet>
                                <SheetTrigger asChild>
                                    <Button
                                        variant="ghost"
                                        size="icon"
                                        className="rounded-full hover:bg-white/50"
                                        aria-label="Open menu"
                                    >
                                        <Menu className="h-6 w-6 text-[#1e2238]" />
                                    </Button>
                                </SheetTrigger>

                                <SheetContent side="right" className="w-[300px] bg-white/95 backdrop-blur-xl">
                                    <SheetHeader className="text-left">
                                        <SheetTitle className="text-2xl font-bold">
                                            Quicklocum<span className="text-[#52c41a]">.</span>
                                        </SheetTitle>
                                    </SheetHeader>

                                    <div className="mt-8 flex flex-col gap-6 p-4">
                                        {navLinks.map((l) => (
                                            <a
                                                key={l.name}
                                                href={l.href}
                                                className="text-lg font-semibold text-[#1e2238] hover:text-blue-600 transition-colors"
                                            >
                                                {l.name}
                                            </a>
                                        ))}

                                        <hr className="border-slate-100" />

                                        <div className="space-y-2">
                                            <p className="text-xs font-bold text-slate-400 uppercase tracking-wider">
                                                Language
                                            </p>
                                            <Select defaultValue="en">
                                                <SelectTrigger className="h-12 w-full rounded-xl border-slate-200">
                                                    <SelectValue />
                                                </SelectTrigger>
                                                <SelectContent>
                                                    <SelectItem value="en">English (En)</SelectItem>
                                                    <SelectItem value="bn">Bengali (Bn)</SelectItem>
                                                    <SelectItem value="fr">French (Fr)</SelectItem>
                                                </SelectContent>
                                            </Select>
                                        </div>

                                        {/* Mobile CTAs */}
                                        <div className="mt-2 flex flex-col gap-3">
                                            <Button className="bg-[#2d325a] hover:bg-[#1e2238] text-white h-12 rounded-xl text-sm font-semibold">
                                                Create My Profile
                                            </Button>
                                            <Button
                                                variant="outline"
                                                className="h-12 rounded-xl text-sm font-semibold border-2"
                                            >
                                                Post my need
                                            </Button>
                                        </div>
                                    </div>
                                </SheetContent>
                            </Sheet>
                        </div>
                    </div>
                </nav>
            </header>

            {/* HERO */}
            <section className="relative z-10 mx-auto grid max-w-[1440px] items-center gap-10 lg:grid-cols-2 px-4 sm:px-8 lg:px-10 pt-28 sm:pt-40 lg:pt-52 pb-20">
                {/* Left */}
                <div className="order-2 lg:order-1 text-center lg:text-left max-w-2xl mx-auto lg:mx-0">
                    <h1
                        className="font-bold leading-[1.1] text-[#334155] tracking-tight"
                        style={{ fontSize: "clamp(32px, 6vw, 68px)" }}
                    >
                        The ecosystem that brings{" "}
                        <span className="text-[#3b49df]">healthcare</span> staffing together
                    </h1>

                    <p className="mt-6 sm:mt-7 text-base sm:text-lg lg:text-xl text-slate-600/90 leading-relaxed font-medium max-w-lg mx-auto lg:mx-0">
                        One platform to publish contracts, connect with verified healthcare
                        professionals, and fill shifts faster — with or without agencies.
                    </p>

                    <div className="mt-8 sm:mt-10 flex flex-col sm:flex-row flex-wrap justify-center lg:justify-start gap-4">
                        <Button
                            size="lg"
                            className="h-14 sm:h-16 rounded-xl sm:rounded-2xl px-8 sm:px-10 text-base sm:text-lg font-bold bg-[#3b49df] hover:bg-[#2d39b8] text-white shadow-lg shadow-blue-600/20"
                        >
                            Post my need
                        </Button>

                        <Button
                            size="lg"
                            variant="outline"
                            className="h-14 sm:h-16 rounded-xl sm:rounded-2xl px-8 sm:px-10 text-base sm:text-lg font-bold border-2 border-slate-300 bg-white/50 backdrop-blur"
                        >
                            Create My Profile
                        </Button>
                    </div>

                    {/* Rating */}
                    <div className="mt-8 sm:mt-10 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3 sm:gap-4">
                        <div className="flex items-center gap-0.5">
                            {[1, 2, 3, 4].map((s) => (
                                <Star key={s} size={20} fill="#475569" className="text-slate-600" />
                            ))}
                            {/* partial star */}
                            <div className="relative">
                                <Star size={20} className="text-[#475569]" strokeWidth={2} />
                                <div className="absolute inset-0 overflow-hidden" style={{ width: "70%" }}>
                                    <Star size={20} fill="#475569" className="text-slate-600" />
                                </div>
                            </div>
                        </div>

                        <p className="text-sm sm:text-[15px] font-semibold text-slate-500 text-center sm:text-left">
                            4.8/5 based on 7,377 reviews | GDPR Compliant
                        </p>
                    </div>
                </div>

                {/* Right */}
                <div className="order-1 lg:order-2 w-full max-w-[620px] lg:max-w-none mx-auto">
                    <div className="relative">
                        <div className="relative z-10 overflow-hidden  shadow-2xl transition-transform duration-700 hover:scale-[1.02]">
                            <img
                                src={heroImage}
                                alt="Dashboard Preview"
                                className="w-full h-auto object-cover"
                                loading="lazy"
                            />
                        </div>

                        {/* glow */}
                        <div className="pointer-events-none absolute -top-10 -right-10 h-44 w-44 sm:h-80 sm:w-80 rounded-full bg-blue-100/40 blur-[70px] sm:blur-[110px]" />
                    </div>
                </div>
            </section>

            {/* OPTIONAL: sections placeholder for anchors */}
            <div className="sr-only">
                <div id="how-it-works" />
                <div id="for-clients" />
                <div id="for-professionals" />
                <div id="pricing" />
            </div>
        </div>
    );
};

export default Hero;

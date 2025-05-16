import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="h-fit my-auto flex items-center gap-24 flex-col lg:flex-row p-4">
      <Image
        src={"/impulse-logo.svg"}
        width={350}
        height={350}
        alt="impulse logo"
      />
      <div className="flex flex-col items-center gap-4">
        <h1>Impulse</h1>
        <h2>Track Prices. Shop Smarter.</h2>
        <Button size="cta" className="mt-16 w-full font-bold" asChild>
          <Link href="/sign-up">Get Started</Link>
        </Button>
      </div>
    </div>
  );
}

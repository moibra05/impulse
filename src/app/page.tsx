"use client";

import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { createClient } from "../../utils/supabase/client";
import { useEffect, useState } from "react";

export default function Home() {
  const [redirectLink, setRedirectLink] = useState("/sign-up");

  useEffect(() => {
    async function checkAuth() {
      const supabase = await createClient();
      const {
        data: { user },
      } = await supabase.auth.getUser();

      if (user !== null) {
        setRedirectLink("/dashboard");
      }
    }

    checkAuth();
  }, []);

  return (
    <main className="flex items-center gap-8 lg:gap-24 flex-col lg:flex-row p-4 justify-center">
      <Image
        src={"/impulse-logo.svg"}
        width={350}
        height={350}
        alt="impulse logo"
        className="w-40 lg:w-64"
      />
      <div className="flex flex-col items-center gap-4">
        <h1>Impulse</h1>
        <h2>Track Prices. Shop Smarter.</h2>
        <Button size="cta" className="mt-8 lg:mt-16 w-full font-bold" asChild>
          <Link href={redirectLink}>Get Started</Link>
        </Button>
      </div>
    </main>
  );
}

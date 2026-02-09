import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex min-h-screen w-full max-w-3xl flex-col items-center justify-between py-32 px-16 bg-white dark:bg-black sm:items-start">

        <div className="flex flex-col items-center gap-6 text-center sm:items-start sm:text-left">
          <h1 className="max-w-xs text-3xl font-semibold leading-10 tracking-tight text-black dark:text-zinc-50">
            visit here for the Loan application detail view: 
             </h1>
          <Link
            href="/loan/APP-2026-003"
            className="flex min-h-screen w-full max-w-3xl flex-col items-center justify-between py-32 px-16 bg-white dark:bg-black sm:items-start"
          >
            <Button className="transition transform hover:scale-105 hover:shadow-lg">
              Open Loan application APP-2026-003
            </Button>
            
          </Link>
         
        </div>
      </main>
    </div>
  );
}

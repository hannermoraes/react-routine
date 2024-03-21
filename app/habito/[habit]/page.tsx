import ArrowIcon from "@/components/ArrowIcon";
import Calendar from "@/components/Calendar";
import { Button } from "@/components/ui/button";
import { kv } from "@vercel/kv";
import Link from "next/link";

async function Habit({ params: { habit } }: { params: { habit: string } }) {
  const decodedHabit = decodeURI(habit);
  const habitStreak: Record<string, boolean> | null = await kv.hget(
    "habits",
    decodedHabit
  );

  return (
    <main className="container flex flex-col">
      <div>
        <Button variant="outline" size={"sm"}>
          <Link
            className="flex items-center text-sm gap-1"
            href="/"
          >
            <ArrowIcon width={12} height={12} />
            voltar
          </Link>
        </Button>
      </div>
      <div>
        <h1 className="pt-12 text-lg font-bold">
          <span className="text-lg font-normal dark:font-thin">Hábito:&#32;&#32;</span>
          {decodedHabit}
        </h1>
      </div>

      <Calendar habit={decodedHabit} habitStreak={habitStreak} />
    </main>
  );
}

export default Habit;

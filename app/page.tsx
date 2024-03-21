import DayState from "@/components/DayState";
import DeleteButton from "@/components/DeleteButton";
import { Button, buttonVariants } from "@/components/ui/button";
import { kv } from "@vercel/kv";
import Link from "next/link";
import { BsPlusCircleDotted } from "react-icons/bs";

export type Habits = {
  [habit: string]: Record<string, boolean>;
} | null;

export default async function Home() {
  const habits: Habits = await kv.hgetall("habits");

  const today = new Date();
  const todayWeekDay = today.getDay();
  const weekDays = ["Dom", "Seg", "Ter", "Qua", "Qui", "Sex", "Sab"];

  const sortedWeekDays = weekDays
    .slice(todayWeekDay + 1)
    .concat(weekDays.slice(0, todayWeekDay + 1));

  const last7Days = weekDays
    .map((_, index) => {
      const date = new Date();
      date.setDate(date.getDate() - index);

      return date.toISOString().slice(0, 10);
    })
    .reverse();

  return (
    <main className="container flex flex-col justify-center gap-6">
      {(habits === null || Object.keys(habits || {}).length === 0) && (
        <h1 className="flex justify-center items-center text-sm sm:text-lg md:text-2xl font-normal ">
          Você não tem &nbsp;<span className="font-extrabold ">hábitos</span>&nbsp; cadastrados.
        </h1>
      )}
      {habits !== null &&
        Object.entries(habits).map(([habit, habitStreak]) => (
          <div key={habit} className="flex flex-col gap-1 border-2 rounded-xl capitalize">
            <div className="flex justify-between items-center">
              <Link href={`habito/${habit}`}>
                <div className="flex items-center justify-between p-2 w-full">
                  <span className="font-bold mt-1 pl-1 text-sm">
                    {habit}
                  </span>
                </div>
              </Link>
              <div className="pr-1">
                <DeleteButton habit={habit} />
              </div>
            </div>
            <div className="bg-foreground/5 rounded-b-md border-1">
              <Link href={`habito/${habit}`}>
                <section className="grid grid-cols-7 pt-2 mx-1">
                  {sortedWeekDays.map((day, index) => (
                    <div key={day} className="flex flex-col items-center gap-1 border-2 border-foreground/0 last:font-extrabold pb-2 my-2 last:bg-foreground/5 last:border-2 last:border-foreground/5 last:rounded-md">
                      <span className="text-xs text-center lowercase">
                        {day}
                      </span>

                      {/* Day State */}
                      <DayState day={habitStreak[last7Days[index]]} />

                    </div>
                  ))}
                </section>
              </Link>
            </div>
          </div>
        ))
      }
      <Link
        className={buttonVariants({ variant: "default" })} href={"/novo-habito"}>
        <BsPlusCircleDotted size={18} className="mr-2" />Novo hábito
      </Link>
    </main >
  );
}
import { Button, buttonVariants } from "@/components/ui/button"
import Link from "next/link"
import { BiTrash } from "react-icons/bi"
import { CiCirclePlus } from "react-icons/ci"
import DayState from "@/components/DayState";


export default function Home() {

  const habits = {
    'running': {
      '2024-1-01': true,
      '2024-1-02': false,
      '2024-1-03': false,
    },
    'study': {
      '2024-2-01': true,
      '2024-2-02': true,
      '2024-2-03': true,
    }
  }

  const today = new Date()
  const todayWeekDay = today.getDay()
  const weekDays = ['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sab']


  const sortedWeekDays = weekDays.slice(todayWeekDay + 1).concat(weekDays.slice(0, todayWeekDay + 1))
  return (
    <main className="container flex flex-col gap-8 px-4 pt-16">
      {habits == null || Object.keys(habits).length === 0 && (
        <h1>Você não tem&nbsp;<span>hábitos</span>&nbsp;cadastrados.</h1>
      )}
      {habits != null && Object.entries(habits).map(([habit, habitStreak]) => (

        <div key={habit}>
          <div className="flex justify-between items-center">
            <span className="text-sm font-light font-sans">{habit}</span>
            <Button variant={'ghost'} size={'icon'}>
              <BiTrash className="text-red-500 text-foreground" />
            </Button>
          </div>
          <section className="grid grid-cols-7 rounded p-2 bg-secondary">
            {sortedWeekDays.map((day) => (
              <div key={day} className="flex flex-col last:font-extrabold last:border-2 last:rounded-md last:border-foreground/5 last:dark:bg-foreground/10 last:bg-foreground/5 last: text-center ">
                <span className="font-sans text-xs">
                  {day}
                </span>
                {/* day state */}
                <div className="flex justify-center">
                  <DayState day={undefined} />
                </div>
              </div>
            ))}
          </section>
        </div>
      ))}
      <div className="flex justify-center items-center">
        <Link
          className={buttonVariants({ variant: "default" })}
          href={"/new-habit"}>
          <CiCirclePlus className="mr-1" size={18} />
          Novo hábito
        </Link>

      </div>
    </main>
  );
}

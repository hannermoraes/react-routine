import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input"
import Link from "next/link";

function NewHabit() {
  async function newHabit(formData: FormData) {
    "use server"

    const habit = formData.get("habit")
    console.log(habit)
  }
  return (
    <main className="container w-full flex flex-col px-12 pt-16">
      <h1 className="text-sm">Novo Hábito:</h1>

      <form action={newHabit} className="w-full flex flex-col gap-4 mt-4">
        <Input type="text" name="habit" id="habit" className="p=2 text-xl rounded-md" />
        <div className="min-w-full flex gap-4">
          <Button className="w-full" type="submit">Adicionar</Button>
          <Button className="w-full" type="reset">Cancelar</Button>
        </div>
      </form>
      <div className="mt-4">
        <Button className="w-full" asChild>
          <Link href={"/"}>Voltar</Link>
        </Button>
      </div>
    </main>
  );
}

export default NewHabit;
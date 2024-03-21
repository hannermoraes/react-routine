"use server";

import { kv } from "@vercel/kv";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export async function newHabit(formData: FormData) {
  const habit = formData.get("habit") as string;

  // Validação de dados vazios
  if (habit.trim() === '') {
    return 'O titulo do seu hábito não pode estar em branco.';
  }
  // Validação de dados com mais de 35 caracteres
  if (habit.length > 20) {
    return 'Não é possível inserir um hábito com mais de 20 caracteres no titulo.';
  }

  await kv.hset("habits", { [habit as string]: {} });

  revalidatePath("/");
  redirect("/");
}
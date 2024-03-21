"use client";

import Image from "next/image";
import { Button } from "./ui/button";
import { deleteHabit } from "./DeleteHabit";
import { toast } from "sonner";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog"

export default function DeleteButton({ habit }: { habit: string }) {
  const handleDelete = async () => {
    await deleteHabit(habit);
    toast("Hábito excluído", {
      description: `Hábito '${habit}' foi excluído com sucesso.`,
      action: {
        label: "Ok",
        onClick: () => console.log("Ok"),
      },
    });
  };

  return (
    <div>
      <AlertDialog>
        <AlertDialogTrigger asChild>
          <Button size={'sm'} variant={'ghost'}>
            <Image
              src={"/images/trash.svg"}
              width={16}
              height={16}
              alt={"Ícone de lixeira"}
            />
          </Button>
        </AlertDialogTrigger>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Tem certeza?</AlertDialogTitle>
            <AlertDialogDescription>
              Esta ação não pode ser desfeita. Isso excluirá permanentemente da sua lista o hábito
              <span className="font-extrabold"> <q>{habit}</q></span>.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Cancelar</AlertDialogCancel>
            <AlertDialogAction onClick={handleDelete}>Continuar</AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  );
}

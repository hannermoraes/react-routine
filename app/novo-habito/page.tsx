"use client";

import { useState } from 'react';
import { Terminal } from "lucide-react";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Button, buttonVariants } from '@/components/ui/button';
import Link from 'next/link';
import { newHabit } from '@/components/newHabit';
import { toast } from 'sonner';
import ArrowIcon from '@/components/ArrowIcon';


export default function NewHabit() {
  const [erro, setErro] = useState('');

  const handleSubmit = async (event: any) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const result = await newHabit(formData);
    if (typeof result === 'string') {
      setErro(result);
    } else {
      toast("Novo hábito criado com sucesso!", {
        description: `Hábito '${formData.get("habit")}' foi adicionado com sucesso.`,
        action: {
          label: "Ok",
          onClick: () => console.log("Ok"),
        },
      })
    }
    setErro(result);
  };

  return (
    <main className="container w-full flex flex-col">
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
      <form onSubmit={handleSubmit} className="flex flex-col mt-4 pt-12">
        <Label htmlFor="habit" className="mb-1 font-thin text-lg">Seu Hábito:</Label>
        <div className="flex flex-col">
          <Input
            type="text"
            name="habit"
            id="habit"
            className='capitalize'
          />
          {erro && (
            <Alert>
              <Terminal className="h-4 w-4" />
              <AlertTitle>Houve um erro!</AlertTitle>
              <AlertDescription>{erro}</AlertDescription>
            </Alert>
          )}
          <div className="gap-4 items-center flex mt-2">
            <Button variant={'default'} type="submit" className="w-full">Adicionar</Button>
            <Button variant={'destructive'} type="reset" className="w-full">Cancelar</Button>
          </div>
        </div>
      </form>
    </main >
  );
}

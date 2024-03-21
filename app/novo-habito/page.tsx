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
import { BsPlusCircleDotted } from 'react-icons/bs';


export default function NewHabit() {
  const [erro, setErro] = useState('');

  const handleSubmit = async (event: any) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const result = await newHabit(formData);
    if (typeof result === 'string') {
      setErro(result);
    } else {
      toast("Hábito criado com sucesso!", {
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
            className="flex items-center gap-1 text-xs"
            href="/"
          >
            <ArrowIcon width={12} height={12} />
            voltar
          </Link>
        </Button>
      </div>
      <form onSubmit={handleSubmit} className="flex flex-col mt-4 pt-12">
        <Label htmlFor="habit" className=" text-sm font-bold dark:font-normal">Hábito:</Label>
        <div className="flex flex-col">
          <Input
            type="text"
            name="habit"
            id="habit"
            className='text-xs font-medium text-wrap placeholder:text-thin placeholder:text-gray-300 dark:placeholder:text-gray-600'
            placeholder='ex.: estudar'
          />
          {erro && (
            <Alert className='my-2'>
              <Terminal className="h-4 w-4" />
              <AlertTitle className='text-xs font-extrabold'>Houve um erro!</AlertTitle>
              <AlertDescription className='text-xs'>{erro}</AlertDescription>
            </Alert>
          )}
          <div className="gap-4 items-center flex mt-2">
            <Button
              variant={'default'}
              size={'sm'}
              type="submit"
              className="w-full">
              <BsPlusCircleDotted size={14} className="mr-2" />
              adicionar
            </Button>
            <Button
              variant={'outline'}
              size={'sm'}
              type="reset"
              className="w-full">
              cancelar
            </Button>
          </div>
        </div>
      </form>
    </main >
  );
}

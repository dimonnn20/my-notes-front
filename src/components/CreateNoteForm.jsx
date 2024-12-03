import { Button, Input, Textarea } from "@chakra-ui/react";

export default function CreateNoteForm() {
    return (
          <form className='w-full flex flex-col gap-3'>
            <h3 className='font-bold text-xl'>Создание заметки</h3>
            <Input placeholder='Название'></Input>
            <Textarea placeholder='Описание'></Textarea>
            <Button colorScheme='teal'>Создать</Button>
          </form>
    )
  }
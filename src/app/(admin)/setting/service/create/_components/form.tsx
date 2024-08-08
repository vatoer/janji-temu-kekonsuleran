"use client";
import FormRow from "@/components/form/form-row";
import { Button } from "@/components/ui/button";
import { Service, serviceSchema } from "@/zod-schemas/service";
import { zodResolver } from "@hookform/resolvers/zod";
import { FormProvider, useForm } from "react-hook-form";
import TiptapContainer from "./tiptap-container";

export const FormService = () => {
  const methods = useForm<Service>({ resolver: zodResolver(serviceSchema) });
  const {
    register,
    control,
    setValue,
    handleSubmit,
    reset,
    formState: { errors },
  } = methods;

  const onSubmit = (data: Service) => {
    console.log(data);
  };

  return (
    <FormProvider {...methods}>
      <form onSubmit={handleSubmit((data) => console.log(data))}>
        <FormRow fullKey="service-id" label="ID">
          <input
            id="service-id"
            {...register("id")}
            type="text"
            className="border-2 border-gray-300 p-2 rounded w-full"
            placeholder="kategori-id-layanan"
          />
        </FormRow>
        <FormRow fullKey="name" label="Nama">
          <input
            id="name"
            {...register("name")}
            type="text"
            placeholder="Nama layanan"
            className="border-2 border-gray-300 p-2 rounded w-full"
          />
        </FormRow>
        <FormRow fullKey="categoryId" label="Kategori">
          <input
            id="categoryId"
            {...register("categoryId")}
            type="text"
            placeholder="legalisasi | suket"
            className="border-2 border-gray-300 p-2 rounded w-full"
          />
        </FormRow>
        <div className="px-4 py-2 w-full flex flex-col">
          <span className="font-semibold">Deskripsi</span>
          <TiptapContainer
            language={"id"}
            className="min-h-[calc(100vh-300px)]"
            editorClassName="min-h-[calc(100vh-350px)] "
          />
        </div>

        <div className="fixed bottom-0 w-full bg-gray-400 py-5 justify-center flex">
          <Button type="submit" className="w-1/3" variant={"default"}>
            Simpan
          </Button>
        </div>
      </form>
    </FormProvider>
  );
};

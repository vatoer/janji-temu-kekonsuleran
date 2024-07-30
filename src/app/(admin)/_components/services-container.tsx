"use client";
import { getServices } from "@/actions/services";
import { upsertTranslation } from "@/actions/services/crud";
import { Button } from "@/components/ui/button";
import { ServiceWithTranslation } from "@/data/services";
import { useTranslateTo } from "@/hooks/use-translate-to";
import { Languages, Pencil, Plus } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";
import InputTranslation from "./input-translation";

interface ServicesContainerProps {
  initialServiceWithTranslations: ServiceWithTranslation[];
  defaultTranslateTo: string;
}
const ServicesContainer = ({
  initialServiceWithTranslations,
  defaultTranslateTo,
}: ServicesContainerProps) => {
  const { language } = useTranslateTo();
  const [serviceWithTranslations, setServiceWithTranslations] = useState(
    initialServiceWithTranslations
  );
  const handleBlurName = async (event: React.FocusEvent<HTMLInputElement>) => {
    // console.log(event.target.value);
    // console.log(event.target.id);
    // console.log(language);
    const upsertService = await upsertTranslation({
      reference: event.target.id,
      translateTo: language,
      text: event.target.value,
    });
    console.log(upsertService);
  };

  //
  useEffect(() => {
    console.log("serviceWithTranslations", language);
    // fetch data
    console.log("fetch data", language);
    // always use data from action
    const dataFetching = async () => {
      const services = await getServices(language);
      if (services.success) {
        setServiceWithTranslations(services.data);
      } else {
        console.log("Failed to fetch data");
      }
    };
    dataFetching();
  }, [language]); // Empty dependency array means this effect runs once on mount

  return (
    <div>
      <div>
        <div className="flex flex-row">
          <div>
            <Link href="/setting/service/create">
              <Button variant={"outline"} className="rounded-none">
                <Plus size={14} className="mx-1" />
                <span>Tambah</span>
              </Button>
            </Link>
          </div>
          <div>
            <Button variant={"outline"} className="rounded-none">
              <Languages size={14} className="mx-1" />
              <span> Terjemahan</span>
            </Button>
          </div>
        </div>
      </div>
      <div className="flex flex-col mt-2 border-t-2 w-full">
        {serviceWithTranslations.map((service) => {
          console.log(service);
          return (
            <div key={service.id} className="">
              <div className="flex flex-row gap-2 border-2 border-t-0 py-4 px-2">
                <div className="flex flex-col w-[400px] gap-1">
                  <div>
                    <label
                      className="font-semibold"
                      htmlFor={`name-${service.id}`}
                    >
                      {service.name}
                    </label>
                  </div>
                </div>
                <div>
                  <Link href={`/setting/service/detail/${service.id}/id`}>
                    <Button variant={"ghost"} className="">
                      <Pencil size={16} />
                    </Button>
                  </Link>
                </div>

                <div className="flex flex-col w-full gap-1">
                  <InputTranslation
                    name="name"
                    value={service.tname}
                    reference={service.id}
                    onBlur={handleBlurName}
                    placeholder={service.name}
                  />
                </div>
                <div>
                  <Link
                    href={`/setting/service/detail/${service.id}/${language}`}
                  >
                    <Button variant={"ghost"} className="">
                      <Pencil size={16} />
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ServicesContainer;

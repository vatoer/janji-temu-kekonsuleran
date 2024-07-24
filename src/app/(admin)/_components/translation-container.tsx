"use client";
import { getServices } from "@/actions/services";
import { upsertTranslation } from "@/actions/services/crud";
import { ServiceWithTranslation } from "@/data/services";
import { useTranslateTo } from "@/hooks/use-translate-to";
import { useEffect, useState } from "react";
import InputTranslation from "./input-translation";
import TextareaTranslation from "./textarea-translation";

interface TranslationContainerProps {
  initialServiceWithTranslations: ServiceWithTranslation[];
  defaultTranslateTo: string;
}
const TranslationContainer = ({
  initialServiceWithTranslations,
  defaultTranslateTo,
}: TranslationContainerProps) => {
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

  const handleBlurDescription = async (
    event: React.FocusEvent<HTMLTextAreaElement>
  ) => {
    const upsertService = await upsertTranslation({
      reference: event.target.id,
      translateTo: language,
      text: event.target.value,
    });
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
    <div className="flex flex-col gap-4">
      {serviceWithTranslations.map((service) => {
        console.log(service);
        return (
          <div key={service.id}>
            <div className="flex flex-row gap-2">
              <div className="flex flex-col w-1/3 gap-1">
                <div>
                  <span className="font-semibold">name : </span>
                  <label htmlFor={`name-${service.id}`}>{service.name}</label>
                </div>
                <div>
                  <span className="font-semibold">description : </span>
                  <label htmlFor={`description-${service.id}`}>
                    {service.description}
                  </label>
                </div>
              </div>
              <div className="flex flex-col w-2/3 gap-1">
                <InputTranslation
                  name="name"
                  value={service.tname}
                  reference={service.id}
                  onBlur={handleBlurName}
                  placeholder={service.name}
                />
                <TextareaTranslation
                  name="description"
                  value={service.tdescription}
                  reference={service.id}
                  onBlur={handleBlurDescription}
                  placeholder={service.description}
                />
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default TranslationContainer;

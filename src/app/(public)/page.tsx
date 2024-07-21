import { FaPassport } from "react-icons/fa6";
import { HiDocumentText } from "react-icons/hi2";
import { PiSealCheck } from "react-icons/pi";
import { AccordionLayananDokumenLegalisasi } from "./_components/accordion-layanan-dokumen-legalisasi";
import { AccordionLayananPaspor } from "./_components/accordion-layanan-paspor";

export default function PublicPage() {
  return (
    <div className="flex flex-col p-2 gap-2">
      <div className="flex flex-col md:flex-row justify-between w-full gap-2">
        <div className="flex flex-col gap-4 border-2 md:w-1/2 p-4 border-gray-200">
          <div>
            <FaPassport className="w-full text-center h-16" />
            <h1 className="w-full text-center text-xl">Paspor</h1>
            <p className="w-full text-justify mt-4">
              Paspor Republik Indonesia yang selanjutnya disebut Paspor adalah
              dokumen yang dikeluarkan oleh Pemerintah Republik Indonesia kepada
              warga negara Indonesia untuk melakukan perjalanan antarnegara yang
              berlaku selama jangka waktu tertentu.
            </p>
            <a
              href="https://peraturan.bpk.go.id/Details/280232/permenkumham-no-18-tahun-2022"
              className="text-blue-500 text-xs"
            >
              Permenkumham no.18 tahun 2022
            </a>
            <AccordionLayananPaspor />
          </div>
        </div>

        <div className="flex flex-col gap-4 border-2 md:w-1/2 p-4 border-gray-200">
          <div>
            <div className="flex flex-row justify-center">
              <HiDocumentText className="w-16 h-16" />
              <PiSealCheck className="h-16 w-16" />
            </div>
            <h1 className="w-full text-center text-xl">
              Layanan Dokumen & Legalisasi
            </h1>
            <AccordionLayananDokumenLegalisasi />
          </div>
        </div>
      </div>
    </div>
  );
}

import { dbAppointment } from "@/lib/db-appointment";

async function main() {
  const category = await dbAppointment.category.createMany({
    data: [
      {
        id: "paspor",
        name: "Paspor",
      },
      {
        id: "suket",
        name: "Surat Keterangan",
      },
      {
        id: "legalisasi",
        name: "Legalisasi",
      },
    ],
  });

  const service = await dbAppointment.service.createMany({
    data: [
      {
        categoryId: "paspor",
        id: "paspor-dewasa",
        description: "Permohonan Paspor Dewasa",
        name: "Paspor Dewasa",
        displayOrder: 10,
      },
      {
        categoryId: "paspor",
        id: "paspor-anak-wn-ganda",
        description: "Permohonan Paspor Anak Berkewarganegaraan Ganda",
        name: "Paspor Anak Berkewarganegaraan Ganda",
        displayOrder: 20,
      },
      {
        categoryId: "paspor",
        id: "paspor-anak",
        description: "Permohonan Paspor Anak WNI",
        name: "Paspor Anak WNI",
        displayOrder: 30,
      },
      {
        categoryId: "legalisasi",
        id: "apostille-akte-kelahiran",
        description:
          "Legalisasi-Apostille Akte Kelahiran/Kutipan Akte Kelahiran/Surat Keterangan Lahir/Surat Kenal Lahir/Akte Pernikahan dari Indonesia",
        name: "Legalisasi-Apostille Akte Kelahiran",
        displayOrder: 10,
      },
      {
        categoryId: "suket",
        id: "certificate-de-coutume",
        description: "Certificat de Coutume",
        name: "Certificat de Coutume",
        displayOrder: 20,
      },
      {
        categoryId: "suket",
        id: "suket-kawin",
        description: "Surat Keterangan Pencatatatan Perkawinan",
        name: "Surat Keterangan Pencatatatan Perkawinan",
        displayOrder: 30,
      },
      {
        categoryId: "suket",
        id: "suket-cerai",
        description: "Surat Keterangan Pencatatan Perceraian",
        name: "Surat Keterangan Pencatatan Perceraian",
        displayOrder: 40,
      },
      {
        categoryId: "suket",
        id: "suket-kematian-bawa-jenazah",
        description:
          "Surat Keterangan Kematian untuk Jenazah yang akan dibawa ke Indonesia",
        name: "Surat Keterangan Kematian untuk Jenazah yang akan dibawa ke Indonesia",
        displayOrder: 50,
      },
      {
        categoryId: "suket",
        id: "suket-kematian",
        description:
          "Surat Keterangan Kematian untuk Jenazah yang akan dibawa ke Indonesia",
        name: "Surat Keterangan Kematian untuk Jenazah yang akan dibawa ke Indonesia",
        displayOrder: 60,
      },
      {
        categoryId: "legalisasi",
        id: "legalisasi-surat-kuasa",
        description: "Legalisasi Surat Kuasa (WNI ke WNI)",
        name: "Legalisasi Surat Kuasa (WNI ke WNI)",
        displayOrder: 70,
      },
      {
        categoryId: "suket",
        id: "suket-membawa-barang-pindahan",
        description: "Surat Keterangan Membawa Barang Pindahan",
        name: "Surat Keterangan Membawa Barang Pindahan",
        displayOrder: 80,
      },
      {
        categoryId: "suket",
        id: "suket-membawa-abu-jenazah",
        description: "Surat Keterangan untuk membawa Abu Jenazah",
        name: "Surat Keterangan untuk membawa Abu Jenazah",
        displayOrder: 90,
      },
      {
        categoryId: "suket",
        id: "suket-penjelasan-nama",
        description: "Surat Keterangan Penjelasan Nama",
        name: "Surat Keterangan Penjelasan Nama",
        displayOrder: 100,
      },
      {
        categoryId: "legalisasi",
        id: "legalisasi-dokumen-setempat",
        description: "Legalisasi Dokumen Prancis",
        name: "Legalisasi Dokumen Prancis",
        displayOrder: 110,
      },
      {
        categoryId: "suket",
        id: "suket-lainnya",
        description: "Permohonan Lainnya",
        name: "Permohonan Lainnya",
        displayOrder: 120,
      },
    ],
  });
}

main();

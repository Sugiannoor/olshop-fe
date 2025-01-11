export function appendFormData(
  formData: FormData,
  data: any,
  parentKey: string | null = null
) {
  if (data && typeof data === "object" && !(data instanceof File)) {
    // Jika data adalah objek (bukan File), iterasi melalui key dan value
    Object.entries(data).forEach(([key, value]) => {
      const formKey = parentKey ? `${parentKey}[${key}]` : key;

      if (Array.isArray(value)) {
        // Jika value adalah array, iterasi melalui array dan tambahkan index
        value.forEach((item, index) => {
          appendFormData(formData, item, `${formKey}[${index}]`);
        });
      } else if (typeof value === "object" && !(value instanceof File)) {
        // Jika value adalah objek lain, rekursi ke dalamnya
        appendFormData(formData, value, formKey);
      } else {
        // Jika value adalah primitive atau File, langsung tambahkan ke formData
        formData.append(formKey, value instanceof File ? value : String(value));
      }
    });
  } else {
    formData.append(
      parentKey ?? "",
      data instanceof File ? data : String(data)
    );
  }
}

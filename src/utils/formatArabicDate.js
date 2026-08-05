  export default function formatArabicDate(dateString) {
    const date = new Date(dateString);
    return date.toLocaleDateString("ar-EG-u-nu-arab", {
      day: "numeric",
      month: "long",
      year: "numeric",
    });
  }
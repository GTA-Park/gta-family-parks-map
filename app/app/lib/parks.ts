export async function getParks() {
    const res = await fetch(
      "https://docs.google.com/spreadsheets/d/e/2PACX-1vT8r7g8akuIHzMkPKZnx9FsrRfjlkbIGJQai_X3m-OMUVskWYlFdO1LYbFWB7ocBGgQsUsgd8vBeuz2/pub?output=csv",
      { next: { revalidate: 3600 } }
    );
  
    const text = await res.text();
    const rows = text.split("\n").map((row) => row.split(","));
  
    const headers = rows[0].map((h) => h.trim());
  
    return rows.slice(1).map((row) => {
      const item: Record<string, string> = {};
      headers.forEach((header, index) => {
        item[header] = row[index]?.trim() || "";
      });
      return item;
    });
  }
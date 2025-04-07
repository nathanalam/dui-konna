import { Product } from "./types";

// The ID of the Google Spreadsheet
const SPREADSHEET_ID = "1MQ4AnjWUty_uyNj-Z2vlW3y3IwsLrb1xAuYIThgXC5M";

/**
 * Fetches products from the Google Spreadsheet using the public CSV export
 * @returns Promise<Product[]> Array of products
 */
export async function fetchProducts(): Promise<Product[]> {
  try {
    // Use the public CSV export URL
    const csvUrl = `https://docs.google.com/spreadsheets/d/${SPREADSHEET_ID}/export?format=csv`;

    // Fetch the CSV data
    const response = await fetch(csvUrl);

    if (!response.ok) {
      throw new Error("Failed to fetch spreadsheet data");
    }

    const csvText = await response.text();

    // Parse CSV data
    const rows = parseCSV(csvText);

    // The first row contains headers
    const headers = rows[0];

    // Map the rows to Product objects (skip the header row)
    const products: Product[] = rows.slice(1).map((row, index) => {
      // Create a map of column name to value
      const rowData: Record<string, string> = {};
      headers.forEach((header, i) => {
        rowData[header.trim().toLowerCase()] = row[i] || "";
      });

      console.log(rowData);

      return {
        name: rowData["name"] || "",
        price: Number(rowData["price"]) || 0,
        image: rowData["image url"] || "", // This will now be a comma-separated list
        description: rowData["description"] || "",
        link: `https://docs.google.com/spreadsheets/d/${SPREADSHEET_ID}/edit?gid=0#gid=0&range=${
          index + 2
        }:${index + 2}`,
      };
    });

    return products;
  } catch (error) {
    console.error("Error fetching products:", error);
    return [];
  }
}

/**
 * Parses CSV text into a 2D array
 * With special handling for quoted fields that might contain commas
 * @param csvText The CSV text to parse
 * @returns string[][] 2D array of CSV values
 */
function parseCSV(csvText: string): string[][] {
  const lines = csvText.split("\n");

  return lines
    .map((line) => {
      // Handle quoted fields that might contain commas
      const result: string[] = [];
      let inQuotes = false;
      let currentField = "";

      for (let i = 0; i < line.length; i++) {
        const char = line[i];

        if (char === '"') {
          // If we see a double quote inside quotes, treat it as an escaped quote
          if (inQuotes && i + 1 < line.length && line[i + 1] === '"') {
            currentField += '"';
            i++; // Skip the next quote
          } else {
            inQuotes = !inQuotes;
          }
        } else if (char === "," && !inQuotes) {
          result.push(currentField);
          currentField = "";
        } else {
          currentField += char;
        }
      }

      // Don't forget the last field
      result.push(currentField);

      return result;
    })
    .filter((line) => line.length > 1); // Filter out empty lines
}

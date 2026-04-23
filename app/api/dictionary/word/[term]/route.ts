import { NextResponse } from "next/server";

interface DictionaryLookupResponse {
  exists: boolean;
  suggestions: string[];
}

const API_BASE = "https://api.dicionario-aberto.net";

function uniqueSuggestions(values: unknown): string[] {
  if (!Array.isArray(values)) {
    return [];
  }

  const normalized = values
    .filter((value): value is string => typeof value === "string")
    .map((value) => value.trim().toLowerCase())
    .filter(Boolean);

  return [...new Set(normalized)].slice(0, 5);
}

async function fetchJson(path: string): Promise<unknown> {
  const response = await fetch(`${API_BASE}${path}`, {
    next: { revalidate: 60 * 60 * 12 },
  });

  if (!response.ok) {
    throw new Error(`Dictionary API request failed with status ${response.status}`);
  }

  return response.json();
}

export async function GET(
  _request: Request,
  context: { params: Promise<{ term: string }> },
) {
  try {
    const { term } = await context.params;
    const normalized = term.trim().toLowerCase();

    if (!normalized || !/^[a-z]+$/.test(normalized)) {
      return NextResponse.json<DictionaryLookupResponse>({
        exists: false,
        suggestions: [],
      });
    }

    const wordData = await fetchJson(`/word/${encodeURIComponent(normalized)}`);
    const exists = Array.isArray(wordData) && wordData.length > 0;

    if (exists) {
      return NextResponse.json<DictionaryLookupResponse>({
        exists: true,
        suggestions: [],
      });
    }

    const nearData = await fetchJson(`/near/${encodeURIComponent(normalized)}`);
    return NextResponse.json<DictionaryLookupResponse>({
      exists: false,
      suggestions: uniqueSuggestions(nearData),
    });
  } catch {
    return NextResponse.json(
      { error: "Dictionary lookup failed." },
      { status: 502 },
    );
  }
}

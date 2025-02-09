import { IFunction } from "./type";
import { IRequest } from "../chat";

const BASE_URL = "https://api.search1api.com/search";

export const searchWeb = async (
  query: string,
  apiKey: string,
  maxResults: number = 10,
  crawlResults: number = 0
): Promise<string> => {
  const url = BASE_URL;
  const options = {
    method: "POST",
    headers: {
      "Authorization": `Bearer ${apiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      query: query,
      search_service: "google",
      image: false,
      max_results: maxResults,
      crawl_results: crawlResults,
    }),
  };
  try {
    const response = await fetch(url, options);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();
    return JSON.stringify(data);
  } catch (error) {
    console.error("Failed to fetch search results:", error);
    return JSON.stringify({ error: "Failed to fetch search results" });
  }
};

export const search: IFunction = {
  type: "function",
  function: {
    name: "web_search",
    description: "Search the web for a given query",
    parameters: {
      type: "object",
      properties: {
        query: {
          type: "string",
          description: "The search query",
        },
        max_results: {
          type: "number",
          description: "Maximum number of search results to return",
          default: 10
        },
        crawl_results: {
          type: "number",
          description: "Number of web pages to crawl for detailed content",
          default: 0
        }
      },
      required: ["query"]
    },
  },
  async execute(args: any, req: IRequest) {
    const search1apiKey = req.request.config?.search1api_key || req.env.SEARCH1API_KEY;
    return await searchWeb(
      args.query, 
      search1apiKey,
      args.max_results,
      args.crawl_results
    );
  },
};
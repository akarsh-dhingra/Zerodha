
import { McpServer, StdioServerTransport } from "@modelcontextprotocol/server";
import * as z from 'zod/v4';

const server = new McpServer({ name: "greeting-server", version: "1.0.0" });

server.registerTool(
  "add",
  {
    title: "Addition Tool",
    description: "Adds two numbers",
    inputSchema: z.object({
      a: z.number(),
      b: z.number(),
    }),
  },
  async ({ a, b }) => {
    return {
      content: [
        {
          type: "text",
          text: String(a + b),
        },
      ],
    };
  }
);

async function main(){
    const transport = new StdioServerTransport();
    await server.connect(transport);
        
}

main();
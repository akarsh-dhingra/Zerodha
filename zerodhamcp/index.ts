import { McpServer } from "@modelcontextprotocol/server";
import { StdioServerTransport } from '@modelcontextprotocol/server';
import {z} from 'zod/v4'
import { placeOrder } from "./trade";

const server =new McpServer({name:"zerodha-mcp",version:"1.0.0"});


server.registerTool(
  "calculate_bmi",
  {
    title:"Hello World McP",
    description:"Saying Simplet Hellow World",
    inputSchema:z.object({
      weightKg:z.number(),
      heightM:z.number()
    }),
    outputSchema:z.object({bmi:z.number()})
  },
  async ({weightKg,heightM}:{
    weightKg:number;
    heightM:number
  }) => {
      const output={ bmi: weightKg / (heightM * heightM) };
      return {
        content:[{type:'text',text:JSON.stringify(output)}],
        structuredContent:output
      };
  });


server.registerTool(
  "add",
  {
    title:"Add Tool",
    inputSchema:z.object({
      a:z.number(),
      b:z.number()
    }),
    outputSchema:z.object({ans:z.number()})
  },
  async({a,b}:{a:number,b:number})=>{
    const output={ans:a+b};
    return {
      content:[{type:'text',text:JSON.stringify(output)}],
      structuredContent:output
    }
  }
)

// These two lines of code will change drastically if 
// you have this sever of yours located somewhere else on the internet 
// This code will execute when both claude (llms)_ and your mcp server aere on the sma elocalk mackine 
// I.e. start receiving messages on stdin and sending messages on stdout 

server.registerTool("Buy_Stock",
  {
    title:"bUY A STOKCK Tool",
    inputSchema:z.object({
      stock:z.string(),

      qty:z.number()
    }),
    outputSchema:z.object({ans:z.string()}) 
},
  async({stock,qty}:{stock: string ,qty :number}) => {
    placeOrder(stock,qty,"BUY");
    return {
      content:[{type:"text",text:"Stock khareed liya"}]
    }
  }
)
// MCP trade: Unexpected token 'h', "https://ki"... is not valid JSON

const transport=new StdioServerTransport();
await server.connect(transport);



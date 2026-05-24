# Zerodha MCP Server

An MCP (Model Context Protocol) server built on top of Zerodha that enables LLMs like Claude to directly interact with trading functionalities such as placing orders, fetching stock prices, and executing trading workflows using natural language.

---

# What is MCP?

MCP (Model Context Protocol) is a protocol introduced by Anthropic that allows Large Language Models (LLMs) like Claude to communicate with external applications, APIs, tools, and services.

In simple terms:

> MCP acts as a bridge between an LLM and a traditional backend system.

Using MCP, an LLM can interact with:
- GitHub
- Google Drive
- Slack
- Kubernetes
- Databases
- Trading platforms like Zerodha

---

# Project Goal

The goal of this project is to build an MCP server on top of Zerodha so that an LLM can directly execute trading-related actions.

Example prompts:
- “Buy 20 stocks of Tata”
- “Sell my Infosys holdings”
- “Place an order on the best performing stock in the last 20 minutes”
- “Fetch the current price of Reliance”

The LLM understands the instruction in natural language and communicates with the MCP server, which eventually interacts with Zerodha APIs.

---

# Architecture Overview

![Architecture Diagram](./assets/architecture.png)

---

# How It Works

Traditional applications expose REST APIs over HTTP.

For example, Zerodha internally exposes APIs like:

```http
POST /trade/buy
POST /trade/sell
GET  /price/{stock}
```

However, LLMs cannot directly understand or safely interact with these APIs on their own.

This is where MCP comes in.

The MCP server:
1. Exposes backend functionality to the LLM
2. Defines tools/resources/actions that the LLM can use
3. Converts natural language instructions into executable backend operations
4. Connects Claude (or any MCP-compatible client) to Zerodha APIs

So the actual flow becomes:

```text
Claude / Cursor / Claude Code
            ↓
        MCP Server
            ↓
     Zerodha APIs
            ↓
       Trade Execution
```

---

# What Does “Implementing an MCP Server” Mean?

Implementing an MCP server simply means:

> Exposing backend functionality to an LLM in a structured and controlled way.

If your backend can:
- Place orders
- Fetch live prices
- Scale Kubernetes clusters
- Read databases
- Trigger workflows

then an MCP server allows an LLM to interact with those capabilities using natural language.

---

# Example Use Cases of MCP

## Trading MCP
- Buy/Sell stocks
- Portfolio management
- Real-time price tracking
- AI-assisted trade execution

## Kubernetes MCP
A Kubernetes MCP server can allow an LLM to:
- Scale deployments
- Increase replicas
- Restart services
- Monitor infrastructure

Example:
> “Scale my deployment from 3 replicas to 6”

The MCP server translates that instruction into Kubernetes operations.

---

# Connecting Zerodha with Our Backend

## Step 1 — Create a Zerodha App

Create an application at:

https://developers.kite.trade

After creating the app, you will receive:
- API Key
- API Secret

---

## Step 2 — Generate Access Token

Using the API Key and API Secret, generate an `accessToken`.

This access token is used to authenticate requests to Zerodha APIs.

---

## Step 3 — Execute Trades Programmatically

Using Zerodha SDKs and APIs, we can:
- Place buy/sell orders
- Fetch stock prices
- Access market feeds
- Read holdings and positions

At this point, the backend can already trade programmatically.

---

# Exposing Zerodha Functionality to an LLM

Now that the trading functionality exists, the next step is to expose it to an LLM through MCP.

The MCP server will:
- Register trading tools
- Define resources/actions
- Connect Claude/Cursor to Zerodha
- Allow natural language trading workflows

Example:

```text
User:
"Buy 20 shares of Tata"

LLM:
Calls the MCP tool

MCP Server:
Executes Zerodha trade API

Result:
Order placed successfully
```

---

# Tech Stack (Planned)

- TypeScript
- Node.js
- MCP TypeScript SDK
- Zerodha Kite Connect API
- Claude / Cursor / Claude Code
- WebSockets (for live market feeds)

---

# Current Status

- [x] Zerodha App Created
- [x] API Authentication Setup
- [x] Access Token Generation
- [ ] MCP Server Setup
- [ ] Trading Tools Exposure
- [ ] Live Market Feed Integration
- [ ] Claude/Cursor Integration
- [ ] Risk Management Layer
- [ ] AI-Assisted Trading Flows

---

# Vision

This project explores the future of:
- AI-assisted trading
- LLM-native financial tooling
- Natural language execution systems
- AI + Web2 interoperability through MCP

The long-term goal is to build a secure and extensible AI trading infrastructure where LLMs can safely interact with real-world trading systems.

---

# Disclaimer

This project is for educational and experimental purposes only.

Trading in financial markets involves significant risk.  
Always implement:
- Proper authentication
- Risk controls
- Position limits
- Confirmation layers
- Manual approval flows

before using any automated trading system with real funds.

---

import { KiteConnect } from "kiteconnect";

const apiKey = "2ljj9z84rwtemwek";
// const apiSecret = "xljcz8xv9mcv6db4v2tpj4syx30it7ej";
// const requestToken = "xAc3yd0XbAcodJyP44nSeDqt03VCXGk5";  
 // This is going to come from zerodha whenever our tradegpt sends a request to zerodha 
 let access_token = "AopDyZZ80KQWUjNoWcEoAbRo5mcLSLFF";
// I can't reuse this requestToken to generate a new access_token which means to generate a new session because it is one time use only.
const kc = new KiteConnect({ api_key: apiKey });

console.log(kc.getLoginURL());

export async function placeOrder(tradingsymbol:string,quantity:number,type:"BUY"|"SELL") {
  try {
    // await generateSession();
    kc.setAccessToken(access_token);
    await kc.placeOrder("regular",{exchange:"NSE",
        tradingsymbol,
        transaction_type:type,
        quantity,
        product:"MIS",
        order_type:"MARKET"});
  } catch (err) {
    console.error(err);
  }
}

// async function generateSession() {
//   try {
//     // const response = await kc.generateSession(requestToken, apiSecret);
//     // // This access_token is valid for long time 
//     // // So probably we can store this access_token in a database and use it to make API calls to zerodha
//     // console.log("Access token generated:", response.access_token);
//     // access_token = response.access_token;
    
//     await getProfile();
//     // console.log("Session generated:", response);
//   } catch (err) {
//     console.error("Error generating session:", err);
//   }
// }

// async function getProfile() {
//   try {
//     const profile = await kc.placeOrder("regular",{exchange:"NSE",
//         tradingsymbol:"HDFCBANK",
//         transaction_type:"BUY",
//         quantity:1,
//         product:"MIS",
//         order_type:"MARKET"});
//     console.log("Profile:", profile);
//   } catch (err) {
//     console.error("Error getting profile:", err);
//   }
// }
// Initialize the API calls

//  MCP server-> 
 
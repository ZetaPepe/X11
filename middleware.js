import { paymentMiddleware } from 'x402-next';
import { facilitator } from "@coinbase/x402"; // For mainnet

// Configure the payment middleware
export const middleware = paymentMiddleware(
  "0x8b12a3c1AC1D1356cB24A642daFCA8f0f60cDeF2", // your receiving wallet address
  {  // Route configurations for protected endpoints
    '/protected': {
      price: '$0.01',
      network: "base-sepolia", // for mainnet, see Running on Mainnet section
      config: {
        description: 'Access to protected content',
        // Optional: Add schemas for better discovery
        inputSchema: {
          type: "object",
          properties: {}
        },
        outputSchema: {
          type: "object",
          properties: {
            content: { type: "string" }
          }
        }
      }
    },
  },
  {
    url: "https://facilitator.mogami.tech", // for testnet
  }
);

// Configure which paths the middleware should run on
export const config = {
  matcher: [
    '/protected/:path*',
  ]
};

import { paymentMiddleware } from 'x402-next';
import { facilitator } from '@coinbase/x402';

export const middleware = paymentMiddleware(
  "0xeE206B1BE6960c863fDEd818752AD7B2e463e91e", // 接收钱包地址
  {
    '/protected': {
      price: '$0.01',
      network: "base",      // 主网网络标识
      config: {
        description: 'Access to protected content',
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
    }
  },
  facilitator  // 使用主网 facilitator
);

export const config = {
  matcher: [
    '/protected/:path*',
  ]
};

import Stripe from "stripe";
import { version } from "../../../package.json";

export const stripe = new Stripe(
    process.env.STRIPE_API_KEY || "", // Chave de API vinda do ambiente
    {
        apiVersion: "2024-10-28.acacia",
        appInfo: {
        name: "My Next.js App",
        version: version, // A versão do app é importada do package.json
        },
    }
);

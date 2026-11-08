import { defineConfig } from "cf/config";
import * as entrypoint from "./src/index.ts" with { type: "cf-worker" };

export default defineConfig({
	worker: {
		name: "ipsofacto-proof-api",
		compatibilityDate: "2026-11-08",
		entrypoint,
		observability: {
			enabled: true,
			logs: {
				enabled: true,
				headSamplingRate: 1,
			},
			traces: {
				enabled: true,
				headSamplingRate: 0.01,
			},
		},
	},
});

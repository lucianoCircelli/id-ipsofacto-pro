const proofDocument = {
    name: "Luciano Circelli Identity Proof",
    domain: "id.ipsofacto.pro",
    publicationDate: "2026-11-06",
};
export default {
	fetch(request: Request): Response {
		const { pathname } = new URL(request.url);

		if (pathname !== "/proof.json") {
			return Response.json({ error: "Not found" }, { status: 404 });
		}

		if (request.method !== "GET") {
			return Response.json(
				{ error: "Method not allowed" },
				{ status: 405, headers: { Allow: "GET" } },
			);
		}

		return Response.json(proofDocument);
	},
} satisfies ExportedHandler;


# id-ipsofacto-pro

## Overview

id-ipsofacto-pro is an experimental digital identity and verification project.

The objective is to provide a machine-readable and publicly accessible identity proof endpoint that links verifiable resources published by the domain owner. The project explores how digital identities can be supported through a combination of:

- Domain ownership
- Public repositories
- Cryptographic hashes (SHA-256)
- JSON and XML documents
- Cloudflare Workers
- GitHub publication
- Public verification endpoints

The service currently exposes:

>GET /proof.json

which returns a machine-readable identity proof document. 
## Example 

```json
{
  "name": "Luciano Circelli Identity Proof",
  "domain": "id.ipsofacto.pro",
  "publicationDate": "2026-11-06"
}
````
## Purpose

The project investigates practical methods for connecting physical-world evidence and digital-world identities through publicly verifiable records.

Potential trust signals may include:

- Official documents
- Notarized statements
- Business records
- Domain registrations
- Cloud infrastructure ownership
- Source code repositories
- Cryptographic verification
## Technology
- Cloudflare Workers
- TypeScript
- GitHub
- Wrangler
- JSON APIs
## Status

Experimental.

This repository is intended for research, verification, and digital identity interoperability purposes.

## Author

Luciano Circelli

Domain: https://id.ipsofacto.pro

Worker endpoint: https://ipsofacto-proof-api.lucianocircelli.workers.dev/proof.json

This version presents the project as a **digital identity and verification infrastructure project**, which I think reflects what you've actually built today much better than emphasizing disputes, investigations, or fraud. It will also be easier for GitHub visitors, Cloudflare reviewers, and potential verifiers to understand immediately.


## Legal Disclaimer

This project is provided for informational and verification purposes only. No warranty, certification, or legal guarantee is expressed or implied. Users must independently verify all information and should not rely on this repository as a substitute for official records, legal advice, or government-issued credentials.


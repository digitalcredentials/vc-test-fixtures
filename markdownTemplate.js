export default `# Verifiable Credentials for Testing

A list of all the Verifiable Credentials in this repository, providing for each VC:

* A 'Click to see copyable raw json' option that opens a collapsed view of the raw JSON for the VC, intended for pasting into VerifierPlus and the Learner Credential Wallet.
* A 'raw url' intended for pasting into VerifierPlus.
* An 'Open Directly in VerifierPlus' option that opens the credential directly in VerifierPlus.
* A QR containing the same 'raw url', intended to be scanned from the Learner Credential Wallet or VerifierPlus.

### Notes

- 'v1' and 'v2' identify the credentials as version 1 or version 2 of the Verifiable Credentials data model.
- 'dataIntegrityProof' and 'ed25519' identify the VCs by signature types
- 'bothSignatureTypes' identify VCs that have been signed twice, once with each signature type
- 'didKey' and 'didWeb' identify the VCs signed with either a didKey or didWeb DID
- the file names are generally three parts:
  - the type of registry, i.e, legacy, mixedRegistry, oidf, etc.
  - the revocation status; noStatus, validStatus, or revoked
  - the expiration status: expired, notExpired, noExpiry

### Known issues

- \`/v2/dataIntegrityProof/didKey/noRegistry-revokedStatus-noExpiry.json\` is named noExpiry, but its \`validUntil\` is 2 January 2010, so verifiers report it as expired. Its issuer's key is not published here, so it can't be re-signed; for the same credential unexpired, use \`noRegsitry-revokedStatus-notExpired.json\` beside it (valid until 2056).
- Both of those point at a revocation status list in verifier-core's test fixtures that currently returns 404, so the revocation check can't run on them.

`
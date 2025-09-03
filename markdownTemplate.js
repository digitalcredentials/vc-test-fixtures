export default `# Verifiable Credentials for Testing

A list of all the Verifiable Credentials in this repository, providing for each VC:

* A 'Click to see copyable raw json' option that opens a collapsed view of the raw JSON for the VC, intended for pasting into VerifierPlus and the Learner Credential Wallet.
* A 'raw url' intended for pasting into VerifierPlus.
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
  
`
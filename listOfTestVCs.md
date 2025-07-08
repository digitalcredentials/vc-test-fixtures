# Verifiable Credentials for Testing

A list of all the Verifiable Credentials in this repository, with a link to the raw github url for each credential and also a QR pointing at the raw github url.

The raw url is intended for testing in VerifierPlus and the QR for testing in the Learner Credential Wallet.

### Notes

- 'v1' and 'v2' identify the credentials as version 1 or version 2 of the Verifiable Credentials data model.
- 'dataIntegrityProof' and 'ed25519' identify the VCs by signature types
- 'bothSignatureTypes' identify VCs that have been signed twice, once with each signature type
- 'didKey' and 'didWeb' identify the VCs signed with either a didKey or didWeb DID
- the file names are generally three parts:
  - the type of registry, i.e, legacy, mixedRegistry, oidf, etc.
  - the revocation status; noStatus, validStatus, or revoked
  - the expiration status: expired, notExpired, noExpiry
    
## v1/ed25519/didKey

### fourRegistry-noStatus-noExpiry.json

[rawURL](https://github.com/digitalcredentials/vc-test-fixtures/raw/refs/heads/main/verifiableCredentials/v1/dataIntegrityProof/didKey/mixedRegistry-validStatus-noExpiry.json`)

![QR](verifiableCredentials/v1/dataIntegrityProof/didKey/mixedRegistry-validStatus-noExpiry.png)

# Verifiable Credentials for Testing

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
  
### /v1/bothSignatureTypes/didKey/fourRegistry-noStatus-noExpiry.json

<details>

<summary>Click to see copyable raw json</summary>

```json
   {
    "@context": [
        "https://www.w3.org/2018/credentials/v1",
        "https://purl.imsglobal.org/spec/ob/v3p0/context-3.0.3.json",
        "https://w3id.org/security/data-integrity/v2",
        "https://w3id.org/security/suites/ed25519-2020/v1"
    ],
    "id": "urn:uuid:2fe53dc9-b2ec-4939-9b2c-0d00f6663b6c",
    "issuanceDate": "2025-01-09T15:06:31Z",
    "type": [
        "VerifiableCredential",
        "OpenBadgeCredential"
    ],
    "name": "DCC Test Credential",
    "issuer": {
        "type": [
            "Profile"
        ],
        "id": "did:key:z6MkuL7x2mTEoBmUuuaQ2hvEUd2YsEtmsHeX9JzqJZ8VYaVH",
        "name": "Digital Credentials Consortium Test Issuer",
        "url": "https://dcconsortium.org",
        "image": "https://user-images.githubusercontent.com/752326/230469660-8f80d264-eccf-4edd-8e50-ea634d407778.png"
    },
    "credentialSubject": {
        "type": [
            "AchievementSubject"
        ],
        "achievement": {
            "id": "urn:uuid:bd6d9316-f7ae-4073-a1e5-2f7f5bd22922",
            "type": [
                "Achievement"
            ],
            "achievementType": "Diploma",
            "name": "Badge",
            "description": "This is a sample credential issued by the Digital Credentials Consortium to demonstrate the functionality of Verifiable Credentials for wallets and verifiers.",
            "criteria": {
                "type": "Criteria",
                "narrative": "This credential was issued to a student that demonstrated proficiency in the Python programming language that occurred from **February 17, 2023** to **June 12, 2023**."
            },
            "image": {
                "id": "https://user-images.githubusercontent.com/752326/214947713-15826a3a-b5ac-4fba-8d4a-884b60cb7157.png",
                "type": "Image"
            }
        },
        "name": "Jane Doe"
    },
    "proof": [
        {
            "type": "DataIntegrityProof",
            "created": "2025-05-09T19:02:33Z",
            "verificationMethod": "did:key:z6MkuL7x2mTEoBmUuuaQ2hvEUd2YsEtmsHeX9JzqJZ8VYaVH#z6MkuL7x2mTEoBmUuuaQ2hvEUd2YsEtmsHeX9JzqJZ8VYaVH",
            "cryptosuite": "eddsa-rdfc-2022",
            "proofPurpose": "assertionMethod",
            "proofValue": "z2YEmAhbPqipyhJatMCWibQqEmoE9ViDm6HUU64pub8jmMiyL9VmNL7SDVUZXoBAa6aksG6iLmF7yt14tQXU4VJ6H"
        },
        {
            "type": "Ed25519Signature2020",
            "created": "2025-05-09T19:02:33Z",
            "verificationMethod": "did:key:z6MkuL7x2mTEoBmUuuaQ2hvEUd2YsEtmsHeX9JzqJZ8VYaVH#z6MkuL7x2mTEoBmUuuaQ2hvEUd2YsEtmsHeX9JzqJZ8VYaVH",
            "proofPurpose": "assertionMethod",
            "proofValue": "z22ELGnLk8f1KKH9WA7mkw3X65iEH6d6F413u1DStC7Vc4neZsHTWmiRti54bKz6HRXzqnaRBfApPZctQn7c3Ht2U"
        }
    ]
}
```

</details>

[rawURL](https://digitalcredentials.github.io/vc-test-fixtures/verifiableCredentials/v1/bothSignatureTypes/didKey/fourRegistry-noStatus-noExpiry.json)

[Open Directly in VerifierPlus](https://verifierplus.org/#verify?vc=https://digitalcredentials.github.io/vc-test-fixtures/verifiableCredentials/v1/bothSignatureTypes/didKey/fourRegistry-noStatus-noExpiry.json)

![QR](verifiableCredentials/v1/bothSignatureTypes/didKey/fourRegistry-noStatus-noExpiry.png)

### /v1/bothSignatureTypes/didKey/legacy-noStatus-noExpiry-basicOBv3.json

<details>

<summary>Click to see copyable raw json</summary>

```json
   {
    "@context": [
        "https://www.w3.org/2018/credentials/v1",
        "https://purl.imsglobal.org/spec/ob/v3p0/context-3.0.3.json",
        "https://w3id.org/security/data-integrity/v2",
        "https://w3id.org/security/suites/ed25519-2020/v1"
    ],
    "issuanceDate": "2025-01-09T15:06:31Z",
    "id": "http://example.com/credentials/3527",
    "type": [
        "VerifiableCredential",
        "OpenBadgeCredential"
    ],
    "issuer": {
        "id": "did:key:z6MknNQD1WHLGGraFi6zcbGevuAgkVfdyCdtZnQTGWVVvR5Q",
        "type": [
            "Profile"
        ],
        "name": "Example Corp"
    },
    "name": "Teamwork Badge",
    "credentialSubject": {
        "id": "did:example:ebfeb1f712ebc6f1c276e12ec21",
        "type": [
            "AchievementSubject"
        ],
        "achievement": {
            "id": "https://example.com/achievements/21st-century-skills/teamwork",
            "type": [
                "Achievement"
            ],
            "criteria": {
                "narrative": "Team members are nominated for this badge by their peers and recognized upon review by Example Corp management."
            },
            "description": "This badge recognizes the development of the capacity to collaborate within a group environment.",
            "name": "Teamwork"
        }
    },
    "proof": [
        {
            "type": "DataIntegrityProof",
            "created": "2025-10-21T17:53:11Z",
            "verificationMethod": "did:key:z6MknNQD1WHLGGraFi6zcbGevuAgkVfdyCdtZnQTGWVVvR5Q#z6MknNQD1WHLGGraFi6zcbGevuAgkVfdyCdtZnQTGWVVvR5Q",
            "cryptosuite": "eddsa-rdfc-2022",
            "proofPurpose": "assertionMethod",
            "proofValue": "zMTMopSz2YQU3kHyiWzuewBiCkZohZdabbVP2rDRc55Q3L4Ua1zL7UUGAZna7Ni2SCixmADbivoFLRyVRLPaEJJx"
        },
        {
            "type": "Ed25519Signature2020",
            "created": "2025-10-21T17:53:11Z",
            "verificationMethod": "did:key:z6MknNQD1WHLGGraFi6zcbGevuAgkVfdyCdtZnQTGWVVvR5Q#z6MknNQD1WHLGGraFi6zcbGevuAgkVfdyCdtZnQTGWVVvR5Q",
            "proofPurpose": "assertionMethod",
            "proofValue": "z39ejdz18CfoVvFd3MGYnDQQAyJno9d744F3Nng7RihwUN7XKumKq1KuB92d5WRWXBLwoFcgr6hv9fcBpnQpnKs8g"
        }
    ]
}
```

</details>

[rawURL](https://digitalcredentials.github.io/vc-test-fixtures/verifiableCredentials/v1/bothSignatureTypes/didKey/legacy-noStatus-noExpiry-basicOBv3.json)

[Open Directly in VerifierPlus](https://verifierplus.org/#verify?vc=https://digitalcredentials.github.io/vc-test-fixtures/verifiableCredentials/v1/bothSignatureTypes/didKey/legacy-noStatus-noExpiry-basicOBv3.json)

![QR](verifiableCredentials/v1/bothSignatureTypes/didKey/legacy-noStatus-noExpiry-basicOBv3.png)

### /v1/bothSignatureTypes/didKey/legacy-noStatus-noExpiry.json

<details>

<summary>Click to see copyable raw json</summary>

```json
   {
    "@context": [
        "https://www.w3.org/2018/credentials/v1",
        "https://purl.imsglobal.org/spec/ob/v3p0/context-3.0.3.json",
        "https://w3id.org/security/data-integrity/v2",
        "https://w3id.org/security/suites/ed25519-2020/v1"
    ],
    "id": "urn:uuid:2fe53dc9-b2ec-4939-9b2c-0d00f6663b6c",
    "issuanceDate": "2025-01-09T15:06:31Z",
    "type": [
        "VerifiableCredential",
        "OpenBadgeCredential"
    ],
    "name": "DCC Test Credential",
    "issuer": {
        "type": [
            "Profile"
        ],
        "id": "did:key:z6MknNQD1WHLGGraFi6zcbGevuAgkVfdyCdtZnQTGWVVvR5Q",
        "name": "Digital Credentials Consortium Test Issuer",
        "url": "https://dcconsortium.org",
        "image": "https://user-images.githubusercontent.com/752326/230469660-8f80d264-eccf-4edd-8e50-ea634d407778.png"
    },
    "credentialSubject": {
        "type": [
            "AchievementSubject"
        ],
        "achievement": {
            "id": "urn:uuid:bd6d9316-f7ae-4073-a1e5-2f7f5bd22922",
            "type": [
                "Achievement"
            ],
            "achievementType": "Diploma",
            "name": "Badge",
            "description": "This is a sample credential issued by the Digital Credentials Consortium to demonstrate the functionality of Verifiable Credentials for wallets and verifiers.",
            "criteria": {
                "type": "Criteria",
                "narrative": "This credential was issued to a student that demonstrated proficiency in the Python programming language that occurred from **February 17, 2023** to **June 12, 2023**."
            },
            "image": {
                "id": "https://user-images.githubusercontent.com/752326/214947713-15826a3a-b5ac-4fba-8d4a-884b60cb7157.png",
                "type": "Image"
            }
        },
        "name": "Jane Doe"
    },
    "proof": [
        {
            "type": "DataIntegrityProof",
            "created": "2025-05-07T19:18:49Z",
            "verificationMethod": "did:key:z6MknNQD1WHLGGraFi6zcbGevuAgkVfdyCdtZnQTGWVVvR5Q#z6MknNQD1WHLGGraFi6zcbGevuAgkVfdyCdtZnQTGWVVvR5Q",
            "cryptosuite": "eddsa-rdfc-2022",
            "proofPurpose": "assertionMethod",
            "proofValue": "z78gSJVHoMFgpLWvB7N99dKuDYLT4XrpDxb6ooDi7VVzfV1A1DwPB9t6GNEHUDw6tHknqiNnZXgzKQCVnfmPu2Di"
        },
        {
            "type": "Ed25519Signature2020",
            "created": "2025-05-07T19:18:49Z",
            "verificationMethod": "did:key:z6MknNQD1WHLGGraFi6zcbGevuAgkVfdyCdtZnQTGWVVvR5Q#z6MknNQD1WHLGGraFi6zcbGevuAgkVfdyCdtZnQTGWVVvR5Q",
            "proofPurpose": "assertionMethod",
            "proofValue": "z2rm2roNN8zECdbq14St2D5H7G7ya9dcDD6q2wnwQpQLaNuQb9SHy5hZHt8ggFRTR6wsm4Sod8xunRu3ENTdSVMHd"
        }
    ]
}
```

</details>

[rawURL](https://digitalcredentials.github.io/vc-test-fixtures/verifiableCredentials/v1/bothSignatureTypes/didKey/legacy-noStatus-noExpiry.json)

[Open Directly in VerifierPlus](https://verifierplus.org/#verify?vc=https://digitalcredentials.github.io/vc-test-fixtures/verifiableCredentials/v1/bothSignatureTypes/didKey/legacy-noStatus-noExpiry.json)

![QR](verifiableCredentials/v1/bothSignatureTypes/didKey/legacy-noStatus-noExpiry.png)

### /v1/bothSignatureTypes/didKey/mixedRegistry-validStatus-noExpiry.json

<details>

<summary>Click to see copyable raw json</summary>

```json
   {
    "type": [
        "VerifiableCredential",
        "OpenBadgeCredential"
    ],
    "name": "Taylor Tuna - Mock Bachelor of Science Degree in Biology",
    "issuer": {
        "url": "https://web.mit.edu/",
        "type": "Profile",
        "name": "Massachusetts Institute of Technology",
        "image": {
            "id": "https://github.com/digitalcredentials/test-files/assets/206059/01eca9f5-a508-40ac-9dd5-c12d11308894",
            "type": "Image"
        },
        "id": "did:key:z6Mki7DqKQswPsjqMVhP4W3n2ABFb5wBegZC5erEVg5qcgEw"
    },
    "@context": [
        "https://www.w3.org/2018/credentials/v1",
        "https://purl.imsglobal.org/spec/ob/v3p0/context-3.0.1.json",
        "https://www.w3.org/ns/credentials/status/v1",
        "https://w3id.org/security/suites/ed25519-2020/v1",
        "https://w3id.org/security/data-integrity/v2"
    ],
    "credentialSubject": {
        "type": [
            "AchievementSubject"
        ],
        "name": "Taylor Tuna",
        "achievement": {
            "id": "urn:uuid:951b475e-b795-43bc-ba8f-a2d01efd2eb1",
            "type": [
                "Achievement"
            ],
            "name": "Mock Bachelor of Science in Biology",
            "criteria": {
                "type": "Criteria",
                "narrative": "In Recognition of proficiency in the general and the special studies and exercises prescribed by said institution for such mock degree given this day under the seal of the Institute at Cambridge in the Commonwealth of Massachusetts"
            },
            "description": "Massachusetts Institute of Technology Mock Bachelor of Science in Computer Science",
            "fieldOfStudy": "Biology",
            "achievementType": "BachelorDegree"
        }
    },
    "id": "urn:uuid:677fe54fcacf98774d482bcc",
    "credentialStatus": {
        "id": "https://digitalcredentials.github.io/vc-test-fixtures/statusLists/didkey-ed25519Signature2020/e5WK8CbZ1GjycuPombrj#7",
        "type": "BitstringStatusListEntry",
        "statusPurpose": "revocation",
        "statusListCredential": "https://digitalcredentials.github.io/vc-test-fixtures/statusLists/didkey-ed25519Signature2020/e5WK8CbZ1GjycuPombrj",
        "statusListIndex": "7"
    },
    "issuanceDate": "2025-01-09T15:06:31Z",
    "proof": [
        {
            "type": "Ed25519Signature2020",
            "created": "2025-05-09T16:39:10Z",
            "verificationMethod": "did:key:z6Mki7DqKQswPsjqMVhP4W3n2ABFb5wBegZC5erEVg5qcgEw#z6Mki7DqKQswPsjqMVhP4W3n2ABFb5wBegZC5erEVg5qcgEw",
            "proofPurpose": "assertionMethod",
            "proofValue": "z47LXaBubinrwnJPqp3FAmxRhSYav59AcPyuQj2st4Vi3RqeqZ9HKY8isUB6XDBQxfq2QDvc4zrrrZVzWy9XpHWSR"
        },
        {
            "type": "DataIntegrityProof",
            "created": "2025-05-09T16:39:10Z",
            "verificationMethod": "did:key:z6Mki7DqKQswPsjqMVhP4W3n2ABFb5wBegZC5erEVg5qcgEw#z6Mki7DqKQswPsjqMVhP4W3n2ABFb5wBegZC5erEVg5qcgEw",
            "cryptosuite": "eddsa-rdfc-2022",
            "proofPurpose": "assertionMethod",
            "proofValue": "z3XNWBeBAJcRTT2wAQoeUmtmHNj2XzpYdkPeYyq7fpyBzQGCLH3Yrv2cNPvbCY9P2oRnEEVDT3t7sjaFtNr5cJB3E"
        }
    ]
}
```

</details>

[rawURL](https://digitalcredentials.github.io/vc-test-fixtures/verifiableCredentials/v1/bothSignatureTypes/didKey/mixedRegistry-validStatus-noExpiry.json)

[Open Directly in VerifierPlus](https://verifierplus.org/#verify?vc=https://digitalcredentials.github.io/vc-test-fixtures/verifiableCredentials/v1/bothSignatureTypes/didKey/mixedRegistry-validStatus-noExpiry.json)

![QR](verifiableCredentials/v1/bothSignatureTypes/didKey/mixedRegistry-validStatus-noExpiry.png)

### /v1/bothSignatureTypes/didKey/noRegistry-noStatus-noExpiry.json

<details>

<summary>Click to see copyable raw json</summary>

```json
   {
    "@context": [
        "https://www.w3.org/2018/credentials/v1",
        "https://purl.imsglobal.org/spec/ob/v3p0/context-3.0.3.json",
        "https://w3id.org/security/data-integrity/v2",
        "https://w3id.org/security/suites/ed25519-2020/v1"
    ],
    "id": "urn:uuid:2fe53dc9-b2ec-4939-9b2c-0d00f6663b6c",
    "issuanceDate": "2025-01-09T15:06:31Z",
    "type": [
        "VerifiableCredential",
        "OpenBadgeCredential"
    ],
    "name": "DCC Test Credential",
    "issuer": {
        "type": [
            "Profile"
        ],
        "id": "did:key:z6MkqBcwQ7qnRBRpgtsJQviLFeYxExMUE2k9nwKkMTF3DdRZ",
        "name": "Digital Credentials Consortium Test Issuer",
        "url": "https://dcconsortium.org",
        "image": "https://user-images.githubusercontent.com/752326/230469660-8f80d264-eccf-4edd-8e50-ea634d407778.png"
    },
    "credentialSubject": {
        "type": [
            "AchievementSubject"
        ],
        "achievement": {
            "id": "urn:uuid:bd6d9316-f7ae-4073-a1e5-2f7f5bd22922",
            "type": [
                "Achievement"
            ],
            "achievementType": "Diploma",
            "name": "Badge",
            "description": "This is a sample credential issued by the Digital Credentials Consortium to demonstrate the functionality of Verifiable Credentials for wallets and verifiers.",
            "criteria": {
                "type": "Criteria",
                "narrative": "This credential was issued to a student that demonstrated proficiency in the Python programming language that occurred from **February 17, 2023** to **June 12, 2023**."
            },
            "image": {
                "id": "https://user-images.githubusercontent.com/752326/214947713-15826a3a-b5ac-4fba-8d4a-884b60cb7157.png",
                "type": "Image"
            }
        },
        "name": "Jane Doe"
    },
    "proof": [
        {
            "type": "DataIntegrityProof",
            "created": "2025-05-12T15:19:58Z",
            "verificationMethod": "did:key:z6MkqBcwQ7qnRBRpgtsJQviLFeYxExMUE2k9nwKkMTF3DdRZ#z6MkqBcwQ7qnRBRpgtsJQviLFeYxExMUE2k9nwKkMTF3DdRZ",
            "cryptosuite": "eddsa-rdfc-2022",
            "proofPurpose": "assertionMethod",
            "proofValue": "z3aFbi5iYu1j7qiuSNvw2CEHNCJYj3TSmZVgoi8FzTktAeBMEDPK1r8zEyD2bKZjkFCqCKDGwWqPbBZe49okPFbKu"
        },
        {
            "type": "Ed25519Signature2020",
            "created": "2025-05-12T15:19:58Z",
            "verificationMethod": "did:key:z6MkqBcwQ7qnRBRpgtsJQviLFeYxExMUE2k9nwKkMTF3DdRZ#z6MkqBcwQ7qnRBRpgtsJQviLFeYxExMUE2k9nwKkMTF3DdRZ",
            "proofPurpose": "assertionMethod",
            "proofValue": "z5N1SMXdQkc6jZqsMXjY1vULqiQ1ETg1QuTj8D4DZyv5qwfWjPZPzRohGiWTyk75vfp4H6uaHst7J2LuHacTuc5nD"
        }
    ]
}
```

</details>

[rawURL](https://digitalcredentials.github.io/vc-test-fixtures/verifiableCredentials/v1/bothSignatureTypes/didKey/noRegistry-noStatus-noExpiry.json)

[Open Directly in VerifierPlus](https://verifierplus.org/#verify?vc=https://digitalcredentials.github.io/vc-test-fixtures/verifiableCredentials/v1/bothSignatureTypes/didKey/noRegistry-noStatus-noExpiry.json)

![QR](verifiableCredentials/v1/bothSignatureTypes/didKey/noRegistry-noStatus-noExpiry.png)

### /v1/bothSignatureTypes/didKey/oidf-noStatus-expired.json

<details>

<summary>Click to see copyable raw json</summary>

```json
   {
    "@context": [
        "https://www.w3.org/2018/credentials/v1",
        "https://purl.imsglobal.org/spec/ob/v3p0/context-3.0.3.json",
        "https://w3id.org/security/data-integrity/v2",
        "https://w3id.org/security/suites/ed25519-2020/v1"
    ],
    "id": "urn:uuid:2fe53dc9-b2ec-4939-9b2c-0d00f6663b6c",
    "issuanceDate": "2025-01-09T15:06:31Z",
    "expirationDate": "2025-01-09T16:23:24Z",
    "type": [
        "VerifiableCredential",
        "OpenBadgeCredential"
    ],
    "name": "DCC Test Credential",
    "issuer": {
        "type": [
            "Profile"
        ],
        "id": "did:key:z6MkjoriXdbyWD25YXTed114F8hdJrLXQ567xxPHAUKxpKkS",
        "name": "Digital Credentials Consortium Test Issuer",
        "url": "https://dcconsortium.org",
        "image": "https://user-images.githubusercontent.com/752326/230469660-8f80d264-eccf-4edd-8e50-ea634d407778.png"
    },
    "credentialSubject": {
        "type": [
            "AchievementSubject"
        ],
        "achievement": {
            "id": "urn:uuid:bd6d9316-f7ae-4073-a1e5-2f7f5bd22922",
            "type": [
                "Achievement"
            ],
            "achievementType": "Diploma",
            "name": "Badge",
            "description": "This is a sample credential issued by the Digital Credentials Consortium to demonstrate the functionality of Verifiable Credentials for wallets and verifiers.",
            "criteria": {
                "type": "Criteria",
                "narrative": "This credential was issued to a student that demonstrated proficiency in the Python programming language that occurred from **February 17, 2023** to **June 12, 2023**."
            },
            "image": {
                "id": "https://user-images.githubusercontent.com/752326/214947713-15826a3a-b5ac-4fba-8d4a-884b60cb7157.png",
                "type": "Image"
            }
        },
        "name": "Jane Doe"
    },
    "proof": [
        {
            "type": "DataIntegrityProof",
            "created": "2025-05-12T14:11:00Z",
            "verificationMethod": "did:key:z6MkjoriXdbyWD25YXTed114F8hdJrLXQ567xxPHAUKxpKkS#z6MkjoriXdbyWD25YXTed114F8hdJrLXQ567xxPHAUKxpKkS",
            "cryptosuite": "eddsa-rdfc-2022",
            "proofPurpose": "assertionMethod",
            "proofValue": "z7sk3hGhQ3ZSQZMC9MHUv3575X2P3aPzrQ1MufJrMFHX6db9pK1YJPagY1zvhMT1gfQBvKdCeWthWpykccCmeBzM"
        },
        {
            "type": "Ed25519Signature2020",
            "created": "2025-05-12T14:11:00Z",
            "verificationMethod": "did:key:z6MkjoriXdbyWD25YXTed114F8hdJrLXQ567xxPHAUKxpKkS#z6MkjoriXdbyWD25YXTed114F8hdJrLXQ567xxPHAUKxpKkS",
            "proofPurpose": "assertionMethod",
            "proofValue": "z4hCrhyW9XCk73XiHSmo5t5RJ6NR7cXrDTbi2YLPk3gPKnojr6BkhoHajrUxaEyexmKpAA1jMwQV5wJrUBwEYMjGE"
        }
    ]
}
```

</details>

[rawURL](https://digitalcredentials.github.io/vc-test-fixtures/verifiableCredentials/v1/bothSignatureTypes/didKey/oidf-noStatus-expired.json)

[Open Directly in VerifierPlus](https://verifierplus.org/#verify?vc=https://digitalcredentials.github.io/vc-test-fixtures/verifiableCredentials/v1/bothSignatureTypes/didKey/oidf-noStatus-expired.json)

![QR](verifiableCredentials/v1/bothSignatureTypes/didKey/oidf-noStatus-expired.png)

### /v1/bothSignatureTypes/didKey/oidf-noStatus-noExpiry.json

<details>

<summary>Click to see copyable raw json</summary>

```json
   {
    "@context": [
        "https://www.w3.org/2018/credentials/v1",
        "https://purl.imsglobal.org/spec/ob/v3p0/context-3.0.3.json",
        "https://w3id.org/security/data-integrity/v2",
        "https://w3id.org/security/suites/ed25519-2020/v1"
    ],
    "id": "urn:uuid:2fe53dc9-b2ec-4939-9b2c-0d00f6663b6c",
    "issuanceDate": "2025-01-09T15:06:31Z",
    "type": [
        "VerifiableCredential",
        "OpenBadgeCredential"
    ],
    "name": "DCC Test Credential",
    "issuer": {
        "type": [
            "Profile"
        ],
        "id": "did:key:z6MkjoriXdbyWD25YXTed114F8hdJrLXQ567xxPHAUKxpKkS",
        "name": "Digital Credentials Consortium Test Issuer",
        "url": "https://dcconsortium.org",
        "image": "https://user-images.githubusercontent.com/752326/230469660-8f80d264-eccf-4edd-8e50-ea634d407778.png"
    },
    "credentialSubject": {
        "type": [
            "AchievementSubject"
        ],
        "achievement": {
            "id": "urn:uuid:bd6d9316-f7ae-4073-a1e5-2f7f5bd22922",
            "type": [
                "Achievement"
            ],
            "achievementType": "Diploma",
            "name": "Badge",
            "description": "This is a sample credential issued by the Digital Credentials Consortium to demonstrate the functionality of Verifiable Credentials for wallets and verifiers.",
            "criteria": {
                "type": "Criteria",
                "narrative": "This credential was issued to a student that demonstrated proficiency in the Python programming language that occurred from **February 17, 2023** to **June 12, 2023**."
            },
            "image": {
                "id": "https://user-images.githubusercontent.com/752326/214947713-15826a3a-b5ac-4fba-8d4a-884b60cb7157.png",
                "type": "Image"
            }
        },
        "name": "Jane Doe"
    },
    "proof": [
        {
            "type": "DataIntegrityProof",
            "created": "2025-05-08T19:26:51Z",
            "verificationMethod": "did:key:z6MkjoriXdbyWD25YXTed114F8hdJrLXQ567xxPHAUKxpKkS#z6MkjoriXdbyWD25YXTed114F8hdJrLXQ567xxPHAUKxpKkS",
            "cryptosuite": "eddsa-rdfc-2022",
            "proofPurpose": "assertionMethod",
            "proofValue": "z3pPofHbtdsu8CkwxZGdZNQtiZSn8RRbrGmbuRf85akQ3AFNPNr8FCp1rJDyvn8r7EGpZYypaSMUJxSroLCdHAs9B"
        },
        {
            "type": "Ed25519Signature2020",
            "created": "2025-05-08T19:26:51Z",
            "verificationMethod": "did:key:z6MkjoriXdbyWD25YXTed114F8hdJrLXQ567xxPHAUKxpKkS#z6MkjoriXdbyWD25YXTed114F8hdJrLXQ567xxPHAUKxpKkS",
            "proofPurpose": "assertionMethod",
            "proofValue": "z3PV1aYHfNcmsqM2F3QszVd2ZRcd44cB8hXw3ME7GFYSKVCgdXEFWE7DjocbjQdqrzsAmQ3VHJyqUHyAkKD6EbSnB"
        }
    ]
}
```

</details>

[rawURL](https://digitalcredentials.github.io/vc-test-fixtures/verifiableCredentials/v1/bothSignatureTypes/didKey/oidf-noStatus-noExpiry.json)

[Open Directly in VerifierPlus](https://verifierplus.org/#verify?vc=https://digitalcredentials.github.io/vc-test-fixtures/verifiableCredentials/v1/bothSignatureTypes/didKey/oidf-noStatus-noExpiry.json)

![QR](verifiableCredentials/v1/bothSignatureTypes/didKey/oidf-noStatus-noExpiry.png)

### /v1/bothSignatureTypes/didKey/oidf-revokedStatus-expired.json

<details>

<summary>Click to see copyable raw json</summary>

```json
   {
    "type": [
        "VerifiableCredential",
        "OpenBadgeCredential"
    ],
    "name": "Taylor Tuna - Mock Bachelor of Science Degree in Biology",
    "issuanceDate": "2025-01-09T15:06:31Z",
    "expirationDate": "2025-01-09T16:23:24Z",
    "issuer": {
        "url": "https://web.mit.edu/",
        "type": "Profile",
        "name": "Massachusetts Institute of Technology",
        "image": {
            "id": "https://github.com/digitalcredentials/test-files/assets/206059/01eca9f5-a508-40ac-9dd5-c12d11308894",
            "type": "Image"
        },
        "id": "did:key:z6MkjoriXdbyWD25YXTed114F8hdJrLXQ567xxPHAUKxpKkS"
    },
    "@context": [
        "https://www.w3.org/2018/credentials/v1",
        "https://purl.imsglobal.org/spec/ob/v3p0/context-3.0.1.json",
        "https://www.w3.org/ns/credentials/status/v1",
        "https://w3id.org/security/suites/ed25519-2020/v1",
        "https://w3id.org/security/data-integrity/v2"
    ],
    "credentialSubject": {
        "type": [
            "AchievementSubject"
        ],
        "name": "Taylor Tuna",
        "achievement": {
            "id": "urn:uuid:951b475e-b795-43bc-ba8f-a2d01efd2eb1",
            "type": [
                "Achievement"
            ],
            "name": "Mock Bachelor of Science in Biology",
            "criteria": {
                "type": "Criteria",
                "narrative": "In Recognition of proficiency in the general and the special studies and exercises prescribed by said institution for such mock degree given this day under the seal of the Institute at Cambridge in the Commonwealth of Massachusetts"
            },
            "description": "Massachusetts Institute of Technology Mock Bachelor of Science in Computer Science",
            "fieldOfStudy": "Biology",
            "achievementType": "BachelorDegree"
        }
    },
    "id": "urn:uuid:677fe54fcacf98774d482bcc",
    "credentialStatus": {
        "id": "https://digitalcredentials.github.io/vc-test-fixtures/statusLists/didkey-ed25519Signature2020/e5WK8CbZ1GjycuPombrj#6",
        "type": "BitstringStatusListEntry",
        "statusPurpose": "revocation",
        "statusListCredential": "https://digitalcredentials.github.io/vc-test-fixtures/statusLists/didkey-ed25519Signature2020/e5WK8CbZ1GjycuPombrj",
        "statusListIndex": "6"
    },
    "proof": [
        {
            "type": "Ed25519Signature2020",
            "created": "2025-05-12T15:07:46Z",
            "verificationMethod": "did:key:z6MkjoriXdbyWD25YXTed114F8hdJrLXQ567xxPHAUKxpKkS#z6MkjoriXdbyWD25YXTed114F8hdJrLXQ567xxPHAUKxpKkS",
            "proofPurpose": "assertionMethod",
            "proofValue": "zsSgEJcQS54jVFWXEPHMjZyA7ATm5eEdBz4kA3twYztF3vJn9XVoicyXXh3PEaF8WprFbX3BU9eVz2zTtF9ZYQz6"
        },
        {
            "type": "DataIntegrityProof",
            "created": "2025-05-12T15:07:46Z",
            "verificationMethod": "did:key:z6MkjoriXdbyWD25YXTed114F8hdJrLXQ567xxPHAUKxpKkS#z6MkjoriXdbyWD25YXTed114F8hdJrLXQ567xxPHAUKxpKkS",
            "cryptosuite": "eddsa-rdfc-2022",
            "proofPurpose": "assertionMethod",
            "proofValue": "z5HMH8mw9yiEdyXAiDhR3q4RiJWXWjvKUVWwJKWaXhA3AvYtkygCC297ApLFqtVa3QAvbXybJZ2VRYnKohCqfXE2o"
        }
    ]
}
```

</details>

[rawURL](https://digitalcredentials.github.io/vc-test-fixtures/verifiableCredentials/v1/bothSignatureTypes/didKey/oidf-revokedStatus-expired.json)

[Open Directly in VerifierPlus](https://verifierplus.org/#verify?vc=https://digitalcredentials.github.io/vc-test-fixtures/verifiableCredentials/v1/bothSignatureTypes/didKey/oidf-revokedStatus-expired.json)

![QR](verifiableCredentials/v1/bothSignatureTypes/didKey/oidf-revokedStatus-expired.png)

### /v1/bothSignatureTypes/didWeb/legacy-noStatus-noExpiry.json

<details>

<summary>Click to see copyable raw json</summary>

```json
   {
    "@context": [
        "https://www.w3.org/2018/credentials/v1",
        "https://purl.imsglobal.org/spec/ob/v3p0/context-3.0.3.json",
        "https://w3id.org/security/data-integrity/v2",
        "https://w3id.org/security/suites/ed25519-2020/v1"
    ],
    "id": "urn:uuid:2fe53dc9-b2ec-4939-9b2c-0d00f6663b6c",
    "issuanceDate": "2025-01-09T15:06:31Z",
    "type": [
        "VerifiableCredential",
        "OpenBadgeCredential"
    ],
    "name": "DCC Test Credential",
    "issuer": {
        "type": [
            "Profile"
        ],
        "id": "did:web:digitalcredentials.github.io:vc-test-fixtures:dids:legacy",
        "name": "Digital Credentials Consortium Test Issuer",
        "url": "https://dcconsortium.org",
        "image": "https://user-images.githubusercontent.com/752326/230469660-8f80d264-eccf-4edd-8e50-ea634d407778.png"
    },
    "credentialSubject": {
        "type": [
            "AchievementSubject"
        ],
        "achievement": {
            "id": "urn:uuid:bd6d9316-f7ae-4073-a1e5-2f7f5bd22922",
            "type": [
                "Achievement"
            ],
            "achievementType": "Diploma",
            "name": "Badge",
            "description": "This is a sample credential issued by the Digital Credentials Consortium to demonstrate the functionality of Verifiable Credentials for wallets and verifiers.",
            "criteria": {
                "type": "Criteria",
                "narrative": "This credential was issued to a student that demonstrated proficiency in the Python programming language that occurred from **February 17, 2023** to **June 12, 2023**."
            },
            "image": {
                "id": "https://user-images.githubusercontent.com/752326/214947713-15826a3a-b5ac-4fba-8d4a-884b60cb7157.png",
                "type": "Image"
            }
        },
        "name": "Jane Doe"
    },
    "proof": [
        {
            "type": "DataIntegrityProof",
            "created": "2025-05-08T16:20:30Z",
            "verificationMethod": "did:web:digitalcredentials.github.io:vc-test-fixtures:dids:legacy#z6MkjXe1vZvPRqFuc9nRBtZ3e1Y9XKDFSbjFAfzLfW2bD6cZ",
            "cryptosuite": "eddsa-rdfc-2022",
            "proofPurpose": "assertionMethod",
            "proofValue": "z3eovvrr8VwstoHyVwHSxbthonbNmp5qixGrNf9kuYoK5Hmmqpp6atnGqgQWLE89reG4onMh3bLJRqh8HZSrmLF2w"
        },
        {
            "type": "Ed25519Signature2020",
            "created": "2025-05-08T16:20:30Z",
            "verificationMethod": "did:web:digitalcredentials.github.io:vc-test-fixtures:dids:legacy#z6MkjXe1vZvPRqFuc9nRBtZ3e1Y9XKDFSbjFAfzLfW2bD6cZ",
            "proofPurpose": "assertionMethod",
            "proofValue": "z5SSYMp3BsiV4hdh7AsofQgTfZ5awaKSN9RzMaurVHnwSDFhWbEZQJJYWnAUUZKYD7FygnfYt2yAEA3YJ1hUsUHRa"
        }
    ]
}
```

</details>

[rawURL](https://digitalcredentials.github.io/vc-test-fixtures/verifiableCredentials/v1/bothSignatureTypes/didWeb/legacy-noStatus-noExpiry.json)

[Open Directly in VerifierPlus](https://verifierplus.org/#verify?vc=https://digitalcredentials.github.io/vc-test-fixtures/verifiableCredentials/v1/bothSignatureTypes/didWeb/legacy-noStatus-noExpiry.json)

![QR](verifiableCredentials/v1/bothSignatureTypes/didWeb/legacy-noStatus-noExpiry.png)

### /v1/bothSignatureTypes/didWeb/legacy-revokedStaus-noExpiry.json

<details>

<summary>Click to see copyable raw json</summary>

```json
   {
    "type": [
        "VerifiableCredential",
        "OpenBadgeCredential"
    ],
    "name": "Taylor Tuna - Mock Bachelor of Science Degree in Biology",
    "issuer": {
        "url": "https://web.mit.edu/",
        "type": "Profile",
        "name": "Massachusetts Institute of Technology",
        "image": {
            "id": "https://github.com/digitalcredentials/test-files/assets/206059/01eca9f5-a508-40ac-9dd5-c12d11308894",
            "type": "Image"
        },
        "id": "did:web:digitalcredentials.github.io:vc-test-fixtures:dids:legacy"
    },
    "@context": [
        "https://www.w3.org/2018/credentials/v1",
        "https://purl.imsglobal.org/spec/ob/v3p0/context-3.0.1.json",
        "https://www.w3.org/ns/credentials/status/v1",
        "https://w3id.org/security/suites/ed25519-2020/v1",
        "https://w3id.org/security/data-integrity/v2"
    ],
    "credentialSubject": {
        "type": [
            "AchievementSubject"
        ],
        "name": "Taylor Tuna",
        "achievement": {
            "id": "urn:uuid:951b475e-b795-43bc-ba8f-a2d01efd2eb1",
            "type": [
                "Achievement"
            ],
            "name": "Mock Bachelor of Science in Biology",
            "criteria": {
                "type": "Criteria",
                "narrative": "In Recognition of proficiency in the general and the special studies and exercises prescribed by said institution for such mock degree given this day under the seal of the Institute at Cambridge in the Commonwealth of Massachusetts"
            },
            "description": "Massachusetts Institute of Technology Mock Bachelor of Science in Computer Science",
            "fieldOfStudy": "Biology",
            "achievementType": "BachelorDegree"
        }
    },
    "id": "urn:uuid:677fe54fcacf98774d482bcc",
    "credentialStatus": {
        "id": "https://digitalcredentials.github.io/vc-test-fixtures/statusLists/didkey-ed25519Signature2020/e5WK8CbZ1GjycuPombrj#6",
        "type": "BitstringStatusListEntry",
        "statusPurpose": "revocation",
        "statusListCredential": "https://digitalcredentials.github.io/vc-test-fixtures/statusLists/didkey-ed25519Signature2020/e5WK8CbZ1GjycuPombrj",
        "statusListIndex": "6"
    },
    "issuanceDate": "2025-01-09T15:06:31Z",
    "proof": [
        {
            "type": "DataIntegrityProof",
            "created": "2025-05-08T19:12:47Z",
            "verificationMethod": "did:web:digitalcredentials.github.io:vc-test-fixtures:dids:legacy#z6MkjXe1vZvPRqFuc9nRBtZ3e1Y9XKDFSbjFAfzLfW2bD6cZ",
            "cryptosuite": "eddsa-rdfc-2022",
            "proofPurpose": "assertionMethod",
            "proofValue": "z3azZMeeKKZGkbWqkvrAoRrDFFkSpSCddi47zAakhNHCSq4CZ7f6n7EeKXY8bRgjgMvtHDsNgv9J4JPKS1pKtNsM6"
        },
        {
            "type": "Ed25519Signature2020",
            "created": "2025-05-08T19:12:47Z",
            "verificationMethod": "did:web:digitalcredentials.github.io:vc-test-fixtures:dids:legacy#z6MkjXe1vZvPRqFuc9nRBtZ3e1Y9XKDFSbjFAfzLfW2bD6cZ",
            "proofPurpose": "assertionMethod",
            "proofValue": "z4CGxNaM8tKj8yLRPckJhT7JcDxjCrsivDabCARRKNPDKQsBdiCeqqoeqYRQ3U1XzM2M3QY77FnZEoLFTZASLJERK"
        }
    ]
}
```

</details>

[rawURL](https://digitalcredentials.github.io/vc-test-fixtures/verifiableCredentials/v1/bothSignatureTypes/didWeb/legacy-revokedStaus-noExpiry.json)

[Open Directly in VerifierPlus](https://verifierplus.org/#verify?vc=https://digitalcredentials.github.io/vc-test-fixtures/verifiableCredentials/v1/bothSignatureTypes/didWeb/legacy-revokedStaus-noExpiry.json)

![QR](verifiableCredentials/v1/bothSignatureTypes/didWeb/legacy-revokedStaus-noExpiry.png)

### /v1/bothSignatureTypes/didWeb/legacy-validStatus-noExpiry.json

<details>

<summary>Click to see copyable raw json</summary>

```json
   {
    "type": [
        "VerifiableCredential",
        "OpenBadgeCredential"
    ],
    "name": "Taylor Tuna - Mock Bachelor of Science Degree in Biology",
    "issuer": {
        "url": "https://web.mit.edu/",
        "type": "Profile",
        "name": "Massachusetts Institute of Technology",
        "image": {
            "id": "https://github.com/digitalcredentials/test-files/assets/206059/01eca9f5-a508-40ac-9dd5-c12d11308894",
            "type": "Image"
        },
        "id": "did:web:digitalcredentials.github.io:vc-test-fixtures:dids:legacy"
    },
    "@context": [
        "https://www.w3.org/2018/credentials/v1",
        "https://purl.imsglobal.org/spec/ob/v3p0/context-3.0.1.json",
        "https://www.w3.org/ns/credentials/status/v1",
        "https://w3id.org/security/suites/ed25519-2020/v1",
        "https://w3id.org/security/data-integrity/v2"
    ],
    "credentialSubject": {
        "type": [
            "AchievementSubject"
        ],
        "name": "Taylor Tuna",
        "achievement": {
            "id": "urn:uuid:951b475e-b795-43bc-ba8f-a2d01efd2eb1",
            "type": [
                "Achievement"
            ],
            "name": "Mock Bachelor of Science in Biology",
            "criteria": {
                "type": "Criteria",
                "narrative": "In Recognition of proficiency in the general and the special studies and exercises prescribed by said institution for such mock degree given this day under the seal of the Institute at Cambridge in the Commonwealth of Massachusetts"
            },
            "description": "Massachusetts Institute of Technology Mock Bachelor of Science in Computer Science",
            "fieldOfStudy": "Biology",
            "achievementType": "BachelorDegree"
        }
    },
    "id": "urn:uuid:677fe54fcacf98774d482bcc",
    "credentialStatus": {
        "id": "https://digitalcredentials.github.io/vc-test-fixtures/statusLists/didkey-ed25519Signature2020/e5WK8CbZ1GjycuPombrj#7",
        "type": "BitstringStatusListEntry",
        "statusPurpose": "revocation",
        "statusListCredential": "https://digitalcredentials.github.io/vc-test-fixtures/statusLists/didkey-ed25519Signature2020/e5WK8CbZ1GjycuPombrj",
        "statusListIndex": "7"
    },
    "issuanceDate": "2025-01-09T15:06:31Z",
    "proof": [
        {
            "type": "DataIntegrityProof",
            "created": "2025-05-08T17:30:16Z",
            "verificationMethod": "did:web:digitalcredentials.github.io:vc-test-fixtures:dids:legacy#z6MkjXe1vZvPRqFuc9nRBtZ3e1Y9XKDFSbjFAfzLfW2bD6cZ",
            "cryptosuite": "eddsa-rdfc-2022",
            "proofPurpose": "assertionMethod",
            "proofValue": "z4TSagLuRnmgB7isKdRZFWkjdkurCjPJCfaCZwCmRqkP7HUbCwe6XwgmpYUktcMCXvPGWXfYLRsmDDPvcn19L48XK"
        },
        {
            "type": "Ed25519Signature2020",
            "created": "2025-05-08T17:30:16Z",
            "verificationMethod": "did:web:digitalcredentials.github.io:vc-test-fixtures:dids:legacy#z6MkjXe1vZvPRqFuc9nRBtZ3e1Y9XKDFSbjFAfzLfW2bD6cZ",
            "proofPurpose": "assertionMethod",
            "proofValue": "z5G3d4Ui9MHnz9trWQEU72vcqEjL7VmgWNDh4dde1ZoGyfGJhW5xspeag3S7sAqEH6YbDssTJqkGB2zMLUKwr1Y9B"
        }
    ]
}
```

</details>

[rawURL](https://digitalcredentials.github.io/vc-test-fixtures/verifiableCredentials/v1/bothSignatureTypes/didWeb/legacy-validStatus-noExpiry.json)

[Open Directly in VerifierPlus](https://verifierplus.org/#verify?vc=https://digitalcredentials.github.io/vc-test-fixtures/verifiableCredentials/v1/bothSignatureTypes/didWeb/legacy-validStatus-noExpiry.json)

![QR](verifiableCredentials/v1/bothSignatureTypes/didWeb/legacy-validStatus-noExpiry.png)

### /v1/bothSignatureTypes/didWeb/oidf-noStatus-noExpiry.json

<details>

<summary>Click to see copyable raw json</summary>

```json
   {
    "@context": [
        "https://www.w3.org/2018/credentials/v1",
        "https://purl.imsglobal.org/spec/ob/v3p0/context-3.0.3.json",
        "https://w3id.org/security/data-integrity/v2",
        "https://w3id.org/security/suites/ed25519-2020/v1"
    ],
    "id": "urn:uuid:2fe53dc9-b2ec-4939-9b2c-0d00f6663b6c",
    "issuanceDate": "2025-01-09T15:06:31Z",
    "type": [
        "VerifiableCredential",
        "OpenBadgeCredential"
    ],
    "name": "DCC Test Credential",
    "issuer": {
        "type": [
            "Profile"
        ],
        "id": "did:web:digitalcredentials.github.io:vc-test-fixtures:dids:oidf",
        "name": "Digital Credentials Consortium Test Issuer",
        "url": "https://dcconsortium.org",
        "image": "https://user-images.githubusercontent.com/752326/230469660-8f80d264-eccf-4edd-8e50-ea634d407778.png"
    },
    "credentialSubject": {
        "type": [
            "AchievementSubject"
        ],
        "achievement": {
            "id": "urn:uuid:bd6d9316-f7ae-4073-a1e5-2f7f5bd22922",
            "type": [
                "Achievement"
            ],
            "achievementType": "Diploma",
            "name": "Badge",
            "description": "This is a sample credential issued by the Digital Credentials Consortium to demonstrate the functionality of Verifiable Credentials for wallets and verifiers.",
            "criteria": {
                "type": "Criteria",
                "narrative": "This credential was issued to a student that demonstrated proficiency in the Python programming language that occurred from **February 17, 2023** to **June 12, 2023**."
            },
            "image": {
                "id": "https://user-images.githubusercontent.com/752326/214947713-15826a3a-b5ac-4fba-8d4a-884b60cb7157.png",
                "type": "Image"
            }
        },
        "name": "Jane Doe"
    },
    "proof": [
        {
            "type": "DataIntegrityProof",
            "created": "2025-05-08T16:21:52Z",
            "verificationMethod": "did:web:digitalcredentials.github.io:vc-test-fixtures:dids:oidf#z6MkjXe1vZvPRqFuc9nRBtZ3e1Y9XKDFSbjFAfzLfW2bD6cZ",
            "cryptosuite": "eddsa-rdfc-2022",
            "proofPurpose": "assertionMethod",
            "proofValue": "z3SiC2FDyd6sygnVwp1fD5p43TydBBJ251X3K9qrGb3aukLVZFmTcRbnxTjASBKQEUT8GrrLz5GQjTDm4AJiHvknZ"
        },
        {
            "type": "Ed25519Signature2020",
            "created": "2025-05-08T16:21:52Z",
            "verificationMethod": "did:web:digitalcredentials.github.io:vc-test-fixtures:dids:oidf#z6MkjXe1vZvPRqFuc9nRBtZ3e1Y9XKDFSbjFAfzLfW2bD6cZ",
            "proofPurpose": "assertionMethod",
            "proofValue": "z21MmDkZYU1NUdkKkCeiqXXYdKzUdfQszeTiZ8xTCnjX64Pu9aWCJRfhNFt5C3rrJuLF2LRFBecpDLvxBtWXfA18g"
        }
    ]
}
```

</details>

[rawURL](https://digitalcredentials.github.io/vc-test-fixtures/verifiableCredentials/v1/bothSignatureTypes/didWeb/oidf-noStatus-noExpiry.json)

[Open Directly in VerifierPlus](https://verifierplus.org/#verify?vc=https://digitalcredentials.github.io/vc-test-fixtures/verifiableCredentials/v1/bothSignatureTypes/didWeb/oidf-noStatus-noExpiry.json)

![QR](verifiableCredentials/v1/bothSignatureTypes/didWeb/oidf-noStatus-noExpiry.png)

### /v1/bothSignatureTypes/didWeb/oidf-revokedStatus-noExpiry.json

<details>

<summary>Click to see copyable raw json</summary>

```json
   {
    "type": [
        "VerifiableCredential",
        "OpenBadgeCredential"
    ],
    "name": "Taylor Tuna - Mock Bachelor of Science Degree in Biology",
    "issuer": {
        "url": "https://web.mit.edu/",
        "type": "Profile",
        "name": "Massachusetts Institute of Technology",
        "image": {
            "id": "https://github.com/digitalcredentials/test-files/assets/206059/01eca9f5-a508-40ac-9dd5-c12d11308894",
            "type": "Image"
        },
        "id": "did:web:digitalcredentials.github.io:vc-test-fixtures:dids:oidf"
    },
    "@context": [
        "https://www.w3.org/2018/credentials/v1",
        "https://purl.imsglobal.org/spec/ob/v3p0/context-3.0.1.json",
        "https://www.w3.org/ns/credentials/status/v1",
        "https://w3id.org/security/suites/ed25519-2020/v1",
        "https://w3id.org/security/data-integrity/v2"
    ],
    "credentialSubject": {
        "type": [
            "AchievementSubject"
        ],
        "name": "Taylor Tuna",
        "achievement": {
            "id": "urn:uuid:951b475e-b795-43bc-ba8f-a2d01efd2eb1",
            "type": [
                "Achievement"
            ],
            "name": "Mock Bachelor of Science in Biology",
            "criteria": {
                "type": "Criteria",
                "narrative": "In Recognition of proficiency in the general and the special studies and exercises prescribed by said institution for such mock degree given this day under the seal of the Institute at Cambridge in the Commonwealth of Massachusetts"
            },
            "description": "Massachusetts Institute of Technology Mock Bachelor of Science in Computer Science",
            "fieldOfStudy": "Biology",
            "achievementType": "BachelorDegree"
        }
    },
    "id": "urn:uuid:677fe54fcacf98774d482bcc",
    "credentialStatus": {
        "id": "https://digitalcredentials.github.io/vc-test-fixtures/statusLists/didkey-ed25519Signature2020/e5WK8CbZ1GjycuPombrj#6",
        "type": "BitstringStatusListEntry",
        "statusPurpose": "revocation",
        "statusListCredential": "https://digitalcredentials.github.io/vc-test-fixtures/statusLists/didkey-ed25519Signature2020/e5WK8CbZ1GjycuPombrj",
        "statusListIndex": "6"
    },
    "issuanceDate": "2025-01-09T15:06:31Z",
    "proof": [
        {
            "type": "DataIntegrityProof",
            "created": "2025-05-09T12:22:28Z",
            "verificationMethod": "did:web:digitalcredentials.github.io:vc-test-fixtures:dids:oidf#z6MkjXe1vZvPRqFuc9nRBtZ3e1Y9XKDFSbjFAfzLfW2bD6cZ",
            "cryptosuite": "eddsa-rdfc-2022",
            "proofPurpose": "assertionMethod",
            "proofValue": "z2YUQGVAVWmJKdST8hWg597JSqDYgAQa8JHTdKY3Z88NmjYxbfGfbfpxkgZmv2jYqqoMUKxHdaVmMUcWaQ579Eh3m"
        },
        {
            "type": "Ed25519Signature2020",
            "created": "2025-05-09T12:22:28Z",
            "verificationMethod": "did:web:digitalcredentials.github.io:vc-test-fixtures:dids:oidf#z6MkjXe1vZvPRqFuc9nRBtZ3e1Y9XKDFSbjFAfzLfW2bD6cZ",
            "proofPurpose": "assertionMethod",
            "proofValue": "z5TjDLyG3KojxBt7BDcXWbmUN7eZBSWGFDnvMDFRdptQMLQUyw1EuxtHgQSsGAoZLSUXhCcFYKN5ErmPzeq5D46AC"
        }
    ]
}
```

</details>

[rawURL](https://digitalcredentials.github.io/vc-test-fixtures/verifiableCredentials/v1/bothSignatureTypes/didWeb/oidf-revokedStatus-noExpiry.json)

[Open Directly in VerifierPlus](https://verifierplus.org/#verify?vc=https://digitalcredentials.github.io/vc-test-fixtures/verifiableCredentials/v1/bothSignatureTypes/didWeb/oidf-revokedStatus-noExpiry.json)

![QR](verifiableCredentials/v1/bothSignatureTypes/didWeb/oidf-revokedStatus-noExpiry.png)

### /v1/bothSignatureTypes/didWeb/oidf-validStatus-noExpiry.json

<details>

<summary>Click to see copyable raw json</summary>

```json
   {
    "type": [
        "VerifiableCredential",
        "OpenBadgeCredential"
    ],
    "name": "Taylor Tuna - Mock Bachelor of Science Degree in Biology",
    "issuer": {
        "url": "https://web.mit.edu/",
        "type": "Profile",
        "name": "Massachusetts Institute of Technology",
        "image": {
            "id": "https://github.com/digitalcredentials/test-files/assets/206059/01eca9f5-a508-40ac-9dd5-c12d11308894",
            "type": "Image"
        },
        "id": "did:web:digitalcredentials.github.io:vc-test-fixtures:dids:oidf"
    },
    "@context": [
        "https://www.w3.org/2018/credentials/v1",
        "https://purl.imsglobal.org/spec/ob/v3p0/context-3.0.1.json",
        "https://www.w3.org/ns/credentials/status/v1",
        "https://w3id.org/security/suites/ed25519-2020/v1",
        "https://w3id.org/security/data-integrity/v2"
    ],
    "credentialSubject": {
        "type": [
            "AchievementSubject"
        ],
        "name": "Taylor Tuna",
        "achievement": {
            "id": "urn:uuid:951b475e-b795-43bc-ba8f-a2d01efd2eb1",
            "type": [
                "Achievement"
            ],
            "name": "Mock Bachelor of Science in Biology",
            "criteria": {
                "type": "Criteria",
                "narrative": "In Recognition of proficiency in the general and the special studies and exercises prescribed by said institution for such mock degree given this day under the seal of the Institute at Cambridge in the Commonwealth of Massachusetts"
            },
            "description": "Massachusetts Institute of Technology Mock Bachelor of Science in Computer Science",
            "fieldOfStudy": "Biology",
            "achievementType": "BachelorDegree"
        }
    },
    "id": "urn:uuid:677fe54fcacf98774d482bcc",
    "credentialStatus": {
        "id": "https://digitalcredentials.github.io/vc-test-fixtures/statusLists/didkey-ed25519Signature2020/e5WK8CbZ1GjycuPombrj#7",
        "type": "BitstringStatusListEntry",
        "statusPurpose": "revocation",
        "statusListCredential": "https://digitalcredentials.github.io/vc-test-fixtures/statusLists/didkey-ed25519Signature2020/e5WK8CbZ1GjycuPombrj",
        "statusListIndex": "7"
    },
    "issuanceDate": "2025-01-09T15:06:31Z",
    "proof": [
        {
            "type": "DataIntegrityProof",
            "created": "2025-05-08T17:34:00Z",
            "verificationMethod": "did:web:digitalcredentials.github.io:vc-test-fixtures:dids:oidf#z6MkjXe1vZvPRqFuc9nRBtZ3e1Y9XKDFSbjFAfzLfW2bD6cZ",
            "cryptosuite": "eddsa-rdfc-2022",
            "proofPurpose": "assertionMethod",
            "proofValue": "zLrpo7TmdFsZQLHyaF8BqSqVKWbpoF4HyxRsCqJXmk4T1wYeT7j6GSwB4vBHRp1LiiaNMcJXtgCwJRW9oMM2tyGv"
        },
        {
            "type": "Ed25519Signature2020",
            "created": "2025-05-08T17:34:00Z",
            "verificationMethod": "did:web:digitalcredentials.github.io:vc-test-fixtures:dids:oidf#z6MkjXe1vZvPRqFuc9nRBtZ3e1Y9XKDFSbjFAfzLfW2bD6cZ",
            "proofPurpose": "assertionMethod",
            "proofValue": "z3TUNFfgercNhcn5mYgcNnquwGWt8KXbZXDgXzWXeXqwY3z3khtX4zbpzxr2MsDAWiuLx1YPhqnv1xW2VhvPpn8zb"
        }
    ]
}
```

</details>

[rawURL](https://digitalcredentials.github.io/vc-test-fixtures/verifiableCredentials/v1/bothSignatureTypes/didWeb/oidf-validStatus-noExpiry.json)

[Open Directly in VerifierPlus](https://verifierplus.org/#verify?vc=https://digitalcredentials.github.io/vc-test-fixtures/verifiableCredentials/v1/bothSignatureTypes/didWeb/oidf-validStatus-noExpiry.json)

![QR](verifiableCredentials/v1/bothSignatureTypes/didWeb/oidf-validStatus-noExpiry.png)

### /v1/dataIntegrityProof/didKey/fourRegistry-noStatus-noExpiry.json

<details>

<summary>Click to see copyable raw json</summary>

```json
   {
    "@context": [
        "https://www.w3.org/2018/credentials/v1",
        "https://purl.imsglobal.org/spec/ob/v3p0/context-3.0.3.json",
        "https://w3id.org/security/data-integrity/v2"
    ],
    "id": "urn:uuid:2fe53dc9-b2ec-4939-9b2c-0d00f6663b6c",
    "issuanceDate": "2025-01-09T15:06:31Z",
    "type": [
        "VerifiableCredential",
        "OpenBadgeCredential"
    ],
    "name": "DCC Test Credential",
    "issuer": {
        "type": [
            "Profile"
        ],
        "id": "did:key:z6MkuL7x2mTEoBmUuuaQ2hvEUd2YsEtmsHeX9JzqJZ8VYaVH",
        "name": "Digital Credentials Consortium Test Issuer",
        "url": "https://dcconsortium.org",
        "image": "https://user-images.githubusercontent.com/752326/230469660-8f80d264-eccf-4edd-8e50-ea634d407778.png"
    },
    "credentialSubject": {
        "type": [
            "AchievementSubject"
        ],
        "achievement": {
            "id": "urn:uuid:bd6d9316-f7ae-4073-a1e5-2f7f5bd22922",
            "type": [
                "Achievement"
            ],
            "achievementType": "Diploma",
            "name": "Badge",
            "description": "This is a sample credential issued by the Digital Credentials Consortium to demonstrate the functionality of Verifiable Credentials for wallets and verifiers.",
            "criteria": {
                "type": "Criteria",
                "narrative": "This credential was issued to a student that demonstrated proficiency in the Python programming language that occurred from **February 17, 2023** to **June 12, 2023**."
            },
            "image": {
                "id": "https://user-images.githubusercontent.com/752326/214947713-15826a3a-b5ac-4fba-8d4a-884b60cb7157.png",
                "type": "Image"
            }
        },
        "name": "Jane Doe"
    },
    "proof": {
        "type": "DataIntegrityProof",
        "created": "2025-05-09T17:56:39Z",
        "verificationMethod": "did:key:z6MkuL7x2mTEoBmUuuaQ2hvEUd2YsEtmsHeX9JzqJZ8VYaVH#z6MkuL7x2mTEoBmUuuaQ2hvEUd2YsEtmsHeX9JzqJZ8VYaVH",
        "cryptosuite": "eddsa-rdfc-2022",
        "proofPurpose": "assertionMethod",
        "proofValue": "z2oeeBkWTzfY2LsA7Rswys4pK5tYN1DwVkksB1nJUZr6BnJkG5DdtxjzLvCLVN8978TUp9mBCKUiPz8MfUmELwad4"
    }
}
```

</details>

[rawURL](https://digitalcredentials.github.io/vc-test-fixtures/verifiableCredentials/v1/dataIntegrityProof/didKey/fourRegistry-noStatus-noExpiry.json)

[Open Directly in VerifierPlus](https://verifierplus.org/#verify?vc=https://digitalcredentials.github.io/vc-test-fixtures/verifiableCredentials/v1/dataIntegrityProof/didKey/fourRegistry-noStatus-noExpiry.json)

![QR](verifiableCredentials/v1/dataIntegrityProof/didKey/fourRegistry-noStatus-noExpiry.png)

### /v1/dataIntegrityProof/didKey/legacy-noStatus-noExpiry.json

<details>

<summary>Click to see copyable raw json</summary>

```json
   {
    "@context": [
        "https://www.w3.org/2018/credentials/v1",
        "https://purl.imsglobal.org/spec/ob/v3p0/context-3.0.3.json",
        "https://w3id.org/security/data-integrity/v2"
    ],
    "id": "urn:uuid:2fe53dc9-b2ec-4939-9b2c-0d00f6663b6c",
    "issuanceDate": "2025-01-09T15:06:31Z",
    "type": [
        "VerifiableCredential",
        "OpenBadgeCredential"
    ],
    "name": "DCC Test Credential",
    "issuer": {
        "type": [
            "Profile"
        ],
        "id": "did:key:z6MknNQD1WHLGGraFi6zcbGevuAgkVfdyCdtZnQTGWVVvR5Q",
        "name": "Digital Credentials Consortium Test Issuer",
        "url": "https://dcconsortium.org",
        "image": "https://user-images.githubusercontent.com/752326/230469660-8f80d264-eccf-4edd-8e50-ea634d407778.png"
    },
    "credentialSubject": {
        "type": [
            "AchievementSubject"
        ],
        "achievement": {
            "id": "urn:uuid:bd6d9316-f7ae-4073-a1e5-2f7f5bd22922",
            "type": [
                "Achievement"
            ],
            "achievementType": "Diploma",
            "name": "Badge",
            "description": "This is a sample credential issued by the Digital Credentials Consortium to demonstrate the functionality of Verifiable Credentials for wallets and verifiers.",
            "criteria": {
                "type": "Criteria",
                "narrative": "This credential was issued to a student that demonstrated proficiency in the Python programming language that occurred from **February 17, 2023** to **June 12, 2023**."
            },
            "image": {
                "id": "https://user-images.githubusercontent.com/752326/214947713-15826a3a-b5ac-4fba-8d4a-884b60cb7157.png",
                "type": "Image"
            }
        },
        "name": "Jane Doe"
    },
    "proof": {
        "type": "DataIntegrityProof",
        "created": "2025-05-07T19:17:53Z",
        "verificationMethod": "did:key:z6MknNQD1WHLGGraFi6zcbGevuAgkVfdyCdtZnQTGWVVvR5Q#z6MknNQD1WHLGGraFi6zcbGevuAgkVfdyCdtZnQTGWVVvR5Q",
        "cryptosuite": "eddsa-rdfc-2022",
        "proofPurpose": "assertionMethod",
        "proofValue": "z2ipiCfjeSw9W9rpioniVxo1xbvh29ZHuaYEvv2nQRWiYCBvzQeXJQBfgPrMzxs66RFKwqFkgLP6XnaMVWsA5dFW5"
    }
}
```

</details>

[rawURL](https://digitalcredentials.github.io/vc-test-fixtures/verifiableCredentials/v1/dataIntegrityProof/didKey/legacy-noStatus-noExpiry.json)

[Open Directly in VerifierPlus](https://verifierplus.org/#verify?vc=https://digitalcredentials.github.io/vc-test-fixtures/verifiableCredentials/v1/dataIntegrityProof/didKey/legacy-noStatus-noExpiry.json)

![QR](verifiableCredentials/v1/dataIntegrityProof/didKey/legacy-noStatus-noExpiry.png)

### /v1/dataIntegrityProof/didKey/legacyRegistry-noStatus-noExpiry-OBSpecExample.json

<details>

<summary>Click to see copyable raw json</summary>

```json
   {
    "@context": [
        "https://www.w3.org/2018/credentials/v1",
        "https://purl.imsglobal.org/spec/ob/v3p0/context-3.0.3.json",
        "https://w3id.org/security/data-integrity/v2"
    ],
    "id": "http://example.com/credentials/3527",
    "type": [
        "VerifiableCredential",
        "OpenBadgeCredential"
    ],
    "issuer": {
        "id": "did:key:z6MknNQD1WHLGGraFi6zcbGevuAgkVfdyCdtZnQTGWVVvR5Q",
        "type": [
            "Profile"
        ],
        "name": "Example Corp"
    },
    "issuanceDate": "2010-01-01T00:00:00Z",
    "name": "Teamwork Badge",
    "credentialSubject": {
        "id": "did:example:ebfeb1f712ebc6f1c276e12ec21",
        "type": [
            "AchievementSubject"
        ],
        "achievement": {
            "id": "https://example.com/achievements/21st-century-skills/teamwork",
            "type": [
                "Achievement"
            ],
            "criteria": {
                "narrative": "Team members are nominated for this badge by their peers and recognized upon review by Example Corp management."
            },
            "description": "This badge recognizes the development of the capacity to collaborate within a group environment.",
            "name": "Teamwork"
        }
    },
    "proof": {
        "type": "DataIntegrityProof",
        "created": "2025-10-16T11:29:08Z",
        "verificationMethod": "did:key:z6MknNQD1WHLGGraFi6zcbGevuAgkVfdyCdtZnQTGWVVvR5Q#z6MknNQD1WHLGGraFi6zcbGevuAgkVfdyCdtZnQTGWVVvR5Q",
        "cryptosuite": "eddsa-rdfc-2022",
        "proofPurpose": "assertionMethod",
        "proofValue": "z2cP796BFLABuyBhXBGesdnC9q3AudnGuyREghuBqW7PQ9TD8otiAPgQThKcp4evfBeYfjU9jf9FfGSDiCxhTFJ3"
    }
}
```

</details>

[rawURL](https://digitalcredentials.github.io/vc-test-fixtures/verifiableCredentials/v1/dataIntegrityProof/didKey/legacyRegistry-noStatus-noExpiry-OBSpecExample.json)

[Open Directly in VerifierPlus](https://verifierplus.org/#verify?vc=https://digitalcredentials.github.io/vc-test-fixtures/verifiableCredentials/v1/dataIntegrityProof/didKey/legacyRegistry-noStatus-noExpiry-OBSpecExample.json)

![QR](verifiableCredentials/v1/dataIntegrityProof/didKey/legacyRegistry-noStatus-noExpiry-OBSpecExample.png)

### /v1/dataIntegrityProof/didKey/legacyRegistry-noStatus-noExpiry-oldDCCExample.json

<details>

<summary>Click to see copyable raw json</summary>

```json
   {
    "@context": [
        "https://www.w3.org/2018/credentials/v1",
        "https://w3id.org/security/suites/ed25519-2020/v1",
        "https://w3id.org/dcc/v1",
        "https://w3id.org/security/data-integrity/v2"
    ],
    "id": "urn:uuid:09u09audf0sudf",
    "type": [
        "VerifiableCredential"
    ],
    "issuer": {
        "name": "Your friendly issuer.",
        "id": "did:key:z6MknNQD1WHLGGraFi6zcbGevuAgkVfdyCdtZnQTGWVVvR5Q"
    },
    "issuanceDate": "2021-09-06T00:00:00.000Z",
    "credentialSubject": {
        "name": "Ya Ya Na",
        "hasCredential": {
            "name": "GT Guide"
        }
    },
    "proof": {
        "type": "DataIntegrityProof",
        "created": "2025-12-08T15:05:02Z",
        "verificationMethod": "did:key:z6MknNQD1WHLGGraFi6zcbGevuAgkVfdyCdtZnQTGWVVvR5Q#z6MknNQD1WHLGGraFi6zcbGevuAgkVfdyCdtZnQTGWVVvR5Q",
        "cryptosuite": "eddsa-rdfc-2022",
        "proofPurpose": "assertionMethod",
        "proofValue": "z5r4R4D9yDXfcoFpkpYn7viHLUZUC3cXRB15d3chM7D6ZeD528PHipkPnNqUSek4LfwWtnFrBi96UjzfP11S3pPSi"
    }
}
```

</details>

[rawURL](https://digitalcredentials.github.io/vc-test-fixtures/verifiableCredentials/v1/dataIntegrityProof/didKey/legacyRegistry-noStatus-noExpiry-oldDCCExample.json)

[Open Directly in VerifierPlus](https://verifierplus.org/#verify?vc=https://digitalcredentials.github.io/vc-test-fixtures/verifiableCredentials/v1/dataIntegrityProof/didKey/legacyRegistry-noStatus-noExpiry-oldDCCExample.json)

![QR](verifiableCredentials/v1/dataIntegrityProof/didKey/legacyRegistry-noStatus-noExpiry-oldDCCExample.png)

### /v1/dataIntegrityProof/didKey/mixedRegistry-validStatus-noExpiry.json

<details>

<summary>Click to see copyable raw json</summary>

```json
   {
    "type": [
        "VerifiableCredential",
        "OpenBadgeCredential"
    ],
    "name": "Taylor Tuna - Mock Bachelor of Science Degree in Biology",
    "issuer": {
        "url": "https://web.mit.edu/",
        "type": "Profile",
        "name": "Massachusetts Institute of Technology",
        "image": {
            "id": "https://github.com/digitalcredentials/test-files/assets/206059/01eca9f5-a508-40ac-9dd5-c12d11308894",
            "type": "Image"
        },
        "id": "did:key:z6Mki7DqKQswPsjqMVhP4W3n2ABFb5wBegZC5erEVg5qcgEw"
    },
    "@context": [
        "https://www.w3.org/2018/credentials/v1",
        "https://purl.imsglobal.org/spec/ob/v3p0/context-3.0.1.json",
        "https://www.w3.org/ns/credentials/status/v1",
        "https://w3id.org/security/suites/ed25519-2020/v1",
        "https://w3id.org/security/data-integrity/v2"
    ],
    "credentialSubject": {
        "type": [
            "AchievementSubject"
        ],
        "name": "Taylor Tuna",
        "achievement": {
            "id": "urn:uuid:951b475e-b795-43bc-ba8f-a2d01efd2eb1",
            "type": [
                "Achievement"
            ],
            "name": "Mock Bachelor of Science in Biology",
            "criteria": {
                "type": "Criteria",
                "narrative": "In Recognition of proficiency in the general and the special studies and exercises prescribed by said institution for such mock degree given this day under the seal of the Institute at Cambridge in the Commonwealth of Massachusetts"
            },
            "description": "Massachusetts Institute of Technology Mock Bachelor of Science in Computer Science",
            "fieldOfStudy": "Biology",
            "achievementType": "BachelorDegree"
        }
    },
    "id": "urn:uuid:677fe54fcacf98774d482bcc",
    "credentialStatus": {
        "id": "https://digitalcredentials.github.io/vc-test-fixtures/statusLists/didkey-ed25519Signature2020/e5WK8CbZ1GjycuPombrj#7",
        "type": "BitstringStatusListEntry",
        "statusPurpose": "revocation",
        "statusListCredential": "https://digitalcredentials.github.io/vc-test-fixtures/statusLists/didkey-ed25519Signature2020/e5WK8CbZ1GjycuPombrj",
        "statusListIndex": "7"
    },
    "issuanceDate": "2025-01-09T15:06:31Z",
    "proof": {
        "type": "DataIntegrityProof",
        "created": "2025-05-09T16:40:36Z",
        "verificationMethod": "did:key:z6Mki7DqKQswPsjqMVhP4W3n2ABFb5wBegZC5erEVg5qcgEw#z6Mki7DqKQswPsjqMVhP4W3n2ABFb5wBegZC5erEVg5qcgEw",
        "cryptosuite": "eddsa-rdfc-2022",
        "proofPurpose": "assertionMethod",
        "proofValue": "z5UAxAePAFWxqkGmnoYB5AMhg1myXaRRxD42p2nZp4Pz7dRcePH784iMsXG8vAKc8fHLMi2ZWKbjeZhGZcveqKdhq"
    }
}
```

</details>

[rawURL](https://digitalcredentials.github.io/vc-test-fixtures/verifiableCredentials/v1/dataIntegrityProof/didKey/mixedRegistry-validStatus-noExpiry.json)

[Open Directly in VerifierPlus](https://verifierplus.org/#verify?vc=https://digitalcredentials.github.io/vc-test-fixtures/verifiableCredentials/v1/dataIntegrityProof/didKey/mixedRegistry-validStatus-noExpiry.json)

![QR](verifiableCredentials/v1/dataIntegrityProof/didKey/mixedRegistry-validStatus-noExpiry.png)

### /v1/dataIntegrityProof/didKey/noRegistry-noStatus-noExpiry.json

<details>

<summary>Click to see copyable raw json</summary>

```json
   {
    "@context": [
        "https://www.w3.org/2018/credentials/v1",
        "https://purl.imsglobal.org/spec/ob/v3p0/context-3.0.3.json",
        "https://w3id.org/security/data-integrity/v2"
    ],
    "id": "urn:uuid:2fe53dc9-b2ec-4939-9b2c-0d00f6663b6c",
    "issuanceDate": "2025-01-09T15:06:31Z",
    "type": [
        "VerifiableCredential",
        "OpenBadgeCredential"
    ],
    "name": "DCC Test Credential",
    "issuer": {
        "type": [
            "Profile"
        ],
        "id": "did:key:z6MkqBcwQ7qnRBRpgtsJQviLFeYxExMUE2k9nwKkMTF3DdRZ",
        "name": "Digital Credentials Consortium Test Issuer",
        "url": "https://dcconsortium.org",
        "image": "https://user-images.githubusercontent.com/752326/230469660-8f80d264-eccf-4edd-8e50-ea634d407778.png"
    },
    "credentialSubject": {
        "type": [
            "AchievementSubject"
        ],
        "achievement": {
            "id": "urn:uuid:bd6d9316-f7ae-4073-a1e5-2f7f5bd22922",
            "type": [
                "Achievement"
            ],
            "achievementType": "Diploma",
            "name": "Badge",
            "description": "This is a sample credential issued by the Digital Credentials Consortium to demonstrate the functionality of Verifiable Credentials for wallets and verifiers.",
            "criteria": {
                "type": "Criteria",
                "narrative": "This credential was issued to a student that demonstrated proficiency in the Python programming language that occurred from **February 17, 2023** to **June 12, 2023**."
            },
            "image": {
                "id": "https://user-images.githubusercontent.com/752326/214947713-15826a3a-b5ac-4fba-8d4a-884b60cb7157.png",
                "type": "Image"
            }
        },
        "name": "Jane Doe"
    },
    "proof": {
        "type": "DataIntegrityProof",
        "created": "2025-05-12T15:17:48Z",
        "verificationMethod": "did:key:z6MkqBcwQ7qnRBRpgtsJQviLFeYxExMUE2k9nwKkMTF3DdRZ#z6MkqBcwQ7qnRBRpgtsJQviLFeYxExMUE2k9nwKkMTF3DdRZ",
        "cryptosuite": "eddsa-rdfc-2022",
        "proofPurpose": "assertionMethod",
        "proofValue": "z39CLEiF3NKZU4qgkL7rnEmrfZQgn6PzdYbfizNx5ax58QaZCCPLjAtsuAjmCLqhMeQ6mScnfv7y74W1fj7dUte1e"
    }
}
```

</details>

[rawURL](https://digitalcredentials.github.io/vc-test-fixtures/verifiableCredentials/v1/dataIntegrityProof/didKey/noRegistry-noStatus-noExpiry.json)

[Open Directly in VerifierPlus](https://verifierplus.org/#verify?vc=https://digitalcredentials.github.io/vc-test-fixtures/verifiableCredentials/v1/dataIntegrityProof/didKey/noRegistry-noStatus-noExpiry.json)

![QR](verifiableCredentials/v1/dataIntegrityProof/didKey/noRegistry-noStatus-noExpiry.png)

### /v1/dataIntegrityProof/didKey/oidf-noStatus-expired.json

<details>

<summary>Click to see copyable raw json</summary>

```json
   {
    "@context": [
        "https://www.w3.org/2018/credentials/v1",
        "https://purl.imsglobal.org/spec/ob/v3p0/context-3.0.3.json",
        "https://w3id.org/security/data-integrity/v2"
    ],
    "id": "urn:uuid:2fe53dc9-b2ec-4939-9b2c-0d00f6663b6c",
    "issuanceDate": "2025-01-09T15:06:31Z",
    "expirationDate": "2025-01-09T16:23:24Z",
    "type": [
        "VerifiableCredential",
        "OpenBadgeCredential"
    ],
    "name": "DCC Test Credential",
    "issuer": {
        "type": [
            "Profile"
        ],
        "id": "did:key:z6MkjoriXdbyWD25YXTed114F8hdJrLXQ567xxPHAUKxpKkS",
        "name": "Digital Credentials Consortium Test Issuer",
        "url": "https://dcconsortium.org",
        "image": "https://user-images.githubusercontent.com/752326/230469660-8f80d264-eccf-4edd-8e50-ea634d407778.png"
    },
    "credentialSubject": {
        "type": [
            "AchievementSubject"
        ],
        "achievement": {
            "id": "urn:uuid:bd6d9316-f7ae-4073-a1e5-2f7f5bd22922",
            "type": [
                "Achievement"
            ],
            "achievementType": "Diploma",
            "name": "Badge",
            "description": "This is a sample credential issued by the Digital Credentials Consortium to demonstrate the functionality of Verifiable Credentials for wallets and verifiers.",
            "criteria": {
                "type": "Criteria",
                "narrative": "This credential was issued to a student that demonstrated proficiency in the Python programming language that occurred from **February 17, 2023** to **June 12, 2023**."
            },
            "image": {
                "id": "https://user-images.githubusercontent.com/752326/214947713-15826a3a-b5ac-4fba-8d4a-884b60cb7157.png",
                "type": "Image"
            }
        },
        "name": "Jane Doe"
    },
    "proof": {
        "type": "DataIntegrityProof",
        "created": "2025-05-12T14:12:31Z",
        "verificationMethod": "did:key:z6MkjoriXdbyWD25YXTed114F8hdJrLXQ567xxPHAUKxpKkS#z6MkjoriXdbyWD25YXTed114F8hdJrLXQ567xxPHAUKxpKkS",
        "cryptosuite": "eddsa-rdfc-2022",
        "proofPurpose": "assertionMethod",
        "proofValue": "z4zFQp8kkLiAKQ8iL8Rg35RtLY1gW4CukKms1Y676J8UmGfraRziC4xP1MDyvgjZwBEqkZuyFbD9JpgKJg7KHYiPn"
    }
}
```

</details>

[rawURL](https://digitalcredentials.github.io/vc-test-fixtures/verifiableCredentials/v1/dataIntegrityProof/didKey/oidf-noStatus-expired.json)

[Open Directly in VerifierPlus](https://verifierplus.org/#verify?vc=https://digitalcredentials.github.io/vc-test-fixtures/verifiableCredentials/v1/dataIntegrityProof/didKey/oidf-noStatus-expired.json)

![QR](verifiableCredentials/v1/dataIntegrityProof/didKey/oidf-noStatus-expired.png)

### /v1/dataIntegrityProof/didKey/oidf-noStatus-noExpiry.json

<details>

<summary>Click to see copyable raw json</summary>

```json
   {
    "@context": [
        "https://www.w3.org/2018/credentials/v1",
        "https://purl.imsglobal.org/spec/ob/v3p0/context-3.0.3.json",
        "https://w3id.org/security/data-integrity/v2"
    ],
    "id": "urn:uuid:2fe53dc9-b2ec-4939-9b2c-0d00f6663b6c",
    "issuanceDate": "2025-01-09T15:06:31Z",
    "type": [
        "VerifiableCredential",
        "OpenBadgeCredential"
    ],
    "name": "DCC Test Credential",
    "issuer": {
        "type": [
            "Profile"
        ],
        "id": "did:key:z6MkjoriXdbyWD25YXTed114F8hdJrLXQ567xxPHAUKxpKkS",
        "name": "Digital Credentials Consortium Test Issuer",
        "url": "https://dcconsortium.org",
        "image": "https://user-images.githubusercontent.com/752326/230469660-8f80d264-eccf-4edd-8e50-ea634d407778.png"
    },
    "credentialSubject": {
        "type": [
            "AchievementSubject"
        ],
        "achievement": {
            "id": "urn:uuid:bd6d9316-f7ae-4073-a1e5-2f7f5bd22922",
            "type": [
                "Achievement"
            ],
            "achievementType": "Diploma",
            "name": "Badge",
            "description": "This is a sample credential issued by the Digital Credentials Consortium to demonstrate the functionality of Verifiable Credentials for wallets and verifiers.",
            "criteria": {
                "type": "Criteria",
                "narrative": "This credential was issued to a student that demonstrated proficiency in the Python programming language that occurred from **February 17, 2023** to **June 12, 2023**."
            },
            "image": {
                "id": "https://user-images.githubusercontent.com/752326/214947713-15826a3a-b5ac-4fba-8d4a-884b60cb7157.png",
                "type": "Image"
            }
        },
        "name": "Jane Doe"
    },
    "proof": {
        "type": "DataIntegrityProof",
        "created": "2025-05-07T19:26:54Z",
        "verificationMethod": "did:key:z6MkjoriXdbyWD25YXTed114F8hdJrLXQ567xxPHAUKxpKkS#z6MkjoriXdbyWD25YXTed114F8hdJrLXQ567xxPHAUKxpKkS",
        "cryptosuite": "eddsa-rdfc-2022",
        "proofPurpose": "assertionMethod",
        "proofValue": "z4S6N4STsyhkuQ54WwPQ8Zj19fQbnoTGjTHpUVwCjNwznX8z35wkqiuU3r2jWetSXXVtNovuT7drfM3rhZv4ef3LR"
    }
}
```

</details>

[rawURL](https://digitalcredentials.github.io/vc-test-fixtures/verifiableCredentials/v1/dataIntegrityProof/didKey/oidf-noStatus-noExpiry.json)

[Open Directly in VerifierPlus](https://verifierplus.org/#verify?vc=https://digitalcredentials.github.io/vc-test-fixtures/verifiableCredentials/v1/dataIntegrityProof/didKey/oidf-noStatus-noExpiry.json)

![QR](verifiableCredentials/v1/dataIntegrityProof/didKey/oidf-noStatus-noExpiry.png)

### /v1/dataIntegrityProof/didKey/oidf-revokedStatus-expired.json

<details>

<summary>Click to see copyable raw json</summary>

```json
   {
    "type": [
        "VerifiableCredential",
        "OpenBadgeCredential"
    ],
    "name": "Taylor Tuna - Mock Bachelor of Science Degree in Biology",
    "issuanceDate": "2025-01-09T15:06:31Z",
    "expirationDate": "2025-01-09T16:23:24Z",
    "issuer": {
        "url": "https://web.mit.edu/",
        "type": "Profile",
        "name": "Massachusetts Institute of Technology",
        "image": {
            "id": "https://github.com/digitalcredentials/test-files/assets/206059/01eca9f5-a508-40ac-9dd5-c12d11308894",
            "type": "Image"
        },
        "id": "did:key:z6MkjoriXdbyWD25YXTed114F8hdJrLXQ567xxPHAUKxpKkS"
    },
    "@context": [
        "https://www.w3.org/2018/credentials/v1",
        "https://purl.imsglobal.org/spec/ob/v3p0/context-3.0.1.json",
        "https://www.w3.org/ns/credentials/status/v1",
        "https://w3id.org/security/suites/ed25519-2020/v1",
        "https://w3id.org/security/data-integrity/v2"
    ],
    "credentialSubject": {
        "type": [
            "AchievementSubject"
        ],
        "name": "Taylor Tuna",
        "achievement": {
            "id": "urn:uuid:951b475e-b795-43bc-ba8f-a2d01efd2eb1",
            "type": [
                "Achievement"
            ],
            "name": "Mock Bachelor of Science in Biology",
            "criteria": {
                "type": "Criteria",
                "narrative": "In Recognition of proficiency in the general and the special studies and exercises prescribed by said institution for such mock degree given this day under the seal of the Institute at Cambridge in the Commonwealth of Massachusetts"
            },
            "description": "Massachusetts Institute of Technology Mock Bachelor of Science in Computer Science",
            "fieldOfStudy": "Biology",
            "achievementType": "BachelorDegree"
        }
    },
    "id": "urn:uuid:677fe54fcacf98774d482bcc",
    "credentialStatus": {
        "id": "https://digitalcredentials.github.io/vc-test-fixtures/statusLists/didkey-ed25519Signature2020/e5WK8CbZ1GjycuPombrj#6",
        "type": "BitstringStatusListEntry",
        "statusPurpose": "revocation",
        "statusListCredential": "https://digitalcredentials.github.io/vc-test-fixtures/statusLists/didkey-ed25519Signature2020/e5WK8CbZ1GjycuPombrj",
        "statusListIndex": "6"
    },
    "proof": {
        "type": "DataIntegrityProof",
        "created": "2025-05-12T15:09:29Z",
        "verificationMethod": "did:key:z6MkjoriXdbyWD25YXTed114F8hdJrLXQ567xxPHAUKxpKkS#z6MkjoriXdbyWD25YXTed114F8hdJrLXQ567xxPHAUKxpKkS",
        "cryptosuite": "eddsa-rdfc-2022",
        "proofPurpose": "assertionMethod",
        "proofValue": "z2g7RjtHoiyNfrazmN1ojU9Z5mRNy75JT1uYCeT5FBHLhtwimrSfmxd6WceqbexRoQbZyxWu26ULL4bXeUxEBpKhU"
    }
}
```

</details>

[rawURL](https://digitalcredentials.github.io/vc-test-fixtures/verifiableCredentials/v1/dataIntegrityProof/didKey/oidf-revokedStatus-expired.json)

[Open Directly in VerifierPlus](https://verifierplus.org/#verify?vc=https://digitalcredentials.github.io/vc-test-fixtures/verifiableCredentials/v1/dataIntegrityProof/didKey/oidf-revokedStatus-expired.json)

![QR](verifiableCredentials/v1/dataIntegrityProof/didKey/oidf-revokedStatus-expired.png)

### /v1/dataIntegrityProof/didWeb/legacy-noStatus-noExpiry.json

<details>

<summary>Click to see copyable raw json</summary>

```json
   {
    "@context": [
        "https://www.w3.org/2018/credentials/v1",
        "https://purl.imsglobal.org/spec/ob/v3p0/context-3.0.3.json",
        "https://w3id.org/security/data-integrity/v2"
    ],
    "id": "urn:uuid:2fe53dc9-b2ec-4939-9b2c-0d00f6663b6c",
    "issuanceDate": "2025-01-09T15:06:31Z",
    "type": [
        "VerifiableCredential",
        "OpenBadgeCredential"
    ],
    "name": "DCC Test Credential",
    "issuer": {
        "type": [
            "Profile"
        ],
        "id": "did:web:digitalcredentials.github.io:vc-test-fixtures:dids:legacy",
        "name": "Digital Credentials Consortium Test Issuer",
        "url": "https://dcconsortium.org",
        "image": "https://user-images.githubusercontent.com/752326/230469660-8f80d264-eccf-4edd-8e50-ea634d407778.png"
    },
    "credentialSubject": {
        "type": [
            "AchievementSubject"
        ],
        "achievement": {
            "id": "urn:uuid:bd6d9316-f7ae-4073-a1e5-2f7f5bd22922",
            "type": [
                "Achievement"
            ],
            "achievementType": "Diploma",
            "name": "Badge",
            "description": "This is a sample credential issued by the Digital Credentials Consortium to demonstrate the functionality of Verifiable Credentials for wallets and verifiers.",
            "criteria": {
                "type": "Criteria",
                "narrative": "This credential was issued to a student that demonstrated proficiency in the Python programming language that occurred from **February 17, 2023** to **June 12, 2023**."
            },
            "image": {
                "id": "https://user-images.githubusercontent.com/752326/214947713-15826a3a-b5ac-4fba-8d4a-884b60cb7157.png",
                "type": "Image"
            }
        },
        "name": "Jane Doe"
    },
    "proof": {
        "type": "DataIntegrityProof",
        "created": "2025-05-08T17:00:29Z",
        "verificationMethod": "did:web:digitalcredentials.github.io:vc-test-fixtures:dids:legacy#z6MkjXe1vZvPRqFuc9nRBtZ3e1Y9XKDFSbjFAfzLfW2bD6cZ",
        "cryptosuite": "eddsa-rdfc-2022",
        "proofPurpose": "assertionMethod",
        "proofValue": "z3zXLbsAZ9wGo9sxfSgQ6ipTm1VUniUodJuUmEMM1R3yJbJfz5jRc9C2JGyTFtVNp5u6SkrYfV3AJsDk6N8nWFzMV"
    }
}
```

</details>

[rawURL](https://digitalcredentials.github.io/vc-test-fixtures/verifiableCredentials/v1/dataIntegrityProof/didWeb/legacy-noStatus-noExpiry.json)

[Open Directly in VerifierPlus](https://verifierplus.org/#verify?vc=https://digitalcredentials.github.io/vc-test-fixtures/verifiableCredentials/v1/dataIntegrityProof/didWeb/legacy-noStatus-noExpiry.json)

![QR](verifiableCredentials/v1/dataIntegrityProof/didWeb/legacy-noStatus-noExpiry.png)

### /v1/dataIntegrityProof/didWeb/legacy-revokedStatus-noExpiry.json

<details>

<summary>Click to see copyable raw json</summary>

```json
   {
    "type": [
        "VerifiableCredential",
        "OpenBadgeCredential"
    ],
    "name": "Taylor Tuna - Mock Bachelor of Science Degree in Biology",
    "issuer": {
        "url": "https://web.mit.edu/",
        "type": "Profile",
        "name": "Massachusetts Institute of Technology",
        "image": {
            "id": "https://github.com/digitalcredentials/test-files/assets/206059/01eca9f5-a508-40ac-9dd5-c12d11308894",
            "type": "Image"
        },
        "id": "did:web:digitalcredentials.github.io:vc-test-fixtures:dids:legacy"
    },
    "@context": [
        "https://www.w3.org/2018/credentials/v1",
        "https://purl.imsglobal.org/spec/ob/v3p0/context-3.0.1.json",
        "https://www.w3.org/ns/credentials/status/v1",
        "https://w3id.org/security/suites/ed25519-2020/v1",
        "https://w3id.org/security/data-integrity/v2"
    ],
    "credentialSubject": {
        "type": [
            "AchievementSubject"
        ],
        "name": "Taylor Tuna",
        "achievement": {
            "id": "urn:uuid:951b475e-b795-43bc-ba8f-a2d01efd2eb1",
            "type": [
                "Achievement"
            ],
            "name": "Mock Bachelor of Science in Biology",
            "criteria": {
                "type": "Criteria",
                "narrative": "In Recognition of proficiency in the general and the special studies and exercises prescribed by said institution for such mock degree given this day under the seal of the Institute at Cambridge in the Commonwealth of Massachusetts"
            },
            "description": "Massachusetts Institute of Technology Mock Bachelor of Science in Computer Science",
            "fieldOfStudy": "Biology",
            "achievementType": "BachelorDegree"
        }
    },
    "id": "urn:uuid:677fe54fcacf98774d482bcc",
    "credentialStatus": {
        "id": "https://digitalcredentials.github.io/vc-test-fixtures/statusLists/didkey-ed25519Signature2020/e5WK8CbZ1GjycuPombrj#6",
        "type": "BitstringStatusListEntry",
        "statusPurpose": "revocation",
        "statusListCredential": "https://digitalcredentials.github.io/vc-test-fixtures/statusLists/didkey-ed25519Signature2020/e5WK8CbZ1GjycuPombrj",
        "statusListIndex": "6"
    },
    "issuanceDate": "2025-01-09T15:06:31Z",
    "proof": {
        "type": "DataIntegrityProof",
        "created": "2025-05-09T12:00:41Z",
        "verificationMethod": "did:web:digitalcredentials.github.io:vc-test-fixtures:dids:legacy#z6MkjXe1vZvPRqFuc9nRBtZ3e1Y9XKDFSbjFAfzLfW2bD6cZ",
        "cryptosuite": "eddsa-rdfc-2022",
        "proofPurpose": "assertionMethod",
        "proofValue": "z5Pd6v5X3cBKRt51WwN6psnPsZe6Qmnnh8ZN4ZicPSHvRo7nyens1TnH8RfBLWraVaTKxNiwo6XZzyZnz8xYT66FT"
    }
}
```

</details>

[rawURL](https://digitalcredentials.github.io/vc-test-fixtures/verifiableCredentials/v1/dataIntegrityProof/didWeb/legacy-revokedStatus-noExpiry.json)

[Open Directly in VerifierPlus](https://verifierplus.org/#verify?vc=https://digitalcredentials.github.io/vc-test-fixtures/verifiableCredentials/v1/dataIntegrityProof/didWeb/legacy-revokedStatus-noExpiry.json)

![QR](verifiableCredentials/v1/dataIntegrityProof/didWeb/legacy-revokedStatus-noExpiry.png)

### /v1/dataIntegrityProof/didWeb/legacy-validStatus-noExpiry.json

<details>

<summary>Click to see copyable raw json</summary>

```json
   {
    "type": [
        "VerifiableCredential",
        "OpenBadgeCredential"
    ],
    "name": "Taylor Tuna - Mock Bachelor of Science Degree in Biology",
    "issuer": {
        "url": "https://web.mit.edu/",
        "type": "Profile",
        "name": "Massachusetts Institute of Technology",
        "image": {
            "id": "https://github.com/digitalcredentials/test-files/assets/206059/01eca9f5-a508-40ac-9dd5-c12d11308894",
            "type": "Image"
        },
        "id": "did:web:digitalcredentials.github.io:vc-test-fixtures:dids:legacy"
    },
    "@context": [
        "https://www.w3.org/2018/credentials/v1",
        "https://purl.imsglobal.org/spec/ob/v3p0/context-3.0.1.json",
        "https://www.w3.org/ns/credentials/status/v1",
        "https://w3id.org/security/suites/ed25519-2020/v1",
        "https://w3id.org/security/data-integrity/v2"
    ],
    "credentialSubject": {
        "type": [
            "AchievementSubject"
        ],
        "name": "Taylor Tuna",
        "achievement": {
            "id": "urn:uuid:951b475e-b795-43bc-ba8f-a2d01efd2eb1",
            "type": [
                "Achievement"
            ],
            "name": "Mock Bachelor of Science in Biology",
            "criteria": {
                "type": "Criteria",
                "narrative": "In Recognition of proficiency in the general and the special studies and exercises prescribed by said institution for such mock degree given this day under the seal of the Institute at Cambridge in the Commonwealth of Massachusetts"
            },
            "description": "Massachusetts Institute of Technology Mock Bachelor of Science in Computer Science",
            "fieldOfStudy": "Biology",
            "achievementType": "BachelorDegree"
        }
    },
    "id": "urn:uuid:677fe54fcacf98774d482bcc",
    "credentialStatus": {
        "id": "https://digitalcredentials.github.io/vc-test-fixtures/statusLists/didkey-ed25519Signature2020/e5WK8CbZ1GjycuPombrj#7",
        "type": "BitstringStatusListEntry",
        "statusPurpose": "revocation",
        "statusListCredential": "https://digitalcredentials.github.io/vc-test-fixtures/statusLists/didkey-ed25519Signature2020/e5WK8CbZ1GjycuPombrj",
        "statusListIndex": "7"
    },
    "issuanceDate": "2025-01-09T15:06:31Z",
    "proof": {
        "type": "DataIntegrityProof",
        "created": "2025-05-08T17:47:23Z",
        "verificationMethod": "did:web:digitalcredentials.github.io:vc-test-fixtures:dids:legacy#z6MkjXe1vZvPRqFuc9nRBtZ3e1Y9XKDFSbjFAfzLfW2bD6cZ",
        "cryptosuite": "eddsa-rdfc-2022",
        "proofPurpose": "assertionMethod",
        "proofValue": "z2EiLBxJSZCvbBFMcp4W16YDx3TWe8c32U9RGTy48rbF3QwFayGcEp1DcAP4uuwrAdbrwuDVjzQ52Ct4VBL4QDftt"
    }
}
```

</details>

[rawURL](https://digitalcredentials.github.io/vc-test-fixtures/verifiableCredentials/v1/dataIntegrityProof/didWeb/legacy-validStatus-noExpiry.json)

[Open Directly in VerifierPlus](https://verifierplus.org/#verify?vc=https://digitalcredentials.github.io/vc-test-fixtures/verifiableCredentials/v1/dataIntegrityProof/didWeb/legacy-validStatus-noExpiry.json)

![QR](verifiableCredentials/v1/dataIntegrityProof/didWeb/legacy-validStatus-noExpiry.png)

### /v1/dataIntegrityProof/didWeb/oidf-noStatus-noExpiry.json

<details>

<summary>Click to see copyable raw json</summary>

```json
   {
    "@context": [
        "https://www.w3.org/2018/credentials/v1",
        "https://purl.imsglobal.org/spec/ob/v3p0/context-3.0.3.json",
        "https://w3id.org/security/data-integrity/v2"
    ],
    "id": "urn:uuid:2fe53dc9-b2ec-4939-9b2c-0d00f6663b6c",
    "issuanceDate": "2025-01-09T15:06:31Z",
    "type": [
        "VerifiableCredential",
        "OpenBadgeCredential"
    ],
    "name": "DCC Test Credential",
    "issuer": {
        "type": [
            "Profile"
        ],
        "id": "did:web:digitalcredentials.github.io:vc-test-fixtures:dids:oidf",
        "name": "Digital Credentials Consortium Test Issuer",
        "url": "https://dcconsortium.org",
        "image": "https://user-images.githubusercontent.com/752326/230469660-8f80d264-eccf-4edd-8e50-ea634d407778.png"
    },
    "credentialSubject": {
        "type": [
            "AchievementSubject"
        ],
        "achievement": {
            "id": "urn:uuid:bd6d9316-f7ae-4073-a1e5-2f7f5bd22922",
            "type": [
                "Achievement"
            ],
            "achievementType": "Diploma",
            "name": "Badge",
            "description": "This is a sample credential issued by the Digital Credentials Consortium to demonstrate the functionality of Verifiable Credentials for wallets and verifiers.",
            "criteria": {
                "type": "Criteria",
                "narrative": "This credential was issued to a student that demonstrated proficiency in the Python programming language that occurred from **February 17, 2023** to **June 12, 2023**."
            },
            "image": {
                "id": "https://user-images.githubusercontent.com/752326/214947713-15826a3a-b5ac-4fba-8d4a-884b60cb7157.png",
                "type": "Image"
            }
        },
        "name": "Jane Doe"
    },
    "proof": {
        "type": "DataIntegrityProof",
        "created": "2025-05-08T16:59:31Z",
        "verificationMethod": "did:web:digitalcredentials.github.io:vc-test-fixtures:dids:oidf#z6MkjXe1vZvPRqFuc9nRBtZ3e1Y9XKDFSbjFAfzLfW2bD6cZ",
        "cryptosuite": "eddsa-rdfc-2022",
        "proofPurpose": "assertionMethod",
        "proofValue": "zYxU6tRXiQP6er2VVuUfT8nWXkwCmC372thaydAtWv1Zwvs81YXTSb8GHiSS6Wt2uACWAxUkyAQF81pWVxNDmKP5"
    }
}
```

</details>

[rawURL](https://digitalcredentials.github.io/vc-test-fixtures/verifiableCredentials/v1/dataIntegrityProof/didWeb/oidf-noStatus-noExpiry.json)

[Open Directly in VerifierPlus](https://verifierplus.org/#verify?vc=https://digitalcredentials.github.io/vc-test-fixtures/verifiableCredentials/v1/dataIntegrityProof/didWeb/oidf-noStatus-noExpiry.json)

![QR](verifiableCredentials/v1/dataIntegrityProof/didWeb/oidf-noStatus-noExpiry.png)

### /v1/dataIntegrityProof/didWeb/oidf-revokedStatus-noExpiry.json

<details>

<summary>Click to see copyable raw json</summary>

```json
   {
    "type": [
        "VerifiableCredential",
        "OpenBadgeCredential"
    ],
    "name": "Taylor Tuna - Mock Bachelor of Science Degree in Biology",
    "issuer": {
        "url": "https://web.mit.edu/",
        "type": "Profile",
        "name": "Massachusetts Institute of Technology",
        "image": {
            "id": "https://github.com/digitalcredentials/test-files/assets/206059/01eca9f5-a508-40ac-9dd5-c12d11308894",
            "type": "Image"
        },
        "id": "did:web:digitalcredentials.github.io:vc-test-fixtures:dids:oidf"
    },
    "@context": [
        "https://www.w3.org/2018/credentials/v1",
        "https://purl.imsglobal.org/spec/ob/v3p0/context-3.0.1.json",
        "https://www.w3.org/ns/credentials/status/v1",
        "https://w3id.org/security/suites/ed25519-2020/v1",
        "https://w3id.org/security/data-integrity/v2"
    ],
    "credentialSubject": {
        "type": [
            "AchievementSubject"
        ],
        "name": "Taylor Tuna",
        "achievement": {
            "id": "urn:uuid:951b475e-b795-43bc-ba8f-a2d01efd2eb1",
            "type": [
                "Achievement"
            ],
            "name": "Mock Bachelor of Science in Biology",
            "criteria": {
                "type": "Criteria",
                "narrative": "In Recognition of proficiency in the general and the special studies and exercises prescribed by said institution for such mock degree given this day under the seal of the Institute at Cambridge in the Commonwealth of Massachusetts"
            },
            "description": "Massachusetts Institute of Technology Mock Bachelor of Science in Computer Science",
            "fieldOfStudy": "Biology",
            "achievementType": "BachelorDegree"
        }
    },
    "id": "urn:uuid:677fe54fcacf98774d482bcc",
    "credentialStatus": {
        "id": "https://digitalcredentials.github.io/vc-test-fixtures/statusLists/didkey-ed25519Signature2020/e5WK8CbZ1GjycuPombrj#6",
        "type": "BitstringStatusListEntry",
        "statusPurpose": "revocation",
        "statusListCredential": "https://digitalcredentials.github.io/vc-test-fixtures/statusLists/didkey-ed25519Signature2020/e5WK8CbZ1GjycuPombrj",
        "statusListIndex": "6"
    },
    "issuanceDate": "2025-01-09T15:06:31Z",
    "proof": {
        "type": "DataIntegrityProof",
        "created": "2025-05-09T12:20:59Z",
        "verificationMethod": "did:web:digitalcredentials.github.io:vc-test-fixtures:dids:oidf#z6MkjXe1vZvPRqFuc9nRBtZ3e1Y9XKDFSbjFAfzLfW2bD6cZ",
        "cryptosuite": "eddsa-rdfc-2022",
        "proofPurpose": "assertionMethod",
        "proofValue": "z2QuxJZehPReHoMwiTyuYvVYjTt9TLHhYuQq5xLeV4Hedrs4NPrvYef1UaxnAQYaHUL2TQNgc7fzXzhBbdR49XPJD"
    }
}
```

</details>

[rawURL](https://digitalcredentials.github.io/vc-test-fixtures/verifiableCredentials/v1/dataIntegrityProof/didWeb/oidf-revokedStatus-noExpiry.json)

[Open Directly in VerifierPlus](https://verifierplus.org/#verify?vc=https://digitalcredentials.github.io/vc-test-fixtures/verifiableCredentials/v1/dataIntegrityProof/didWeb/oidf-revokedStatus-noExpiry.json)

![QR](verifiableCredentials/v1/dataIntegrityProof/didWeb/oidf-revokedStatus-noExpiry.png)

### /v1/dataIntegrityProof/didWeb/oidf-validStatus-noExpiry.json

<details>

<summary>Click to see copyable raw json</summary>

```json
   {
    "type": [
        "VerifiableCredential",
        "OpenBadgeCredential"
    ],
    "name": "Taylor Tuna - Mock Bachelor of Science Degree in Biology",
    "issuer": {
        "url": "https://web.mit.edu/",
        "type": "Profile",
        "name": "Massachusetts Institute of Technology",
        "image": {
            "id": "https://github.com/digitalcredentials/test-files/assets/206059/01eca9f5-a508-40ac-9dd5-c12d11308894",
            "type": "Image"
        },
        "id": "did:web:digitalcredentials.github.io:vc-test-fixtures:dids:oidf"
    },
    "@context": [
        "https://www.w3.org/2018/credentials/v1",
        "https://purl.imsglobal.org/spec/ob/v3p0/context-3.0.1.json",
        "https://www.w3.org/ns/credentials/status/v1",
        "https://w3id.org/security/suites/ed25519-2020/v1",
        "https://w3id.org/security/data-integrity/v2"
    ],
    "credentialSubject": {
        "type": [
            "AchievementSubject"
        ],
        "name": "Taylor Tuna",
        "achievement": {
            "id": "urn:uuid:951b475e-b795-43bc-ba8f-a2d01efd2eb1",
            "type": [
                "Achievement"
            ],
            "name": "Mock Bachelor of Science in Biology",
            "criteria": {
                "type": "Criteria",
                "narrative": "In Recognition of proficiency in the general and the special studies and exercises prescribed by said institution for such mock degree given this day under the seal of the Institute at Cambridge in the Commonwealth of Massachusetts"
            },
            "description": "Massachusetts Institute of Technology Mock Bachelor of Science in Computer Science",
            "fieldOfStudy": "Biology",
            "achievementType": "BachelorDegree"
        }
    },
    "id": "urn:uuid:677fe54fcacf98774d482bcc",
    "credentialStatus": {
        "id": "https://digitalcredentials.github.io/vc-test-fixtures/statusLists/didkey-ed25519Signature2020/e5WK8CbZ1GjycuPombrj#7",
        "type": "BitstringStatusListEntry",
        "statusPurpose": "revocation",
        "statusListCredential": "https://digitalcredentials.github.io/vc-test-fixtures/statusLists/didkey-ed25519Signature2020/e5WK8CbZ1GjycuPombrj",
        "statusListIndex": "7"
    },
    "issuanceDate": "2025-01-09T15:06:31Z",
    "proof": {
        "type": "DataIntegrityProof",
        "created": "2025-05-08T17:45:32Z",
        "verificationMethod": "did:web:digitalcredentials.github.io:vc-test-fixtures:dids:oidf#z6MkjXe1vZvPRqFuc9nRBtZ3e1Y9XKDFSbjFAfzLfW2bD6cZ",
        "cryptosuite": "eddsa-rdfc-2022",
        "proofPurpose": "assertionMethod",
        "proofValue": "z4tkb4J2hB1omQuJ1FK5SPutKaYQRsWE87hWZjh6NNEnpUYtKmJUe3BjhgpdstWnvMDkxayCxmB441K18zDQNBKpS"
    }
}
```

</details>

[rawURL](https://digitalcredentials.github.io/vc-test-fixtures/verifiableCredentials/v1/dataIntegrityProof/didWeb/oidf-validStatus-noExpiry.json)

[Open Directly in VerifierPlus](https://verifierplus.org/#verify?vc=https://digitalcredentials.github.io/vc-test-fixtures/verifiableCredentials/v1/dataIntegrityProof/didWeb/oidf-validStatus-noExpiry.json)

![QR](verifiableCredentials/v1/dataIntegrityProof/didWeb/oidf-validStatus-noExpiry.png)

### /v1/ed25519/didKey/fourRegistry-noStatus-noExpiry.json

<details>

<summary>Click to see copyable raw json</summary>

```json
   {
    "@context": [
        "https://www.w3.org/2018/credentials/v1",
        "https://purl.imsglobal.org/spec/ob/v3p0/context-3.0.3.json",
        "https://w3id.org/security/suites/ed25519-2020/v1"
    ],
    "id": "urn:uuid:2fe53dc9-b2ec-4939-9b2c-0d00f6663b6c",
    "issuanceDate": "2025-01-09T15:06:31Z",
    "type": [
        "VerifiableCredential",
        "OpenBadgeCredential"
    ],
    "name": "DCC Test Credential",
    "issuer": {
        "type": [
            "Profile"
        ],
        "id": "did:key:z6MkuL7x2mTEoBmUuuaQ2hvEUd2YsEtmsHeX9JzqJZ8VYaVH",
        "name": "Digital Credentials Consortium Test Issuer",
        "url": "https://dcconsortium.org",
        "image": "https://user-images.githubusercontent.com/752326/230469660-8f80d264-eccf-4edd-8e50-ea634d407778.png"
    },
    "credentialSubject": {
        "type": [
            "AchievementSubject"
        ],
        "achievement": {
            "id": "urn:uuid:bd6d9316-f7ae-4073-a1e5-2f7f5bd22922",
            "type": [
                "Achievement"
            ],
            "achievementType": "Diploma",
            "name": "Badge",
            "description": "This is a sample credential issued by the Digital Credentials Consortium to demonstrate the functionality of Verifiable Credentials for wallets and verifiers.",
            "criteria": {
                "type": "Criteria",
                "narrative": "This credential was issued to a student that demonstrated proficiency in the Python programming language that occurred from **February 17, 2023** to **June 12, 2023**."
            },
            "image": {
                "id": "https://user-images.githubusercontent.com/752326/214947713-15826a3a-b5ac-4fba-8d4a-884b60cb7157.png",
                "type": "Image"
            }
        },
        "name": "Jane Doe"
    },
    "proof": {
        "type": "Ed25519Signature2020",
        "created": "2025-05-09T19:04:05Z",
        "verificationMethod": "did:key:z6MkuL7x2mTEoBmUuuaQ2hvEUd2YsEtmsHeX9JzqJZ8VYaVH#z6MkuL7x2mTEoBmUuuaQ2hvEUd2YsEtmsHeX9JzqJZ8VYaVH",
        "proofPurpose": "assertionMethod",
        "proofValue": "zrxbuGVu2HvgUt19x7vGzttYieaDKpCGJYgR38PzwtVC7hhyRPhn3cRLJ2XwZF9BWZztSit2JLE2jkqU135rhT5f"
    }
}
```

</details>

[rawURL](https://digitalcredentials.github.io/vc-test-fixtures/verifiableCredentials/v1/ed25519/didKey/fourRegistry-noStatus-noExpiry.json)

[Open Directly in VerifierPlus](https://verifierplus.org/#verify?vc=https://digitalcredentials.github.io/vc-test-fixtures/verifiableCredentials/v1/ed25519/didKey/fourRegistry-noStatus-noExpiry.json)

![QR](verifiableCredentials/v1/ed25519/didKey/fourRegistry-noStatus-noExpiry.png)

### /v1/ed25519/didKey/legacy-noStatus-expired.json

<details>

<summary>Click to see copyable raw json</summary>

```json
   {
    "@context": [
        "https://www.w3.org/2018/credentials/v1",
        "https://purl.imsglobal.org/spec/ob/v3p0/context-3.0.2.json",
        "https://w3id.org/security/suites/ed25519-2020/v1"
    ],
    "id": "urn:uuid:2fe53dc9-b2ec-4939-9b2c-0d00f6663b6c",
    "issuanceDate": "2025-01-09T15:06:31Z",
    "expirationDate": "2025-01-09T16:23:24Z",
    "type": [
        "VerifiableCredential",
        "OpenBadgeCredential"
    ],
    "name": "DCC Test Credential",
    "issuer": {
        "type": [
            "Profile"
        ],
        "id": "did:key:z6MknNQD1WHLGGraFi6zcbGevuAgkVfdyCdtZnQTGWVVvR5Q",
        "name": "Digital Credentials Consortium Test Issuer",
        "url": "https://dcconsortium.org",
        "image": "https://user-images.githubusercontent.com/752326/230469660-8f80d264-eccf-4edd-8e50-ea634d407778.png"
    },
    "credentialSubject": {
        "type": [
            "AchievementSubject"
        ],
        "achievement": {
            "id": "urn:uuid:bd6d9316-f7ae-4073-a1e5-2f7f5bd22922",
            "type": [
                "Achievement"
            ],
            "achievementType": "Diploma",
            "name": "Badge",
            "description": "This is a sample credential issued by the Digital Credentials Consortium to demonstrate the functionality of Verifiable Credentials for wallets and verifiers.",
            "criteria": {
                "type": "Criteria",
                "narrative": "This credential was issued to a student that demonstrated proficiency in the Python programming language that occurred from **February 17, 2023** to **June 12, 2023**."
            },
            "image": {
                "id": "https://user-images.githubusercontent.com/752326/214947713-15826a3a-b5ac-4fba-8d4a-884b60cb7157.png",
                "type": "Image"
            }
        },
        "name": "Jane Doe"
    },
    "proof": {
        "type": "Ed25519Signature2020",
        "created": "2025-01-09T17:56:21Z",
        "verificationMethod": "did:key:z6MknNQD1WHLGGraFi6zcbGevuAgkVfdyCdtZnQTGWVVvR5Q#z6MknNQD1WHLGGraFi6zcbGevuAgkVfdyCdtZnQTGWVVvR5Q",
        "proofPurpose": "assertionMethod",
        "proofValue": "z44bwcZ2bQftiyUGKY6L7Gmg7iYfi9k6Va15osdm3KaKVnSW2DscpAMJVSs4UBf9riYReQ8VbZRf2qCY8W1rq2k3z"
    }
}
```

</details>

[rawURL](https://digitalcredentials.github.io/vc-test-fixtures/verifiableCredentials/v1/ed25519/didKey/legacy-noStatus-expired.json)

[Open Directly in VerifierPlus](https://verifierplus.org/#verify?vc=https://digitalcredentials.github.io/vc-test-fixtures/verifiableCredentials/v1/ed25519/didKey/legacy-noStatus-expired.json)

![QR](verifiableCredentials/v1/ed25519/didKey/legacy-noStatus-expired.png)

### /v1/ed25519/didKey/legacy-noStatus-noExpiry-stringIssuerId.json

<details>

<summary>Click to see copyable raw json</summary>

```json
   {
    "@context": [
        "https://www.w3.org/2018/credentials/v1",
        "https://purl.imsglobal.org/spec/ob/v3p0/context-3.0.2.json",
        "https://w3id.org/security/suites/ed25519-2020/v1"
    ],
    "id": "urn:uuid:2fe53dc9-b2ec-4939-9b2c-0d00f6663b6c",
    "issuanceDate": "2025-01-09T15:06:31Z",
    "type": [
        "VerifiableCredential",
        "OpenBadgeCredential"
    ],
    "name": "DCC Test Credential",
    "issuer": "did:key:z6MknNQD1WHLGGraFi6zcbGevuAgkVfdyCdtZnQTGWVVvR5Q",
    "credentialSubject": {
        "type": [
            "AchievementSubject"
        ],
        "achievement": {
            "id": "urn:uuid:bd6d9316-f7ae-4073-a1e5-2f7f5bd22922",
            "type": [
                "Achievement"
            ],
            "achievementType": "Diploma",
            "name": "Badge",
            "description": "This is a sample credential issued by the Digital Credentials Consortium to demonstrate the functionality of Verifiable Credentials for wallets and verifiers.",
            "criteria": {
                "type": "Criteria",
                "narrative": "This credential was issued to a student that demonstrated proficiency in the Python programming language that occurred from **February 17, 2023** to **June 12, 2023**."
            },
            "image": {
                "id": "https://user-images.githubusercontent.com/752326/214947713-15826a3a-b5ac-4fba-8d4a-884b60cb7157.png",
                "type": "Image"
            }
        },
        "name": "Jane Doe"
    },
    "proof": {
        "type": "Ed25519Signature2020",
        "created": "2025-01-29T16:27:25Z",
        "verificationMethod": "did:key:z6MknNQD1WHLGGraFi6zcbGevuAgkVfdyCdtZnQTGWVVvR5Q#z6MknNQD1WHLGGraFi6zcbGevuAgkVfdyCdtZnQTGWVVvR5Q",
        "proofPurpose": "assertionMethod",
        "proofValue": "z5FQSyBv3j1mxtVn5UjiXhBFo6tTx5mCHUk3bfwJQZHHmz2J18aeMRMzVieWoxNHEBUswV1ECFjSLnzDb44DcFB3C"
    }
}
```

</details>

[rawURL](https://digitalcredentials.github.io/vc-test-fixtures/verifiableCredentials/v1/ed25519/didKey/legacy-noStatus-noExpiry-stringIssuerId.json)

[Open Directly in VerifierPlus](https://verifierplus.org/#verify?vc=https://digitalcredentials.github.io/vc-test-fixtures/verifiableCredentials/v1/ed25519/didKey/legacy-noStatus-noExpiry-stringIssuerId.json)

![QR](verifiableCredentials/v1/ed25519/didKey/legacy-noStatus-noExpiry-stringIssuerId.png)

### /v1/ed25519/didKey/legacy-noStatus-noExpiry.json

<details>

<summary>Click to see copyable raw json</summary>

```json
   
```

</details>

[rawURL](https://digitalcredentials.github.io/vc-test-fixtures/verifiableCredentials/v1/ed25519/didKey/legacy-noStatus-noExpiry.json)

[Open Directly in VerifierPlus](https://verifierplus.org/#verify?vc=https://digitalcredentials.github.io/vc-test-fixtures/verifiableCredentials/v1/ed25519/didKey/legacy-noStatus-noExpiry.json)

![QR](verifiableCredentials/v1/ed25519/didKey/legacy-noStatus-noExpiry.png)

### /v1/ed25519/didKey/legacyRegistry-noStatus-noExpiry-issuerImageId.json

<details>

<summary>Click to see copyable raw json</summary>

```json
   {
            "@context": [
                "https://www.w3.org/2018/credentials/v1",
                "https://purl.imsglobal.org/spec/ob/v3p0/context-3.0.2.json",
                "https://w3id.org/security/suites/ed25519-2020/v1"
            ],
            "id": "urn:uuid:951b475e-b795-43bc-ba8f-a2d01efd2eb1",
            "type": [
                "VerifiableCredential",
                "OpenBadgeCredential"
            ],
            "issuer": {
                "id": "did:key:z6MknNQD1WHLGGraFi6zcbGevuAgkVfdyCdtZnQTGWVVvR5Q",
                "type": "Profile",
                "name": "University of Wonderful",
                "description": "The most wonderful university",
                "url": "https://wonderful.edu/",
                "image": {
                    "id": "https://user-images.githubusercontent.com/947005/133544904-29d6139d-2e7b-4fe2-b6e9-7d1022bb6a45.png",
                    "type": "Image"
                }
            },
            "issuanceDate": "2020-01-01T00:00:00Z",
            "name": "A Simply Wonderful Course",
            "credentialSubject": {
                "type": "AchievementSubject",
                "achievement": {
                    "id": "http://wonderful.wonderful",
                    "type": "Achievement",
                    "criteria": {
                        "narrative": "Completion of the Wonderful Course - well done you!"
                    },
                    "description": "Wonderful.",
                    "name": "Introduction to Wonderfullness"
                }
            },
            "proof": {
                "type": "Ed25519Signature2020",
                "created": "2024-06-19T16:56:38Z",
                "verificationMethod": "did:key:z6MknNQD1WHLGGraFi6zcbGevuAgkVfdyCdtZnQTGWVVvR5Q#z6MknNQD1WHLGGraFi6zcbGevuAgkVfdyCdtZnQTGWVVvR5Q",
                "proofPurpose": "assertionMethod",
                "proofValue": "z2iy74s1XcmYzszzAy3oFdUwPXaF5h24Ym2vLaQ3NAaNQcC6z63sQasmgBCZcC6Y1gH5QSAky2GxfYvuG7DfMS6iT"
            }
        }
```

</details>

[rawURL](https://digitalcredentials.github.io/vc-test-fixtures/verifiableCredentials/v1/ed25519/didKey/legacyRegistry-noStatus-noExpiry-issuerImageId.json)

[Open Directly in VerifierPlus](https://verifierplus.org/#verify?vc=https://digitalcredentials.github.io/vc-test-fixtures/verifiableCredentials/v1/ed25519/didKey/legacyRegistry-noStatus-noExpiry-issuerImageId.json)

![QR](verifiableCredentials/v1/ed25519/didKey/legacyRegistry-noStatus-noExpiry-issuerImageId.png)

### /v1/ed25519/didKey/mixedRegistry-validStatus-noExpiry.json

<details>

<summary>Click to see copyable raw json</summary>

```json
   {
    "type": [
        "VerifiableCredential",
        "OpenBadgeCredential"
    ],
    "name": "Taylor Tuna - Mock Bachelor of Science Degree in Biology",
    "issuer": {
        "url": "https://web.mit.edu/",
        "type": "Profile",
        "name": "Massachusetts Institute of Technology",
        "image": {
            "id": "https://github.com/digitalcredentials/test-files/assets/206059/01eca9f5-a508-40ac-9dd5-c12d11308894",
            "type": "Image"
        },
        "id": "did:key:z6Mki7DqKQswPsjqMVhP4W3n2ABFb5wBegZC5erEVg5qcgEw"
    },
    "@context": [
        "https://www.w3.org/2018/credentials/v1",
        "https://purl.imsglobal.org/spec/ob/v3p0/context-3.0.1.json",
        "https://www.w3.org/ns/credentials/status/v1",
        "https://w3id.org/security/suites/ed25519-2020/v1"
    ],
    "credentialSubject": {
        "type": [
            "AchievementSubject"
        ],
        "name": "Taylor Tuna",
        "achievement": {
            "id": "urn:uuid:951b475e-b795-43bc-ba8f-a2d01efd2eb1",
            "type": [
                "Achievement"
            ],
            "name": "Mock Bachelor of Science in Biology",
            "criteria": {
                "type": "Criteria",
                "narrative": "In Recognition of proficiency in the general and the special studies and exercises prescribed by said institution for such mock degree given this day under the seal of the Institute at Cambridge in the Commonwealth of Massachusetts"
            },
            "description": "Massachusetts Institute of Technology Mock Bachelor of Science in Computer Science",
            "fieldOfStudy": "Biology",
            "achievementType": "BachelorDegree"
        }
    },
    "id": "urn:uuid:677fe54fcacf98774d482bcc",
    "credentialStatus": {
        "id": "https://digitalcredentials.github.io/vc-test-fixtures/statusLists/didkey-ed25519Signature2020/e5WK8CbZ1GjycuPombrj#7",
        "type": "BitstringStatusListEntry",
        "statusPurpose": "revocation",
        "statusListCredential": "https://digitalcredentials.github.io/vc-test-fixtures/statusLists/didkey-ed25519Signature2020/e5WK8CbZ1GjycuPombrj",
        "statusListIndex": "7"
    },
    "issuanceDate": "2025-01-09T15:06:31Z",
    "proof": {
        "type": "Ed25519Signature2020",
        "created": "2025-05-09T14:29:53Z",
        "verificationMethod": "did:key:z6Mki7DqKQswPsjqMVhP4W3n2ABFb5wBegZC5erEVg5qcgEw#z6Mki7DqKQswPsjqMVhP4W3n2ABFb5wBegZC5erEVg5qcgEw",
        "proofPurpose": "assertionMethod",
        "proofValue": "z3TrAX9MqUE94gdFCozVb2EXuMh3EXGp7uGuGdpHuuugejT6jH9Z6p8nsDTRWN4DMBxoWmEX3hhiois69JonKbv9q"
    }
}
```

</details>

[rawURL](https://digitalcredentials.github.io/vc-test-fixtures/verifiableCredentials/v1/ed25519/didKey/mixedRegistry-validStatus-noExpiry.json)

[Open Directly in VerifierPlus](https://verifierplus.org/#verify?vc=https://digitalcredentials.github.io/vc-test-fixtures/verifiableCredentials/v1/ed25519/didKey/mixedRegistry-validStatus-noExpiry.json)

![QR](verifiableCredentials/v1/ed25519/didKey/mixedRegistry-validStatus-noExpiry.png)

### /v1/ed25519/didKey/noRegistry-noStatus-noExpiry.json

<details>

<summary>Click to see copyable raw json</summary>

```json
   {
    "@context": [
        "https://www.w3.org/2018/credentials/v1",
        "https://purl.imsglobal.org/spec/ob/v3p0/context-3.0.3.json",
        "https://w3id.org/security/suites/ed25519-2020/v1"
    ],
    "id": "urn:uuid:2fe53dc9-b2ec-4939-9b2c-0d00f6663b6c",
    "issuanceDate": "2025-01-09T15:06:31Z",
    "type": [
        "VerifiableCredential",
        "OpenBadgeCredential"
    ],
    "name": "DCC Test Credential",
    "issuer": {
        "type": [
            "Profile"
        ],
        "id": "did:key:z6MkqBcwQ7qnRBRpgtsJQviLFeYxExMUE2k9nwKkMTF3DdRZ",
        "name": "Digital Credentials Consortium Test Issuer",
        "url": "https://dcconsortium.org",
        "image": "https://user-images.githubusercontent.com/752326/230469660-8f80d264-eccf-4edd-8e50-ea634d407778.png"
    },
    "credentialSubject": {
        "type": [
            "AchievementSubject"
        ],
        "achievement": {
            "id": "urn:uuid:bd6d9316-f7ae-4073-a1e5-2f7f5bd22922",
            "type": [
                "Achievement"
            ],
            "achievementType": "Diploma",
            "name": "Badge",
            "description": "This is a sample credential issued by the Digital Credentials Consortium to demonstrate the functionality of Verifiable Credentials for wallets and verifiers.",
            "criteria": {
                "type": "Criteria",
                "narrative": "This credential was issued to a student that demonstrated proficiency in the Python programming language that occurred from **February 17, 2023** to **June 12, 2023**."
            },
            "image": {
                "id": "https://user-images.githubusercontent.com/752326/214947713-15826a3a-b5ac-4fba-8d4a-884b60cb7157.png",
                "type": "Image"
            }
        },
        "name": "Jane Doe"
    },
    "proof": {
        "type": "Ed25519Signature2020",
        "created": "2025-05-12T15:21:27Z",
        "verificationMethod": "did:key:z6MkqBcwQ7qnRBRpgtsJQviLFeYxExMUE2k9nwKkMTF3DdRZ#z6MkqBcwQ7qnRBRpgtsJQviLFeYxExMUE2k9nwKkMTF3DdRZ",
        "proofPurpose": "assertionMethod",
        "proofValue": "z2CfPLRtdmBGPB2fmXjSJxBSEieyCS18wmVqEvsL1PW5sWQXQB9CLJzi4eGMCSiFLUMYaYQLdzYkiUJjvHTBzTUba"
    }
}
```

</details>

[rawURL](https://digitalcredentials.github.io/vc-test-fixtures/verifiableCredentials/v1/ed25519/didKey/noRegistry-noStatus-noExpiry.json)

[Open Directly in VerifierPlus](https://verifierplus.org/#verify?vc=https://digitalcredentials.github.io/vc-test-fixtures/verifiableCredentials/v1/ed25519/didKey/noRegistry-noStatus-noExpiry.json)

![QR](verifiableCredentials/v1/ed25519/didKey/noRegistry-noStatus-noExpiry.png)

### /v1/ed25519/didKey/oidf-noStatus-expired.json

<details>

<summary>Click to see copyable raw json</summary>

```json
   {
    "@context": [
        "https://www.w3.org/2018/credentials/v1",
        "https://purl.imsglobal.org/spec/ob/v3p0/context-3.0.3.json",
        "https://w3id.org/security/suites/ed25519-2020/v1"
    ],
    "id": "urn:uuid:2fe53dc9-b2ec-4939-9b2c-0d00f6663b6c",
    "issuanceDate": "2025-01-09T15:06:31Z",
    "expirationDate": "2025-01-09T16:23:24Z",
    "type": [
        "VerifiableCredential",
        "OpenBadgeCredential"
    ],
    "name": "DCC Test Credential",
    "issuer": {
        "type": [
            "Profile"
        ],
        "id": "did:key:z6MkjoriXdbyWD25YXTed114F8hdJrLXQ567xxPHAUKxpKkS",
        "name": "Digital Credentials Consortium Test Issuer",
        "url": "https://dcconsortium.org",
        "image": "https://user-images.githubusercontent.com/752326/230469660-8f80d264-eccf-4edd-8e50-ea634d407778.png"
    },
    "credentialSubject": {
        "type": [
            "AchievementSubject"
        ],
        "achievement": {
            "id": "urn:uuid:bd6d9316-f7ae-4073-a1e5-2f7f5bd22922",
            "type": [
                "Achievement"
            ],
            "achievementType": "Diploma",
            "name": "Badge",
            "description": "This is a sample credential issued by the Digital Credentials Consortium to demonstrate the functionality of Verifiable Credentials for wallets and verifiers.",
            "criteria": {
                "type": "Criteria",
                "narrative": "This credential was issued to a student that demonstrated proficiency in the Python programming language that occurred from **February 17, 2023** to **June 12, 2023**."
            },
            "image": {
                "id": "https://user-images.githubusercontent.com/752326/214947713-15826a3a-b5ac-4fba-8d4a-884b60cb7157.png",
                "type": "Image"
            }
        },
        "name": "Jane Doe"
    },
    "proof": {
        "type": "Ed25519Signature2020",
        "created": "2025-05-12T14:13:54Z",
        "verificationMethod": "did:key:z6MkjoriXdbyWD25YXTed114F8hdJrLXQ567xxPHAUKxpKkS#z6MkjoriXdbyWD25YXTed114F8hdJrLXQ567xxPHAUKxpKkS",
        "proofPurpose": "assertionMethod",
        "proofValue": "z5NDygfoFkqJFLLddUn1LtRKdVPV9PCigw44dnGoQ4daZ9jPRvh3owcBZRxAeQpFxMC5LfajMYn4ptX7qz4wapUkJ"
    }
}
```

</details>

[rawURL](https://digitalcredentials.github.io/vc-test-fixtures/verifiableCredentials/v1/ed25519/didKey/oidf-noStatus-expired.json)

[Open Directly in VerifierPlus](https://verifierplus.org/#verify?vc=https://digitalcredentials.github.io/vc-test-fixtures/verifiableCredentials/v1/ed25519/didKey/oidf-noStatus-expired.json)

![QR](verifiableCredentials/v1/ed25519/didKey/oidf-noStatus-expired.png)

### /v1/ed25519/didKey/oidf-noStatus-noExpiry.json

<details>

<summary>Click to see copyable raw json</summary>

```json
   {
    "@context": [
        "https://www.w3.org/2018/credentials/v1",
        "https://purl.imsglobal.org/spec/ob/v3p0/context-3.0.3.json",
        "https://w3id.org/security/suites/ed25519-2020/v1"
    ],
    "id": "urn:uuid:2fe53dc9-b2ec-4939-9b2c-0d00f6663b6c",
    "issuanceDate": "2025-01-09T15:06:31Z",
    "type": [
        "VerifiableCredential",
        "OpenBadgeCredential"
    ],
    "name": "DCC Test Credential",
    "issuer": {
        "type": [
            "Profile"
        ],
        "id": "did:key:z6MkjoriXdbyWD25YXTed114F8hdJrLXQ567xxPHAUKxpKkS",
        "name": "Digital Credentials Consortium Test Issuer",
        "url": "https://dcconsortium.org",
        "image": "https://user-images.githubusercontent.com/752326/230469660-8f80d264-eccf-4edd-8e50-ea634d407778.png"
    },
    "credentialSubject": {
        "type": [
            "AchievementSubject"
        ],
        "achievement": {
            "id": "urn:uuid:bd6d9316-f7ae-4073-a1e5-2f7f5bd22922",
            "type": [
                "Achievement"
            ],
            "achievementType": "Diploma",
            "name": "Badge",
            "description": "This is a sample credential issued by the Digital Credentials Consortium to demonstrate the functionality of Verifiable Credentials for wallets and verifiers.",
            "criteria": {
                "type": "Criteria",
                "narrative": "This credential was issued to a student that demonstrated proficiency in the Python programming language that occurred from **February 17, 2023** to **June 12, 2023**."
            },
            "image": {
                "id": "https://user-images.githubusercontent.com/752326/214947713-15826a3a-b5ac-4fba-8d4a-884b60cb7157.png",
                "type": "Image"
            }
        },
        "name": "Jane Doe"
    },
    "proof": {
        "type": "Ed25519Signature2020",
        "created": "2025-05-07T19:24:50Z",
        "verificationMethod": "did:key:z6MkjoriXdbyWD25YXTed114F8hdJrLXQ567xxPHAUKxpKkS#z6MkjoriXdbyWD25YXTed114F8hdJrLXQ567xxPHAUKxpKkS",
        "proofPurpose": "assertionMethod",
        "proofValue": "z4fDk2fEKmvajLEukCc69rMWJQUTdZApahNwDnNZtJcdY4XYXFC5Ne4SHccgf1BASXYybQDHMTCy4RCnQPUkWAYDR"
    }
}
```

</details>

[rawURL](https://digitalcredentials.github.io/vc-test-fixtures/verifiableCredentials/v1/ed25519/didKey/oidf-noStatus-noExpiry.json)

[Open Directly in VerifierPlus](https://verifierplus.org/#verify?vc=https://digitalcredentials.github.io/vc-test-fixtures/verifiableCredentials/v1/ed25519/didKey/oidf-noStatus-noExpiry.json)

![QR](verifiableCredentials/v1/ed25519/didKey/oidf-noStatus-noExpiry.png)

### /v1/ed25519/didKey/oidf-revokedStatus-expired.json

<details>

<summary>Click to see copyable raw json</summary>

```json
   {
    "type": [
        "VerifiableCredential",
        "OpenBadgeCredential"
    ],
    "name": "Taylor Tuna - Mock Bachelor of Science Degree in Biology",
    "issuanceDate": "2025-01-09T15:06:31Z",
    "expirationDate": "2025-01-09T16:23:24Z",
    "issuer": {
        "url": "https://web.mit.edu/",
        "type": "Profile",
        "name": "Massachusetts Institute of Technology",
        "image": {
            "id": "https://github.com/digitalcredentials/test-files/assets/206059/01eca9f5-a508-40ac-9dd5-c12d11308894",
            "type": "Image"
        },
        "id": "did:key:z6MkjoriXdbyWD25YXTed114F8hdJrLXQ567xxPHAUKxpKkS"
    },
    "@context": [
        "https://www.w3.org/2018/credentials/v1",
        "https://purl.imsglobal.org/spec/ob/v3p0/context-3.0.1.json",
        "https://www.w3.org/ns/credentials/status/v1",
        "https://w3id.org/security/suites/ed25519-2020/v1"
    ],
    "credentialSubject": {
        "type": [
            "AchievementSubject"
        ],
        "name": "Taylor Tuna",
        "achievement": {
            "id": "urn:uuid:951b475e-b795-43bc-ba8f-a2d01efd2eb1",
            "type": [
                "Achievement"
            ],
            "name": "Mock Bachelor of Science in Biology",
            "criteria": {
                "type": "Criteria",
                "narrative": "In Recognition of proficiency in the general and the special studies and exercises prescribed by said institution for such mock degree given this day under the seal of the Institute at Cambridge in the Commonwealth of Massachusetts"
            },
            "description": "Massachusetts Institute of Technology Mock Bachelor of Science in Computer Science",
            "fieldOfStudy": "Biology",
            "achievementType": "BachelorDegree"
        }
    },
    "id": "urn:uuid:677fe54fcacf98774d482bcc",
    "credentialStatus": {
        "id": "https://digitalcredentials.github.io/vc-test-fixtures/statusLists/didkey-ed25519Signature2020/e5WK8CbZ1GjycuPombrj#6",
        "type": "BitstringStatusListEntry",
        "statusPurpose": "revocation",
        "statusListCredential": "https://digitalcredentials.github.io/vc-test-fixtures/statusLists/didkey-ed25519Signature2020/e5WK8CbZ1GjycuPombrj",
        "statusListIndex": "6"
    },
    "proof": {
        "type": "Ed25519Signature2020",
        "created": "2025-05-12T14:57:06Z",
        "verificationMethod": "did:key:z6MkjoriXdbyWD25YXTed114F8hdJrLXQ567xxPHAUKxpKkS#z6MkjoriXdbyWD25YXTed114F8hdJrLXQ567xxPHAUKxpKkS",
        "proofPurpose": "assertionMethod",
        "proofValue": "zTEPnp5WpR2AH9SQP7GTV3PYgZvp1ExhoFGMxGfgg8wZYTjWntFpniwjFUoeMenErSJGoMt3WfY5kbLcZmHs8EJV"
    }
}
```

</details>

[rawURL](https://digitalcredentials.github.io/vc-test-fixtures/verifiableCredentials/v1/ed25519/didKey/oidf-revokedStatus-expired.json)

[Open Directly in VerifierPlus](https://verifierplus.org/#verify?vc=https://digitalcredentials.github.io/vc-test-fixtures/verifiableCredentials/v1/ed25519/didKey/oidf-revokedStatus-expired.json)

![QR](verifiableCredentials/v1/ed25519/didKey/oidf-revokedStatus-expired.png)

### /v1/ed25519/didWeb/legacy-noStatus-noExpiry.json

<details>

<summary>Click to see copyable raw json</summary>

```json
   {
    "@context": [
        "https://www.w3.org/2018/credentials/v1",
        "https://purl.imsglobal.org/spec/ob/v3p0/context-3.0.3.json",
        "https://w3id.org/security/suites/ed25519-2020/v1"
    ],
    "id": "urn:uuid:2fe53dc9-b2ec-4939-9b2c-0d00f6663b6c",
    "issuanceDate": "2025-01-09T15:06:31Z",
    "type": [
        "VerifiableCredential",
        "OpenBadgeCredential"
    ],
    "name": "DCC Test Credential",
    "issuer": {
        "type": [
            "Profile"
        ],
        "id": "did:web:digitalcredentials.github.io:vc-test-fixtures:dids:legacy",
        "name": "Digital Credentials Consortium Test Issuer",
        "url": "https://dcconsortium.org",
        "image": "https://user-images.githubusercontent.com/752326/230469660-8f80d264-eccf-4edd-8e50-ea634d407778.png"
    },
    "credentialSubject": {
        "type": [
            "AchievementSubject"
        ],
        "achievement": {
            "id": "urn:uuid:bd6d9316-f7ae-4073-a1e5-2f7f5bd22922",
            "type": [
                "Achievement"
            ],
            "achievementType": "Diploma",
            "name": "Badge",
            "description": "This is a sample credential issued by the Digital Credentials Consortium to demonstrate the functionality of Verifiable Credentials for wallets and verifiers.",
            "criteria": {
                "type": "Criteria",
                "narrative": "This credential was issued to a student that demonstrated proficiency in the Python programming language that occurred from **February 17, 2023** to **June 12, 2023**."
            },
            "image": {
                "id": "https://user-images.githubusercontent.com/752326/214947713-15826a3a-b5ac-4fba-8d4a-884b60cb7157.png",
                "type": "Image"
            }
        },
        "name": "Jane Doe"
    },
    "proof": {
        "type": "Ed25519Signature2020",
        "created": "2025-05-08T16:01:44Z",
        "verificationMethod": "did:web:digitalcredentials.github.io:vc-test-fixtures:dids:legacy#z6MkjXe1vZvPRqFuc9nRBtZ3e1Y9XKDFSbjFAfzLfW2bD6cZ",
        "proofPurpose": "assertionMethod",
        "proofValue": "z49JFQcSFNvFzEruiiWocBWzsCsWymQ1x3mVBhfsjosPEJM6JhfU2rbyXTZ6XnMVxH6gQbdv6yuhMtK13vUeUQTtd"
    }
}
```

</details>

[rawURL](https://digitalcredentials.github.io/vc-test-fixtures/verifiableCredentials/v1/ed25519/didWeb/legacy-noStatus-noExpiry.json)

[Open Directly in VerifierPlus](https://verifierplus.org/#verify?vc=https://digitalcredentials.github.io/vc-test-fixtures/verifiableCredentials/v1/ed25519/didWeb/legacy-noStatus-noExpiry.json)

![QR](verifiableCredentials/v1/ed25519/didWeb/legacy-noStatus-noExpiry.png)

### /v1/ed25519/didWeb/legacy-revokedStatus-noExpiry.json

<details>

<summary>Click to see copyable raw json</summary>

```json
   {
    "type": [
        "VerifiableCredential",
        "OpenBadgeCredential"
    ],
    "name": "Taylor Tuna - Mock Bachelor of Science Degree in Biology",
    "issuer": {
        "url": "https://web.mit.edu/",
        "type": "Profile",
        "name": "Massachusetts Institute of Technology",
        "image": {
            "id": "https://github.com/digitalcredentials/test-files/assets/206059/01eca9f5-a508-40ac-9dd5-c12d11308894",
            "type": "Image"
        },
        "id": "did:web:digitalcredentials.github.io:vc-test-fixtures:dids:legacy"
    },
    "@context": [
        "https://www.w3.org/2018/credentials/v1",
        "https://purl.imsglobal.org/spec/ob/v3p0/context-3.0.1.json",
        "https://www.w3.org/ns/credentials/status/v1",
        "https://w3id.org/security/suites/ed25519-2020/v1"
    ],
    "credentialSubject": {
        "type": [
            "AchievementSubject"
        ],
        "name": "Taylor Tuna",
        "achievement": {
            "id": "urn:uuid:951b475e-b795-43bc-ba8f-a2d01efd2eb1",
            "type": [
                "Achievement"
            ],
            "name": "Mock Bachelor of Science in Biology",
            "criteria": {
                "type": "Criteria",
                "narrative": "In Recognition of proficiency in the general and the special studies and exercises prescribed by said institution for such mock degree given this day under the seal of the Institute at Cambridge in the Commonwealth of Massachusetts"
            },
            "description": "Massachusetts Institute of Technology Mock Bachelor of Science in Computer Science",
            "fieldOfStudy": "Biology",
            "achievementType": "BachelorDegree"
        }
    },
    "id": "urn:uuid:677fe54fcacf98774d482bcc",
    "credentialStatus": {
        "id": "https://digitalcredentials.github.io/vc-test-fixtures/statusLists/didkey-ed25519Signature2020/e5WK8CbZ1GjycuPombrj#6",
        "type": "BitstringStatusListEntry",
        "statusPurpose": "revocation",
        "statusListCredential": "https://digitalcredentials.github.io/vc-test-fixtures/statusLists/didkey-ed25519Signature2020/e5WK8CbZ1GjycuPombrj",
        "statusListIndex": "6"
    },
    "issuanceDate": "2025-01-09T15:06:31Z",
    "proof": {
        "type": "Ed25519Signature2020",
        "created": "2025-05-09T12:10:47Z",
        "verificationMethod": "did:web:digitalcredentials.github.io:vc-test-fixtures:dids:legacy#z6MkjXe1vZvPRqFuc9nRBtZ3e1Y9XKDFSbjFAfzLfW2bD6cZ",
        "proofPurpose": "assertionMethod",
        "proofValue": "z52XohX8u91Qvkza5aqYXwSNj3i6Y5cGLJaJ2a1Ghv7FjmDfFEsQjH1hsqVCrgZE25Nc7Uhcptu8jwhWDC4Kzu4R3"
    }
}
```

</details>

[rawURL](https://digitalcredentials.github.io/vc-test-fixtures/verifiableCredentials/v1/ed25519/didWeb/legacy-revokedStatus-noExpiry.json)

[Open Directly in VerifierPlus](https://verifierplus.org/#verify?vc=https://digitalcredentials.github.io/vc-test-fixtures/verifiableCredentials/v1/ed25519/didWeb/legacy-revokedStatus-noExpiry.json)

![QR](verifiableCredentials/v1/ed25519/didWeb/legacy-revokedStatus-noExpiry.png)

### /v1/ed25519/didWeb/legacy-validStatus-noExpiry.json

<details>

<summary>Click to see copyable raw json</summary>

```json
   {
    "type": [
        "VerifiableCredential",
        "OpenBadgeCredential"
    ],
    "name": "Taylor Tuna - Mock Bachelor of Science Degree in Biology",
    "issuer": {
        "url": "https://web.mit.edu/",
        "type": "Profile",
        "name": "Massachusetts Institute of Technology",
        "image": {
            "id": "https://github.com/digitalcredentials/test-files/assets/206059/01eca9f5-a508-40ac-9dd5-c12d11308894",
            "type": "Image"
        },
        "id": "did:web:digitalcredentials.github.io:vc-test-fixtures:dids:legacy"
    },
    "@context": [
        "https://www.w3.org/2018/credentials/v1",
        "https://purl.imsglobal.org/spec/ob/v3p0/context-3.0.1.json",
        "https://www.w3.org/ns/credentials/status/v1",
        "https://w3id.org/security/suites/ed25519-2020/v1"
    ],
    "credentialSubject": {
        "type": [
            "AchievementSubject"
        ],
        "name": "Taylor Tuna",
        "achievement": {
            "id": "urn:uuid:951b475e-b795-43bc-ba8f-a2d01efd2eb1",
            "type": [
                "Achievement"
            ],
            "name": "Mock Bachelor of Science in Biology",
            "criteria": {
                "type": "Criteria",
                "narrative": "In Recognition of proficiency in the general and the special studies and exercises prescribed by said institution for such mock degree given this day under the seal of the Institute at Cambridge in the Commonwealth of Massachusetts"
            },
            "description": "Massachusetts Institute of Technology Mock Bachelor of Science in Computer Science",
            "fieldOfStudy": "Biology",
            "achievementType": "BachelorDegree"
        }
    },
    "id": "urn:uuid:677fe54fcacf98774d482bcc",
    "credentialStatus": {
        "id": "https://digitalcredentials.github.io/vc-test-fixtures/statusLists/didkey-ed25519Signature2020/e5WK8CbZ1GjycuPombrj#7",
        "type": "BitstringStatusListEntry",
        "statusPurpose": "revocation",
        "statusListCredential": "https://digitalcredentials.github.io/vc-test-fixtures/statusLists/didkey-ed25519Signature2020/e5WK8CbZ1GjycuPombrj",
        "statusListIndex": "7"
    },
    "issuanceDate": "2025-01-09T15:06:31Z",
    "proof": {
        "type": "Ed25519Signature2020",
        "created": "2025-05-08T17:52:55Z",
        "verificationMethod": "did:web:digitalcredentials.github.io:vc-test-fixtures:dids:legacy#z6MkjXe1vZvPRqFuc9nRBtZ3e1Y9XKDFSbjFAfzLfW2bD6cZ",
        "proofPurpose": "assertionMethod",
        "proofValue": "zVkdRYHdkhA4rY2XZT4c7YDzGSEsEk7adhVKhqbYxoXv9hFLk2GEMTjwxeydEQYy8WmFhdiE4zQP81rM2Ar2yrgS"
    }
}
```

</details>

[rawURL](https://digitalcredentials.github.io/vc-test-fixtures/verifiableCredentials/v1/ed25519/didWeb/legacy-validStatus-noExpiry.json)

[Open Directly in VerifierPlus](https://verifierplus.org/#verify?vc=https://digitalcredentials.github.io/vc-test-fixtures/verifiableCredentials/v1/ed25519/didWeb/legacy-validStatus-noExpiry.json)

![QR](verifiableCredentials/v1/ed25519/didWeb/legacy-validStatus-noExpiry.png)

### /v1/ed25519/didWeb/oidf-noStatus-noExpiry.json

<details>

<summary>Click to see copyable raw json</summary>

```json
   {
    "@context": [
        "https://www.w3.org/2018/credentials/v1",
        "https://purl.imsglobal.org/spec/ob/v3p0/context-3.0.3.json",
        "https://w3id.org/security/suites/ed25519-2020/v1"
    ],
    "id": "urn:uuid:2fe53dc9-b2ec-4939-9b2c-0d00f6663b6c",
    "issuanceDate": "2025-01-09T15:06:31Z",
    "type": [
        "VerifiableCredential",
        "OpenBadgeCredential"
    ],
    "name": "DCC Test Credential",
    "issuer": {
        "type": [
            "Profile"
        ],
        "id": "did:web:digitalcredentials.github.io:vc-test-fixtures:dids:oidf",
        "name": "Digital Credentials Consortium Test Issuer",
        "url": "https://dcconsortium.org",
        "image": "https://user-images.githubusercontent.com/752326/230469660-8f80d264-eccf-4edd-8e50-ea634d407778.png"
    },
    "credentialSubject": {
        "type": [
            "AchievementSubject"
        ],
        "achievement": {
            "id": "urn:uuid:bd6d9316-f7ae-4073-a1e5-2f7f5bd22922",
            "type": [
                "Achievement"
            ],
            "achievementType": "Diploma",
            "name": "Badge",
            "description": "This is a sample credential issued by the Digital Credentials Consortium to demonstrate the functionality of Verifiable Credentials for wallets and verifiers.",
            "criteria": {
                "type": "Criteria",
                "narrative": "This credential was issued to a student that demonstrated proficiency in the Python programming language that occurred from **February 17, 2023** to **June 12, 2023**."
            },
            "image": {
                "id": "https://user-images.githubusercontent.com/752326/214947713-15826a3a-b5ac-4fba-8d4a-884b60cb7157.png",
                "type": "Image"
            }
        },
        "name": "Jane Doe"
    },
    "proof": {
        "type": "Ed25519Signature2020",
        "created": "2025-05-08T16:04:18Z",
        "verificationMethod": "did:web:digitalcredentials.github.io:vc-test-fixtures:dids:oidf#z6MkjXe1vZvPRqFuc9nRBtZ3e1Y9XKDFSbjFAfzLfW2bD6cZ",
        "proofPurpose": "assertionMethod",
        "proofValue": "z3LWc7BqiGRmP2ZnWvXeoVFgmHAcbNsDidMdnP9nnqw5kgNSUzTFVw5nM5dUnzdUTdNHy4SbHYdL9yp6apFVv16oV"
    }
}
```

</details>

[rawURL](https://digitalcredentials.github.io/vc-test-fixtures/verifiableCredentials/v1/ed25519/didWeb/oidf-noStatus-noExpiry.json)

[Open Directly in VerifierPlus](https://verifierplus.org/#verify?vc=https://digitalcredentials.github.io/vc-test-fixtures/verifiableCredentials/v1/ed25519/didWeb/oidf-noStatus-noExpiry.json)

![QR](verifiableCredentials/v1/ed25519/didWeb/oidf-noStatus-noExpiry.png)

### /v1/ed25519/didWeb/oidf-revokedStatus-noExpiry.json

<details>

<summary>Click to see copyable raw json</summary>

```json
   {
    "type": [
        "VerifiableCredential",
        "OpenBadgeCredential"
    ],
    "name": "Taylor Tuna - Mock Bachelor of Science Degree in Biology",
    "issuer": {
        "url": "https://web.mit.edu/",
        "type": "Profile",
        "name": "Massachusetts Institute of Technology",
        "image": {
            "id": "https://github.com/digitalcredentials/test-files/assets/206059/01eca9f5-a508-40ac-9dd5-c12d11308894",
            "type": "Image"
        },
        "id": "did:web:digitalcredentials.github.io:vc-test-fixtures:dids:oidf"
    },
    "@context": [
        "https://www.w3.org/2018/credentials/v1",
        "https://purl.imsglobal.org/spec/ob/v3p0/context-3.0.1.json",
        "https://www.w3.org/ns/credentials/status/v1",
        "https://w3id.org/security/suites/ed25519-2020/v1"
    ],
    "credentialSubject": {
        "type": [
            "AchievementSubject"
        ],
        "name": "Taylor Tuna",
        "achievement": {
            "id": "urn:uuid:951b475e-b795-43bc-ba8f-a2d01efd2eb1",
            "type": [
                "Achievement"
            ],
            "name": "Mock Bachelor of Science in Biology",
            "criteria": {
                "type": "Criteria",
                "narrative": "In Recognition of proficiency in the general and the special studies and exercises prescribed by said institution for such mock degree given this day under the seal of the Institute at Cambridge in the Commonwealth of Massachusetts"
            },
            "description": "Massachusetts Institute of Technology Mock Bachelor of Science in Computer Science",
            "fieldOfStudy": "Biology",
            "achievementType": "BachelorDegree"
        }
    },
    "id": "urn:uuid:677fe54fcacf98774d482bcc",
    "credentialStatus": {
        "id": "https://digitalcredentials.github.io/vc-test-fixtures/statusLists/didkey-ed25519Signature2020/e5WK8CbZ1GjycuPombrj#6",
        "type": "BitstringStatusListEntry",
        "statusPurpose": "revocation",
        "statusListCredential": "https://digitalcredentials.github.io/vc-test-fixtures/statusLists/didkey-ed25519Signature2020/e5WK8CbZ1GjycuPombrj",
        "statusListIndex": "6"
    },
    "issuanceDate": "2025-01-09T15:06:31Z",
    "proof": {
        "type": "Ed25519Signature2020",
        "created": "2025-05-09T12:19:06Z",
        "verificationMethod": "did:web:digitalcredentials.github.io:vc-test-fixtures:dids:oidf#z6MkjXe1vZvPRqFuc9nRBtZ3e1Y9XKDFSbjFAfzLfW2bD6cZ",
        "proofPurpose": "assertionMethod",
        "proofValue": "z4FZHfUb8xJvTdLNgJDRVNxAkN8MhGDCTTH8nBxSsSCL1y9URxRhv1mDzXwgNuw4UEZkgwW8nmrcpdwf4joeQzsmH"
    }
}
```

</details>

[rawURL](https://digitalcredentials.github.io/vc-test-fixtures/verifiableCredentials/v1/ed25519/didWeb/oidf-revokedStatus-noExpiry.json)

[Open Directly in VerifierPlus](https://verifierplus.org/#verify?vc=https://digitalcredentials.github.io/vc-test-fixtures/verifiableCredentials/v1/ed25519/didWeb/oidf-revokedStatus-noExpiry.json)

![QR](verifiableCredentials/v1/ed25519/didWeb/oidf-revokedStatus-noExpiry.png)

### /v1/ed25519/didWeb/oidf-validStatus-noExpiry.json

<details>

<summary>Click to see copyable raw json</summary>

```json
   {
    "type": [
        "VerifiableCredential",
        "OpenBadgeCredential"
    ],
    "name": "Taylor Tuna - Mock Bachelor of Science Degree in Biology",
    "issuer": {
        "url": "https://web.mit.edu/",
        "type": "Profile",
        "name": "Massachusetts Institute of Technology",
        "image": {
            "id": "https://github.com/digitalcredentials/test-files/assets/206059/01eca9f5-a508-40ac-9dd5-c12d11308894",
            "type": "Image"
        },
        "id": "did:web:digitalcredentials.github.io:vc-test-fixtures:dids:oidf"
    },
    "@context": [
        "https://www.w3.org/2018/credentials/v1",
        "https://purl.imsglobal.org/spec/ob/v3p0/context-3.0.1.json",
        "https://www.w3.org/ns/credentials/status/v1",
        "https://w3id.org/security/suites/ed25519-2020/v1"
    ],
    "credentialSubject": {
        "type": [
            "AchievementSubject"
        ],
        "name": "Taylor Tuna",
        "achievement": {
            "id": "urn:uuid:951b475e-b795-43bc-ba8f-a2d01efd2eb1",
            "type": [
                "Achievement"
            ],
            "name": "Mock Bachelor of Science in Biology",
            "criteria": {
                "type": "Criteria",
                "narrative": "In Recognition of proficiency in the general and the special studies and exercises prescribed by said institution for such mock degree given this day under the seal of the Institute at Cambridge in the Commonwealth of Massachusetts"
            },
            "description": "Massachusetts Institute of Technology Mock Bachelor of Science in Computer Science",
            "fieldOfStudy": "Biology",
            "achievementType": "BachelorDegree"
        }
    },
    "id": "urn:uuid:677fe54fcacf98774d482bcc",
    "credentialStatus": {
        "id": "https://digitalcredentials.github.io/vc-test-fixtures/statusLists/didkey-ed25519Signature2020/e5WK8CbZ1GjycuPombrj#7",
        "type": "BitstringStatusListEntry",
        "statusPurpose": "revocation",
        "statusListCredential": "https://digitalcredentials.github.io/vc-test-fixtures/statusLists/didkey-ed25519Signature2020/e5WK8CbZ1GjycuPombrj",
        "statusListIndex": "7"
    },
    "issuanceDate": "2025-01-09T15:06:31Z",
    "proof": {
        "type": "Ed25519Signature2020",
        "created": "2025-05-08T17:54:30Z",
        "verificationMethod": "did:web:digitalcredentials.github.io:vc-test-fixtures:dids:oidf#z6MkjXe1vZvPRqFuc9nRBtZ3e1Y9XKDFSbjFAfzLfW2bD6cZ",
        "proofPurpose": "assertionMethod",
        "proofValue": "z39ADUwpXfux17qKXR3fEQgUgQPjtQKdhtMSqcTazZv8yvv7eWhkv6Fz5iPErt4mZZKnmQBKVUEqv258otr9xDv7k"
    }
}
```

</details>

[rawURL](https://digitalcredentials.github.io/vc-test-fixtures/verifiableCredentials/v1/ed25519/didWeb/oidf-validStatus-noExpiry.json)

[Open Directly in VerifierPlus](https://verifierplus.org/#verify?vc=https://digitalcredentials.github.io/vc-test-fixtures/verifiableCredentials/v1/ed25519/didWeb/oidf-validStatus-noExpiry.json)

![QR](verifiableCredentials/v1/ed25519/didWeb/oidf-validStatus-noExpiry.png)

### /v2/bothSignatureTypes/didkey/legacy-noStatus-noExpiry-nonOBWithOBContext.json

<details>

<summary>Click to see copyable raw json</summary>

```json
   {
    "@context": [
        "https://www.w3.org/ns/credentials/v2",
        "https://purl.imsglobal.org/spec/ob/v3p0/context-3.0.3.json",
        "https://purl.imsglobal.org/spec/ob/v3p0/extensions.json",
        "https://w3id.org/security/suites/ed25519-2020/v1"
    ],
    "id": "http://1edtech.edu/endorsementcredential/3732",
    "type": [
        "VerifiableCredential"
    ],
    "name": "SDE endorsement",
    "issuer": {
        "id": "did:key:z6MknNQD1WHLGGraFi6zcbGevuAgkVfdyCdtZnQTGWVVvR5Q",
        "type": [
            "Profile"
        ],
        "name": "State Department of Education"
    },
    "validFrom": "2010-01-01T00:00:00Z",
    "validUntil": "2030-01-01T00:00:00Z",
    "credentialSubject": {
        "id": "https://1edtech.edu/issuers/565049",
        "type": [
            "EndorsementSubject"
        ],
        "endorsementComment": "1EdTech University is in good standing"
    },
    "proof": [
        {
            "type": "DataIntegrityProof",
            "created": "2025-10-22T13:20:55Z",
            "verificationMethod": "did:key:z6MknNQD1WHLGGraFi6zcbGevuAgkVfdyCdtZnQTGWVVvR5Q#z6MknNQD1WHLGGraFi6zcbGevuAgkVfdyCdtZnQTGWVVvR5Q",
            "cryptosuite": "eddsa-rdfc-2022",
            "proofPurpose": "assertionMethod",
            "proofValue": "z2MVWaHfKvfzTTu8rEXCDya4HGPQmiRsgZopMUaTkTrSAL9TYZAvgE5QH4oo3SJGmZDDDBDJ1JkKU7CfHGuCgRhXH"
        },
        {
            "type": "Ed25519Signature2020",
            "created": "2025-10-22T13:20:55Z",
            "verificationMethod": "did:key:z6MknNQD1WHLGGraFi6zcbGevuAgkVfdyCdtZnQTGWVVvR5Q#z6MknNQD1WHLGGraFi6zcbGevuAgkVfdyCdtZnQTGWVVvR5Q",
            "proofPurpose": "assertionMethod",
            "proofValue": "z5UGS9qzcFZS5NSEQpSZbsfz7yfZR8MHYqqKX1dTiKCfTckmBpxjQNfd7sS3xFKAgcHR5Miqwm8yYanTCWLrRBCef"
        }
    ]
}
```

</details>

[rawURL](https://digitalcredentials.github.io/vc-test-fixtures/verifiableCredentials/v2/bothSignatureTypes/didkey/legacy-noStatus-noExpiry-nonOBWithOBContext.json)

[Open Directly in VerifierPlus](https://verifierplus.org/#verify?vc=https://digitalcredentials.github.io/vc-test-fixtures/verifiableCredentials/v2/bothSignatureTypes/didkey/legacy-noStatus-noExpiry-nonOBWithOBContext.json)

![QR](verifiableCredentials/v2/bothSignatureTypes/didkey/legacy-noStatus-noExpiry-nonOBWithOBContext.png)

### /v2/bothSignatureTypes/didkey/legacy-noStatus-noExpiry.json

<details>

<summary>Click to see copyable raw json</summary>

```json
   {
    "@context": [
        "https://www.w3.org/ns/credentials/v2",
        "https://purl.imsglobal.org/spec/ob/v3p0/context-3.0.3.json",
        "https://w3id.org/security/suites/ed25519-2020/v1"
    ],
    "id": "http://example.com/credentials/3527",
    "type": [
        "VerifiableCredential",
        "OpenBadgeCredential"
    ],
    "issuer": {
        "id": "did:key:z6MknNQD1WHLGGraFi6zcbGevuAgkVfdyCdtZnQTGWVVvR5Q",
        "type": [
            "Profile"
        ],
        "name": "Example Corp"
    },
    "validFrom": "2010-01-01T00:00:00Z",
    "name": "Teamwork Badge",
    "credentialSubject": {
        "id": "did:example:ebfeb1f712ebc6f1c276e12ec21",
        "type": [
            "AchievementSubject"
        ],
        "achievement": {
            "id": "https://example.com/achievements/21st-century-skills/teamwork",
            "type": [
                "Achievement"
            ],
            "criteria": {
                "narrative": "Team members are nominated for this badge by their peers and recognized upon review by Example Corp management."
            },
            "description": "This badge recognizes the development of the capacity to collaborate within a group environment.",
            "name": "Teamwork"
        }
    },
    "proof": [
        {
            "type": "DataIntegrityProof",
            "created": "2025-10-21T17:36:35Z",
            "verificationMethod": "did:key:z6MknNQD1WHLGGraFi6zcbGevuAgkVfdyCdtZnQTGWVVvR5Q#z6MknNQD1WHLGGraFi6zcbGevuAgkVfdyCdtZnQTGWVVvR5Q",
            "cryptosuite": "eddsa-rdfc-2022",
            "proofPurpose": "assertionMethod",
            "proofValue": "zmiDkVKnpeYqoKPZQoAXRUpV7fp2AE7o6cvdu8vVYqo5prKxJUy4tBiggLNc3g58AfU7FBXXvZFStgMezzAWEXxT"
        },
        {
            "type": "Ed25519Signature2020",
            "created": "2025-10-21T17:36:35Z",
            "verificationMethod": "did:key:z6MknNQD1WHLGGraFi6zcbGevuAgkVfdyCdtZnQTGWVVvR5Q#z6MknNQD1WHLGGraFi6zcbGevuAgkVfdyCdtZnQTGWVVvR5Q",
            "proofPurpose": "assertionMethod",
            "proofValue": "zcjEG7ixf7C1szVcAjA7uDHmv5B2rE6dw8qfvo8t16TbStqhKNTPUicNVN4t4F6Gq1DtpXRwDxj8rCHudD7MmMFr"
        }
    ]
}
```

</details>

[rawURL](https://digitalcredentials.github.io/vc-test-fixtures/verifiableCredentials/v2/bothSignatureTypes/didkey/legacy-noStatus-noExpiry.json)

[Open Directly in VerifierPlus](https://verifierplus.org/#verify?vc=https://digitalcredentials.github.io/vc-test-fixtures/verifiableCredentials/v2/bothSignatureTypes/didkey/legacy-noStatus-noExpiry.json)

![QR](verifiableCredentials/v2/bothSignatureTypes/didkey/legacy-noStatus-noExpiry.png)

### /v2/bothSignatureTypes/didkey/legacy-noStatus-notExpired-endorsement-withSchema.json

<details>

<summary>Click to see copyable raw json</summary>

```json
   {
    "@context": [
        "https://www.w3.org/ns/credentials/v2",
        "https://purl.imsglobal.org/spec/ob/v3p0/context-3.0.3.json",
        "https://purl.imsglobal.org/spec/ob/v3p0/extensions.json",
        "https://w3id.org/security/suites/ed25519-2020/v1"
    ],
    "id": "http://1edtech.edu/endorsementcredential/3732",
    "type": [
        "VerifiableCredential",
        "EndorsementCredential"
    ],
    "name": "SDE endorsement",
    "issuer": {
        "id": "did:key:z6MknNQD1WHLGGraFi6zcbGevuAgkVfdyCdtZnQTGWVVvR5Q",
        "type": [
            "Profile"
        ],
        "name": "State Department of Education"
    },
    "validFrom": "2010-01-01T00:00:00Z",
    "validUntil": "2030-01-01T00:00:00Z",
    "credentialSubject": {
        "id": "https://1edtech.edu/issuers/565049",
        "type": [
            "EndorsementSubject"
        ],
        "endorsementComment": "1EdTech University is in good standing"
    },
    "credentialSchema": [
        {
            "id": "https://purl.imsglobal.org/spec/ob/v3p0/schema/json/ob_v3p0_endorsementcredential_schema.json",
            "type": "1EdTechJsonSchemaValidator2019"
        }
    ],
    "proof": [
        {
            "type": "DataIntegrityProof",
            "created": "2025-10-21T18:59:37Z",
            "verificationMethod": "did:key:z6MknNQD1WHLGGraFi6zcbGevuAgkVfdyCdtZnQTGWVVvR5Q#z6MknNQD1WHLGGraFi6zcbGevuAgkVfdyCdtZnQTGWVVvR5Q",
            "cryptosuite": "eddsa-rdfc-2022",
            "proofPurpose": "assertionMethod",
            "proofValue": "z2ezTpoGKVrTk3dBKN89sLW363hVfWweeT1NhEkuN21dp2WogviMJfgDZvw5xrpJBZsWT2SwiQHEN2zCn7pF7yWne"
        },
        {
            "type": "Ed25519Signature2020",
            "created": "2025-10-21T18:59:37Z",
            "verificationMethod": "did:key:z6MknNQD1WHLGGraFi6zcbGevuAgkVfdyCdtZnQTGWVVvR5Q#z6MknNQD1WHLGGraFi6zcbGevuAgkVfdyCdtZnQTGWVVvR5Q",
            "proofPurpose": "assertionMethod",
            "proofValue": "z5ZeqRhRd4rHkeQtvewNc3WYxoBR7oCot6XBufEJHXHDqgM2gvaqMHdhg1KjmEqDwY4PYuzbehsS7SVwZv4sVe1cN"
        }
    ]
}
```

</details>

[rawURL](https://digitalcredentials.github.io/vc-test-fixtures/verifiableCredentials/v2/bothSignatureTypes/didkey/legacy-noStatus-notExpired-endorsement-withSchema.json)

[Open Directly in VerifierPlus](https://verifierplus.org/#verify?vc=https://digitalcredentials.github.io/vc-test-fixtures/verifiableCredentials/v2/bothSignatureTypes/didkey/legacy-noStatus-notExpired-endorsement-withSchema.json)

![QR](verifiableCredentials/v2/bothSignatureTypes/didkey/legacy-noStatus-notExpired-endorsement-withSchema.png)

### /v2/bothSignatureTypes/didkey/legacy-noStatus-notExpired-endorsement.json

<details>

<summary>Click to see copyable raw json</summary>

```json
   {
    "@context": [
        "https://www.w3.org/ns/credentials/v2",
        "https://purl.imsglobal.org/spec/ob/v3p0/context-3.0.3.json",
        "https://purl.imsglobal.org/spec/ob/v3p0/extensions.json",
        "https://w3id.org/security/suites/ed25519-2020/v1"
    ],
    "id": "http://1edtech.edu/endorsementcredential/3732",
    "type": [
        "VerifiableCredential",
        "EndorsementCredential"
    ],
    "name": "SDE endorsement",
    "issuer": {
        "id": "did:key:z6MknNQD1WHLGGraFi6zcbGevuAgkVfdyCdtZnQTGWVVvR5Q",
        "type": [
            "Profile"
        ],
        "name": "State Department of Education"
    },
    "validFrom": "2010-01-01T00:00:00Z",
    "validUntil": "2030-01-01T00:00:00Z",
    "credentialSubject": {
        "id": "https://1edtech.edu/issuers/565049",
        "type": [
            "EndorsementSubject"
        ],
        "endorsementComment": "1EdTech University is in good standing"
    },
    "proof": [
        {
            "type": "DataIntegrityProof",
            "created": "2025-10-21T19:00:23Z",
            "verificationMethod": "did:key:z6MknNQD1WHLGGraFi6zcbGevuAgkVfdyCdtZnQTGWVVvR5Q#z6MknNQD1WHLGGraFi6zcbGevuAgkVfdyCdtZnQTGWVVvR5Q",
            "cryptosuite": "eddsa-rdfc-2022",
            "proofPurpose": "assertionMethod",
            "proofValue": "z5fE8hVqQW18EXrhkHZKhY2Tpt4oqDN4NdZJ1aGoZrRTygF2vnLEbH5pC1ZQJ7Ng4TetAf6Qew2vj4FP365wgqqPc"
        },
        {
            "type": "Ed25519Signature2020",
            "created": "2025-10-21T19:00:23Z",
            "verificationMethod": "did:key:z6MknNQD1WHLGGraFi6zcbGevuAgkVfdyCdtZnQTGWVVvR5Q#z6MknNQD1WHLGGraFi6zcbGevuAgkVfdyCdtZnQTGWVVvR5Q",
            "proofPurpose": "assertionMethod",
            "proofValue": "zPKjDnEAzb6KVBp8f2HntQwDwSGM91u2V2dnNv8qJAUYYEGzKuJV8yYZrHmYmaA3xVEJsEjHjBDTJG9rXnbKpBCi"
        }
    ]
}
```

</details>

[rawURL](https://digitalcredentials.github.io/vc-test-fixtures/verifiableCredentials/v2/bothSignatureTypes/didkey/legacy-noStatus-notExpired-endorsement.json)

[Open Directly in VerifierPlus](https://verifierplus.org/#verify?vc=https://digitalcredentials.github.io/vc-test-fixtures/verifiableCredentials/v2/bothSignatureTypes/didkey/legacy-noStatus-notExpired-endorsement.json)

![QR](verifiableCredentials/v2/bothSignatureTypes/didkey/legacy-noStatus-notExpired-endorsement.png)

### /v2/bothSignatureTypes/didkey/noRegistry-revokedStatus-expired.json

<details>

<summary>Click to see copyable raw json</summary>

```json
   {
    "type": [
        "VerifiableCredential",
        "OpenBadgeCredential"
    ],
    "name": "Teamwork Badge",
    "issuer": {
        "type": [
            "Profile"
        ],
        "name": "Example Corp",
        "id": "did:key:z6MkqBcwQ7qnRBRpgtsJQviLFeYxExMUE2k9nwKkMTF3DdRZ"
    },
    "@context": [
        "https://www.w3.org/ns/credentials/v2",
        "https://purl.imsglobal.org/spec/ob/v3p0/context-3.0.3.json",
        "https://w3id.org/security/suites/ed25519-2020/v1"
    ],
    "validFrom": "2010-01-01T00:00:00Z",
    "validUntil": "2010-01-02T00:00:00Z",
    "credentialSubject": {
        "type": [
            "AchievementSubject"
        ],
        "name": "Sam Salmon",
        "achievement": {
            "id": "https://example.com/achievements/21st-century-skills/teamwork",
            "type": [
                "Achievement"
            ],
            "name": "Bachelors - v2 - revoked",
            "criteria": {
                "narrative": "Team members are nominated for this badge by their peers and recognized upon review by Example Corp management."
            },
            "description": "This badge recognizes the development of the capacity to collaborate within a group environment."
        }
    },
    "id": "urn:uuid:677fe8a6cacf98774d482d06",
    "credentialStatus": {
        "id": "https://raw.githubusercontent.com/digitalcredentials/verifier-core/refs/heads/main/src/test-fixtures/status/e5WK8CbZ1GjycuPombrj#8",
        "type": "BitstringStatusListEntry",
        "statusPurpose": "revocation",
        "statusListCredential": "https://raw.githubusercontent.com/digitalcredentials/verifier-core/refs/heads/main/src/test-fixtures/status/e5WK8CbZ1GjycuPombrj",
        "statusListIndex": "8"
    },
    "proof": [
        {
            "type": "DataIntegrityProof",
            "created": "2025-05-13T13:47:17Z",
            "verificationMethod": "did:key:z6MkqBcwQ7qnRBRpgtsJQviLFeYxExMUE2k9nwKkMTF3DdRZ#z6MkqBcwQ7qnRBRpgtsJQviLFeYxExMUE2k9nwKkMTF3DdRZ",
            "cryptosuite": "eddsa-rdfc-2022",
            "proofPurpose": "assertionMethod",
            "proofValue": "z2nki6gGUZSxXDggPbFz3McQ8o5oZ2JSAbnXUo6myAiYo81hNJaLMrBjZJP1Vn9zyFHmQwrph3b28LG45xLspKUJg"
        },
        {
            "type": "Ed25519Signature2020",
            "created": "2025-05-13T13:47:17Z",
            "verificationMethod": "did:key:z6MkqBcwQ7qnRBRpgtsJQviLFeYxExMUE2k9nwKkMTF3DdRZ#z6MkqBcwQ7qnRBRpgtsJQviLFeYxExMUE2k9nwKkMTF3DdRZ",
            "proofPurpose": "assertionMethod",
            "proofValue": "z46HfsmgZ9kVdmW24TWgCEVGrNCLpriNdzw7YXLW4n6wqerka1eTm81dTKN2MsQ96z5uKbpaAXwMHXUvjMj4SBka3"
        }
    ]
}
```

</details>

[rawURL](https://digitalcredentials.github.io/vc-test-fixtures/verifiableCredentials/v2/bothSignatureTypes/didkey/noRegistry-revokedStatus-expired.json)

[Open Directly in VerifierPlus](https://verifierplus.org/#verify?vc=https://digitalcredentials.github.io/vc-test-fixtures/verifiableCredentials/v2/bothSignatureTypes/didkey/noRegistry-revokedStatus-expired.json)

![QR](verifiableCredentials/v2/bothSignatureTypes/didkey/noRegistry-revokedStatus-expired.png)

### /v2/bothSignatureTypes/didkey/noRegistry-revokedStatus-notExpired.json

<details>

<summary>Click to see copyable raw json</summary>

```json
   {
    "type": [
        "VerifiableCredential",
        "OpenBadgeCredential"
    ],
    "name": "Teamwork Badge",
    "issuer": {
        "type": [
            "Profile"
        ],
        "name": "Example Corp",
        "id": "did:key:z6MkqBcwQ7qnRBRpgtsJQviLFeYxExMUE2k9nwKkMTF3DdRZ"
    },
    "@context": [
        "https://www.w3.org/ns/credentials/v2",
        "https://purl.imsglobal.org/spec/ob/v3p0/context-3.0.3.json",
        "https://w3id.org/security/suites/ed25519-2020/v1"
    ],
    "validFrom": "2010-01-01T00:00:00Z",
    "validUntil": "2056-01-02T00:00:00Z",
    "credentialSubject": {
        "type": [
            "AchievementSubject"
        ],
        "name": "Sam Salmon",
        "achievement": {
            "id": "https://example.com/achievements/21st-century-skills/teamwork",
            "type": [
                "Achievement"
            ],
            "name": "Bachelors - v2 - revoked",
            "criteria": {
                "narrative": "Team members are nominated for this badge by their peers and recognized upon review by Example Corp management."
            },
            "description": "This badge recognizes the development of the capacity to collaborate within a group environment."
        }
    },
    "id": "urn:uuid:677fe8a6cacf98774d482d06",
    "credentialStatus": {
        "id": "https://raw.githubusercontent.com/digitalcredentials/verifier-core/refs/heads/main/src/test-fixtures/status/e5WK8CbZ1GjycuPombrj#8",
        "type": "BitstringStatusListEntry",
        "statusPurpose": "revocation",
        "statusListCredential": "https://raw.githubusercontent.com/digitalcredentials/verifier-core/refs/heads/main/src/test-fixtures/status/e5WK8CbZ1GjycuPombrj",
        "statusListIndex": "8"
    },
    "proof": [
        {
            "type": "DataIntegrityProof",
            "created": "2025-05-13T15:00:25Z",
            "verificationMethod": "did:key:z6MkqBcwQ7qnRBRpgtsJQviLFeYxExMUE2k9nwKkMTF3DdRZ#z6MkqBcwQ7qnRBRpgtsJQviLFeYxExMUE2k9nwKkMTF3DdRZ",
            "cryptosuite": "eddsa-rdfc-2022",
            "proofPurpose": "assertionMethod",
            "proofValue": "z2S7HV9bcprfSJMbHryubCFBDJJu3ArScrTTXetFt2j438rUNdSpydb3RsTM4e6CUc9Zb2xxh8j67pYWtDYrLe9W6"
        },
        {
            "type": "Ed25519Signature2020",
            "created": "2025-05-13T15:00:25Z",
            "verificationMethod": "did:key:z6MkqBcwQ7qnRBRpgtsJQviLFeYxExMUE2k9nwKkMTF3DdRZ#z6MkqBcwQ7qnRBRpgtsJQviLFeYxExMUE2k9nwKkMTF3DdRZ",
            "proofPurpose": "assertionMethod",
            "proofValue": "z2Pv6CBTzN3XMgkrLU9fGALKJbtmTQ9tbnjqy3eGHLvyTaBs7TxLBAgsdnGrNpyxFouUKw818jaKKRMrnPycpeJJu"
        }
    ]
}
```

</details>

[rawURL](https://digitalcredentials.github.io/vc-test-fixtures/verifiableCredentials/v2/bothSignatureTypes/didkey/noRegistry-revokedStatus-notExpired.json)

[Open Directly in VerifierPlus](https://verifierplus.org/#verify?vc=https://digitalcredentials.github.io/vc-test-fixtures/verifiableCredentials/v2/bothSignatureTypes/didkey/noRegistry-revokedStatus-notExpired.json)

![QR](verifiableCredentials/v2/bothSignatureTypes/didkey/noRegistry-revokedStatus-notExpired.png)

### /v2/bothSignatureTypes/didkey/oidf-revokedStatus-noExpiry.json

<details>

<summary>Click to see copyable raw json</summary>

```json
   {
    "type": [
        "VerifiableCredential",
        "OpenBadgeCredential"
    ],
    "name": "Teamwork Badge",
    "issuer": {
        "type": [
            "Profile"
        ],
        "name": "Example Corp",
        "id": "did:key:z6MkjoriXdbyWD25YXTed114F8hdJrLXQ567xxPHAUKxpKkS"
    },
    "@context": [
        "https://www.w3.org/ns/credentials/v2",
        "https://purl.imsglobal.org/spec/ob/v3p0/context-3.0.3.json",
        "https://w3id.org/security/suites/ed25519-2020/v1"
    ],
    "validFrom": "2010-01-01T00:00:00Z",
    "credentialSubject": {
        "type": [
            "AchievementSubject"
        ],
        "name": "Sam Salmon",
        "achievement": {
            "id": "https://example.com/achievements/21st-century-skills/teamwork",
            "type": [
                "Achievement"
            ],
            "name": "Bachelors - v2 - revoked",
            "criteria": {
                "narrative": "Team members are nominated for this badge by their peers and recognized upon review by Example Corp management."
            },
            "description": "This badge recognizes the development of the capacity to collaborate within a group environment."
        }
    },
    "id": "urn:uuid:677fe8a6cacf98774d482d06",
    "credentialStatus": {
        "id": "https://raw.githubusercontent.com/digitalcredentials/verifier-core/refs/heads/main/src/test-fixtures/status/e5WK8CbZ1GjycuPombrj#8",
        "type": "BitstringStatusListEntry",
        "statusPurpose": "revocation",
        "statusListCredential": "https://raw.githubusercontent.com/digitalcredentials/verifier-core/refs/heads/main/src/test-fixtures/status/e5WK8CbZ1GjycuPombrj",
        "statusListIndex": "8"
    },
    "proof": [
        {
            "type": "DataIntegrityProof",
            "created": "2025-05-13T13:08:27Z",
            "verificationMethod": "did:key:z6MkjoriXdbyWD25YXTed114F8hdJrLXQ567xxPHAUKxpKkS#z6MkjoriXdbyWD25YXTed114F8hdJrLXQ567xxPHAUKxpKkS",
            "cryptosuite": "eddsa-rdfc-2022",
            "proofPurpose": "assertionMethod",
            "proofValue": "z54nxGpWbsdR7hAgZ2JKLG5EJRgtpi24p4vTexV1q4WjKdDjYid5Ut5Ej6NFsjxwyEosyJe4KUUrXzHCstqrEWb8y"
        },
        {
            "type": "Ed25519Signature2020",
            "created": "2025-05-13T13:08:27Z",
            "verificationMethod": "did:key:z6MkjoriXdbyWD25YXTed114F8hdJrLXQ567xxPHAUKxpKkS#z6MkjoriXdbyWD25YXTed114F8hdJrLXQ567xxPHAUKxpKkS",
            "proofPurpose": "assertionMethod",
            "proofValue": "z5f6vQ11TMGC2qR1VDBju388snHRHjHhmSA91N734P7QiQihEoJJjfkN1nkwrKJwNKx819JV4hx52yz7Ck9ungkA7"
        }
    ]
}
```

</details>

[rawURL](https://digitalcredentials.github.io/vc-test-fixtures/verifiableCredentials/v2/bothSignatureTypes/didkey/oidf-revokedStatus-noExpiry.json)

[Open Directly in VerifierPlus](https://verifierplus.org/#verify?vc=https://digitalcredentials.github.io/vc-test-fixtures/verifiableCredentials/v2/bothSignatureTypes/didkey/oidf-revokedStatus-noExpiry.json)

![QR](verifiableCredentials/v2/bothSignatureTypes/didkey/oidf-revokedStatus-noExpiry.png)

### /v2/bothSignatureTypes/didweb/legacy-revokedStatus-expired.json

<details>

<summary>Click to see copyable raw json</summary>

```json
   {
    "type": [
        "VerifiableCredential",
        "OpenBadgeCredential"
    ],
    "name": "Teamwork Badge",
    "issuer": {
        "type": [
            "Profile"
        ],
        "name": "Example Corp",
        "id": "did:web:digitalcredentials.github.io:vc-test-fixtures:dids:legacy"
    },
    "@context": [
        "https://www.w3.org/ns/credentials/v2",
        "https://purl.imsglobal.org/spec/ob/v3p0/context-3.0.3.json",
        "https://w3id.org/security/suites/ed25519-2020/v1"
    ],
    "validFrom": "2010-01-01T00:00:00Z",
    "validUntil": "2010-01-02T00:00:00Z",
    "credentialSubject": {
        "type": [
            "AchievementSubject"
        ],
        "name": "Sam Salmon",
        "achievement": {
            "id": "https://example.com/achievements/21st-century-skills/teamwork",
            "type": [
                "Achievement"
            ],
            "name": "Bachelors - v2 - revoked",
            "criteria": {
                "narrative": "Team members are nominated for this badge by their peers and recognized upon review by Example Corp management."
            },
            "description": "This badge recognizes the development of the capacity to collaborate within a group environment."
        }
    },
    "id": "urn:uuid:677fe8a6cacf98774d482d06",
    "credentialStatus": {
        "id": "https://raw.githubusercontent.com/digitalcredentials/verifier-core/refs/heads/main/src/test-fixtures/status/e5WK8CbZ1GjycuPombrj#8",
        "type": "BitstringStatusListEntry",
        "statusPurpose": "revocation",
        "statusListCredential": "https://raw.githubusercontent.com/digitalcredentials/verifier-core/refs/heads/main/src/test-fixtures/status/e5WK8CbZ1GjycuPombrj",
        "statusListIndex": "8"
    },
    "proof": [
        {
            "type": "DataIntegrityProof",
            "created": "2025-05-13T13:33:42Z",
            "verificationMethod": "did:web:digitalcredentials.github.io:vc-test-fixtures:dids:legacy#z6MkjXe1vZvPRqFuc9nRBtZ3e1Y9XKDFSbjFAfzLfW2bD6cZ",
            "cryptosuite": "eddsa-rdfc-2022",
            "proofPurpose": "assertionMethod",
            "proofValue": "zSNQwFaL4nSWSvyvs2Th947STik5ZJixSw9o7pgN4J5YTdSetn1gDeMgjLgkjkq3hbnN2pArJsWpzina95MicibC"
        },
        {
            "type": "Ed25519Signature2020",
            "created": "2025-05-13T13:33:42Z",
            "verificationMethod": "did:web:digitalcredentials.github.io:vc-test-fixtures:dids:legacy#z6MkjXe1vZvPRqFuc9nRBtZ3e1Y9XKDFSbjFAfzLfW2bD6cZ",
            "proofPurpose": "assertionMethod",
            "proofValue": "z295BxfPFgFqB3RZV94PrB4bSsdqTLDYMsrkUvEkq4jBa11i1pjMd3TxcRw3kBPTZS8kcnxzx57MPyLvyZ5KiMu8q"
        }
    ]
}
```

</details>

[rawURL](https://digitalcredentials.github.io/vc-test-fixtures/verifiableCredentials/v2/bothSignatureTypes/didweb/legacy-revokedStatus-expired.json)

[Open Directly in VerifierPlus](https://verifierplus.org/#verify?vc=https://digitalcredentials.github.io/vc-test-fixtures/verifiableCredentials/v2/bothSignatureTypes/didweb/legacy-revokedStatus-expired.json)

![QR](verifiableCredentials/v2/bothSignatureTypes/didweb/legacy-revokedStatus-expired.png)

### /v2/bothSignatureTypes/didweb/legacy-revokedStatus-noExpiry.json

<details>

<summary>Click to see copyable raw json</summary>

```json
   {
    "type": [
        "VerifiableCredential",
        "OpenBadgeCredential"
    ],
    "name": "Teamwork Badge",
    "issuer": {
        "type": [
            "Profile"
        ],
        "name": "Example Corp",
        "id": "did:web:digitalcredentials.github.io:vc-test-fixtures:dids:legacy"
    },
    "@context": [
        "https://www.w3.org/ns/credentials/v2",
        "https://purl.imsglobal.org/spec/ob/v3p0/context-3.0.3.json",
        "https://w3id.org/security/suites/ed25519-2020/v1"
    ],
    "validFrom": "2010-01-01T00:00:00Z",
    "credentialSubject": {
        "type": [
            "AchievementSubject"
        ],
        "name": "Sam Salmon",
        "achievement": {
            "id": "https://example.com/achievements/21st-century-skills/teamwork",
            "type": [
                "Achievement"
            ],
            "name": "Bachelors - v2 - revoked",
            "criteria": {
                "narrative": "Team members are nominated for this badge by their peers and recognized upon review by Example Corp management."
            },
            "description": "This badge recognizes the development of the capacity to collaborate within a group environment."
        }
    },
    "id": "urn:uuid:677fe8a6cacf98774d482d06",
    "credentialStatus": {
        "id": "https://raw.githubusercontent.com/digitalcredentials/verifier-core/refs/heads/main/src/test-fixtures/status/e5WK8CbZ1GjycuPombrj#8",
        "type": "BitstringStatusListEntry",
        "statusPurpose": "revocation",
        "statusListCredential": "https://raw.githubusercontent.com/digitalcredentials/verifier-core/refs/heads/main/src/test-fixtures/status/e5WK8CbZ1GjycuPombrj",
        "statusListIndex": "8"
    },
    "proof": [
        {
            "type": "DataIntegrityProof",
            "created": "2025-05-13T13:26:21Z",
            "verificationMethod": "did:web:digitalcredentials.github.io:vc-test-fixtures:dids:legacy#z6MkjXe1vZvPRqFuc9nRBtZ3e1Y9XKDFSbjFAfzLfW2bD6cZ",
            "cryptosuite": "eddsa-rdfc-2022",
            "proofPurpose": "assertionMethod",
            "proofValue": "z2DGDQ91m6Az4J5FETA7hSvGG6fB6o8fMAH8Ne5eWET4x4g5qPk4qwoucAuzyd5nQoLw5xWTC3S4VwgN3VxAveVCc"
        },
        {
            "type": "Ed25519Signature2020",
            "created": "2025-05-13T13:26:21Z",
            "verificationMethod": "did:web:digitalcredentials.github.io:vc-test-fixtures:dids:legacy#z6MkjXe1vZvPRqFuc9nRBtZ3e1Y9XKDFSbjFAfzLfW2bD6cZ",
            "proofPurpose": "assertionMethod",
            "proofValue": "z4hXpmnSApWLXZNafRqSU4vwxZwPVZUdPMHHXjjQDx9KZZRrGpGbbT9gdtaWvoY1r6HxJYo1q1KqxGmb3fUHEh4DT"
        }
    ]
}
```

</details>

[rawURL](https://digitalcredentials.github.io/vc-test-fixtures/verifiableCredentials/v2/bothSignatureTypes/didweb/legacy-revokedStatus-noExpiry.json)

[Open Directly in VerifierPlus](https://verifierplus.org/#verify?vc=https://digitalcredentials.github.io/vc-test-fixtures/verifiableCredentials/v2/bothSignatureTypes/didweb/legacy-revokedStatus-noExpiry.json)

![QR](verifiableCredentials/v2/bothSignatureTypes/didweb/legacy-revokedStatus-noExpiry.png)

### /v2/bothSignatureTypes/didweb/oidf-noStatus-notExpired.json

<details>

<summary>Click to see copyable raw json</summary>

```json
   {
    "type": [
        "VerifiableCredential",
        "OpenBadgeCredential"
    ],
    "name": "Teamwork Badge",
    "issuer": {
        "type": [
            "Profile"
        ],
        "name": "Example Corp",
        "id": "did:web:digitalcredentials.github.io:vc-test-fixtures:dids:oidf"
    },
    "@context": [
        "https://www.w3.org/ns/credentials/v2",
        "https://purl.imsglobal.org/spec/ob/v3p0/context-3.0.3.json",
        "https://w3id.org/security/suites/ed25519-2020/v1"
    ],
    "validFrom": "2010-01-01T00:00:00Z",
    "validUntil": "2056-01-02T00:00:00Z",
    "credentialSubject": {
        "type": [
            "AchievementSubject"
        ],
        "name": "Sam Salmon",
        "achievement": {
            "id": "https://example.com/achievements/21st-century-skills/teamwork",
            "type": [
                "Achievement"
            ],
            "name": "Bachelors - v2 - revoked",
            "criteria": {
                "narrative": "Team members are nominated for this badge by their peers and recognized upon review by Example Corp management."
            },
            "description": "This badge recognizes the development of the capacity to collaborate within a group environment."
        }
    },
    "id": "urn:uuid:677fe8a6cacf98774d482d06",
    "proof": [
        {
            "type": "DataIntegrityProof",
            "created": "2025-05-13T15:04:59Z",
            "verificationMethod": "did:web:digitalcredentials.github.io:vc-test-fixtures:dids:oidf#z6MkjXe1vZvPRqFuc9nRBtZ3e1Y9XKDFSbjFAfzLfW2bD6cZ",
            "cryptosuite": "eddsa-rdfc-2022",
            "proofPurpose": "assertionMethod",
            "proofValue": "z53HUxk4WjTqwT86L31yghBLCaq51Vq8qbTyGt2schuB1mHZD6Hu6ussqHtCthoqGpwDmbThDJTmHE43V3DUkB3jZ"
        },
        {
            "type": "Ed25519Signature2020",
            "created": "2025-05-13T15:04:59Z",
            "verificationMethod": "did:web:digitalcredentials.github.io:vc-test-fixtures:dids:oidf#z6MkjXe1vZvPRqFuc9nRBtZ3e1Y9XKDFSbjFAfzLfW2bD6cZ",
            "proofPurpose": "assertionMethod",
            "proofValue": "z2G2wBi5LFRYSN5WmvifU1htBVjRZkLwMYBrY9EXdx7GpWyMRijfWnryivKTPSVRMqnfsE5fFrwnHktDsHs76HcES"
        }
    ]
}
```

</details>

[rawURL](https://digitalcredentials.github.io/vc-test-fixtures/verifiableCredentials/v2/bothSignatureTypes/didweb/oidf-noStatus-notExpired.json)

[Open Directly in VerifierPlus](https://verifierplus.org/#verify?vc=https://digitalcredentials.github.io/vc-test-fixtures/verifiableCredentials/v2/bothSignatureTypes/didweb/oidf-noStatus-notExpired.json)

![QR](verifiableCredentials/v2/bothSignatureTypes/didweb/oidf-noStatus-notExpired.png)

### /v2/dataIntegrityProof/didKey/legacyRegistry-noStatus- noExpiry-credSubjName.json

<details>

<summary>Click to see copyable raw json</summary>

```json
   {
    "@context": [
        "https://www.w3.org/ns/credentials/v2",
        "https://purl.imsglobal.org/spec/ob/v3p0/context-3.0.3.json",
        "https://w3id.org/security/suites/ed25519-2020/v1"
    ],
    "id": "urn:uuid:19281fe8-90d2-4eao-a9da-6188898a6c",
    "type": [
        "VerifiableCredential",
        "OpenBadgeCredential"
    ],
    "issuer": {
        "type": [
            "Profile"
        ],
        "name": "The Learned",
        "image": {
            "id": "https://digitalcredentials.github.io/badge-assets/classroom.png",
            "type": "Image",
            "caption": "Learned logo"
        },
        "id": "did:key:z6MkjoriXdbyWD25YXTed114F8hdJrLXQ567xxPHAUKxpKkS"
    },
    "validFrom": "2025-02-24T00:00:00Z",
    "credentialSubject": {
        "type": [
            "AchievementSubject"
        ],
        "name": "Parker Pearl",
        "achievement": {
            "id": "https://something.org/theProgram",
            "achievementType": "Program",
            "type": [
                "Achievement"
            ],
            "image": {
                "id": "https://digitalcredentials.github.io/badge-assets/brain.png",
                "type": "Image",
                "caption": "Certificate logo"
            },
            "criteria": {
                "narrative": "Objectively told the truth"
            },
            "description": "Successfully completed all modules.",
            "name": "Truth, veracity, candor, and verisimilitude."
        }
    },
    "proof": {
        "type": "DataIntegrityProof",
        "created": "2025-12-16T15:29:35Z",
        "verificationMethod": "did:key:z6MkjoriXdbyWD25YXTed114F8hdJrLXQ567xxPHAUKxpKkS#z6MkjoriXdbyWD25YXTed114F8hdJrLXQ567xxPHAUKxpKkS",
        "cryptosuite": "eddsa-rdfc-2022",
        "proofPurpose": "assertionMethod",
        "proofValue": "z2Zw9tAWVKxVpUX6dHnXcrP2y4kGPP5LYBQ9CvZrVyJ5JMq9wVtfZCv68otSYPuxpzahSdGBQQjXagQE5rDwLCBZr"
    }
}
```

</details>

[rawURL](https://digitalcredentials.github.io/vc-test-fixtures/verifiableCredentials/v2/dataIntegrityProof/didKey/legacyRegistry-noStatus- noExpiry-credSubjName.json)

[Open Directly in VerifierPlus](https://verifierplus.org/#verify?vc=https://digitalcredentials.github.io/vc-test-fixtures/verifiableCredentials/v2/dataIntegrityProof/didKey/legacyRegistry-noStatus- noExpiry-credSubjName.json)

![QR](verifiableCredentials/v2/dataIntegrityProof/didKey/legacyRegistry-noStatus- noExpiry-credSubjName.png)

### /v2/dataIntegrityProof/didKey/legacyRegistry-noStatus-noExpiry-OBSpecExample.json

<details>

<summary>Click to see copyable raw json</summary>

```json
   {
    "@context": [
        "https://www.w3.org/ns/credentials/v2",
        "https://purl.imsglobal.org/spec/ob/v3p0/context-3.0.3.json"
    ],
    "id": "http://example.com/credentials/3527",
    "type": [
        "VerifiableCredential",
        "OpenBadgeCredential"
    ],
    "issuer": {
        "id": "did:key:z6MknNQD1WHLGGraFi6zcbGevuAgkVfdyCdtZnQTGWVVvR5Q",
        "type": [
            "Profile"
        ],
        "name": "Example Corp"
    },
    "validFrom": "2010-01-01T00:00:00Z",
    "name": "Teamwork Badge",
    "credentialSubject": {
        "id": "did:example:ebfeb1f712ebc6f1c276e12ec21",
        "type": [
            "AchievementSubject"
        ],
        "achievement": {
            "id": "https://example.com/achievements/21st-century-skills/teamwork",
            "type": [
                "Achievement"
            ],
            "criteria": {
                "narrative": "Team members are nominated for this badge by their peers and recognized upon review by Example Corp management."
            },
            "description": "This badge recognizes the development of the capacity to collaborate within a group environment.",
            "name": "Teamwork"
        }
    },
    "proof": {
        "type": "DataIntegrityProof",
        "created": "2025-10-16T11:17:36Z",
        "verificationMethod": "did:key:z6MknNQD1WHLGGraFi6zcbGevuAgkVfdyCdtZnQTGWVVvR5Q#z6MknNQD1WHLGGraFi6zcbGevuAgkVfdyCdtZnQTGWVVvR5Q",
        "cryptosuite": "eddsa-rdfc-2022",
        "proofPurpose": "assertionMethod",
        "proofValue": "z24kX1hKxQCgTH7sZZuAXHJYRwDSMqNPtmM8UbTb2ryCXyHr1VeHdkt2xxUYSPrFJBuEivBqifYRYwg7p1jLNMbo9"
    }
}
```

</details>

[rawURL](https://digitalcredentials.github.io/vc-test-fixtures/verifiableCredentials/v2/dataIntegrityProof/didKey/legacyRegistry-noStatus-noExpiry-OBSpecExample.json)

[Open Directly in VerifierPlus](https://verifierplus.org/#verify?vc=https://digitalcredentials.github.io/vc-test-fixtures/verifiableCredentials/v2/dataIntegrityProof/didKey/legacyRegistry-noStatus-noExpiry-OBSpecExample.json)

![QR](verifiableCredentials/v2/dataIntegrityProof/didKey/legacyRegistry-noStatus-noExpiry-OBSpecExample.png)

### /v2/dataIntegrityProof/didKey/legacyRegistry-noStatus-noExpiry-achievementTypeExample.json

<details>

<summary>Click to see copyable raw json</summary>

```json
   {
    "type": [
        "VerifiableCredential",
        "OpenBadgeCredential"
    ],
    "name": "Teamwork Badge",
    "issuer": {
        "type": [
            "Profile"
        ],
        "name": "Example Corp",
        "id": "did:key:z6MknNQD1WHLGGraFi6zcbGevuAgkVfdyCdtZnQTGWVVvR5Q"
    },
    "@context": [
        "https://www.w3.org/ns/credentials/v2",
        "https://purl.imsglobal.org/spec/ob/v3p0/context-3.0.3.json",
        "https://w3id.org/security/suites/ed25519-2020/v1"
    ],
    "validFrom": "2010-01-01T00:00:00Z",
    "credentialSubject": {
        "type": [
            "AchievementSubject"
        ],
        "name": "Sam Salmon",
        "achievement": {
            "id": "https://example.com/achievements/21st-century-skills/teamwork",
            "achievementType": "Award",
            "type": [
                "Achievement"
            ],
            "name": "OBv3 achievementType example",
            "criteria": {
                "narrative": "Team members are nominated for this badge by their peers and recognized upon review by Example Corp management."
            },
            "description": "This badge recognizes the development of the capacity to collaborate within a group environment."
        }
    },
    "id": "urn:uuid:677fe8a6cacf98774d482d06",
    "proof": {
        "type": "DataIntegrityProof",
        "created": "2025-12-08T16:52:32Z",
        "verificationMethod": "did:key:z6MknNQD1WHLGGraFi6zcbGevuAgkVfdyCdtZnQTGWVVvR5Q#z6MknNQD1WHLGGraFi6zcbGevuAgkVfdyCdtZnQTGWVVvR5Q",
        "cryptosuite": "eddsa-rdfc-2022",
        "proofPurpose": "assertionMethod",
        "proofValue": "zTg6YPz8hyvkvvkdGFqr7tiWtL2o8ox7RZ57AWujqzK7VAxqN7RMzXYiSQ6x6YzEcVjPGSJLdaotvLiZWubnXM5K"
    }
}
```

</details>

[rawURL](https://digitalcredentials.github.io/vc-test-fixtures/verifiableCredentials/v2/dataIntegrityProof/didKey/legacyRegistry-noStatus-noExpiry-achievementTypeExample.json)

[Open Directly in VerifierPlus](https://verifierplus.org/#verify?vc=https://digitalcredentials.github.io/vc-test-fixtures/verifiableCredentials/v2/dataIntegrityProof/didKey/legacyRegistry-noStatus-noExpiry-achievementTypeExample.json)

![QR](verifiableCredentials/v2/dataIntegrityProof/didKey/legacyRegistry-noStatus-noExpiry-achievementTypeExample.png)

### /v2/dataIntegrityProof/didKey/legacyRegistry-noStatus-noExpiry-basicOBv3.json

<details>

<summary>Click to see copyable raw json</summary>

```json
   {
    "@context": [
        "https://www.w3.org/ns/credentials/v2",
        "https://purl.imsglobal.org/spec/ob/v3p0/context-3.0.3.json"
    ],
    "validFrom": "2025-01-09T15:06:31Z",
    "id": "http://example.com/credentials/3527",
    "type": [
        "VerifiableCredential",
        "OpenBadgeCredential"
    ],
    "issuer": {
        "id": "did:key:z6MknNQD1WHLGGraFi6zcbGevuAgkVfdyCdtZnQTGWVVvR5Q",
        "type": [
            "Profile"
        ],
        "name": "Example Corp"
    },
    "name": "Teamwork Badge",
    "credentialSubject": {
        "id": "did:example:ebfeb1f712ebc6f1c276e12ec21",
        "type": [
            "AchievementSubject"
        ],
        "achievement": {
            "id": "https://example.com/achievements/21st-century-skills/teamwork",
            "type": [
                "Achievement"
            ],
            "criteria": {
                "narrative": "Team members are nominated for this badge by their peers and recognized upon review by Example Corp management."
            },
            "description": "This badge recognizes the development of the capacity to collaborate within a group environment.",
            "name": "Teamwork"
        }
    },
    "proof": {
        "type": "DataIntegrityProof",
        "created": "2025-11-10T14:49:26Z",
        "verificationMethod": "did:key:z6MknNQD1WHLGGraFi6zcbGevuAgkVfdyCdtZnQTGWVVvR5Q#z6MknNQD1WHLGGraFi6zcbGevuAgkVfdyCdtZnQTGWVVvR5Q",
        "cryptosuite": "eddsa-rdfc-2022",
        "proofPurpose": "assertionMethod",
        "proofValue": "z3jqgQq2WpjsvHQp9XWxKcMvcehyTurrWawo33jvQk8CvbjQRvAgtsw9P2u2fXqY7iABSuBQdtt9UQyHsN82LRuq7"
    }
}
```

</details>

[rawURL](https://digitalcredentials.github.io/vc-test-fixtures/verifiableCredentials/v2/dataIntegrityProof/didKey/legacyRegistry-noStatus-noExpiry-basicOBv3.json)

[Open Directly in VerifierPlus](https://verifierplus.org/#verify?vc=https://digitalcredentials.github.io/vc-test-fixtures/verifiableCredentials/v2/dataIntegrityProof/didKey/legacyRegistry-noStatus-noExpiry-basicOBv3.json)

![QR](verifiableCredentials/v2/dataIntegrityProof/didKey/legacyRegistry-noStatus-noExpiry-basicOBv3.png)

### /v2/dataIntegrityProof/didKey/legacyRegistry-noStatus-noExpiry-credName.json

<details>

<summary>Click to see copyable raw json</summary>

```json
   {
    "@context": [
        "https://www.w3.org/ns/credentials/v2",
        "https://purl.imsglobal.org/spec/ob/v3p0/context-3.0.3.json",
        "https://w3id.org/security/suites/ed25519-2020/v1"
    ],
    "id": "urn:uuid:19281fe8-90d2-4eao-a9da-6188898a6c",
    "type": [
        "VerifiableCredential",
        "OpenBadgeCredential"
    ],
    "issuer": {
        "type": [
            "Profile"
        ],
        "name": "The Learned",
        "image": {
            "id": "https://digitalcredentials.github.io/badge-assets/classroom.png",
            "type": "Image",
            "caption": "Learned logo"
        },
        "id": "did:key:z6MkjoriXdbyWD25YXTed114F8hdJrLXQ567xxPHAUKxpKkS"
    },
    "validFrom": "2025-02-24T00:00:00Z",
    "name": "Parker Pearl",
    "credentialSubject": {
        "type": [
            "AchievementSubject"
        ],
        "achievement": {
            "id": "https://something.org/theProgram",
            "achievementType": "Program",
            "type": [
                "Achievement"
            ],
            "image": {
                "id": "https://digitalcredentials.github.io/badge-assets/brain.png",
                "type": "Image",
                "caption": "Certificate logo"
            },
            "criteria": {
                "narrative": "Objectively told the truth"
            },
            "description": "Successfully completed all modules.",
            "name": "Truth, veracity, candor, and verisimilitude."
        }
    },
    "proof": {
        "type": "DataIntegrityProof",
        "created": "2025-12-16T15:34:06Z",
        "verificationMethod": "did:key:z6MkjoriXdbyWD25YXTed114F8hdJrLXQ567xxPHAUKxpKkS#z6MkjoriXdbyWD25YXTed114F8hdJrLXQ567xxPHAUKxpKkS",
        "cryptosuite": "eddsa-rdfc-2022",
        "proofPurpose": "assertionMethod",
        "proofValue": "zJq8faw3zV7qgkRZFeMxVCF3WADmeYTgsTUrem2c4bJU7LQYEKeTx9u2jk16fyF8QrhVE5cQA425DG6HZwhRqbHZ"
    }
}
```

</details>

[rawURL](https://digitalcredentials.github.io/vc-test-fixtures/verifiableCredentials/v2/dataIntegrityProof/didKey/legacyRegistry-noStatus-noExpiry-credName.json)

[Open Directly in VerifierPlus](https://verifierplus.org/#verify?vc=https://digitalcredentials.github.io/vc-test-fixtures/verifiableCredentials/v2/dataIntegrityProof/didKey/legacyRegistry-noStatus-noExpiry-credName.json)

![QR](verifiableCredentials/v2/dataIntegrityProof/didKey/legacyRegistry-noStatus-noExpiry-credName.png)

### /v2/dataIntegrityProof/didKey/legacyRegistry-noStatus-noExpiry-credSubjName.json

<details>

<summary>Click to see copyable raw json</summary>

```json
   {
    "@context": [
        "https://www.w3.org/ns/credentials/v2",
        "https://purl.imsglobal.org/spec/ob/v3p0/context-3.0.3.json",
        "https://w3id.org/security/suites/ed25519-2020/v1"
    ],
    "id": "urn:uuid:19281fe8-90d2-4eao-a9da-6188898a6c",
    "type": [
        "VerifiableCredential",
        "OpenBadgeCredential"
    ],
    "issuer": {
        "type": [
            "Profile"
        ],
        "name": "The Learned",
        "image": {
            "id": "https://digitalcredentials.github.io/badge-assets/classroom.png",
            "type": "Image",
            "caption": "Learned logo"
        },
        "id": "did:key:z6MkjoriXdbyWD25YXTed114F8hdJrLXQ567xxPHAUKxpKkS"
    },
    "validFrom": "2025-02-24T00:00:00Z",
    "credentialSubject": {
        "type": [
            "AchievementSubject"
        ],
        "name": "Parker Pearl",
        "achievement": {
            "id": "https://something.org/theProgram",
            "achievementType": "Program",
            "type": [
                "Achievement"
            ],
            "image": {
                "id": "https://digitalcredentials.github.io/badge-assets/brain.png",
                "type": "Image",
                "caption": "Certificate logo"
            },
            "criteria": {
                "narrative": "Objectively told the truth"
            },
            "description": "Successfully completed all modules.",
            "name": "Truth, veracity, candor, and verisimilitude."
        }
    },
    "proof": {
        "type": "DataIntegrityProof",
        "created": "2025-12-16T15:29:35Z",
        "verificationMethod": "did:key:z6MkjoriXdbyWD25YXTed114F8hdJrLXQ567xxPHAUKxpKkS#z6MkjoriXdbyWD25YXTed114F8hdJrLXQ567xxPHAUKxpKkS",
        "cryptosuite": "eddsa-rdfc-2022",
        "proofPurpose": "assertionMethod",
        "proofValue": "z2Zw9tAWVKxVpUX6dHnXcrP2y4kGPP5LYBQ9CvZrVyJ5JMq9wVtfZCv68otSYPuxpzahSdGBQQjXagQE5rDwLCBZr"
    }
}
```

</details>

[rawURL](https://digitalcredentials.github.io/vc-test-fixtures/verifiableCredentials/v2/dataIntegrityProof/didKey/legacyRegistry-noStatus-noExpiry-credSubjName.json)

[Open Directly in VerifierPlus](https://verifierplus.org/#verify?vc=https://digitalcredentials.github.io/vc-test-fixtures/verifiableCredentials/v2/dataIntegrityProof/didKey/legacyRegistry-noStatus-noExpiry-credSubjName.json)

![QR](verifiableCredentials/v2/dataIntegrityProof/didKey/legacyRegistry-noStatus-noExpiry-credSubjName.png)

### /v2/dataIntegrityProof/didKey/legacyRegistry-noStatus-noExpiry-identityHash.json

<details>

<summary>Click to see copyable raw json</summary>

```json
   {
    "@context": [
        "https://www.w3.org/ns/credentials/v2",
        "https://purl.imsglobal.org/spec/ob/v3p0/context-3.0.3.json",
        "https://w3id.org/security/suites/ed25519-2020/v1"
    ],
    "id": "urn:uuid:19281fe8-90d2-4eao-a9da-6188898a6c",
    "type": [
        "VerifiableCredential",
        "OpenBadgeCredential"
    ],
    "issuer": {
        "type": [
            "Profile"
        ],
        "name": "The Learned",
        "image": {
            "id": "https://digitalcredentials.github.io/badge-assets/classroom.png",
            "type": "Image",
            "caption": "Learned logo"
        },
        "id": "did:key:z6MkjoriXdbyWD25YXTed114F8hdJrLXQ567xxPHAUKxpKkS"
    },
    "validFrom": "2025-02-24T00:00:00Z",
    "credentialSubject": {
        "type": [
            "AchievementSubject"
        ],
        "identifier": {
            "type": "IdentityObject",
            "identityHash": "Parker Pearl",
            "identityType": "name",
            "hashed": false,
            "salt": "not-used"
        },
        "achievement": {
            "id": "https://something.org/theProgram",
            "achievementType": "Program",
            "type": [
                "Achievement"
            ],
            "image": {
                "id": "https://digitalcredentials.github.io/badge-assets/brain.png",
                "type": "Image",
                "caption": "Certificate logo"
            },
            "criteria": {
                "narrative": "Objectively told the truth"
            },
            "description": "Successfully completed all modules.",
            "name": "Truth, veracity, candor, and verisimilitude."
        }
    },
    "proof": {
        "type": "DataIntegrityProof",
        "created": "2025-12-16T14:47:29Z",
        "verificationMethod": "did:key:z6MkjoriXdbyWD25YXTed114F8hdJrLXQ567xxPHAUKxpKkS#z6MkjoriXdbyWD25YXTed114F8hdJrLXQ567xxPHAUKxpKkS",
        "cryptosuite": "eddsa-rdfc-2022",
        "proofPurpose": "assertionMethod",
        "proofValue": "z3F4tZZSnoeZiSW7JhMuUMUjefidVHaMk2HHBqvv2KXbhJ7FTTvmbUTDHD1jnSmgq3SmiggHSdfT4QdPEQvcTdr6c"
    }
}
```

</details>

[rawURL](https://digitalcredentials.github.io/vc-test-fixtures/verifiableCredentials/v2/dataIntegrityProof/didKey/legacyRegistry-noStatus-noExpiry-identityHash.json)

[Open Directly in VerifierPlus](https://verifierplus.org/#verify?vc=https://digitalcredentials.github.io/vc-test-fixtures/verifiableCredentials/v2/dataIntegrityProof/didKey/legacyRegistry-noStatus-noExpiry-identityHash.json)

![QR](verifiableCredentials/v2/dataIntegrityProof/didKey/legacyRegistry-noStatus-noExpiry-identityHash.png)

### /v2/dataIntegrityProof/didKey/legacyRegistry-noStatus-noExpiry-minimal.json

<details>

<summary>Click to see copyable raw json</summary>

```json
   {
    "@context": [
        "https://www.w3.org/ns/credentials/v2"
    ],
    "id": "urn:uuid:4636EB2F-1B73-AAAA-981E-CFA85A5B13E3",
    "type": [
        "VerifiableCredential"
    ],
    "issuer": "did:key:z6MknNQD1WHLGGraFi6zcbGevuAgkVfdyCdtZnQTGWVVvR5Q",
    "credentialSubject": {
        "name": "James Chartrand",
        "description": "James rode his new bike on the trails."
    },
    "proof": {
        "type": "DataIntegrityProof",
        "created": "2025-10-09T13:50:34Z",
        "verificationMethod": "did:key:z6MknNQD1WHLGGraFi6zcbGevuAgkVfdyCdtZnQTGWVVvR5Q#z6MknNQD1WHLGGraFi6zcbGevuAgkVfdyCdtZnQTGWVVvR5Q",
        "cryptosuite": "eddsa-rdfc-2022",
        "proofPurpose": "assertionMethod",
        "proofValue": "z5BAEaLJNptR4L7H4yUDskA3k5eNHNVVDYTXRDndLMGACoNtAdXohLtABX4KynimDmdA629h6PaSnhFZxyFVurpoX"
    }
}
```

</details>

[rawURL](https://digitalcredentials.github.io/vc-test-fixtures/verifiableCredentials/v2/dataIntegrityProof/didKey/legacyRegistry-noStatus-noExpiry-minimal.json)

[Open Directly in VerifierPlus](https://verifierplus.org/#verify?vc=https://digitalcredentials.github.io/vc-test-fixtures/verifiableCredentials/v2/dataIntegrityProof/didKey/legacyRegistry-noStatus-noExpiry-minimal.json)

![QR](verifiableCredentials/v2/dataIntegrityProof/didKey/legacyRegistry-noStatus-noExpiry-minimal.png)

### /v2/dataIntegrityProof/didKey/legacyRegistry-noStatus-notExpired-withSchema.json

<details>

<summary>Click to see copyable raw json</summary>

```json
   {
    "type": [
        "VerifiableCredential",
        "OpenBadgeCredential"
    ],
    "name": "Teamwork Badge",
    "issuer": {
        "type": [
            "Profile"
        ],
        "name": "Example Corp",
        "id": "did:key:z6MknNQD1WHLGGraFi6zcbGevuAgkVfdyCdtZnQTGWVVvR5Q"
    },
    "@context": [
        "https://www.w3.org/ns/credentials/v2",
        "https://purl.imsglobal.org/spec/ob/v3p0/context-3.0.3.json"
    ],
    "validFrom": "2010-01-01T00:00:00Z",
    "validUntil": "2056-01-02T00:00:00Z",
    "credentialSubject": {
        "type": [
            "AchievementSubject"
        ],
        "name": "Sam Salmon",
        "achievement": {
            "id": "https://example.com/achievements/21st-century-skills/teamwork",
            "type": [
                "Achievement"
            ],
            "name": "Bachelors - v2 - revoked",
            "criteria": {
                "narrative": "Team members are nominated for this badge by their peers and recognized upon review by Example Corp management."
            },
            "description": "This badge recognizes the development of the capacity to collaborate within a group environment."
        }
    },
    "id": "urn:uuid:677fe8a6cacf98774d482d06",
    "credentialSchema": [
        {
            "id": "https://purl.imsglobal.org/spec/ob/v3p0/schema/json/ob_v3p0_achievementcredential_schema.json",
            "type": "JsonSchema"
        }
    ],
    "proof": {
        "type": "DataIntegrityProof",
        "created": "2025-10-07T18:18:37Z",
        "verificationMethod": "did:key:z6MknNQD1WHLGGraFi6zcbGevuAgkVfdyCdtZnQTGWVVvR5Q#z6MknNQD1WHLGGraFi6zcbGevuAgkVfdyCdtZnQTGWVVvR5Q",
        "cryptosuite": "eddsa-rdfc-2022",
        "proofPurpose": "assertionMethod",
        "proofValue": "z2DNygd6sg2xS2BrJaT5ZVHawQGJKh1zo1JUpQDRmC6W2hYREE5qexRVfuQURevgcPk6mg4QSc5F8DSqTEPLwc8Qc"
    }
}
```

</details>

[rawURL](https://digitalcredentials.github.io/vc-test-fixtures/verifiableCredentials/v2/dataIntegrityProof/didKey/legacyRegistry-noStatus-notExpired-withSchema.json)

[Open Directly in VerifierPlus](https://verifierplus.org/#verify?vc=https://digitalcredentials.github.io/vc-test-fixtures/verifiableCredentials/v2/dataIntegrityProof/didKey/legacyRegistry-noStatus-notExpired-withSchema.json)

![QR](verifiableCredentials/v2/dataIntegrityProof/didKey/legacyRegistry-noStatus-notExpired-withSchema.png)

### /v2/dataIntegrityProof/didKey/noRegistry-revokedStatus-noExpiry.json

<details>

<summary>Click to see copyable raw json</summary>

```json
   {
    "type": [
        "VerifiableCredential",
        "OpenBadgeCredential"
    ],
    "name": "Teamwork Badge",
    "issuer": {
        "type": [
            "Profile"
        ],
        "name": "Example Corp",
        "id": "did:key:z6MkqBcwQ7qnRBRpgtsJQviLFeYxExMUE2k9nwKkMTF3DdRZ"
    },
    "@context": [
        "https://www.w3.org/ns/credentials/v2",
        "https://purl.imsglobal.org/spec/ob/v3p0/context-3.0.3.json",
        "https://w3id.org/security/suites/ed25519-2020/v1"
    ],
    "validFrom": "2010-01-01T00:00:00Z",
    "validUntil": "2010-01-02T00:00:00Z",
    "credentialSubject": {
        "type": [
            "AchievementSubject"
        ],
        "name": "Sam Salmon",
        "achievement": {
            "id": "https://example.com/achievements/21st-century-skills/teamwork",
            "type": [
                "Achievement"
            ],
            "name": "Bachelors - v2 - revoked",
            "criteria": {
                "narrative": "Team members are nominated for this badge by their peers and recognized upon review by Example Corp management."
            },
            "description": "This badge recognizes the development of the capacity to collaborate within a group environment."
        }
    },
    "id": "urn:uuid:677fe8a6cacf98774d482d06",
    "credentialStatus": {
        "id": "https://raw.githubusercontent.com/digitalcredentials/verifier-core/refs/heads/main/src/test-fixtures/status/e5WK8CbZ1GjycuPombrj#8",
        "type": "BitstringStatusListEntry",
        "statusPurpose": "revocation",
        "statusListCredential": "https://raw.githubusercontent.com/digitalcredentials/verifier-core/refs/heads/main/src/test-fixtures/status/e5WK8CbZ1GjycuPombrj",
        "statusListIndex": "8"
    },
    "proof": {
        "type": "DataIntegrityProof",
        "created": "2025-05-13T13:48:48Z",
        "verificationMethod": "did:key:z6MkqBcwQ7qnRBRpgtsJQviLFeYxExMUE2k9nwKkMTF3DdRZ#z6MkqBcwQ7qnRBRpgtsJQviLFeYxExMUE2k9nwKkMTF3DdRZ",
        "cryptosuite": "eddsa-rdfc-2022",
        "proofPurpose": "assertionMethod",
        "proofValue": "z77eqMdfkhkNUx3L37nEGzFwBNLk7vWa1hHk9CApi2Xqh7WDdQRfyN7HfrLhgQqDZ9rmxazxLBm7kMk9GbfW9Qm9"
    }
}
```

</details>

[rawURL](https://digitalcredentials.github.io/vc-test-fixtures/verifiableCredentials/v2/dataIntegrityProof/didKey/noRegistry-revokedStatus-noExpiry.json)

[Open Directly in VerifierPlus](https://verifierplus.org/#verify?vc=https://digitalcredentials.github.io/vc-test-fixtures/verifiableCredentials/v2/dataIntegrityProof/didKey/noRegistry-revokedStatus-noExpiry.json)

![QR](verifiableCredentials/v2/dataIntegrityProof/didKey/noRegistry-revokedStatus-noExpiry.png)

### /v2/dataIntegrityProof/didKey/noRegsitry-revokedStatus-notExpired.json

<details>

<summary>Click to see copyable raw json</summary>

```json
   {
    "type": [
        "VerifiableCredential",
        "OpenBadgeCredential"
    ],
    "name": "Teamwork Badge",
    "issuer": {
        "type": [
            "Profile"
        ],
        "name": "Example Corp",
        "id": "did:key:z6MkqBcwQ7qnRBRpgtsJQviLFeYxExMUE2k9nwKkMTF3DdRZ"
    },
    "@context": [
        "https://www.w3.org/ns/credentials/v2",
        "https://purl.imsglobal.org/spec/ob/v3p0/context-3.0.3.json",
        "https://w3id.org/security/suites/ed25519-2020/v1"
    ],
    "validFrom": "2010-01-01T00:00:00Z",
    "validUntil": "2056-01-02T00:00:00Z",
    "credentialSubject": {
        "type": [
            "AchievementSubject"
        ],
        "name": "Sam Salmon",
        "achievement": {
            "id": "https://example.com/achievements/21st-century-skills/teamwork",
            "type": [
                "Achievement"
            ],
            "name": "Bachelors - v2 - revoked",
            "criteria": {
                "narrative": "Team members are nominated for this badge by their peers and recognized upon review by Example Corp management."
            },
            "description": "This badge recognizes the development of the capacity to collaborate within a group environment."
        }
    },
    "id": "urn:uuid:677fe8a6cacf98774d482d06",
    "credentialStatus": {
        "id": "https://raw.githubusercontent.com/digitalcredentials/verifier-core/refs/heads/main/src/test-fixtures/status/e5WK8CbZ1GjycuPombrj#8",
        "type": "BitstringStatusListEntry",
        "statusPurpose": "revocation",
        "statusListCredential": "https://raw.githubusercontent.com/digitalcredentials/verifier-core/refs/heads/main/src/test-fixtures/status/e5WK8CbZ1GjycuPombrj",
        "statusListIndex": "8"
    },
    "proof": {
        "type": "DataIntegrityProof",
        "created": "2025-05-13T15:00:09Z",
        "verificationMethod": "did:key:z6MkqBcwQ7qnRBRpgtsJQviLFeYxExMUE2k9nwKkMTF3DdRZ#z6MkqBcwQ7qnRBRpgtsJQviLFeYxExMUE2k9nwKkMTF3DdRZ",
        "cryptosuite": "eddsa-rdfc-2022",
        "proofPurpose": "assertionMethod",
        "proofValue": "z2Fgi1vtTqP1CQ7xyivrcZffMKzEdVTGKAi4GQQCWsXqodQxE23t7SJkCByYJKMknPReU1MjFMJ4fo923u1tyQJHB"
    }
}
```

</details>

[rawURL](https://digitalcredentials.github.io/vc-test-fixtures/verifiableCredentials/v2/dataIntegrityProof/didKey/noRegsitry-revokedStatus-notExpired.json)

[Open Directly in VerifierPlus](https://verifierplus.org/#verify?vc=https://digitalcredentials.github.io/vc-test-fixtures/verifiableCredentials/v2/dataIntegrityProof/didKey/noRegsitry-revokedStatus-notExpired.json)

![QR](verifiableCredentials/v2/dataIntegrityProof/didKey/noRegsitry-revokedStatus-notExpired.png)

### /v2/dataIntegrityProof/didKey/oidf-noStatus-notExpired-complexIssuer.json

<details>

<summary>Click to see copyable raw json</summary>

```json
   {
    "type": [
        "VerifiableCredential",
        "OpenBadgeCredential"
    ],
    "name": "A marvel",
    "issuer": {
        "type": [
            "Profile"
        ],
        "name": "Bestest Ever University",
        "url": "https://bestest.edu",
        "phone": "1-222-333-4444",
        "description": "The bestest.",
        "endorsement": [
            {
                "@context": [
                    "https://www.w3.org/ns/credentials/v2",
                    "https://purl.imsglobal.org/spec/ob/v3p0/context-3.0.3.json"
                ],
                "id": "https://better.edu/endorseTheHorse/34",
                "type": [
                    "VerifiableCredential",
                    "EndorsementCredential"
                ],
                "name": "Endorse the Horse",
                "issuer": {
                    "id": "did:key:z6MkjoriXdbyWD25YXTed114F8hdJrLXQ567xxPHAUKxpKkS",
                    "type": [
                        "Profile"
                    ],
                    "name": "Horse Accreditor"
                },
                "validFrom": "2010-01-01T00:00:00Z",
                "validUntil": "2020-01-01T00:00:00Z",
                "credentialSubject": {
                    "id": "did:key:z6MkjoriXdbyWD25YXTed114F8hdJrLXQ567xxPHAUKxpKkS",
                    "type": [
                        "EndorsementSubject"
                    ],
                    "endorsementComment": "The horse of course"
                },
                "proof": {
                    "type": "DataIntegrityProof",
                    "created": "2025-07-18T14:10:11Z",
                    "verificationMethod": "did:key:z6MkjoriXdbyWD25YXTed114F8hdJrLXQ567xxPHAUKxpKkS#z6MkjoriXdbyWD25YXTed114F8hdJrLXQ567xxPHAUKxpKkS",
                    "cryptosuite": "eddsa-rdfc-2022",
                    "proofPurpose": "assertionMethod",
                    "proofValue": "z4SZR77TCad5XXgFMYvFZSArPKe26gsbzBRQW6qMp1mfsaBpWy1g7ULzwreeVsKP7w5g3aDWUuXX5THoZrEB2ZPDf"
                }
            }
        ],
        "image": {
            "id": "https://github.com/digitalcredentials/test-files/assets/206059/01eca9f5-a508-40ac-9dd5-c12d11308894",
            "type": "Image",
            "caption": "MIT oh"
        },
        "email": "horse@better.edu",
        "address": {
            "type": [
                "Address"
            ],
            "addressCountry": "Canada",
            "addressCountryCode": "CA",
            "addressRegion": "ON",
            "addressLocality": "Ancaster",
            "streetAddress": "163 Corndog",
            "postOfficeBoxNumber": "2",
            "postalCode": "L9G4H7",
            "geo": {
                "type": "GeoCoordinates",
                "latitude": 1,
                "longitude": 1
            }
        },
        "otherIdentifier": [
            {
                "type": "IdentifierEntry",
                "identifier": "9335",
                "identifierType": "sourcedId"
            },
            {
                "type": "IdentifierEntry",
                "identifier": "984",
                "identifierType": "nationalIdentityNumber"
            }
        ],
        "official": "Charlie Horse",
        "parentOrg": {
            "id": "did:example:89898349834",
            "type": [
                "Profile"
            ],
            "name": "Animal Universities"
        },
        "id": "did:key:z6MkjoriXdbyWD25YXTed114F8hdJrLXQ567xxPHAUKxpKkS"
    },
    "@context": [
        "https://www.w3.org/ns/credentials/v2",
        "https://purl.imsglobal.org/spec/ob/v3p0/context-3.0.3.json"
    ],
    "validFrom": "2010-01-01T00:00:00Z",
    "validUntil": "9999-01-02T00:00:00Z",
    "credentialSubject": {
        "type": [
            "AchievementSubject"
        ],
        "name": "Sam Salmon",
        "achievement": {
            "id": "https://example.com/achievements/21st-century-skills/teamwork",
            "type": [
                "Achievement"
            ],
            "name": "Bachelors - v2 - complex issuer",
            "criteria": {
                "narrative": "Team members are nominated for this badge by their peers and recognized upon review by Example Corp management."
            },
            "description": "This badge recognizes the development of the capacity to collaborate within a group environment."
        }
    },
    "id": "urn:uuid:677fe8a6cacf98774d482d06",
    "proof": {
        "type": "DataIntegrityProof",
        "created": "2025-07-18T14:11:05Z",
        "verificationMethod": "did:key:z6MkjoriXdbyWD25YXTed114F8hdJrLXQ567xxPHAUKxpKkS#z6MkjoriXdbyWD25YXTed114F8hdJrLXQ567xxPHAUKxpKkS",
        "cryptosuite": "eddsa-rdfc-2022",
        "proofPurpose": "assertionMethod",
        "proofValue": "z2c1YUeLbtLP4ghvkeCyLZ9HSMjTJ7LzWis8b8iW2APenjucWebtye8P1mcFcSWtR8FrN7wDyec8XH8uXn6BovqhN"
    }
}
```

</details>

[rawURL](https://digitalcredentials.github.io/vc-test-fixtures/verifiableCredentials/v2/dataIntegrityProof/didKey/oidf-noStatus-notExpired-complexIssuer.json)

[Open Directly in VerifierPlus](https://verifierplus.org/#verify?vc=https://digitalcredentials.github.io/vc-test-fixtures/verifiableCredentials/v2/dataIntegrityProof/didKey/oidf-noStatus-notExpired-complexIssuer.json)

![QR](verifiableCredentials/v2/dataIntegrityProof/didKey/oidf-noStatus-notExpired-complexIssuer.png)

### /v2/dataIntegrityProof/didKey/oidf-noStatus-notExpired-notYetValid.json

<details>

<summary>Click to see copyable raw json</summary>

```json
   {
    "type": [
        "VerifiableCredential",
        "OpenBadgeCredential"
    ],
    "name": "A marvel",
    "issuer": {
        "type": [
            "Profile"
        ],
        "name": "Bestest Ever University",
        "url": "https://bestest.edu",
        "phone": "1-222-333-4444",
        "description": "The bestest.",
        "image": {
            "id": "https://github.com/digitalcredentials/test-files/assets/206059/01eca9f5-a508-40ac-9dd5-c12d11308894",
            "type": "Image",
            "caption": "MIT oh"
        },
        "email": "horse@better.edu",
        "address": {
            "type": [
                "Address"
            ],
            "addressCountry": "Canada",
            "addressCountryCode": "CA",
            "addressRegion": "ON",
            "addressLocality": "Ancaster",
            "streetAddress": "163 Corndog",
            "postOfficeBoxNumber": "2",
            "postalCode": "L9G4H7",
            "geo": {
                "type": "GeoCoordinates",
                "latitude": 1,
                "longitude": 1
            }
        },
        "otherIdentifier": [
            {
                "type": "IdentifierEntry",
                "identifier": "9335",
                "identifierType": "sourcedId"
            },
            {
                "type": "IdentifierEntry",
                "identifier": "984",
                "identifierType": "nationalIdentityNumber"
            }
        ],
        "official": "Charlie Horse",
        "parentOrg": {
            "id": "did:example:89898349834",
            "type": [
                "Profile"
            ],
            "name": "Animal Universities"
        },
        "id": "did:key:z6MkjoriXdbyWD25YXTed114F8hdJrLXQ567xxPHAUKxpKkS"
    },
    "@context": [
        "https://www.w3.org/ns/credentials/v2",
        "https://purl.imsglobal.org/spec/ob/v3p0/context-3.0.3.json"
    ],
    "validFrom": "2099-01-01T00:00:00Z",
    "validUntil": "9999-01-02T00:00:00Z",
    "credentialSubject": {
        "type": [
            "AchievementSubject"
        ],
        "name": "Sam Salmon",
        "achievement": {
            "id": "https://example.com/achievements/21st-century-skills/teamwork",
            "type": [
                "Achievement"
            ],
            "name": "A credential that isn't yet valid",
            "criteria": {
                "narrative": "Team members are nominated for this badge by their peers and recognized upon review by Example Corp management."
            },
            "description": "This badge recognizes the development of the capacity to collaborate within a group environment."
        }
    },
    "id": "urn:uuid:677fe8a6cacf98774d482d06",
    "proof": {
        "type": "DataIntegrityProof",
        "created": "2025-07-18T14:46:59Z",
        "verificationMethod": "did:key:z6MkjoriXdbyWD25YXTed114F8hdJrLXQ567xxPHAUKxpKkS#z6MkjoriXdbyWD25YXTed114F8hdJrLXQ567xxPHAUKxpKkS",
        "cryptosuite": "eddsa-rdfc-2022",
        "proofPurpose": "assertionMethod",
        "proofValue": "z3ATKLuXyMbWyCEQGDZev5jcDmqE8LygGwovNnzK1nSGXcq9yuys2ap8nNLZT8UB6zX5xjtYRQUtAKoApwoc5NfHk"
    }
}
```

</details>

[rawURL](https://digitalcredentials.github.io/vc-test-fixtures/verifiableCredentials/v2/dataIntegrityProof/didKey/oidf-noStatus-notExpired-notYetValid.json)

[Open Directly in VerifierPlus](https://verifierplus.org/#verify?vc=https://digitalcredentials.github.io/vc-test-fixtures/verifiableCredentials/v2/dataIntegrityProof/didKey/oidf-noStatus-notExpired-notYetValid.json)

![QR](verifiableCredentials/v2/dataIntegrityProof/didKey/oidf-noStatus-notExpired-notYetValid.png)

### /v2/dataIntegrityProof/didKey/oidf-revokedStatus-noExpiry.json

<details>

<summary>Click to see copyable raw json</summary>

```json
   {
    "type": [
        "VerifiableCredential",
        "OpenBadgeCredential"
    ],
    "name": "Teamwork Badge",
    "issuer": {
        "type": [
            "Profile"
        ],
        "name": "Example Corp",
        "id": "did:key:z6MkjoriXdbyWD25YXTed114F8hdJrLXQ567xxPHAUKxpKkS"
    },
    "@context": [
        "https://www.w3.org/ns/credentials/v2",
        "https://purl.imsglobal.org/spec/ob/v3p0/context-3.0.3.json",
        "https://w3id.org/security/suites/ed25519-2020/v1"
    ],
    "validFrom": "2010-01-01T00:00:00Z",
    "credentialSubject": {
        "type": [
            "AchievementSubject"
        ],
        "name": "Sam Salmon",
        "achievement": {
            "id": "https://example.com/achievements/21st-century-skills/teamwork",
            "type": [
                "Achievement"
            ],
            "name": "Bachelors - v2 - revoked",
            "criteria": {
                "narrative": "Team members are nominated for this badge by their peers and recognized upon review by Example Corp management."
            },
            "description": "This badge recognizes the development of the capacity to collaborate within a group environment."
        }
    },
    "id": "urn:uuid:677fe8a6cacf98774d482d06",
    "credentialStatus": {
        "id": "https://raw.githubusercontent.com/digitalcredentials/verifier-core/refs/heads/main/src/test-fixtures/status/e5WK8CbZ1GjycuPombrj#8",
        "type": "BitstringStatusListEntry",
        "statusPurpose": "revocation",
        "statusListCredential": "https://raw.githubusercontent.com/digitalcredentials/verifier-core/refs/heads/main/src/test-fixtures/status/e5WK8CbZ1GjycuPombrj",
        "statusListIndex": "8"
    },
    "proof": {
        "type": "DataIntegrityProof",
        "created": "2025-05-13T13:12:21Z",
        "verificationMethod": "did:key:z6MkjoriXdbyWD25YXTed114F8hdJrLXQ567xxPHAUKxpKkS#z6MkjoriXdbyWD25YXTed114F8hdJrLXQ567xxPHAUKxpKkS",
        "cryptosuite": "eddsa-rdfc-2022",
        "proofPurpose": "assertionMethod",
        "proofValue": "z5zvoc18YhvtZChk1RtKAGem92BwoyL3WHcNqGg2htD1zpibx9bcxxUUBX15vdHbU35UNAoMrPDyKFQir6gchVu43"
    }
}
```

</details>

[rawURL](https://digitalcredentials.github.io/vc-test-fixtures/verifiableCredentials/v2/dataIntegrityProof/didKey/oidf-revokedStatus-noExpiry.json)

[Open Directly in VerifierPlus](https://verifierplus.org/#verify?vc=https://digitalcredentials.github.io/vc-test-fixtures/verifiableCredentials/v2/dataIntegrityProof/didKey/oidf-revokedStatus-noExpiry.json)

![QR](verifiableCredentials/v2/dataIntegrityProof/didKey/oidf-revokedStatus-noExpiry.png)

### /v2/dataIntegrityProof/didKey/twoOIDF-revoked-notExpired-badSchema.json

<details>

<summary>Click to see copyable raw json</summary>

```json
   {
    "type": [
        "VerifiableCredential",
        "OpenBadgeCredential"
    ],
    "name": "Teamwork Badge",
    "issuer": {
        "type": [
            "Profile"
        ],
        "name": "Example Corp",
        "id": "did:key:z6MkjoriXdbyWD25YXTed114F8hdJrLXQ567xxPHAUKxpKkS"
    },
    "@context": [
        "https://www.w3.org/ns/credentials/v2",
        "https://purl.imsglobal.org/spec/ob/v3p0/context-3.0.3.json",
        {
            "issuanceDate": "https://www.w3.org/2018/credentials/v1#issuanceDate"
        }
    ],
    "issuanceDate": "2010-01-01T00:00:00Z",
    "validUntil": "2030-01-02T00:00:00Z",
    "credentialSubject": {
        "type": [
            "AchievementSubject"
        ],
        "name": "Sam Salmon",
        "achievement": {
            "id": "https://example.com/achievements/21st-century-skills/teamwork",
            "type": [
                "Achievement"
            ],
            "name": "Bachelors - v2 - revoked",
            "criteria": {
                "narrative": "Team members are nominated for this badge by their peers and recognized upon review by Example Corp management."
            },
            "description": "This badge recognizes the development of the capacity to collaborate within a group environment."
        }
    },
    "id": "urn:uuid:677fe8a6cacf98774d482d06",
    "credentialStatus": {
        "id": "https://digitalcredentials.github.io/vc-test-fixtures/statusLists/didkey-ed25519Signature2020/e5WK8CbZ1GjycuPombrj#8",
        "type": "BitstringStatusListEntry",
        "statusPurpose": "revocation",
        "statusListCredential": "https://digitalcredentials.github.io/vc-test-fixtures/statusLists/didkey-ed25519Signature2020/e5WK8CbZ1GjycuPombrj",
        "statusListIndex": "8"
    },
    "proof": {
        "type": "DataIntegrityProof",
        "created": "2025-10-14T18:37:54Z",
        "verificationMethod": "did:key:z6MkjoriXdbyWD25YXTed114F8hdJrLXQ567xxPHAUKxpKkS#z6MkjoriXdbyWD25YXTed114F8hdJrLXQ567xxPHAUKxpKkS",
        "cryptosuite": "eddsa-rdfc-2022",
        "proofPurpose": "assertionMethod",
        "proofValue": "z34sJuocK7h7YVHf8ZZ1bzei3UyZ8NTWosovhs4RcT34dyn4mptVobe6VW1oCU8APXGoHQNXbQvq8B7HXowosbHcq"
    }
}
```

</details>

[rawURL](https://digitalcredentials.github.io/vc-test-fixtures/verifiableCredentials/v2/dataIntegrityProof/didKey/twoOIDF-revoked-notExpired-badSchema.json)

[Open Directly in VerifierPlus](https://verifierplus.org/#verify?vc=https://digitalcredentials.github.io/vc-test-fixtures/verifiableCredentials/v2/dataIntegrityProof/didKey/twoOIDF-revoked-notExpired-badSchema.json)

![QR](verifiableCredentials/v2/dataIntegrityProof/didKey/twoOIDF-revoked-notExpired-badSchema.png)

### /v2/dataIntegrityProof/didKey/twoOIDF-validStatus-expired.json

<details>

<summary>Click to see copyable raw json</summary>

```json
   {
    "type": [
        "VerifiableCredential",
        "OpenBadgeCredential"
    ],
    "name": "Teamwork Badge",
    "issuer": {
        "type": [
            "Profile"
        ],
        "name": "Example Corp",
        "id": "did:key:z6MkjoriXdbyWD25YXTed114F8hdJrLXQ567xxPHAUKxpKkS"
    },
    "@context": [
        "https://www.w3.org/ns/credentials/v2",
        "https://purl.imsglobal.org/spec/ob/v3p0/context-3.0.3.json"
    ],
    "validFrom": "2010-01-01T00:00:00Z",
    "validUntil": "2010-01-02T00:00:00Z",
    "credentialSubject": {
        "type": [
            "AchievementSubject"
        ],
        "name": "Sam Salmon",
        "achievement": {
            "id": "https://example.com/achievements/21st-century-skills/teamwork",
            "type": [
                "Achievement"
            ],
            "name": "Bachelors - v2 - revoked",
            "criteria": {
                "narrative": "Team members are nominated for this badge by their peers and recognized upon review by Example Corp management."
            },
            "description": "This badge recognizes the development of the capacity to collaborate within a group environment."
        }
    },
    "id": "urn:uuid:677fe8a6cacf98774d482d06",
    "credentialStatus": {
        "id": "https://digitalcredentials.github.io/vc-test-fixtures/statusLists/didkey-ed25519Signature2020/e5WK8CbZ1GjycuPombrj#7",
        "type": "BitstringStatusListEntry",
        "statusPurpose": "revocation",
        "statusListCredential": "https://digitalcredentials.github.io/vc-test-fixtures/statusLists/didkey-ed25519Signature2020/e5WK8CbZ1GjycuPombrj",
        "statusListIndex": "7"
    },
    "proof": {
        "type": "DataIntegrityProof",
        "created": "2025-09-04T12:49:18Z",
        "verificationMethod": "did:key:z6MkjoriXdbyWD25YXTed114F8hdJrLXQ567xxPHAUKxpKkS#z6MkjoriXdbyWD25YXTed114F8hdJrLXQ567xxPHAUKxpKkS",
        "cryptosuite": "eddsa-rdfc-2022",
        "proofPurpose": "assertionMethod",
        "proofValue": "z36GMLQ2PkNChPosGzh5M1Px5r7Wd54wS3htX5QLZmoKrNYd8mqyBhiWWSGvghX2A9jbQKww8FpRUVaXz17XQctWf"
    }
}
```

</details>

[rawURL](https://digitalcredentials.github.io/vc-test-fixtures/verifiableCredentials/v2/dataIntegrityProof/didKey/twoOIDF-validStatus-expired.json)

[Open Directly in VerifierPlus](https://verifierplus.org/#verify?vc=https://digitalcredentials.github.io/vc-test-fixtures/verifiableCredentials/v2/dataIntegrityProof/didKey/twoOIDF-validStatus-expired.json)

![QR](verifiableCredentials/v2/dataIntegrityProof/didKey/twoOIDF-validStatus-expired.png)

### /v2/dataIntegrityProof/didweb/legacy-revokedStatus-expired.json

<details>

<summary>Click to see copyable raw json</summary>

```json
   {
    "type": [
        "VerifiableCredential",
        "OpenBadgeCredential"
    ],
    "name": "Teamwork Badge",
    "issuer": {
        "type": [
            "Profile"
        ],
        "name": "Example Corp",
        "id": "did:web:digitalcredentials.github.io:vc-test-fixtures:dids:legacy"
    },
    "@context": [
        "https://www.w3.org/ns/credentials/v2",
        "https://purl.imsglobal.org/spec/ob/v3p0/context-3.0.3.json",
        "https://w3id.org/security/suites/ed25519-2020/v1"
    ],
    "validFrom": "2010-01-01T00:00:00Z",
    "validUntil": "2010-01-02T00:00:00Z",
    "credentialSubject": {
        "type": [
            "AchievementSubject"
        ],
        "name": "Sam Salmon",
        "achievement": {
            "id": "https://example.com/achievements/21st-century-skills/teamwork",
            "type": [
                "Achievement"
            ],
            "name": "Bachelors - v2 - revoked",
            "criteria": {
                "narrative": "Team members are nominated for this badge by their peers and recognized upon review by Example Corp management."
            },
            "description": "This badge recognizes the development of the capacity to collaborate within a group environment."
        }
    },
    "id": "urn:uuid:677fe8a6cacf98774d482d06",
    "credentialStatus": {
        "id": "https://raw.githubusercontent.com/digitalcredentials/verifier-core/refs/heads/main/src/test-fixtures/status/e5WK8CbZ1GjycuPombrj#8",
        "type": "BitstringStatusListEntry",
        "statusPurpose": "revocation",
        "statusListCredential": "https://raw.githubusercontent.com/digitalcredentials/verifier-core/refs/heads/main/src/test-fixtures/status/e5WK8CbZ1GjycuPombrj",
        "statusListIndex": "8"
    },
    "proof": {
        "type": "DataIntegrityProof",
        "created": "2025-05-13T13:35:50Z",
        "verificationMethod": "did:web:digitalcredentials.github.io:vc-test-fixtures:dids:legacy#z6MkjXe1vZvPRqFuc9nRBtZ3e1Y9XKDFSbjFAfzLfW2bD6cZ",
        "cryptosuite": "eddsa-rdfc-2022",
        "proofPurpose": "assertionMethod",
        "proofValue": "z4t9WEAatHC98YLThcJG76B9mPYCSb5ceNWNssUEB3GoQEne5kj1qeTqMoxpMjLjrLYvNex6564WHHQLudsakXxyX"
    }
}
```

</details>

[rawURL](https://digitalcredentials.github.io/vc-test-fixtures/verifiableCredentials/v2/dataIntegrityProof/didweb/legacy-revokedStatus-expired.json)

[Open Directly in VerifierPlus](https://verifierplus.org/#verify?vc=https://digitalcredentials.github.io/vc-test-fixtures/verifiableCredentials/v2/dataIntegrityProof/didweb/legacy-revokedStatus-expired.json)

![QR](verifiableCredentials/v2/dataIntegrityProof/didweb/legacy-revokedStatus-expired.png)

### /v2/dataIntegrityProof/didweb/legacy-revokedStatus-noExpiry.json

<details>

<summary>Click to see copyable raw json</summary>

```json
   {
    "type": [
        "VerifiableCredential",
        "OpenBadgeCredential"
    ],
    "name": "Teamwork Badge",
    "issuer": {
        "type": [
            "Profile"
        ],
        "name": "Example Corp",
        "id": "did:web:digitalcredentials.github.io:vc-test-fixtures:dids:legacy"
    },
    "@context": [
        "https://www.w3.org/ns/credentials/v2",
        "https://purl.imsglobal.org/spec/ob/v3p0/context-3.0.3.json",
        "https://w3id.org/security/suites/ed25519-2020/v1"
    ],
    "validFrom": "2010-01-01T00:00:00Z",
    "credentialSubject": {
        "type": [
            "AchievementSubject"
        ],
        "name": "Sam Salmon",
        "achievement": {
            "id": "https://example.com/achievements/21st-century-skills/teamwork",
            "type": [
                "Achievement"
            ],
            "name": "Bachelors - v2 - revoked",
            "criteria": {
                "narrative": "Team members are nominated for this badge by their peers and recognized upon review by Example Corp management."
            },
            "description": "This badge recognizes the development of the capacity to collaborate within a group environment."
        }
    },
    "id": "urn:uuid:677fe8a6cacf98774d482d06",
    "credentialStatus": {
        "id": "https://raw.githubusercontent.com/digitalcredentials/verifier-core/refs/heads/main/src/test-fixtures/status/e5WK8CbZ1GjycuPombrj#8",
        "type": "BitstringStatusListEntry",
        "statusPurpose": "revocation",
        "statusListCredential": "https://raw.githubusercontent.com/digitalcredentials/verifier-core/refs/heads/main/src/test-fixtures/status/e5WK8CbZ1GjycuPombrj",
        "statusListIndex": "8"
    },
    "proof": {
        "type": "DataIntegrityProof",
        "created": "2025-05-13T13:25:38Z",
        "verificationMethod": "did:web:digitalcredentials.github.io:vc-test-fixtures:dids:legacy#z6MkjXe1vZvPRqFuc9nRBtZ3e1Y9XKDFSbjFAfzLfW2bD6cZ",
        "cryptosuite": "eddsa-rdfc-2022",
        "proofPurpose": "assertionMethod",
        "proofValue": "zAXdYoujk9ht1PH3FKbZ64Qhkr3vZTG4h7cLXQ55JR7hiERFacQxe7Yrzds9tAy2jZHxhsHsrsX9XUHxZ4F9jT4Y"
    }
}
```

</details>

[rawURL](https://digitalcredentials.github.io/vc-test-fixtures/verifiableCredentials/v2/dataIntegrityProof/didweb/legacy-revokedStatus-noExpiry.json)

[Open Directly in VerifierPlus](https://verifierplus.org/#verify?vc=https://digitalcredentials.github.io/vc-test-fixtures/verifiableCredentials/v2/dataIntegrityProof/didweb/legacy-revokedStatus-noExpiry.json)

![QR](verifiableCredentials/v2/dataIntegrityProof/didweb/legacy-revokedStatus-noExpiry.png)

### /v2/dataIntegrityProof/didweb/oidf-noStatus-notExpired.json

<details>

<summary>Click to see copyable raw json</summary>

```json
   {
    "type": [
        "VerifiableCredential",
        "OpenBadgeCredential"
    ],
    "name": "Teamwork Badge",
    "issuer": {
        "type": [
            "Profile"
        ],
        "name": "Example Corp",
        "id": "did:web:digitalcredentials.github.io:vc-test-fixtures:dids:oidf"
    },
    "@context": [
        "https://www.w3.org/ns/credentials/v2",
        "https://purl.imsglobal.org/spec/ob/v3p0/context-3.0.3.json",
        "https://w3id.org/security/suites/ed25519-2020/v1"
    ],
    "validFrom": "2010-01-01T00:00:00Z",
    "validUntil": "2056-01-02T00:00:00Z",
    "credentialSubject": {
        "type": [
            "AchievementSubject"
        ],
        "name": "Sam Salmon",
        "achievement": {
            "id": "https://example.com/achievements/21st-century-skills/teamwork",
            "type": [
                "Achievement"
            ],
            "name": "Bachelors - v2 - revoked",
            "criteria": {
                "narrative": "Team members are nominated for this badge by their peers and recognized upon review by Example Corp management."
            },
            "description": "This badge recognizes the development of the capacity to collaborate within a group environment."
        }
    },
    "id": "urn:uuid:677fe8a6cacf98774d482d06",
    "proof": {
        "type": "DataIntegrityProof",
        "created": "2025-05-13T15:10:44Z",
        "verificationMethod": "did:web:digitalcredentials.github.io:vc-test-fixtures:dids:oidf#z6MkjXe1vZvPRqFuc9nRBtZ3e1Y9XKDFSbjFAfzLfW2bD6cZ",
        "cryptosuite": "eddsa-rdfc-2022",
        "proofPurpose": "assertionMethod",
        "proofValue": "z2Rk22MPdsBYeFdy8VjAh3CbbeycrhcURcASzKDD3Y2Pps55uVeStriHzVdBQ5ThKgVAzNoq23KTt8skqSnp3hU4H"
    }
}
```

</details>

[rawURL](https://digitalcredentials.github.io/vc-test-fixtures/verifiableCredentials/v2/dataIntegrityProof/didweb/oidf-noStatus-notExpired.json)

[Open Directly in VerifierPlus](https://verifierplus.org/#verify?vc=https://digitalcredentials.github.io/vc-test-fixtures/verifiableCredentials/v2/dataIntegrityProof/didweb/oidf-noStatus-notExpired.json)

![QR](verifiableCredentials/v2/dataIntegrityProof/didweb/oidf-noStatus-notExpired.png)

### /v2/ed25519/didKey/legacy-expiredStatus-noExpiry.json

<details>

<summary>Click to see copyable raw json</summary>

```json
   {
    "@context": [
        "https://www.w3.org/ns/credentials/v2",
        "https://w3id.org/security/suites/ed25519-2020/v1"
    ],
    "id": "urn:uuid:4636EB2F-1B73-47EA-981E-CFA85A5B13E3",
    "type": [
        "VerifiableCredential"
    ],
    "issuer": "did:key:z6MknNQD1WHLGGraFi6zcbGevuAgkVfdyCdtZnQTGWVVvR5Q",
    "credentialSubject": {
        "name": "James Chartrand",
        "description": "James rode his new bike on the trails."
    },
    "credentialStatus": {
        "id": "https://digitalcredentials.github.io/vc-test-fixtures/statusLists/didkey-ed25519Signature2020/expired#7",
        "type": "BitstringStatusListEntry",
        "statusPurpose": "revocation",
        "statusListCredential": "https://digitalcredentials.github.io/vc-test-fixtures/statusLists/didkey-ed25519Signature2020/expired",
        "statusListIndex": "7"
    },
    "proof": {
        "type": "Ed25519Signature2020",
        "created": "2025-12-09T21:24:38Z",
        "verificationMethod": "did:key:z6MknNQD1WHLGGraFi6zcbGevuAgkVfdyCdtZnQTGWVVvR5Q#z6MknNQD1WHLGGraFi6zcbGevuAgkVfdyCdtZnQTGWVVvR5Q",
        "proofPurpose": "assertionMethod",
        "proofValue": "z2dxG8K3vuEWXg5subB6H3mo1r4Zeq2v1Xv7tWPXR2hnr57T9ZH162hC1451RBcN99ZJ42d5gGqzhATttME3svxwc"
    }
}
```

</details>

[rawURL](https://digitalcredentials.github.io/vc-test-fixtures/verifiableCredentials/v2/ed25519/didKey/legacy-expiredStatus-noExpiry.json)

[Open Directly in VerifierPlus](https://verifierplus.org/#verify?vc=https://digitalcredentials.github.io/vc-test-fixtures/verifiableCredentials/v2/ed25519/didKey/legacy-expiredStatus-noExpiry.json)

![QR](verifiableCredentials/v2/ed25519/didKey/legacy-expiredStatus-noExpiry.png)

### /v2/ed25519/didKey/legacy-missingTypeStatus-noExpiry.json

<details>

<summary>Click to see copyable raw json</summary>

```json
   {
    "@context": [
        "https://www.w3.org/ns/credentials/v2",
        "https://w3id.org/security/suites/ed25519-2020/v1"
    ],
    "id": "urn:uuid:4636EB2F-1B73-47EA-981E-CFA85A5B13E3",
    "type": [
        "VerifiableCredential"
    ],
    "issuer": "did:key:z6MknNQD1WHLGGraFi6zcbGevuAgkVfdyCdtZnQTGWVVvR5Q",
    "credentialSubject": {
        "name": "James Chartrand",
        "description": "James rode his new bike on the trails."
    },
    "credentialStatus": {
        "id": "https://digitalcredentials.github.io/vc-test-fixtures/statusLists/didkey-ed25519Signature2020/missingBitStringType#7",
        "type": "BitstringStatusListEntry",
        "statusPurpose": "revocation",
        "statusListCredential": "https://digitalcredentials.github.io/vc-test-fixtures/statusLists/didkey-ed25519Signature2020/missingBitStringType",
        "statusListIndex": "7"
    },
    "proof": {
        "type": "Ed25519Signature2020",
        "created": "2025-12-09T21:25:53Z",
        "verificationMethod": "did:key:z6MknNQD1WHLGGraFi6zcbGevuAgkVfdyCdtZnQTGWVVvR5Q#z6MknNQD1WHLGGraFi6zcbGevuAgkVfdyCdtZnQTGWVVvR5Q",
        "proofPurpose": "assertionMethod",
        "proofValue": "zzQDUwyambLCK1CcWx5j4WKs7kL3MeGCdRpymj8V4XB16wcR9jH28NJYwweQRExXs1tyjEzPnw58USEsDzsDaqXN"
    }
}
```

</details>

[rawURL](https://digitalcredentials.github.io/vc-test-fixtures/verifiableCredentials/v2/ed25519/didKey/legacy-missingTypeStatus-noExpiry.json)

[Open Directly in VerifierPlus](https://verifierplus.org/#verify?vc=https://digitalcredentials.github.io/vc-test-fixtures/verifiableCredentials/v2/ed25519/didKey/legacy-missingTypeStatus-noExpiry.json)

![QR](verifiableCredentials/v2/ed25519/didKey/legacy-missingTypeStatus-noExpiry.png)

### /v2/ed25519/didKey/legacy-noStatus-expired.json

<details>

<summary>Click to see copyable raw json</summary>

```json
   {
    "@context": [
        "https://www.w3.org/ns/credentials/v2",
        "https://purl.imsglobal.org/spec/ob/v3p0/context-3.0.3.json",
        "https://w3id.org/security/suites/ed25519-2020/v1"
    ],
    "id": "http://example.com/credentials/3527",
    "type": [
        "VerifiableCredential",
        "OpenBadgeCredential"
    ],
    "issuer": {
        "id": "did:key:z6MknNQD1WHLGGraFi6zcbGevuAgkVfdyCdtZnQTGWVVvR5Q",
        "type": [
            "Profile"
        ],
        "name": "Example Corp"
    },
    "validFrom": "2010-01-01T00:00:00Z",
    "validUntil": "2011-01-01T00:00:00Z",
    "name": "Teamwork Badge",
    "credentialSubject": {
        "id": "did:example:ebfeb1f712ebc6f1c276e12ec21",
        "type": [
            "AchievementSubject"
        ],
        "achievement": {
            "id": "https://example.com/achievements/21st-century-skills/teamwork",
            "type": [
                "Achievement"
            ],
            "criteria": {
                "narrative": "Team members are nominated for this badge by their peers and recognized upon review by Example Corp management."
            },
            "description": "This badge recognizes the development of the capacity to collaborate within a group environment.",
            "name": "Teamwork"
        }
    },
    "proof": {
        "type": "Ed25519Signature2020",
        "created": "2025-01-07T22:14:25Z",
        "verificationMethod": "did:key:z6MknNQD1WHLGGraFi6zcbGevuAgkVfdyCdtZnQTGWVVvR5Q#z6MknNQD1WHLGGraFi6zcbGevuAgkVfdyCdtZnQTGWVVvR5Q",
        "proofPurpose": "assertionMethod",
        "proofValue": "z2B4R2hwrcgR8ag39SZEgm2hAJSPnoWae7zdRr8RUTkcbMPNHu7tedk1x3D29J3CmiU5Wb1e7zew82nQAKYCQuRBo"
    }
}
```

</details>

[rawURL](https://digitalcredentials.github.io/vc-test-fixtures/verifiableCredentials/v2/ed25519/didKey/legacy-noStatus-expired.json)

[Open Directly in VerifierPlus](https://verifierplus.org/#verify?vc=https://digitalcredentials.github.io/vc-test-fixtures/verifiableCredentials/v2/ed25519/didKey/legacy-noStatus-expired.json)

![QR](verifiableCredentials/v2/ed25519/didKey/legacy-noStatus-expired.png)

### /v2/ed25519/didKey/legacy-noStatus-noExpiry-stringIssuerId.json

<details>

<summary>Click to see copyable raw json</summary>

```json
   {
    "@context": [
        "https://www.w3.org/ns/credentials/v2",
        "https://purl.imsglobal.org/spec/ob/v3p0/context-3.0.3.json",
        "https://w3id.org/security/suites/ed25519-2020/v1"
    ],
    "id": "http://example.com/credentials/3527",
    "type": [
        "VerifiableCredential",
        "OpenBadgeCredential"
    ],
    "issuer": "did:key:z6MknNQD1WHLGGraFi6zcbGevuAgkVfdyCdtZnQTGWVVvR5Q",
    "validFrom": "2010-01-01T00:00:00Z",
    "name": "Teamwork Badge",
    "credentialSubject": {
        "id": "did:example:ebfeb1f712ebc6f1c276e12ec21",
        "type": [
            "AchievementSubject"
        ],
        "achievement": {
            "id": "https://example.com/achievements/21st-century-skills/teamwork",
            "type": [
                "Achievement"
            ],
            "criteria": {
                "narrative": "Team members are nominated for this badge by their peers and recognized upon review by Example Corp management."
            },
            "description": "This badge recognizes the development of the capacity to collaborate within a group environment.",
            "name": "Teamwork"
        }
    },
    "proof": {
        "type": "Ed25519Signature2020",
        "created": "2025-01-29T16:29:21Z",
        "verificationMethod": "did:key:z6MknNQD1WHLGGraFi6zcbGevuAgkVfdyCdtZnQTGWVVvR5Q#z6MknNQD1WHLGGraFi6zcbGevuAgkVfdyCdtZnQTGWVVvR5Q",
        "proofPurpose": "assertionMethod",
        "proofValue": "z2QqZBSqcJjydA9qaMrc9ddk5Tb65wmN1qZCXgmXrsghfzcXRgsVZ9ZyLQZLbgpox65GBRxh78J7nDznVksbU5EH1"
    }
}
```

</details>

[rawURL](https://digitalcredentials.github.io/vc-test-fixtures/verifiableCredentials/v2/ed25519/didKey/legacy-noStatus-noExpiry-stringIssuerId.json)

[Open Directly in VerifierPlus](https://verifierplus.org/#verify?vc=https://digitalcredentials.github.io/vc-test-fixtures/verifiableCredentials/v2/ed25519/didKey/legacy-noStatus-noExpiry-stringIssuerId.json)

![QR](verifiableCredentials/v2/ed25519/didKey/legacy-noStatus-noExpiry-stringIssuerId.png)

### /v2/ed25519/didKey/legacy-noStatus-noExpiry.json

<details>

<summary>Click to see copyable raw json</summary>

```json
   {
    "@context": [
        "https://www.w3.org/ns/credentials/v2",
        "https://purl.imsglobal.org/spec/ob/v3p0/context-3.0.3.json",
        "https://w3id.org/security/suites/ed25519-2020/v1"
    ],
    "id": "http://example.com/credentials/3527",
    "type": [
        "VerifiableCredential",
        "OpenBadgeCredential"
    ],
    "issuer": {
        "id": "did:key:z6MknNQD1WHLGGraFi6zcbGevuAgkVfdyCdtZnQTGWVVvR5Q",
        "type": [
            "Profile"
        ],
        "name": "Example Corp"
    },
    "validFrom": "2010-01-01T00:00:00Z",
    "name": "Teamwork Badge",
    "credentialSubject": {
        "id": "did:example:ebfeb1f712ebc6f1c276e12ec21",
        "type": [
            "AchievementSubject"
        ],
        "achievement": {
            "id": "https://example.com/achievements/21st-century-skills/teamwork",
            "type": [
                "Achievement"
            ],
            "criteria": {
                "narrative": "Team members are nominated for this badge by their peers and recognized upon review by Example Corp management."
            },
            "description": "This badge recognizes the development of the capacity to collaborate within a group environment.",
            "name": "Teamwork"
        }
    },
    "proof": {
        "type": "Ed25519Signature2020",
        "created": "2025-01-09T17:58:33Z",
        "verificationMethod": "did:key:z6MknNQD1WHLGGraFi6zcbGevuAgkVfdyCdtZnQTGWVVvR5Q#z6MknNQD1WHLGGraFi6zcbGevuAgkVfdyCdtZnQTGWVVvR5Q",
        "proofPurpose": "assertionMethod",
        "proofValue": "z62t6TYCERpTKuWCRhHc2fV7JoMhiFuEcCXGkX9iit8atQPhviN5cZeZfXRnvJWa3Bm6DjagKyrauaSJfp9C9i7q3"
    }
}
```

</details>

[rawURL](https://digitalcredentials.github.io/vc-test-fixtures/verifiableCredentials/v2/ed25519/didKey/legacy-noStatus-noExpiry.json)

[Open Directly in VerifierPlus](https://verifierplus.org/#verify?vc=https://digitalcredentials.github.io/vc-test-fixtures/verifiableCredentials/v2/ed25519/didKey/legacy-noStatus-noExpiry.json)

![QR](verifiableCredentials/v2/ed25519/didKey/legacy-noStatus-noExpiry.png)

### /v2/ed25519/didKey/legacy-notYetValidStatus-noExpiry.json

<details>

<summary>Click to see copyable raw json</summary>

```json
   {
    "@context": [
        "https://www.w3.org/ns/credentials/v2",
        "https://w3id.org/security/suites/ed25519-2020/v1"
    ],
    "id": "urn:uuid:4636EB2F-1B73-47EA-981E-CFA85A5B13E3",
    "type": [
        "VerifiableCredential"
    ],
    "issuer": "did:key:z6MknNQD1WHLGGraFi6zcbGevuAgkVfdyCdtZnQTGWVVvR5Q",
    "credentialSubject": {
        "name": "James Chartrand",
        "description": "James rode his new bike on the trails."
    },
    "credentialStatus": {
        "id": "https://digitalcredentials.github.io/vc-test-fixtures/statusLists/didkey-ed25519Signature2020/notYetValid#7",
        "type": "BitstringStatusListEntry",
        "statusPurpose": "revocation",
        "statusListCredential": "https://digitalcredentials.github.io/vc-test-fixtures/statusLists/didkey-ed25519Signature2020/notYetValid",
        "statusListIndex": "7"
    },
    "proof": {
        "type": "Ed25519Signature2020",
        "created": "2025-12-09T21:27:09Z",
        "verificationMethod": "did:key:z6MknNQD1WHLGGraFi6zcbGevuAgkVfdyCdtZnQTGWVVvR5Q#z6MknNQD1WHLGGraFi6zcbGevuAgkVfdyCdtZnQTGWVVvR5Q",
        "proofPurpose": "assertionMethod",
        "proofValue": "z4yiqoJhg38DCwokbbDqsUaQqKC6wxaTSqecafNYkDHTfZc83NCxd6wKRDc9WmwDj1EDCE6L41JwiwQPbqHs4VQEH"
    }
}
```

</details>

[rawURL](https://digitalcredentials.github.io/vc-test-fixtures/verifiableCredentials/v2/ed25519/didKey/legacy-notYetValidStatus-noExpiry.json)

[Open Directly in VerifierPlus](https://verifierplus.org/#verify?vc=https://digitalcredentials.github.io/vc-test-fixtures/verifiableCredentials/v2/ed25519/didKey/legacy-notYetValidStatus-noExpiry.json)

![QR](verifiableCredentials/v2/ed25519/didKey/legacy-notYetValidStatus-noExpiry.png)

### /v2/ed25519/didKey/legacy-tamperedStatus-noExpiry.json

<details>

<summary>Click to see copyable raw json</summary>

```json
   {
    "@context": [
        "https://www.w3.org/ns/credentials/v2",
        "https://w3id.org/security/suites/ed25519-2020/v1"
    ],
    "id": "urn:uuid:4636EB2F-1B73-47EA-981E-CFA85A5B13E3",
    "type": [
        "VerifiableCredential"
    ],
    "issuer": "did:key:z6MknNQD1WHLGGraFi6zcbGevuAgkVfdyCdtZnQTGWVVvR5Q",
    "credentialSubject": {
        "name": "James Chartrand",
        "description": "James rode his new bike on the trails."
    },
    "credentialStatus": {
        "id": "https://digitalcredentials.github.io/vc-test-fixtures/statusLists/didkey-ed25519Signature2020/tampered#7",
        "type": "BitstringStatusListEntry",
        "statusPurpose": "revocation",
        "statusListCredential": "https://digitalcredentials.github.io/vc-test-fixtures/statusLists/didkey-ed25519Signature2020/tampered",
        "statusListIndex": "7"
    },
    "proof": {
        "type": "Ed25519Signature2020",
        "created": "2025-12-09T21:20:04Z",
        "verificationMethod": "did:key:z6MknNQD1WHLGGraFi6zcbGevuAgkVfdyCdtZnQTGWVVvR5Q#z6MknNQD1WHLGGraFi6zcbGevuAgkVfdyCdtZnQTGWVVvR5Q",
        "proofPurpose": "assertionMethod",
        "proofValue": "z4Bi8wA7qeYARJuXTSDFLBN1gz4VKUpxqqafyUCUoV3akiPcQ4CqP2LU7s2M1YXrt3TdrQiar147kP2cQjsFawRuU"
    }
}
```

</details>

[rawURL](https://digitalcredentials.github.io/vc-test-fixtures/verifiableCredentials/v2/ed25519/didKey/legacy-tamperedStatus-noExpiry.json)

[Open Directly in VerifierPlus](https://verifierplus.org/#verify?vc=https://digitalcredentials.github.io/vc-test-fixtures/verifiableCredentials/v2/ed25519/didKey/legacy-tamperedStatus-noExpiry.json)

![QR](verifiableCredentials/v2/ed25519/didKey/legacy-tamperedStatus-noExpiry.png)

### /v2/ed25519/didKey/noRegistry-revokedStatus-expired.json

<details>

<summary>Click to see copyable raw json</summary>

```json
   {
    "type": [
        "VerifiableCredential",
        "OpenBadgeCredential"
    ],
    "name": "Teamwork Badge",
    "issuer": {
        "type": [
            "Profile"
        ],
        "name": "Example Corp",
        "id": "did:key:z6MkqBcwQ7qnRBRpgtsJQviLFeYxExMUE2k9nwKkMTF3DdRZ"
    },
    "@context": [
        "https://www.w3.org/ns/credentials/v2",
        "https://purl.imsglobal.org/spec/ob/v3p0/context-3.0.3.json",
        "https://w3id.org/security/suites/ed25519-2020/v1"
    ],
    "validFrom": "2010-01-01T00:00:00Z",
    "validUntil": "2010-01-02T00:00:00Z",
    "credentialSubject": {
        "type": [
            "AchievementSubject"
        ],
        "name": "Sam Salmon",
        "achievement": {
            "id": "https://example.com/achievements/21st-century-skills/teamwork",
            "type": [
                "Achievement"
            ],
            "name": "Bachelors - v2 - revoked",
            "criteria": {
                "narrative": "Team members are nominated for this badge by their peers and recognized upon review by Example Corp management."
            },
            "description": "This badge recognizes the development of the capacity to collaborate within a group environment."
        }
    },
    "id": "urn:uuid:677fe8a6cacf98774d482d06",
    "credentialStatus": {
        "id": "https://raw.githubusercontent.com/digitalcredentials/verifier-core/refs/heads/main/src/test-fixtures/status/e5WK8CbZ1GjycuPombrj#8",
        "type": "BitstringStatusListEntry",
        "statusPurpose": "revocation",
        "statusListCredential": "https://raw.githubusercontent.com/digitalcredentials/verifier-core/refs/heads/main/src/test-fixtures/status/e5WK8CbZ1GjycuPombrj",
        "statusListIndex": "8"
    },
    "proof": {
        "type": "Ed25519Signature2020",
        "created": "2025-05-13T13:42:46Z",
        "verificationMethod": "did:key:z6MkqBcwQ7qnRBRpgtsJQviLFeYxExMUE2k9nwKkMTF3DdRZ#z6MkqBcwQ7qnRBRpgtsJQviLFeYxExMUE2k9nwKkMTF3DdRZ",
        "proofPurpose": "assertionMethod",
        "proofValue": "z4qoNe84qyGy4AtvCpPuEmeQ1ebgfhmssCLEyDxYLqQFK3mSNzpq7kG9FV1q2bxFDFvrRq8D8dcTYDjr3ETxpoyan"
    }
}
```

</details>

[rawURL](https://digitalcredentials.github.io/vc-test-fixtures/verifiableCredentials/v2/ed25519/didKey/noRegistry-revokedStatus-expired.json)

[Open Directly in VerifierPlus](https://verifierplus.org/#verify?vc=https://digitalcredentials.github.io/vc-test-fixtures/verifiableCredentials/v2/ed25519/didKey/noRegistry-revokedStatus-expired.json)

![QR](verifiableCredentials/v2/ed25519/didKey/noRegistry-revokedStatus-expired.png)

### /v2/ed25519/didKey/noRegistry-revokedStatus-notExpired.json

<details>

<summary>Click to see copyable raw json</summary>

```json
   {
    "type": [
        "VerifiableCredential",
        "OpenBadgeCredential"
    ],
    "name": "Teamwork Badge",
    "issuer": {
        "type": [
            "Profile"
        ],
        "name": "Example Corp",
        "id": "did:key:z6MkqBcwQ7qnRBRpgtsJQviLFeYxExMUE2k9nwKkMTF3DdRZ"
    },
    "@context": [
        "https://www.w3.org/ns/credentials/v2",
        "https://purl.imsglobal.org/spec/ob/v3p0/context-3.0.3.json",
        "https://w3id.org/security/suites/ed25519-2020/v1"
    ],
    "validFrom": "2010-01-01T00:00:00Z",
    "validUntil": "9999-01-02T00:00:00Z",
    "credentialSubject": {
        "type": [
            "AchievementSubject"
        ],
        "name": "Sam Salmon",
        "achievement": {
            "id": "https://example.com/achievements/21st-century-skills/teamwork",
            "type": [
                "Achievement"
            ],
            "name": "Bachelors - v2 - revoked",
            "criteria": {
                "narrative": "Team members are nominated for this badge by their peers and recognized upon review by Example Corp management."
            },
            "description": "This badge recognizes the development of the capacity to collaborate within a group environment."
        }
    },
    "id": "urn:uuid:677fe8a6cacf98774d482d06",
    "credentialStatus": {
        "id": "https://raw.githubusercontent.com/digitalcredentials/verifier-core/refs/heads/main/src/test-fixtures/status/e5WK8CbZ1GjycuPombrj#8",
        "type": "BitstringStatusListEntry",
        "statusPurpose": "revocation",
        "statusListCredential": "https://raw.githubusercontent.com/digitalcredentials/verifier-core/refs/heads/main/src/test-fixtures/status/e5WK8CbZ1GjycuPombrj",
        "statusListIndex": "8"
    },
    "proof": {
        "type": "Ed25519Signature2020",
        "created": "2025-05-13T14:58:41Z",
        "verificationMethod": "did:key:z6MkqBcwQ7qnRBRpgtsJQviLFeYxExMUE2k9nwKkMTF3DdRZ#z6MkqBcwQ7qnRBRpgtsJQviLFeYxExMUE2k9nwKkMTF3DdRZ",
        "proofPurpose": "assertionMethod",
        "proofValue": "z63xprKbrFWjGxUvTkPu2DjH4F5SdJmXXJv5FoWeRHa7DH4yEayqqi7pKdk4jsyG1ZENAg5ng5fhtN3J9wX6pRpmW"
    }
}
```

</details>

[rawURL](https://digitalcredentials.github.io/vc-test-fixtures/verifiableCredentials/v2/ed25519/didKey/noRegistry-revokedStatus-notExpired.json)

[Open Directly in VerifierPlus](https://verifierplus.org/#verify?vc=https://digitalcredentials.github.io/vc-test-fixtures/verifiableCredentials/v2/ed25519/didKey/noRegistry-revokedStatus-notExpired.json)

![QR](verifiableCredentials/v2/ed25519/didKey/noRegistry-revokedStatus-notExpired.png)

### /v2/ed25519/didKey/oidf-revokedStatus-noExpiry.json

<details>

<summary>Click to see copyable raw json</summary>

```json
   {
    "type": [
        "VerifiableCredential",
        "OpenBadgeCredential"
    ],
    "name": "Teamwork Badge",
    "issuer": {
        "type": [
            "Profile"
        ],
        "name": "Example Corp",
        "id": "did:key:z6MkjoriXdbyWD25YXTed114F8hdJrLXQ567xxPHAUKxpKkS"
    },
    "@context": [
        "https://www.w3.org/ns/credentials/v2",
        "https://purl.imsglobal.org/spec/ob/v3p0/context-3.0.3.json",
        "https://w3id.org/security/suites/ed25519-2020/v1"
    ],
    "validFrom": "2010-01-01T00:00:00Z",
    "credentialSubject": {
        "type": [
            "AchievementSubject"
        ],
        "name": "Sam Salmon",
        "achievement": {
            "id": "https://example.com/achievements/21st-century-skills/teamwork",
            "type": [
                "Achievement"
            ],
            "name": "Bachelors - v2 - revoked",
            "criteria": {
                "narrative": "Team members are nominated for this badge by their peers and recognized upon review by Example Corp management."
            },
            "description": "This badge recognizes the development of the capacity to collaborate within a group environment."
        }
    },
    "id": "urn:uuid:677fe8a6cacf98774d482d06",
    "credentialStatus": {
        "id": "https://raw.githubusercontent.com/digitalcredentials/verifier-core/refs/heads/main/src/test-fixtures/status/e5WK8CbZ1GjycuPombrj#8",
        "type": "BitstringStatusListEntry",
        "statusPurpose": "revocation",
        "statusListCredential": "https://raw.githubusercontent.com/digitalcredentials/verifier-core/refs/heads/main/src/test-fixtures/status/e5WK8CbZ1GjycuPombrj",
        "statusListIndex": "8"
    },
    "proof": {
        "type": "Ed25519Signature2020",
        "created": "2025-05-13T13:13:08Z",
        "verificationMethod": "did:key:z6MkjoriXdbyWD25YXTed114F8hdJrLXQ567xxPHAUKxpKkS#z6MkjoriXdbyWD25YXTed114F8hdJrLXQ567xxPHAUKxpKkS",
        "proofPurpose": "assertionMethod",
        "proofValue": "z31GvNpabam3BGB5Uz1US98snTefDwBMk4dM8u83syH25TypnnnqR7PwenhS2kEwHoyx3GXLjmPTdtAoZXa88Sf43"
    }
}
```

</details>

[rawURL](https://digitalcredentials.github.io/vc-test-fixtures/verifiableCredentials/v2/ed25519/didKey/oidf-revokedStatus-noExpiry.json)

[Open Directly in VerifierPlus](https://verifierplus.org/#verify?vc=https://digitalcredentials.github.io/vc-test-fixtures/verifiableCredentials/v2/ed25519/didKey/oidf-revokedStatus-noExpiry.json)

![QR](verifiableCredentials/v2/ed25519/didKey/oidf-revokedStatus-noExpiry.png)

### /v2/ed25519/didWeb/badDidWeb.json

<details>

<summary>Click to see copyable raw json</summary>

```json
   {
    "type": [
        "VerifiableCredential",
        "OpenBadgeCredential"
    ],
    "name": "Teamwork Badge",
    "issuer": {
        "type": [
            "Profile"
        ],
        "name": "Example Corp",
        "id": "did:web:digitalcredentials.github.io:dcc-did-web-bad"
    },
    "@context": [
        "https://www.w3.org/ns/credentials/v2",
        "https://purl.imsglobal.org/spec/ob/v3p0/context-3.0.3.json",
        "https://w3id.org/security/suites/ed25519-2020/v1"
    ],
    "validFrom": "2010-01-01T00:00:00Z",
    "credentialSubject": {
        "type": [
            "AchievementSubject"
        ],
        "name": "Taylor Tuna",
        "achievement": {
            "id": "https://example.com/achievements/21st-century-skills/teamwork",
            "type": [
                "Achievement"
            ],
            "name": "Masters - v2 - unrevoked",
            "criteria": {
                "narrative": "Team members are nominated for this badge by their peers and recognized upon review by Example Corp management."
            },
            "description": "This badge recognizes the development of the capacity to collaborate within a group environment."
        }
    },
    "id": "urn:uuid:677fe8a6cacf98774d482d07",
    "proof": {
        "type": "Ed25519Signature2020",
        "created": "2025-01-21T17:20:42Z",
        "verificationMethod": "did:web:digitalcredentials.github.io:dcc-did-web-bad#z6MknNQD1WHLGGraFi6zcbGevuAgkVfdyCdtZnQTGWVVvR5Q",
        "proofPurpose": "assertionMethod",
        "proofValue": "z3exwX8VPoA2qME3WQdZ5RvCY9ahbUDDAXkm8Fb4zuCE5dnMWUVZrEN1q5hVmgroQq65WUwNiGHVgr2av5r7wRtb7"
    }
}

```

</details>

[rawURL](https://digitalcredentials.github.io/vc-test-fixtures/verifiableCredentials/v2/ed25519/didWeb/badDidWeb.json)

[Open Directly in VerifierPlus](https://verifierplus.org/#verify?vc=https://digitalcredentials.github.io/vc-test-fixtures/verifiableCredentials/v2/ed25519/didWeb/badDidWeb.json)

![QR](verifiableCredentials/v2/ed25519/didWeb/badDidWeb.png)

### /v2/ed25519/didWeb/legacy-revokedStatus-expired.json

<details>

<summary>Click to see copyable raw json</summary>

```json
   {
    "type": [
        "VerifiableCredential",
        "OpenBadgeCredential"
    ],
    "name": "Teamwork Badge",
    "issuer": {
        "type": [
            "Profile"
        ],
        "name": "Example Corp",
        "id": "did:web:digitalcredentials.github.io:vc-test-fixtures:dids:legacy"
    },
    "@context": [
        "https://www.w3.org/ns/credentials/v2",
        "https://purl.imsglobal.org/spec/ob/v3p0/context-3.0.3.json",
        "https://w3id.org/security/suites/ed25519-2020/v1"
    ],
    "validFrom": "2010-01-01T00:00:00Z",
    "validUntil": "2010-01-02T00:00:00Z",
    "credentialSubject": {
        "type": [
            "AchievementSubject"
        ],
        "name": "Sam Salmon",
        "achievement": {
            "id": "https://example.com/achievements/21st-century-skills/teamwork",
            "type": [
                "Achievement"
            ],
            "name": "Bachelors - v2 - revoked",
            "criteria": {
                "narrative": "Team members are nominated for this badge by their peers and recognized upon review by Example Corp management."
            },
            "description": "This badge recognizes the development of the capacity to collaborate within a group environment."
        }
    },
    "id": "urn:uuid:677fe8a6cacf98774d482d06",
    "credentialStatus": {
        "id": "https://raw.githubusercontent.com/digitalcredentials/verifier-core/refs/heads/main/src/test-fixtures/status/e5WK8CbZ1GjycuPombrj#8",
        "type": "BitstringStatusListEntry",
        "statusPurpose": "revocation",
        "statusListCredential": "https://raw.githubusercontent.com/digitalcredentials/verifier-core/refs/heads/main/src/test-fixtures/status/e5WK8CbZ1GjycuPombrj",
        "statusListIndex": "8"
    },
    "proof": {
        "type": "Ed25519Signature2020",
        "created": "2025-05-13T13:37:01Z",
        "verificationMethod": "did:web:digitalcredentials.github.io:vc-test-fixtures:dids:legacy#z6MkjXe1vZvPRqFuc9nRBtZ3e1Y9XKDFSbjFAfzLfW2bD6cZ",
        "proofPurpose": "assertionMethod",
        "proofValue": "z3GGnjECdAtHVriMtKH3ock4ReELUjpjD4McBANo4GNsBAAbuJoiN9BC9pgT5DjuyCRawc5tYrEbVVzy3gBogTDEk"
    }
}
```

</details>

[rawURL](https://digitalcredentials.github.io/vc-test-fixtures/verifiableCredentials/v2/ed25519/didWeb/legacy-revokedStatus-expired.json)

[Open Directly in VerifierPlus](https://verifierplus.org/#verify?vc=https://digitalcredentials.github.io/vc-test-fixtures/verifiableCredentials/v2/ed25519/didWeb/legacy-revokedStatus-expired.json)

![QR](verifiableCredentials/v2/ed25519/didWeb/legacy-revokedStatus-expired.png)

### /v2/ed25519/didWeb/legacy-revokedStatus-noExpiry.json

<details>

<summary>Click to see copyable raw json</summary>

```json
   {
    "type": [
        "VerifiableCredential",
        "OpenBadgeCredential"
    ],
    "name": "Teamwork Badge",
    "issuer": {
        "type": [
            "Profile"
        ],
        "name": "Example Corp",
        "id": "did:web:digitalcredentials.github.io:vc-test-fixtures:dids:legacy"
    },
    "@context": [
        "https://www.w3.org/ns/credentials/v2",
        "https://purl.imsglobal.org/spec/ob/v3p0/context-3.0.3.json",
        "https://w3id.org/security/suites/ed25519-2020/v1"
    ],
    "validFrom": "2010-01-01T00:00:00Z",
    "credentialSubject": {
        "type": [
            "AchievementSubject"
        ],
        "name": "Sam Salmon",
        "achievement": {
            "id": "https://example.com/achievements/21st-century-skills/teamwork",
            "type": [
                "Achievement"
            ],
            "name": "Bachelors - v2 - revoked",
            "criteria": {
                "narrative": "Team members are nominated for this badge by their peers and recognized upon review by Example Corp management."
            },
            "description": "This badge recognizes the development of the capacity to collaborate within a group environment."
        }
    },
    "id": "urn:uuid:677fe8a6cacf98774d482d06",
    "credentialStatus": {
        "id": "https://raw.githubusercontent.com/digitalcredentials/verifier-core/refs/heads/main/src/test-fixtures/status/e5WK8CbZ1GjycuPombrj#8",
        "type": "BitstringStatusListEntry",
        "statusPurpose": "revocation",
        "statusListCredential": "https://raw.githubusercontent.com/digitalcredentials/verifier-core/refs/heads/main/src/test-fixtures/status/e5WK8CbZ1GjycuPombrj",
        "statusListIndex": "8"
    },
    "proof": {
        "type": "Ed25519Signature2020",
        "created": "2025-05-13T13:22:22Z",
        "verificationMethod": "did:web:digitalcredentials.github.io:vc-test-fixtures:dids:legacy#z6MkjXe1vZvPRqFuc9nRBtZ3e1Y9XKDFSbjFAfzLfW2bD6cZ",
        "proofPurpose": "assertionMethod",
        "proofValue": "z5WbVXupt2BUnQpQCJUPurU66kR1J9qV45fzxaJVKqP8cLoSBXEJ9Vmikky1dUpr5GSwv55GroghcZMjrM9o2fcdz"
    }
}
```

</details>

[rawURL](https://digitalcredentials.github.io/vc-test-fixtures/verifiableCredentials/v2/ed25519/didWeb/legacy-revokedStatus-noExpiry.json)

[Open Directly in VerifierPlus](https://verifierplus.org/#verify?vc=https://digitalcredentials.github.io/vc-test-fixtures/verifiableCredentials/v2/ed25519/didWeb/legacy-revokedStatus-noExpiry.json)

![QR](verifiableCredentials/v2/ed25519/didWeb/legacy-revokedStatus-noExpiry.png)

### /v2/ed25519/didWeb/oidf-noStatus-notExpired.json

<details>

<summary>Click to see copyable raw json</summary>

```json
   {
    "type": [
        "VerifiableCredential",
        "OpenBadgeCredential"
    ],
    "name": "Teamwork Badge",
    "issuer": {
        "type": [
            "Profile"
        ],
        "name": "Example Corp",
        "id": "did:web:digitalcredentials.github.io:vc-test-fixtures:dids:oidf"
    },
    "@context": [
        "https://www.w3.org/ns/credentials/v2",
        "https://purl.imsglobal.org/spec/ob/v3p0/context-3.0.3.json",
        "https://w3id.org/security/suites/ed25519-2020/v1"
    ],
    "validFrom": "2010-01-01T00:00:00Z",
    "validUntil": "2056-01-02T00:00:00Z",
    "credentialSubject": {
        "type": [
            "AchievementSubject"
        ],
        "name": "Sam Salmon",
        "achievement": {
            "id": "https://example.com/achievements/21st-century-skills/teamwork",
            "type": [
                "Achievement"
            ],
            "name": "Bachelors - v2 - revoked",
            "criteria": {
                "narrative": "Team members are nominated for this badge by their peers and recognized upon review by Example Corp management."
            },
            "description": "This badge recognizes the development of the capacity to collaborate within a group environment."
        }
    },
    "id": "urn:uuid:677fe8a6cacf98774d482d06",
    "proof": {
        "type": "Ed25519Signature2020",
        "created": "2025-05-13T15:11:33Z",
        "verificationMethod": "did:web:digitalcredentials.github.io:vc-test-fixtures:dids:oidf#z6MkjXe1vZvPRqFuc9nRBtZ3e1Y9XKDFSbjFAfzLfW2bD6cZ",
        "proofPurpose": "assertionMethod",
        "proofValue": "z2GkyiEi5A7kZGdYFgGHpyk6mFVkcTM9jhgeFfLuygpm3ZKEYSyCp9uFfKqMdxtMA4jKq27cqG3yLN1vMFxfVtRsU"
    }
}
```

</details>

[rawURL](https://digitalcredentials.github.io/vc-test-fixtures/verifiableCredentials/v2/ed25519/didWeb/oidf-noStatus-notExpired.json)

[Open Directly in VerifierPlus](https://verifierplus.org/#verify?vc=https://digitalcredentials.github.io/vc-test-fixtures/verifiableCredentials/v2/ed25519/didWeb/oidf-noStatus-notExpired.json)

![QR](verifiableCredentials/v2/ed25519/didWeb/oidf-noStatus-notExpired.png)


# W7.4 Canonical Builder Adoption — DSY1102

**Issue:** #4
**Wave:** W7.4
**Repository:** `cmartinezs/DSY1102-DESARROLLO-ORIENTADO-OBJETOS-2026-2`
**Classification target:** `EDUCATIONAL`
**Facets:** `COURSE_REPOSITORY`, `LEARNER_FIRST`
**Status:** `FINAL_HUMAN_CONFIRMATION_REQUIRED`

## Purpose

Validate the canonical Repository Information Contract and Repository Site pipeline against a learner-first course repository whose primary information architecture is pedagogical progression rather than product or engineering architecture.

W7.4 is the final planned adopter of the current Wave 7 cohort. It must not introduce an EDUCATIONAL-specific schema fork, Builder branch, hidden semantic discovery or a parallel web authority.

## Governed fixture

```text
repository.type = EDUCATIONAL
repository.facets = [COURSE_REPOSITORY, LEARNER_FIRST]
audiences.primary = [USER]
audiences.secondary = [DEVELOPER, GOVERNANCE]
```

Mapped concerns are backed by existing course sources: course orientation, weekly learning path, concepts, examples, exercises/challenges, labs, PetCare, evaluation/evidence guidance and weekly maintainer guidance. AVA remains the institutional authority where applicable.

## Temporal-truth reconciliation

Before replay, local documentation was reconciled so the adopter no longer advertises a root `page/` source that does not exist, no longer uses obsolete `examples/` / `practica/` aliases in the local weekly checklist, and no longer marks Week 04 as `Actual` while Week 06 material already exists.

The transversal `docs/CANON-REPOSITORIO-DOCENTE.md` remains outside this adopter-specific change.

## Canonical semantic path

```text
governance/repository.yaml
        +
governance/repository-site.adel
        ↓
ADEL 0.1
        ↓
adel-compiler
        ↓
resolved-projection
        ↓
Builder private Knowledge IR / CompilationInput
        ↓
standard-repo-website-builder
```

No ADEL Core change, profile bump, schema fork or repository-specific Builder hardcoding was required.

## Pre-closure machine acceptance

Latest reviewed pre-closure revision: `ab92458c8955baed912171a6031878c4bc71d710`.

Verified:

- canonical replay = `PASS_WITH_DECLARED_GAPS`;
- product gate = `PASS_WITH_DECLARED_GAPS`;
- only declared gap = `W7-4-ADOPTION-001`;
- 8 knowledge items / 8 sources present / 0 missing;
- diagnostics = 0;
- production semantic input = `adel-resolved-projection`;
- resolved semantic nodes = 6;
- deterministic outputs, identity, gaps, section hubs and page count;
- 8 knowledge pages / 15 output files;
- 75 links checked / 0 broken;
- shell/navigation = PASS;
- knowledge discoverability = PASS;
- publication readiness = `READY_FOR_PROVIDER_VERIFICATION`;
- schema fork required = false;
- repository-specific Builder hardcoding required = false;
- browser captures = `READY_FOR_HUMAN_REVIEW`.

Machine evidence: `governance/evidence/W7-4-MACHINE-ACCEPTANCE.md`.

## Human review

Representative desktop/mobile captures for Home, Conformance, Knowledge and Course Orientation were reviewed.

Result: `PASS`.

Accepted criteria:

- global navigation coherent and usable;
- repository identity visible and consistent;
- readable content hierarchy;
- shell preserved through section/detail navigation;
- no visible mobile horizontal page overflow;
- material knowledge discoverable without source-only navigation;
- learner-first EDUCATIONAL orientation preserved;
- current-state/temporal truth consistent with the pre-closure declared-gap state.

Non-blocking observation: the long repository identity is visually truncated in the mobile header, but identity remains recognizable and navigation usable.

Human evidence: `governance/evidence/W7-4-HUMAN-REVIEW-PASS.md`.

## Gap closure

`W7-4-ADOPTION-001` is now closed because its closure conditions have been satisfied:

- canonical replay classified;
- no undeclared blocking gaps;
- desktop review PASS;
- mobile review PASS;
- temporal truth PASS;
- publication readiness classified.

Closing the gap changes `governance/repository.yaml`, so evidence from the pre-closure revision is not sufficient to claim final W7.4 PASS.

Current state:

```text
W7_4_MACHINE_PRECLOSURE = PASS_WITH_DECLARED_GAPS
W7_4_HUMAN = PASS
W7_4_ADOPTION_001 = CLOSED
W7_4_FINAL_REPLAY = PENDING
PR_5_MERGE_ALLOWED = false
WAVE_7_FULL_COHORT_COMPLETE = false
```

## Final exit gate

Run the canonical replay and product gate against the post-closure revision. Required final state:

```text
w7-adopter-replay = PASS
w7-adopter-product-gate = PASS
declared_gaps = []
sources_missing = 0
broken_links = 0
semantic_input = adel-resolved-projection
```

A final browser capture may be used to confirm Conformance now renders the gap-free `Validation: PASS` state. Only after final replay acceptance may PR #5 merge and Wave 7 full-cohort completion be claimed.

## Non-claims

This record does not yet claim:

- final W7.4 PASS;
- Wave 7 full cohort complete;
- provider-side Pages state verified;
- ADEL Core changes required;
- AVA authority replaced.

## Final post-closure replay

The adopter branch was reconciled with the current `master` course state and
the governed W7.4 gates were re-executed against source revision
`ddcf790f508f07cb0a27dacd185d46de9b59ef5f`.

### Machine result

```text
w7-adopter-replay = PASS
w7-adopter-product-gate = PASS
declared_gaps = []
sources_missing = 0
diagnostics = 0
broken_links = 0
semantic_input = adel-resolved-projection
resolved_semantic_nodes = 6
```

The canonical replay verified deterministic builds, repository identity,
declared gaps, section hubs and knowledge-page count.

The product gate verified 75 generated links with zero broken links, governed
navigation, knowledge discoverability and publication readiness
`READY_FOR_PROVIDER_VERIFICATION`.

### Browser capture

`w7-adopter-browser-review` completed successfully and produced eight fresh
desktop/mobile captures for Home, Conformance, Knowledge and Course
Orientation.

Its semantic status is:

`READY_FOR_HUMAN_REVIEW`

This is intentionally not represented as a human PASS.

### Current closure state

```text
W7_4_MACHINE = PASS
W7_4_PRODUCT = PASS
W7_4_ADOPTION_001 = CLOSED
W7_4_FINAL_BROWSER_CAPTURE = READY_FOR_HUMAN_REVIEW
W7_4_FINAL_HUMAN_CONFIRMATION = PENDING
PR_5_MERGE_ALLOWED = false
WAVE_7_FULL_COHORT_COMPLETE = false
```

PR #5 may be promoted to merge-allowed only after the fresh post-reconciliation
captures receive final human confirmation.

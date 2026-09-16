# W7.4 Canonical Builder Adoption — DSY1102

**Issue:** #4
**Wave:** W7.4
**Repository:** `cmartinezs/DSY1102-DESARROLLO-ORIENTADO-OBJETOS-2026-2`
**Classification target:** `EDUCATIONAL`
**Facets:** `COURSE_REPOSITORY`, `LEARNER_FIRST`
**Status:** `COMPLETE`

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

Local documentation was reconciled so the adopter no longer advertises a root `page/` source that does not exist, no longer uses obsolete local aliases, and does not retain stale Week 04 current-state markers while later material exists.

The transversal `docs/CANON-REPOSITORIO-DOCENTE.md` remained outside this adopter-specific change.

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

## Historical pre-closure acceptance

Pre-closure replay classified the adopter as `PASS_WITH_DECLARED_GAPS` with only `W7-4-ADOPTION-001` open. Machine and product acceptance otherwise passed, with all eight mapped sources present and zero broken generated links.

Representative desktop/mobile review also passed the learner-first, navigation, hierarchy, mobile-layout and temporal-truth criteria. That review satisfied the final closure conditions for the adoption gap.

## Reconciliation with concurrent course work

While W7.4 was open, the course repository continued evolving through Week 06 / Veterinaria II work in parallel conversations. The W7.4 branch was therefore reconciled with the then-current `master` before final acceptance.

Relevant sequence:

```text
458cf11  Merge PR #7 · Week 06 pedagogical reconciliation
    ↓
ddcf790  reconcile W7.4 branch with current course state
    ↓
2f659ab  persist final machine acceptance
    ↓
5c269b4  merge PR #5 · W7.4 EDUCATIONAL adoption
```

This ensures the final W7.4 replay included the relevant pedagogical changes rather than validating a stale branch.

## Final post-closure acceptance

Replay source revision: `ddcf790f508f07cb0a27dacd185d46de9b59ef5f`.

Final validated revision: `2f659aba6ba3773b15fa380b4af78b5db7a62526`.

Verified final machine state:

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

Additional verified product state:

- deterministic outputs, repository identity, declared gaps, section hubs and knowledge-page count;
- 8 knowledge pages / 15 output files;
- 75 generated links / 0 broken;
- governed shell/navigation = PASS;
- knowledge discoverability = PASS;
- publication readiness = `READY_FOR_PROVIDER_VERIFICATION`;
- no fixture-specific schema fork;
- no repository-specific Builder hardcoding.

Fresh post-reconciliation browser captures were generated and subsequently received final human visual confirmation as PASS.

## Final closure state

```text
W7_4_MACHINE = PASS
W7_4_PRODUCT = PASS
W7_4_HUMAN = PASS
W7_4_ADOPTION_001 = CLOSED
PR_5_MERGED = true
ISSUE_4_COMPLETED = true
WAVE_7_FULL_COHORT_COMPLETE = true
```

PR #5 merged as commit `5c269b41617dcaedcbe658bef9207899483fcab8`. Issue #4 closed as completed.

## Authority boundaries preserved

- no ADEL Core change;
- no `repository-site@0.2`;
- no EDUCATIONAL-specific Builder hardcoding;
- no fixture-specific schema fork;
- no hidden semantic rediscovery;
- no resurrection of `page/` merely to satisfy the portal;
- AVA remains institutional authority where applicable;
- generated portal remains a derived read model;
- `gh-pages` remains a separate publication history and was not merged into `master`.

## Post-merge metadata reconciliation

Issue #8 exists solely to reconcile canonical governance metadata with the already-established merged outcome. It does not reopen W7.4 acceptance and does not modify pedagogical material or the publication branch.

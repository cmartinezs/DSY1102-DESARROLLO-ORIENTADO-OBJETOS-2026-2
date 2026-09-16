# W7.4 Machine Acceptance — DSY1102

**Repository:** `cmartinezs/DSY1102-DESARROLLO-ORIENTADO-OBJETOS-2026-2`
**Wave:** W7.4
**Issue:** #4
**PR:** #5
**Source revision:** `3d6393804284dfb3362726ac84786f043d1b84c9`
**Status:** `PASS_WITH_DECLARED_GAPS`

## Governed commands

The adopter was executed through the governed Builder Make surface:

```text
make w7-adopter-replay
make w7-adopter-product-gate
make w7-adopter-browser-review
```

All three governed commands terminated with `PASS` at the command-execution layer.

## Canonical replay

Observed classification:

`PASS_WITH_DECLARED_GAPS`

Verified:

- `repository-site.adel` present;
- inspect succeeded;
- 8 knowledge items;
- 8 sources present;
- 0 sources missing;
- 0 diagnostics;
- validation accepted with the single declared adoption gap;
- 8 explicit descriptor items;
- 0 convention-discovered items;
- production semantic input = `adel-resolved-projection`;
- 6 resolved semantic nodes;
- 8 knowledge pages;
- 15 output files;
- section hubs = `conformance.html`, `knowledge.html`;
- resolved semantic nodes deterministic;
- rendered outputs deterministic;
- repository identity deterministic;
- declared gaps deterministic;
- section hubs deterministic;
- knowledge page count deterministic;
- fixture-specific schema fork required = false;
- repository-specific Builder hardcoding required = false.

The only declared gap is:

`W7-4-ADOPTION-001`

No undeclared machine blocker was observed.

## Product acceptance

Observed classification:

`PASS_WITH_DECLARED_GAPS`

Verified:

- canonical machine replay accepted;
- generated link integrity = PASS;
- 75 generated links checked;
- 0 broken links;
- governed shell/navigation = PASS;
- required navigation: Home, Knowledge, Conformance, Source;
- knowledge discoverability = PASS;
- all 8 expected knowledge surfaces discoverable;
- material knowledge projection present;
- publication enabled;
- publication readiness = `READY_FOR_PROVIDER_VERIFICATION`;
- no publication blocking gap.

Machine product acceptance is complete. Human acceptance remains intentionally pending.

## Browser review capture

Browser capture gate completed with:

`READY_FOR_HUMAN_REVIEW`

Representative surfaces captured at desktop `1440x1100` and mobile `390x844`:

1. `index.html`;
2. `conformance.html`;
3. `knowledge.html`;
4. `knowledge/course-orientation.html`.

Eight screenshots were generated in total. Structural capture checks report shell and required navigation present for every capture.

## Remaining acceptance

W7.4 MUST remain open until human review confirms:

- global navigation coherence;
- visible and consistent repository identity;
- readable hierarchy without clipping/overlap;
- global shell preserved on section/detail surfaces;
- no mobile horizontal overflow;
- material learner knowledge discoverable without relying on source links;
- current-state messaging is understandable and not contradicted by stale historical truth;
- learner-first EDUCATIONAL orientation remains evident.

Until that review passes:

```text
W7_4_MACHINE = PASS_WITH_DECLARED_GAPS
W7_4_HUMAN = PENDING
W7_4_ADOPTION_001 = OPEN
PR_5_MERGE_ALLOWED = false
WAVE_7_FULL_COHORT_COMPLETE = false
```

## Interpretation

The machine evidence supports the intended Wave 7.4 adoption architecture without requiring a new ADEL profile, ADEL Core change, fixture-specific schema fork, repository-specific Builder branch or hidden semantic rediscovery.

## Final post-closure machine acceptance

**Source revision:** `ddcf790f508f07cb0a27dacd185d46de9b59ef5f`
**Result:** `PASS`

The post-closure replay was executed after reconciliation with the current
`master` course state.

### Canonical replay

Observed classification:

`PASS`

Verified:

- repository-site ADEL present;
- inspect = `INSPECTED`;
- 8 knowledge items;
- 8 explicit descriptor items;
- 8 sources present;
- 0 sources missing;
- 0 diagnostics;
- validation = `PASS`;
- declared gaps = `[]`;
- production semantic input = `adel-resolved-projection`;
- 6 resolved semantic nodes;
- canonical build A = PASS;
- canonical build B = PASS;
- rendered outputs deterministic;
- repository identity deterministic;
- declared gaps deterministic;
- section hubs deterministic;
- knowledge page count deterministic;
- 8 knowledge pages;
- 15 output files.

### Final product acceptance

Observed classification:

`PASS`

Verified:

- canonical replay accepted;
- generated link integrity = PASS;
- 75 links checked;
- 0 broken links;
- governed shell/navigation = PASS;
- required navigation = Home, Knowledge, Conformance, Source;
- knowledge discoverability = PASS;
- all 8 expected knowledge surfaces discoverable;
- material knowledge projection present;
- publication enabled;
- publication readiness = `READY_FOR_PROVIDER_VERIFICATION`;
- no blocking or declared publication gap.

### Browser capture

The final browser-capture gate completed successfully at command level and
returned:

`READY_FOR_HUMAN_REVIEW`

Eight representative captures were generated for Home, Conformance, Knowledge
and Course Orientation at desktop `1440x1100` and mobile `390x844`.

Every capture reported shell present and required navigation present.

The browser gate is a capture/preparation gate and does not itself constitute
human visual acceptance.

### Final machine state

```text
W7_4_FINAL_REPLAY = PASS
W7_4_PRODUCT_GATE = PASS
W7_4_DECLARED_GAPS = []
W7_4_SOURCES_MISSING = 0
W7_4_DIAGNOSTICS = 0
W7_4_BROKEN_LINKS = 0
W7_4_SEMANTIC_INPUT = adel-resolved-projection
W7_4_ADOPTION_001 = CLOSED
W7_4_FINAL_BROWSER_CAPTURE = READY_FOR_HUMAN_REVIEW
W7_4_FINAL_HUMAN_CONFIRMATION = PENDING
PR_5_MERGE_ALLOWED = false
WAVE_7_FULL_COHORT_COMPLETE = false
```

No fixture-specific schema fork, ADEL Core change, EDUCATIONAL-specific Builder
branch or repository-specific Builder hardcoding was required.

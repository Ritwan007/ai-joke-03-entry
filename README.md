# ai-joke-03 entry

A one-program entry for make.fun's **ai-joke-03** ("Make the AI judge
laugh"). `main.ts` (Node 22, standard library only) writes a single
one-liner about AI coding agents to `/output/entry.txt`, deterministically:
same bytes on every run, no trailing newline.

Run it locally:

```sh
mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
cat out/entry.txt
```

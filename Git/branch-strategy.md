# git 브랜치 전략

## git flow
  <img src="https://wac-cdn.atlassian.com/dam/jcr:8f00f1a4-ef2d-498a-a2c6-8020bb97902f/03%20Release%20branches.svg?cdnVersion=575" alt="Git Flow">

## github flow
  <img src="https://i.ytimg.com/vi_webp/cP0I9w2coGU/maxresdefault.webp" alt="Github Flow">


<!--
## git flow vs github flow
## 두 전략을 같이 사용할 수 있는 방법?
```mermaid
%%{init: {'theme':'base', 'themeVariables': { 'lineColor': 'lightgrey' }}}%%
flowchart TB
  main --- Integration;
	subgraph Integration;
	test
	end;
	subgraph Feature;
	feature/A;
	feature/B;
	end;
	main ----- feature/A;
	main ----- feature/B;
	test-.- Feature
```
```mermaid
%%{init: {'theme':'base', 'themeVariables': { 'lineColor': 'lightgrey' }}}%%
gitGraph
	commit
	branch test
	branch feature/A
	branch feature/B
	checkout feature/A
	commit
	checkout feature/B
	commit
	commit
	checkout feature/A
	commit
	checkout test
	merge feature/A
	checkout feature/B
	commit
	checkout test
	merge feature/B
	checkout main
	merge feature/A
	merge feature/B
```
-->


## 읽을거리  
- [A successful Git branching model](https://nvie.com/posts/a-successful-git-branching-model/)
- [우린 Git-flow를 사용하고 있어요](https://techblog.woowahan.com/2553/)

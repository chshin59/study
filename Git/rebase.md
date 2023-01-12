# git rebase 정리

## 기본 기능
`Git rebase`는 두 개의 공통 Base를 가진 Branch에서 한 Branch의 Base를 다른 Branch의 최신 커밋으로 branch의 base를 옮기는 작업입니다. 용어 그대로 베이스를 다시 설정하는 작업입니다.
```bash
(test) $ git rebase main
```

## interactive mode
- edit (수정)
  ```bash
  $ git rebase -i <commit 해시>
  # pick -> edit으로 수정 후 저장

  # 더 이상 수정할 게 없을 때까지 반복
  $ git commit --amend     # vim 또는 nano로 수정
  $ git rebase --continue  # 수정이 끝나면 다음 커밋으로 이동
  ```
  커밋 메시지만 변경하고 싶은 경우 edit 대신 reword 사용

- drop (삭제)
  ```bash
  $ git rebase -i <commit 해시>
  # pick -> drop으로 수정 후 저장
  ```

- squash (병합)
  ```bash
  $ git rebase -i <commit 해시>
  # pick -> squash으로 수정 후 저장
  # vim에서 메시지 정리 후 저장
  ```

## Rebase의 위험성
> 이미 공개 저장소에 `Push` 한 커밋을 `Rebase` 하지 마라  
> https://git-scm.com/book/ko/v2/Git-%EB%B8%8C%EB%9E%9C%EC%B9%98-Rebase-%ED%95%98%EA%B8%B0#_rebase_peril  

이 지침만 지키면 Rebase를 하는 데 문제 될 게 없다. 하지만, 이 주의사항을 지키지 않으면 사람들에게 **욕**을 먹을 것이다.

## Rebase vs Merge
> 이 둘을 어떻게 쓸지는 각자의 상황과 각자의 판단에 달렸다.  
  
- Merge  
히스토리를 보는 관점 중에 하나는 작업한 내용의 기록으로 보는 것이 있다. 작업 내용을 기록한 문서이고, 각 기록은 각각 의미를 가지며, 변경할 수 없다. 이런 관점에서 커밋 히스토리를 변경한다는 것은 역사를 부정하는 꼴이 된다. 언제 무슨 일이 있었는지 기록에 대해 거짓말 을 하게 되는 것이다.
  
- Rebase  
히스토리를 프로젝트가 어떻게 진행되었나에 대한 이야기로도 볼 수 있다. 소프트웨어를 주의 깊게 편집하는 방법에 메뉴얼이나 세세한 작업내용을 초벌부터 공개하고 싶지 않을 수 있다. 나중에 다른 사람에게 들려주기 좋도록 `Rebase` 나 `filter-branch` 같은 도구로 프로젝트의 진행 이야기를 다듬으면 좋다.

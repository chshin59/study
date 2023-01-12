# git 기초
## 리포지토리(Repository) 설정
```bash
$ cd 파일이름/
$ git init
```
`.git` 이 생성됨
일반 폴더로 되돌리려면
```bash
$ rm -rf .git/
```

## 커밋하기
### 스테이지에 올리기(staging)
스테이징 전 저장 안하는 실수 주의
```bash
$ git add <filename>    #해당 파일의 변경사항 올리기
$ git add .             #현재 위치 전체의 변경사항 올리기
```

### Commit
변경사항 저장
```bash
$ git commit -m '변경된 내용 메시지'    #메시지를 꼭 남겨야 함
```

## 모니터링
### 현재 상황 확인하기
```bash
$ git status    #스테이징 전? 후? 확인할 수 있음
```
### Commit log 보기
```bash
$ git log
```

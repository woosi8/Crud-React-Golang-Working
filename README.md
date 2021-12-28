# CRUD (진행중)
 1. docker-compose -f docker-compose.yml up --build (Config.go에 dsn에 docker-compose.yml에 ports,User,Password 똑같이 설정해 줘야 한다.
 2. cd frontend  npm install or yarn install
 3. cd backend go run main.go
 4. my sql 에서 Setup New Connection > 1번 에서 입력한 정보들을 바탕으로 생성
    


# BackEnd
## - Go 언어의 gin framwork를 사용하여 데이터 테이블 생성 및 수정,삭제, 업데이트 기능 구현 
   - 데이터 베이스는 MySQL를 사용함
## - Config
## - Controller
###  MessageController.go
###  TableController.go
## - Dao
## - Models
## - Routes
## - Service

# FrontEnd
## Cards (Make_Cards_Modal)

- src/components/pages/Team/Team.js ( make card 구성하는 페이지 컴포넌트- Get 기능 구현)
- src/components/Team/TeamModal.js (팀 생성(플러스아이콘) 클릭시 modal로 TeamCreate 팝업)
- src/components/Team/TeamCrate.js (팀 생성 정보 입력 페이지 - Create 기능 구현)
- src/components/Team/Card.js (생성된 카드 정보 - Update 및 Delete 기능 구현)

## Table (Make_Table_User)

- src/components/pages/Team/Account.js (팀원 상세정보를 구성하는 페이지 컴포넌트 - navigate 작동시 state(여기선 유저 아이디) 를 AccountProfileDetails컴포넌트에 전달)
- src/components/Team/List/TeamAllUsers.js ( 테이블을 생성하고 선택하여 삭제하는 테이블 컴포넌트 Get,Delete,Create 기능 구현)
- src/components/Team/List/AccountProfileDetails.js (테이블에서 선택한 유저의 정보를 불러와서 Update해주는 기능 구현)

# 실행방법
1. 도커 빌드 : docker-compose -f docker-compose.yml up --build (포트랑 아이디 확인 in Config.go에서)
2. backend > go run main.go 
3. mysql connections 생성
4. frontend > yarn start


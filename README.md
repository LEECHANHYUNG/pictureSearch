# 사진 검색 어플리케이션

---

## 프로젝트 주제

- NASA 사진 검색 어플리케이션

---

## 사용 라이브러리

- React
- React-Router-DOM v5
- React-Bootstrap
- axios
- svgr

---

## 구현 기능

### 1. 검색 상자

- 검색 범위와 검색어 입력을 통한 검색
  - 검색어 범위와 겁색어 입력 시 페이지 이동
  - 이동한 페이지에서 react-router-dom의 useLocation Hook을 사용해 query String을 추출
  - 추출한 query String을 통해 서버에 API 요청 전송

---

### 2. 사진 리스트

- 서버에서 불러온 이미지와 제목, 날짜, 설명에 대한 데이터 포함
  - bootstrap의 col-2 클래스를 적용해 한 줄에 6개가 보이도록 구현
  - 데이터 로딩 시 isLoading state를 사용해 loading spinner를 보여준다.

---

### 3. 좋아요 리스트

- 사용자가 좋아요 표시를 입력한 카드를 오른쪽 component에서 보여준다.

- 좋아요 리스트 저장
  - 페이지가 이동되어도 동일 브라우저에서는 정보가 유지 => session storage 사용
- 최근 추가된 카드가 맨 위로 오도록 구현
  - session storage에 저장된 리스트를 reverse메서드를 사용해 사용자에게 card를 보여준다. => 최근 추가된 정보가 맨 위에 표시
- 데이터 즉시 반영
  - 데이터가 즉시 반영되어 리렌더링 되도록 react에서 제공하는 useContext hook 사용
### 4. 검색 결과 유지
- URL을 복사해서 다른 브라우저에서 접속해도 동일한 검색 결과가 표시되어야함
  - url에서 query string 정보를 받아와 서버에 요청
  - 검색 조건 dropdown과 검색어 입력 input에 query string에서 받아온 정보를 표시
 

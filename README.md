# web_cafe_project

### 배포 주소

🔗 [https://cafehomepage.vercel.app](https://cafehomepage.vercel.app)


React + Vite 기반의 카페 주문 페이지입니다.  
사용자는 메뉴를 선택하고, 옵션을 커스터마이징하여 장바구니에 담고 주문할 수 있습니다.  
CI/CD 자동 배포, Docker + Nginx 구성, 외부 API 연동 등을 적용했습니다.

---

### 주요 기능

-  **외부 API 연동**: 메뉴 이름과 이미지를 불러옴
-  **메뉴 주문 기능**: 음료 이미지, 이름, 가격을 보고 주문 가능
-  **옵션 커스터마이징**: 사이즈, 온도, 샷, 시럽, 휘핑크림 등 추가
-  **장바구니**: 수량 조절, 항목 삭제, 총 합계 계산
-  **로컬 저장소(localStorage)**: 새로고침해도 장바구니 유지
-  **룰렛 추천 기능**: 메뉴를 랜덤으로 추천
-  **Serverless Function 활용해 api키 노출되지 않도록 처리** 
-  **Docker + Nginx 배포 환경 구성**
-  **GitHub + Vercel 연동으로 자동 배포 (CI/CD)**

---

### CI/CD 구성

- GitHub 저장소 연결: [web_cafe_project](https://github.com/eunwoo031217/web_cafe_project)
- Vercel에 연동되어 `main` 브랜치에 push 시 자동 배포
- 환경변수(API 키)는 `.env` 파일로 관리, GitHub에는 `.gitignore`로 제외

---

### 실행 방법 (로컬 개발)

```bash
npm install
npm run dev
## 프로젝트 : nemonemologic

1. 타이틀, 힌트를 포함한 비어있는 격자가 렌더링이된다.
   1. ~~헤더에 타이틀이 알맞게 렌더린된다.~~
   2. ~~정답 배열을 이용해서, 힌트를 추출한다.~~
   3. 힌트가 힌트영역에 알맞게 표시된다.
   4. 빈 격자가 표시된다.
2. 격자의 각 칸의 클릭에 대한 처리
   1. 좌클릭
      1. 채워져있으면(🟩) 빈칸(⬜)으로
      2. 그외(❎,⬜)에는 채운다(🟩)
   2. 우클릭
      1. 엑스인경우(❎) 빈칸(⬜)으로
      2. 그외(🟩,⬜)에는 엑스(❎)로
   3. 모든 클릭정보가 정답배열에 추가된다.
      1. 매 클릭마다 비교한다.
3. 힌트숫자를 클릭처리
   1. 힌트 숫자를 클릭하면 숫자에 삭선이 그어진다.
   2. 다시 클릭하면 삭선이 지워진다.
4. 답안이 완전히 일치하면 성공 이미지를 띄운다.
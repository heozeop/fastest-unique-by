# 실행 방법

1. docker 설치
1. node version은 v22로 (업로드 현재 22.6.0)
1. pnpm 설치
1. 다음 실행
   ```
   pnpm install
   pnpm generate # data.json 생성
   docker compose up
   ```

## 모니터링 환경

1. localhost:9090 => prometheus
1. localhost:3001 => grafana

### 사용한 dashboard

- id: 19062
- link: https://grafana.com/grafana/dashboards/19062-nodejs-applications-dashboard/

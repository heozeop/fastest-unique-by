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

# 엔드 포인트

## /

- health check

## /metrics

- prometheus에서 메트릭 수집을 위해 사용하는 경로

## /uniuqBy

### /set

- set을 이용한 unique by

### /lodash

- lodash의 uniqBy를 이용한 unique by

### /immutable

- ImmutableJS의 Set을 이용한 unique by

### /map

- map을 이용해 먼저 생성하고 비교하도록 만든 unique by

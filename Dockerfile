# --------------------------
# 1) 빌드 스테이지
# --------------------------
FROM node:22-alpine3.21 AS builder

# pnpm 설치
RUN npm i -g pnpm

WORKDIR /usr/src/app

COPY package.json pnpm-lock.yaml ./

RUN pnpm install --frozen-lockfile

# 소스 코드 전체 복사
COPY . .

# NestJS 앱 빌드 (tsconfig.json, nest-cli.json 등 설정 주의)
RUN pnpm run build

# --------------------------
# 2) 런타임 스테이지
# --------------------------
FROM node:22-alpine3.21 AS runner

WORKDIR /usr/src/app

# builder 스테이지에서 빌드된 결과물(dist 폴더)과
# node_modules 폴더를 복사(프로덕션 환경에서 필요 패키지만 쓰고 싶다면 따로 분리 가능)
COPY --from=builder /usr/src/app/dist ./dist
COPY --from=builder /usr/src/app/node_modules ./node_modules

# NestJS는 기본적으로 3000 포트를 사용
EXPOSE 3000

# 실행 명령
CMD ["node", "dist/main"]
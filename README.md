# NLW Return - Server

### Tecnologias
[Prisma](https://prisma.io) |
[Prisma/SQLite](https://www.prisma.io/docs/concepts/database-connectors/sqlite) |
[mailtrap](https://mailtrap.io/) |
[Jest](https://jestjs.io/docs/getting-started) |
[SWC](https://swc.rs/docs/usage/jest)

### Criação do projeto:
      npm init -y
      npm i typescript @types/node ts-node-dev -D
      npx tsc --init
      npx tsc

### Execução
      npm run dev

### Dependências
      npm i express
      npm i @types/express -D

      npm i prisma -D
      npm i @prisma/client
      npx prisma init
      npx prisma migrate dev
        ...create_feedbacks
      npx prisma studio

      npm install nodemailer
      npm install @types/nodemailer -D

      npm install jest @types/jest -D
      npx jest --init
      npm install ts-node -D
      npm i -D @swc/core @swc/jest
      npm run test
      
### Vídeos:
[Aula 3](https://www.youtube.com/watch?v=bm2dnsPqcek)

# user appointmententication

## install prisma

```sh
pnpm add -D prisma
pnpm add @prisma/client @appointment/prisma-adapter
pnpm prisma init
```

set DATABASE_URL in .env
add .env to git ignore

enable uuid in postgre-sql

```sql
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";
```

```sh
pnpm prisma migrate dev --schema=./prisma/db-appointment/schema.prisma
pnpm prisma generate --schema=./prisma/db-appointment/schema.prisma
pnpm prisma db push --schema=./prisma/db-appointment/schema.prisma
```

define prisma client in `lib\db-appoitnment`

```sh
pnpm add bcryptjs
pnpm add -D @types/bcryptjs
```

## install authjs

```sh
pnpm add next-auth@beta
```

## define route for public route and auth route

## install react-hook-form

```sh
pnpm add react-hook-form
pnpm add zod
pnpm add @hookform/resolvers
```

## setup google APISs & Services Credentials

<https://console.cloud.google.com/apis/credentials>

## install shadcn ui

<https://ui.shadcn.com/docs/installation/next>

```sh
pnpm dlx shadcn-ui@latest init
pnpm dlx shadcn-ui@latest add button
pnpm dlx shadcn-ui@latest add avatar
pnpm dlx shadcn-ui@latest add dropdown-menu
```

## install react-icon

```sh
pnpm add react-icons
```

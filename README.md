# supersendtx-nodemailer

**[Nodemailer](https://nodemailer.com) transport for [SuperSend TX](https://supersendtx.com)** — keep `transporter.sendMail(...)` and deliver over the SuperSend TX HTTP API (not SMTP).

This repository is the **source of truth** for the transport implementation. Issues and PRs belong here. The HTTP client lives in [`supersendtx`](https://www.npmjs.com/package/supersendtx).

Works anywhere Nodemailer is accepted: Express apps, Payload, Auth.js email, Strapi, Ghost, workers, and custom stacks.

## Install

```bash
npm install supersendtx-nodemailer supersendtx nodemailer
```

```bash
SUPERSENDTX_API_KEY=stx_your_key_here
```

## Usage

```ts
import nodemailer from 'nodemailer'
import { createSuperSendTXTransport } from 'supersendtx-nodemailer'

const transporter = nodemailer.createTransport(
  createSuperSendTXTransport({
    apiKey: process.env.SUPERSENDTX_API_KEY!,
  }),
)

await transporter.sendMail({
  from: 'ops@yourdomain.com',
  to: 'user@example.com',
  subject: 'Your receipt',
  html: '<p>Thanks for your purchase.</p>',
  headers: {
    'X-SuperSendTX-Tag': 'campaign=welcome',
    'X-SuperSendTX-Idempotency-Key': 'receipt-123',
  },
})
```

The same transport is also available as `supersendtx/nodemailer` (re-export).

## Docs

https://docs.supersendtx.com/frameworks/node

## License

MIT

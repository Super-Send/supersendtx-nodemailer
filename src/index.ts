/**
 * Nodemailer transport for SuperSend TX.
 *
 * Source of truth for the transport lives in this package (public GitHub repo
 * Super-Send/supersendtx-nodemailer). The core `supersendtx` SDK re-exports
 * these symbols as `supersendtx/nodemailer` for backward compatibility.
 */
export {
  createSuperSendTXTransport,
  supersendtxTransport,
  mailDataToSendParams,
  HEADER_IDEMPOTENCY,
  HEADER_SCHEDULED_AT,
  HEADER_TAG,
  type SuperSendTXTransportOptions,
} from './transport'

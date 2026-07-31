/**
 * Public entry for the Nodemailer + SuperSend TX transport.
 * Implementation lives in the core SDK; this package exists for discoverability
 * (npm/GitHub search: nodemailer + transactional email).
 */
export {
  createSuperSendTXTransport,
  supersendtxTransport,
  HEADER_IDEMPOTENCY,
  HEADER_SCHEDULED_AT,
  HEADER_TAG,
  type SuperSendTXTransportOptions,
} from 'supersendtx/nodemailer'

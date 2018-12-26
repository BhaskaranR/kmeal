import { FetchOptions, HttpLink } from 'apollo-link-http'
import * as fetch from 'cross-fetch'

export default class HasuraLink extends HttpLink {
  constructor(hasuraApiUrl: string, accessKey: string) {
    if (!accessKey) {
      throw new Error(
        'No Hasura access key provided.',
      )
    }
    super({
      uri:     hasuraApiUrl,
      headers: { "X-Hasura-Access-Key": accessKey },
      fetch,
    })
  }
}


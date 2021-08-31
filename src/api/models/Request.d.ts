import { RequestType } from './RequestType'

interface AscentRequest {
    type: RequestType,
    params?: any,
    urlString: string,
    headers?: any,
}


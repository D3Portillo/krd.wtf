type withData<DataType> = { data: DataType }

declare module "@binance/connector" {
  interface Asset {
    asset: string
    btcValuation: string
    free: string
    freeze: string
    locked: string
    withdrawing: string
  }

  interface Ticker {
    price: string
    symbol: string
  }
  class Spot {
    constructor(apiKey: string, secret: string, config?: any)

    fundingWallet(options?: {
      asset?: string
      needBtcValuation?: boolean
      recvWindow?: number
    }): Promise<withData<Asset[]>>

    userAsset(options?: {
      asset?: string
      needBtcValuation?: boolean
    }): Promise<any>

    tickerPrice(symbol: string, symbols: string[]): Promise<withData<Ticker[]>>

    avgPrice(symbol: string): Promise<withData<Ticker>>
  }
}

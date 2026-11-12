import { createContext, useContext, useState, ReactNode, useCallback } from 'react';

export type CurrencyCode = 'ZAR' | 'USD' | 'EUR' | 'GBP';

export interface CurrencyInfo {
  code: CurrencyCode;
  symbol: string;
  label: string;
  /** Conversion factor from ZAR to this currency */
  rate: number;
}

export const CURRENCIES: Record<CurrencyCode, CurrencyInfo> = {
  ZAR: { code: 'ZAR', symbol: 'R', label: 'ZAR', rate: 1 },
  USD: { code: 'USD', symbol: '$', label: 'USD', rate: 1 / 18 },
  EUR: { code: 'EUR', symbol: '€', label: 'EUR', rate: 1 / 19 },
  GBP: { code: 'GBP', symbol: '£', label: 'GBP', rate: 1 / 22 },
};

interface CurrencyContextValue {
  currency: CurrencyInfo;
  setCurrency: (code: CurrencyCode) => void;
  /** Convert a ZAR amount to the active currency and format with symbol */
  format: (zarAmount: number) => string;
}

const CurrencyContext = createContext<CurrencyContextValue | undefined>(undefined);

export function CurrencyProvider({ children }: { children: ReactNode }) {
  const [currency, setCurrencyState] = useState<CurrencyInfo>(CURRENCIES.ZAR);

  const setCurrency = useCallback((code: CurrencyCode) => {
    setCurrencyState(CURRENCIES[code]);
  }, []);

  const format = useCallback(
    (zarAmount: number) => {
      const converted = zarAmount * currency.rate;
      const rounded = Math.round(converted);
      return `${currency.symbol}${rounded.toLocaleString()}`;
    },
    [currency]
  );

  return (
    <CurrencyContext.Provider value={{ currency, setCurrency, format }}>
      {children}
    </CurrencyContext.Provider>
  );
}

export function useCurrency() {
  const ctx = useContext(CurrencyContext);
  if (!ctx) throw new Error('useCurrency must be used within CurrencyProvider');
  return ctx;
}

declare module 'dnscache' {
  import dns from 'dns';
  
  interface DnsCacheOptions {
    enable?: boolean;
    ttl?: number;
    cachesize?: number;
  }

  type DnsCache = typeof dns;

  function dnscache(options?: DnsCacheOptions): DnsCache;
  export default dnscache;
} 
interface AddressMapProps {
  address: string;
}

export default function AddressMap({ address }: AddressMapProps) {
  const embedUrl = `https://maps.google.com/maps?q=${encodeURIComponent(address)}&output=embed`;

  return (
    <div className="rounded-sm overflow-hidden border border-slate-100 shadow-sm h-64 relative">
      {/* Google Map iframe */}
      <iframe
        src={embedUrl}
        width="100%"
        height="100%"
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title={`Map showing ${address}`}
        className="absolute inset-0 w-full h-full"
      />

      {/* Address label overlay */}
      <a
        href={`https://maps.google.com/maps?q=${encodeURIComponent(address)}`}
        target="_blank"
        rel="noopener noreferrer"
        className="absolute bottom-3 left-3 right-3 bg-white/90 backdrop-blur-sm rounded-sm px-3 py-2 flex items-center gap-2 shadow-sm hover:bg-white transition-colors"
      >
        <span className="shrink-0 w-5 h-5 rounded-full bg-[var(--gold)]/10 flex items-center justify-center">
          <svg width="10" height="12" viewBox="0 0 10 12" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M5 0C2.24 0 0 2.24 0 5c0 3.75 5 7 5 7s5-3.25 5-7c0-2.76-2.24-5-5-5zm0 6.5A1.5 1.5 0 1 1 5 3.5a1.5 1.5 0 0 1 0 3z" fill="var(--gold)" />
          </svg>
        </span>
        <p className="text-[var(--navy)] text-xs font-medium truncate">{address}</p>
        <svg className="ml-auto shrink-0 text-slate-400" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>
      </a>
    </div>
  );
}

"use client"

import { Search, X } from "lucide-react";
import { Input } from "../ui/input";
import { Button } from "../ui/button";

interface SearchComponentProps {
   searchOpen: boolean;
   setSearchOpen: (open: boolean) => void;
   searchQuery: string;
   setSearchQuery: (query: string) => void;
}

const SearchComponent = ({ searchOpen, setSearchOpen, searchQuery, setSearchQuery }: SearchComponentProps) => {
  if (!searchOpen) return null;

  return (
    <div className="overflow-hidden glass border-t border-[var(--gold)]/20">
      <div className="container-ooh py-4">
        <div className="flex items-center gap-3 bg-[var(--navy)]/5 border border-[var(--gold)]/20 rounded-sm px-4 py-3">
          <Search size={16} className="text-[var(--gold)]" />
          <Input
            type="text"
            placeholder="Search services, solutions..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="flex-1 bg-transparent text-[var(--navy)] placeholder:text-[var(--navy)]/40 text-sm outline-none"
            autoFocus
          />
          <Button
            onClick={() => setSearchOpen(false)}
            className="text-[var(--navy)]/40 hover:text-[var(--navy)]"
          >
            <X size={14} />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default SearchComponent;

import { MobileMenuTabs } from "@/components/categorySelect";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { FiSearch } from "react-icons/fi";
// business entertainment general health science sports technology

export const menu_content = [
  ["business", "BUSINESS"],
  ["entertainment", "ENTERTAINMENT"],
  ["general", "GENERAL"],
  ["health", "HEALTH"],
  ["science", "SCIENCE"],
  ["sports", "SPORT"],
  ["technology", "TECHNOLOGY"],
];

export const SearchInput = () => {
  return (
    <div className="bg-background/95 z-50 mx-auto max-w-md rounded-lg bg-black shadow-lg backdrop-blur  supports-[backdrop-filter]:bg-black/80">
      <form
        action="/results"
        className="flex items-center rounded-md border border-primary/25 px-4"
      >
        <FiSearch className="text-muted-foreground text-xl" />
        <Input
          placeholder="Search"
          aria-label="Search"
          id="search"
          name="query"
          className="flex h-12 w-full border-none text-lg outline-none outline-0"
        />
      </form>
    </div>
  );
};

export function MainNav({
  className,
  ...props
}: React.HTMLAttributes<HTMLElement>) {
  return (
    <nav className="flex flex-col items-center space-y-4 whitespace-nowrap py-4">
      <div className="flex w-full max-w-4xl items-center justify-between px-4">
        <div className="flex items-center gap-8"></div>
        <SearchInput />
      </div>
      <div>
        <Link href="/" className="h1_logo font-black text-brand">
          NEX MAGAZINE
        </Link>
      </div>
      <div className="flex w-full border-y border-primary p-4 md:hidden">
        <MobileMenuTabs value={menu_content} />
      </div>
      <MenuTabs className={className} {...props} />
    </nav>
  );
}

const MenuTabs = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLElement>) => {
  return (
    <div
      className={cn(
        "hidden w-full items-center justify-center gap-x-4 space-x-4 border-y border-primary py-4 md:flex lg:space-x-6",
        className,
      )}
      {...props}
    >
      <Link
        href="/"
        className="text-muted-foreground whitespace-nowrap text-xs font-bold text-brand transition-colors hover:text-primary"
      >
        ALL NEWS
      </Link>
      {menu_content.map(([opt, label], idx) => (
        <Link
          href={`?category=${opt}`}
          key={idx}
          className="text-xs font-bold uppercase text-brand transition-colors hover:text-primary"
        >
          {label}
        </Link>
      ))}
    </div>
  );
};

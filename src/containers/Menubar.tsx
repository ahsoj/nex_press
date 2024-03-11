import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { FiSearch } from "react-icons/fi";
// business entertainment general health science sports technology

const menu_content = [
  ["business",  "BUSINESS"],
  ["entertainment",  "ENTERTAINMENT"],
  ["general",  "GENERAL"],
  ["health",  "HEALTH"],
  ["science",  "SCIENCE"],
  ["sports",  "SPORT"],
  ["technology",  "TECHNOLOGY"],
]

export const SearchInput = () => {
  return (
    <div className="bg-background/95 backdrop-blur  supports-[backdrop-filter]:bg-background/60">
      <form>
        <div className="relative">
          <FiSearch className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input placeholder="Search" className="pl-8 h-12" />
        </div>
      </form>
    </div>
  )
}

export function MainNav({
  className,
  ...props
}: React.HTMLAttributes<HTMLElement>) {
  return (
    <nav className="flex flex-col items-center space-y-4 whitespace-nowrap py-4">
      <div>
        <h1 className="h1_logo text-brand font-black">
          NEX MAGAZINE
        </h1>
      </div>
      <div className={cn("flex border-y gap-x-4 border-primary py-4 w-full justify-center items-center space-x-4 lg:space-x-6", className)}
      {...props}>
      <Link
        href="/"
        className="text-xs whitespace-nowrap text-brand font-bold text-muted-foreground transition-colors hover:text-primary"
      >
        ALL NEWS
      </Link>
      {menu_content.map(([opt, label], idx) => (
        <Link
        href={`?category=${opt}`}
        key={idx}
        className="text-xs text-brand uppercase font-bold transition-colors hover:text-primary"
      >
        {label}
      </Link>
      ))}
      </div>
    </nav>
  )
}
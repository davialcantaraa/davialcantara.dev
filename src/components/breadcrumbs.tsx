import { ArrowUpLeft } from "lucide-react";
import Link from "next/link";

interface BreadcrumbsProps {
  label: string;
  href: string;
}

export const Breadcrumbs = ({ href, label }: BreadcrumbsProps) => {
  return (
    <aside className="absolute left-0 ml-7 -top-10 lg:top-0 lg:translate-x-[-150%] py-20 w-24 flex justify-start">
      <Link href={href} className="flex items-center leading-tight gap-2 font-serif italic">
        <ArrowUpLeft className="text-muted-foreground" />
        {label}
      </Link>
    </aside>
  );
};

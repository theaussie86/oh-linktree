import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { LinkItem } from "@/lib/types";
import {
  Home,
  Instagram,
  Facebook,
  BookOpen,
  Mail,
  GraduationCap,
  MessageCircle,
  Globe,
  ExternalLink,
} from "lucide-react";

// Map icon names to Lucide components
const iconMap: Record<string, React.ElementType> = {
  home: Home,
  instagram: Instagram,
  facebook: Facebook,
  "book-open": BookOpen,
  mail: Mail,
  "graduation-cap": GraduationCap,
  "message-circle": MessageCircle,
  globe: Globe,
  "external-link": ExternalLink,
};

interface LinkCardProps {
  link: LinkItem;
}

export function LinkCard({ link }: LinkCardProps) {
  const Icon = link.icon ? iconMap[link.icon] : null;
  const isExternal = link.url.startsWith("http");
  const shouldOpenInNewTab = link.openInNewTab ?? isExternal;

  return (
    <Card className="w-full transition-all duration-300 hover:shadow-lg hover:-translate-y-1 hover:bg-brand-bg border-none shadow-md">
      <CardContent className="p-0">
        <Button
          asChild
          variant="ghost"
          className="w-full h-auto p-6 justify-start gap-4 text-left hover:bg-transparent whitespace-normal"
        >
          <Link
            href={link.url}
            target={shouldOpenInNewTab ? "_blank" : undefined}
            rel={shouldOpenInNewTab ? "noopener noreferrer" : undefined}
            className="flex items-center gap-4"
          >
            {Icon && (
              <Icon
                className="size-6 text-brand-purple shrink-0"
                aria-hidden="true"
              />
            )}
            <div className="flex-1 min-w-0">
              <div className="text-lg font-semibold text-brand-navy font-heading wrap-break-word hyphens-auto">
                {link.title}
              </div>
              {link.description && (
                <div className="text-sm text-brand-text mt-1 font-body wrap-break-word hyphens-auto leading-relaxed">
                  {link.description}
                </div>
              )}
            </div>
          </Link>
        </Button>
      </CardContent>
    </Card>
  );
}

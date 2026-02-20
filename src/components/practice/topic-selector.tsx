import { cn } from "@/lib/utils/cn";
import { Badge } from "@/components/ui/badge";
import { MessageCircle } from "lucide-react";

const TOPICS = [
  { id: "perkenalan", label: "Perkenalan Diri", emoji: "👋" },
  { id: "restoran", label: "Di Restoran", emoji: "🍱" },
  { id: "arah", label: "Tanya Arah", emoji: "🗺️" },
  { id: "wawancara", label: "Wawancara Kerja", emoji: "💼" },
  { id: "sehari-hari", label: "Kehidupan Sehari-hari", emoji: "🏠" },
] as const;

interface TopicSelectorProps {
  selectedTopic: string | null;
  onSelectTopic: (topicId: string, topicLabel: string) => void;
}

export function TopicSelector({
  selectedTopic,
  onSelectTopic,
}: TopicSelectorProps) {
  return (
    <div className="space-y-2">
      <div className="flex items-center gap-2 text-sm text-muted-foreground">
        <MessageCircle className="w-4 h-4" />
        <span>Pilih topik percakapan:</span>
      </div>
      <div className="flex flex-wrap gap-2">
        {TOPICS.map((topic) => (
          <Badge
            key={topic.id}
            variant={selectedTopic === topic.id ? "default" : "outline"}
            className={cn(
              "cursor-pointer px-3 py-1.5 text-sm transition-colors hover:bg-primary hover:text-primary-foreground",
              selectedTopic === topic.id &&
                "bg-primary text-primary-foreground"
            )}
            onClick={() => onSelectTopic(topic.id, topic.label)}
          >
            <span className="mr-1.5">{topic.emoji}</span>
            {topic.label}
          </Badge>
        ))}
      </div>
    </div>
  );
}

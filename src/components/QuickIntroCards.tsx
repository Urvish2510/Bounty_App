import { Badge } from "./ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const data = [
  {
    type: "For Newbies",
    vulnerability: "XSS",
    description:
      "Lorem ipsum dolor sit, amet ipsum consectetur adipisicing elit.",
  },
  {
    type: "Level Up",
    vulnerability: "XSS",
    description:
      "Lorem ipsum dolor sit, amet ipsum consectetur adipisicing elit.",
  },
  {
    type: "Level Up",
    vulnerability: "XSS",
    description:
      "Lorem ipsum dolor sit, amet ipsum consectetur adipisicing elit.",
  },
  {
    type: "Level Up",
    vulnerability: "XSS",
    description:
      "Lorem ipsum dolor sit, amet ipsum consectetur adipisicing elit.",
  },
];

export const QuickIntroCards = () => {
  return (
    <div className="flex justify-center lg:flex flex-row flex-wrap gap-8 relative w-[700px] h-[500px]">
      {data.map((item, index) => (
        <Card
          key={index}
          className="w-72 drop-shadow-xl shadow-black/10 dark:shadow-white/10"
        >
          <CardHeader>
            <CardTitle className="flex item-center justify-between">
              Free
              <Badge variant="secondary" className="text-sm text-primary">
                {item.type}
              </Badge>
            </CardTitle>
            <div>
              <span className="text-3xl font-bold">{item.vulnerability}</span>
              {/* <span className="text-muted-foreground"> /month</span> */}
            </div>

            <CardDescription>{item.description}</CardDescription>
          </CardHeader>

          <CardContent>
            <Button className="w-full">Browse Challenge</Button>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

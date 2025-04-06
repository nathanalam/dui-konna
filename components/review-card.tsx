"use client";
import { Star } from "lucide-react";
import Image from "next/image";
import { Card, CardContent } from "./ui/card";
import { useEffect, useRef } from "react";

export const ReviewCard = ({ review }: { review: Review }) => {
  const fbVideoRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Re-initialize Facebook embeds when component mounts
    if (
      fbVideoRef.current &&
      typeof window !== "undefined" &&
      (window as any).FB
    ) {
      (window as any).FB.XFBML.parse(fbVideoRef.current);
    }
  }, []);

  return (
    <Card>
      <CardContent className="p-4">
        <div className="aspect-square w-full overflow-hidden rounded-lg">
          {review.img.includes("https://www.facebook.com") ? (
            <div ref={fbVideoRef}>
              <div
                className="fb-video"
                data-href={review.img}
                data-width="500"
                data-show-text="false"
              ></div>
            </div>
          ) : (
            <Image
              src={review.img}
              alt={`Review by ${review.name}`}
              width={300}
              height={300}
              className="h-full w-full object-cover"
            />
          )}
        </div>
        <div className="mt-4">
          <div className="flex items-center">
            <div className="flex items-center">
              {Array.from({ length: 5 }).map((_, j) => (
                <Star
                  key={j}
                  className={`h-4 w-4 ${
                    j < review.rating
                      ? "fill-primary text-primary"
                      : "fill-muted text-muted-foreground"
                  }`}
                />
              ))}
            </div>
            <span className="ml-2 text-sm text-muted-foreground">
              {review.rating}.0
            </span>
          </div>
          <h3 className="mt-2 font-medium">{review.name}</h3>
          <p className="mt-1 text-sm text-muted-foreground">
            "{review.review}"
          </p>
        </div>
      </CardContent>
    </Card>
  );
};

import { useProducts } from "../hooks/useProducts";
import { Product } from "@/lib/types";
import { Card, CardContent } from "./ui/card";
import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, Loader } from "lucide-react";
import { Button } from "./ui/button";

/**
 * ProductList component to display products fetched from the API
 */
export function ProductList() {
  const { products, loading, error } = useProducts();

  if (loading) {
    return (
      <div className="text-center py-12">
        <Loader className="h-8 w-8 animate-spin mx-auto text-muted-foreground" />
        <p className="mt-4">Loading products...</p>
      </div>
    );
  }

  if (error) {
    return <div className="text-center py-8 text-red-500">Error: {error}</div>;
  }

  if (products.length === 0) {
    return <div className="text-center py-8">No products found.</div>;
  }

  return (
    <div className="mx-auto max-w-5xl py-12">
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {products.map((product, index) => (
          <ProductCard key={index} product={product} />
        ))}
      </div>
    </div>
  );
}

/**
 * ProductCard component to display a single product with image carousel
 */
function ProductCard({ product }: { product: Product }) {
  // Parse comma-separated image URLs
  const imageUrls = product.image
    .split(",")
    .map((url) => url.trim())
    .filter((url) => url.length > 0);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isImageLoading, setIsImageLoading] = useState(true);

  // Reset loading state when image changes
  useEffect(() => {
    setIsImageLoading(true);
  }, [currentImageIndex]);

  // Handle carousel navigation
  const nextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % imageUrls.length);
  };

  const prevImage = () => {
    setCurrentImageIndex(
      (prevIndex) => (prevIndex - 1 + imageUrls.length) % imageUrls.length
    );
  };

  // Add keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") {
        prevImage();
      } else if (e.key === "ArrowRight") {
        nextImage();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  return (
    <Card>
      <CardContent className="p-4">
        <div className="aspect-square w-full overflow-hidden rounded-lg relative">
          {/* Loading indicator */}
          {isImageLoading && (
            <div className="absolute inset-0 flex items-center justify-center bg-muted/20 backdrop-blur-sm z-10">
              <Loader className="h-8 w-8 animate-spin text-muted-foreground" />
            </div>
          )}

          {/* Image carousel */}
          <img
            src={imageUrls[currentImageIndex] || ""}
            alt={`${product.name} - Image ${currentImageIndex + 1}`}
            className="h-full w-full object-cover transition-opacity duration-300"
            style={{ opacity: isImageLoading ? 0.5 : 1 }}
            onLoad={() => setIsImageLoading(false)}
            onError={() => setIsImageLoading(false)}
          />

          {/* Only show navigation controls if there are multiple images */}
          {imageUrls.length > 1 && (
            <>
              {/* Navigation arrows */}
              <div className="absolute inset-0 flex items-center justify-between p-2 z-20">
                <Button
                  variant="outline"
                  size="icon"
                  className="h-8 w-8 rounded-full bg-background/80 backdrop-blur-sm shadow-sm"
                  onClick={prevImage}
                >
                  <ChevronLeft className="h-4 w-4" />
                  <span className="sr-only">Previous image</span>
                </Button>
                <Button
                  variant="outline"
                  size="icon"
                  className="h-8 w-8 rounded-full bg-background/80 backdrop-blur-sm shadow-sm"
                  onClick={nextImage}
                >
                  <ChevronRight className="h-4 w-4" />
                  <span className="sr-only">Next image</span>
                </Button>
              </div>

              {/* Image indicator dots */}
              <div className="absolute bottom-2 left-0 right-0 flex justify-center gap-1.5 z-20">
                {imageUrls.map((_, index) => (
                  <button
                    key={index}
                    className={`h-1.5 w-1.5 rounded-full transition-all ${
                      index === currentImageIndex
                        ? "bg-white w-3"
                        : "bg-white/50 hover:bg-white/80"
                    }`}
                    onClick={() => setCurrentImageIndex(index)}
                    aria-label={`Go to image ${index + 1}`}
                  />
                ))}
              </div>
            </>
          )}
        </div>
        <div className="mt-4">
          <h3 className="font-medium">{product.name}</h3>
          <p className="mt-1 text-sm text-muted-foreground">
            {product.description}
          </p>
          <div className="mt-2 flex justify-between items-center">
            <span className="font-bold">
              ৳ {product.price.toLocaleString()}
            </span>
            <a
              href={product.link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 hover:text-blue-700 text-sm"
            >
              View Details
            </a>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

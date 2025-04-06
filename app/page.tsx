"use client";
import Link from "next/link";
import Image from "next/image";
import { Facebook, Instagram, ShoppingBag, Star, Truck } from "lucide-react";
import { useState } from "react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ReviewCard } from "@/components/review-card";
import { VIDEO_REVIEWS, WRITTEN_REVIEWS } from "@/lib/const";
import { ContactModal } from "@/components/contact-modal";

export default function Home() {
  const [contactModalOpen, setContactModalOpen] = useState(false);

  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container mx-auto flex h-16 items-center justify-between px-4 md:px-6">
          <Link href="/" className="flex items-center gap-2">
            <Image
              src="Logo.png"
              alt="Dui Konna Logo"
              width={40}
              height={40}
              className="rounded-full"
            />
            <span className="text-xl font-bold">Dui Konna</span>
          </Link>
          <nav className="hidden md:flex gap-6">
            <Link
              href="#about"
              className="text-sm font-medium hover:underline underline-offset-4"
            >
              About
            </Link>
            <Link
              href="#products"
              className="text-sm font-medium hover:underline underline-offset-4"
            >
              Products
            </Link>
            <Link
              href="#reviews"
              className="text-sm font-medium hover:underline underline-offset-4"
            >
              Reviews
            </Link>
            <Link
              href="#track"
              className="text-sm font-medium hover:underline underline-offset-4"
            >
              Track Order
            </Link>
          </nav>
          <div className="flex items-center gap-4">
            <Link href="#products">
              <Button variant="outline" size="icon" className="rounded-full">
                <ShoppingBag className="h-4 w-4" />
                <span className="sr-only">Shopping Cart</span>
              </Button>
            </Link>
            <Button
              className="rounded-full"
              size="sm"
              onClick={() => setContactModalOpen(true)}
            >
              Contact Us
            </Button>
          </div>
        </div>
      </header>
      <ContactModal
        open={contactModalOpen}
        onOpenChange={setContactModalOpen}
      />
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 bg-muted/40">
          <div className="container mx-auto px-4 md:px-6">
            <div className="flex flex-col items-center justify-center text-center max-w-3xl mx-auto">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                  Unique Muslin Sarees
                </h1>
                <p className="text-muted-foreground md:text-xl">
                  Experience the timeless elegance of handcrafted Muslin sarees,
                  where tradition meets contemporary design.
                </p>
              </div>
              <div className="flex justify-center my-8">
                <Image
                  src="favicon.png"
                  alt="Dui Konna"
                  width={600}
                  height={600}
                  className="aspect-square object-cover rounded-lg shadow-lg"
                />
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row mt-6">
                <Link href="#products">
                  <Button size="lg">Shop Collection</Button>
                </Link>
                <Link href="#about">
                  <Button size="lg" variant="outline">
                    Learn More
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>

        <section id="about" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container mx-auto px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">
                  About Dui Konna
                </h2>
                <p className="max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  We are passionate about preserving the rich heritage of Muslin
                  sarees while bringing modern designs to our customers.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-2 lg:gap-12">
              <div className="mx-auto aspect-square overflow-hidden rounded-xl object-cover sm:w-full lg:order-last">
                <Image
                  src="facebook-assets/Banner.jpg"
                  alt="About Dui Konna"
                  width={600}
                  height={600}
                  className="aspect-square object-cover"
                />
              </div>
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h3 className="text-2xl font-bold tracking-tighter sm:text-3xl">
                    Our Story
                  </h3>
                  <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                    Dui Konna was founded with a vision to showcase the
                    exquisite craftsmanship of traditional Muslin sarees. Our
                    collection features handpicked pieces that blend traditional
                    techniques with contemporary designs.
                  </p>
                  <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                    We work directly with skilled artisans to ensure the highest
                    quality and to support the continuation of this beautiful
                    art form.
                  </p>
                </div>
                <div className="flex gap-4">
                  <Link
                    href="https:/facebook.com"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button variant="outline" size="icon">
                      <Facebook className="h-4 w-4" />
                      <span className="sr-only">Facebook</span>
                    </Button>
                  </Link>
                  <Link
                    href="https://instagram.com"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button variant="outline" size="icon">
                      <Instagram className="h-4 w-4" />
                      <span className="sr-only">Instagram</span>
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section
          id="products"
          className="w-full py-12 md:py-24 lg:py-32 bg-muted/40"
        >
          <div className="container mx-auto px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">
                  Our Collection
                </h2>
                <p className="max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Explore our unique collection of handcrafted Muslin sarees.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl grid-cols-1 gap-8 py-12 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
              {[
                {
                  img: "facebook-assets/Saree1.jpg",
                  name: "Classic Muslin Saree",
                  price: 2500,
                },
                {
                  img: "facebook-assets/Saree2.jpg",
                  name: "Royal Muslin Saree",
                  price: 3000,
                },
                {
                  img: "facebook-assets/Model1.jpg",
                  name: "Designer Muslin Saree",
                  price: 3500,
                },
                {
                  img: "facebook-assets/Model2.jpg",
                  name: "Traditional Muslin Saree",
                  price: 2800,
                },
                {
                  img: "facebook-assets/Model3.jpg",
                  name: "Modern Muslin Saree",
                  price: 3200,
                },
                {
                  img: "facebook-assets/Model4.jpg",
                  name: "Boutique Muslin Saree",
                  price: 4000,
                },
                {
                  img: "facebook-assets/Model5.jpg",
                  name: "Luxury Muslin Saree",
                  price: 4500,
                },
                {
                  img: "facebook-assets/Model6.jpg",
                  name: "Premium Muslin Saree",
                  price: 3800,
                },
              ].map((item, i) => (
                <Link
                  href="#"
                  key={i}
                  className="group relative overflow-hidden rounded-lg"
                >
                  <div className="aspect-[3/4] w-full overflow-hidden rounded-lg">
                    <Image
                      src={item.img}
                      alt={item.name}
                      width={300}
                      height={400}
                      className="h-full w-full object-cover transition-all duration-300 group-hover:scale-105"
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="font-semibold">{item.name}</h3>
                    <p className="text-sm text-muted-foreground">
                      Handcrafted with Love
                    </p>
                    <div className="mt-2 flex items-center justify-between">
                      <span className="font-medium">৳ {item.price}</span>
                      <Button variant="outline" size="sm">
                        Add to Cart
                      </Button>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
            <div className="flex justify-center">
              <Link href="#">
                <Button size="lg">View All Products</Button>
              </Link>
            </div>
          </div>
        </section>

        <section id="reviews" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container mx-auto px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">
                  Customer Reviews
                </h2>
                <p className="max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  See what our customers are saying about our sarees.
                </p>
              </div>
            </div>

            <Tabs defaultValue="photos" className="mx-auto max-w-5xl py-12">
              <TabsList className="grid w-full grid-cols-2">
                <TabsTrigger value="photos">Photo Reviews</TabsTrigger>
                <TabsTrigger value="videos">Video Reviews</TabsTrigger>
              </TabsList>
              <TabsContent value="photos" className="mt-6">
                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                  {WRITTEN_REVIEWS.map((review, i) => (
                    <ReviewCard key={i} review={review} />
                  ))}
                </div>
              </TabsContent>
              <TabsContent value="videos" className="mt-6">
                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                  {VIDEO_REVIEWS.map((review, i) => (
                    <ReviewCard key={i} review={review} />
                  ))}
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </section>

        <section
          id="track"
          className="w-full py-12 md:py-24 lg:py-32 bg-muted/40"
        >
          <div className="container mx-auto px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">
                  Track Your Order
                </h2>
                <p className="max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Enter your order number to track your shipment.
                </p>
              </div>
            </div>
            <div className="mx-auto max-w-lg py-12">
              <Card>
                <CardContent className="p-6">
                  <form className="grid gap-4">
                    <div className="grid gap-2">
                      <label
                        htmlFor="order-number"
                        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                      >
                        Order Number
                      </label>
                      <Input
                        id="order-number"
                        placeholder="Enter your order number"
                        className="w-full"
                      />
                    </div>
                    <div className="grid gap-2">
                      <label
                        htmlFor="phone"
                        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                      >
                        Phone Number
                      </label>
                      <Input
                        id="phone"
                        placeholder="Enter your phone number"
                        className="w-full"
                      />
                    </div>
                    <Button type="submit" className="w-full">
                      <Truck className="mr-2 h-4 w-4" />
                      Track Order
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>
      <footer className="w-full border-t py-6 md:py-0">
        <div className="container mx-auto flex flex-col items-center justify-between gap-4 px-4 md:h-24 md:flex-row md:px-6">
          <p className="text-center text-sm leading-loose text-muted-foreground md:text-left">
            © 2025 Dui Konna. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <Link
              href="#"
              className="text-sm font-medium hover:underline underline-offset-4"
            >
              Terms of Service
            </Link>
            <Link
              href="#"
              className="text-sm font-medium hover:underline underline-offset-4"
            >
              Privacy Policy
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
}

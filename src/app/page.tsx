import { Icons } from "@/components/Icons";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import Phone from "@/components/Phone";
import Reviews from "@/components/Reviews";
import { buttonVariants } from "@/components/ui/button";
import { ArrowRight, Check, Star, StarHalf } from "lucide-react";
import Link from "next/link";

export default function Home() {
  return (
    <div className="bg-slate-50">
      <section>
        <MaxWidthWrapper className="pb-24 pt-10 sm:pb-32 lg:grid lg:grid-cols-3 lg:gap-x-0 lg:pb-52 lg:pt-24 xl:gap-x-8 xl:pt-32">
          <div className="col-span-2 px-6 lg:px-0 lg:pt-4">
            <div className="relative mx-auto flex flex-col items-center text-center lg:items-start lg:text-left">
              <div className="absolute -top-28 left-0 hidden w-28 lg:block">
                <img src="/snake-1.png" className="w-full" alt="" />
              </div>
              <h1 className="relative mt-16 w-fit text-balance text-5xl font-bold !leading-tight tracking-tighter text-gray-900 md:text-6xl lg:text-7xl">
                Your Image on a{" "}
                <span className="bg-violet-600 px-2 text-white">Custom</span>{" "}
                Phone Case
              </h1>
              <p className="mt-8 max-w-prose text-balance text-center text-lg md:text-wrap lg:pr-10 lg:text-left">
                Capture your favorite memories with your own,{" "}
                <span className="font-semibold">One-of-One</span> phone case.
                SnapStyle not only provides your phone with style but also
                offers protection.
              </p>

              <ul className="mt-8 flex flex-col items-center space-y-2 text-left font-medium sm:items-start">
                <div className="space-y-2">
                  <li className="flex items-center gap-1.5 text-left">
                    <Check className="h-5 w-5 shrink-0 text-green-600" />
                    High Quality, Durable Material
                  </li>
                  <li className="flex items-center gap-1.5 text-left">
                    <Check className="h-5 w-5 shrink-0 text-green-600" />
                    3+ Years Print Guarantee
                  </li>
                  <li className="flex items-center gap-1.5 text-left">
                    <Check className="h-5 w-5 shrink-0 text-green-600" />
                    Modern IPhone Models Supported
                  </li>
                  <li className="flex items-center gap-1.5 text-left">
                    <Check className="h-5 w-5 shrink-0 text-green-600" />
                    Eco-Friendly Packaging
                  </li>
                </div>
              </ul>
              <div className="mt-12 flex flex-col items-center gap-5 sm:flex-row sm:items-start">
                <div className="flex -space-x-4">
                  <img
                    className="inline-block h-10 w-10 rounded-full ring-2 ring-slate-100"
                    src="/users/user-1.png"
                    alt="user image"
                  />
                  <img
                    className="inline-block h-10 w-10 rounded-full ring-2 ring-slate-100"
                    src="/users/user-2.png"
                    alt="user image"
                  />
                  <img
                    className="inline-block h-10 w-10 rounded-full ring-2 ring-slate-100"
                    src="/users/user-3.png"
                    alt="user image"
                  />
                  <img
                    className="inline-block h-10 w-10 rounded-full ring-2 ring-slate-100"
                    src="/users/user-4.jpg"
                    alt="user image"
                  />
                  <img
                    className="inline-block h-10 w-10 rounded-full object-cover ring-2 ring-slate-100"
                    src="/users/user-5.jpg"
                    alt="user image"
                  />
                </div>
                <div className="flex flex-col items-center justify-center sm:items-start">
                  <div className="flex gap-0.5">
                    <Star className="h-4 w-4 fill-yellow-500 text-yellow-600" />
                    <Star className="h-4 w-4 fill-yellow-500 text-yellow-600" />
                    <Star className="h-4 w-4 fill-yellow-500 text-yellow-600" />
                    <Star className="h-4 w-4 fill-yellow-500 text-yellow-600" />
                    <StarHalf className="h-4 w-4 fill-yellow-500 text-yellow-600" />
                  </div>
                  <p>
                    <span className="font-semibold">1.250+</span>Happy Costumers
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-span-full mt-32 h-fit w-full justify-center px-8 sm:px-16 md:px-0 lg:col-span-1 lg:mx-0 lg:mt-20">
            <div className="relative md:max-w-xl">
              <img
                className="absolute -top-20 left-56 hidden w-40 select-none sm:block lg:hidden lg:w-52 xl:block"
                src="/your-image.png"
                alt=""
              />
              <img
                src="/line.png"
                alt=""
                className="absolute -bottom-6 -left-6 w-20 select-none"
              />
              <Phone className="w-64" imgSrc="/testimonials/1.jpg" />
            </div>
          </div>
        </MaxWidthWrapper>
      </section>

      <section className="bg-slate-50 py-24">
        <MaxWidthWrapper className="flex flex-col items-center gap-16 sm:gap-32">
          <div className="flex flex-col items-center gap-4 sm:gap-6 lg:flex-row">
            <h2 className="order-1 mt-2 text-balance text-center text-5xl font-bold !leading-tight tracking-tight text-gray-900 md:text-6xl">
              what Our{" "}
              <span className="relative px-2">
                Customer{" "}
                <Icons.underline className="pointer-events-none absolute inset-x-0 -bottom-6 hidden text-violet-500 sm:block" />{" "}
              </span>{" "}
              Say
            </h2>
            <img
              src="/snake-2.png"
              className="order-0 w-24 lg:order-2"
              alt=""
            />
          </div>

          <div className="mx-auto grid max-w-2xl grid-cols-1 gap-y-16 px-4 lg:mx-0 lg:max-w-none lg:grid-cols-2">
            <div className="flex flex-auto flex-col gap-4 lg:pr-8 xl:pr-20">
              <div className="mb-2 flex gap-0.5">
                <Star className="h-5 w-5 fill-yellow-500 text-yellow-600" />
                <Star className="h-5 w-5 fill-yellow-500 text-yellow-600" />
                <Star className="h-5 w-5 fill-yellow-500 text-yellow-600" />
                <Star className="h-5 w-5 fill-yellow-500 text-yellow-600" />
                <Star className="h-5 w-5 fill-yellow-500 text-yellow-600" />
              </div>
              <div className="text-lg leading-8">
                <p>
                  &quot;Absolutely love this case! The material is so
                  high-quality and the print is vibrant. It's been six months
                  and{" "}
                  <span className="bg-slate-800 p-0.5 text-white">
                    it still looks brand new&apos;
                  </span>
                  . Highly recommend it!&quot;
                </p>
                <div className="mt-2 flex gap-4">
                  <img
                    className="h-12 w-12 rounded-full object-cover"
                    src="/users/user-2.png"
                    alt="user"
                  />
                  <div className="flex flex-col">
                    <p className="font-semibold">Anjali Singh</p>
                    <div className="flex items-center gap-1.5 text-zinc-600">
                      <Check className="h-4 w-4 stroke-[3px] text-green-600" />
                      <p className="text-sm">Verified Purchase</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-auto flex-col gap-4 lg:pr-8 xl:pr-20">
              <div className="mb-2 flex gap-0.5">
                <Star className="h-5 w-5 fill-yellow-500 text-yellow-600" />
                <Star className="h-5 w-5 fill-yellow-500 text-yellow-600" />
                <Star className="h-5 w-5 fill-yellow-500 text-yellow-600" />
                <Star className="h-5 w-5 fill-yellow-500 text-yellow-600" />
                <StarHalf className="h-5 w-5 fill-yellow-500 text-yellow-600" />
              </div>
              <div className="text-lg leading-8">
                <p>
                  &quot;Great case! It fits my phone perfectly and the design is
                  exactly what I wanted. After four months of use,{" "}
                  <span className="bg-slate-800 p-0.5 text-white">
                    the colors haven't faded at all
                  </span>
                  . Will definitely buy again.&quot;
                </p>
                <div className="mt-2 flex gap-4">
                  <img
                    className="h-12 w-12 rounded-full object-cover"
                    src="/users/user-1.png"
                    alt="user"
                  />
                  <div className="flex flex-col">
                    <p className="font-semibold">Rohan Sharma</p>
                    <div className="flex items-center gap-1.5 text-zinc-600">
                      <Check className="h-4 w-4 stroke-[3px] text-green-600" />
                      <p className="text-sm">Verified Purchase</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </MaxWidthWrapper>

        <div className="pt-16">
          <Reviews />
        </div>

        <section>
          <MaxWidthWrapper className="py-24">
            <div className="mb-12 px-6 lg:px-8">
              <div className="mx-auto max-w-2xl sm:text-center">
                <h2 className="order-1 mt-2 text-balance text-center text-5xl font-bold !leading-tight tracking-tight text-gray-900 md:text-6xl">
                  Upload Your Photo And Get{" "}
                  <span className="relative bg-violet-600 px-2 text-white">
                    Your Oun Case
                  </span>{" "}
                  Now
                </h2>
              </div>
            </div>

            <div className="mx-auto max-w-6xl px-6 lg:px-8">
              <div className="relative flex grid-cols-2 flex-col items-center gap-40 md:grid">
                <img
                  src="/arrow.png"
                  alt="arrow"
                  className="absolute left-1/2 top-[25rem] z-10 -translate-x-1/2 -translate-y-1/2 rotate-90 md:top-1/2 md:rotate-0"
                />
                <div className="relative h-80 w-full max-w-sm rounded-lg bg-gray-900/5 ring-inset ring-gray-900/10 md:h-full md:justify-self-end lg:rounded-2xl">
                  <img
                    src="/horse.jpg"
                    alt="horse"
                    className="bg-w h-full w-full rounded-md object-cover shadow-2xl ring-1 ring-gray-900/10"
                  />
                </div>
                <Phone className="w-60" imgSrc="/horse_phone.jpg" />
              </div>
            </div>
            <ul className="mx-auto mt-12 w-fit max-w-prose space-y-2 sm:text-lg">
              <li className="w-fit">
                <Check className="mr-1.5 inline h-5 w-5 text-green-600" />
                High Quality Silicon Material
              </li>
              <li className="w-fit">
                <Check className="mr-1.5 inline h-5 w-5 text-green-600" />
                Precision Cutouts for Easy Access
              </li>
              <li className="w-fit">
                <Check className="mr-1.5 inline h-5 w-5 text-green-600" />
                Lightweight and Slim Design
              </li>
              <li className="w-fit">
                <Check className="mr-1.5 inline h-5 w-5 text-green-600" />
                Scratch-Resistant Surface
              </li>
              <li className="w-fit">
                <Check className="mr-1.5 inline h-5 w-5 text-green-600" />
                Shock Absorption Technology
              </li>

              <div className="flex justify-center">
                <Link href="/configure/upload" className={buttonVariants({
                  size: "lg",
                  className:"mx-auto mt-8"
                })}>Create You Case Now!! <ArrowRight className="h-4 w-4 ml-1.5" /></Link>
              </div>
            </ul>
          </MaxWidthWrapper>
        </section>
      </section>
    </div>
  );
}

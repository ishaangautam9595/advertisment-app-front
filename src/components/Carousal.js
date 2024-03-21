import React from 'react'

const Carousal = () => {
  return (
    <>
    <div className=" w-full overflow-x-auto pb-6 pt-1">
    <ul className="flex animate-carousel gap-4">
        <li className="relative aspect-square h-[30vh] max-h-[275px] w-2/3 max-w-[475px] flex-none md:w-1/3"><a
                className="relative h-full w-full" href="/product/acme-mug">
                <div
                    className="flex h-full w-full items-center justify-center overflow-hidden rounded-lg border bg-white hover:border-blue-600 dark:bg-black relative border-neutral-200 dark:border-neutral-800">
                    <img alt="Acme Mug" loading="lazy" decoding="async" data-nimg="fill"
                        className="relative h-full w-full object-contain transition duration-300 ease-in-out hover:scale-105"
                        style={{position:"absolute", height:"100%", width:"100%", left:0, top:0, right:0, bottom:0, color:"transparent"}}
                        sizes="(min-width: 1024px) 25vw, (min-width: 768px) 33vw, 50vw"
                        srcset="/cloth.jpeg"
                        src="/cloth.jpeg" />
                    <div className="absolute bottom-0 left-0 flex w-full px-4 pb-4 @container/label">
                        <div
                            className="flex items-center rounded-full border bg-white/70 p-1 text-[10px] font-semibold text-black backdrop-blur-md @[275px]/label:text-xs dark:border-neutral-800 dark:bg-black/70 dark:text-white">
                            <h3 className="mr-4 inline pl-2 leading-none tracking-tight">Acme Mug</h3>
                            <p className="flex-none rounded-full bg-blue-600 p-2 text-white">$15.00<span
                                    className="ml-1 inline hidden @[275px]/label:inline">USD</span></p>
                        </div>
                    </div>
                </div>
            </a></li>
        <li className="relative aspect-square h-[30vh] max-h-[275px] w-2/3 max-w-[475px] flex-none md:w-1/3"><a
                className="relative h-full w-full" href="/product/acme-hoodie">
                <div
                    className="flex h-full w-full items-center justify-center overflow-hidden rounded-lg border bg-white hover:border-blue-600 dark:bg-black relative border-neutral-200 dark:border-neutral-800">
                    <img alt="Acme Hoodie" loading="lazy" decoding="async" data-nimg="fill"
                        className="relative h-full w-full object-contain transition duration-300 ease-in-out hover:scale-105"
                        style={{position:"absolute", height:"100%", width:"100%",left:"0",top:0,right:0,bottom:0,color:"transparent"}}
                        sizes="(min-width: 1024px) 25vw, (min-width: 768px) 33vw, 50vw"
                        srcset="/_next/image?url=https%3A%2F%2Fcdn.shopify.com%2Fs%2Ffiles%2F1%2F0754%2F3727%2F7491%2Ffiles%2Fhoodie-1.png%3Fv%3D1690003482&amp;w=256&amp;q=75 256w, /_next/image?url=https%3A%2F%2Fcdn.shopify.com%2Fs%2Ffiles%2F1%2F0754%2F3727%2F7491%2Ffiles%2Fhoodie-1.png%3Fv%3D1690003482&amp;w=384&amp;q=75 384w, /_next/image?url=https%3A%2F%2Fcdn.shopify.com%2Fs%2Ffiles%2F1%2F0754%2F3727%2F7491%2Ffiles%2Fhoodie-1.png%3Fv%3D1690003482&amp;w=640&amp;q=75 640w, /_next/image?url=https%3A%2F%2Fcdn.shopify.com%2Fs%2Ffiles%2F1%2F0754%2F3727%2F7491%2Ffiles%2Fhoodie-1.png%3Fv%3D1690003482&amp;w=750&amp;q=75 750w, /_next/image?url=https%3A%2F%2Fcdn.shopify.com%2Fs%2Ffiles%2F1%2F0754%2F3727%2F7491%2Ffiles%2Fhoodie-1.png%3Fv%3D1690003482&amp;w=828&amp;q=75 828w, /_next/image?url=https%3A%2F%2Fcdn.shopify.com%2Fs%2Ffiles%2F1%2F0754%2F3727%2F7491%2Ffiles%2Fhoodie-1.png%3Fv%3D1690003482&amp;w=1080&amp;q=75 1080w, /_next/image?url=https%3A%2F%2Fcdn.shopify.com%2Fs%2Ffiles%2F1%2F0754%2F3727%2F7491%2Ffiles%2Fhoodie-1.png%3Fv%3D1690003482&amp;w=1200&amp;q=75 1200w, /_next/image?url=https%3A%2F%2Fcdn.shopify.com%2Fs%2Ffiles%2F1%2F0754%2F3727%2F7491%2Ffiles%2Fhoodie-1.png%3Fv%3D1690003482&amp;w=1920&amp;q=75 1920w, /_next/image?url=https%3A%2F%2Fcdn.shopify.com%2Fs%2Ffiles%2F1%2F0754%2F3727%2F7491%2Ffiles%2Fhoodie-1.png%3Fv%3D1690003482&amp;w=2048&amp;q=75 2048w, /_next/image?url=https%3A%2F%2Fcdn.shopify.com%2Fs%2Ffiles%2F1%2F0754%2F3727%2F7491%2Ffiles%2Fhoodie-1.png%3Fv%3D1690003482&amp;w=3840&amp;q=75 3840w"
                        src="/_next/image?url=https%3A%2F%2Fcdn.shopify.com%2Fs%2Ffiles%2F1%2F0754%2F3727%2F7491%2Ffiles%2Fhoodie-1.png%3Fv%3D1690003482&amp;w=3840&amp;q=75" />
                    <div className="absolute bottom-0 left-0 flex w-full px-4 pb-4 @container/label">
                        <div
                            className="flex items-center rounded-full border bg-white/70 p-1 text-[10px] font-semibold text-black backdrop-blur-md @[275px]/label:text-xs dark:border-neutral-800 dark:bg-black/70 dark:text-white">
                            <h3 className="mr-4 inline pl-2 leading-none tracking-tight">Acme Hoodie</h3>
                            <p className="flex-none rounded-full bg-blue-600 p-2 text-white">$50.00<span
                                    className="ml-1 inline hidden @[275px]/label:inline">USD</span></p>
                        </div>
                    </div>
                </div>
            </a></li>
        <li className="relative aspect-square h-[30vh] max-h-[275px] w-2/3 max-w-[475px] flex-none md:w-1/3"><a
                className="relative h-full w-full" href="/product/acme-baby-onesie">
                <div
                    className="flex h-full w-full items-center justify-center overflow-hidden rounded-lg border bg-white hover:border-blue-600 dark:bg-black relative border-neutral-200 dark:border-neutral-800">
                    <img alt="Acme Baby Onesie" loading="lazy" decoding="async" data-nimg="fill"
                        className="relative h-full w-full object-contain transition duration-300 ease-in-out hover:scale-105"
                        style={{position:"absolute", height:"100%", width:"100%", left:0, top:0, right:0, bottom:0, color:"transparent"}}
                        sizes="(min-width: 1024px) 25vw, (min-width: 768px) 33vw, 50vw"
                        srcset="/_next/image?url=https%3A%2F%2Fcdn.shopify.com%2Fs%2Ffiles%2F1%2F0754%2F3727%2F7491%2Ffiles%2Fbaby-onesie-beige-1.png%3Fv%3D1690002632&amp;w=256&amp;q=75 256w, /_next/image?url=https%3A%2F%2Fcdn.shopify.com%2Fs%2Ffiles%2F1%2F0754%2F3727%2F7491%2Ffiles%2Fbaby-onesie-beige-1.png%3Fv%3D1690002632&amp;w=384&amp;q=75 384w, /_next/image?url=https%3A%2F%2Fcdn.shopify.com%2Fs%2Ffiles%2F1%2F0754%2F3727%2F7491%2Ffiles%2Fbaby-onesie-beige-1.png%3Fv%3D1690002632&amp;w=640&amp;q=75 640w, /_next/image?url=https%3A%2F%2Fcdn.shopify.com%2Fs%2Ffiles%2F1%2F0754%2F3727%2F7491%2Ffiles%2Fbaby-onesie-beige-1.png%3Fv%3D1690002632&amp;w=750&amp;q=75 750w, /_next/image?url=https%3A%2F%2Fcdn.shopify.com%2Fs%2Ffiles%2F1%2F0754%2F3727%2F7491%2Ffiles%2Fbaby-onesie-beige-1.png%3Fv%3D1690002632&amp;w=828&amp;q=75 828w, /_next/image?url=https%3A%2F%2Fcdn.shopify.com%2Fs%2Ffiles%2F1%2F0754%2F3727%2F7491%2Ffiles%2Fbaby-onesie-beige-1.png%3Fv%3D1690002632&amp;w=1080&amp;q=75 1080w, /_next/image?url=https%3A%2F%2Fcdn.shopify.com%2Fs%2Ffiles%2F1%2F0754%2F3727%2F7491%2Ffiles%2Fbaby-onesie-beige-1.png%3Fv%3D1690002632&amp;w=1200&amp;q=75 1200w, /_next/image?url=https%3A%2F%2Fcdn.shopify.com%2Fs%2Ffiles%2F1%2F0754%2F3727%2F7491%2Ffiles%2Fbaby-onesie-beige-1.png%3Fv%3D1690002632&amp;w=1920&amp;q=75 1920w, /_next/image?url=https%3A%2F%2Fcdn.shopify.com%2Fs%2Ffiles%2F1%2F0754%2F3727%2F7491%2Ffiles%2Fbaby-onesie-beige-1.png%3Fv%3D1690002632&amp;w=2048&amp;q=75 2048w, /_next/image?url=https%3A%2F%2Fcdn.shopify.com%2Fs%2Ffiles%2F1%2F0754%2F3727%2F7491%2Ffiles%2Fbaby-onesie-beige-1.png%3Fv%3D1690002632&amp;w=3840&amp;q=75 3840w"
                        src="/_next/image?url=https%3A%2F%2Fcdn.shopify.com%2Fs%2Ffiles%2F1%2F0754%2F3727%2F7491%2Ffiles%2Fbaby-onesie-beige-1.png%3Fv%3D1690002632&amp;w=3840&amp;q=75" />
                    <div className="absolute bottom-0 left-0 flex w-full px-4 pb-4 @container/label">
                        <div
                            className="flex items-center rounded-full border bg-white/70 p-1 text-[10px] font-semibold text-black backdrop-blur-md @[275px]/label:text-xs dark:border-neutral-800 dark:bg-black/70 dark:text-white">
                            <h3 className="mr-4 inline pl-2 leading-none tracking-tight">Acme Baby Onesie</h3>
                            <p className="flex-none rounded-full bg-blue-600 p-2 text-white">$10.00<span
                                    className="ml-1 inline hidden @[275px]/label:inline">USD</span></p>
                        </div>
                    </div>
                </div>
            </a></li>
        <li className="relative aspect-square h-[30vh] max-h-[275px] w-2/3 max-w-[475px] flex-none md:w-1/3"><a
                className="relative h-full w-full" href="/product/acme-baby-cap">
                <div
                    className="flex h-full w-full items-center justify-center overflow-hidden rounded-lg border bg-white hover:border-blue-600 dark:bg-black relative border-neutral-200 dark:border-neutral-800">
                    <img alt="Acme Baby Cap" loading="lazy" decoding="async" data-nimg="fill"
                        className="relative h-full w-full object-contain transition duration-300 ease-in-out hover:scale-105"
                        style={{position:"absolute", height:"100%", width:"100%", left:0, top:0, right:0, bottom:0, color:"transparent"}}
                        sizes="(min-width: 1024px) 25vw, (min-width: 768px) 33vw, 50vw"
                        srcset="/_next/image?url=https%3A%2F%2Fcdn.shopify.com%2Fs%2Ffiles%2F1%2F0754%2F3727%2F7491%2Ffiles%2Fbaby-cap-black.png%3Fv%3D1690002570&amp;w=256&amp;q=75 256w, /_next/image?url=https%3A%2F%2Fcdn.shopify.com%2Fs%2Ffiles%2F1%2F0754%2F3727%2F7491%2Ffiles%2Fbaby-cap-black.png%3Fv%3D1690002570&amp;w=384&amp;q=75 384w, /_next/image?url=https%3A%2F%2Fcdn.shopify.com%2Fs%2Ffiles%2F1%2F0754%2F3727%2F7491%2Ffiles%2Fbaby-cap-black.png%3Fv%3D1690002570&amp;w=640&amp;q=75 640w, /_next/image?url=https%3A%2F%2Fcdn.shopify.com%2Fs%2Ffiles%2F1%2F0754%2F3727%2F7491%2Ffiles%2Fbaby-cap-black.png%3Fv%3D1690002570&amp;w=750&amp;q=75 750w, /_next/image?url=https%3A%2F%2Fcdn.shopify.com%2Fs%2Ffiles%2F1%2F0754%2F3727%2F7491%2Ffiles%2Fbaby-cap-black.png%3Fv%3D1690002570&amp;w=828&amp;q=75 828w, /_next/image?url=https%3A%2F%2Fcdn.shopify.com%2Fs%2Ffiles%2F1%2F0754%2F3727%2F7491%2Ffiles%2Fbaby-cap-black.png%3Fv%3D1690002570&amp;w=1080&amp;q=75 1080w, /_next/image?url=https%3A%2F%2Fcdn.shopify.com%2Fs%2Ffiles%2F1%2F0754%2F3727%2F7491%2Ffiles%2Fbaby-cap-black.png%3Fv%3D1690002570&amp;w=1200&amp;q=75 1200w, /_next/image?url=https%3A%2F%2Fcdn.shopify.com%2Fs%2Ffiles%2F1%2F0754%2F3727%2F7491%2Ffiles%2Fbaby-cap-black.png%3Fv%3D1690002570&amp;w=1920&amp;q=75 1920w, /_next/image?url=https%3A%2F%2Fcdn.shopify.com%2Fs%2Ffiles%2F1%2F0754%2F3727%2F7491%2Ffiles%2Fbaby-cap-black.png%3Fv%3D1690002570&amp;w=2048&amp;q=75 2048w, /_next/image?url=https%3A%2F%2Fcdn.shopify.com%2Fs%2Ffiles%2F1%2F0754%2F3727%2F7491%2Ffiles%2Fbaby-cap-black.png%3Fv%3D1690002570&amp;w=3840&amp;q=75 3840w"
                        src="/_next/image?url=https%3A%2F%2Fcdn.shopify.com%2Fs%2Ffiles%2F1%2F0754%2F3727%2F7491%2Ffiles%2Fbaby-cap-black.png%3Fv%3D1690002570&amp;w=3840&amp;q=75" />
                    <div className="absolute bottom-0 left-0 flex w-full px-4 pb-4 @container/label">
                        <div
                            className="flex items-center rounded-full border bg-white/70 p-1 text-[10px] font-semibold text-black backdrop-blur-md @[275px]/label:text-xs dark:border-neutral-800 dark:bg-black/70 dark:text-white">
                            <h3 className="mr-4 inline pl-2 leading-none tracking-tight">Acme Baby Cap</h3>
                            <p className="flex-none rounded-full bg-blue-600 p-2 text-white">$10.00<span
                                    className="ml-1 inline hidden @[275px]/label:inline">USD</span></p>
                        </div>
                    </div>
                </div>
            </a></li>
        <li className="relative aspect-square h-[30vh] max-h-[275px] w-2/3 max-w-[475px] flex-none md:w-1/3"><a
                className="relative h-full w-full" href="/product/acme-mug">
                <div
                    className="flex h-full w-full items-center justify-center overflow-hidden rounded-lg border bg-white hover:border-blue-600 dark:bg-black relative border-neutral-200 dark:border-neutral-800">
                    <img alt="Acme Mug" loading="lazy" decoding="async" data-nimg="fill"
                        className="relative h-full w-full object-contain transition duration-300 ease-in-out hover:scale-105"
                        style={{position:"absolute", height:"100%", width:"100%", left:0, top:0, right:0, bottom:0, color:"transparent"}}
                        sizes="(min-width: 1024px) 25vw, (min-width: 768px) 33vw, 50vw"
                        srcset="/_next/image?url=https%3A%2F%2Fcdn.shopify.com%2Fs%2Ffiles%2F1%2F0754%2F3727%2F7491%2Ffiles%2Fmug-1.png%3Fv%3D1690003527&amp;w=256&amp;q=75 256w, /_next/image?url=https%3A%2F%2Fcdn.shopify.com%2Fs%2Ffiles%2F1%2F0754%2F3727%2F7491%2Ffiles%2Fmug-1.png%3Fv%3D1690003527&amp;w=384&amp;q=75 384w, /_next/image?url=https%3A%2F%2Fcdn.shopify.com%2Fs%2Ffiles%2F1%2F0754%2F3727%2F7491%2Ffiles%2Fmug-1.png%3Fv%3D1690003527&amp;w=640&amp;q=75 640w, /_next/image?url=https%3A%2F%2Fcdn.shopify.com%2Fs%2Ffiles%2F1%2F0754%2F3727%2F7491%2Ffiles%2Fmug-1.png%3Fv%3D1690003527&amp;w=750&amp;q=75 750w, /_next/image?url=https%3A%2F%2Fcdn.shopify.com%2Fs%2Ffiles%2F1%2F0754%2F3727%2F7491%2Ffiles%2Fmug-1.png%3Fv%3D1690003527&amp;w=828&amp;q=75 828w, /_next/image?url=https%3A%2F%2Fcdn.shopify.com%2Fs%2Ffiles%2F1%2F0754%2F3727%2F7491%2Ffiles%2Fmug-1.png%3Fv%3D1690003527&amp;w=1080&amp;q=75 1080w, /_next/image?url=https%3A%2F%2Fcdn.shopify.com%2Fs%2Ffiles%2F1%2F0754%2F3727%2F7491%2Ffiles%2Fmug-1.png%3Fv%3D1690003527&amp;w=1200&amp;q=75 1200w, /_next/image?url=https%3A%2F%2Fcdn.shopify.com%2Fs%2Ffiles%2F1%2F0754%2F3727%2F7491%2Ffiles%2Fmug-1.png%3Fv%3D1690003527&amp;w=1920&amp;q=75 1920w, /_next/image?url=https%3A%2F%2Fcdn.shopify.com%2Fs%2Ffiles%2F1%2F0754%2F3727%2F7491%2Ffiles%2Fmug-1.png%3Fv%3D1690003527&amp;w=2048&amp;q=75 2048w, /_next/image?url=https%3A%2F%2Fcdn.shopify.com%2Fs%2Ffiles%2F1%2F0754%2F3727%2F7491%2Ffiles%2Fmug-1.png%3Fv%3D1690003527&amp;w=3840&amp;q=75 3840w"
                        src="/_next/image?url=https%3A%2F%2Fcdn.shopify.com%2Fs%2Ffiles%2F1%2F0754%2F3727%2F7491%2Ffiles%2Fmug-1.png%3Fv%3D1690003527&amp;w=3840&amp;q=75" />
                    <div className="absolute bottom-0 left-0 flex w-full px-4 pb-4 @container/label">
                        <div
                            className="flex items-center rounded-full border bg-white/70 p-1 text-[10px] font-semibold text-black backdrop-blur-md @[275px]/label:text-xs dark:border-neutral-800 dark:bg-black/70 dark:text-white">
                            <h3 className="mr-4 inline pl-2 leading-none tracking-tight">Acme Mug</h3>
                            <p className="flex-none rounded-full bg-blue-600 p-2 text-white">$15.00<span
                                    className="ml-1 inline hidden @[275px]/label:inline">USD</span></p>
                        </div>
                    </div>
                </div>
            </a></li>
      
        <li className="relative aspect-square h-[30vh] max-h-[275px] w-2/3 max-w-[475px] flex-none md:w-1/3"><a
                className="relative h-full w-full" href="/product/acme-baby-onesie">
                <div
                    className="flex h-full w-full items-center justify-center overflow-hidden rounded-lg border bg-white hover:border-blue-600 dark:bg-black relative border-neutral-200 dark:border-neutral-800">
                    <img alt="Acme Baby Onesie" loading="lazy" decoding="async" data-nimg="fill"
                        className="relative h-full w-full object-contain transition duration-300 ease-in-out hover:scale-105"
                        style={{position:"absolute", height:"100%", width:"100%", left:0 ,top:0, right:0, bottom:0, color:"transparent"}}
                        sizes="(min-width: 1024px) 25vw, (min-width: 768px) 33vw, 50vw"
                        srcset="/_next/image?url=https%3A%2F%2Fcdn.shopify.com%2Fs%2Ffiles%2F1%2F0754%2F3727%2F7491%2Ffiles%2Fbaby-onesie-beige-1.png%3Fv%3D1690002632&amp;w=256&amp;q=75 256w, /_next/image?url=https%3A%2F%2Fcdn.shopify.com%2Fs%2Ffiles%2F1%2F0754%2F3727%2F7491%2Ffiles%2Fbaby-onesie-beige-1.png%3Fv%3D1690002632&amp;w=384&amp;q=75 384w, /_next/image?url=https%3A%2F%2Fcdn.shopify.com%2Fs%2Ffiles%2F1%2F0754%2F3727%2F7491%2Ffiles%2Fbaby-onesie-beige-1.png%3Fv%3D1690002632&amp;w=640&amp;q=75 640w, /_next/image?url=https%3A%2F%2Fcdn.shopify.com%2Fs%2Ffiles%2F1%2F0754%2F3727%2F7491%2Ffiles%2Fbaby-onesie-beige-1.png%3Fv%3D1690002632&amp;w=750&amp;q=75 750w, /_next/image?url=https%3A%2F%2Fcdn.shopify.com%2Fs%2Ffiles%2F1%2F0754%2F3727%2F7491%2Ffiles%2Fbaby-onesie-beige-1.png%3Fv%3D1690002632&amp;w=828&amp;q=75 828w, /_next/image?url=https%3A%2F%2Fcdn.shopify.com%2Fs%2Ffiles%2F1%2F0754%2F3727%2F7491%2Ffiles%2Fbaby-onesie-beige-1.png%3Fv%3D1690002632&amp;w=1080&amp;q=75 1080w, /_next/image?url=https%3A%2F%2Fcdn.shopify.com%2Fs%2Ffiles%2F1%2F0754%2F3727%2F7491%2Ffiles%2Fbaby-onesie-beige-1.png%3Fv%3D1690002632&amp;w=1200&amp;q=75 1200w, /_next/image?url=https%3A%2F%2Fcdn.shopify.com%2Fs%2Ffiles%2F1%2F0754%2F3727%2F7491%2Ffiles%2Fbaby-onesie-beige-1.png%3Fv%3D1690002632&amp;w=1920&amp;q=75 1920w, /_next/image?url=https%3A%2F%2Fcdn.shopify.com%2Fs%2Ffiles%2F1%2F0754%2F3727%2F7491%2Ffiles%2Fbaby-onesie-beige-1.png%3Fv%3D1690002632&amp;w=2048&amp;q=75 2048w, /_next/image?url=https%3A%2F%2Fcdn.shopify.com%2Fs%2Ffiles%2F1%2F0754%2F3727%2F7491%2Ffiles%2Fbaby-onesie-beige-1.png%3Fv%3D1690002632&amp;w=3840&amp;q=75 3840w"
                        src="/_next/image?url=https%3A%2F%2Fcdn.shopify.com%2Fs%2Ffiles%2F1%2F0754%2F3727%2F7491%2Ffiles%2Fbaby-onesie-beige-1.png%3Fv%3D1690002632&amp;w=3840&amp;q=75" />
                    <div className="absolute bottom-0 left-0 flex w-full px-4 pb-4 @container/label">
                        <div
                            className="flex items-center rounded-full border bg-white/70 p-1 text-[10px] font-semibold text-black backdrop-blur-md @[275px]/label:text-xs dark:border-neutral-800 dark:bg-black/70 dark:text-white">
                            <h3 className="mr-4 inline pl-2 leading-none tracking-tight">Acme Baby Onesie</h3>
                            <p className="flex-none rounded-full bg-blue-600 p-2 text-white">$10.00<span
                                    className="ml-1 inline hidden @[275px]/label:inline">USD</span></p>
                        </div>
                    </div>
                </div>
            </a></li>
        <li className="relative aspect-square h-[30vh] max-h-[275px] w-2/3 max-w-[475px] flex-none md:w-1/3"><a
                className="relative h-full w-full" href="/product/acme-baby-cap">
                <div
                    className="flex h-full w-full items-center justify-center overflow-hidden rounded-lg border bg-white hover:border-blue-600 dark:bg-black relative border-neutral-200 dark:border-neutral-800">
                    <img alt="Acme Baby Cap" loading="lazy" decoding="async" data-nimg="fill"
                        className="relative h-full w-full object-contain transition duration-300 ease-in-out hover:scale-105"
                        style={{position:"absolute", height:"100%", width:"100%", left:0, top:0, right:0, bottom:0, color:"transparent"}}
                        sizes="(min-width: 1024px) 25vw, (min-width: 768px) 33vw, 50vw"
                        srcset="/_next/image?url=https%3A%2F%2Fcdn.shopify.com%2Fs%2Ffiles%2F1%2F0754%2F3727%2F7491%2Ffiles%2Fbaby-cap-black.png%3Fv%3D1690002570&amp;w=256&amp;q=75 256w, /_next/image?url=https%3A%2F%2Fcdn.shopify.com%2Fs%2Ffiles%2F1%2F0754%2F3727%2F7491%2Ffiles%2Fbaby-cap-black.png%3Fv%3D1690002570&amp;w=384&amp;q=75 384w, /_next/image?url=https%3A%2F%2Fcdn.shopify.com%2Fs%2Ffiles%2F1%2F0754%2F3727%2F7491%2Ffiles%2Fbaby-cap-black.png%3Fv%3D1690002570&amp;w=640&amp;q=75 640w, /_next/image?url=https%3A%2F%2Fcdn.shopify.com%2Fs%2Ffiles%2F1%2F0754%2F3727%2F7491%2Ffiles%2Fbaby-cap-black.png%3Fv%3D1690002570&amp;w=750&amp;q=75 750w, /_next/image?url=https%3A%2F%2Fcdn.shopify.com%2Fs%2Ffiles%2F1%2F0754%2F3727%2F7491%2Ffiles%2Fbaby-cap-black.png%3Fv%3D1690002570&amp;w=828&amp;q=75 828w, /_next/image?url=https%3A%2F%2Fcdn.shopify.com%2Fs%2Ffiles%2F1%2F0754%2F3727%2F7491%2Ffiles%2Fbaby-cap-black.png%3Fv%3D1690002570&amp;w=1080&amp;q=75 1080w, /_next/image?url=https%3A%2F%2Fcdn.shopify.com%2Fs%2Ffiles%2F1%2F0754%2F3727%2F7491%2Ffiles%2Fbaby-cap-black.png%3Fv%3D1690002570&amp;w=1200&amp;q=75 1200w, /_next/image?url=https%3A%2F%2Fcdn.shopify.com%2Fs%2Ffiles%2F1%2F0754%2F3727%2F7491%2Ffiles%2Fbaby-cap-black.png%3Fv%3D1690002570&amp;w=1920&amp;q=75 1920w, /_next/image?url=https%3A%2F%2Fcdn.shopify.com%2Fs%2Ffiles%2F1%2F0754%2F3727%2F7491%2Ffiles%2Fbaby-cap-black.png%3Fv%3D1690002570&amp;w=2048&amp;q=75 2048w, /_next/image?url=https%3A%2F%2Fcdn.shopify.com%2Fs%2Ffiles%2F1%2F0754%2F3727%2F7491%2Ffiles%2Fbaby-cap-black.png%3Fv%3D1690002570&amp;w=3840&amp;q=75 3840w"
                        src="/_next/image?url=https%3A%2F%2Fcdn.shopify.com%2Fs%2Ffiles%2F1%2F0754%2F3727%2F7491%2Ffiles%2Fbaby-cap-black.png%3Fv%3D1690002570&amp;w=3840&amp;q=75" />
                    <div className="absolute bottom-0 left-0 flex w-full px-4 pb-4 @container/label">
                        <div
                            className="flex items-center rounded-full border bg-white/70 p-1 text-[10px] font-semibold text-black backdrop-blur-md @[275px]/label:text-xs dark:border-neutral-800 dark:bg-black/70 dark:text-white">
                            <h3 className="mr-4 inline pl-2 leading-none tracking-tight">Acme Baby Cap</h3>
                            <p className="flex-none rounded-full bg-blue-600 p-2 text-white">$10.00<span
                                    className="ml-1 inline hidden @[275px]/label:inline">USD</span></p>
                        </div>
                    </div>
                </div>
            </a></li>
    </ul>
</div>
    </>
  )
}

export default Carousal
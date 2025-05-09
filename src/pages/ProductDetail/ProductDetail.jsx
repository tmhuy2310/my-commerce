import { useState } from 'react';
import { StarIcon } from '@heroicons/react/20/solid';
import { Radio, RadioGroup } from '@headlessui/react';
import { Box, Button, Grid, LinearProgress, Rating } from '@mui/material';
import ProductReviewCard from '../../components/ProductReviewCard/ProductReviewCard';
import men_shirt from '../../data/men_shirt.json';
import SectionCard from '../../components/HomeSectionCard/SectionCard';
const product = {
    name: 'Basic Tee 6-Pack',
    price: '$192',
    href: '#',
    breadcrumbs: [
        { id: 1, name: 'Men', href: '#' },
        { id: 2, name: 'Clothing', href: '#' },
    ],
    images: [
        {
            src: 'https://tailwindcss.com/plus-assets/img/ecommerce-images/product-page-02-secondary-product-shot.jpg',
            alt: 'Two each of gray, white, and black shirts laying flat.',
        },
        {
            src: 'https://tailwindcss.com/plus-assets/img/ecommerce-images/product-page-02-tertiary-product-shot-01.jpg',
            alt: 'Model wearing plain black basic tee.',
        },
        {
            src: 'https://tailwindcss.com/plus-assets/img/ecommerce-images/product-page-02-tertiary-product-shot-02.jpg',
            alt: 'Model wearing plain gray basic tee.',
        },
        {
            src: 'https://tailwindcss.com/plus-assets/img/ecommerce-images/product-page-02-featured-product-shot.jpg',
            alt: 'Model wearing plain white basic tee.',
        },
    ],
    colors: [
        { name: 'White', class: 'bg-white', selectedClass: 'ring-gray-400' },
        { name: 'Gray', class: 'bg-gray-200', selectedClass: 'ring-gray-400' },
        { name: 'Black', class: 'bg-gray-900', selectedClass: 'ring-gray-900' },
    ],
    sizes: [
        { name: 'XXS', inStock: false },
        { name: 'XS', inStock: true },
        { name: 'S', inStock: true },
        { name: 'M', inStock: true },
        { name: 'L', inStock: true },
        { name: 'XL', inStock: true },
        { name: '2XL', inStock: true },
        { name: '3XL', inStock: true },
    ],
    description:
        'The Basic Tee 6-Pack allows you to fully express your vibrant personality with three grayscale options. Feeling adventurous? Put on a heather gray tee. Want to be a trendsetter? Try our exclusive colorway: "Black". Need to add an extra pop of color to your outfit? Our white tee has you covered.',
    highlights: [
        'Hand cut and sewn locally',
        'Dyed with our proprietary colors',
        'Pre-washed & pre-shrunk',
        'Ultra-soft 100% cotton',
    ],
    details:
        'The 6-Pack includes two black, two white, and two heather gray Basic Tees. Sign up for our subscription service and be the first to get new, exciting colors, like our upcoming "Charcoal Gray" limited release.',
};
const reviews = { href: '#', average: 4, totalCount: 117 };

function classNames(...classes) {
    return classes.filter(Boolean).join(' ');
}

export default function ProductDetail() {
    const [selectedColor, setSelectedColor] = useState(product.colors[0]);
    const [selectedSize, setSelectedSize] = useState(product.sizes[2]);

    return (
        <div className="bg-white">
            <div className="pt-6 lg:px-20">
                <nav aria-label="Breadcrumb">
                    <ol
                        role="list"
                        className="mx-auto flex max-w-2xl items-center space-x-2 px-4 sm:px-6 lg:max-w-7xl lg:px-8"
                    >
                        {product.breadcrumbs.map((breadcrumb) => (
                            <li key={breadcrumb.id}>
                                <div className="flex items-center">
                                    <a href={breadcrumb.href} className="mr-2 text-sm font-medium text-gray-900">
                                        {breadcrumb.name}
                                    </a>
                                    <svg
                                        fill="currentColor"
                                        width={16}
                                        height={20}
                                        viewBox="0 0 16 20"
                                        aria-hidden="true"
                                        className="h-5 w-4 text-gray-300"
                                    >
                                        <path d="M5.697 4.34L8.98 16.532h1.327L7.025 4.341H5.697z" />
                                    </svg>
                                </div>
                            </li>
                        ))}
                        <li className="text-sm">
                            <a
                                href={product.href}
                                aria-current="page"
                                className="font-medium text-gray-500 hover:text-gray-600"
                            >
                                {product.name}
                            </a>
                        </li>
                    </ol>
                </nav>
                {/* Product Information */}
                <section className="grid grid-cols-1 lg:grid-cols-2 gap-x-8 gap-y-10 px-4 pt-10">
                    {/* Image gallery */}
                    <div className="flex flex-col items-center">
                        <div className="overflow-hidden rounded-lg max-w-[30rem] max-h-[35rem]">
                            <img
                                alt={product.images[0].alt}
                                src={product.images[0].src}
                                className="size-full rounded-lg object-cover"
                            />
                        </div>
                        <div className="flex flex-wrap space-x-5 justify-center">
                            {product.images.map((items, index) => (
                                <div key={index} className="overflow-hidden rounded-lg max-w-[5rem] max-h-[5rem] mt-4">
                                    <img
                                        alt={items.alt}
                                        src={items.src}
                                        className="aspect-3/2 w-full rounded-lg object-cover"
                                    />
                                </div>
                            ))}
                        </div>
                    </div>
                    {/* Product info */}
                    <div className="maxt-auto max-w-2xl px-4 pb-16 sm:px-6 lg:col-span-1 lg:max-w-7xl lg:px-8 lg:pt-16 lg:pb-24">
                        <div className="lg:col-span-2 lg:border-r lg:border-gray-200 lg:pr-8">
                            <h1 className="text-lg font-semibold tracking-tight text-gray-900 sm:text-3xl">
                                {product.name}
                            </h1>
                            <h1 className="pt-1 text-lg font-semibold text-gray-900 opacity-60 sm:text-3xl">
                                {product.name}
                            </h1>
                        </div>

                        {/* Options */}
                        <div className="mt-4 lg:row-span-3 lg:mt-0">
                            <h2 className="sr-only">Product information</h2>
                            <div className="flex space-x-5 items-center text-lg lg:text-xl text-gray-900 mt-6">
                                <p className="font-semibold tracking-tight text-gray-900">{product.price}</p>
                                <p className="opacity-50 line-through tracking-tight text-gray-900">{product.price}</p>
                                <p className="font-semibold tracking-tight text-green-600">{product.price}</p>
                            </div>

                            {/* Reviews */}
                            <div className="mt-6 flex items-center">
                                <Rating name="half-rating-read" value={5} defaultValue={2.5} precision={0.5} readOnly />
                                <p className="opacity-50 text-sm">0 Ratings</p>
                                <p className="ml-3 text-sm font-medium text-indigo-600 hover:text-indigo-500">
                                    0 Review
                                </p>
                            </div>

                            <form className="mt-10">
                                {/* Colors */}
                                <div>
                                    <h3 className="text-sm font-medium text-gray-900">Color</h3>

                                    <fieldset aria-label="Choose a color" className="mt-4">
                                        <RadioGroup
                                            value={selectedColor}
                                            onChange={setSelectedColor}
                                            className="flex items-center gap-x-3"
                                        >
                                            {product.colors.map((color) => (
                                                <Radio
                                                    key={color.name}
                                                    value={color}
                                                    aria-label={color.name}
                                                    className={classNames(
                                                        color.selectedClass,
                                                        'relative -m-0.5 flex cursor-pointer items-center justify-center rounded-full p-0.5 focus:outline-hidden data-checked:ring-2 data-focus:data-checked:ring-3 data-focus:data-checked:ring-offset-1',
                                                    )}
                                                >
                                                    <span
                                                        aria-hidden="true"
                                                        className={classNames(
                                                            color.class,
                                                            'size-8 rounded-full border border-black/10',
                                                        )}
                                                    />
                                                </Radio>
                                            ))}
                                        </RadioGroup>
                                    </fieldset>
                                </div>

                                {/* Sizes */}
                                <div className="mt-10">
                                    <div className="flex items-center justify-between">
                                        <h3 className="text-sm font-medium text-gray-900">Size</h3>
                                        <a
                                            href="#"
                                            className="text-sm font-medium text-indigo-600 hover:text-indigo-500"
                                        >
                                            Size guide
                                        </a>
                                    </div>

                                    <fieldset aria-label="Choose a size" className="mt-4">
                                        <RadioGroup
                                            value={selectedSize}
                                            onChange={setSelectedSize}
                                            className="grid grid-cols-8 gap-4"
                                        >
                                            {product.sizes.map((size) => (
                                                <Radio
                                                    key={size.name}
                                                    value={size}
                                                    disabled={!size.inStock}
                                                    className={classNames(
                                                        size.inStock
                                                            ? 'cursor-pointer bg-white text-gray-900 shadow-xs'
                                                            : 'cursor-not-allowed bg-gray-50 text-gray-200',
                                                        'group relative flex items-center justify-center rounded-md border px-2 py-1 text-sm font-medium uppercase hover:bg-gray-50 focus:outline-hidden data-focus:ring-2 data-focus:ring-indigo-500 sm:flex-1 sm:py-6',
                                                    )}
                                                >
                                                    <span>{size.name}</span>
                                                    {size.inStock ? (
                                                        <span
                                                            aria-hidden="true"
                                                            className="pointer-events-none absolute -inset-px rounded-md border-2 border-transparent group-data-checked:border-indigo-500 group-data-focus:border"
                                                        />
                                                    ) : (
                                                        <span
                                                            aria-hidden="true"
                                                            className="pointer-events-none absolute -inset-px rounded-md border-2 border-gray-200"
                                                        >
                                                            <svg
                                                                stroke="currentColor"
                                                                viewBox="0 0 100 100"
                                                                preserveAspectRatio="none"
                                                                className="absolute inset-0 size-full stroke-2 text-gray-200"
                                                            >
                                                                <line
                                                                    x1={0}
                                                                    x2={100}
                                                                    y1={100}
                                                                    y2={0}
                                                                    vectorEffect="non-scaling-stroke"
                                                                />
                                                            </svg>
                                                        </span>
                                                    )}
                                                </Radio>
                                            ))}
                                        </RadioGroup>
                                    </fieldset>
                                </div>

                                <Button
                                    variant="contained"
                                    sx={{
                                        mt: '1rem',
                                        p: '2rem',
                                        px: '2rem',
                                        py: '1rem',
                                        bgcolor: 'blue',
                                        '&:hover': {
                                            bgcolor: '#9155fd',
                                        },
                                    }}
                                >
                                    ADD TO CART
                                </Button>
                            </form>
                        </div>

                        <div className="py-10 lg:col-span-2 lg:col-start-1 lg:border-r lg:border-gray-200 lg:pt-6 lg:pr-8 lg:pb-16">
                            {/* Description and details */}
                            <div>
                                <h3 className="sr-only">Description</h3>

                                <div className="space-y-6">
                                    <p className="text-base text-gray-900">{product.description}</p>
                                </div>
                            </div>

                            <div className="mt-10">
                                <h3 className="text-sm font-medium text-gray-900">Highlights</h3>

                                <div className="mt-4">
                                    <ul role="list" className="list-disc space-y-2 pl-4 text-sm">
                                        {product.highlights.map((highlight) => (
                                            <li key={highlight} className="text-gray-400">
                                                <span className="text-gray-600">{highlight}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>

                            <div className="mt-10">
                                <h2 className="text-sm font-medium text-gray-900">Details</h2>

                                <div className="mt-4 space-y-6">
                                    <p className="text-sm text-gray-600">{product.details}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/* ratings and reviews */}
                <section className="">
                    <h1 className="font-semibold text-lg pb-4">Recent Reviews & Ratings</h1>
                    <div className="border p-5">
                        <Grid container spacing={2}>
                            <Grid size={{ xs: 12, sm: 6, md: 6 }}>
                                <h1 className="text-xl font-semibold pb-3"> Product Ratings</h1>
                                <Box className="space-y-2">
                                    <Grid container alignItems="center" gap={2}>
                                        <Grid size={{ xs: 5, md: 2 }}>
                                            <Rating name="half-rating" value={5} readOnly />
                                        </Grid>

                                        <Grid size={{ xs: 5 }}>
                                            <LinearProgress
                                                sx={{ bgcolor: '#d0d0d0', borderRadius: 4, height: 7 }}
                                                variant="determinate"
                                                color="success"
                                                value={40}
                                            />
                                        </Grid>
                                    </Grid>
                                    <Grid container alignItems="center" gap={2}>
                                        <Grid size={{ xs: 5, md: 2 }}>
                                            <Rating name="half-rating" value={4} readOnly />
                                        </Grid>

                                        <Grid size={{ xs: 5 }}>
                                            <LinearProgress
                                                sx={{ bgcolor: '#d0d0d0', borderRadius: 4, height: 7 }}
                                                variant="determinate"
                                                color="success"
                                                value={40}
                                            />
                                        </Grid>
                                    </Grid>

                                    <Grid container alignItems="center" gap={2}>
                                        <Grid size={{ xs: 5, md: 2 }}>
                                            <Rating name="half-rating" value={3} readOnly />
                                        </Grid>

                                        <Grid size={{ xs: 5 }}>
                                            <LinearProgress
                                                sx={{ bgcolor: '#d0d0d0', borderRadius: 4, height: 7, color: 'yellow' }}
                                                variant="determinate"
                                                value={40}
                                            />
                                        </Grid>
                                    </Grid>

                                    <Grid container alignItems="center" gap={2}>
                                        <Grid size={{ xs: 5, md: 2 }}>
                                            <Rating name="half-rating" value={2} readOnly />
                                        </Grid>

                                        <Grid size={{ xs: 5 }}>
                                            <LinearProgress
                                                sx={{ bgcolor: '#d0d0d0', borderRadius: 4, height: 7 }}
                                                variant="determinate"
                                                color="warning"
                                                value={40}
                                            />
                                        </Grid>
                                    </Grid>

                                    <Grid container alignItems="center" gap={2}>
                                        <Grid size={{ xs: 5, md: 2 }}>
                                            <Rating name="half-rating" value={1} readOnly />
                                        </Grid>

                                        <Grid size={{ xs: 5 }}>
                                            <LinearProgress
                                                sx={{ bgcolor: '#d0d0d0', borderRadius: 4, height: 7 }}
                                                variant="determinate"
                                                color="error"
                                                value={40}
                                            />
                                        </Grid>
                                    </Grid>
                                </Box>
                            </Grid>
                            <Grid size={{ xs: 12, sm: 6, md: 6 }}>
                                {[1, 1, 1].map((items) => (
                                    <ProductReviewCard />
                                ))}
                            </Grid>
                        </Grid>
                    </div>
                </section>
                {/* similar product */}
                <section className="pt-10">
                    <h1 className='py-5 text-xl font-bold'>Similar Product</h1>
                    <div className='flex flex-wrap space-y-5 place-content-center'>
                        {men_shirt.map((item) => (
                            <SectionCard product={item} />
                        ))}
                    </div>
                </section>
            </div>
        </div>
    );
}

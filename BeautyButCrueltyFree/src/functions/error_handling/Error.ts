export const randomMakeupImagesInCaseOfError: string[] = [
    "https://d1f34ajap1v5tm.cloudfront.net/image/Types-of-Makeup-Every-Makeup-Lover-Should-Know.jpg",
    "https://images.squarespace-cdn.com/content/v1/62a98ab3228a337fdf58fe76/9d8b605a-7fba-4633-b285-f5b1e904c4b9/Must+Have+Makeup+Products+For+Your+Makeup+Bag.jpg",
    "https://cdn.britannica.com/35/222035-131-9FC95B31/makeup-cosmetics.jpg",
    "https://www.verywellhealth.com/thmb/T_OlMhFfEYWW0Igl4A_VvDKZ4gY=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/gluten-free-makeup-brands-562443-primary-recirc-b8cf5ac52391436ba4114a6355aac323.jpg",
];

export const getRandomImageFromArray = (images: string[]): string => {
    let randomNumberBetween0andLastIndex: number = Math.floor(
        Math.random() * images.length
    );
    const image: string = images[randomNumberBetween0andLastIndex];

    return image as string;
};
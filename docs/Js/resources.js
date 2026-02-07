// import images
export const thumbnails = import.meta.glob("../images/Paintings/*.png", { eager: true, query: { w: 500, format: "webp" } });
export const thumbnailsURLs = Object.keys(thumbnails);

export const images = import.meta.glob("../images/Paintings/*.png", { eager: true });
export const imagesURLs = Object.keys(images);

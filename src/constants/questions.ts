export const questions: {
  q: string;
  a: string;
}[] = [
  {
    q: "What is WebP?",
    a: `WebP is a modern image format developed by Google that provides both
    lossless and lossy compression for images on the web. It is designed
    to offer smaller file sizes and faster loading times compared to
    other image formats like JPEG and PNG.`,
  },
  {
    q: "What are the advantages of using WebP?",
    a: `WebP offers several advantages, including smaller file sizes, better
    compression efficiency, and support for both lossless and lossy
    compression. It can lead to faster website loading times, reduced
    bandwidth usage, and improved user experiences.`,
  },
  {
    q: "Which browsers support WebP?",
    a: `WebP is supported by major web browsers like Google Chrome, Mozilla
    Firefox, Microsoft Edge, and Opera. However, some older browsers may
    not fully support it, so it's essential to have fallbacks in
    place for those cases.`,
  },
  {
    q: "How do I convert images to WebP format?",
    a: `You can use Webpfy to convert your images to WebP format. It's
    free, easy, and fast! Just drop your images in the box above and
    click the "Convert"`,
  },
  {
    q: "What is the difference between lossless and lossy WebP compression?",
    a: `Lossless WebP compression retains all the image quality but still achieves a smaller file size. Lossy compression reduces image quality slightly to achieve even smaller file sizes. The choice between them depends on your specific needs and the importance of image quality.`,
  },
  {
    q: "Are there any drawbacks to using WebP?",
    a: `One drawback is that not all web browsers support WebP, especially older versions. It's essential to provide fallback formats like JPEG or PNG for compatibility. Additionally, some graphic editing software may have limited support for editing WebP images.`,
  },
  {
    q: "Can WebP images have transparency?",
    a: `Yes, WebP supports transparency using an alpha channel. You can create images with transparent backgrounds or partial transparency, making it suitable for use in images with irregular shapes or soft edges.`,
  },
  {
    q: "What is the typical use case for WebP images?",
    a: `WebP images are commonly used for website graphics, including photographs, illustrations, icons, and other visual elements. They are also used in responsive web design to reduce the load time on mobile devices.`,
  },
  {
    q: "How do I serve WebP images to browsers that support them and fallback formats to older browsers?",
    a: `You can implement content negotiation on your server to detect the browser's support for WebP and serve the appropriate format. Alternatively, use the "picture" element in HTML with the "source" element to specify multiple image formats and let the browser choose the best one.`,
  },
  {
    q: "Are there any SEO benefits to using WebP images?",
    a: `While WebP images can lead to faster loading times, which is a factor in SEO, the format itself doesn't directly impact SEO. However, faster page load times can improve user experience, which can indirectly benefit your website's search engine rankings.`,
  },
  {
    q: "How does WebP achieve better compression compared to other image formats like JPEG and PNG?",
    a: `WebP achieves better compression through a combination of techniques, including predictive coding, entropy coding, and a variety of preprocessing methods. Predictive coding reduces redundancy in the image data, while entropy coding uses a more efficient coding scheme. These techniques collectively result in smaller file sizes without significantly compromising image quality.`,
  },
];

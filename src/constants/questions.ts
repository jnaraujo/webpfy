interface Question {
  q: string;
  a: string;
}

export const questionsEN: Question[] = [
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

export const questionsPT: Question[] = [
  {
    q: "O que é WebP?",
    a: `WebP é um formato de imagem moderno desenvolvido pelo Google que oferece
    compressão tanto lossless quanto lossy para imagens na web. Ele é
    projetado para oferecer tamanhos de arquivo menores e tempos de
    carregamento mais rápidos em comparação com outros formatos de imagem
    como JPEG e PNG.`,
  },
  {
    q: "Quais são as vantagens de usar WebP?",
    a: `WebP oferece várias vantagens, incluindo tamanhos de arquivo menores,
    melhor eficiência de compressão e suporte para compressão lossless e
    lossy. Isso pode levar a tempos de carregamento mais rápidos do site,
    uso reduzido de largura de banda e experiências de usuário
    aprimoradas.`,
  },
  {
    q: "Quais navegadores suportam WebP?",
    a: `WebP é suportado por grandes navegadores da web como Google Chrome,
    Mozilla Firefox, Microsoft Edge e Opera. No entanto, alguns
    navegadores mais antigos podem não oferecer suporte total, portanto é
    essencial ter fallbacks em vigor para esses casos.`,
  },
  {
    q: "Como faço para converter imagens para o formato WebP?",
    a: `Você pode usar o Webpfy para converter suas imagens para o formato
    WebP. É grátis, fácil e rápido! Basta soltar suas imagens na caixa
    acima e clicar em "Converter"`,
  },
  {
    q: "Qual é a diferença entre compressão WebP lossless e lossy?",
    a: `A compressão WebP lossless mantém toda a qualidade da imagem, mas
    ainda assim alcança um tamanho de arquivo menor. A compressão lossy
    reduz ligeiramente a qualidade da imagem para alcançar tamanhos de
    arquivo ainda menores. A escolha entre eles depende de suas
    necessidades específicas e da importância da qualidade da imagem.`,
  },
  {
    q: "Existem desvantagens em usar WebP?",
    a: `Uma desvantagem é que nem todos os navegadores da web suportam WebP,
    especialmente versões mais antigas. É essencial fornecer formatos de
    fallback como JPEG ou PNG para compatibilidade. Além disso, alguns
    softwares de edição gráfica podem ter suporte limitado para edição de
    imagens WebP.`,
  },
  {
    q: "As imagens WebP podem ter transparência?",
    a: `Sim, o WebP suporta transparência usando um canal alfa. Você pode
    criar imagens com fundos transparentes ou transparência parcial,
    tornando-o adequado para uso em imagens com formas irregulares ou
    bordas suaves.`,
  },
  {
    q: "Qual é o caso de uso típico para imagens WebP?",
    a: `As imagens WebP são comumente usadas para gráficos de sites, incluindo
    fotografias, ilustrações, ícones e outros elementos visuais. Elas
    também são usadas em design responsivo para reduzir o tempo de
    carregamento em dispositivos móveis.`,
  },
  {
    q: "Como faço para servir imagens WebP para navegadores que as suportam e formatos de fallback para navegadores mais antigos?",
    a: `Você pode implementar negociação de conteúdo em seu servidor para
    detectar o suporte do navegador para WebP e servir o formato
    apropriado. Alternativamente, use o elemento "picture" em HTML com o
    elemento "source" para especificar vários formatos de imagem e deixar
    o navegador escolher o melhor.`,
  },
  {
    q: "Existem benefícios de SEO em usar imagens WebP?",
    a: `Embora as imagens WebP possam levar a tempos de carregamento mais
    rápidos, que é um fator em SEO, o formato em si não impacta
    diretamente o SEO. No entanto, tempos de carregamento de página mais
    rápidos podem melhorar a experiência do usuário, o que pode
    beneficiar indiretamente as classificações de mecanismos de busca do
    seu site.`,
  },
  {
    q: "Como o WebP alcança melhor compressão em comparação com outros formatos de imagem como JPEG e PNG?",
    a: `O WebP alcança melhor compressão por meio de uma combinação de
    técnicas, incluindo codificação preditiva, codificação de entropia e
    uma variedade de métodos de pré-processamento. A codificação
    preditiva reduz a redundância nos dados da imagem, enquanto a
    codificação de entropia usa um esquema de codificação mais eficiente.
    Essas técnicas coletivamente resultam em tamanhos de arquivo menores
    sem comprometer significativamente a qualidade da imagem.`,
  },
];

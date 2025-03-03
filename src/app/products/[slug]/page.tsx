import { createSlug } from "@/lib/helpers";
import { fetchProduct } from "@/repositories/productRepository";
import { redirect } from "next/navigation";
import ProductImageCarousel from "./components/product-image-carousel/ProductImageCarousel";
import { RatingStars } from "@/components/rating/rating-stars";
import SectionButton from "@/components/buttons/SectionButton";

export default async function ProductDetail({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const idString = slug.split("-").pop();

  if (!idString) {
    return null;
  }

  const id = parseInt(idString);

  if (isNaN(id) || id < 0) {
    return null;
  }

  const product = await fetchProduct(id);

  if (!product) {
    return null;
  }
  console.log("slug", slug);
  console.log("createSlug(product)", createSlug(product));
  if (slug !== createSlug(product)) {
    redirect(createSlug(product)); // Doğru slug değilse doğru slug'a yönlendir
  }

  return (
    <div className="mt-4">
      <section className="flex h-[740px] gap-8">
        <div className="h-full w-[424px]">
          <ProductImageCarousel product={product} />
        </div>
        <div className="h-full w-[602px]">
          <h1 className="text-lg text-[#212121] font-bold">{product.title}</h1>
          <div className="flex items-center gap-2">
            <div>
              <span className="text-[#484848] text-xs font-semibold bg-[#fff9e5] p-1">
                {product.rating.rate}
              </span>
            </div>
            <div>
              <RatingStars percentage={(product.rating.rate / 5) * 100} />
            </div>
            <div className="text-[var(--primary)] text-xs">
              <b>{product.rating.count}</b> değerlendirme
            </div>
          </div>
          <div>
            <span className="text-[#484848] text-3xl font-bold">
              {product.price} TL
            </span>
          </div>
          <div className="flex">
            <button className="w-[416px] h-12 bg-[var(--primary)] text-white rounded-lg hover:bg-[#e35600] mt-4">
              Sepete Ekle
            </button>
          </div>
        </div>
        <div className="h-full w-[154px] bg-green-700"></div>
      </section>
      <section className="w-full h-96 border-[1px] border-[#dadadada] rounded-lg">
        <div className="flex h-16">
          <SectionButton className="flex-grow" enabled text="Ürün Açıklaması" />
          <SectionButton
            className="flex-grow"
            enabled={false}
            text="Ürün Özellikleri"
          />
          <SectionButton
            className="flex-grow"
            enabled={false}
            text="Değerlendirmeler"
          />
          <SectionButton
            className="flex-grow"
            enabled={false}
            text="Soru Cevap"
          />
          <SectionButton
            className="flex-grow"
            enabled={false}
            text="Kredi Kartı Taksitleri"
          />
          <SectionButton
            className="flex-grow"
            enabled={false}
            text="Alışveriş Kredisi"
          />
          <SectionButton
            className="flex-grow"
            enabled={false}
            text="İptal ve İade Koşulları"
          />
        </div>
        <div className="w-full h-80">
          <p className="p-8">{product.description}</p>
        </div>
      </section>
    </div>
  );
}

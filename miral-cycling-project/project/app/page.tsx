import { HeroSection } from '@/components/ui/hero-section';
import { CollectionPreview } from '@/components/ui/collection-preview';
import { FeaturedProducts } from '@/components/ui/featured-products';
import { ReviewsSection } from '@/components/ui/reviews-section';

export default function Home() {
  return (
    <>
      <HeroSection />
      <CollectionPreview />
      <FeaturedProducts />
      <ReviewsSection />
    </>
  );
}
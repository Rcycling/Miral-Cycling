import { HeroSection } from '@/components/ui/hero-section';
import { CollectionPreview } from '@/components/ui/collection-preview';
import { FeaturedProducts } from '@/components/ui/featured-products';

export default function Home() {
  return (
    <>
      <HeroSection />
      <CollectionPreview />
      <FeaturedProducts />
    </>
  );
}
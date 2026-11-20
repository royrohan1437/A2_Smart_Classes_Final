import { EditorialStory } from "@/components/home/editorial-story";
import { FeaturedCourses } from "@/components/home/featured-courses";
import { HomepageHero } from "@/components/home/hero";

export default function PublicHomePage() {
  return (
    <>
      <HomepageHero />
      <EditorialStory />
      <FeaturedCourses />
    </>
  );
}

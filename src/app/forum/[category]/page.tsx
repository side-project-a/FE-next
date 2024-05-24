import { ForumNav, ForumPostList } from '@/widgets';

export default function ForumPage({
  params: { category },
}: {
  params: { category: string };
}) {
  return (
    <>
      <div>
        <ForumNav category={category} />
      </div>

      <div className="mt-8 w-full">
        <ForumPostList />
      </div>
    </>
  );
}

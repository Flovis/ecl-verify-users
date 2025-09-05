// import UserDetails from "@/components/scrach/user-details";
import { UserProfile } from "@/components/scrach/user-profile";

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  return (
    <div>
      <h1 className="font-bold">URL matricule: {id}</h1>
      {/* <UserDetails /> */}
      <UserProfile/>
    </div>
  );
}

import {
  getProfileByUsername,
  getUserLikedPosts,
  getUserPosts,
  isFollowing,
} from "@/actions/profile.action";
import { notFound } from "next/navigation";
import ProfilePageClient from "./profile-page-client";
import type { Metadata } from "next";

// Import the specific type from Next.js generated types
// This is necessary to resolve the type mismatch
import type { PageProps as GeneratedPageProps } from "@/.next/types/app/profile/[username]/page";

// Optional: Add this if the above import doesn't work and you need to define a compatible type
// interface GeneratedPageProps {
//   params: Promise<{ username: string }>;
//   searchParams?: { [key: string]: string | string[] | undefined };
// }

export async function generateMetadata({
  params,
}: GeneratedPageProps): Promise<Metadata | undefined> {
  // Workaround for params being a Promise
  const resolvedParams = params instanceof Promise ? await params : params;
  const username = resolvedParams.username;
  
  const user = await getProfileByUsername(username);
  if (!user) return;
  
  return {
    title: `${user.name ?? user.username}`,
    description: user.bio || `Check out ${user.username}'s profile.`,
  };
}

export default async function ProfilePage(props: GeneratedPageProps) {
  // Workaround for params being a Promise
  const params = props.params instanceof Promise ? await props.params : props.params;
  const username = params.username;
  
  const user = await getProfileByUsername(username);
  if (!user) notFound();
  
  const [posts, likedPosts, isCurrentUserFollowing] = await Promise.all([
    getUserPosts(user.id),
    getUserLikedPosts(user.id),
    isFollowing(user.id),
  ]);
  
  return (
    <ProfilePageClient
      user={user}
      posts={posts}
      likedPosts={likedPosts}
      isFollowing={isCurrentUserFollowing}
    />
  );
}
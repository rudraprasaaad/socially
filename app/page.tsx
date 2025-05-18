import ModeToggle from "@/components/mode-toggle";
import { Button } from "@/components/ui/button";
import { SignInButton, SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
export default function Home() {
  return (
    <div className="max-w-7xl mx-auto flex justify-between my-2">
      Home page
      <div className="flex gap-2">
        <ModeToggle />
        <SignedOut>
          <SignInButton mode="modal">
            <Button className="bg-indigo-500 hover:bg-indigo-400 px-4 py-2 rounded-md hover:cursor-pointer">
              Sign in
            </Button>
          </SignInButton>
        </SignedOut>
        <SignedIn>
          <UserButton />
        </SignedIn>
      </div>
    </div>
  );
}

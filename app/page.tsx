import AuthButton from "@/components/AuthButton";
import { createClient } from "@/utils/supabase/server";
import SupabaseNotConnected from "@/components/SupabaseNotConnected";
import Instructions from "@/components/Instructions";
import Header from "@/components/Header";

export default async function Index() {

  const canInitSupabaseClient = () => {
    // This function is just for the interactive tutorial.
    // Feel free to remove it once you have Supabase connected.
    try {
      createClient();
      return true;
    } catch (e) {
      return false;
    }
  };

  const isSupabaseConnected = canInitSupabaseClient();

  return (
    <div className="flex-1 w-full flex flex-col items-center">
      <nav className="w-full fixed bg-background z-10 flex justify-center border-b border-b-foreground/10 h-16">
        <div className="w-full max-w-4xl flex justify-between items-center p-3 text-sm md:text-md select-none">
          <span className="font-semibold">USSTM Admin</span>
          {isSupabaseConnected && <AuthButton />}
        </div>
      </nav>
      <div className="h-16" />

      <div className="animate-in flex-1 flex flex-col opacity-0 px-3 w-full mt-20 mb-8">
        <Header />
      </div>
      <div className="max-w-4xl mx-auto flex flex-start justify-start w-full px-3">
        <h2 className="font-bold text-4xl mt-0 mb-6">To Do:</h2>
      </div>

      {isSupabaseConnected ? <Instructions /> : <SupabaseNotConnected />}

      <footer className="w-full border-t border-t-foreground/10 p-8 flex justify-center text-center text-xs">
        <p>
          Powered by{" "}
          <a
            href="https://pacstmu.ca"
            target="_blank"
            className="font-bold hover:underline"
            rel="noreferrer"
          >
            PACS © 2024
          </a>
        </p>
      </footer>
    </div>
  );
}

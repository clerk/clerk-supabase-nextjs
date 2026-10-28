import { ClerkProvider, SignInButton, Show, UserButton } from "@clerk/nextjs";
import { Suspense } from "react";
import "./globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-slate-50 text-slate-900 antialiased">
        <ClerkProvider>
          <div className="mx-auto max-w-2xl px-4 py-8 sm:px-6">
            <header className="mb-8 flex justify-end">
              <Suspense>
                <Show when="signed-out">
                  <SignInButton>
                    <button
                      type="button"
                      className="rounded-md bg-slate-900 px-4 py-2 text-sm font-medium text-white hover:bg-slate-700"
                    >
                      Sign in
                    </button>
                  </SignInButton>
                </Show>
                <Show when="signed-in">
                  <UserButton />
                </Show>
              </Suspense>
            </header>
            <main>{children}</main>
          </div>
        </ClerkProvider>
      </body>
    </html>
  );
}

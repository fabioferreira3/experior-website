import localFont from "next/font/local";
import "../assets/globals.css";

const avenir = localFont({
  src: [
    {
      path: "../../public/fonts/avenir-light.ttf",
      weight: "200",
    },
    {
      path: "../../public/fonts/avenir-regular.ttf",
      weight: "400",
    },
    {
      path: "../../public/fonts/avenir-black.ttf",
      weight: "700",
    },
  ],
  variable: "--font-avenir",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${avenir.variable} font-sans`}>
        {/* <Suspense>
          <Analytics />
        </Suspense> */}
        {children}
      </body>
    </html>
  );
}

import type { Metadata } from "next";
import "./globals.css";

import { Cormorant_Garamond } from "next/font/google";

const font = Cormorant_Garamond({
  subsets:["latin"],
  weight:["300","400","500","600","700"]
});

export const metadata: Metadata = {
  title: "Azka × Neylan",
};

export default function RootLayout({
children,
}: Readonly<{
children: React.ReactNode;
}>){

return(

<html lang="en">

<body className={font.className}>

{children}

</body>

</html>

)

}
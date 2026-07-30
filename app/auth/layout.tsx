import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Autenticación",
  description: "Ingresá o creá tu cuenta en E.A. Studio.",
};

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}

import { Metadata } from "next"
import { CertificatesPage } from "@/components/certificates-page"

export const metadata: Metadata = {
  title: "Certificados | Ivan Gonzalez",
  description: "Certificaciones profesionales en desarrollo web, React, Node.js, Python, Django y mas.",
}

export default function Certificados() {
  return <CertificatesPage />
}
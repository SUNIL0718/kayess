import styles from "./page.module.css";
import Image from "next/image";
import certificate1 from "@/public/images/certificate1.png";
import certificate2 from "@/public/images/certificate2.jpg";

// Array of certificate objects
const certificates = [
  {
    src: certificate1,
    alt: "Certificate 1",
    title: "BRCGS Certificate",
    description: `
      The Isoqar Alcumus Certification is one of the most accredited, recognized,
      and respected certifications concerning the scope of activities carried out
      by Agro Gums. It vouches for the processing as well as the primary packaging
      in line with the directives and aligns with the quality control and the product
      safety of the Guar Gum manufactured.
    `,
    additionalInfo: `
      Agro Gums has successfully received A+ BRCGS (Brand Reputation Compliance Global Standards)
      accreditation for Food Standard in the category of 15 – Dried food and ingredients, certified
      from ALCUMUS ISOQAR Limited for producing guar gum powder and packaging it in HDPE poly woven
      paper bags, multi-layered paper bags with an inner LDPE liner, and fabric laminated jumbo bags.
    `,
    link: "/",
  },
  {
    src: certificate2,
    alt: "Certificate 2",
    title: "ISO Certification",
    description: `
      ISO certification indicates a commitment to quality standards and adherence
      to stringent industry guidelines. This certification reinforces the credibility
      of our production processes and our dedication to delivering consistent and reliable products.
    `,
    additionalInfo: `
      Our ISO certification covers the entire manufacturing process, from raw material sourcing
      to final product packaging, ensuring that our products meet international quality standards.
    `,
    link: "/",
  },
  {
    src: certificate2,
    alt: "Certificate 2",
    title: "ISO Certification",
    description: `
      ISO certification indicates a commitment to quality standards and adherence
      to stringent industry guidelines. This certification reinforces the credibility
      of our production processes and our dedication to delivering consistent and reliable products.
    `,
    additionalInfo: `
      Our ISO certification covers the entire manufacturing process, from raw material sourcing
      to final product packaging, ensuring that our products meet international quality standards.
    `,
    link: "/",
  },
  {
    src: certificate2,
    alt: "Certificate 2",
    title: "ISO Certification",
    description: `
      ISO certification indicates a commitment to quality standards and adherence
      to stringent industry guidelines. This certification reinforces the credibility
      of our production processes and our dedication to delivering consistent and reliable products.
    `,
    additionalInfo: `
      Our ISO certification covers the entire manufacturing process, from raw material sourcing
      to final product packaging, ensuring that our products meet international quality standards.
    `,
    link: "/",
  },
];

const CertificateSection = () => {
  return (
    <section className={styles.certificateSection}>
      {certificates.map((certificate, index) => (
        <div key={index} className={styles.certificateContainer}>
          <div className={styles.certificateImage}>
            <Image
              src={certificate.src}
              alt={certificate.alt}
              layout="responsive"
            />
          </div>
          <div className={styles.certificateContent}>
            <h2>{certificate.title}</h2>
            <p>{certificate.description}</p>
            <p>{certificate.additionalInfo}</p>
            <a
              href={certificate.link}
              target="_blank"
              rel="noopener noreferrer"
            >
              Visit the directory for more information.
            </a>
          </div>
          {/* <hr style={{ borderTop: "1px solid #0d3502", width: "100%" }} /> */}
        </div>
      ))}
    </section>
  );
};

export default CertificateSection;

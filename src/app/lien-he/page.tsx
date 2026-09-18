import { PageHero } from "@/components/PageHero";
import { ContactForm } from "@/components/ContactForm";
import { Reveal } from "@/components/ui/Reveal";
import { JsonLd } from "@/components/JsonLd";
import { buildMetadata, breadcrumbSchema } from "@/lib/seo";
import { company, siteUrl } from "@/data/company";

const crumbs = [
  { name: "Trang chủ", path: "/" },
  { name: "Liên hệ", path: "/lien-he" },
];

export const metadata = buildMetadata({
  title: "Liên hệ tư vấn & báo giá kệ kho hàng",
  description: `Liên hệ Thiên Khôi qua hotline ${company.hotline} hoặc email ${company.email} để được khảo sát, tư vấn và báo giá hệ thống kệ kho hàng phù hợp.`,
  path: "/lien-he",
});

const contactSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": `${siteUrl}/#localbusiness`,
  name: company.legalName,
  image: `${siteUrl}/images/hero/hero-main.jpg`,
  url: `${siteUrl}/lien-he`,
  telephone: "+84939450488",
  email: company.email,
  priceRange: "$$",
  address: {
    "@type": "PostalAddress",
    streetAddress: company.address.street,
    addressLocality: company.address.city,
    addressCountry: "VN",
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
      ],
      opens: "08:00",
      closes: "17:30",
    },
  ],
};

export default async function ContactPage({
  searchParams,
}: {
  searchParams: Promise<{ "san-pham"?: string }>;
}) {
  const params = await searchParams;

  return (
    <>
      <JsonLd data={[breadcrumbSchema(crumbs), contactSchema]} />
      <PageHero
        title="Liên hệ tư vấn & báo giá"
        description="Gửi thông tin về mặt bằng kho và loại hàng hóa, đội ngũ kỹ thuật Thiên Khôi sẽ khảo sát và đề xuất phương án lưu trữ phù hợp."
        breadcrumbs={crumbs}
      />

      <section className="py-16 lg:py-24">
        <div className="container-tk grid gap-12 lg:grid-cols-[1fr_1.15fr] lg:gap-16">
          <div>
            <Reveal>
              <h2 className="text-2xl font-extrabold text-steel-900">
                Thông tin liên hệ
              </h2>
              <p className="mt-3 text-[15px] leading-relaxed text-steel-600">
                Gọi trực tiếp hotline để được hỗ trợ nhanh nhất, hoặc gửi biểu mẫu
                để nhận báo giá chi tiết.
              </p>
            </Reveal>

            <Reveal delay={120}>
              <div className="mt-8 space-y-5">
                <ContactItem label="Hotline" href={company.hotlineHref} highlight>
                  {company.hotline}
                </ContactItem>
                <ContactItem label="Email" href={`mailto:${company.email}`}>
                  {company.email}
                </ContactItem>
                <ContactItem label="Địa chỉ">{company.address.full}</ContactItem>
                <ContactItem label="Mã số thuế">{company.taxCode}</ContactItem>
                <ContactItem label="Giờ làm việc">
                  Thứ 2 – Thứ 7, 08:00 – 17:30
                </ContactItem>
              </div>
            </Reveal>

            <Reveal delay={200}>
              <div className="mt-8 overflow-hidden rounded-2xl border border-steel-200">
                <iframe
                  title={`Bản đồ đường tới ${company.legalName}`}
                  src={`https://www.google.com/maps?q=${encodeURIComponent(
                    company.address.full,
                  )}&output=embed`}
                  className="h-72 w-full"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </Reveal>
          </div>

          <Reveal delay={100}>
            <div className="rounded-2xl border border-steel-200 bg-white p-7 shadow-sm sm:p-9">
              <h2 className="text-2xl font-extrabold text-steel-900">
                Gửi yêu cầu tư vấn
              </h2>
              <p className="mt-2 text-[15px] text-steel-600">
                Các trường có dấu <span className="text-safety-600">*</span> là bắt buộc.
              </p>
              <div className="mt-7">
                <ContactForm defaultProduct={params["san-pham"]} />
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}

function ContactItem({
  label,
  children,
  href,
  highlight = false,
}: {
  label: string;
  children: React.ReactNode;
  href?: string;
  highlight?: boolean;
}) {
  const body = href ? (
    <a
      href={href}
      className={`transition-colors hover:text-safety-600 ${
        highlight ? "text-2xl font-extrabold text-safety-600" : "font-semibold text-steel-900"
      }`}
    >
      {children}
    </a>
  ) : (
    <span className="font-semibold text-steel-900">{children}</span>
  );

  return (
    <div className="border-l-2 border-steel-200 pl-5">
      <p className="text-[13px] font-bold uppercase tracking-wider text-steel-500">
        {label}
      </p>
      <p className="mt-1 leading-relaxed">{body}</p>
    </div>
  );
}

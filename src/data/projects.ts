export type Project = {
  slug: string;
  title: string;
  productType: string;
  scope: string;
  image: string;
  description: string;
};

export const projects: Project[] = [
  {
    slug: "kho-tong-hop-selective",
    title: "Kho tổng hợp sử dụng kệ Selective",
    productType: "Kệ Selective",
    scope: "Cung cấp & lắp đặt",
    image: "/images/projects/du-an-01.jpg",
    description:
      "Hệ thống kệ Selective kết hợp khu vực soạn hàng và lối đi xe nâng, đáp ứng kho đa chủng loại với tần suất xuất nhập cao.",
  },
  {
    slug: "thi-cong-lap-dat-ke-kho",
    title: "Thi công lắp đặt hệ thống kệ kho",
    productType: "Kệ tải nặng",
    scope: "Thi công tại công trình",
    image: "/images/projects/du-an-02.jpg",
    description:
      "Đội ngũ kỹ thuật triển khai lắp dựng khung kệ tải nặng theo đúng bản vẽ thiết kế, đảm bảo tiến độ và an toàn lao động.",
  },
  {
    slug: "kho-pallet-dinh-vi-vi-tri",
    title: "Kho pallet có định vị vị trí lưu trữ",
    productType: "Kệ Selective",
    scope: "Cung cấp & lắp đặt",
    image: "/images/projects/du-an-03.jpg",
    description:
      "Hệ thống kệ được đánh mã vị trí theo dãy và tầng, thuận tiện cho việc quản lý tồn kho và truy xuất hàng hóa.",
  },
  {
    slug: "kho-moi-ban-giao",
    title: "Hệ thống kệ bàn giao cho kho mới",
    productType: "Kệ tải nặng",
    scope: "Cung cấp & lắp đặt",
    image: "/images/projects/du-an-04.jpg",
    description:
      "Hệ thống kệ tải nặng hoàn thiện trên nền sàn epoxy, sẵn sàng đưa vào khai thác ngay sau khi nghiệm thu.",
  },
  {
    slug: "kho-tu-dong-asrs",
    title: "Hệ thống kho tự động AS/RS",
    productType: "AS/RS",
    scope: "Giải pháp tổng thể",
    image: "/images/projects/du-an-05.jpg",
    description:
      "Hệ thống kho cao tầng tích hợp cần trục xếp và băng tải, vận hành đồng bộ với phần mềm quản lý kho.",
  },
  {
    slug: "san-mezzanine-nha-kho",
    title: "Sàn Mezzanine trong nhà kho hiện hữu",
    productType: "Kệ sàn Mezzanine",
    scope: "Thiết kế & thi công",
    image: "/images/projects/du-an-06.jpg",
    description:
      "Giải pháp sàn lửng thép giúp tăng diện tích sử dụng, kết hợp cầu thang và khu vực nâng hạ hàng hóa.",
  },
];

export const partners = [
  { name: "Vinamilk", logo: "/images/partners/vinamilk.png" },
  { name: "Red Bull", logo: "/images/partners/red-bull.png" },
  { name: "FPT Retail", logo: "/images/partners/fpt-retail.png" },
  { name: "Viettel Post", logo: "/images/partners/viettel-post.png" },
  { name: "Kumho Tire", logo: "/images/partners/kumho-tire.png" },
  { name: "Sailun", logo: "/images/partners/sailun.png" },
  { name: "Saigon Express", logo: "/images/partners/saigon-express.png" },
];

export function getProject(slug: string) {
  return projects.find((p) => p.slug === slug);
}

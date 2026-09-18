export const company = {
  name: "Thiên Khôi",
  legalName: "Công ty TNHH Thiên Khôi",
  slogan: "Tâm tạo Chất – Tầm dựng Nghiệp",
  tagline: "Kiến tạo giá trị – Công bền",
  shortDescription:
    "Thiên Khôi cung cấp giải pháp kệ kho hàng, hệ thống kho tự động AS/RS, pallet và thiết bị công nghiệp cho nhà máy, kho vận và chuỗi cung ứng.",
  longDescription:
    "Thiên Khôi là doanh nghiệp hoạt động trong lĩnh vực cơ khí và dịch vụ thương mại, cung cấp các giải pháp đa dạng nhằm đáp ứng nhu cầu của khách hàng trong sản xuất, xây dựng và công nghiệp. Với định hướng phát triển dựa trên chất lượng – uy tín – tiến độ – hiệu quả, công ty tập trung cung cấp các sản phẩm và dịch vụ cơ khí như gia công, chế tạo, lắp đặt kết cấu và thiết bị cơ khí, đồng thời phát triển các hoạt động thương mại, cung ứng vật tư, thiết bị và giải pháp kỹ thuật phù hợp với từng dự án.",
  taxCode: "0318314664",
  email: "thienkhoirack@gmail.com",
  hotline: "0939.450.488",
  hotlineHref: "tel:+84939450488",
  address: {
    street: "1014 Phạm Văn Đồng",
    ward: "Phường Hiệp Bình",
    city: "TP. Hồ Chí Minh",
    country: "Việt Nam",
    full: "1014 Phạm Văn Đồng, Phường Hiệp Bình, TP. Hồ Chí Minh, Việt Nam",
  },
  foundedYear: 2024,
} as const;

export const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") ?? "https://thienkhoi.vn";

export const vision = [
  {
    title: "Tư vấn",
    body: "Trở thành đơn vị uy tín hàng đầu trong lĩnh vực Cơ khí & Thương mại.",
  },
  {
    title: "Chất lượng",
    body: "Không ngừng nâng cao chất lượng sản phẩm, dịch vụ và năng lực kỹ thuật.",
  },
  {
    title: "Đồng hành",
    body: "Trở thành đối tác tin cậy, đồng hành cùng khách hàng trong mọi công trình và dự án.",
  },
  {
    title: "Bền vững",
    body: "Xây dựng doanh nghiệp hiệu quả – chuyên nghiệp – bền vững, tạo giá trị lâu dài cho khách hàng và cộng đồng.",
  },
];

export const mission = [
  {
    title: "Kiến tạo",
    body: "Cung cấp các sản phẩm cơ khí và giải pháp thương mại phù hợp, đáp ứng hiệu quả nhu cầu của khách hàng và thị trường.",
  },
  {
    title: "Cam kết",
    body: "Đặt chất lượng, độ chính xác và tính bền vững làm trọng tâm trong từng sản phẩm, dịch vụ và công trình.",
  },
  {
    title: "Phát triển",
    body: "Xây dựng mối quan hệ tin cậy, minh bạch và lâu dài với khách hàng, đối tác và nhà cung cấp, hướng đến lợi ích cùng phát triển.",
  },
  {
    title: "Cải tiến",
    body: "Không ngừng đổi mới công nghệ, phát triển con người và nâng cao năng lực, tạo ra những giá trị lâu dài cho xã hội và cộng đồng.",
  },
];

export const processSteps = [
  {
    step: "01",
    title: "Tư vấn",
    items: [
      "Chẩn đoán kho hàng",
      "Đánh giá sử dụng không gian",
      "Phân tích quy trình làm việc",
    ],
  },
  {
    step: "02",
    title: "Giải pháp",
    items: [
      "Hệ thống lưu trữ thông thường",
      "Hệ thống hậu cần nội bộ",
      "Xe nâng pallet",
      "Thiết bị xử lý vật liệu",
    ],
  },
  {
    step: "03",
    title: "Thiết kế",
    items: [
      "Hệ thống AS/RS – xe vận chuyển",
      "Vận chuyển hàng hóa theo đơn vị",
      "Tích hợp WCS/WMS",
    ],
  },
  {
    step: "04",
    title: "Thực hiện",
    items: ["Lắp đặt cơ khí điện", "Bảo trì phòng ngừa"],
  },
];

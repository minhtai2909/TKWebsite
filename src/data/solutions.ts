export type Solution = {
  slug: string;
  name: string;
  summary: string;
  points: string[];
  relatedProducts: string[];
};

export const solutions: Solution[] = [
  {
    slug: "kho-mat-do-cao",
    name: "Kho mật độ cao",
    summary:
      "Tối đa hóa số vị trí pallet trên cùng một diện tích sàn cho kho lưu trữ số lượng lớn hàng hóa cùng chủng loại.",
    points: [
      "Giảm diện tích dành cho lối đi xe nâng",
      "Khai thác triệt để chiều cao nhà kho",
      "Phù hợp hàng hóa đồng nhất, vòng quay theo lô",
    ],
    relatedProducts: ["ke-drive-in", "ke-double-deep", "ke-shuttle-rack"],
  },
  {
    slug: "kho-tu-dong-hoa",
    name: "Kho tự động hóa",
    summary:
      "Hệ thống lưu trữ và truy xuất tự động tích hợp phần mềm quản lý, giảm phụ thuộc nhân công và tăng độ chính xác.",
    points: [
      "Cần trục xếp và robot xe con thoi vận hành tự động",
      "Tích hợp WMS/WCS/PLC, kiểm soát tồn kho thời gian thực",
      "Giảm sai sót và rủi ro va chạm trong kho",
    ],
    relatedProducts: ["asrs-unit-load", "asrs-shuttle", "asrs-mini-load"],
  },
  {
    slug: "kho-lanh-duoc-pham",
    name: "Kho lạnh & dược phẩm",
    summary:
      "Giải pháp lưu trữ cho môi trường nhiệt độ thấp và ngành hàng yêu cầu kiểm soát chặt chẽ về truy xuất nguồn gốc.",
    points: [
      "Vật liệu và lớp phủ phù hợp môi trường nhiệt độ thấp",
      "Tối ưu thể tích lạnh, giảm chi phí vận hành",
      "Quản lý theo lô và hạn sử dụng",
    ],
    relatedProducts: ["ke-selective", "ke-shuttle-rack", "pallet-kim-loai"],
  },
  {
    slug: "kho-linh-kien-san-xuat",
    name: "Kho linh kiện & sản xuất",
    summary:
      "Lưu trữ vật tư, linh kiện và bán thành phẩm phục vụ dây chuyền sản xuất với tần suất xuất nhập liên tục.",
    points: [
      "Soạn hàng thủ công nhanh, không cần xe nâng",
      "Kết hợp sàn lửng để tăng diện tích sử dụng",
      "Lưu trữ khuôn mẫu và vật liệu dài, quá khổ",
    ],
    relatedProducts: ["ke-trung-tai", "ke-mezzanine", "ke-khuon", "ke-tay-do"],
  },
  {
    slug: "kho-logistics-phan-phoi",
    name: "Kho logistics & phân phối",
    summary:
      "Hệ thống lưu trữ cho trung tâm phân phối nhiều chủng loại hàng hóa, ưu tiên tốc độ soạn hàng và khả năng truy xuất.",
    points: [
      "Tiếp cận trực tiếp 100% vị trí pallet",
      "Tối ưu tuyến đường soạn hàng trong kho",
      "Mở rộng linh hoạt theo tăng trưởng sản lượng",
    ],
    relatedProducts: ["ke-selective", "ke-vna", "pallet-chong"],
  },
  {
    slug: "ban-le-trung-bay",
    name: "Bán lẻ & trưng bày",
    summary:
      "Giải pháp kệ trưng bày cho cửa hàng tạp hóa, siêu thị mini, đại siêu thị và showroom.",
    points: [
      "Tối ưu diện tích trưng bày và lối đi khách hàng",
      "Tháo lắp linh hoạt khi thay đổi bố cục",
      "Hoàn thiện thẩm mỹ cao cho điểm bán",
    ],
    relatedProducts: ["ke-sieu-thi", "ke-trung-bay", "ke-banh-xe"],
  },
];

export function getSolution(slug: string) {
  return solutions.find((s) => s.slug === slug);
}

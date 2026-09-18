export type ProductCategory = {
  slug: string;
  name: string;
  short: string;
  description: string;
};

export type Product = {
  slug: string;
  name: string;
  category: string;
  tagline: string;
  summary: string;
  body: string[];
  features: string[];
  specs: { label: string; value: string }[];
  image: string;
  gallery?: string[];
};

export const categories: ProductCategory[] = [
  {
    slug: "kho-tu-dong",
    name: "Hệ thống kho tự động",
    short: "AS/RS",
    description:
      "Hệ thống lưu trữ và truy xuất tự động tích hợp robot, cần trục xếp và phần mềm WMS/WCS, cho phép kiểm soát hàng hóa theo thời gian thực.",
  },
  {
    slug: "ke-tai-nang",
    name: "Kệ tải nặng",
    short: "Trên 500kg",
    description:
      "Hệ thống kệ pallet công nghiệp chịu tải lớn cho kho hàng, kho lạnh và nhà máy sản xuất, tối ưu mật độ lưu trữ theo từng đặc thù hàng hóa.",
  },
  {
    slug: "ke-trung-nhe",
    name: "Kệ trung tải & trưng bày",
    short: "Dưới 500kg",
    description:
      "Giải pháp lưu trữ và trưng bày cho kho có tần suất xuất nhập cao, cửa hàng bán lẻ, siêu thị và showroom.",
  },
  {
    slug: "pallet",
    name: "Pallet công nghiệp",
    short: "Kim loại & xếp chồng",
    description:
      "Pallet kim loại và pallet xếp chồng chịu tải lớn, độ bền cao, chống gỉ sét và dễ vệ sinh cho kho bãi, logistics và sản xuất.",
  },
  {
    slug: "thiet-bi-phu-tro",
    name: "Thiết bị & vật tư phụ trợ",
    short: "Vận hành kho",
    description:
      "Băng tải, thiết bị an toàn lao động, vật tư đóng gói và nhà xưởng tiện ích phục vụ vận hành kho và nhà máy.",
  },
];

export const products: Product[] = [
  {
    slug: "asrs-unit-load",
    name: "Unit-Load AS/RS",
    category: "kho-tu-dong",
    tagline: "Hệ thống tải nặng / pallet",
    summary:
      "Hệ thống kho tự động chuyên dùng cho kiện hàng lớn, tải trọng nặng đặt trên pallet, sử dụng cần trục Stacker Crane di chuyển dọc các dãy kệ cao.",
    body: [
      "Unit-Load AS/RS là cấu hình kho tự động dành cho các kiện hàng lớn và tải trọng nặng đặt trên pallet. Hệ thống sử dụng cần trục xếp (Stacker Crane) di chuyển dọc theo lối đi giữa các dãy kệ cao, tự động đưa pallet vào vị trí lưu trữ và lấy hàng ra theo lệnh từ phần mềm điều khiển.",
      "Nhờ khai thác chiều cao nhà kho tối đa và loại bỏ lối đi cho xe nâng, Unit-Load AS/RS giúp doanh nghiệp tăng đáng kể mật độ lưu trữ trên cùng một diện tích sàn, đồng thời giảm rủi ro va chạm và sai sót trong quá trình xuất nhập hàng.",
    ],
    features: [
      "Cần trục Stacker Crane vận hành hoàn toàn tự động",
      "Tích hợp WMS/WCS/PLC, kiểm soát tồn kho theo thời gian thực",
      "Khai thác chiều cao kho tối đa, giảm diện tích lối đi",
      "Phù hợp kho lạnh, kho dược phẩm và kho sản xuất liên tục",
    ],
    specs: [
      { label: "Tải trọng pallet", value: "500kg – 3.000kg" },
      { label: "Chiều cao hệ thống", value: "Tối đa 40m" },
      { label: "Điều khiển", value: "WMS / WCS / PLC" },
      { label: "Ứng dụng", value: "Kho pallet tải nặng" },
    ],
    image: "/images/products/asrs-unit-load.jpg",
  },
  {
    slug: "asrs-shuttle",
    name: "Pallet Shuttle System",
    category: "kho-tu-dong",
    tagline: "Hệ thống xe con thoi",
    summary:
      "Sử dụng robot xe con thoi chạy sâu vào trong các tầng kệ để lấy và vận chuyển hàng hóa, tối ưu mật độ lưu trữ và không gian kho.",
    body: [
      "Pallet Shuttle System sử dụng các robot xe con thoi di chuyển sâu vào bên trong rãnh kệ để nhận và trả pallet, thay cho việc xe nâng phải chạy vào lòng kệ. Xe nâng chỉ cần làm việc ở đầu rãnh, giúp rút ngắn quãng đường di chuyển và tăng tốc độ xuất nhập.",
      "Giải pháp này đặc biệt hiệu quả với kho có số lượng lớn hàng hóa cùng chủng loại, cần mật độ lưu trữ cao mà vẫn giữ được tốc độ vận hành nhanh và an toàn cho cả hàng hóa lẫn kết cấu kệ.",
    ],
    features: [
      "Robot xe con thoi chạy sâu trong lòng kệ",
      "Giảm thời gian và quãng đường di chuyển của xe nâng",
      "Tối ưu mật độ lưu trữ, hạn chế va chạm kết cấu kệ",
      "Vận hành theo nguyên tắc FIFO hoặc LIFO tùy cấu hình",
    ],
    specs: [
      { label: "Loại hàng", value: "Pallet đồng nhất, số lượng lớn" },
      { label: "Nguyên tắc", value: "FIFO / LIFO" },
      { label: "Điều khiển", value: "Điều khiển từ xa / WCS" },
      { label: "Ứng dụng", value: "Kho mật độ cao, kho lạnh" },
    ],
    image: "/images/products/asrs-shuttle.jpg",
  },
  {
    slug: "asrs-mini-load",
    name: "Mini-Load AS/RS",
    category: "kho-tu-dong",
    tagline: "Hệ thống tải nhẹ",
    summary:
      "Hệ thống lưu trữ và truy xuất tự động chuyên xử lý hàng hóa kích thước nhỏ, lưu trong thùng nhựa, khay hoặc hộp carton.",
    body: [
      "Mini-Load AS/RS được thiết kế cho các loại hàng hóa kích thước nhỏ và tải trọng nhẹ, thường được lưu trữ trong thùng nhựa (totes), khay (trays) hoặc hộp carton. Hệ thống tự động đưa đúng thùng hàng tới trạm thao tác của nhân viên theo nguyên tắc goods-to-person.",
      "Đây là giải pháp phù hợp cho kho linh kiện, kho dược phẩm, thương mại điện tử và các kho có số lượng mã hàng lớn nhưng khối lượng mỗi mã nhỏ, nơi tốc độ soạn hàng và độ chính xác là yếu tố quyết định.",
    ],
    features: [
      "Lưu trữ theo thùng nhựa, khay hoặc hộp carton",
      "Nguyên tắc goods-to-person, giảm thời gian đi lại của nhân viên",
      "Độ chính xác cao khi soạn hàng số lượng mã lớn",
      "Phù hợp kho linh kiện, dược phẩm và thương mại điện tử",
    ],
    specs: [
      { label: "Loại hàng", value: "Tote, khay, hộp carton" },
      { label: "Tải trọng", value: "Hàng nhẹ, kích thước nhỏ" },
      { label: "Điều khiển", value: "WMS / WCS" },
      { label: "Ứng dụng", value: "Kho linh kiện, e-commerce" },
    ],
    image: "/images/products/asrs-mini-load.jpg",
  },
  {
    slug: "ke-selective",
    name: "Kệ Selective",
    category: "ke-tai-nang",
    tagline: "Kệ pallet tiêu chuẩn",
    summary:
      "Hệ thống kệ chứa hàng tải trọng nặng phổ biến nhất hiện nay, cho phép xe nâng tiếp cận trực tiếp 100% pallet mà không cần di chuyển pallet khác.",
    body: [
      "Kệ Selective là hệ thống kệ pallet phổ biến nhất trong các kho hàng công nghiệp. Ưu điểm lớn nhất của hệ thống là khả năng tiếp cận trực tiếp 100% vị trí pallet: xe nâng có thể lấy bất kỳ pallet nào mà không cần di chuyển các pallet khác.",
      "Nhờ tính linh hoạt này, kệ Selective phù hợp với kho có nhiều chủng loại hàng hóa, tần suất xuất nhập cao và yêu cầu quản lý theo nguyên tắc FIFO. Hệ thống cũng dễ dàng điều chỉnh độ cao tầng kệ khi đặc thù hàng hóa thay đổi.",
    ],
    features: [
      "Tiếp cận trực tiếp 100% pallet trên kệ",
      "Điều chỉnh linh hoạt độ cao từng tầng theo loại hàng",
      "Phù hợp kho đa chủng loại, tần suất xuất nhập cao",
      "Thép sơn tĩnh điện chống gỉ sét, độ bền cao",
    ],
    specs: [
      { label: "Khả năng tiếp cận", value: "100% pallet" },
      { label: "Nguyên tắc", value: "FIFO" },
      { label: "Bề mặt", value: "Thép sơn tĩnh điện" },
      { label: "Ứng dụng", value: "Kho đa chủng loại hàng hóa" },
    ],
    image: "/images/products/ke-selective.jpg",
  },
  {
    slug: "ke-shuttle-rack",
    name: "Kệ Shuttle Rack",
    category: "ke-tai-nang",
    tagline: "Radio Shuttle",
    summary:
      "Hệ thống kệ lưu trữ bán tự động mật độ cao, sử dụng robot tự hành Shuttle Car di chuyển và bốc dỡ pallet bên trong rãnh kệ.",
    body: [
      "Kệ Shuttle Rack (hay kệ Radio Shuttle) là hệ thống lưu trữ mật độ cao sử dụng robot tự hành Shuttle Car để di chuyển, bốc dỡ pallet bên trong rãnh kệ. Xe nâng chỉ đặt robot và pallet ở đầu rãnh, phần còn lại do robot đảm nhiệm.",
      "Giải pháp này kết hợp được mật độ lưu trữ cao của kệ Drive In với tốc độ và độ an toàn của hệ thống tự động, đồng thời giảm đáng kể rủi ro xe nâng va chạm vào kết cấu kệ.",
    ],
    features: [
      "Robot Shuttle Car tự hành trong rãnh kệ",
      "Tối ưu không gian lưu trữ tối đa",
      "Tốc độ vận hành nhanh chóng",
      "Giảm rủi ro va chạm giữa xe nâng và kết cấu kệ",
    ],
    specs: [
      { label: "Mức tự động", value: "Bán tự động" },
      { label: "Nguyên tắc", value: "FIFO / LIFO" },
      { label: "Điều khiển", value: "Điều khiển từ xa" },
      { label: "Ứng dụng", value: "Kho mật độ cao, kho lạnh" },
    ],
    image: "/images/products/ke-shuttle-rack.jpg",
  },
  {
    slug: "ke-double-deep",
    name: "Kệ Double Deep",
    category: "ke-tai-nang",
    tagline: "Kệ pallet hai chiều sâu",
    summary:
      "Giải pháp xếp hai pallet theo chiều sâu, tăng mật độ lưu trữ cho kho công nghiệp quy mô vừa và lớn với hàng hóa tải trọng nặng.",
    body: [
      "Kệ Double Deep bố trí hai dãy kệ liền nhau, cho phép lưu trữ hai pallet theo chiều sâu tại mỗi vị trí. So với kệ Selective truyền thống, hệ thống giảm số lượng lối đi và qua đó tăng đáng kể mật độ lưu trữ trên cùng diện tích sàn.",
      "Hệ thống được ứng dụng phổ biến trong các kho hàng công nghiệp quy mô vừa đến lớn, đặc biệt là những nơi cần tối ưu không gian lưu trữ hàng hóa tải trọng nặng như kho hàng, kho lạnh và kho logistics.",
    ],
    features: [
      "Lưu trữ hai pallet theo chiều sâu tại mỗi vị trí",
      "Giảm số lượng lối đi, tăng mật độ lưu trữ",
      "Sử dụng xe nâng càng vươn chuyên dụng",
      "Phù hợp kho hàng, kho lạnh và kho logistics",
    ],
    specs: [
      { label: "Chiều sâu", value: "2 pallet" },
      { label: "Nguyên tắc", value: "LIFO" },
      { label: "Thiết bị", value: "Xe nâng càng vươn" },
      { label: "Ứng dụng", value: "Kho công nghiệp vừa và lớn" },
    ],
    image: "/images/products/ke-double-deep.jpg",
  },
  {
    slug: "ke-drive-in",
    name: "Kệ Drive In",
    category: "ke-tai-nang",
    tagline: "Kệ mật độ cao",
    summary:
      "Hệ thống kệ cho phép xe nâng di chuyển trực tiếp vào lòng kệ để xuất nhập pallet, tối đa hóa diện tích lưu trữ 70–80% so với kệ Selective.",
    body: [
      "Kệ Drive In được thiết kế theo dạng làn đường (lane/tunnel), trong đó xe nâng di chuyển trực tiếp vào bên trong lòng kệ để xuất nhập pallet. Hàng hóa được đặt trên các thanh ray dẫn hướng chạy dọc theo chiều sâu của kệ.",
      "Nhờ giảm tối đa diện tích dành cho lối đi, hệ thống giúp tăng mật độ lưu trữ lên 70–80% so với kệ Selective truyền thống. Đây là lựa chọn phù hợp cho kho lưu trữ số lượng lớn hàng hóa cùng chủng loại.",
    ],
    features: [
      "Xe nâng di chuyển trực tiếp vào lòng kệ",
      "Thanh ray dẫn hướng chạy dọc chiều sâu kệ",
      "Tăng mật độ lưu trữ 70–80% so với kệ Selective",
      "Phù hợp hàng hóa cùng chủng loại, số lượng lớn",
    ],
    specs: [
      { label: "Mật độ lưu trữ", value: "Tăng 70–80%" },
      { label: "Nguyên tắc", value: "LIFO" },
      { label: "Kết cấu", value: "Dạng làn đường (lane/tunnel)" },
      { label: "Ứng dụng", value: "Kho đồng nhất chủng loại" },
    ],
    image: "/images/products/ke-drive-in.jpg",
  },
  {
    slug: "ke-vna",
    name: "Hệ thống kệ VNA",
    category: "ke-tai-nang",
    tagline: "Very Narrow Aisle",
    summary:
      "Kệ chứa hàng tải trọng nặng với lối đi siêu hẹp chỉ 1,5m – 2,2m, tăng thêm 40–50% sức chứa so với kệ Selective thông thường.",
    body: [
      "Kệ VNA (Very Narrow Aisle) là hệ thống kệ tải nặng được thiết kế với lối đi siêu hẹp, chỉ khoảng 1,5m đến 2,2m, thay vì 3,5m – 4m như kệ Selective thông thường. Hệ thống sử dụng xe nâng chuyên dụng di chuyển trong lối đi hẹp với hệ thống dẫn hướng.",
      "Việc thu hẹp khoảng cách giữa các dãy kệ giúp tăng thêm 40–50% sức chứa hàng hóa, đồng thời hệ thống vẫn khai thác được chiều cao lưu trữ lên tới 12–17m mà vẫn giữ khả năng tiếp cận trực tiếp từng pallet.",
    ],
    features: [
      "Lối đi siêu hẹp chỉ 1,5m – 2,2m",
      "Tăng 40–50% sức chứa so với kệ Selective",
      "Khai thác chiều cao lưu trữ 12–17m",
      "Vẫn giữ khả năng tiếp cận trực tiếp từng pallet",
    ],
    specs: [
      { label: "Lối đi", value: "1,5m – 2,2m" },
      { label: "Chiều cao lưu trữ", value: "12m – 17m" },
      { label: "Sức chứa", value: "Tăng 40–50%" },
      { label: "Thiết bị", value: "Xe nâng VNA chuyên dụng" },
    ],
    image: "/images/products/ke-vna.jpg",
  },
  {
    slug: "ke-khuon",
    name: "Kệ khuôn",
    category: "ke-tai-nang",
    tagline: "Mold Rack",
    summary:
      "Hệ thống kệ chuyên dụng dạng ngăn kéo để lưu trữ khuôn mẫu nặng trong các nhà máy cơ khí, chế tạo và sản xuất công nghiệp.",
    body: [
      "Kệ khuôn (Mold Rack) là hệ thống kệ chứa hàng chuyên dụng được thiết kế đặc biệt để lưu trữ các loại khuôn mẫu nặng như khuôn ép nhựa, khuôn dập và khuôn đúc kim loại trong các nhà máy cơ khí, chế tạo và sản xuất công nghiệp.",
      "Kết cấu dạng ngăn kéo gồm khung cột chắc chắn và các tầng kệ thiết kế dạng mâm trượt hoặc ngăn kéo độc lập. Mỗi ngăn kéo có thể kéo ra từ 70% đến 100% chiều dài, giúp cầu trục tiếp cận và nâng khuôn dễ dàng, an toàn.",
    ],
    features: [
      "Kết cấu dạng ngăn kéo (drawer type)",
      "Ngăn kéo mở ra 70% – 100% chiều dài",
      "Khung cột chịu lực chắc chắn cho khuôn tải nặng",
      "Thuận tiện cho cầu trục tiếp cận và nâng khuôn",
    ],
    specs: [
      { label: "Kết cấu", value: "Ngăn kéo / mâm trượt" },
      { label: "Độ mở ngăn", value: "70% – 100%" },
      { label: "Loại hàng", value: "Khuôn ép nhựa, khuôn dập, khuôn đúc" },
      { label: "Ứng dụng", value: "Nhà máy cơ khí, chế tạo" },
    ],
    image: "/images/products/ke-khuon.jpg",
  },
  {
    slug: "ke-mezzanine",
    name: "Hệ thống kệ sàn Mezzanine",
    category: "ke-tai-nang",
    tagline: "Sàn lửng thép",
    summary:
      "Giải pháp thiết kế thêm một hoặc nhiều tầng lửng bằng kết cấu thép bên trong nhà kho hoặc nhà xưởng, nhân đôi diện tích sử dụng.",
    body: [
      "Hệ thống kệ sàn Mezzanine (sàn lửng thép) là giải pháp thiết kế thêm một hoặc nhiều tầng lửng bằng kết cấu thép bên trong nhà kho hoặc nhà xưởng hiện hữu, giúp nhân đôi hoặc nhân ba diện tích sử dụng mà không cần mở rộng mặt bằng.",
      "Hệ thống có thể tháo lắp, di dời hoặc thay đổi kích thước dễ dàng khi cần thiết, phù hợp với doanh nghiệp thuê kho hoặc có kế hoạch mở rộng, thay đổi công năng trong tương lai.",
    ],
    features: [
      "Tăng diện tích sử dụng mà không mở rộng mặt bằng",
      "Kết cấu thép chịu lực, thiết kế theo tải trọng yêu cầu",
      "Tháo lắp, di dời và thay đổi kích thước dễ dàng",
      "Kết hợp linh hoạt với hệ thống kệ bên dưới",
    ],
    specs: [
      { label: "Số tầng", value: "1 – 3 tầng lửng" },
      { label: "Kết cấu", value: "Thép hình chịu lực" },
      { label: "Khả năng", value: "Tháo lắp và di dời" },
      { label: "Ứng dụng", value: "Nhà kho, nhà xưởng hiện hữu" },
    ],
    image: "/images/products/ke-mezzanine.jpg",
  },
  {
    slug: "ke-tay-do",
    name: "Kệ tay đỡ",
    category: "ke-tai-nang",
    tagline: "Cantilever Racking",
    summary:
      "Hệ thống kệ không có cột trụ mặt tiền phía trước, tối ưu không gian lưu trữ hàng hóa cồng kềnh, chiều dài phi tiêu chuẩn.",
    body: [
      "Kệ tay đỡ (Cantilever Racking) là hệ thống kệ chứa hàng chuyên dụng được thiết kế không có cột trụ ở mặt tiền phía trước. Nhờ đó, hệ thống tối ưu hóa không gian để lưu trữ các loại hàng hóa cồng kềnh, có chiều dài phi tiêu chuẩn hoặc kích thước quá khổ.",
      "Đây là giải pháp phù hợp cho thép ống, thanh nhôm, gỗ tấm, ống nhựa và các vật liệu dài khác mà kệ pallet thông thường không thể lưu trữ hiệu quả.",
    ],
    features: [
      "Không có cột trụ mặt tiền, dễ dàng xếp dỡ hàng dài",
      "Mỗi tay đỡ chịu tải từ 500kg đến 2.500kg",
      "Điều chỉnh khoảng cách tay đỡ theo loại vật liệu",
      "Phù hợp thép ống, thanh nhôm, gỗ tấm, ống nhựa",
    ],
    specs: [
      { label: "Tải trọng mỗi tay đỡ", value: "500kg – 2.500kg" },
      { label: "Kết cấu", value: "Không cột trụ mặt tiền" },
      { label: "Loại hàng", value: "Hàng dài, quá khổ, cồng kềnh" },
      { label: "Ứng dụng", value: "Kho thép, gỗ, vật liệu xây dựng" },
    ],
    image: "/images/products/ke-tay-do.jpg",
  },
  {
    slug: "ke-trung-tai",
    name: "Kệ trung tải",
    category: "ke-trung-nhe",
    tagline: "Medium-Duty Racking",
    summary:
      "Hệ thống kệ chứa hàng tải trọng trung bình, thiết kế cho việc bốc dỡ thủ công bằng tay hoặc xe đẩy hỗ trợ mà không cần xe nâng.",
    body: [
      "Kệ trung tải (Medium-Duty Racking) là hệ thống kệ chứa hàng tải trọng trung bình, được thiết kế chuyên dụng cho việc bốc dỡ hàng hóa thủ công bằng tay hoặc dùng xe đẩy hỗ trợ mà không cần đến xe nâng.",
      "Đây là giải pháp lưu trữ tối ưu cho các kho hàng có tần suất xuất nhập liên tục nhưng trọng lượng hàng hóa không quá nặng, chẳng hạn kho linh kiện, kho vật tư, kho dược phẩm và kho phụ tùng.",
    ],
    features: [
      "Bốc dỡ thủ công, không cần xe nâng",
      "Phù hợp kho có tần suất xuất nhập liên tục",
      "Điều chỉnh tầng kệ linh hoạt theo kích thước hàng",
      "Lắp đặt nhanh, dễ dàng mở rộng khi cần",
    ],
    specs: [
      { label: "Tải trọng", value: "200kg – 500kg mỗi tầng" },
      { label: "Thao tác", value: "Thủ công / xe đẩy" },
      { label: "Bề mặt", value: "Thép sơn tĩnh điện" },
      { label: "Ứng dụng", value: "Kho linh kiện, vật tư, dược phẩm" },
    ],
    image: "/images/products/ke-trung-tai.jpg",
  },
  {
    slug: "ke-banh-xe",
    name: "Kệ bánh xe",
    category: "ke-trung-nhe",
    tagline: "Kệ lốp xe chuyên dụng",
    summary:
      "Hệ thống kệ chuyên dụng để lưu trữ, trưng bày và sắp xếp các loại lốp xe ô tô, xe tải hoặc xe máy một cách khoa học.",
    body: [
      "Kệ bánh xe là hệ thống kệ chuyên dụng dùng để lưu trữ, trưng bày và sắp xếp các loại lốp xe ô tô, xe tải hoặc xe máy một cách khoa học, giúp bảo vệ lốp khỏi biến dạng và thuận tiện khi kiểm đếm.",
      "Dạng lắp ghép cho phép lốp được xếp đứng sát cạnh nhau trên các tầng kệ, phù hợp cho kho lưu trữ số lượng lớn cũng như khu vực trưng bày tại đại lý và gara.",
    ],
    features: [
      "Lốp xếp đứng sát cạnh nhau trên từng tầng kệ",
      "Bảo vệ lốp khỏi biến dạng khi lưu trữ dài ngày",
      "Dạng lắp ghép, dễ dàng điều chỉnh và mở rộng",
      "Dùng cho cả kho lưu trữ và khu trưng bày",
    ],
    specs: [
      { label: "Kiểu lắp", value: "Lắp ghép, lốp xếp đứng" },
      { label: "Loại hàng", value: "Lốp ô tô, xe tải, xe máy" },
      { label: "Bề mặt", value: "Thép sơn tĩnh điện" },
      { label: "Ứng dụng", value: "Kho lốp, đại lý, gara" },
    ],
    image: "/images/products/ke-banh-xe.jpg",
  },
  {
    slug: "ke-sieu-thi",
    name: "Kệ siêu thị",
    category: "ke-trung-nhe",
    tagline: "Kệ bán lẻ",
    summary:
      "Giải pháp tối ưu hóa diện tích trưng bày, sắp xếp hàng hóa khoa học và tăng tính thẩm mỹ cho cửa hàng tạp hóa, siêu thị mini và đại siêu thị.",
    body: [
      "Kệ siêu thị là giải pháp hàng đầu để tối ưu hóa diện tích trưng bày, sắp xếp hàng hóa khoa học và tăng tính thẩm mỹ cho các cửa hàng tạp hóa, siêu thị mini hay đại siêu thị.",
      "Các loại kệ này được làm bằng khung sắt sơn tĩnh điện chống gỉ sét, có khả năng tháo lắp linh hoạt và chịu tải trung bình từ 40 đến 70kg mỗi mâm tầng, đáp ứng hầu hết nhu cầu trưng bày hàng tiêu dùng.",
    ],
    features: [
      "Khung sắt sơn tĩnh điện chống gỉ sét",
      "Tháo lắp linh hoạt, dễ thay đổi bố cục cửa hàng",
      "Đa dạng kiểu dáng: kệ đơn, kệ đôi, kệ góc",
      "Tăng tính thẩm mỹ và hiệu quả trưng bày",
    ],
    specs: [
      { label: "Tải trọng", value: "40kg – 70kg mỗi mâm tầng" },
      { label: "Bề mặt", value: "Sơn tĩnh điện" },
      { label: "Kiểu dáng", value: "Kệ đơn, kệ đôi, kệ góc" },
      { label: "Ứng dụng", value: "Tạp hóa, siêu thị mini, đại siêu thị" },
    ],
    image: "/images/products/ke-sieu-thi.jpg",
  },
  {
    slug: "ke-trung-bay",
    name: "Kệ trưng bày",
    category: "ke-trung-nhe",
    tagline: "Display Rack",
    summary:
      "Hệ thống giá đỡ được thiết kế chuyên biệt để sắp xếp, trình bày và bảo quản hàng hóa tại cửa hàng, showroom hoặc hội chợ triển lãm.",
    body: [
      "Kệ trưng bày (Display Rack) là hệ thống giá đỡ được thiết kế chuyên biệt để sắp xếp, trình bày và bảo quản hàng hóa tại các điểm bán lẻ, cửa hàng, siêu thị, showroom hoặc hội chợ triển lãm.",
      "Thiết kế chú trọng đến tầm nhìn và khả năng tiếp cận của khách hàng, giúp sản phẩm nổi bật, dễ lựa chọn và góp phần trực tiếp vào hiệu quả bán hàng tại điểm bán.",
    ],
    features: [
      "Thiết kế tối ưu tầm nhìn và khả năng tiếp cận sản phẩm",
      "Đa dạng kiểu dáng theo ngành hàng và không gian",
      "Dễ di chuyển, phù hợp hội chợ và sự kiện",
      "Hoàn thiện thẩm mỹ cao cho showroom và điểm bán",
    ],
    specs: [
      { label: "Kiểu dáng", value: "Tùy chỉnh theo ngành hàng" },
      { label: "Bề mặt", value: "Sơn tĩnh điện / mạ" },
      { label: "Tính cơ động", value: "Dễ tháo lắp, di chuyển" },
      { label: "Ứng dụng", value: "Cửa hàng, showroom, hội chợ" },
    ],
    image: "/images/products/ke-trung-bay.jpg",
  },
  {
    slug: "pallet-kim-loai",
    name: "Pallet kim loại",
    category: "pallet",
    tagline: "Chịu tải vượt trội",
    summary:
      "Lựa chọn tối ưu cho kho bãi, logistics và sản xuất công nghiệp nhờ khả năng chịu tải vượt trội, độ bền cao, chống gỉ sét và dễ vệ sinh.",
    body: [
      "Pallet kim loại là lựa chọn tối ưu cho các doanh nghiệp trong nhiều lĩnh vực nhờ khả năng chịu tải vượt trội, độ bền cao, chống gỉ sét và dễ vệ sinh. So với pallet gỗ, pallet kim loại có tuổi thọ dài hơn nhiều lần và không bị mối mọt hay ẩm mốc.",
      "Sản phẩm ngày càng được ưa chuộng trong kho bãi, logistics và sản xuất công nghiệp, đặc biệt tại những môi trường yêu cầu vệ sinh nghiêm ngặt như kho lạnh, kho thực phẩm và kho dược phẩm.",
    ],
    features: [
      "Khả năng chịu tải lớn, độ bền và tuổi thọ cao",
      "Chống gỉ sét, không mối mọt hay ẩm mốc",
      "Dễ vệ sinh, phù hợp môi trường yêu cầu khắt khe",
      "Kích thước sản xuất theo yêu cầu thực tế",
    ],
    specs: [
      { label: "Vật liệu", value: "Thép / inox" },
      { label: "Bề mặt", value: "Sơn tĩnh điện / mạ kẽm" },
      { label: "Tuổi thọ", value: "Cao hơn nhiều lần pallet gỗ" },
      { label: "Ứng dụng", value: "Kho lạnh, thực phẩm, dược phẩm" },
    ],
    image: "/images/products/pallet-kim-loai.jpg",
  },
  {
    slug: "pallet-chong",
    name: "Pallet chồng / pallet xếp",
    category: "pallet",
    tagline: "Stackable Pallet",
    summary:
      "Pallet có cấu trúc chân hoặc khung vững chắc, cho phép xếp chồng trực tiếp lên nhau theo chiều dọc một cách an toàn.",
    body: [
      "Pallet chồng (stackable pallet) là loại pallet được thiết kế với cấu trúc chân hoặc khung vững chắc, cho phép các pallet có thể xếp chồng trực tiếp lên nhau theo chiều dọc một cách an toàn, kể cả khi đã chất hàng.",
      "Việc sắp xếp kích thước hàng vừa khít với bề mặt pallet giúp tránh va đập làm rách bao bì hoặc hỏng hàng hóa trong quá trình lưu trữ và vận chuyển, đồng thời tiết kiệm đáng kể diện tích khi pallet rỗng.",
    ],
    features: [
      "Cấu trúc chân/khung vững chắc, xếp chồng an toàn",
      "Tiết kiệm diện tích lưu trữ khi pallet rỗng",
      "Hàng vừa khít bề mặt, tránh va đập rách bao bì",
      "Phù hợp vận chuyển và lưu kho dài ngày",
    ],
    specs: [
      { label: "Khả năng", value: "Xếp chồng trực tiếp" },
      { label: "Kết cấu", value: "Chân / khung vững chắc" },
      { label: "Lợi ích", value: "Tiết kiệm diện tích khi rỗng" },
      { label: "Ứng dụng", value: "Kho bãi, logistics, vận chuyển" },
    ],
    image: "/images/products/pallet-chong.jpg",
  },
  {
    slug: "bang-tai-cao-su",
    name: "Băng tải cao su",
    category: "thiet-bi-phu-tro",
    tagline: "Vận chuyển vật liệu",
    summary:
      "Băng tải cao su trơn, gân V và lòng máng phục vụ vận chuyển hàng hóa và vật liệu rời theo phương ngang hoặc độ dốc lớn.",
    body: [
      "Thiên Khôi cung cấp đầy đủ các dòng băng tải cao su phục vụ vận chuyển hàng hóa và vật liệu trong nhà máy, mỏ và công trình. Băng tải cao su trơn có bề mặt phẳng, độ giãn thấp, chuyên dùng vận chuyển hàng hóa thông thường theo phương ngang hoặc độ dốc nhẹ.",
      "Băng tải cao su gân V có bề mặt đúc nổi các đường gân chữ V giúp tăng độ bám và chống trượt, phù hợp chuyển vật liệu rời như cát, sỏi, than lên độ dốc lớn. Băng tải lòng máng dùng hệ thống con lăn ép tạo thành hình chữ V hoặc U để ôm trọn vật liệu, tránh rơi vãi.",
    ],
    features: [
      "Băng tải trơn cho hàng hóa thông thường",
      "Băng tải gân V tăng độ bám, chống trượt trên độ dốc lớn",
      "Băng tải lòng máng ôm trọn vật liệu, tránh rơi vãi",
      "Độ bền cao, phù hợp vận hành liên tục",
    ],
    specs: [
      { label: "Chủng loại", value: "Trơn / gân V / lòng máng" },
      { label: "Vật liệu", value: "Cao su chịu mài mòn" },
      { label: "Vật liệu vận chuyển", value: "Hàng kiện, cát, sỏi, than" },
      { label: "Ứng dụng", value: "Nhà máy, mỏ, công trình" },
    ],
    image: "/images/products/bang-tai-cao-su.jpg",
  },
  {
    slug: "cong-cu-bao-ho",
    name: "Thiết bị an toàn kho xưởng",
    category: "thiet-bi-phu-tro",
    tagline: "Lan can & hàng rào",
    summary:
      "Lan can bảo vệ an toàn màu vàng – đen và hàng rào di động, phân tách rõ ràng khu vực lối đi bộ và hành lang xe nâng trong nhà máy.",
    body: [
      "An toàn lao động và bảo vệ tài sản nhà xưởng luôn là ưu tiên hàng đầu của mọi doanh nghiệp sản xuất và logistics. Thiên Khôi cung cấp và lắp đặt hệ thống lan can bảo vệ an toàn (safety guardrail) màu vàng – đen nổi bật, phân tách rõ ràng khu vực lối đi bộ và hành lang xe nâng hoạt động.",
      "Bên cạnh đó, hàng rào có bánh xe là loại hàng rào di động gắn bánh xe ở chân, cho phép di chuyển và lắp đặt linh hoạt mà không cần chân cố định, thường dùng trong công trình, sự kiện hoặc khu vực cần phân luồng tạm thời.",
    ],
    features: [
      "Lan can an toàn màu vàng – đen, nhận diện rõ ràng",
      "Phân tách lối đi bộ và hành lang xe nâng",
      "Hàng rào di động gắn bánh xe, lắp đặt linh hoạt",
      "Bảo vệ kết cấu kệ và thiết bị khỏi va chạm",
    ],
    specs: [
      { label: "Màu sắc", value: "Vàng – đen cảnh báo" },
      { label: "Kết cấu", value: "Thép chịu va đập" },
      { label: "Lắp đặt", value: "Cố định / di động có bánh xe" },
      { label: "Ứng dụng", value: "Nhà máy, kho vận, công trình" },
    ],
    image: "/images/products/cong-cu-bao-ho.jpg",
  },
  {
    slug: "xe-thang",
    name: "Xe thang di động",
    category: "thiet-bi-phu-tro",
    tagline: "Thang leo cao công nghiệp",
    summary:
      "Thiết bị hỗ trợ leo cao chuyên dụng trong công nghiệp, tích hợp hệ thống bánh xe giúp di chuyển linh hoạt giữa các vị trí.",
    body: [
      "Xe thang di động là thiết bị hỗ trợ leo cao chuyên dụng trong công nghiệp, được tích hợp hệ thống bánh xe bên dưới giúp di chuyển linh hoạt từ vị trí này sang vị trí khác một cách dễ dàng.",
      "Sản phẩm đảm bảo an toàn cho người sử dụng khi bốc dỡ hàng hóa trên kệ cao hoặc làm việc trên cao, với tay vịn, bậc chống trượt và cơ cấu khóa bánh xe khi đứng yên.",
    ],
    features: [
      "Bánh xe di chuyển linh hoạt, có khóa khi sử dụng",
      "Tay vịn và bậc thang chống trượt",
      "Đảm bảo an toàn khi bốc dỡ hàng trên kệ cao",
      "Nhiều chiều cao theo nhu cầu thực tế",
    ],
    specs: [
      { label: "Kết cấu", value: "Thép sơn tĩnh điện" },
      { label: "Di chuyển", value: "Bánh xe có khóa" },
      { label: "An toàn", value: "Tay vịn, bậc chống trượt" },
      { label: "Ứng dụng", value: "Kho hàng, nhà xưởng" },
    ],
    image: "/images/products/xe-thang.jpg",
  },
  {
    slug: "nha-xuong",
    name: "Nhà xưởng – nhà tiện ích",
    category: "thiet-bi-phu-tro",
    tagline: "Kết cấu thép",
    summary:
      "Thiết kế và thi công nhà xưởng, nhà tiện ích kết cấu thép sơn tĩnh điện, tối ưu không gian với thiết kế nhiều tầng linh hoạt.",
    body: [
      "Thiên Khôi thiết kế và thi công nhà xưởng, nhà tiện ích với kết cấu thép sơn tĩnh điện chống gỉ sét, chịu tải trọng lớn và sử dụng bền bỉ theo thời gian.",
      "Thiết kế nhiều tầng linh hoạt giúp tối ưu không gian, trưng bày được lượng lớn hàng hóa mà vẫn gọn gàng, thông thoáng. Mẫu mã đa dạng, phù hợp cho mọi mô hình từ cửa hàng tạp hóa nhỏ, cửa hàng tiện lợi đến các đại siêu thị lớn.",
    ],
    features: [
      "Kết cấu thép sơn tĩnh điện chống gỉ sét",
      "Thiết kế nhiều tầng linh hoạt, tối ưu không gian",
      "Chịu tải trọng lớn, độ bền cao theo thời gian",
      "Mẫu mã đa dạng theo quy mô từng mô hình",
    ],
    specs: [
      { label: "Kết cấu", value: "Thép sơn tĩnh điện" },
      { label: "Thiết kế", value: "Nhiều tầng linh hoạt" },
      { label: "Độ bền", value: "Chống gỉ sét, chịu lực tốt" },
      { label: "Ứng dụng", value: "Cửa hàng, siêu thị, nhà xưởng" },
    ],
    image: "/images/products/nha-xuong.jpg",
  },
  {
    slug: "mang-pe-oc-vit",
    name: "Màng PE & ốc vít bulong",
    category: "thiet-bi-phu-tro",
    tagline: "Vật tư đóng gói & liên kết",
    summary:
      "Màng PE công nghiệp cố định hàng hóa trên pallet cùng hệ thống ốc vít, bulong ghép nối và cố định chi tiết kết cấu.",
    body: [
      "Màng PE công nghiệp dùng để cố định hàng hóa trên pallet, bảo vệ sản phẩm khỏi bụi bẩn, ẩm ướt, trầy xước và giảm thiểu rủi ro va đập trong quá trình vận chuyển.",
      "Ốc vít và bulong có công dụng cốt lõi là ghép nối, liên kết và cố định các chi tiết rời rạc với nhau để tạo thành một khối thống nhất hoặc một hệ thống hoàn chỉnh, đảm bảo độ an toàn cho toàn bộ kết cấu kệ.",
    ],
    features: [
      "Màng PE cố định hàng hóa, chống bụi và ẩm ướt",
      "Giảm rủi ro va đập, trầy xước khi vận chuyển",
      "Ốc vít, bulong liên kết chắc chắn kết cấu kệ",
      "Đa dạng quy cách theo nhu cầu sử dụng",
    ],
    specs: [
      { label: "Màng PE", value: "Nhiều khổ và độ dày" },
      { label: "Bulong", value: "Đa dạng quy cách" },
      { label: "Công dụng", value: "Đóng gói và liên kết kết cấu" },
      { label: "Ứng dụng", value: "Kho vận, lắp đặt kệ" },
    ],
    image: "/images/products/mang-pe-oc-vit.jpg",
  },
  {
    slug: "bang-keo-cong-nghiep",
    name: "Băng keo công nghiệp",
    category: "thiet-bi-phu-tro",
    tagline: "Đa dạng chủng loại",
    summary:
      "Cung cấp đầy đủ các dòng băng keo phục vụ sản xuất: băng keo dán thùng, hai mặt cường lực, băng keo vải, giấy, sợi thủy tinh và nhôm cách nhiệt.",
    body: [
      "Thiên Khôi cung cấp đầy đủ các dòng băng keo công nghiệp phục vụ sản xuất và đóng gói, bao gồm băng keo dán thùng OPP (trong, đục, màu), băng keo hai mặt cường lực (3M, xốp EVA, mút PE) và băng keo vải, băng keo giấy, băng keo sợi thủy tinh chịu lực.",
      "Ngoài ra còn có băng keo điện, băng keo chống trượt, băng keo nhôm cách nhiệt và băng keo dán sàn nhà xưởng bền, đẹp với màu sắc đa dạng phục vụ phân luồng và cảnh báo trong nhà máy.",
    ],
    features: [
      "Băng keo dán thùng OPP: trong, đục, nhiều màu",
      "Băng keo hai mặt cường lực 3M, xốp EVA, mút PE",
      "Băng keo vải, giấy, sợi thủy tinh chịu lực",
      "Băng keo điện, chống trượt, nhôm cách nhiệt, dán sàn",
    ],
    specs: [
      { label: "Dán thùng", value: "OPP trong / đục / màu" },
      { label: "Hai mặt", value: "3M, xốp EVA, mút PE" },
      { label: "Chịu lực", value: "Vải, giấy, sợi thủy tinh" },
      { label: "Chuyên dụng", value: "Điện, chống trượt, cách nhiệt" },
    ],
    image: "/images/products/bang-keo-cong-nghiep.jpg",
  },
];

const galleryExtras: Record<string, number> = {
  "asrs-unit-load": 3,
  "asrs-shuttle": 2,
  "ke-selective": 3,
  "ke-shuttle-rack": 2,
  "ke-double-deep": 2,
  "ke-drive-in": 2,
  "ke-mezzanine": 2,
  "ke-trung-tai": 2,
  "ke-sieu-thi": 2,
  "pallet-kim-loai": 2,
  "pallet-chong": 2,
  "mang-pe-oc-vit": 2,
  "cong-cu-bao-ho": 2,
  "xe-thang": 2,
  "nha-xuong": 2,
  "bang-tai-cao-su": 2,
};

export function getGallery(slug: string) {
  const total = galleryExtras[slug] ?? 1;
  return Array.from({ length: total }, (_, i) =>
    i === 0
      ? `/images/products/${slug}.jpg`
      : `/images/products/${slug}-${i + 1}.jpg`,
  );
}

export function getProduct(slug: string) {
  return products.find((p) => p.slug === slug);
}

export function getProductsByCategory(categorySlug: string) {
  return products.filter((p) => p.category === categorySlug);
}

export function getCategory(slug: string) {
  return categories.find((c) => c.slug === slug);
}

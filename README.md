# Website giới thiệu doanh nghiệp Thiên Khôi

Website giới thiệu công ty Thiên Khôi — kệ kho hàng, hệ thống kho tự động AS/RS,
pallet và thiết bị công nghiệp. Xây dựng bằng Next.js App Router, TypeScript và
Tailwind CSS v4, tối ưu cho SEO tiếng Việt.

## Chạy dự án

```bash
npm install
npm run dev
```

Mở http://localhost:3000.

```bash
npm run build   # build production
npm run start   # chạy bản production
npm run lint    # kiểm tra lint
```

## Biến môi trường

Sao chép `.env.example` thành `.env.local` và điền giá trị:

| Biến | Bắt buộc | Mô tả |
| --- | --- | --- |
| `NEXT_PUBLIC_SITE_URL` | Có | Tên miền thật. Dùng cho canonical, sitemap, robots, Open Graph. Mặc định `https://thienkhoi.vn`. |
| `CONTACT_WEBHOOK_URL` | Không | Endpoint nhận dữ liệu biểu mẫu liên hệ. Bỏ trống thì form báo người dùng gọi hotline. |

## Cấu trúc

```
src/
  app/
    page.tsx              Trang chủ
    ve-chung-toi/         Giới thiệu, tầm nhìn, sứ mệnh, quy trình
    san-pham/             Danh sách sản phẩm + lọc theo danh mục
    san-pham/[slug]/      Chi tiết sản phẩm (23 trang tĩnh)
    giai-phap/            Giải pháp theo loại kho
    du-an/                Công trình tiêu biểu
    lien-he/              Liên hệ + biểu mẫu (Server Action)
    sitemap.ts robots.ts  SEO
  components/             Header, Footer, thẻ sản phẩm, form, hiệu ứng
  data/                   Toàn bộ nội dung (company, products, solutions, projects)
  lib/seo.ts              Helper metadata + JSON-LD
public/images/            Ảnh sản phẩm, dự án, đối tác, Open Graph
```

## Sửa nội dung

Toàn bộ nội dung nằm trong `src/data/`, không cần CMS:

- `company.ts` — thông tin công ty, tầm nhìn, sứ mệnh, quy trình
- `products.ts` — danh mục và 23 sản phẩm (mô tả, ưu điểm, thông số)
- `solutions.ts` — 6 nhóm giải pháp theo loại kho
- `projects.ts` — công trình tiêu biểu và logo đối tác

Ảnh sản phẩm đặt tại `public/images/products/<slug>.jpg`. Ảnh phụ trong thư viện
đặt tên `<slug>-2.jpg`, `<slug>-3.jpg` và khai báo số lượng trong `galleryExtras`
ở cuối `products.ts`.

Ảnh chia sẻ mạng xã hội đặt tại `public/images/og/<slug>.jpg`, kích thước 1200×630.

## SEO đã triển khai

- Metadata API: title template, description, canonical, Open Graph, Twitter Card
- JSON-LD: `Organization`, `WebSite`, `LocalBusiness`, `BreadcrumbList`, `Product`, `ItemList`
- `sitemap.xml` và `robots.txt` sinh tự động theo dữ liệu sản phẩm
- 23 trang chi tiết sản phẩm prerender tĩnh (SSG)
- `lang="vi"`, heading phân cấp, breadcrumb, alt ảnh mô tả bằng tiếng Việt
- Ảnh tối ưu qua `next/image`, font Be Vietnam Pro tải qua `next/font`
- Hiệu ứng tôn trọng `prefers-reduced-motion`

## Cần bổ sung trước khi chạy thật

- Đặt `NEXT_PUBLIC_SITE_URL` thành tên miền thật
- Xác nhận tên pháp lý đầy đủ của công ty trong `src/data/company.ts`
- Bổ sung ảnh thật cho `ke-khuon` và `asrs-mini-load`
- Xác nhận quyền sử dụng logo đối tác trong `src/data/projects.ts`
- Bổ sung thông tin thật cho các công trình trong `src/data/projects.ts`
- Kết nối `CONTACT_WEBHOOK_URL` để nhận yêu cầu từ biểu mẫu

"use server";

export type ContactState = {
  status: "idle" | "success" | "error";
  message: string;
  fieldErrors?: Record<string, string>;
};

const MAX = { name: 100, phone: 20, email: 120, company: 150, message: 2000 };

function clean(value: FormDataEntryValue | null, max: number) {
  return typeof value === "string" ? value.trim().slice(0, max) : "";
}

export async function submitContact(
  _prev: ContactState,
  formData: FormData,
): Promise<ContactState> {
  if (clean(formData.get("website"), 50)) {
    return { status: "success", message: "Đã gửi yêu cầu thành công." };
  }

  const payload = {
    name: clean(formData.get("name"), MAX.name),
    phone: clean(formData.get("phone"), MAX.phone),
    email: clean(formData.get("email"), MAX.email),
    company: clean(formData.get("company"), MAX.company),
    product: clean(formData.get("product"), 80),
    message: clean(formData.get("message"), MAX.message),
  };

  const fieldErrors: Record<string, string> = {};
  if (payload.name.length < 2) fieldErrors.name = "Vui lòng nhập họ và tên.";
  if (!/^[\d\s+().-]{8,20}$/.test(payload.phone))
    fieldErrors.phone = "Số điện thoại không hợp lệ.";
  if (payload.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(payload.email))
    fieldErrors.email = "Email không hợp lệ.";
  if (payload.message.length < 10)
    fieldErrors.message = "Vui lòng mô tả nhu cầu (tối thiểu 10 ký tự).";

  if (Object.keys(fieldErrors).length > 0) {
    return {
      status: "error",
      message: "Vui lòng kiểm tra lại thông tin.",
      fieldErrors,
    };
  }

  const endpoint = process.env.CONTACT_WEBHOOK_URL;
  if (!endpoint) {
    return {
      status: "error",
      message:
        "Biểu mẫu chưa được kết nối. Vui lòng gọi hotline hoặc gửi email để được hỗ trợ ngay.",
    };
  }

  try {
    const res = await fetch(endpoint, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ ...payload, submittedAt: new Date().toISOString() }),
    });
    if (!res.ok) throw new Error(`Upstream responded ${res.status}`);
  } catch {
    return {
      status: "error",
      message:
        "Không gửi được yêu cầu lúc này. Vui lòng gọi hotline để được hỗ trợ trực tiếp.",
    };
  }

  return {
    status: "success",
    message: "Đã gửi yêu cầu thành công. Thiên Khôi sẽ liên hệ lại trong thời gian sớm nhất.",
  };
}

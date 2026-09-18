"use client";

import { useActionState } from "react";
import { useFormStatus } from "react-dom";
import { submitContact, type ContactState } from "@/app/lien-he/actions";
import { products } from "@/data/products";

const initialState: ContactState = { status: "idle", message: "" };

export function ContactForm({ defaultProduct }: { defaultProduct?: string }) {
  const [state, formAction] = useActionState(submitContact, initialState);

  if (state.status === "success") {
    return (
      <div className="rounded-2xl border border-emerald-200 bg-emerald-50 p-8 text-center">
        <svg
          className="mx-auto h-12 w-12 text-emerald-600"
          viewBox="0 0 20 20"
          fill="currentColor"
          aria-hidden="true"
        >
          <path
            fillRule="evenodd"
            d="M10 18a8 8 0 1 0 0-16 8 8 0 0 0 0 16Zm3.857-9.809a.75.75 0 0 0-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 1 0-1.06 1.061l2.5 2.5a.75.75 0 0 0 1.137-.089l4-5.5Z"
            clipRule="evenodd"
          />
        </svg>
        <p className="mt-4 text-lg font-bold text-emerald-900">Gửi thành công</p>
        <p className="mt-2 text-[15px] text-emerald-800">{state.message}</p>
      </div>
    );
  }

  return (
    <form action={formAction} className="space-y-5" noValidate>
      <input
        type="text"
        name="website"
        tabIndex={-1}
        autoComplete="off"
        aria-hidden="true"
        className="absolute h-0 w-0 overflow-hidden opacity-0"
      />

      <div className="grid gap-5 sm:grid-cols-2">
        <Field
          label="Họ và tên"
          name="name"
          required
          autoComplete="name"
          error={state.fieldErrors?.name}
        />
        <Field
          label="Số điện thoại"
          name="phone"
          type="tel"
          required
          autoComplete="tel"
          error={state.fieldErrors?.phone}
        />
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <Field
          label="Email"
          name="email"
          type="email"
          autoComplete="email"
          error={state.fieldErrors?.email}
        />
        <Field label="Công ty" name="company" autoComplete="organization" />
      </div>

      <div>
        <label
          htmlFor="product"
          className="block text-sm font-semibold text-steel-800"
        >
          Sản phẩm quan tâm
        </label>
        <select
          id="product"
          name="product"
          defaultValue={defaultProduct ?? ""}
          className="mt-2 w-full rounded-lg border border-steel-300 bg-white px-4 py-3 text-[15px] text-steel-900 transition-colors focus:border-safety-500 focus:outline-none focus:ring-2 focus:ring-safety-500/20"
        >
          <option value="">— Chọn sản phẩm —</option>
          {products.map((p) => (
            <option key={p.slug} value={p.slug}>
              {p.name}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label
          htmlFor="message"
          className="block text-sm font-semibold text-steel-800"
        >
          Nhu cầu của bạn <span className="text-safety-600">*</span>
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          required
          placeholder="Diện tích kho, chiều cao trần, loại hàng hóa, tải trọng pallet..."
          aria-invalid={Boolean(state.fieldErrors?.message)}
          className={`mt-2 w-full rounded-lg border bg-white px-4 py-3 text-[15px] text-steel-900 transition-colors focus:outline-none focus:ring-2 focus:ring-safety-500/20 ${
            state.fieldErrors?.message
              ? "border-red-400"
              : "border-steel-300 focus:border-safety-500"
          }`}
        />
        {state.fieldErrors?.message && (
          <p className="mt-1.5 text-sm text-red-600">{state.fieldErrors.message}</p>
        )}
      </div>

      {state.status === "error" && !state.fieldErrors && (
        <p
          role="alert"
          className="rounded-lg border border-amber-200 bg-amber-50 px-4 py-3 text-sm text-amber-900"
        >
          {state.message}
        </p>
      )}

      <SubmitButton />

      <p className="text-[13px] leading-relaxed text-steel-500">
        Thông tin của bạn chỉ được sử dụng để tư vấn và báo giá, không chia sẻ cho
        bên thứ ba.
      </p>
    </form>
  );
}

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <button
      type="submit"
      disabled={pending}
      className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-safety-500 px-8 py-4 text-[15px] font-semibold text-white transition-all hover:bg-safety-600 active:scale-[0.99] disabled:cursor-not-allowed disabled:opacity-70 sm:w-auto"
    >
      {pending && (
        <svg
          className="h-4 w-4 animate-spin"
          viewBox="0 0 24 24"
          fill="none"
          aria-hidden="true"
        >
          <circle
            className="opacity-25"
            cx="12"
            cy="12"
            r="10"
            stroke="currentColor"
            strokeWidth="4"
          />
          <path
            className="opacity-75"
            fill="currentColor"
            d="M4 12a8 8 0 0 1 8-8V0C5.37 0 0 5.37 0 12h4Z"
          />
        </svg>
      )}
      {pending ? "Đang gửi..." : "Gửi yêu cầu tư vấn"}
    </button>
  );
}

function Field({
  label,
  name,
  type = "text",
  required = false,
  autoComplete,
  error,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
  autoComplete?: string;
  error?: string;
}) {
  return (
    <div>
      <label htmlFor={name} className="block text-sm font-semibold text-steel-800">
        {label} {required && <span className="text-safety-600">*</span>}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        required={required}
        autoComplete={autoComplete}
        aria-invalid={Boolean(error)}
        className={`mt-2 w-full rounded-lg border bg-white px-4 py-3 text-[15px] text-steel-900 transition-colors focus:outline-none focus:ring-2 focus:ring-safety-500/20 ${
          error ? "border-red-400" : "border-steel-300 focus:border-safety-500"
        }`}
      />
      {error && <p className="mt-1.5 text-sm text-red-600">{error}</p>}
    </div>
  );
}

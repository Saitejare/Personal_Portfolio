import { useState } from "react";
import { z } from "zod";
import { Send } from "lucide-react";
import { Button } from "@/components/ui/button";
const schema = z.object({
  name: z.string().trim().min(2, "Enter at least 2 characters").max(100),
  email: z.string().trim().email("Enter a valid email").max(255),
  message: z.string().trim().min(10, "Enter at least 10 characters").max(1000),
});
type Fields = z.infer<typeof schema>;
export function ContactForm() {
  const [values, setValues] = useState<Fields>({ name: "", email: "", message: "" });
  const [errors, setErrors] = useState<Partial<Record<keyof Fields, string>>>({});
  const [sent, setSent] = useState(false);
  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    const parsed = schema.safeParse(values);
    if (!parsed.success) {
      const next: typeof errors = {};
      parsed.error.issues.forEach((x) => {
        const k = x.path[0] as keyof Fields;
        if (!next[k]) next[k] = x.message;
      });
      setErrors(next);
      return;
    }
    setErrors({});
    setSent(true);
  };
  if (sent)
    return (
      <div className="surface rounded-lg p-8" role="status">
        <h2 className="text-2xl font-semibold text-primary">Message validated.</h2>
        <p className="mt-3 text-muted-foreground">
          Email delivery is not configured yet, so nothing was sent. Connect an email service before
          publishing this form.
        </p>
        <Button variant="quiet" className="mt-6" onClick={() => setSent(false)}>
          Write another message
        </Button>
      </div>
    );
  return (
    <form onSubmit={submit} noValidate className="space-y-5">
      <Field label="Name" error={errors.name}>
        <input
          value={values.name}
          onChange={(e) => setValues({ ...values, name: e.target.value })}
          maxLength={100}
        />
      </Field>
      <Field label="Email" error={errors.email}>
        <input
          type="email"
          value={values.email}
          onChange={(e) => setValues({ ...values, email: e.target.value })}
          maxLength={255}
        />
      </Field>
      <Field label="Message" error={errors.message}>
        <textarea
          rows={6}
          value={values.message}
          onChange={(e) => setValues({ ...values, message: e.target.value })}
          maxLength={1000}
        />
      </Field>
      <Button type="submit" variant="signal" size="lg">
        Validate message <Send />
      </Button>
      <p className="text-xs text-muted-foreground">
        Demo mode: this form validates input but does not transmit or store it.
      </p>
    </form>
  );
}
function Field({
  label,
  error,
  children,
}: {
  label: string;
  error: string | undefined;
  children: React.ReactElement<{ className?: string; "aria-invalid"?: boolean }>;
}) {
  return (
    <label className="block">
      <span className="mb-2 block text-sm font-medium">{label}</span>
      {
        <div className="[&_input]:h-11 [&_input]:w-full [&_input]:rounded-md [&_input]:border [&_input]:border-input [&_input]:bg-background [&_input]:px-3 [&_input]:outline-none [&_input]:focus:ring-2 [&_input]:focus:ring-ring [&_textarea]:w-full [&_textarea]:rounded-md [&_textarea]:border [&_textarea]:border-input [&_textarea]:bg-background [&_textarea]:p-3 [&_textarea]:outline-none [&_textarea]:focus:ring-2 [&_textarea]:focus:ring-ring">
          {children}
        </div>
      }
      {error && <span className="mt-1 block text-xs text-destructive">{error}</span>}
    </label>
  );
}

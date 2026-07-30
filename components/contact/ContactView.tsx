"use client";

import { useState } from "react";
import { CheckCircle2, Mail, MapPin, Phone } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Input, Textarea } from "@/components/ui/Input";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";

type FormState = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

type FormErrors = Partial<Record<keyof FormState, string>>;

const initialState: FormState = {
  name: "",
  email: "",
  subject: "",
  message: "",
};

function validate(values: FormState): FormErrors {
  const errors: FormErrors = {};

  if (!values.name.trim()) errors.name = "Ingresá tu nombre";
  if (!values.email.trim()) {
    errors.email = "Ingresá tu email";
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)) {
    errors.email = "Email inválido";
  }
  if (!values.subject.trim()) errors.subject = "Ingresá un asunto";
  if (!values.message.trim() || values.message.trim().length < 10) {
    errors.message = "Escribí al menos 10 caracteres";
  }

  return errors;
}

export function ContactView() {
  const [values, setValues] = useState<FormState>(initialState);
  const [errors, setErrors] = useState<FormErrors>({});
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const handleChange =
    (field: keyof FormState) =>
    (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      setValues((prev) => ({ ...prev, [field]: event.target.value }));
      if (errors[field]) {
        setErrors((prev) => ({ ...prev, [field]: undefined }));
      }
    };

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    const nextErrors = validate(values);
    setErrors(nextErrors);

    if (Object.keys(nextErrors).length > 0) return;

    setSubmitting(true);
    await new Promise((resolve) => setTimeout(resolve, 700));
    setSubmitting(false);
    setSubmitted(true);
    setValues(initialState);
  };

  return (
    <>
      <Reveal>
        <SectionHeading
          eyebrow="Contacto"
          title="Estamos para ayudarte"
          description="Consultas de talle, disponibilidad, envíos o asesoramiento de look. Respondemos en horario comercial."
          className="mb-14"
        />
      </Reveal>

      <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
        <Reveal>
          <div className="space-y-6">
            {[
              {
                icon: Mail,
                label: "Email",
                value: "hola@eastudio.com",
              },
              {
                icon: Phone,
                label: "WhatsApp ventas",
                value: "+54 9 11 5568 1881",
              },
              {
                icon: MapPin,
                label: "Showroom",
                value: "Palermo, Buenos Aires · Con cita previa",
              },
            ].map((item) => (
              <div
                key={item.label}
                className="flex gap-4 rounded-2xl border border-white/10 bg-surface p-6"
              >
                <div className="rounded-2xl border border-white/10 bg-background p-3">
                  <item.icon className="h-5 w-5 text-accent" />
                </div>
                <div>
                  <p className="text-xs uppercase tracking-[0.2em] text-muted">
                    {item.label}
                  </p>
                  <p className="mt-2 text-sm font-medium">{item.value}</p>
                </div>
              </div>
            ))}

            <div className="rounded-2xl border border-white/10 bg-surface-elevated p-6">
              <p className="text-xs uppercase tracking-[0.2em] text-muted">
                Horario
              </p>
              <p className="mt-3 text-sm leading-relaxed text-muted">
                Lunes a viernes · 10:00–19:00
                <br />
                Sábados · 11:00–15:00
              </p>
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="rounded-2xl border border-white/10 bg-surface p-8 shadow-2xl shadow-black/40 md:p-10">
            {submitted ? (
              <div className="flex flex-col items-center py-12 text-center">
                <CheckCircle2 className="h-10 w-10 text-accent" />
                <h2 className="mt-5 text-2xl font-medium">Mensaje enviado</h2>
                <p className="mt-3 max-w-sm text-sm text-muted">
                  Gracias por escribirnos. Te responderemos a la brevedad. Este
                  formulario es una demostración de UI (sin backend).
                </p>
                <Button
                  className="mt-8"
                  variant="outline"
                  onClick={() => setSubmitted(false)}
                >
                  Enviar otro mensaje
                </Button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5" noValidate>
                <Input
                  label="Nombre"
                  name="name"
                  value={values.name}
                  onChange={handleChange("name")}
                  error={errors.name}
                  placeholder="Tu nombre"
                />
                <Input
                  label="Email"
                  name="email"
                  type="email"
                  value={values.email}
                  onChange={handleChange("email")}
                  error={errors.email}
                  placeholder="tu@email.com"
                />
                <Input
                  label="Asunto"
                  name="subject"
                  value={values.subject}
                  onChange={handleChange("subject")}
                  error={errors.subject}
                  placeholder="Consulta de talle, envío..."
                />
                <Textarea
                  label="Mensaje"
                  name="message"
                  value={values.message}
                  onChange={handleChange("message")}
                  error={errors.message}
                  placeholder="Contanos en qué podemos ayudarte"
                />
                <Button
                  type="submit"
                  size="lg"
                  className="w-full"
                  disabled={submitting}
                >
                  {submitting ? "Enviando..." : "Enviar mensaje"}
                </Button>
              </form>
            )}
          </div>
        </Reveal>
      </div>
    </>
  );
}

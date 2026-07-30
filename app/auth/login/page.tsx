"use client";

import Link from "next/link";
import { useState } from "react";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";

type FormState = {
  email: string;
  password: string;
};

type FormErrors = Partial<Record<keyof FormState, string>>;

export default function LoginPage() {
  const [values, setValues] = useState<FormState>({ email: "", password: "" });
  const [errors, setErrors] = useState<FormErrors>({});
  const [done, setDone] = useState(false);

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    const next: FormErrors = {};
    if (!values.email.trim()) next.email = "Ingresá tu email";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)) {
      next.email = "Email inválido";
    }
    if (!values.password || values.password.length < 6) {
      next.password = "Mínimo 6 caracteres";
    }
    setErrors(next);
    if (Object.keys(next).length === 0) setDone(true);
  };

  return (
    <section className="py-16 md:py-24">
      <Container className="max-w-lg">
        <Reveal>
          <div className="rounded-2xl border border-white/10 bg-surface p-8 shadow-2xl shadow-black/40 md:p-10">
            <p className="text-xs uppercase tracking-[0.28em] text-muted">
              Cuenta
            </p>
            <h1 className="mt-4 text-3xl font-semibold tracking-tight">
              Ingresar
            </h1>
            <p className="mt-3 text-sm text-muted">
              Vista de autenticación para portafolio. Sin backend: validación de
              formulario únicamente.
            </p>

            {done ? (
              <div className="mt-10 rounded-2xl border border-white/10 bg-background p-6 text-center">
                <p className="font-medium">Credenciales validadas</p>
                <p className="mt-2 text-sm text-muted">
                  En un producto real, aquí iniciarías sesión.
                </p>
                <Button
                  className="mt-6"
                  variant="outline"
                  onClick={() => setDone(false)}
                >
                  Volver al formulario
                </Button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="mt-8 space-y-5" noValidate>
                <Input
                  label="Email"
                  type="email"
                  name="email"
                  value={values.email}
                  onChange={(event) =>
                    setValues((prev) => ({ ...prev, email: event.target.value }))
                  }
                  error={errors.email}
                  placeholder="tu@email.com"
                />
                <Input
                  label="Contraseña"
                  type="password"
                  name="password"
                  value={values.password}
                  onChange={(event) =>
                    setValues((prev) => ({
                      ...prev,
                      password: event.target.value,
                    }))
                  }
                  error={errors.password}
                  placeholder="••••••••"
                />
                <Button type="submit" size="lg" className="w-full">
                  Continuar
                </Button>
              </form>
            )}

            <p className="mt-8 text-center text-sm text-muted">
              ¿No tenés cuenta?{" "}
              <Link
                href="/auth/registro"
                className="text-foreground underline underline-offset-4 transition-opacity hover:opacity-70"
              >
                Crear una
              </Link>
            </p>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}

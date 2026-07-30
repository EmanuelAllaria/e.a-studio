"use client";

import Link from "next/link";
import { useState } from "react";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";

type FormState = {
  name: string;
  email: string;
  password: string;
  confirm: string;
};

type FormErrors = Partial<Record<keyof FormState, string>>;

export default function RegistroPage() {
  const [values, setValues] = useState<FormState>({
    name: "",
    email: "",
    password: "",
    confirm: "",
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [done, setDone] = useState(false);

  const handleChange =
    (field: keyof FormState) =>
    (event: React.ChangeEvent<HTMLInputElement>) => {
      setValues((prev) => ({ ...prev, [field]: event.target.value }));
    };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    const next: FormErrors = {};

    if (!values.name.trim()) next.name = "Ingresá tu nombre";
    if (!values.email.trim()) next.email = "Ingresá tu email";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)) {
      next.email = "Email inválido";
    }
    if (!values.password || values.password.length < 6) {
      next.password = "Mínimo 6 caracteres";
    }
    if (values.confirm !== values.password) {
      next.confirm = "Las contraseñas no coinciden";
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
              Crear cuenta
            </h1>
            <p className="mt-3 text-sm text-muted">
              Formulario minimalista de registro. Demostración de UI con
              validación en cliente.
            </p>

            {done ? (
              <div className="mt-10 rounded-2xl border border-white/10 bg-background p-6 text-center">
                <p className="font-medium">Cuenta lista (simulado)</p>
                <p className="mt-2 text-sm text-muted">
                  En producción, aquí crearías el usuario en tu backend.
                </p>
                <Link href="/auth/login">
                  <Button className="mt-6" variant="outline">
                    Ir a ingresar
                  </Button>
                </Link>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="mt-8 space-y-5" noValidate>
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
                  type="email"
                  name="email"
                  value={values.email}
                  onChange={handleChange("email")}
                  error={errors.email}
                  placeholder="tu@email.com"
                />
                <Input
                  label="Contraseña"
                  type="password"
                  name="password"
                  value={values.password}
                  onChange={handleChange("password")}
                  error={errors.password}
                  placeholder="••••••••"
                />
                <Input
                  label="Confirmar contraseña"
                  type="password"
                  name="confirm"
                  value={values.confirm}
                  onChange={handleChange("confirm")}
                  error={errors.confirm}
                  placeholder="••••••••"
                />
                <Button type="submit" size="lg" className="w-full">
                  Registrarme
                </Button>
              </form>
            )}

            <p className="mt-8 text-center text-sm text-muted">
              ¿Ya tenés cuenta?{" "}
              <Link
                href="/auth/login"
                className="text-foreground underline underline-offset-4 transition-opacity hover:opacity-70"
              >
                Ingresar
              </Link>
            </p>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}

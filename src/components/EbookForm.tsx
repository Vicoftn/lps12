"use client";

import { useState, type FormEvent } from "react";
import { BorderBeam } from "./BorderBeam";

type Status = "idle" | "missing" | "loading" | "success" | "error";

export function EbookForm() {
  const [status, setStatus] = useState<Status>("idle");

  function handleChange() {
    if (status === "missing" || status === "error") {
      setStatus("idle");
    }
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const form = new FormData(event.currentTarget);
    const nome = String(form.get("nome") ?? "").trim();
    const email = String(form.get("email") ?? "").trim();

    if (!nome || !email) {
      setStatus("missing");
      return;
    }

    setStatus("loading");

    try {
      const response = await fetch("/api/ebook", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ nome, email }),
      });
      if (!response.ok) throw new Error("request failed");
      setStatus("success");
    } catch {
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <p role="status" className="text-ink/80">
        Enviamos o e-book para o seu e-mail. Boa leitura.
      </p>
    );
  }

  const fieldClassName =
    "w-full border-b bg-transparent py-2 text-ink placeholder:text-ink/40 focus:border-magenta " +
    (status === "missing" ? "border-magenta" : "border-ink/30");

  return (
    <form onSubmit={handleSubmit} noValidate className="flex flex-col gap-4">
      <div className="flex flex-col gap-4 sm:flex-row sm:gap-6">
        <label className="flex-1">
          <span className="sr-only">Seu nome</span>
          <input
            type="text"
            name="nome"
            placeholder="Seu nome"
            onChange={handleChange}
            className={fieldClassName}
          />
        </label>
        <label className="flex-1">
          <span className="sr-only">Seu melhor e-mail</span>
          <input
            type="email"
            name="email"
            placeholder="Seu melhor e-mail"
            onChange={handleChange}
            className={fieldClassName}
          />
        </label>
      </div>

      <div>
        <button
          type="submit"
          disabled={status === "loading"}
          className="relative inline-flex shrink-0 items-center justify-center whitespace-nowrap rounded-full bg-ink px-8 py-3 text-sm tracking-wide text-cream disabled:opacity-60"
        >
          <BorderBeam />
          <span className="relative z-10">
            {status === "loading" ? "Enviando…" : "Receber o e-book"}
          </span>
        </button>
      </div>

      {status === "missing" && (
        <p role="alert" className="text-sm text-magenta">
          Preencha seu nome e e-mail para receber o e-book.
        </p>
      )}
      {status === "error" && (
        <p role="alert" className="text-sm text-magenta">
          Não foi possível enviar agora. Tente novamente em instantes.
        </p>
      )}
      <p className="text-xs text-ink/50">Usamos seu e-mail apenas para enviar este conteúdo.</p>
    </form>
  );
}

"use client";

import { useState, type FormEvent } from "react";

type Status = "idle" | "loading" | "success" | "error";

export function EbookForm() {
  const [status, setStatus] = useState<Status>("idle");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("loading");

    const form = new FormData(event.currentTarget);
    const payload = {
      nome: String(form.get("nome") ?? ""),
      email: String(form.get("email") ?? ""),
    };

    try {
      const response = await fetch("/api/ebook", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
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

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4 sm:flex-row sm:items-start">
      <div className="flex flex-1 flex-col gap-3 sm:flex-row">
        <label className="flex-1">
          <span className="sr-only">Seu nome</span>
          <input
            type="text"
            name="nome"
            required
            placeholder="Seu nome"
            className="w-full border-b border-ink/30 bg-transparent py-2 text-ink placeholder:text-ink/40 focus:border-magenta"
          />
        </label>
        <label className="flex-1">
          <span className="sr-only">Seu melhor e-mail</span>
          <input
            type="email"
            name="email"
            required
            placeholder="Seu melhor e-mail"
            className="w-full border-b border-ink/30 bg-transparent py-2 text-ink placeholder:text-ink/40 focus:border-magenta"
          />
        </label>
      </div>
      <button
        type="submit"
        disabled={status === "loading"}
        className="inline-flex items-center justify-center rounded-full bg-ink px-8 py-3 text-sm tracking-wide text-cream transition-colors hover:bg-magenta disabled:opacity-60"
      >
        {status === "loading" ? "Enviando…" : "Receber o e-book"}
      </button>
      {status === "error" && (
        <p role="alert" className="text-sm text-magenta sm:basis-full">
          Não foi possível enviar agora. Tente novamente em instantes.
        </p>
      )}
      <p className="text-xs text-ink/50 sm:basis-full">
        Usamos seu e-mail apenas para enviar este conteúdo.
      </p>
    </form>
  );
}

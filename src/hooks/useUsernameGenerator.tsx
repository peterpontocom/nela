import { useState, useCallback } from "react";

export function useUsernameGenerator() {
  const [username, setUsername] = useState<string>("");

  const generateUsername = useCallback((name: string): string => {
    // Remove espaços e caracteres especiais, mantendo apenas letras e números
    const sanitized = name.replace(/[^a-zA-Z0-9]/g, "").toLowerCase();

    // Caso o nome sanitizado seja menor que 6 caracteres, adiciona números aleatórios
    let generated =
      sanitized.length < 6
        ? sanitized +
          Math.random()
            .toString(36)
            .substring(2, 8 - sanitized.length)
        : sanitized;

    // Limita o username a 20 caracteres
    if (generated.length > 20) {
      generated = generated.substring(0, 20);
    }

    // Adiciona um sufixo numérico para garantir unicidade
    generated += Math.random().toString(36).substring(2, 4);

    setUsername(generated);
    return generated;
  }, []);

  return { username, generateUsername };
}

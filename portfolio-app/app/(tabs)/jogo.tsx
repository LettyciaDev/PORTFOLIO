import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import { useState, useEffect, useRef } from "react";
import { Ionicons } from "@expo/vector-icons";
import { Colors, Spacing, Radius } from "@/constants/theme";

const PALAVRAS: string[] = [
  "REACT",
  "JAVASCRIPT",
  "PYTHON",
  "ALGORITMO",
  "COMPUTADOR",
  "PROGRAMACAO",
  "DESENVOLVEDOR",
  "SERVIDOR",
  "CLIENTE",
  "FRAMEWORK",
  "COMPILADOR",
  "VARIAVEL",
  "FUNCAO",
  "CLASSE",
  "OBJETO",
  "ARRAY",
  "STRING",
  "BOOLEAN",
  "DATABASE",
  "API",
  "NEXTJS",
  "NODEJS",
  "FRONTEND",
  "BACKEND",
  "FULLSTACK",
  "CODIGO",
  "SISTEMA",
  "INTERNET",
  "SOFTWARE",
  "HARDWARE",
  "TYPESCRIPT",
  "KOTLIN",
  "DOCKER",
  "GITHUB",
  "EXPO",
];

const LETRAS = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
const MAX_ERROS = 6;

function HangmanSVG({ erros }: { erros: number }) {
  const strokeColor = Colors.textPrimary;
  const strokeWidth = 3;

  return (
    <View style={styles.svgContainer}>
      <View style={[styles.hBase, { backgroundColor: strokeColor }]} />
      <View style={[styles.hPost, { backgroundColor: strokeColor }]} />
      <View style={[styles.hTop, { backgroundColor: strokeColor }]} />
      <View style={[styles.hRope, { backgroundColor: strokeColor }]} />

      {erros > 0 && (
        <View style={[styles.hHead, { borderColor: strokeColor }]} />
      )}
      {erros > 1 && (
        <View style={[styles.hBody, { backgroundColor: strokeColor }]} />
      )}
      {erros > 2 && (
        <View style={[styles.hArmLeft, { backgroundColor: strokeColor }]} />
      )}
      {erros > 3 && (
        <View style={[styles.hArmRight, { backgroundColor: strokeColor }]} />
      )}
      {erros > 4 && (
        <View style={[styles.hLegLeft, { backgroundColor: strokeColor }]} />
      )}
      {erros > 5 && (
        <View style={[styles.hLegRight, { backgroundColor: strokeColor }]} />
      )}
    </View>
  );
}

export default function JogoScreen() {
  const [palavra, setPalavra] = useState("");
  const [letrasUsadas, setLetrasUsadas] = useState<string[]>([]);
  const [erros, setErros] = useState(0);
  const [status, setStatus] = useState<"jogando" | "ganhou" | "perdeu">(
    "jogando",
  );

  useEffect(() => {
    iniciarJogo();
  }, []);

  function iniciarJogo() {
    const random = PALAVRAS[Math.floor(Math.random() * PALAVRAS.length)];
    setPalavra(random);
    setLetrasUsadas([]);
    setErros(0);
    setStatus("jogando");
  }

  function tentarLetra(letra: string) {
    if (status !== "jogando") return;
    if (letrasUsadas.includes(letra)) return;

    const novas = [...letrasUsadas, letra];
    setLetrasUsadas(novas);

    if (!palavra.includes(letra)) {
      const novosErros = erros + 1;
      setErros(novosErros);
      if (novosErros >= MAX_ERROS) {
        setStatus("perdeu");
      }
    } else {
      const venceu = palavra.split("").every((l) => novas.includes(l));
      if (venceu) setStatus("ganhou");
    }
  }

  const tentativas = MAX_ERROS - erros;

  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={styles.content}
      showsVerticalScrollIndicator={false}
      keyboardShouldPersistTaps="handled"
    >
      <View style={styles.header}>
        <Text style={styles.pageTitle}>Jogo da Forca</Text>
        <View style={styles.livesRow}>
          {Array.from({ length: MAX_ERROS }).map((_, i) => (
            <View
              key={i}
              style={[
                styles.lifeHeart,
                {
                  backgroundColor:
                    i < tentativas ? Colors.pink : Colors.surfaceAlt,
                },
              ]}
            />
          ))}
        </View>
      </View>

      <Text style={styles.category}>Vocabulário Tech</Text>

      <View style={[styles.hangmanCard]}>
        <HangmanSVG erros={erros} />
        <View style={styles.errorsInfo}>
          <Text style={styles.errorsLabel}>Erros</Text>
          <Text
            style={[
              styles.errorsValue,
              {
                color:
                  erros >= 4
                    ? Colors.pink
                    : erros >= 2
                      ? Colors.amber
                      : Colors.green,
              },
            ]}
          >
            {erros} / {MAX_ERROS}
          </Text>
        </View>
      </View>

      <View style={styles.wordCard}>
        <View style={styles.wordRow}>
          {palavra.split("").map((letra, i) => (
            <View key={i} style={styles.letterSlot}>
              <Text
                style={[
                  styles.letterChar,
                  letrasUsadas.includes(letra) && { color: Colors.cyan },
                  status === "perdeu" &&
                    !letrasUsadas.includes(letra) && { color: Colors.pink },
                ]}
              >
                {letrasUsadas.includes(letra) || status === "perdeu"
                  ? letra
                  : "_"}
              </Text>
            </View>
          ))}
        </View>

        {status === "ganhou" && (
          <View style={styles.resultBanner}>
            <Text style={[styles.resultText, { color: Colors.green }]}>
              VOCÊ VENCEU!
            </Text>
          </View>
        )}

        {status === "perdeu" && (
          <View style={styles.resultBanner}>
            <Text style={[styles.resultText, { color: Colors.pink }]}>
              VOCÊ PERDEU!
            </Text>
          </View>
        )}
      </View>

      <View style={styles.keyboard}>
        {LETRAS.map((letra) => {
          const usada = letrasUsadas.includes(letra);
          const correta = palavra.includes(letra) && usada;
          const errada = !palavra.includes(letra) && usada;

          return (
            <TouchableOpacity
              key={letra}
              onPress={() => tentarLetra(letra)}
              disabled={usada || status !== "jogando"}
              style={[
                styles.keyBtn,
                correta && styles.keyCorrect,
                errada && styles.keyWrong,
                usada && styles.keyUsed,
              ]}
            >
              <Text
                style={[
                  styles.keyText,
                  correta && { color: Colors.background },
                  errada && { color: Colors.background },
                ]}
              >
                {letra}
              </Text>
            </TouchableOpacity>
          );
        })}
      </View>

      <TouchableOpacity style={styles.restartBtn} onPress={iniciarJogo}>
        <Ionicons name="refresh-outline" size={18} color={Colors.background} />
        <Text style={styles.restartText}>Nova Palavra</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.background,
  },
  content: {
    padding: Spacing.md,
    paddingTop: 56,
    paddingBottom: Spacing.xxl,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 4,
  },
  pageTitle: {
    fontFamily: "Poppins",
    fontSize: 20,
    color: Colors.textPrimary,
  },
  livesRow: {
    flexDirection: "row",
    gap: 5,
  },
  lifeHeart: {
    width: 10,
    height: 10,
    borderRadius: 5,
  },
  category: {
    fontSize: 12,
    color: Colors.textSecondary,
    marginBottom: Spacing.md,
  },
  hangmanCard: {
    backgroundColor: Colors.surface,
    borderRadius: Radius.lg,
    borderWidth: 1,
    borderColor: Colors.border,
    padding: Spacing.md,
    alignItems: "center",
    marginBottom: Spacing.md,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  svgContainer: {
    width: 130,
    height: 130,
    position: "relative",
  },
  hBase: {
    position: "absolute",
    bottom: 0,
    left: 10,
    width: 110,
    height: 3,
    borderRadius: 2,
  },
  hPost: {
    position: "absolute",
    bottom: 3,
    left: 28,
    width: 3,
    height: 120,
    borderRadius: 2,
  },
  hTop: {
    position: "absolute",
    top: 0,
    left: 28,
    width: 70,
    height: 3,
    borderRadius: 2,
  },
  hRope: {
    position: "absolute",
    top: 3,
    right: 27,
    width: 3,
    height: 20,
    borderRadius: 2,
  },
  hHead: {
    position: "absolute",
    top: 22,
    right: 17,
    width: 22,
    height: 22,
    borderRadius: 11,
    borderWidth: 3,
    backgroundColor: "transparent",
  },
  hBody: {
    position: "absolute",
    top: 44,
    right: 27,
    width: 3,
    height: 32,
    borderRadius: 2,
  },
  hArmLeft: {
    position: "absolute",
    top: 52,
    right: 30,
    width: 22,
    height: 3,
    borderRadius: 2,
    transform: [{ rotate: "30deg" }],
  },
  hArmRight: {
    position: "absolute",
    top: 52,
    right: 7,
    width: 22,
    height: 3,
    borderRadius: 2,
    transform: [{ rotate: "-30deg" }],
  },
  hLegLeft: {
    position: "absolute",
    top: 74,
    right: 30,
    width: 22,
    height: 3,
    borderRadius: 2,
    transform: [{ rotate: "-30deg" }],
  },
  hLegRight: {
    position: "absolute",
    top: 74,
    right: 7,
    width: 22,
    height: 3,
    borderRadius: 2,
    transform: [{ rotate: "30deg" }],
  },
  errorsInfo: {
    flex: 1,
    alignItems: "center",
  },
  errorsLabel: {
    fontSize: 11,
    color: Colors.textMuted,
    fontFamily: "Poppins",
    marginBottom: 4,
  },
  errorsValue: {
    fontFamily: "Poppins",
    fontSize: 24,
  },
  wordCard: {
    backgroundColor: Colors.surface,
    borderRadius: Radius.lg,
    borderWidth: 1,
    borderColor: Colors.border,
    padding: Spacing.md,
    marginBottom: Spacing.md,
    alignItems: "center",
  },
  wordRow: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
    gap: 6,
  },
  letterSlot: {
    width: 26,
    alignItems: "center",
    borderBottomWidth: 2,
    borderBottomColor: Colors.border,
    paddingBottom: 2,
  },
  letterChar: {
    fontFamily: "Poppins",
    fontSize: 20,
    color: Colors.textSecondary,
  },
  resultBanner: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
    marginTop: Spacing.md,
  },
  resultText: {
    fontFamily: "Poppins",
    fontSize: 16,
  },
  keyboard: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
    gap: 6,
    marginBottom: Spacing.md,
  },
  keyBtn: {
    width: 38,
    height: 38,
    borderRadius: Radius.sm,
    backgroundColor: Colors.surface,
    borderWidth: 1,
    borderColor: Colors.border,
    alignItems: "center",
    justifyContent: "center",
  },
  keyUsed: {
    opacity: 0.5,
  },
  keyCorrect: {
    backgroundColor: Colors.green,
    borderColor: Colors.green,
  },
  keyWrong: {
    backgroundColor: Colors.pink,
    borderColor: Colors.pink,
  },
  keyText: {
    fontFamily: "Poppins",
    fontSize: 13,
    color: Colors.textPrimary,
  },
  restartBtn: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 8,
    backgroundColor: Colors.accent,
    borderRadius: Radius.lg,
    paddingVertical: 14,
  },
  restartText: {
    fontFamily: "Poppins",
    fontSize: 14,
    color: Colors.background,
  },
});

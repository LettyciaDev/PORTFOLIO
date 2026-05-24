import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Linking,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { Colors, Spacing, Radius } from "@/constants/theme";

type Project = {
  title: string;
  description: string;
  tags: string[];
  color: string;
  github: string;
};

const projects: Project[] = [
  {
    title: "Musicap",
    description:
      "Aplicação Java destinada ao gerenciamento de músicas e playlists com interface intuitiva e operações CRUD completas.",
    tags: ["Java", "OOP", "CRUD"],
    color: Colors.amber,
    github: "https://github.com/LettyciaDev/Projeto-Musicap",
  },
  {
    title: "CardapIA",
    description:
      "Site que gera receitas saudáveis com Inteligência Artificial. Integração com API de IA para sugestões personalizadas.",
    tags: ["Web", "IA", "Next.js", "API"],
    color: Colors.green,
    github: "https://github.com/LettyciaDev/PROJETO-WEB-MOBILE",
  },
  {
    title: "Projeto Coliceu",
    description:
      "Aplicativo mobile em Kotlin e Java que permite mapear sítios arqueológicos diretamente a partir de imagens capturadas.",
    tags: ["Kotlin", "Java", "Mobile", "Maps"],
    color: Colors.cyan,
    github: "https://github.com/LettyciaDev/PROJETO-COLICEU",
  },
  {
    title: "Patas na Rua",
    description:
      "Plataforma web para gerenciamento de cuidados aos animais não abrigados. Cadastro, acompanhamento e adoção.",
    tags: ["Web", "Banco de Dados", "CRUD"],
    color: Colors.pink,
    github: "https://github.com/LettyciaDev/PATAS-NA-RUA",
  },
  {
    title: "Modo Control",
    description:
      "Sistema de gerenciamento de pedidos para manipular, controlar e analisar dados de vendas em tempo real.",
    tags: ["Dashboard", "Java", "Relatórios"],
    color: Colors.accent,
    github: "https://github.com/LettyciaDev/GPCLASS",
  },
  {
    title: "GPCLASS",
    description:
      "Sistema web estático organizado para servir como um portal educacional, com navegação estruturada e conteúdo.",
    tags: ["HTML", "CSS", "Portal Web"],
    color: Colors.textSecondary,
    github: "https://github.com/LettyciaDev/GPCLASS",
  },
];

const ProjectCard = ({ project }: { project: Project }) => (
  <View style={[styles.projectCard, { borderLeftColor: project.color }]}>
    <View style={styles.cardTop}>
      <View style={styles.cardMeta}>
        <View style={styles.titleRow}>
          <Text style={styles.projectTitle}>{project.title}</Text>
        </View>
        <Text style={styles.projectDesc}>{project.description}</Text>
      </View>
    </View>
    <View style={styles.cardBottom}>
      <View style={styles.tagRow}>
        {project.tags.map((tag) => (
          <View key={tag} style={styles.tag}>
            <Text style={styles.tagText}>{tag}</Text>
          </View>
        ))}
      </View>
      <TouchableOpacity
        style={styles.githubBtn}
        onPress={() => Linking.openURL(project.github)}
      >
        <Ionicons name="logo-github" size={14} color={Colors.textSecondary} />
        <Text style={styles.githubText}>Ver código</Text>
      </TouchableOpacity>
    </View>
  </View>
);

export default function ProjetosScreen() {
  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={styles.content}
      showsVerticalScrollIndicator={false}
    >
      <Text style={styles.pageTitle}>Projetos</Text>
      <Text style={styles.pageSubtitle}>
        Portfolio de trabalhos desenvolvidos
      </Text>

      <View style={styles.statsRow}>
        {[
          { value: "6", label: "Projetos", color: Colors.accent },
          { value: "4", label: "Linguagens", color: Colors.cyan },
        ].map((s) => (
          <View key={s.label} style={styles.statCard}>
            <Text style={[styles.statValue, { color: s.color }]}>
              {s.value}
            </Text>
            <Text style={styles.statLabel}>{s.label}</Text>
          </View>
        ))}
      </View>

      {projects.map((project) => (
        <ProjectCard key={project.title} project={project} />
      ))}
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
  pageTitle: {
    fontFamily: "Poppins",
    fontSize: 26,
    color: Colors.textPrimary,
    marginBottom: 4,
  },
  pageSubtitle: {
    fontSize: 13,
    color: Colors.textSecondary,
    marginBottom: Spacing.lg,
  },
  statsRow: {
    flexDirection: "row",
    gap: Spacing.sm,
    marginBottom: Spacing.md,
  },
  statCard: {
    flex: 1,
    backgroundColor: Colors.surface,
    borderRadius: Radius.md,
    borderWidth: 1,
    borderColor: Colors.border,
    padding: Spacing.md,
    alignItems: "center",
  },
  statValue: {
    fontFamily: "Poppins",
    fontSize: 22,
    fontWeight: "700",
  },
  statLabel: {
    fontSize: 11,
    color: Colors.textSecondary,
    marginTop: 2,
  },
  projectCard: {
    backgroundColor: Colors.surface,
    borderRadius: Radius.lg,
    borderWidth: 1,
    borderColor: Colors.border,
    borderLeftWidth: 3,
    padding: Spacing.md,
    marginBottom: Spacing.sm,
  },
  cardTop: {
    flexDirection: "row",
    gap: Spacing.sm,
    marginBottom: Spacing.sm,
  },
  cardMeta: {
    flex: 1,
  },
  titleRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
    flexWrap: "wrap",
    marginBottom: 4,
  },
  projectTitle: {
    fontFamily: "Poppins",
    fontSize: 14,
    color: Colors.textPrimary,
  },
  projectDesc: {
    fontSize: 12,
    color: Colors.textSecondary,
    lineHeight: 18,
  },
  cardBottom: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: 8,
    flexWrap: "wrap",
    gap: 8,
  },
  tagRow: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 5,
    flex: 1,
  },
  tag: {
    paddingHorizontal: 8,
    paddingVertical: 3,
    borderRadius: Radius.sm,
    backgroundColor: Colors.surfaceAlt,
    borderWidth: 1,
    borderColor: Colors.border,
  },
  tagText: {
    fontSize: 10,
    color: Colors.textMuted,
    fontFamily: "Poppins",
  },
  githubBtn: {
    flexDirection: "row",
    alignItems: "center",
    gap: 5,
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: Radius.sm,
    backgroundColor: Colors.surfaceAlt,
    borderWidth: 1,
    borderColor: Colors.border,
  },
  githubText: {
    fontSize: 11,
    color: Colors.textSecondary,
    fontFamily: "Poppins",
  },
});

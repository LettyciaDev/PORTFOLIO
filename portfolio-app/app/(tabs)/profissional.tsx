import { View, Text, StyleSheet, ScrollView } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { Colors, Spacing, Radius } from "@/constants/theme";

const SkillBar = ({
  name,
  level,
  color,
}: {
  name: string;
  level: number;
  color: string;
}) => (
  <View style={styles.skillItem}>
    <View style={styles.skillHeader}>
      <Text style={styles.skillName}>{name}</Text>
      <Text style={[styles.skillLevel, { color }]}>{level}%</Text>
    </View>
    <View style={styles.skillTrack}>
      <View
        style={[
          styles.skillFill,
          { width: `${level}%` as any, backgroundColor: color },
        ]}
      />
    </View>
  </View>
);

const SkillPill = ({ name, color }: { name: string; color: string }) => (
  <View
    style={[
      styles.pill,
      { borderColor: color + "55", backgroundColor: color + "15" },
    ]}
  >
    <Text style={[styles.pillText, { color }]}>{name}</Text>
  </View>
);

export default function ProfissionalScreen() {
  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={styles.content}
      showsVerticalScrollIndicator={false}
    >
      <Text style={styles.pageTitle}>Experiência Profissional</Text>
      <Text style={styles.pageSubtitle}>Carreira e habilidades técnicas</Text>

      <View style={styles.jobCard}>
        <View style={styles.jobHeader}>
          <View style={styles.jobInfo}>
            <Text style={styles.jobTitle}>Desenvolvedora Backend</Text>
            <Text style={styles.companyName}>Lunio</Text>
            <View style={styles.activeRow}>
              <View style={styles.activeDot} />
              <Text style={styles.activeText}>Estagiária · Em andamento</Text>
            </View>
          </View>
        </View>
        <View style={styles.divider} />
        <Text style={styles.jobDesc}>
          Atuando no ciclo de vida completo de APIs RESTful: design,
          desenvolvimento, testes e manutenção. Foco em otimização de
          performance, integridade de dados e boas práticas no ecossistema
          backend.
        </Text>
      </View>

      <Text style={styles.sectionLabel}>Responsabilidades</Text>
      <View style={styles.listCard}>
        {[
          {
            icon: "git-branch-outline" as const,
            text: "Desenvolvimento e manutenção de APIs RESTful",
          },
          {
            icon: "speedometer-outline" as const,
            text: "Otimização de performance de endpoints",
          },
          {
            icon: "shield-checkmark-outline" as const,
            text: "Garantia de integridade e consistência de dados",
          },
          {
            icon: "document-text-outline" as const,
            text: "Documentação técnica de endpoints",
          },
        ].map((item, i) => (
          <View
            key={i}
            style={[styles.listItem, i > 0 && styles.listItemBorder]}
          >
            <Ionicons name={item.icon} size={16} color={Colors.accent} />
            <Text style={styles.listText}>{item.text}</Text>
          </View>
        ))}
      </View>

      {/* Tech skills */}
      <Text style={styles.sectionLabel}>Habilidades Técnicas</Text>

      <View style={styles.skillsCard}>
        <Text style={styles.skillCategory}>Backend</Text>
        <SkillBar name="Java" level={80} color={Colors.amber} />
        <SkillBar name="Python" level={72} color={Colors.cyan} />
        <SkillBar name="C" level={65} color={Colors.pink} />
        <SkillBar name="SQL / Banco de Dados" level={70} color={Colors.green} />
      </View>

      <View style={styles.skillsCard}>
        <Text style={styles.skillCategory}>Frontend</Text>
        <SkillBar name="React / Next.js" level={48} color={Colors.cyan} />
        <SkillBar
          name="JavaScript / TypeScript"
          level={55}
          color={Colors.amber}
        />
        <SkillBar name="Tailwind CSS" level={80} color={Colors.pink} />
      </View>

      <View style={styles.skillsCard}>
        <Text style={styles.skillCategory}>Mobile</Text>
        <SkillBar name="React Native" level={65} color={Colors.accent} />
        <SkillBar name="Expo" level={60} color={Colors.pink} />
        <SkillBar name="Kotlin (básico)" level={40} color={Colors.green} />
      </View>

      <View style={styles.skillsCard}>
        <Text style={styles.skillCategory}>Ferramentas & DevOps</Text>
        <SkillBar name="Git / GitHub" level={85} color={Colors.textSecondary} />
        <SkillBar name="Docker" level={55} color={Colors.cyan} />
        <SkillBar name="Figma" level={70} color={Colors.pink} />
      </View>
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
    lineHeight: 36,
  },
  pageSubtitle: {
    fontSize: 13,
    color: Colors.textSecondary,
    marginBottom: Spacing.lg,
  },
  jobCard: {
    backgroundColor: Colors.surface,
    borderRadius: Radius.xl,
    padding: Spacing.md,
    marginBottom: Spacing.lg,
  },
  jobHeader: {
    flexDirection: "row",
    gap: Spacing.md,
    marginBottom: Spacing.md,
  },
  companyBadge: {
    width: 48,
    height: 48,
    borderRadius: Radius.md,
    backgroundColor: Colors.accentDim,
    alignItems: "center",
    justifyContent: "center",
    flexShrink: 0,
  },
  companyInitial: {
    fontFamily: "Poppins",
    fontSize: 22,
    color: Colors.accent,
  },
  jobInfo: { flex: 1 },
  jobTitle: {
    fontFamily: "Poppins",
    fontSize: 14,
    color: Colors.textPrimary,
    marginBottom: 2,
  },
  companyName: {
    fontSize: 13,
    color: Colors.textSecondary,
    marginBottom: 6,
  },
  activeRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: 6,
  },
  activeDot: {
    width: 6,
    height: 6,
    borderRadius: 3,
    backgroundColor: Colors.green,
  },
  activeText: {
    fontSize: 11,
    color: Colors.green,
    fontFamily: "Poppins",
  },
  divider: {
    height: 1,
    backgroundColor: Colors.border,
    marginBottom: Spacing.md,
  },
  jobDesc: {
    fontSize: 13,
    color: Colors.textSecondary,
    lineHeight: 20,
    marginBottom: Spacing.md,
  },
  jobTags: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 6,
  },
  sectionLabel: {
    fontFamily: "Poppins",
    fontSize: 11,
    color: Colors.textMuted,
    textTransform: "uppercase",
    letterSpacing: 2,
    marginBottom: Spacing.md,
    marginTop: Spacing.sm,
  },
  listCard: {
    backgroundColor: Colors.surface,
    borderRadius: Radius.lg,
    borderWidth: 1,
    borderColor: Colors.border,
    paddingHorizontal: Spacing.md,
    marginBottom: Spacing.lg,
  },
  listItem: {
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
    paddingVertical: 12,
  },
  listItemBorder: {
    borderTopWidth: 1,
    borderTopColor: Colors.border,
  },
  listText: {
    flex: 1,
    fontSize: 13,
    color: Colors.textSecondary,
  },
  skillsCard: {
    backgroundColor: Colors.surface,
    borderRadius: Radius.lg,
    borderWidth: 1,
    borderColor: Colors.border,
    padding: Spacing.md,
    marginBottom: Spacing.sm,
  },
  skillCategory: {
    fontFamily: "Poppins",
    fontSize: 12,
    color: Colors.textSecondary,
    marginBottom: Spacing.md,
    letterSpacing: 1,
    textTransform: "uppercase",
  },
  skillItem: {
    marginBottom: 12,
  },
  skillHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 5,
  },
  skillName: {
    fontSize: 12,
    color: Colors.textSecondary,
  },
  skillLevel: {
    fontFamily: "Poppins",
    fontSize: 11,
  },
  skillTrack: {
    height: 12,
    backgroundColor: Colors.surfaceAlt,
    borderRadius: Radius.full,
    overflow: "hidden",
  },
  skillFill: {
    height: "100%",
    borderRadius: Radius.full,
  },
  pill: {
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: Radius.full,
    borderWidth: 1,
  },
  pillText: {
    fontSize: 11,
    fontFamily: "Poppins",
  },
});

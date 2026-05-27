import { View, Text, StyleSheet, ScrollView } from "react-native";
import { Colors, Spacing, Radius } from "@/constants/theme";

const TimelineItem = ({
  title,
  subtitle,
  period,
  color,
  isLast,
}: {
  title: string;
  subtitle: string;
  period: string;
  color: string;
  isLast?: boolean;
}) => (
  <View style={styles.timelineItem}>
    <View style={styles.timelineLeft}>
      <View
        style={[
          styles.timelineDot,
          { backgroundColor: color, borderColor: color + "44" },
        ]}
      />
      {!isLast && (
        <View
          style={[styles.timelineLine, { backgroundColor: color + "33" }]}
        />
      )}
    </View>
    <View style={[styles.timelineCard, { borderLeftColor: color }]}>
      <Text style={styles.cardPeriod}>{period}</Text>
      <Text style={styles.cardTitle}>{title}</Text>
      <Text style={[styles.cardSubtitle, { color }]}>{subtitle}</Text>
    </View>
  </View>
);

const SubjectCard = ({ name }: { name: string }) => {
  return (
    <View style={styles.subjectCard}>
      <Text style={styles.subjectName}>{name}</Text>
    </View>
  );
};

export default function AcademicoScreen() {
  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={styles.content}
      showsVerticalScrollIndicator={false}
    >
      <Text style={styles.pageTitle}>Experiência Acadêmica</Text>

      <View style={styles.degreeCard}>
        <View style={styles.degreeInfo}>
          <Text style={styles.degreeName}>Ciência da Computação</Text>
          <Text style={styles.degreeInstitution}>
            UNICAP — Universidade Católica de Pernambuco
          </Text>
          <View style={styles.degreeStatus}>
            <View style={styles.statusBadge}>
              <View style={styles.pulseDot} />
              <Text style={styles.statusText}>Em andamento · 5º Período</Text>
            </View>
          </View>
        </View>
      </View>

      <Text style={styles.sectionLabel}>Linha do Tempo</Text>

      <TimelineItem
        title="Ciência da Computação"
        subtitle="UNICAP"
        period="2024 — presente"
        color={Colors.accent}
      />
      <TimelineItem
        title="Ensino Médio Técnico"
        subtitle="Escola Técnica Ginásio Pernambucano"
        period="2021 — 2023"
        color={Colors.accent}
        isLast
      />

      <Text style={styles.sectionLabel}>Disciplinas em Foco</Text>
      <View style={styles.subjectsGrid}>
        {[
          "Análise de Algoritmos",
          "Redes de Computadores",
          "Teste de Software",
          "IA e Machine Learning",
          "Projeto Integrador",
          "Ciência das Redes",
          "Programação Web e Mobile",
        ].map((name) => (
          <SubjectCard key={name} name={name} />
        ))}
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
  degreeCard: {
    flexDirection: "row",
    gap: Spacing.md,
    backgroundColor: Colors.surface,
    borderRadius: Radius.lg,
    borderWidth: 1,
    borderColor: Colors.border,
    padding: Spacing.md,
    marginBottom: Spacing.md,
  },
  degreeIconWrap: {
    width: 48,
    height: 48,
    borderRadius: Radius.md,
    backgroundColor: Colors.accentDim,
    alignItems: "center",
    justifyContent: "center",
    flexShrink: 0,
  },
  degreeIcon: {
    fontSize: 26,
  },
  degreeInfo: {
    flex: 1,
  },
  degreeName: {
    fontFamily: "Poppins",
    fontSize: 14,
    color: Colors.textPrimary,
    marginBottom: 4,
  },
  degreeInstitution: {
    fontSize: 12,
    color: Colors.textSecondary,
    marginBottom: 8,
  },
  degreeStatus: {},
  statusBadge: {
    flexDirection: "row",
    alignItems: "center",
    gap: 6,
    alignSelf: "flex-start",
    backgroundColor: Colors.greenDim || Colors.cyanDim,
    paddingHorizontal: 8,
    paddingVertical: 3,
    borderRadius: Radius.full,
  },
  pulseDot: {
    width: 6,
    height: 6,
    borderRadius: 3,
    backgroundColor: Colors.green,
  },
  statusText: {
    fontSize: 11,
    color: Colors.green,
    fontFamily: "Poppins",
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
  timelineItem: {
    flexDirection: "row",
    gap: 12,
    marginBottom: Spacing.sm,
  },
  timelineLeft: {
    alignItems: "center",
    width: 20,
  },
  timelineDot: {
    width: 12,
    height: 12,
    borderRadius: 6,
    borderWidth: 2,
    marginTop: 16,
  },
  timelineLine: {
    flex: 1,
    width: 2,
    marginTop: 4,
  },
  timelineCard: {
    flex: 1,
    backgroundColor: Colors.surface,
    borderRadius: Radius.md,
    borderWidth: 1,
    borderColor: Colors.border,
    borderLeftWidth: 3,
    padding: Spacing.md,
    marginBottom: Spacing.sm,
  },
  cardPeriod: {
    fontFamily: "Poppins",
    fontSize: 10,
    color: Colors.textMuted,
    marginBottom: 4,
  },
  cardTitle: {
    fontFamily: "Poppins",
    fontSize: 14,
    color: Colors.textPrimary,
    marginBottom: 2,
  },
  cardSubtitle: {
    fontSize: 12,
    marginBottom: 8,
  },
  cardDesc: {
    fontSize: 13,
    color: Colors.textSecondary,
    marginBottom: 10,
  },
  subjectsGrid: {
    gap: 8,
    marginBottom: Spacing.lg,
  },
  subjectCard: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
    backgroundColor: Colors.surface,
    borderRadius: Radius.sm,
    borderWidth: 1,
    paddingHorizontal: 12,
    paddingVertical: 16,
  },
  subjectActive: {
    backgroundColor: Colors.cyanDim,
  },
  subjectName: {
    fontSize: 14,
    color: Colors.textSecondary,
  },
});

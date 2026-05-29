import { View, Text, StyleSheet, ScrollView } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { Colors, Spacing, Radius } from "@/constants/theme";

const SectionHeader = ({ title }: { title: string }) => (
  <View style={styles.sectionHeader}>
    <View style={styles.sectionLine} />
    <Text style={styles.sectionTitle}>{title}</Text>
    <View style={styles.sectionLine} />
  </View>
);

const TechBadge = ({ name, color }: { name: string; color: string }) => (
  <View style={[styles.techBadge, { borderColor: color + "44" }]}>
    <Text style={[styles.techName, { color }]}>{name}</Text>
  </View>
);

const InfoRow = ({ label, value }: { label: string; value: string }) => (
  <View style={styles.infoRow}>
    <Text style={styles.infoLabel}>{label}</Text>
    <Text style={styles.infoValue}>{value}</Text>
  </View>
);

export default function SobreScreen() {
  const techStack = [
    {
      category: "Framework",
      items: [
        {
          name: "React Native",
          color: Colors.cyan,
        },
        {
          name: "Expo SDK 54",
          color: Colors.accentLight,
        },
        {
          name: "Expo Router v4",
          color: Colors.accent,
        },
      ],
    },
    {
      category: "Linguagem",
      items: [
        {
          name: "TypeScript",
          color: Colors.cyan,
        },
        {
          name: "TSX / JSX",
          color: Colors.green,
        },
      ],
    },
    {
      category: "Navegação",
      items: [
        {
          name: "Expo Router",
          color: Colors.amber,
        },
        {
          name: "File-based Routing",
          color: Colors.amber,
        },
        {
          name: "Tab Navigator",
          color: Colors.pink,
        },
        {
          name: "Stack Navigator",
          color: Colors.pink,
        },
      ],
    },
    {
      category: "UI & Estilo",
      items: [
        {
          name: "StyleSheet API",
          color: Colors.accentLight,
        },
        {
          name: "LinearGradient",
          color: Colors.pink,
        },
        {
          name: "@expo/vector-icons",
          color: Colors.cyan,
        },
      ],
    },
    {
      category: "Componentes Nativos",
      items: [
        {
          name: "ScrollView",
          color: Colors.textSecondary,
        },
        {
          name: "FlatList",
          color: Colors.textSecondary,
        },
        {
          name: "TouchableOpacity",
          color: Colors.textSecondary,
        },
        {
          name: "Linking API",
          color: Colors.textSecondary,
        },
      ],
    },
    {
      category: "Extras",
      items: [
        {
          name: "expo-splash-screen",
          color: Colors.amber,
        },
        {
          name: "expo-status-bar",
          color: Colors.amber,
        },
        {
          name: "expo-font",
          color: Colors.amber,
        },
        {
          name: "Poppins Font",
          color: Colors.amber,
        },
      ],
    },
  ];

  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={styles.content}
      showsVerticalScrollIndicator={false}
    >
      <Text style={styles.pageTitle}>Sobre o App</Text>
      <Text style={styles.pageSubtitle}>
        Portfólio desenvolvido com React Native + Expo
      </Text>

      <View style={styles.appCard}>
        <View>
          <Text style={styles.appName}>Lettycia.dev</Text>
          <Text style={styles.appVersion}>v1.0.0 · Expo SDK 52</Text>
        </View>
      </View>

      <View style={styles.metaCard}>
        <InfoRow label="Autora" value="Lettycia Vitória" />
        <View style={styles.divider} />
        <InfoRow label="Plataforma" value="iOS · Android · Web" />
        <View style={styles.divider} />
        <InfoRow label="Arquitetura" value="File-based Routing" />
        <View style={styles.divider} />
        <InfoRow label="Orientação" value="Portrait" />
        <View style={styles.divider} />
        <InfoRow label="Tema" value="Dark Mode" />
      </View>

      <SectionHeader title="Stack Tecnológico" />

      {techStack.map((group) => (
        <View key={group.category} style={styles.techGroup}>
          <Text style={styles.techCategory}>{group.category}</Text>
          <View style={styles.techRow}>
            {group.items.map((tech) => (
              <TechBadge key={tech.name} name={tech.name} color={tech.color} />
            ))}
          </View>
        </View>
      ))}

      <SectionHeader title="Telas do App" />

      {[
        {
          screen: "Home",
          desc: "Apresentação com terminal animado",
          icon: "home-outline" as const,
        },
        {
          screen: "Sobre",
          desc: "Tecnologias utilizadas no desenvolvimento",
          icon: "information-circle-outline" as const,
        },
        {
          screen: "Acadêmico",
          desc: "Formação e experiência universitária",
          icon: "school-outline" as const,
        },
        {
          screen: "Profissional",
          desc: "Experiência de trabalho e habilidades",
          icon: "briefcase-outline" as const,
        },
        {
          screen: "Projetos",
          desc: "Portfolio de projetos desenvolvidos",
          icon: "code-slash-outline" as const,
        },
        {
          screen: "Jogo",
          desc: "Jogo da Forca com vocabulário tech",
          icon: "game-controller-outline" as const,
        },
      ].map((item) => (
        <View key={item.screen} style={styles.screenItem}>
          <View style={styles.screenIconWrap}>
            <Ionicons name={item.icon} size={20} color={Colors.accent} />
          </View>
          <View>
            <Text style={styles.screenName}>{item.screen}</Text>
            <Text style={styles.screenDesc}>{item.desc}</Text>
          </View>
        </View>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: Colors.background },
  content: { padding: Spacing.md, paddingTop: 56, paddingBottom: Spacing.xxl },
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
  appCard: {
    flexDirection: "row",
    alignItems: "center",
    gap: Spacing.md,
    backgroundColor: Colors.surface,
    borderRadius: Radius.lg,
    borderWidth: 1,
    borderColor: Colors.border,
    padding: Spacing.md,
    marginBottom: Spacing.sm,
  },
  appName: { fontFamily: "Poppins", fontSize: 16, color: Colors.textPrimary },
  appVersion: { fontSize: 12, color: Colors.textSecondary, marginTop: 2 },
  metaCard: {
    backgroundColor: Colors.surface,
    borderRadius: Radius.lg,
    borderWidth: 1,
    borderColor: Colors.border,
    padding: Spacing.md,
    marginBottom: Spacing.lg,
  },
  infoRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: 8,
  },
  infoLabel: { fontSize: 13, color: Colors.textSecondary },
  infoValue: {
    fontSize: 13,
    color: Colors.textPrimary,
    fontFamily: "Poppins",
  },
  divider: { height: 1, backgroundColor: Colors.border },
  sectionHeader: {
    flexDirection: "row",
    alignItems: "center",
    gap: Spacing.sm,
    marginVertical: Spacing.md,
  },
  sectionLine: { flex: 1, height: 1, backgroundColor: Colors.border },
  sectionTitle: {
    fontFamily: "Poppins",
    fontSize: 12,
    color: Colors.textMuted,
    textTransform: "uppercase",
    letterSpacing: 2,
  },
  techGroup: { marginBottom: Spacing.md },
  techCategory: {
    fontSize: 12,
    color: Colors.textSecondary,
    marginBottom: 8,
    letterSpacing: 1,
    textTransform: "uppercase",
  },
  techRow: { flexDirection: "row", flexWrap: "wrap", gap: 8 },
  techBadge: {
    flexDirection: "row",
    alignItems: "center",
    gap: 6,
    paddingHorizontal: 10,
    paddingVertical: 6,
    borderRadius: Radius.full,
    borderWidth: 1,
    backgroundColor: Colors.surface,
  },
  techName: { fontSize: 12, fontFamily: "Poppins" },
  screenItem: {
    flexDirection: "row",
    alignItems: "center",
    gap: Spacing.md,
    paddingVertical: Spacing.sm,
    borderBottomWidth: 1,
    borderBottomColor: Colors.border,
  },
  screenIconWrap: {
    width: 36,
    height: 36,
    borderRadius: Radius.sm,
    backgroundColor: Colors.accentDim,
    alignItems: "center",
    justifyContent: "center",
  },
  screenName: {
    fontFamily: "Poppins",
    fontSize: 13,
    color: Colors.textPrimary,
  },
  screenDesc: { fontSize: 12, color: Colors.textSecondary, marginTop: 2 },
});

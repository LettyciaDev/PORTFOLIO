import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Linking,
  Animated,
  Image,
} from "react-native";
import { useEffect, useRef } from "react";
import { LinearGradient } from "expo-linear-gradient";
import { Ionicons } from "@expo/vector-icons";
import { Colors, Spacing, Radius } from "@/constants/theme";

export default function HomeScreen() {
  const cursorOpacity = useRef(new Animated.Value(1)).current;

  useEffect(() => {
    Animated.loop(
      Animated.sequence([
        Animated.timing(cursorOpacity, {
          toValue: 0,
          duration: 500,
          useNativeDriver: true,
        }),
        Animated.timing(cursorOpacity, {
          toValue: 1,
          duration: 500,
          useNativeDriver: true,
        }),
      ]),
    ).start();
  }, []);

  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={styles.content}
      showsVerticalScrollIndicator={false}
    >
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Lettycia.dev</Text>
      </View>

      <View style={styles.bioCard}>
        <LinearGradient
          colors={[Colors.accentDim, "transparent"]}
          style={styles.bioGradient}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 1 }}
        />

        <Image
          source={require("@/assets/images/profile.jpeg")}
          style={styles.profileImage}
        />

        <Text style={styles.bioName}>Lettycia Vitória</Text>

        <Text style={styles.bioBadge}>Desenvolvedora Full-stack</Text>

        <Text style={styles.bioDesc}>
          Entusiasta da tecnologia movida por curiosidade intelectual.
          {"\n"}
          Estagiária Backend · Unicap · 5º período
        </Text>

        <View style={styles.bioLinks}>
          <TouchableOpacity
            style={styles.linkBtn}
            onPress={() => Linking.openURL("https://github.com/LettyciaDev")}
          >
            <Ionicons name="logo-github" size={18} color={Colors.textPrimary} />

            <Text style={styles.linkText}>GitHub</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.linkBtn}
            onPress={() =>
              Linking.openURL("https://linkedin.com/in/lettycia-vitoria")
            }
          >
            <Ionicons name="logo-linkedin" size={18} color={Colors.cyan} />

            <Text style={[styles.linkText, { color: Colors.cyan }]}>
              LinkedIn
            </Text>
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.statsRow}>
        {[
          {
            label: "Projetos",
            value: "6+",
            color: Colors.accent,
          },
          {
            label: "Linguagens",
            value: "5+",
            color: Colors.cyan,
          },
          {
            label: "Semestres",
            value: "5",
            color: Colors.amber,
          },
        ].map((stat) => (
          <View key={stat.label} style={styles.statCard}>
            <Text style={[styles.statValue, { color: stat.color }]}>
              {stat.value}
            </Text>

            <Text style={styles.statLabel}>{stat.label}</Text>
          </View>
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

  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: Spacing.lg,
  },

  headerTitle: {
    fontFamily: "Poppins",
    fontSize: 20,
    color: Colors.textPrimary,
    letterSpacing: 1,
  },

  bioCard: {
    backgroundColor: Colors.surface,
    borderRadius: Radius.xl,
    borderWidth: 1,
    borderColor: Colors.border,
    padding: Spacing.lg,
    alignItems: "center",
    marginVertical: Spacing.md,
    overflow: "hidden",
  },

  bioGradient: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    height: 120,
  },

  profileImage: {
    width: 90,
    height: 90,
    borderRadius: 45,
    marginBottom: Spacing.sm,
    borderWidth: 2,
    borderColor: Colors.accent,
  },

  bioName: {
    fontFamily: "Poppins",
    fontSize: 20,
    color: Colors.textPrimary,
    marginBottom: 6,
  },

  bioBadge: {
    fontSize: 12,
    color: Colors.accentLight,
    backgroundColor: Colors.accentDim,
    paddingHorizontal: 12,
    paddingVertical: 4,
    borderRadius: Radius.full,
    marginBottom: Spacing.md,
    fontFamily: "Poppins",
  },

  bioDesc: {
    fontSize: 13,
    color: Colors.textSecondary,
    textAlign: "center",
    lineHeight: 20,
    marginBottom: Spacing.md,
  },

  bioLinks: {
    flexDirection: "row",
    gap: Spacing.sm,
  },

  linkBtn: {
    flexDirection: "row",
    alignItems: "center",
    gap: 6,
    backgroundColor: Colors.surfaceAlt,
    paddingHorizontal: 14,
    paddingVertical: 8,
    borderRadius: Radius.md,
    borderWidth: 1,
    borderColor: Colors.border,
  },

  linkText: {
    fontFamily: "Poppins",
    fontSize: 12,
    color: Colors.textPrimary,
  },

  statsRow: {
    flexDirection: "row",
    gap: Spacing.sm,
  },

  statCard: {
    flex: 1,
    backgroundColor: Colors.surface,
    borderRadius: Radius.lg,
    borderWidth: 1,
    borderColor: Colors.border,
    padding: Spacing.md,
    alignItems: "center",
  },

  statValue: {
    fontFamily: "Poppins",
    fontSize: 24,
    fontWeight: "700",
  },

  statLabel: {
    fontSize: 11,
    color: Colors.textSecondary,
    marginTop: 2,
  },
});

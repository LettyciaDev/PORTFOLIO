import { Tabs } from "expo-router";
import { View, Text, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { Colors, Radius } from "@/constants/theme";

type TabIconProps = {
  name: keyof typeof Ionicons.glyphMap;
  focused: boolean;
  label: string;
};

function TabIcon({ name, focused, label }: TabIconProps) {
  return (
    <View style={[styles.iconWrap, focused && styles.iconActive]}>
      <Ionicons
        name={name}
        size={16}
        color={focused ? Colors.accent : Colors.textMuted}
      />
      <Text style={[styles.label, focused && styles.labelActive]}>{label}</Text>
    </View>
  );
}

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          backgroundColor: Colors.surface,
          borderTopColor: Colors.border,
          borderTopWidth: 1,
          height: 64,
          paddingBottom: 8,
          paddingTop: 6,
        },
        tabBarShowLabel: false,
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          tabBarIcon: ({ focused }) => (
            <TabIcon name="home-outline" focused={focused} label="Home" />
          ),
        }}
      />
      <Tabs.Screen
        name="sobre"
        options={{
          tabBarIcon: ({ focused }) => (
            <TabIcon
              name="information-circle-outline"
              focused={focused}
              label="Sobre"
            />
          ),
        }}
      />
      <Tabs.Screen
        name="academico"
        options={{
          tabBarIcon: ({ focused }) => (
            <TabIcon
              name="school-outline"
              focused={focused}
              label="Acadêmico"
            />
          ),
        }}
      />
      <Tabs.Screen
        name="profissional"
        options={{
          tabBarIcon: ({ focused }) => (
            <TabIcon
              name="briefcase-outline"
              focused={focused}
              label="Profissional"
            />
          ),
        }}
      />
      <Tabs.Screen
        name="projetos"
        options={{
          tabBarIcon: ({ focused }) => (
            <TabIcon
              name="code-slash-outline"
              focused={focused}
              label="Projetos"
            />
          ),
        }}
      />
      <Tabs.Screen
        name="jogo"
        options={{
          tabBarIcon: ({ focused }) => (
            <TabIcon
              name="game-controller-outline"
              focused={focused}
              label="Jogo"
            />
          ),
        }}
      />
    </Tabs>
  );
}

const styles = StyleSheet.create({
  iconWrap: {
    alignItems: "center",
    justifyContent: "center",
    gap: 1,
    paddingHorizontal: 7,
    paddingVertical: 4,
    borderRadius: Radius.sm,
  },
  iconActive: { backgroundColor: Colors.accentDim },
  label: { fontSize: 6, color: Colors.textMuted, fontFamily: "Poppins" },
  labelActive: { color: Colors.accentLight },
});

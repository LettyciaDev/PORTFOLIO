# 📱 lettycia.dev — Portfólio React Native + Expo

App de portfólio profissional desenvolvido em React Native com Expo SDK 52 e Expo Router v4.

## 🗂 Estrutura do Projeto

```
portfolio-app/
├── app/
│   ├── _layout.tsx              # Root layout (fontes, status bar, splash)
│   ├── index.tsx                # Redirect → (tabs)
│   └── (tabs)/
│       ├── _layout.tsx          # Tab navigator com 6 abas
│       ├── index.tsx            # 🏠 Home — Terminal animado + bio
│       ├── sobre.tsx            # ℹ️  Sobre — Stack tecnológico do app
│       ├── academico.tsx        # 🎓 Acadêmico — Formação e disciplinas
│       ├── profissional.tsx     # 💼 Profissional — Carreira e skills
│       ├── projetos.tsx         # 🚀 Projetos — Portfolio de projetos
│       └── jogo.tsx             # 🎮 Jogo — Jogo da Forca nativo
├── constants/
│   └── theme.ts                 # Design tokens (cores, espaçamentos, raios)
├── assets/
│   └── fonts/
│       └── SpaceMono-Regular.ttf
├── app.json
├── babel.config.js
├── tsconfig.json
└── package.json
```

## 🚀 Como rodar

### Pré-requisitos
- Node.js 18+
- npm ou yarn
- Expo CLI: `npm install -g expo-cli`
- Para iOS: Xcode (macOS only) ou app Expo Go
- Para Android: Android Studio ou app Expo Go

### Instalação

```bash
# 1. Entrar na pasta
cd portfolio-app

# 2. Instalar dependências
npm install

# 3. Adicionar a fonte SpaceMono
# Baixar de: https://fonts.google.com/specimen/Space+Mono
# Colocar em: assets/fonts/SpaceMono-Regular.ttf

# 4. Rodar o app
npx expo start
```

### Rodando nos dispositivos

```bash
# No emulador Android
npx expo start --android

# No simulador iOS
npx expo start --ios

# No navegador Web
npx expo start --web

# Escaneando QR Code com Expo Go (físico)
npx expo start
```

## 📦 Dependências Principais

| Pacote | Versão | Uso |
|--------|--------|-----|
| `expo` | ~52.0.0 | SDK principal |
| `expo-router` | ~4.0.0 | Navegação file-based |
| `expo-linear-gradient` | ~14.0.0 | Gradientes na UI |
| `expo-font` | ~13.0.0 | Carregamento de fontes |
| `expo-splash-screen` | ~0.29.0 | Tela de splash |
| `react-native` | 0.76.5 | Framework mobile |
| `@expo/vector-icons` | ^14.0.0 | Ícones Ionicons |
| `react-native-screens` | ~4.1.0 | Navegação nativa |

## 🎨 Design System

O app usa tema dark com palette coesa definida em `constants/theme.ts`:

- **Background**: `#0f0f1a` (dark navy)
- **Surface**: `#161625`
- **Accent**: `#7c6af7` (purple)
- **Cyan**: `#36d8c8`
- **Amber**: `#f5b942`
- **Pink**: `#f06ba0`
- **Font**: SpaceMono (monospace) para títulos e código

## 🗺️ Telas

| Tela | Rota | Descrição |
|------|------|-----------|
| Home | `/(tabs)` | Terminal animado + bio + links sociais |
| Sobre | `/(tabs)/sobre` | Stack tecnológico do app, telas, versões |
| Acadêmico | `/(tabs)/academico` | Formação, timeline, disciplinas, interesses |
| Profissional | `/(tabs)/profissional` | Cargo, responsabilidades, skill bars |
| Projetos | `/(tabs)/projetos` | 6 projetos com cards e links GitHub |
| Jogo | `/(tabs)/jogo` | Jogo da Forca 100% nativo com vocabulário tech |

## 🎮 Jogo da Forca

- Implementado **100% nativo** em React Native (sem WebView)
- Forca desenhada com `View` components posicionados absolutamente
- 35 palavras do vocabulário de tecnologia
- Animação de shake ao errar (Animated API)
- Teclado QWERTY com feedback visual (verde = acerto, rosa = erro)
- Indicador de vidas com bolinhas coloridas

## 🔧 Arquitetura

- **File-based routing** via Expo Router (diretório `app/`)
- **TypeScript** em todos os arquivos
- **Animated API** nativa para animações (sem bibliotecas externas)
- **StyleSheet API** para estilos performáticos
- **Design tokens** centralizados em `constants/theme.ts`

## 📋 Comandos Úteis

```bash
# Limpar cache
npx expo start --clear

# Build para produção (EAS)
npx eas build --platform android
npx eas build --platform ios

# Checar dependências
npx expo doctor
```

---

Desenvolvido com 💜 por **Lettycia Vitória** · [GitHub](https://github.com/LettyciaDev)

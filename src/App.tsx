import React from 'react';
import { 
  Mic, 
  Dna as Training, 
  Compass, 
  User, 
  Settings, 
  ChevronLeft, 
  Heart, 
  Lock, 
  Music, 
  ChevronRight, 
  TrendingUp, 
  Activity, 
  Bot, 
  MoreHorizontal, 
  MessageCircle, 
  Share2, 
  PlayCircle, 
  Maximize2, 
  AlertCircle, 
  Sparkles, 
  Smile, 
  Zap, 
  Award
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { cn } from './lib/utils';

// --- Types ---
type Tab = 'home' | 'training' | 'discovery' | 'profile';

// --- Components ---

const BottomNav = ({ activeTab, setActiveTab }: { activeTab: Tab, setActiveTab: (tab: Tab) => void }) => {
  const tabs: { id: Tab, label: string, icon: React.ElementType }[] = [
    { id: 'home', label: '首页', icon: Mic },
    { id: 'training', label: '训练系统', icon: Training },
    { id: 'discovery', label: '发现社区', icon: Compass },
    { id: 'profile', label: '导师', icon: Bot },
  ];

  return (
    <nav className="fixed bottom-0 w-full rounded-t-[2.5rem] z-50 bg-[#faf3e9]/90 backdrop-blur-lg border-t border-[#b9b1a3]/10 shadow-[0_-4px_24px_rgba(121,86,78,0.06)]">
      <div className="flex justify-around items-center h-20 px-4 w-full max-w-md mx-auto pb-safe">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={cn(
              "flex flex-col items-center justify-center transition-all duration-300 ease-in-out",
              activeTab === tab.id 
                ? "text-primary scale-110" 
                : "text-on-surface-variant/60 hover:text-primary"
            )}
          >
            <tab.icon className={cn("w-6 h-6", activeTab === tab.id && "fill-current")} />
            <span className="text-[10px] font-medium tracking-wide mt-1">{tab.label}</span>
          </button>
        ))}
      </div>
    </nav>
  );
};

const Header = ({ title, showBack = false, onBack, rightIcon: RightIcon }: { title: string, showBack?: boolean, onBack?: () => void, rightIcon?: React.ElementType }) => {
  return (
    <header className="fixed top-0 w-full z-50 bg-[#faf3e9]/80 backdrop-blur-xl border-b border-[#b9b1a3]/15 shadow-sm h-16 flex items-center justify-center">
      <div className="w-full max-w-md px-6 flex justify-between items-center">
        <div className="flex items-center gap-3">
          {showBack && (
            <button onClick={onBack} className="text-primary active:scale-95 transition-transform">
              <ChevronLeft className="w-6 h-6" />
            </button>
          )}
          <h1 className="font-bold text-lg tracking-tight text-on-surface">{title}</h1>
        </div>
        {RightIcon && (
          <button className="text-on-surface-variant active:scale-95 transition-transform">
            <RightIcon className="w-6 h-6" />
          </button>
        )}
      </div>
    </header>
  );
};

// --- Views ---

const HomeView = () => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      className="pt-20 pb-28 px-6 space-y-8"
    >
      <section className="relative flex flex-col items-center">
        <div className="absolute -top-4 -left-4 w-32 h-32 bg-primary-container/30 rounded-full blur-3xl" />
        <div className="absolute bottom-0 -right-4 w-40 h-40 bg-secondary-container/40 rounded-full blur-3xl" />
        <div className="relative w-64 h-64 flex items-center justify-center">
          <img 
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuB5G4ncESr98iRCkJfEBvbID4uU316um_QKb98aIpx5gFwbPLH0GBlRa9D9KecSqXxWny7rWUyJtpt__WGgvRc_GSBAgIKI0cz20zs2h_3tWCffC6VNzGLM2gzPMpuwWIiXowhkIANohi8H2H4hzr2w9yXhumw5F3OxCFGNvl_nhg8XFqnlB_cWBKQV58CCIFyGzI58PyfP3GULkqigDkCjuTSGCVcmretVCehOyuY4i2FYLj5DlcBzVqhzcZhvgHVXwB5EprzEu-1E" 
            alt="AI Mentor" 
            className="w-full h-full object-contain drop-shadow-2xl rounded-3xl"
            referrerPolicy="no-referrer"
          />
        </div>
        <div className="text-center mt-4 space-y-2">
          <h2 className="text-2xl font-extrabold tracking-tight">你好，准备好开嗓了吗？</h2>
          <p className="text-on-surface-variant text-sm px-8">我是你的音准导师，今天我们从轻松的呼吸练习开始吧。</p>
        </div>
      </section>

      <section className="px-2">
        <button className="w-full py-5 bg-primary rounded-full flex items-center justify-center gap-3 text-on-primary font-bold text-lg shadow-lg active:scale-95 transition-all duration-300 overflow-hidden relative group">
          <div className="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity" />
          <Mic className="w-6 h-6 fill-current" />
          <span>开始音准诊断</span>
        </button>
      </section>

      <section className="grid grid-cols-2 gap-4">
        <div className="glass-card p-5 rounded-[2rem] flex flex-col gap-3 justify-between hover:bg-white/60 transition-colors cursor-pointer">
          <div className="w-12 h-12 rounded-2xl bg-secondary-container flex items-center justify-center text-secondary">
            <Training className="w-6 h-6 fill-current" />
          </div>
          <div>
            <h3 className="font-bold">镜像跟唱训练</h3>
            <p className="text-[11px] text-on-surface-variant mt-1 leading-tight">通过视觉反馈实时调整口型与姿态</p>
          </div>
        </div>
        <div className="glass-card p-5 rounded-[2rem] flex flex-col gap-3 justify-between hover:bg-white/60 transition-colors cursor-pointer">
          <div className="w-12 h-12 rounded-2xl bg-tertiary-container flex items-center justify-center text-tertiary">
            <TrendingUp className="w-6 h-6" />
          </div>
          <div>
            <h3 className="font-bold">视觉纠偏</h3>
            <p className="text-[11px] text-on-surface-variant mt-1 leading-tight">波形图谱深度分析音高稳定性</p>
          </div>
        </div>
        <div className="col-span-2 glass-card p-5 rounded-[2rem] flex items-center justify-between gap-4 hover:bg-white/60 transition-colors cursor-pointer">
          <div className="flex items-center gap-4">
            <div className="w-14 h-14 rounded-2xl bg-primary-container flex items-center justify-center text-primary">
              <Music className="w-8 h-8" />
            </div>
            <div>
              <h3 className="font-bold">生成专属练习曲</h3>
              <p className="text-xs text-on-surface-variant mt-1">根据你的音域AI定制旋律</p>
            </div>
          </div>
          <ChevronRight className="w-6 h-6 text-outline-variant" />
        </div>
      </section>
    </motion.div>
  );
};

const TrainingView = () => {
  return (
    <motion.div 
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -20 }}
      className="pt-20 pb-28 px-4 space-y-6"
    >
      <section className="relative h-[420px] w-full rounded-[2rem] overflow-hidden bg-surface-container-low shadow-sm border border-outline-variant/10">
        <div className="absolute top-6 left-6 z-10 flex flex-col gap-1">
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-secondary" />
            <span className="text-[10px] font-bold tracking-widest text-on-surface-variant/70 uppercase">Real-time Analysis</span>
          </div>
          <h2 className="text-2xl font-extrabold">C4 <span className="text-sm font-medium text-secondary/70">261.6 Hz</span></h2>
        </div>

        <div className="absolute top-4 right-4 z-20 w-28 h-40 rounded-2xl glass-card shadow-2xl overflow-hidden border border-white/20">
          <img 
            className="w-full h-full object-cover grayscale opacity-80" 
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuDauZ67A1muHasavllHWyihmSyfBWpMjWpZthQ-IRQbx1vJ2AOUTZwMR9MHYgBIyMlMnB4kxzNU1CMvFk1W-zo9l1pHsQRDIHJ7cKgjYCgs8K4XlG06QoI_gmzKUtT7clCDPvf9nvIDrxw933jAi-J6kCd6yzOvD5vleO2RwcurBe26UNJEZT6Tcw8P_G_QcAznJogrcP8j4tfkhvCjltoTEijitIiNO3OQoytUphLtMau9vQfzWDEjom_pJ5MWU9GSvRjD2puPQFLk" 
            alt="Pose Monitor"
            referrerPolicy="no-referrer"
          />
          <div className="absolute bottom-2 left-0 w-full text-center">
            <span className="text-[9px] font-bold text-on-surface-variant bg-surface-container-highest/80 px-2 py-0.5 rounded-full">姿态监控</span>
          </div>
        </div>

        <div className="absolute inset-0 flex flex-col justify-center p-8">
          <svg className="w-full h-full" viewBox="0 0 400 200">
            <path d="M0 100 Q 100 80, 200 100 T 400 100" fill="none" className="stroke-tertiary/40" strokeDasharray="8 4" strokeWidth="3" />
            <path d="M0 110 Q 50 115, 100 90 T 200 105 T 300 95 T 400 102" fill="none" className="stroke-secondary" strokeLinecap="round" strokeWidth="4" />
            <circle cx="100" cy="90" className="fill-secondary" r="4" />
            <circle cx="300" cy="95" className="fill-secondary" r="4" />
          </svg>
        </div>

        <div className="absolute bottom-6 left-6 flex gap-4">
          <div className="flex items-center gap-2">
            <div className="w-3 h-0.5 bg-secondary" />
            <span className="text-[11px] font-medium text-on-surface-variant">实时音准线</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-0.5 border-t border-dashed border-tertiary/60" />
            <span className="text-[11px] font-medium text-on-surface-variant">目标频率线</span>
          </div>
        </div>
      </section>

      <div className="grid grid-cols-2 gap-4">
        <div className="p-5 rounded-[1.5rem] bg-secondary-container/30 border border-secondary-container/50">
          <p className="text-[10px] font-bold text-secondary/70 uppercase tracking-wider mb-1">Accuracy</p>
          <p className="text-3xl font-bold text-secondary">94<span className="text-lg">%</span></p>
        </div>
        <div className="p-5 rounded-[1.5rem] bg-tertiary-container/30 border border-tertiary-container/50">
          <p className="text-[10px] font-bold text-tertiary/70 uppercase tracking-wider mb-1">Stability</p>
          <p className="text-3xl font-bold text-tertiary">良好</p>
        </div>
      </div>

      <div className="relative group">
        <div className="absolute -inset-0.5 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-[2rem] blur opacity-30" />
        <button className="relative w-full py-6 px-8 rounded-[2rem] bg-surface-container-highest flex items-center justify-between group active:scale-[0.98] transition-all duration-300">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center text-on-primary shadow-lg shadow-primary/20">
              <Mic className="w-6 h-6 fill-current" />
            </div>
            <div className="text-left">
              <span className="block text-sm font-bold">播放“完美的你”</span>
              <span className="text-[11px] text-on-surface-variant/70">由 RVC 引擎实时合成 AI 音质</span>
            </div>
          </div>
          <div className="opacity-30 group-hover:opacity-60 transition-opacity">
            <Training className="w-8 h-8" />
          </div>
        </button>
      </div>

      <section className="p-6 rounded-[2rem] bg-surface-container-low border border-outline-variant/15 space-y-5">
        <div className="flex justify-between items-center">
          <h3 className="font-bold">训练参数</h3>
          <Settings className="w-4 h-4 text-on-surface-variant" />
        </div>
        <div className="space-y-4">
          <div className="space-y-2">
            <div className="flex justify-between text-[11px] font-bold text-on-surface-variant/80">
              <span>情感张力 (Vibrato)</span>
              <span>0.85</span>
            </div>
            <div className="h-1.5 w-full bg-surface-container-highest rounded-full overflow-hidden">
              <div className="h-full w-[85%] bg-primary rounded-full" />
            </div>
          </div>
          <div className="space-y-2">
            <div className="flex justify-between text-[11px] font-bold text-on-surface-variant/80">
              <span>共鸣强度 (Resonance)</span>
              <span>0.42</span>
            </div>
            <div className="h-1.5 w-full bg-surface-container-highest rounded-full overflow-hidden">
              <div className="h-full w-[42%] bg-secondary rounded-full" />
            </div>
          </div>
        </div>
      </section>
    </motion.div>
  );
};

const DiscoveryView = () => {
  return (
    <motion.div 
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: 20 }}
      className="pt-24 pb-32 px-6 space-y-10"
    >
      <section className="space-y-6">
        <div className="flex items-baseline justify-between">
          <h2 className="text-2xl font-bold tracking-tight">练习曲推荐</h2>
          <span className="text-xs font-medium text-primary tracking-widest uppercase">Weekly Hot</span>
        </div>
        <div className="relative group overflow-hidden rounded-[2rem] organic-grain bg-primary-container h-64 flex items-end p-8 cursor-pointer">
          <img 
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuD33EmKZ8L14-HwEhk1L6b1b9IKQidPjrAQ56HxX3W2-8eszUWmxcJyQPX9519XNyPkbYYJ7FqBHEOFXFdNqoKhk1Qp-q2rF6zWa5sv-nDLLx3BZIKf-zWzlpn2zZAQdRtq9MrUp1hxjvXJaN_Tm5e8bnAT0a0k8DGMuYHArzVRK7qqa8RClzg4WBOig9SBO4kd-UJ7Urk9nZUZ7aqgTLI7qra58J7OeGwbS9Gm_p-baaTOA-CYAXFR0kBClpdrp_WZ9giRWvw9GGZ9" 
            alt="Piano sheet music" 
            className="absolute inset-0 w-full h-full object-cover mix-blend-multiply opacity-60"
            referrerPolicy="no-referrer"
          />
          <div className="relative z-10 flex flex-col">
            <span className="inline-block px-3 py-1 bg-surface-container-lowest/80 backdrop-blur-md rounded-full text-[10px] font-bold text-primary mb-3 self-start">MASTERCLASS</span>
            <h3 className="text-3xl font-bold text-on-primary-container leading-tight mb-2">肖邦：离别练习曲</h3>
            <p className="text-sm text-on-primary-container/80 max-w-[80%]">挑战音准控制与情感表达的巅峰之作</p>
          </div>
        </div>
      </section>

      <section className="space-y-8">
        <div className="flex items-center justify-between sticky top-16 bg-background/90 backdrop-blur-sm py-4 z-40">
          <h2 className="text-xl font-bold">社区分享</h2>
          <div className="flex gap-4">
            <button className="text-sm font-bold text-primary border-b-2 border-primary pb-1">最热</button>
            <button className="text-sm font-medium text-on-surface-variant pb-1">最新</button>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-6">
          <article className="glass-card rounded-[1.5rem] p-5 space-y-4">
            <div className="flex items-center gap-3">
              <img 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCj_9WKPPked0Cjixynec_40FSokcXEHHrlwSBCeQZ2BZxsHv9-TgaXUBLh8-IOJONdtIMe9O4BYFgrvXEKfBstPixcsvw31OEwOuXTYGfPMZmjjNrUd506_zWHRwSqQfnvXwV98CW-ZIXp-3-5PHGhLLU4oC4Zpc6W8DAE0Qz4j3n9EQ1GL1mZS4bs4mLxtzKGM6gHz9lUbb6j24g8OBUSEVuLbuXWUETSYWON0mBpM3GctmxUzf-phs6Y199mHvc48LIIc3qIt31N" 
                alt="Avatar" 
                className="w-10 h-10 rounded-full object-cover"
                referrerPolicy="no-referrer"
              />
              <div>
                <p className="text-sm font-bold">林深见鹿</p>
                <p className="text-[10px] text-on-surface-variant">2小时前 · 练习了34分钟</p>
              </div>
              <button className="ml-auto text-outline">
                <MoreHorizontal className="w-5 h-5" />
              </button>
            </div>
            <div className="relative h-40 rounded-xl overflow-hidden">
              <img 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuD_bESOrhOjYBBf9tBdhlD7Iynm6vuioptJgUsnNLlGUUPP8hYcvIpSdZsk4SGmr3L1husFgIJ0N7F25jCPXL-U2vG5pe_nMv2SFeIfPGqoVtItgItzylGV6Exhzv70jAmID5E-rgm7_CLr3CNn5tH2KNawPKkrORwhQL1e3kvGtAEs2WBBeGWxdIbuv1w5rSGFsBTbkuJLONPWbKYa78Vt-j7RTL-i4B7LiLUi133k3REAhbfkrBHsqFKymfaMdKsbcl_red9v8VGC" 
                alt="Violin practice" 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute bottom-3 left-3 flex items-center gap-2 bg-black/30 backdrop-blur-md px-3 py-1.5 rounded-full">
                <Activity className="w-3.5 h-3.5 text-white" />
                <span className="text-[10px] font-bold text-white">音准分 98.2</span>
              </div>
            </div>
            <p className="text-sm text-on-surface-variant leading-relaxed">
              今天尝试了莫扎特的练习曲，高音部分的控制还是有点不稳，AI 建议我注意换把位的连贯性。继续加油！🎹
            </p>
            <div className="flex items-center gap-6 pt-2">
              <div className="flex items-center gap-1.5 text-on-surface-variant">
                <Heart className="w-5 h-5" />
                <span className="text-xs font-medium">128</span>
              </div>
              <div className="flex items-center gap-1.5 text-on-surface-variant">
                <MessageCircle className="w-5 h-5" />
                <span className="text-xs font-medium">24</span>
              </div>
              <div className="flex items-center gap-1.5 text-on-surface-variant ml-auto">
                <Share2 className="w-5 h-5" />
              </div>
            </div>
          </article>
        </div>
      </section>

      <button className="fixed bottom-24 right-6 w-14 h-14 bg-primary text-white rounded-full shadow-lg flex items-center justify-center active:scale-95 transition-transform z-40 organic-grain overflow-hidden">
        <Sparkles className="w-6 h-6" />
      </button>
    </motion.div>
  );
};

const ProfileView = () => {
  return (
    <motion.div 
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 1.05 }}
      className="pt-20 pb-28 px-6 space-y-8"
    >
      <section className="relative flex flex-col items-center py-8">
        <div className="relative w-64 h-64 mb-6 group">
          <img 
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuCHK9qc-mO5IWijYgf69ZetNbzAU-fIRcy2bp6fQhukKuQ2iCLJtYS2jxzCtOlv1Ooi0gVpsbBF0dnYiva15gaMiOChBxaYCidbjwe5BlwAa6FbUDIdtuadn7aIkkgNAwhNzLxNLWhDj-n9LlP8umGxEp_2joldqsJIE17adDQQWL98BqilTWbddpXMB2-vd2efyhicD82onb22ya2ypNoGFKnU0YwoycdroOuLl7nm8A28SPBchFEWPIYPx7oF3GaJPse-rMiAYuur" 
            alt="AI Mentor Cat" 
            className="w-full h-full object-contain drop-shadow-2xl"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 border-2 border-primary/20 rounded-full scale-110 pointer-events-none" />
        </div>
        <h2 className="text-2xl font-extrabold tracking-tight mb-2">AI 导师养成</h2>
        <p className="text-on-surface-variant text-sm mb-6">今日已陪伴你练习了 45 分钟</p>
        <button className="bg-primary text-on-primary px-10 py-3.5 rounded-full font-semibold flex items-center gap-2 organic-grain shadow-lg shadow-primary/10 active:scale-95 transition-all duration-300">
          <Heart className="w-5 h-5 fill-current" />
          互动一下
        </button>
      </section>

      <section className="grid grid-cols-1 gap-4">
        <div className="glass-card rounded-xl p-6 shadow-sm">
          <div className="flex justify-between items-center mb-4">
            <span className="text-sm font-bold">亲密度 Level. 8</span>
            <span className="text-xs text-primary font-medium">还差 120 XP 升级</span>
          </div>
          <div className="h-3 w-full bg-surface-variant rounded-full overflow-hidden flex items-center p-0.5">
            <div className="h-full w-[75%] bg-gradient-to-r from-primary to-primary/60 rounded-full" />
          </div>
          <div className="mt-8">
            <h3 className="text-xs font-bold uppercase tracking-widest text-outline mb-4">性格特征 Personality</h3>
            <div className="flex flex-wrap gap-2">
              <span className="px-4 py-1.5 bg-secondary-container text-on-secondary-container rounded-full text-xs font-medium border border-secondary-container/30">支持型 Supportive</span>
              <span className="px-4 py-1.5 bg-tertiary-container text-on-tertiary-container rounded-full text-xs font-medium border border-tertiary-container/30">耐心 Patient</span>
              <span className="px-4 py-1.5 bg-surface-variant text-on-surface rounded-full text-xs font-medium border border-outline-variant/20">风趣 Fun</span>
            </div>
          </div>
        </div>
      </section>

      <section className="space-y-6">
        <div className="flex justify-between items-end px-2">
          <h3 className="text-lg font-bold">耳机款式</h3>
          <span className="text-xs text-on-surface-variant underline">查看全部</span>
        </div>
        <div className="flex overflow-x-auto gap-4 pb-4 no-scrollbar">
          <div className="flex-shrink-0 w-28 text-center">
            <div className="w-28 h-28 bg-surface-container-high rounded-xl mb-2 flex items-center justify-center border-2 border-primary overflow-hidden shadow-inner">
              <img 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCFsoywIukRjNfpvrnjV9MiOGWTwk9aUANx-ODHVyCYOyMFIhdouh2uWNGbR5jxDiJ0MhhGGBKRfEIa_WxhdOrL7_fpJiX1YzO0QnzxlKgJCvJvKOMhId8NfXRHBUZ6LGdGM3Hu5dktHUbXo6vVHMDiw2w5rKVcwomK7SnbZ6GYN3YGw0nGC6mD7cBSUbHl5jV0djBBH336WMSj6YDZ8Vz2t08PMN2ZxdrIubQXMrBsOI6j9CaLFaBUeKzSt1zBPfRXMBNYBoGBrDo5" 
                alt="Headphones" 
                className="w-20 h-20 object-contain rotate-12"
                referrerPolicy="no-referrer"
              />
            </div>
            <p className="text-[11px] font-bold">极简白 (已选)</p>
          </div>
          <div className="flex-shrink-0 w-28 text-center">
            <div className="w-28 h-28 bg-surface-container rounded-xl mb-2 flex items-center justify-center border border-outline-variant/20 overflow-hidden">
              <img 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCYQRaQmV_SweWxX35wDQCvbrReRVdDkZUELYKrgybUbbpmOKLWNHp9ixySB99ui83VPcKe498p4BEWfbqQDwo6P3TJgeBnSlWPtR4eOBmQdRbjvaAKBNcN7Kk3_0bJrtPbkq9TdIR-lebM0GWGWq2zJGQwxVk2PoLRrzsvmc3VjGqNXc6Z2Bu3fHZaulHQKjgDJ5KvPi1vRvHq9vpr36DofYMDan7lhoOgde3GLpWQgpMvIpheYnCogTARBpP0XDwUog-x2iGQKGgx" 
                alt="Retro Headphones" 
                className="w-20 h-20 object-contain grayscale opacity-60"
                referrerPolicy="no-referrer"
              />
            </div>
            <p className="text-[11px] font-medium text-on-surface-variant">经典复古</p>
          </div>
          <div className="flex-shrink-0 w-28 text-center">
            <div className="w-28 h-28 bg-surface-container rounded-xl mb-2 flex items-center justify-center border border-outline-variant/20 overflow-hidden">
              <div className="w-16 h-16 rounded-full bg-outline-variant/10 flex items-center justify-center">
                <Lock className="w-6 h-6 text-outline" />
              </div>
            </div>
            <p className="text-[11px] font-medium text-on-surface-variant">赛博霓虹</p>
          </div>
        </div>
      </section>
    </motion.div>
  );
};

// --- Main App ---

export default function App() {
  const [activeTab, setActiveTab] = React.useState<Tab>('home');

  const getTitle = () => {
    switch (activeTab) {
      case 'home': return '音准实验室';
      case 'training': return '训练系统';
      case 'discovery': return '发现社区';
      case 'profile': return 'AI 导师设置';
      default: return 'PitchPerfect AI';
    }
  };

  return (
    <div className="min-h-screen bg-background text-on-surface font-sans selection:bg-primary-container selection:text-on-primary-container organic-grain">
      <Header 
        title={getTitle()} 
        rightIcon={activeTab === 'profile' ? Settings : User} 
      />
      
      <main className="max-w-md mx-auto">
        <AnimatePresence mode="wait">
          {activeTab === 'home' && <HomeView key="home" />}
          {activeTab === 'training' && <TrainingView key="training" />}
          {activeTab === 'discovery' && <DiscoveryView key="discovery" />}
          {activeTab === 'profile' && <ProfileView key="profile" />}
        </AnimatePresence>
      </main>

      <BottomNav activeTab={activeTab} setActiveTab={setActiveTab} />
    </div>
  );
}

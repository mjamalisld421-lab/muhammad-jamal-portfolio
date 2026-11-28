import type { Metadata } from "next";
import Link from "next/link";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";

export const metadata: Metadata = {
  title: "UniSigner | Applied AI, Data Science & Computer Vision Research | Muhammad Jamal",
  description:
    "An applied AI research project exploring Pakistan Sign Language recognition through custom dataset engineering, spatial-temporal Vision Transformers, quantitative model evaluation, INT8 model optimization, and GPU-accelerated inference.",
  keywords: ["UniSigner", "Applied AI", "Data Science", "Computer Vision", "Pakistan Sign Language", "PyTorch", "Vision Transformers", "Deep Learning", "Model Evaluation", "ExecuTorch"],
  openGraph: {
    title: "UniSigner — Applied AI, Data Science & Computer Vision Research",
    description: "Custom dataset engineering, spatial-temporal Vision Transformers, transparent evaluation, model optimization, and GPU-assisted application integration.",
    type: "article",
  },
  twitter: {
    card: "summary",
    title: "UniSigner — Applied AI Research Case Study",
    description: "Pakistan Sign Language recognition through dataset engineering, deep learning, quantitative evaluation, and deployment research.",
  },
};

const metrics = [
  ["200", "Stored video samples"],
  ["8", "Balanced isolated-word classes"],
  ["114,190,857", "Reconstructed model parameters"],
  ["75.00%", "Held-out file-level accuracy"],
  ["76.25%", "Macro precision"],
  ["75.00%", "Macro recall"],
  ["73.47%", "Macro F1-score"],
  ["85.35%", "Mean prediction confidence"],
  ["41.84%", "Stored inventory expansion"],
  ["74.64%", "Exported model storage reduction"],
  ["≈625 ms", "Recorded CUDA inference"],
  ["1–3 s", "Observed result-display time"],
];

const classes = [
  ["Father", "ابّو", 25], ["Give", "دو", 25], ["Milk", "دودھ", 25], ["More", "اور", 25],
  ["Mother", "امی", 25], ["No", "نہیں", 25], ["Want", "چاہئے", 25], ["Water", "پانی", 25],
] as const;

const scores = [
  ["Father", 80, 100, 88.89], ["Give", 75, 75, 75], ["Milk", 100, 50, 66.67], ["More", 80, 100, 88.89],
  ["Mother", 50, 75, 60], ["No", 100, 100, 100], ["Want", 75, 75, 75], ["Water", 50, 25, 33.33],
] as const;

const progression = [
  "MediaPipe landmarks", "LSTM temporal modeling", "Bidirectional GRU", "Coordinate normalization", "CNN–BiGRU", "ViT-Base/16", "ViT-Base/8", "Temporal Transformer", "Export & deployment",
];

const modelConfig = [
  ["Spatial encoder", "ViT-Base/8"], ["Input", "30 RGB frames, 224 × 224"], ["Patch resolution", "8 × 8"], ["Spatial tokens", "784 per frame"], ["Feature dimension", "768"], ["Temporal layers", "4"], ["Attention heads", "8"], ["Feed-forward", "3072"], ["Pooling", "Attention-weighted"], ["Output", "8 classes"],
];

const challenges = [
  ["Limited labelled PSL data", "Required custom dataset development"],
  ["Class imbalance", "Addressed numerical imbalance through augmented variants"],
  ["Landmark instability", "Motivated richer full-frame visual representations"],
  ["Recurrent model limits", "Sequence modeling cannot recover missing visual evidence"],
  ["Spatial representation", "Motivated investigation of smaller ViT patches"],
  ["Large model size", "Prompted FP32 and INT8 export experiments"],
  ["Android runtime constraints", "Showed that stored size is not the only memory boundary"],
  ["Temporary cloud infrastructure", "Led to a functional cloud-assisted prototype"],
  ["Class-specific errors", "Required diagnostic, per-class evaluation"],
  ["Limited test data", "Restricts statistical reliability and generalization claims"],
  ["Incomplete provenance", "Identified the need for signer and source lineage"],
];

const roadmap = [
  "Automated dataset integrity auditing and SHA-256 duplicate detection",
  "Perceptual near-duplicate checks and source-to-augmentation lineage",
  "Source-grouped splits and signer-independent evaluation",
  "Reproducible training pipelines, repeated seeds, and confidence intervals",
  "Controlled baselines, ablations, latency, and peak-memory profiling",
  "MobileNetV3, MobileViT, ST-GCN, and pose–RGB fusion investigations",
  "Knowledge distillation, pruning, and quantization-aware training",
  "Confidence calibration and persistent model serving",
  "Continuous recognition, sequence-to-sequence translation, and Urdu NLP research",
  "CTC, mT5, and mBART investigation where methodologically appropriate",
];

function Label({ children }: { children: string }) {
  return <p className="text-xs font-bold uppercase tracking-[0.18em] text-accent">{children}</p>;
}

function Heading({ label, title, copy }: { label: string; title: string; copy?: string }) {
  return <div className="max-w-4xl"><Label>{label}</Label><h2 className="mt-4 text-3xl font-semibold tracking-[-0.04em] text-foreground sm:text-5xl">{title}</h2>{copy ? <p className="mt-5 text-lg leading-8 text-muted-foreground">{copy}</p> : null}</div>;
}

function Bars({ values, label }: { values: { name: string; value: number; color?: string }[]; label: string }) {
  return (
    <div role="img" aria-label={label} className="space-y-3">
      {values.map((item) => <div key={item.name}><div className="mb-1.5 flex justify-between gap-4 text-sm"><span className="font-medium text-foreground">{item.name}</span><span className="tabular-nums text-muted-foreground">{item.value}%</span></div><div className="h-2.5 overflow-hidden rounded-full bg-surface-raised"><div className={`h-full rounded-full ${item.color ?? "bg-accent"}`} style={{ width: `${item.value}%` }} /></div></div>)}
    </div>
  );
}

export default function UniSignerCaseStudy() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "ScholarlyArticle",
    headline: "UniSigner: Pakistani Sign Language to Urdu Translation Using Vision Transformers",
    author: { "@type": "Person", name: "Muhammad Jamal" },
    about: ["Applied AI", "Data Science", "Computer Vision", "Pakistan Sign Language Recognition"],
    url: "https://muhammad-jamal-portfolio.vercel.app/projects/unisigner",
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
      <header className="sticky top-0 z-50 border-b border-border/80 bg-background/90 backdrop-blur-xl">
        <Container><nav className="flex min-h-16 items-center justify-between gap-4" aria-label="Case study navigation"><Link href="/" className="font-semibold tracking-[-0.02em] text-foreground">Muhammad Jamal<span className="text-accent">.</span></Link><Link href="/#projects" className="rounded-full border border-border bg-surface px-4 py-2 text-sm font-semibold text-foreground hover:bg-surface-raised">All projects</Link></nav></Container>
      </header>

      <main>
        <section className="relative isolate overflow-hidden pb-20 pt-16 sm:pb-28 sm:pt-24">
          <div className="hero-grid absolute inset-0 -z-10 opacity-60" aria-hidden="true" />
          <Container>
            <div className="max-w-5xl">
              <div className="flex flex-wrap gap-2"><span className="rounded-full border border-accent-soft bg-accent-subtle px-3 py-1.5 text-xs font-semibold text-accent-strong">Flagship research project</span><span className="rounded-full border border-border bg-surface px-3 py-1.5 text-xs font-semibold text-muted-foreground">Three-person academic team</span></div>
              <div className="mt-7"><Label>Applied AI, Data Science & Computer Vision</Label></div>
              <h1 className="mt-4 text-balance text-5xl font-semibold leading-[0.96] tracking-[-0.06em] text-foreground sm:text-7xl">UniSigner</h1>
              <p className="mt-6 max-w-4xl text-balance text-2xl font-medium leading-tight tracking-[-0.03em] text-foreground sm:text-4xl">Pakistani Sign Language to Urdu Translation Using Vision Transformers</p>
              <p className="mt-6 max-w-3xl text-pretty text-base leading-7 text-muted-foreground sm:text-lg sm:leading-8">A research framework spanning low-resource video-data acquisition, exploratory analysis, spatial-temporal deep learning, transparent evaluation, model optimization, and working application integration.</p>
              <dl className="mt-10 grid gap-4 border-t border-border pt-8 sm:grid-cols-2 lg:grid-cols-4">{[["Role", "Data Science & Applied AI Researcher | Co-developer"], ["Period", "February 2025 – 2026"], ["Institution", "Iqra University, Islamabad"], ["Programme", "BS Software Engineering"]].map(([term, detail]) => <div key={term}><dt className="text-xs font-bold uppercase tracking-[0.14em] text-accent">{term}</dt><dd className="mt-2 text-sm font-semibold leading-6 text-foreground">{detail}</dd></div>)}</dl>
            </div>
          </Container>
        </section>

        <section className="border-y border-border bg-surface py-20 sm:py-28"><Container><Heading label="Research overview" title="Accessibility research in a low-resource visual language." copy="UniSigner investigates isolated Pakistan Sign Language word recognition and maps predicted classes to Urdu labels. Suitable labelled PSL video corpora were scarce, so the work extended from custom data collection and analysis to model experiments and a functional mobile-integrated prototype."/><div className="mt-10 rounded-[var(--radius-card)] border border-border bg-background p-6 text-sm leading-7 text-muted-foreground"><strong className="text-foreground">Scope boundary:</strong> the current prototype recognizes eight isolated word classes. It is not unrestricted sentence-level translation or evidence of signer-independent real-world accuracy.</div></Container></section>

        <section className="py-20 sm:py-28"><Container><Heading label="Research achievements" title="Recorded results with methodological context."/><div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">{metrics.map(([value, label]) => <article key={label} className="rounded-[var(--radius-card)] border border-border bg-surface p-6"><p className="text-3xl font-semibold tracking-[-0.04em] text-foreground">{value}</p><p className="mt-3 text-sm leading-6 text-muted-foreground">{label}</p></article>)}</div><p className="mt-6 max-w-4xl text-sm leading-6 text-muted-foreground">Accuracy is 24 correct predictions across 32 held-out files, not a verified signer-independent result. Confidence is not accuracy. The parameter count reflects the documented reconstructed architecture, and 1–3 seconds was observed under variable network conditions rather than guaranteed as an SLA.</p></Container></section>

        <section className="border-y border-border bg-surface py-20 sm:py-28"><Container><Heading label="Dataset acquisition & engineering" title="A balanced, custom low-resource video corpus." copy="The team researched PSL resources, recorded local material, incorporated limited external reference material, defined the label taxonomy, categorized and validated videos, assessed class balance, and generated augmented variants for underrepresented classes."/><div className="mt-12 grid gap-8 lg:grid-cols-[1.1fr_0.9fr]"><div className="overflow-hidden rounded-[var(--radius-card)] border border-border bg-background"><table className="w-full text-left text-sm"><thead className="bg-surface-raised text-foreground"><tr><th className="p-4">Class</th><th className="p-4">Urdu label</th><th className="p-4 text-right">Samples</th></tr></thead><tbody>{classes.map(([name, urdu, count]) => <tr key={name} className="border-t border-border"><td className="p-4 font-medium text-foreground">{name}</td><td className="p-4 text-lg" lang="ur" dir="rtl">{urdu}</td><td className="p-4 text-right tabular-nums text-muted-foreground">{count}</td></tr>)}</tbody><tfoot className="border-t border-border font-semibold"><tr><td className="p-4" colSpan={2}>Total stored inventory</td><td className="p-4 text-right">200</td></tr></tfoot></table></div><div className="rounded-[var(--radius-card)] border border-border bg-background p-6"><h3 className="text-xl font-semibold tracking-[-0.03em] text-foreground">Stored dataset composition</h3><div role="img" aria-label="Stored dataset composition: 141 files without an aug prefix and 59 files with an explicit aug prefix" className="mt-8 overflow-hidden rounded-full bg-surface-raised"><div className="flex h-10 text-xs font-bold"><div className="flex items-center justify-center bg-accent text-accent-foreground" style={{width:"70.5%"}}>141 · 70.5%</div><div className="flex items-center justify-center bg-accent-soft text-foreground" style={{width:"29.5%"}}>59</div></div></div><p className="mt-6 text-sm leading-6 text-muted-foreground">The 59 explicitly augmented files represent 29.5% of stored inventory and a 41.84% expansion relative to 141 non-<code>aug_</code>-prefixed files. Non-prefixed does not necessarily mean independently recorded original material.</p></div></div></Container></section>

        <section className="py-20 sm:py-28"><Container><Heading label="Exploratory data analysis" title="Analysis before training shaped the experiments." copy="Work included data profiling, readability checks, metadata review, class distribution analysis, augmentation assessment, partition design, diagnostic analytics, and explicit evaluation of provenance limitations. Unsupported resolution, duration, and frame-rate distributions are intentionally not invented."/><div className="mt-12 grid gap-6 lg:grid-cols-2"><article className="rounded-[var(--radius-card)] border border-border bg-surface p-6 sm:p-8"><h3 className="text-xl font-semibold text-foreground">Stratified file-level partition</h3><div role="img" aria-label="Dataset split: 68 percent training, 16 percent validation, and 16 percent testing" className="mt-8 flex h-12 overflow-hidden rounded-full text-xs font-bold"><div className="flex items-center justify-center bg-accent text-white" style={{width:"68%"}}>Train 136</div><div className="flex items-center justify-center bg-accent-soft text-foreground" style={{width:"16%"}}>Val 32</div><div className="flex items-center justify-center bg-border-strong text-foreground" style={{width:"16%"}}>Test 32</div></div><p className="mt-5 text-sm leading-6 text-muted-foreground">Each class contributes 17 training, 4 validation, and 4 test files.</p></article><article className="rounded-[var(--radius-card)] border border-border bg-surface p-6 sm:p-8"><h3 className="text-xl font-semibold text-foreground">Validity boundary</h3><p className="mt-4 text-sm leading-7 text-muted-foreground">Partitioning was equal by class at file level. Source-group and signer identifiers were not comprehensively retained, so related augmented samples or the same signers may occur across partitions. This limits causal interpretation and signer-independent generalization.</p></article></div></Container></section>

        <section className="border-y border-border bg-surface py-20 sm:py-28"><Container><Heading label="Preprocessing & augmentation" title="From variable videos to normalized frame tensors."/><div role="img" aria-label="Video preprocessing pipeline from decoding through tensor and batch construction" className="mt-12 grid gap-3 sm:grid-cols-2 lg:grid-cols-5">{["Decode video","Extract frames","Crop & resize","Sample 30 frames","Normalize RGB","Reorder channels","Construct tensor","Prepare batch"].map((step,index)=><div key={step} className="relative rounded-[var(--radius-card)] border border-border bg-background p-5"><span className="text-xs font-bold text-accent">{String(index+1).padStart(2,"0")}</span><p className="mt-3 font-semibold text-foreground">{step}</p></div>)}</div><p className="mt-8 max-w-4xl text-sm leading-7 text-muted-foreground">Documented investigations included random cropping, rotation, color jitter, brightness variation, linguistically appropriate horizontal flipping, speed jitter, temporal trimming, and background/framing variation. The final model receives 30 RGB frames at 224 × 224. Individual transformation counts and parameters are not claimed because they were not verified.</p></Container></section>

        <section className="py-20 sm:py-28"><Container><Heading label="Experimental progression" title="Representation choices evolved through research." copy="Landmark representations were vulnerable to detection instability and omitted visual context. Full-frame models preserved richer evidence; smaller ViT patches were explored for finer spatial detail. This timeline records investigated approaches, not a claim that each later model universally outperformed the previous one."/><ol className="mt-12 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">{progression.map((item,index)=><li key={item} className="rounded-[var(--radius-card)] border border-border bg-surface p-5"><span className="text-xs font-bold tracking-[0.14em] text-accent">EXP {String(index+1).padStart(2,"0")}</span><p className="mt-3 font-semibold text-foreground">{item}</p></li>)}</ol></Container></section>

        <section className="border-y border-border bg-surface py-20 sm:py-28"><Container><Heading label="UniSignFormerV2" title="Spatial encoding per frame, then temporal learning across frames."/><div role="img" aria-label="UniSignFormerV2 architecture: video input to frame sampling, ViT spatial encoder, frame features, temporal positional embeddings, four-layer temporal transformer, attention pooling, classifier, and Urdu label" className="mt-12 grid gap-3 md:grid-cols-2 xl:grid-cols-4">{["Video input","30-frame sampling","ViT-Base/8 per frame","768-D frame features","Temporal positions","4-layer Transformer","Attention pooling","8-class Urdu output"].map((step,index)=><div key={step} className="rounded-[var(--radius-card)] border border-border bg-background p-5"><span className="text-xs font-bold text-accent">{String(index+1).padStart(2,"0")}</span><p className="mt-3 font-semibold text-foreground">{step}</p></div>)}</div><div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-5">{modelConfig.map(([term,value])=><div key={term} className="border-l-2 border-accent pl-4"><p className="text-xs font-semibold uppercase tracking-[0.12em] text-muted-foreground">{term}</p><p className="mt-1 font-semibold text-foreground">{value}</p></div>)}</div><p className="mt-8 max-w-4xl text-sm leading-7 text-muted-foreground">Each frame is encoded independently into spatial features; the 784 patch tokens belong to that frame’s spatial encoder. The model does not apply one global spatial-attention operation across all 23,520 clip patches.</p></Container></section>

        <section className="py-20 sm:py-28"><Container><Heading label="Training & evaluation" title="Transparent aggregate and class-level evidence." copy="The documented workflow used supervised multiclass learning, cross-entropy loss, AdamW, backpropagation, validation monitoring, checkpointing, GPU acceleration, regularization, and separate evaluation/inference modes. Unverified epochs, batch sizes, learning rates, and training times are omitted."/><div className="mt-12 grid gap-6 lg:grid-cols-2"><article className="rounded-[var(--radius-card)] border border-border bg-surface p-6 sm:p-8"><h3 className="text-xl font-semibold text-foreground">Class-level F1 score</h3><div className="mt-7"><Bars label="F1 scores by class" values={scores.map(([name,,,f1])=>({name,value:f1}))}/></div></article><article className="rounded-[var(--radius-card)] border border-border bg-surface p-6 sm:p-8"><h3 className="text-xl font-semibold text-foreground">Precision and recall</h3><div className="mt-7 space-y-5">{scores.map(([name,p,r])=><div key={name}><p className="mb-2 text-sm font-medium text-foreground">{name}</p><div className="grid gap-2"><div className="flex items-center gap-3"><span className="w-16 text-xs text-muted-foreground">Precision</span><div className="h-2 flex-1 rounded-full bg-surface-raised"><div className="h-2 rounded-full bg-accent" style={{width:`${p}%`}}/></div><span className="w-10 text-right text-xs">{p}%</span></div><div className="flex items-center gap-3"><span className="w-16 text-xs text-muted-foreground">Recall</span><div className="h-2 flex-1 rounded-full bg-surface-raised"><div className="h-2 rounded-full bg-accent-soft" style={{width:`${r}%`}}/></div><span className="w-10 text-right text-xs">{r}%</span></div></div></div>)}</div></article></div><p className="mt-6 max-w-4xl text-sm leading-7 text-muted-foreground">Water and Mother show the weakest F1 results, while No reached 100% within only four test files. The small test set, possible related samples, and incomplete signer provenance require caution. A confusion matrix is omitted because the original underlying matrix was not available for consistency checking.</p></Container></section>

        <section className="border-y border-border bg-surface py-20 sm:py-28"><Container><Heading label="Model optimization & edge AI" title="Compression succeeded; target-device execution did not."/><div className="mt-12 grid gap-6 lg:grid-cols-[0.9fr_1.1fr]"><article className="rounded-[var(--radius-card)] border border-border bg-background p-6 sm:p-8"><h3 className="text-xl font-semibold text-foreground">Exported model storage</h3><div className="mt-8 space-y-6"><Bars label="Model size comparison, FP32 435.82 megabytes and INT8 XNNPACK 110.51 megabytes" values={[{name:"FP32 · 435.82 MB",value:100},{name:"INT8 XNNPACK · 110.51 MB",value:25.36,color:"bg-accent-soft"}]}/></div><p className="mt-6 text-sm leading-6 text-muted-foreground">325.31 MB smaller, a 74.64% reduction and approximately 3.94× compression.</p></article><article className="rounded-[var(--radius-card)] border border-border bg-background p-6 sm:p-8"><h3 className="text-xl font-semibold text-foreground">Engineering finding</h3><p className="mt-4 text-sm leading-7 text-muted-foreground">The team investigated PyTorch ExecuTorch, XNNPACK, graph export, numerical precision, INT8 quantization, operator compatibility, and activation-memory demands for a Vivo Y04. Reducing stored size did not resolve runtime and activation-memory constraints, so the model could not execute reliably on the target device. That failure motivated a cloud-assisted inference architecture rather than a false on-device success claim.</p></article></div></Container></section>

        <section className="py-20 sm:py-28"><Container><Heading label="GPU-accelerated inference" title="A functional, temporary cloud-assisted research prototype."/><div role="img" aria-label="Cloud inference architecture from Flutter camera through secure WebSocket and Cloudflare Tunnel to FastAPI, PyTorch CUDA, and Urdu response" className="mt-12 grid gap-3 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6">{["Flutter camera","Secure WebSocket","Cloudflare Tunnel","FastAPI / Uvicorn","PyTorch CUDA · T4","Urdu result"].map((step,index)=><div key={step} className="rounded-[var(--radius-card)] border border-border bg-surface p-5"><span className="text-xs font-bold text-accent">{String(index+1).padStart(2,"0")}</span><p className="mt-3 font-semibold text-foreground">{step}</p></div>)}</div><div className="mt-8 grid gap-4 md:grid-cols-2"><p className="rounded-[var(--radius-card)] border border-border bg-surface p-6 text-sm leading-7 text-muted-foreground">The application streamed camera frames, handled asynchronous structured JSON predictions, monitored service health, and surfaced connection failures. Recorded CUDA inference was approximately 625 ms; observed result display was 1–3 seconds under variable network conditions.</p><p className="rounded-[var(--radius-card)] border border-border bg-surface p-6 text-sm leading-7 text-muted-foreground">Google Colab GPU hosting and Cloudflare tunneling made the research workflow functional, but temporary infrastructure is not permanent hosting, commercial availability, guaranteed uptime, or a currently accessible live service.</p></div></Container></section>

        <section className="border-y border-border bg-surface py-20 sm:py-28"><Container><div className="grid gap-12 lg:grid-cols-2 lg:gap-20"><div><Heading label="Mobile integration" title="Software supporting the research workflow."/><ul className="mt-8 grid gap-3 sm:grid-cols-2">{["Camera recognition","Urdu label output","Supported-sign dictionary","Recognition history","Onboarding","Settings","Backend health monitoring","Connection & error handling"].map(item=><li key={item} className="rounded-[var(--radius-card)] border border-border bg-background p-4 text-sm font-medium text-foreground">{item}</li>)}</ul></div><div><Heading label="My contribution" title="Individual work separated from team achievements."/><p className="mt-6 text-base leading-8 text-muted-foreground">As a Data Science and Applied AI Researcher within a three-person team, I focused on data acquisition, dataset development, exploratory analysis, preprocessing, machine-learning experimentation, quantitative evaluation, and evidence-driven decisions.</p><p className="mt-4 text-base leading-8 text-muted-foreground">I contributed to dataset organization, class-distribution analysis, balancing, video-metadata analysis, augmentation assessment, performance interpretation, diagnostic error analysis, and research documentation. The broader team developed the spatial-temporal architecture, optimization experiments, cloud inference infrastructure, and Flutter integration.</p></div></div></Container></section>

        <section className="py-20 sm:py-28"><Container><Heading label="Academic research" title="Scientific documentation alongside working software." copy="The project included literature review, research-gap identification, experimental methodology, comparative architecture investigation, quantitative evaluation, diagnostic analysis, requirements documentation, technical diagrams, report preparation, academic presentation and defense, and preparation of an IEEE-format conference manuscript for publication consideration. No acceptance, publication, presentation, DOI, or IEEE endorsement is claimed."/><div className="mt-12 overflow-hidden rounded-[var(--radius-card)] border border-border"><div className="grid bg-surface-raised p-4 text-sm font-semibold text-foreground md:grid-cols-2"><span>Challenge</span><span>Research or engineering finding</span></div>{challenges.map(([challenge,finding])=><div key={challenge} className="grid gap-2 border-t border-border bg-surface p-4 text-sm md:grid-cols-2"><span className="font-semibold text-foreground">{challenge}</span><span className="leading-6 text-muted-foreground">{finding}</span></div>)}</div></Container></section>

        <section className="border-y border-border bg-surface py-20 sm:py-28"><Container><Heading label="Future research roadmap" title="Planned investigations, clearly separated from completed work."/><ul className="mt-12 grid gap-3 md:grid-cols-2">{roadmap.map((item,index)=><li key={item} className="flex gap-4 rounded-[var(--radius-card)] border border-border bg-background p-5"><span className="text-xs font-bold text-accent">F{String(index+1).padStart(2,"0")}</span><span className="text-sm leading-6 text-muted-foreground">{item}</span></li>)}</ul></Container></section>

        <section className="py-20 sm:py-28"><Container><div className="rounded-[calc(var(--radius-card)+0.5rem)] bg-foreground px-6 py-12 text-background sm:px-10 sm:py-16"><Label>Conclusion</Label><h2 className="mt-4 max-w-4xl text-3xl font-semibold tracking-[-0.04em] sm:text-5xl">A complete research lifecycle, with the uncertainty left visible.</h2><p className="mt-5 max-w-3xl text-base leading-8 text-background/70">UniSigner demonstrates work across data acquisition, analysis, model design, evaluation, optimization, deployment trade-offs, and application integration. Its strongest evidence is not a perfect benchmark; it is a technically honest record of building, measuring, diagnosing, and improving an applied AI system in a low-resource domain.</p><div className="mt-8"><Button href="/#projects" variant="secondary">Back to flagship projects <span className="ml-1.5" aria-hidden="true">←</span></Button></div></div></Container></section>
      </main>
      <Footer />
    </>
  );
}

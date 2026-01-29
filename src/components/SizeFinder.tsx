import { useState } from "react";
import { Ruler, Check, Shirt } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Slider } from "@/components/ui/slider";

interface SizeFinderProps {
  open: boolean;
  onClose: () => void;
}

type FitResult = "ajustada" | "perfecta" | "holgada";

interface FitInfo {
  result: FitResult;
  title: string;
  description: string;
  icon: string;
}

export const SizeFinder = ({ open, onClose }: SizeFinderProps) => {
  const [step, setStep] = useState(1);
  const [sex, setSex] = useState<"M" | "F" | "">("");
  const [height, setHeight] = useState([170]);
  const [weight, setWeight] = useState([70]);
  const [fitResult, setFitResult] = useState<FitInfo | null>(null);

  const calculateFit = () => {
    const h = height[0];
    const w = weight[0];
    const bmi = w / ((h / 100) ** 2);
    
    let result: FitResult;
    
    // La talla única equivale aproximadamente a una M-L
    // Calculamos cómo le quedaría basándonos en sus medidas
    if (sex === "F") {
      // Mujeres: la talla única les quedará más holgada en general
      if (bmi < 20 && h < 165) {
        result = "holgada";
      } else if (bmi < 25 && h < 175) {
        result = "perfecta";
      } else {
        result = "ajustada";
      }
    } else {
      // Hombres
      if (bmi < 20 && h < 170) {
        result = "holgada";
      } else if (bmi >= 20 && bmi < 26 && h >= 165 && h <= 185) {
        result = "perfecta";
      } else if (bmi >= 26 || h > 185) {
        result = "ajustada";
      } else {
        result = "perfecta";
      }
    }

    const fitInfoMap: Record<FitResult, FitInfo> = {
      ajustada: {
        result: "ajustada",
        title: "Te quedará ajustada",
        description: "La camiseta se adaptará bien a tu cuerpo, con un estilo más deportivo y ceñido. Ideal si prefieres un look atlético.",
        icon: "💪"
      },
      perfecta: {
        result: "perfecta",
        title: "¡Te quedará perfecta!",
        description: "La talla única se adapta muy bien a tu complexión. Tendrás un ajuste cómodo y versátil para cualquier ocasión.",
        icon: "✨"
      },
      holgada: {
        result: "holgada",
        title: "Te quedará holgada",
        description: "Tendrás un estilo más relajado y casual. Perfecta para mayor libertad de movimiento y comodidad.",
        icon: "😎"
      }
    };

    setFitResult(fitInfoMap[result]);
    setStep(3);
  };

  const handleReset = () => {
    setStep(1);
    setSex("");
    setHeight([170]);
    setWeight([70]);
    setFitResult(null);
  };

  const handleClose = () => {
    handleReset();
    onClose();
  };

  return (
    <Dialog open={open} onOpenChange={handleClose}>
      <DialogContent className="sm:max-w-md bg-card border-border">
        <DialogHeader>
          <DialogTitle className="font-display text-xl flex items-center gap-2">
            <Shirt className="w-5 h-5 text-primary" />
            ¿Es para mí?
          </DialogTitle>
        </DialogHeader>

        <div className="py-4">
          {/* Progress indicator */}
          <div className="flex gap-2 mb-8">
            {[1, 2, 3].map((s) => (
              <div
                key={s}
                className={`h-1 flex-1 rounded-full transition-colors ${
                  s <= step ? "bg-primary" : "bg-secondary"
                }`}
              />
            ))}
          </div>

          {/* Step 1: Sex */}
          {step === 1 && (
            <div className="space-y-6">
              <p className="text-muted-foreground">¿Cuál es tu sexo biológico?</p>
              <RadioGroup value={sex} onValueChange={(v) => setSex(v as "M" | "F")}>
                <div className="grid grid-cols-2 gap-4">
                  <Label
                    htmlFor="male"
                    className={`flex items-center justify-center p-6 rounded-xl border cursor-pointer transition-all ${
                      sex === "M" ? "border-primary bg-primary/10" : "border-border hover:border-primary/50"
                    }`}
                  >
                    <RadioGroupItem value="M" id="male" className="sr-only" />
                    <span className="font-medium">Masculino</span>
                  </Label>
                  <Label
                    htmlFor="female"
                    className={`flex items-center justify-center p-6 rounded-xl border cursor-pointer transition-all ${
                      sex === "F" ? "border-primary bg-primary/10" : "border-border hover:border-primary/50"
                    }`}
                  >
                    <RadioGroupItem value="F" id="female" className="sr-only" />
                    <span className="font-medium">Femenino</span>
                  </Label>
                </div>
              </RadioGroup>
              <Button 
                onClick={() => setStep(2)} 
                disabled={!sex}
                className="w-full bg-primary text-primary-foreground hover:bg-gold-light"
              >
                Continuar
              </Button>
            </div>
          )}

          {/* Step 2: Height & Weight */}
          {step === 2 && (
            <div className="space-y-6">
              <div>
                <p className="text-muted-foreground mb-4">¿Cuál es tu altura?</p>
                <div className="space-y-4">
                  <div className="text-center">
                    <span className="font-display text-4xl font-bold text-gradient-gold">{height[0]}</span>
                    <span className="text-muted-foreground ml-2">cm</span>
                  </div>
                  <Slider
                    value={height}
                    onValueChange={setHeight}
                    min={140}
                    max={210}
                    step={1}
                    className="[&_[role=slider]]:bg-primary"
                  />
                  <div className="flex justify-between text-sm text-muted-foreground">
                    <span>140 cm</span>
                    <span>210 cm</span>
                  </div>
                </div>
              </div>

              <div>
                <p className="text-muted-foreground mb-4">¿Cuál es tu peso?</p>
                <div className="space-y-4">
                  <div className="text-center">
                    <span className="font-display text-4xl font-bold text-gradient-gold">{weight[0]}</span>
                    <span className="text-muted-foreground ml-2">kg</span>
                  </div>
                  <Slider
                    value={weight}
                    onValueChange={setWeight}
                    min={40}
                    max={150}
                    step={1}
                    className="[&_[role=slider]]:bg-primary"
                  />
                  <div className="flex justify-between text-sm text-muted-foreground">
                    <span>40 kg</span>
                    <span>150 kg</span>
                  </div>
                </div>
              </div>

              <div className="flex gap-3">
                <Button variant="outline" onClick={() => setStep(1)} className="flex-1">
                  Atrás
                </Button>
                <Button onClick={calculateFit} className="flex-1 bg-primary text-primary-foreground hover:bg-gold-light">
                  Ver cómo me queda
                </Button>
              </div>
            </div>
          )}

          {/* Step 3: Result */}
          {step === 3 && fitResult && (
            <div className="text-center space-y-6">
              <div className="w-24 h-24 mx-auto rounded-full bg-primary/20 flex items-center justify-center">
                <span className="text-5xl">{fitResult.icon}</span>
              </div>
              <div>
                <span className="font-display text-2xl font-bold text-gradient-gold">{fitResult.title}</span>
              </div>
              <p className="text-muted-foreground">
                {fitResult.description}
              </p>
              <div className="p-4 rounded-lg bg-primary/10 border border-primary/30">
                <div className="flex items-center justify-center gap-2 mb-2">
                  <Check className="w-5 h-5 text-primary" />
                  <span className="font-medium text-foreground">Talla única</span>
                </div>
                <p className="text-sm text-muted-foreground">
                  Diseño versátil que se adapta a diferentes cuerpos
                </p>
              </div>
              <div className="flex gap-3">
                <Button variant="outline" onClick={handleReset} className="flex-1">
                  Calcular de nuevo
                </Button>
                <Button onClick={handleClose} className="flex-1 bg-primary text-primary-foreground hover:bg-gold-light">
                  ¡Entendido!
                </Button>
              </div>
            </div>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
};
